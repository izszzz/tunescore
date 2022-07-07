# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'musics/edit', type: :view do
  before do
    @music = assign(:music, Music.create!(
                              user: nil,
                              band: nil,
                              title: 'MyString',
                              bookmarks_count: 1,
                              score: 'MyString'
                            ))
  end

  it 'renders the edit music form' do
    skip
  end
end
