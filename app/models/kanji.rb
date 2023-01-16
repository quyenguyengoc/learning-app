class Kanji < ApplicationRecord
  include LevelAble, JsonAble

  DEFAULT_ATTRS = [:id, :kanji_text, :radical, :kanji_pron, :on_pron, :kun_pron, :mean, :memo, :examples]

  has_many :lessons, class_name: 'LessonDetail', as: :topicable, dependent: :destroy
  has_many :example_ables, as: :exampleable, dependent: :destroy
  has_many :examples, through: :example_ables, source: :example

  serialize :radical
  serialize :kanji_pron
  serialize :kun_pron
  serialize :on_pron
  serialize :memo
end
