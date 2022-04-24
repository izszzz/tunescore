FactoryBot.define do
  factory :music do
    user { nil }
    band { nil }
    title { "MyString" }
    bookmarks_count { 1 }
    score { "MyString" }
  end
end
