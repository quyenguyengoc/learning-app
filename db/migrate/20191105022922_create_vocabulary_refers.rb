class CreateVocabularyRefers < ActiveRecord::Migration[5.2]
  def change
    create_table :vocabulary_refers do |t|
      t.integer :vocab_id
      t.integer :refer_vocab_id
      t.string :refer_type

      t.timestamps
    end
  end
end
