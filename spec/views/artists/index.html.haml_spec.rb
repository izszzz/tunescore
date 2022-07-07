# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'artists/index', type: :view do
  before do
    assign(:artists, [
             Artist.create!,
             Artist.create!
           ])
  end

  it 'renders a list of artists' do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
  end
end
