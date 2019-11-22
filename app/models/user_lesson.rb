class UserLesson < ApplicationRecord
  include JsonAble

  DEFAULT_ATTRS = [:id, :name, :percent, :detail]
  TOPICS = {
    kanji: 'Kanji',
    vocab: 'Vocabulary'
  }

  has_many   :lesson_details
  belongs_to :user

  serialize :topics

  def detail
    Hash[self.topics.map {|topic| [topic, lesson_details.includes(:topicable)._topicable_type(TOPICS[topic]).map(&:with_topic)]}]
  end
end


