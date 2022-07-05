# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'musics/show', type: :view do
  before(:each) do
    @music = assign(:music, Music.create!(
                              user: nil,
                              band: nil,
                              title: 'Title',
                              bookmarks_count: 2,
                              score: 'Score'
                            ))
  end

  it 'renders attributes in <p>' do
    render
    expect(rendered).to match(//)
    expect(rendered).to match(//)
    expect(rendered).to match(/Title/)
    expect(rendered).to match(/2/)
    expect(rendered).to match(/Score/)
  end
end
