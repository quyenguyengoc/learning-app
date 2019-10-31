module Token::ExceptionHandler
  extend ActiveSupport::Concern
  class AuthenticationError < StandardError; end
  class MissingToken < StandardError; end
  class InvalidToken < StandardError; end

  included do
    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity
    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ExceptionHandler::AuthenticationError, with: :unauthorized_request
    rescue_from ExceptionHandler::MissingToken, with: :unprocessable_entity
    rescue_from ExceptionHandler::InvalidToken, with: :unprocessable_entity
  end

  private

  def unprocessable_entity(message)
    {
      message: e.messsage,
      status: :unprocessable_entity
    }
  end

  def not_found(message)
    {
      message: e.messsage,
      status: :not_found
    }
  end

  def unauthorized_request(message)
    {
      message: e.messsage,
      status: :unauthorized_request
    }
  end
end
