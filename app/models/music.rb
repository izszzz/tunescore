class Music < ApplicationRecord
  belongs_to :user
  belongs_to :band, optional: true
end
