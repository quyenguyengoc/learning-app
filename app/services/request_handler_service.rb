class RequestHandlerService
  require './lib/token/json_web_token.rb'
  require './lib/token/exception_handler.rb'

  attr_reader :headers

  def initialize(headers = {})
    @headers = headers
  end

  def token_authenticate
    begin
      User.find(token[:user_id]) if token
    rescue => e
      raise Token::ExceptionHandler::InvalidToken, e.message
    end
  end

  private

  def token
    Token::JsonWebToken::decode(http_auth_header)
  end

  def http_auth_header
    begin
      return headers['Authorization'].split(' ').last if headers['Authorization'].present?
    rescue => e
      raise Token::ExceptionHandler::MissingToken, e.message
    end
  end
end
