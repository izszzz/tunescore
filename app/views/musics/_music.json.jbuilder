json.extract! music, :id, :user_id, :band_id, :title, :bookmarks_count, :score, :created_at, :updated_at
json.url music_url(music, format: :json)
