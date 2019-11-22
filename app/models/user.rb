class User < ApplicationRecord
  has_secure_password

  has_many :lessons, class_name: 'UserLesson'
  has_many :lesson_details, through: :lessons

  def self.authenticate(username, password)
    User.find_by(username: username)&.authenticate(password)
  end
end
