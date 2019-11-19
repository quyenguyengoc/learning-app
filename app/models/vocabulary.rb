class Vocabulary < ApplicationRecord
  include LevelAble, ExampleAble

  VOCAB_FORMS = { noun: 'Noun', verb: 'Verb', adj: 'Adjective', adv: 'Adverb', prep: 'Prepositions' }

  has_many   :lessons, as: :topicable, dependent: :destroy
  has_many   :active_refers, class_name: 'VocabularyRefer', foreign_key: :vocab_id, dependent: :destroy
  has_many   :refers, through: :active_refers, source: :refer_vocab
  has_one    :image, as: :imageable, dependent: :destroy

  serialize :kanjis
  serialize :kanji_ids

  def as_json
    {
      id: id,
      kana_text: kana_text,
      mean: mean,
      vocab_form: VOCAB_FORMS[vocab_form]
    }
  end
end
