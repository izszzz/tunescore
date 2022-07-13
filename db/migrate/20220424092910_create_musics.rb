# frozen_string_literal: true

class CreateMusics < ActiveRecord::Migration[7.0]
  def change
    create_table :musics do |t|
      t.references :user, foreign_key: true
      t.references :band, foreign_key: true
      t.string :title, default: '', null: false
      t.string :score, default: ':4 0.6 1.6 3.6 0.5 2.5 3.5 0.4 2.4 | 3.4 0.3 2.3 0.2 1.2 3.2 0.1 1.1 | 3.1.1', null: false
      t.integer :price, default: 0, null: false
      t.boolean :status, default: true, null: false
      t.integer :bookmarks_count, default: 0, null: false

      t.timestamps
    end
  end
end
