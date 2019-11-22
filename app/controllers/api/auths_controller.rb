class Api::AuthsController < ApplicationController
  def show
    json_response({ status: :ok, data: @current_user })
  end
end
