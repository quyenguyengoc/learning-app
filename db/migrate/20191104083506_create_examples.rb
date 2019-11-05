class CreateExamples < ActiveRecord::Migration[5.2]
  def change
    create_table :examples do |t|
      t.text :content
      t.text :mean
      t.text :target_ids
      t.string :target_class

      t.timestamps
    end
  end
end
