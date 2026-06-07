class CreateDreams < ActiveRecord::Migration[8.1]
  def change
    create_table :dreams do |t|
      t.integer :user_id
      t.text :content
      t.string :dream_type
      t.text :bakura_response

      t.timestamps
    end
  end
end
