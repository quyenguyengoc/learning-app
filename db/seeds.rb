require 'csv'

user = {
  username: 'quyennn',
  name: 'QuyenNN',
  password: '123456',
  password_confirmation: '123456',
  role: 0
}

puts "create user"
User.create(user)

kanji_data = File.read(Rails.root.join('db', 'data', 'kanji_basic_lnl.csv'))
CSV.parse(kanji_data, headers: true).each do |row|
  kanji_data = {
    kanji_text: row['kanji_text'],
    radical:    row['radical'].split('; '),
    kanji_pron: row['kanji_pron'].split('; '),
    on_pron:    row['on_pron'].split('; '),
    kun_pron:   row['kun_pron'].split('; '),
    mean:       row['mean'],
    memo:       row['memo'].split('; '),
    level_id:   row['level_id']
  }
  kanji = Kanji.create(kanji_data)
  puts "create kanji #{kanji.kanji_text}"
  example_ids = row['examples'].split('; ').map do |ex|
    example = Example.find_or_initialize_by(content: ex)
    example.save
    { example_id: example.id }
  end
  kanji.examples.create(example_ids)
end

puts "create lesson"
User.all.each do |user|
  5.times do
    lesson = user.lessons.create(topics: [:kanji], name: Faker::Games::Pokemon.name)
    Kanji.order('RAND()').limit(10).each do |k|
      k.lessons.create(lesson: lesson)
    end
  end
end
