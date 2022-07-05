# frozen_string_literal: true

FactoryBot.define do
  factory :artist do
    name { 'MyString' }
    bookmarks_count { 1 }
  end
end
