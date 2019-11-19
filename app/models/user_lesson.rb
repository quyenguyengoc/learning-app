class UserLesson < ApplicationRecord
  include LevelAble

  has_many   :lesson_details
  belongs_to :user
end
