# frozen_string_literal: true

attributes :id, :title
child :user do
  extends 'users/user'
end
