FactoryBot.define do
  factory :band do
    name { Faker::Music::RockBand.name }
  end

  factory :band_name_empty, class: Band do
    name { "" }
  end
end
