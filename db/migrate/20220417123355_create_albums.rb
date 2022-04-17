class CreateAlbums < ActiveRecord::Migration[7.0]
  def change
    create_table :albums do |t|
      t.string :title
      t.integer :bookmarks_count

      t.timestamps
    end
  end
end
