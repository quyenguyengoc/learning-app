class AuthenticationService
  require './lib/token/json_web_token.rb'
  require './lib/token/exception_handler.rb'

  attr_accessor :token, :user

  def initialize(username, password)
    load_user(username, password)
    token_generate
  end

  private

  def token_generate
    begin
      @token ||= Token::JsonWebToken::encode(user_id: @user.id)
    rescue => e
      raise Token::ExceptionHandler::AuthenticationError, e.message
    end
  end

  def load_user(username, password)
    @user ||= User.authenticate(username, password)
    raise ActiveRecord::RecordNotFound unless @user
  end

end
