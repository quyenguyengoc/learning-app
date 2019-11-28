class Api::LessonsController < ApplicationController

  def index
    json_response( { status: :ok, data: load_lessons } )
  end

  def show
    json_response( { status: :ok, data: load_lesson } )
  end

  private
  def load_lessons
    {
      lessons: @current_user.lessons.send(:as_json, [:id, :name, :percent])
    }
  end

  def load_lesson
    {
      lesson: @current_user.lessons.find(params[:id]).send(:as_json)
    }
  end
end
