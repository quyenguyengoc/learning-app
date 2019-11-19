class CreateUserLessons < ActiveRecord::Migration[5.2]
  def change
    create_table :user_lessons do |t|
      t.integer :user_id
      t.integer :level_id
      t.integer :percent
      t.string :topics

      t.timestamps
    end
  end
end
