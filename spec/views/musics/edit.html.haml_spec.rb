# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'musics/edit', type: :view do
  before(:each) do
    @music = assign(:music, Music.create!(
                              user: nil,
                              band: nil,
                              title: 'MyString',
                              bookmarks_count: 1,
                              score: 'MyString'
                            ))
  end

  it 'renders the edit music form' do
    render

    assert_select 'form[action=?][method=?]', music_path(@music), 'post' do
      assert_select 'input[name=?]', 'music[user_id]'

      assert_select 'input[name=?]', 'music[band_id]'

      assert_select 'input[name=?]', 'music[title]'

      assert_select 'input[name=?]', 'music[bookmarks_count]'

      assert_select 'input[name=?]', 'music[score]'
    end
  end
end
