# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'users/edit', type: :view do
  before do
    @user = assign(:user, User.create!)
  end

  it 'renders the edit user form' do
    skip
  end
end
