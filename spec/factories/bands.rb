# frozen_string_literal: true

FactoryBot.define do
  factory :band do
    name { Faker::Music::RockBand.name }
    bookmarks_count { 1 }
  end

  factory :band_name_empty, class: Band do
    name { '' }
    bookmarks_count { 1 }
  end
end
