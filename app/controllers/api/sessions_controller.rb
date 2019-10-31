class Api::SessionsController < ApplicationController

  def create
    begin
      key = :login
      required_attributes = %i(username password)
      present_validation(key, required_attributes)
      raise InvalidDataError if @invalid
      auth = AuthenticationService.new(params[:login][:username], params[:login][:password])
      res = {
        status: :ok,
        data: {
          token: auth.token,
          username: auth.user.username
        }
      }
    rescue InvalidDataError
      res = {
        status: :unauthorized,
        data: {
          message: @errors
        }
      }
    rescue
      res = {
        status: :unauthorized,
        data: {
          message: 'Username or password is invalid!'
        }
      }
    end
    json_response(res)
  end
end
