class Kanji < ApplicationRecord
  include LevelAble, JsonAble

  DEFAULT_ATTRS = [:id, :kanji_text, :radical, :kanji_pron, :on_pron, :kun_pron, :mean, :memo]

  has_many :lessons, class_name: 'LessonDetail', as: :topicable, dependent: :destroy
  has_many :examples, class_name: 'ExampleAble', as: :exampleable, dependent: :destroy

  serialize :radical
  serialize :kanji_pron
  serialize :kun_pron
  serialize :on_pron
  serialize :memo
end
