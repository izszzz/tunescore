# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'users/new', type: :view do
  before do
    assign(:user, User.new)
  end

  it 'renders new user form' do
    skip
  end
end
