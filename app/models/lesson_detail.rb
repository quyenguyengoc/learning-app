class LessonDetail < ApplicationRecord
  include JsonAble

  DEFAULT_ATTRS = [:id, :step]

  belongs_to :topicable, polymorphic: true
  belongs_to :lesson, class_name: 'UserLesson', foreign_key: :user_lesson_id

  enum step: [:one, :two, :three]

  scope :_topicable_type, -> (type) {
    where(topicable_type: type)
  }

  def with_topic
    self.as_json.merge({
      topic: topicable.as_json
    })
  end
end
