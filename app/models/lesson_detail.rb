class LessonDetail < ApplicationRecord
  belongs_to :topicable, polymorphic: true
  belongs_to :lesson
end
