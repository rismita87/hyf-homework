--Part 3: More queries
SET
  NAMES utf8mb4;
USE hyfdbweek2;
--1.Get all the tasks assigned to users whose email ends in @spotify.com
SELECT
  task.title,
  user.email
FROM
  task
  INNER JOIN user ON task.id = user.id
WHERE
  user.email LIKE '%@spotify.com';
--2.Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT
  task.*,
  status.name 'status_name',
  user.name 'user_name'
FROM
  task
  INNER JOIN status ON task.status_id = status.id
  INNER JOIN user_task ON task.id = user_task.task_id
  INNER JOIN user ON user_task.user_id = user.id
where
  user.name = 'Donald Duck'
  AND status.name = 'Not started';
--3.Get all the tasks for 'Maryrose Meadows'
  --that were created in september (hint: month(created)=month_number)
SELECT
  task.*,
  user.name 'user_name'
FROM
  task
  INNER JOIN user_task ON task.id = user_task.task_id
  INNER JOIN user ON user_task.user_id = user.id
where
  user.name = 'Maryrose Meadows'
  and month(task.created) = 9;
--4.Find how many tasks where created in each month, e.g.
  --how many tasks were created in october, how many tasks
  --were created in november, etc. (hint: use group by)
SELECT
  *
from
  task;
SELECT
  COUNT(task.id) 'task created',
  MONTHNAME(task.created) 'Month'
FROM
  task
GROUP BY
  MONTHNAME(task.created);
DESC task;