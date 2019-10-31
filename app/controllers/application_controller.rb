class ApplicationController < ActionController::API
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
end
