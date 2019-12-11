class ExampleAble < ApplicationRecord
  belongs_to :exampleable, polymorphic: true
  belongs_to :example
end
