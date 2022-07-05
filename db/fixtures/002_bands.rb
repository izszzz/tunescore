# frozen_string_literal: true

Band.seed(:id,
          %w[凛として時雨 RADWIMPS].map.with_index(1) do |v, i|
            { id: i, name: v }
          end)
