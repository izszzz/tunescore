# frozen_string_literal: true

User.seed(:id,
          (1..10).map do |i|
            { id: i, email: Faker::Internet.email, familyname: Faker::Name.first_name,
              givenname: Faker::Name.last_name, nickname: Faker::Name.name, password: 'password', password_confirmation: 'password' }
          end)

User.seed(:id,
          { id: 3, email: 'test@test.com', familyname: 'test', givenname: 'tester', nickname: 'IamTester',
            password: 'password', password_confirmation: 'password' })
