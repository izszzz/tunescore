# frozen_string_literal: true

Album.seed(:id,
           (1..10).map.with_index(1) do |_v, i|
             { id: i, title: Faker::Music.album }
           end)
