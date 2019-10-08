class Routine < ApplicationRecord
  belongs_to :workout
  belongs_to :exercise
  attribute :sets, :integer, default: 0
  attribute :reps, :integer, default: 0
  attribute :weight, :integer, default: 0
end
