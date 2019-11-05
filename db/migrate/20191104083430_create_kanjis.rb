class CreateKanjis < ActiveRecord::Migration[5.2]
  def change
    create_table :kanjis do |t|
      t.string :kanji_text
      t.string :radical
      t.string :on_pron
      t.string :kun_pron
      t.integer :level_id
      t.text :mean

      t.timestamps
    end
  end
end
