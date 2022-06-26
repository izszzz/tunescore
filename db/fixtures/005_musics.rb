Music.seed(:id,
	(1..10).map.with_index(1) do |v, i|
							{ id: i, title: Faker::Music::RockBand.song }
           end
)