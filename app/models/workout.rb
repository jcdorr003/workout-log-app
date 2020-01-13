class Workout < ApplicationRecord
  belongs_to :user
  has_many :routines, dependent: :destroy
end
