module LevelAble
  include ActiveSupport::Concern
  LEVELS = [1, 2, 3, 4, 5]

  def label
    "N#{LEVELS[self.level_id - 1]}"
  end
end
