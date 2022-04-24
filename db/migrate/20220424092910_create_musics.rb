class CreateMusics < ActiveRecord::Migration[7.0]
  def change
    create_table :musics do |t|
      t.references :user, null: false, foreign_key: true
      t.references :band, null: false, foreign_key: true
      t.string :title
      t.integer :bookmarks_count
      t.string :score

      t.timestamps
    end
  end
end
