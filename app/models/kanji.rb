class Kanji < ApplicationRecord
  include LevelAble, ExampleAble

  has_many :lessons, as: :topicable, dependent: :destroy
end
