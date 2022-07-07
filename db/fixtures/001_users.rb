# frozen_string_literal: true

User.seed(:id,
          (1..10).map do |_i|
            FactoryBot.attributes_for :user
          end)

User.seed(FactoryBot.attributes_for(:test_user))
