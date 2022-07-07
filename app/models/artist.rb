# frozen_string_literal: true

class Artist < ApplicationRecord
  validates :name, presence: true
end
