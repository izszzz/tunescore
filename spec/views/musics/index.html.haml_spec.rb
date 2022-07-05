# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'musics/index', type: :view do
  before(:each) do
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
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
    assert_select cell_selector, text: Regexp.new(nil.to_s), count: 2
    assert_select cell_selector, text: Regexp.new(nil.to_s), count: 2
    assert_select cell_selector, text: Regexp.new('Title'.to_s), count: 2
    assert_select cell_selector, text: Regexp.new(2.to_s), count: 2
    assert_select cell_selector, text: Regexp.new('Score'.to_s), count: 2
  end
end
