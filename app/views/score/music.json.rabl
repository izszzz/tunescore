# frozen_string_literal: true

attributes :id, :title, :score
child :user do
  extends 'users/user'
end
