# frozen_string_literal: true

FactoryBot.define do
  factory :music do
    user { nil }
    band { nil }
    title { Faker::Music::RockBand.song }
    bookmarks_count { 1 }
    score { 'MyString' }
    trait :title_empty do
      title { '' }
    end
  end
end
