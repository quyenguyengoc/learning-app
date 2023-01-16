class CreateUserLessons < ActiveRecord::Migration[5.2]
  def change
    create_table :user_lessons do |t|
      t.string :name
      t.integer :user_id
      t.integer :percent, default: 0
      t.string :topics

      t.timestamps
    end
  end
end
