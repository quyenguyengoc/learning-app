class Vocabulary < ApplicationRecord
  include LevelAble, ExampleAble

  VOCAB_FORMS = [
    { noun: 'Noun', verb: 'Verb', adj: 'Adjective', adv: 'Adverb', prep: 'Prepositions' }
  ]

  has_many :refers, class_name: 'VocabularyRefer', foreign_key: :vocab_id, dependent: :destroy
  has_many :refer_vocabs, class_name: 'Vocabulary', through: :vocab_relas, source: :refer_vocab, dependent: :destroy
  has_one  :image, as: :imageable, dependent: :destroy

  serialize :kanji_ids
  serialize :vocab_form_ids

  def as_json
    {
      id: id
    }
  end
end
