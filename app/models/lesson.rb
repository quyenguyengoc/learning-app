class Lesson < ApplicationRecord
  include LevelAble

  has_many :vocab_relas, class_name: 'VocabLessonRela', foreign_key: :lesson_id, dependent: :destroy
  has_many :vocabs, through: :vocab_relas, dependent: :destroy
end
