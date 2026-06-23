class Dream < ApplicationRecord
    belongs_to :user

    validates :content, presence: true
    validates :dream_type, presence: true
end
