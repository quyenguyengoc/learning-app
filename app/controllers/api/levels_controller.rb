class Api::LevelsController < ApplicationController

  def index
    json_response( { status: :ok, data: { levels: Level.levels } } )
  end

  def show
    json_response( { status: :ok, data: load_data } )
  end

  private

  def level
    @level ||= params[:id].to_i
    raise ActiveRecord::RecordNotFound unless [*1..5].include?(@level)
  end

  def load_data
    level
    {
      level: Level.level(@level),
      vocabs: Vocabulary._level_ids(@level),
      kanjis: Kanji._level_ids(@level),
      grammar: []
    }
  end
end