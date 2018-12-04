class User < ApplicationRecord
  has_secure_password
  has_many :enrolments
  has_many :courses, through: :enrolments
end
