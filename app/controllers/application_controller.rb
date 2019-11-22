class ApplicationController < ActionController::API
  before_action :token_authorize
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

  def present_validation(key, required_attributes)
    @invalid = false
    @errors ||= {}
    required_attributes.each do |attr|
      @errors[:attributes] ||= {}
      @errors[:attributes][attr] ||= []
      @invalid = params[key][attr].blank? unless @invalid
      @errors[:attributes][attr] << "#{attr} is required." if params[key][attr].blank?
    end
  end

  def json_response(json)
    render json: json, status: :ok
  end

  def token_authorize
    begin
      @current_user ||= RequestHandlerService.new(self.request.headers).token_authenticate
    rescue
      json_response({ status: :unauthorized, data: nil })
    end
  end

  def record_not_found
    json_response({ status: :not_found, data: nil })
  end
end
