# frozen_string_literal: true

Music.seed(:id,
           (1..10).map.with_index(1) do |_v, i|
             { id: i, title: Faker::Music::RockBand.song }
           end)
