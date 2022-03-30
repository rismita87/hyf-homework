-- Create database
CREATE DATABASE dbweek3HW DEFAULT CHARACTER SET = 'utf8mb4';
USE dbweek3HW;
--Data model
CREATE TABLE meal (
  id INT PRIMARY KEY,
  title VARCHAR(50),
  `description` TEXT,
  `location` VARCHAR(255),
  `when` DATETIME,
  max_reservations INT,
  price DECIMAL(5, 2),
  created_date DATE
);
CREATE TABLE reservation (
  id INT PRIMARY KEY,
  number_of_guests INT,
  meal_id INT,
  created_date DATE,
  contact_phonenumber VARCHAR(255),
  contact_name VARCHAR(255),
  contact_email VARCHAR(255),
  CONSTRAINT fk_reservation_meal FOREIGN KEY (meal_id) REFERENCES meal (id) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE review (
  id INT PRIMARY KEY,
  title VARCHAR(50),
  `description` TEXT,
  meal_id INT,
  stars INT,
  created_date DATE,
  CONSTRAINT fk_review_meal FOREIGN KEY (meal_id) REFERENCES meal (id) ON DELETE CASCADE ON UPDATE CASCADE
);
--Queries to write
--Meal
--1.Get all meals
SELECT
  *
FROM
  meal;
--2. Add a new meal
INSERT INTO
  meal (
    id,
    title,
    `description`,
    `location`,
    `when`,
    max_reservations,
    price,
    created_date
  )
VALUES
  (
    "4",
    "pork sandwich",
    "BBQ pulled pork sandwich with baked beans",
    "Århus",
    "2022-03-25 012:45:05",
    "10",
    "50",
    "2022-03-25"
  );
--3.Get a meal with any id, fx 1
SELECT
  *
FROM
  meal
WHERE
  meal.id = 2;
--4.Update a meal with any id, fx 1.
  --Update any attribute fx the title or multiple attributes
UPDATE
  meal
SET
  max_reservations = "2",
  price = "95"
WHERE
  meal.id = 2;
--5.Delete a meal with any id
DELETE FROM
  meal
WHERE
  id = 3;
--Reservation
  --1.Get all reservations
SELECT
  *
FROM
  reservation;
--2.Add a new reservation
INSERT INTO
  reservation (
    id,
    number_of_guests,
    meal_id,
    created_date,
    contact_phonenumber,
    contact_name,
    contact_email
  )
VALUES
  (
    "3",
    "3",
    "2",
    "2022-03-27",
    "+45-12345678",
    "R. Ghosh Sarkar",
    "rghosh@gmail.com"
  );
--3.Get a reservation with any id, fx 1
SELECT
  *
FROM
  reservation
WHERE
  reservation.id = 1;
--4.Update a reservation with any id, fx 1.
  --Update any attribute fx the title or multiple attributes
UPDATE
  reservation
SET
  created_date = "2022-03-26",
  number_of_guests = "6",
  meal_id = "2"
WHERE
  reservation.id = 2;
--5.Delete a reservation with any id, fx 1
DELETE FROM
  reservation
WHERE
  reservation.id = "3";
--Review
  --1.Get all reviews
SELECT
  *
FROM
  review;
--2.Add a new review
INSERT INTO
  review (
    id,
    title,
    `description`,
    meal_id,
    stars,
    created_date
  )
VALUES
  (
    "6",
    "grilled chicken",
    "good",
    "1",
    "4",
    "2022.03.29"
  );
--3.Get a review with any id, fx 1
SELECT
  *
FROM
  review
WHERE
  review.id = 2;
--4.Update a review with any id, fx 1.
  --Update any attribute fx the title or multiple attributes
UPDATE
  review
SET
  review.title = "grilled chicken",
  review.description = "great food!!!",
  review.stars = "4"
WHERE
  review.id = 2;
--5.Delete a review with any id, fx 1
DELETE FROM
  review
WHERE
  review.id = "3";
--Additional queries
  --1.Get meals that has a price smaller than a specific price fx 90
SELECT
  *
FROM
  meal
WHERE
  meal.price < 80;
--2.Get meals that still has available reservations
SELECT
  meal.id "meal_id",
  reservation_status.meal_count "meal_reservation_status",
  meal.max_reservations "meal-Max-Reservation"
FROM
  (
    SELECT
      count(reservation.meal_id) "meal_count",
      reservation.meal_id "meal_id"
    FROM
      reservation
    GROUP BY
      reservation.meal_id
  ) reservation_status
  INNER JOIN meal ON meal.id = reservation_status.meal_id
WHERE
  meal.max_reservations > reservation_status.meal_count;
--   meal.id "meal id",
  --   meal.title "meal title",
  --   reservation.number_of_guests "reservation number"
  -- FROM
  --   meal
  --   INNER JOIN reservation ON meal.id = reservation.meal_id
  -- WHERE
  --   meal.max_reservations > reservation.number_of_guests;
  --3.Get meals that partially match a title.
  -- Rød grød med will match the meal with the
  --title Rød grød med fløde
SELECT
  *
FROM
  meal
WHERE
  title LIKE '%chicken%';
--4.Get meals that has been created between two dates
SELECT
  *
FROM
  meal
WHERE
  created_date BETWEEN '2022-03-23'
  AND '2022-03-24';
--5.Get only specific number of meals fx return only 5 meals
SELECT
  *
FROM
  meal
ORDER By
  meal.id
LIMIT
  3;
--6.Get the meals that have good reviews
SELECT
  AVG(review.stars) "average number of stars",
  review.meal_id "meal id",
  review.title "meal title"
FROM
  review
GROUP BY
  review.meal_id,
  review.title
HAVING
  AVG(review.stars) >= 4;
--if the average rating of a meal is ' >=4 ' then I have considered it for good review.
  --7.Get reservations for a specific meal sorted by created_date
SELECT
  *
FROM
  reservation
WHERE
  reservation.meal_id = 2
ORDER BY
  created_date;
--8.Sort all meals by average number of stars in the reviews
SELECT
  AVG(review.stars) "average number of stars",
  review.meal_id "meal id",
  review.title "meal title"
FROM
  review
GROUP BY
  review.meal_id,
  review.title;