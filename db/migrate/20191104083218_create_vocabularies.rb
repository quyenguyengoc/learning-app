class CreateVocabularies < ActiveRecord::Migration[5.2]
  def change
    create_table :vocabularies do |t|
      t.string :kana_text
      t.string :roma_text
      t.string :kanji
      t.text :kanji_ids
      t.integer :alpha_type
      t.text :vocab_form_ids
      t.text :refer_ids
      t.string :mean
      t.integer :level_id

      t.timestamps
    end
  end
end
