class VocabularyRefer < ApplicationRecord
  belongs_to :vocab, class_name: 'Vocabulary'
  belongs_to :refer_vocab, class_name: 'Vocabulary'
end
