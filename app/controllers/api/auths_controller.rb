class Api::AuthsController < ApplicationController

  def show
    status = :ok
    begin
      request = RequestHandlerService.new(self.request.headers).token_authenticate
    rescue
      status = :unauthorized
    end
    res = { status: status, data: request }
    json_response(res)
  end
end
