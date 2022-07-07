# frozen_string_literal: true

FactoryBot.define do
  factory :album do
    title { Faker::Music.album }
    bookmarks_count { 1 }
    trait :title_empty do
      title { '' }
    end
  end
end
