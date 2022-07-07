# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'bands/new', type: :view do
  before do
    assign(:band, Band.new(
                    name: 'MyString',
                    bookmarks_count: 1
                  ))
  end

  it 'renders new band form' do
    render

    assert_select 'form[action=?][method=?]', bands_path, 'post' do
      assert_select 'input[name=?]', 'band[name]'

      assert_select 'input[name=?]', 'band[bookmarks_count]'
    end
  end
end
