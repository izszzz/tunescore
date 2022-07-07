# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'bands/show', type: :view do
  before do
    @band = assign(:band, Band.create!(
                            name: 'Name',
                            bookmarks_count: 2
                          ))
  end

  it 'renders attributes in <p>' do
    render
    expect(rendered).to match(/Name/)
    expect(rendered).to match(/2/)
  end
end
