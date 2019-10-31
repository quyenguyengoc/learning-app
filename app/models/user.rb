class User < ApplicationRecord
  has_secure_password

  def self.authenticate(username, password)
    User.find_by(username: username)&.authenticate(password)
  end
end
