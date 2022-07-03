FactoryBot.define do
  factory :music do
    user { nil }
    band { nil }
    title { Faker::Music::RockBand.song }
    bookmarks_count { 1 }
    score { "MyString" }
  end

  factory :music_title_empty, class: Music do
    user { nil }
    band { nil }
    title { "" }
    bookmarks_count { 1 }
    score { "MyString" }
  end
end
