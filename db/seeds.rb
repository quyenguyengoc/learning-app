# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = {
  username: 'quyennn',
  name: 'QuyenNN',
  password: '123456',
  password_confirmation: '123456',
  role: 0
}

puts "create user"
User.create(user)

puts "create vocabs"

vocabs = [
  {
    kana_text: 'みる',
    kanjis: ['診る', '見る'],
    kanji_ids: ['診', '見'],
    vocab_form: :verb,
    vocab_form_details: ['Tha động từ', 'V2'],
    mean: 'nhìn, kiểm tra, khám',
    level_id: 4
  },
  {
    kana_text: 'さがす',
    kanjis: ['探す', '捜す'],
    kanji_ids: ['探', '捜'],
    vocab_form: :verb,
    vocab_form_details: ['Tha động từ', 'V1'],
    mean: 'tìm kiếm',
    level_id: 4
  }
]

vocabs.each do |v|
  Vocabulary.create! v
end
