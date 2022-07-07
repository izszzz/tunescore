# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'musics/index', type: :view do
  before do
    assign(:musics, [
             Music.create!(
               user: nil,
               band: nil,
               title: 'Title',
               bookmarks_count: 2,
               score: 'Score'
             ),
             Music.create!(
               user: nil,
               band: nil,
               title: 'Title',
               bookmarks_count: 2,
               score: 'Score'
             )
           ])
  end

  it 'renders a list of musics' do
    skip
  end
end
