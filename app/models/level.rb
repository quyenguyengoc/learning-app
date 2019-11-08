class Level < ApplicationRecord
  include LevelAble

  def readonly?
    true
  end
end
