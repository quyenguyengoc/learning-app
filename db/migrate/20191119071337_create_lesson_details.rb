class CreateLessonDetails < ActiveRecord::Migration[5.2]
  def change
    create_table :lesson_details do |t|
      t.integer :user_lesson_id
      t.integer :topicable_id
      t.string :topicable_type
      t.integer :step, default: 0

      t.timestamps
    end
  end
end
