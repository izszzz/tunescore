# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'musics/new', type: :view do
  before do
    assign(:music, Music.new(
                     user: nil,
                     band: nil,
                     title: 'MyString',
                     bookmarks_count: 1,
                     score: 'MyString'
                   ))
  end

  it 'renders new music form' do
    skip
  end
end
