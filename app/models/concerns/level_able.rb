module LevelAble
  extend ActiveSupport::Concern

  included do
    scope :_level_ids, -> (level_ids) { where(level_id: level_ids) }

    def label
      "N#{self.level}"
    end
  end

  class_methods do
    def levels
      [*1..5].reverse.map do |level|
        {
          level_id: level,
          label: "N#{level}"
        }
      end
    end

    def level(level)
      {
        level_id: level,
        label: "N#{level}"
      }
    end
  end
end
