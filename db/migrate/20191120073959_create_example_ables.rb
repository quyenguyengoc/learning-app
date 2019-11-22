class CreateExampleAbles < ActiveRecord::Migration[5.2]
  def change
    create_table :example_ables do |t|
      t.integer :example_id
      t.integer :exampleable_id
      t.string :exampleable_type

      t.timestamps
    end
  end
end
