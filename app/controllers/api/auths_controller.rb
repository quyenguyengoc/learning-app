class Api::AuthsController < ApplicationController
  def show
    json_response({ status: :ok, data: @request })
  end
end
