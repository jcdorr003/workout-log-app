class RemoveColumnsExercises < ActiveRecord::Migration[6.0]
  def change
    remove_column :exercises, :weight, :integer
    remove_column :exercises, :sets, :integer
    remove_column :exercises, :reps, :integer
  end
end
