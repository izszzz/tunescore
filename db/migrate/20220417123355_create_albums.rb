# frozen_string_literal: true

class CreateAlbums < ActiveRecord::Migration[7.0]
  def change
    create_table :albums do |t|
      t.string :title, default: '', null: false
      t.integer :bookmarks_count, default: 0, null: false

      t.timestamps
    end
  end
end
