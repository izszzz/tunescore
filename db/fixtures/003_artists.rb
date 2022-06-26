Artist.seed(:id,
            %w[TK 345 ピエール中野 野田洋二郎].map.with_index(1) do |v, i|
              { id: i, name: v }
            end)