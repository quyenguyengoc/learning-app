class Api::LessonsController < ApplicationController

  def index
    json_response( { status: :ok, data: { lessons: @current_user.lessons.send(:as_json, [:id, :name, :percent]) } } )
  end

  def show
    json_response( { status: :ok, data: nil } )
  end
end
