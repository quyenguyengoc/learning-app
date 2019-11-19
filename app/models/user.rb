class User < ApplicationRecord
  has_secure_password

  has_many :user_lessons
  has_many :lesson_details, through: :user_lessons

  def self.authenticate(username, password)
    User.find_by(username: username)&.authenticate(password)
  end
end
