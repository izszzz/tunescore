# frozen_string_literal: true

FactoryBot.define do
  factory :user do
    nickname { Faker::Name.unique.name }
    email { Faker::Internet.email }
    familyname { Faker::Name.first_name }
    givenname { Faker::Name.last_name }
    password { 'password' }
    password_confirmation { 'password' }

    factory :test_user, class: 'User' do
      email { 'test@test.com' }
      familyname { 'test' }
      givenname { 'tester' }
      nickname { 'IamTester' }
    end
  end
end
