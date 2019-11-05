class CreateVocabularies < ActiveRecord::Migration[5.2]
  def change
    create_table :vocabularies do |t|
      t.string :hira_text
      t.string :kata_text
      t.text :roma_text
      t.text :kanji
      t.text :kanji_ids
      t.integer :alpha_type
      t.text :vocab_form_ids
      t.text :refer_ids
      t.string :mean

      t.timestamps
    end
  end
end
