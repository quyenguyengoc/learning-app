class CreateKanjis < ActiveRecord::Migration[5.2]
  def change
    create_table :kanjis do |t|
      t.string :kanji_text
      t.string :radical
      t.string :kanji_pron
      t.string :on_pron
      t.string :kun_pron
      t.text :mean
      t.string :memo
      t.integer :level_id

      t.timestamps
    end
  end
end
