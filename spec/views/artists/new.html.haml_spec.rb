# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'artists/new', type: :view do
  before do
    assign(:artist, Artist.new)
  end

  it 'renders new artist form' do
    render

    assert_select 'form[action=?][method=?]', artists_path, 'post' do
    end
  end
end
