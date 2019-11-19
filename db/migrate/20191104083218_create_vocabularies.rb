class CreateVocabularies < ActiveRecord::Migration[5.2]
  def change
    create_table :vocabularies do |t|
      t.string :kana_text
      t.text :kanjis
      t.text :kanji_ids
      t.string :vocab_form
      t.text :vocab_form_details
      t.string :mean
      t.integer :level_id

      t.timestamps
    end
  end
end
