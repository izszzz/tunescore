# frozen_string_literal: true

FactoryBot.define do
  factory :band do
    name { Faker::Music::RockBand.name }
    bookmarks_count { 1 }

    trait :name_empty do
      name { '' }
    end
  end
end
