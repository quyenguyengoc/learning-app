class VocabLessonRela < ApplicationRecord
  belongs_to :lesson
  belongs_to :vocabulary
end