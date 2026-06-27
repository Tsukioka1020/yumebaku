class Dream < ApplicationRecord
    belongs_to :user

    validates :content, presence: true, length: { maximum: 1000 }
    validates :dream_type, presence: true
end
