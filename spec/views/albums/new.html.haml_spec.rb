# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'albums/new', type: :view do
  before do
    assign(:album, Album.new(
                     title: 'MyString',
                     bookmarks_count: 1
                   ))
  end

  it 'renders new album form' do
    render

    assert_select 'form[action=?][method=?]', albums_path, 'post' do
      assert_select 'input[name=?]', 'album[title]'

      assert_select 'input[name=?]', 'album[bookmarks_count]'
    end
  end
end
