# Models =============================

class Campus < ActiveRecord::Base
  has_many :enrollments
  has_many :students, through: :enrollments
end

class Student < ActiveRecord::Base
  has_many :enrollments
  has_many :campuses, through :enrollments
  has_one :primary_campus, through :enrollments, class_name: "Campus", { where primary_campus?: true }
end

class Enrollment < ActiveRecord::Base
  belongs_to :campus
  belongs_to :student
end

# Migrations ============================

class CreateCampus < ActiveRecord::Migration
  def change
    create_table :campuses do |t|
      t.string :city
      t.string :state
      t.string :name
      t.timestamps, null: false
    end
  end
end

class CreateStudent < ActiveRecord::Migration
  def change
    create_table :students do |t|
      t.string :first_name
      t.string :last_name
      t.timestamps, null: false
    end
  end
end

class CreateEnrollment < ActiveRecord::Migration
  def change
    create_table :enrollments do |t|
      t.belongs_to :student, index: true
      t.belongs_to :campus, index: true
      t.boolean :primary_campus?
      t.timestamps, null: false
    end
  end
end