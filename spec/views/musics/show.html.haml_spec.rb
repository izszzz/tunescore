# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'musics/show', type: :view do
  before do
    @music = assign(:music, Music.create!(
                              user: nil,
                              band: nil,
                              title: 'Title',
                              bookmarks_count: 2,
                              score: 'Score'
                            ))
  end

  it 'renders attributes in <p>' do
    skip
  end
end
