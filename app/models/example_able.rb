class ExampleAble < ApplicationRecord
  belongs_to :exampleable, polymorphic: true
end
