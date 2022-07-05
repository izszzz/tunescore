FactoryBot.define do
  factory :album do
    title { Faker::Music.album }
    bookmarks_count { 1 }
  end
end
