json.extract! artist, :id, :name, :bookmarks_count, :created_at, :updated_at
json.url artist_url(artist, format: :json)
