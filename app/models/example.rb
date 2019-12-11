class Example < ApplicationRecord
  include JsonAble

  DEFAULT_ATTRS = [:id, :content, :mean]

  has_many :example_ables, dependent: :destroy
end
