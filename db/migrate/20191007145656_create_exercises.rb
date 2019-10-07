class CreateExercises < ActiveRecord::Migration[6.0]
  def change
    create_table :exercises do |t|
      t.string :name
      t.integer :weight
      t.integer :sets
      t.integer :reps

      t.timestamps
    end
  end
end
