class CreateExamples < ActiveRecord::Migration[5.2]
  def change
    create_table :examples do |t|
      t.text :content
      t.text :mean

      t.timestamps
    end
  end
end
