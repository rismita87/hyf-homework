---Part 4: Creating a database
CREATE DATABASE dbweek2HW4 DEFAULT CHARACTER SET = 'utf8mb4';
USE dbweek2HW4;
CREATE TABLE genre(
  id INT PRIMARY KEY,
  name VARCHAR(50),
  status ENUM('available', 'not-available')
);
CREATE TABLE racks(
  id INT PRIMARY KEY,
  size INT,
  color ENUM('YELLOW', 'BLUE', 'GREEN', 'RED')
);
CREATE TABLE books(
  id INT PRIMARY KEY,
  name VARCHAR(50),
  author VARCHAR(50)
);
CREATE TABLE user(
  id INT PRIMARY KEY,
  name VARCHAR(50),
  email VARCHAR(50)
);
CREATE TABLE genre_racks(
  genre_id int,
  rack_id int,
  PRIMARY KEY(genre_id, rack_id),
  CONSTRAINT fk_genre_racks_genre FOREIGN KEY (genre_id) REFERENCES genre (id) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_genre_racks_racks FOREIGN KEY (rack_id) REFERENCES racks (id) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE genre_books(
  genre_id int,
  book_id int,
  PRIMARY KEY(genre_id, book_id),
  CONSTRAINT fk_genre_books_genre FOREIGN KEY (genre_id) REFERENCES genre (id) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_genre_books_books FOREIGN KEY (book_id) REFERENCES books (id) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE racks_books(
  rack_id int,
  book_id int,
  PRIMARY KEY(rack_id, book_id),
  CONSTRAINT fk_racks_books_racks FOREIGN KEY (rack_id) REFERENCES genre (id) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_racks_books_books FOREIGN KEY (book_id) REFERENCES books (id) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE user_books(
  user_id int,
  book_id int,
  PRIMARY KEY(user_id, book_id),
  CONSTRAINT fk_user_books_user FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_user_books_books FOREIGN KEY (book_id) REFERENCES books (id) ON DELETE CASCADE ON UPDATE CASCADE
);