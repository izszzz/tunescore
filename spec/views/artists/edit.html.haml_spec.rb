# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'artists/edit', type: :view do
  before do
    @artist = assign(:artist, Artist.create!)
  end

  it 'renders the edit artist form' do
    render

    assert_select 'form[action=?][method=?]', artist_path(@artist), 'post' do
    end
  end
end
