---Part 2: School database
-- Create a new database containing the following tables:
CREATE DATABASE hyfdbweek2HW DEFAULT CHARACTER SET = 'utf8mb4';
USE hyfdbweek2HW;
-- Class: with the columns: id, name, begins (date), ends (date)
CREATE TABLE Class (
  id int PRIMARY KEY,
  name VARCHAR(50),
  begins DATE,
  ends DATE
);
-- Student: with the columns: id, name, email, phone, class_id (foreign key)
CREATE TABLE Student (
  id int PRIMARY KEY,
  name VARCHAR(50),
  email VARCHAR(50),
  phone INT,
  class_id INT,
  FOREIGN KEY (class_id) REFERENCES Class(id)
);
---Create an index on the name column of the student table.
CREATE INDEX StudentNameIndex ON Student(name);
--Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations)
ALTER TABLE
  Class
add
  column (
    status ENUM('not-started', 'ongoing', 'finished')
  );