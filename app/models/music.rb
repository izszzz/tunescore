# frozen_string_literal: true

class Music < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :band, optional: true
  validates :title, presence: true
end
