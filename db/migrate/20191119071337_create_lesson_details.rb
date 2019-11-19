class CreateLessonDetails < ActiveRecord::Migration[5.2]
  def change
    create_table :lesson_details do |t|
      t.integer :user_lesson_id
      t.integer :topicable_id
      t.integer :topicable_type

      t.timestamps
    end
  end
end
