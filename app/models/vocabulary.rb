class Vocabulary < ApplicationRecord
  include ExampleAble

  WORD_FORMS = [
    { noun: 'Noun', verb: 'Verb', adj: 'Adjective', adv: 'Adverb' }
  ]

  has_many :lesson_relas, class_name: 'VocabLessonRela', foreign_key: :vocab_id, dependent: :destroy
  has_many :lessons, through: :vocab_relas, dependent: :destroy
  has_many :refers, class_name: 'VocabularyRefer', foreign_key: :vocab_id, dependent: :destroy
  has_many :refer_vocabs, class_name: 'Vocabulary', through: :vocab_relas, source: :refer_vocab, dependent: :destroy
  has_one  :image, as: :imageable, dependent: :destroy

  serialize :kanji_ids
  serialize :vocab_form_ids

  enum alpha_types: [:hira, :kata]
end
