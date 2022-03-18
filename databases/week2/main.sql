-- Part 1: Working with tasks
-- 1.Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
SET
  NAMES utf8mb4;
USE hyfdbweek2;
ALTER TABLE
  task
ADD
  user_id varchar(50);
INSERT INTO
  task (
    title,
    description,
    created,
    updated,
    due_date,
    status_id,
    user_id
  )
VALUES
  (
    "Homework",
    "Databases week2 homework",
    "2022-03-13 06:54:16",
    "2022-03-15 06:54:16",
    "2022-03-18 06:54:16",
    "1",
    "rismita87"
  );
--2.Change the title of a task
UPDATE
  task
SET
  title = "Homework to do on week 2"
WHERE
  task.id = 37;
--3.Change a task due date
UPDATE
  task
SET
  due_date = "2022-03-19 12:00:00"
WHERE
  task.id = 37;
--4.Change a task status
UPDATE
  task
SET
  status_id = "2"
WHERE
  task.id = 37;
--5.Mark a task as complete
UPDATE
  task
SET
  status_id = "3"
WHERE
  task.id = 36;
--6.Delete a task
DELETE FROM
  task
WHERE
  id = 38;