class CreateVocabLessonRelas < ActiveRecord::Migration[5.2]
  def change
    create_table :vocab_lesson_relas do |t|
      t.integer :vocab_id
      t.integer :lesson_id

      t.timestamps
    end
  end
end
