----1. Find out how many tasks are in the task table
SELECT
    count(id)
FROM
    task;

---2. Find out how many tasks in the task table do not have a valid due date
SELECT
    *
FROM
    task
WHERE
    due_date is NULL;

---3. Find all the tasks that are marked as done
SELECT
    task.id,task.title,status.name
FROM
    task
INNER JOIN
    status
ON
    task.status_id=status.id 
WHERE
    status.name = 'Done';

---4. Find all the tasks that are not marked as done
SELECT
    task.id,task.title,status.name
FROM
    task
INNER JOIN
    status
ON
    task.status_id=status.id 
WHERE
    status.name != 'Done';

---5. Get all the tasks, sorted with the most recently created first
SELECT
    task.id, 
    task.title, 
    task.created
FROM
    task
ORDER BY
    task.created DESC;        

---6. Get the single most recently created task
--- i. Using RANK() which is most useful for getting only the task of any rank:
SELECT
*
FROM
    (SELECT
        task.id, 
        task.title, 
        task.created,
        RANK() OVER (
            ORDER BY task.created desc
        ) task_rank
    FROM
    task) derived_table
WHERE
    derived_table.task_rank = 1;

 ---ii. Using LIMIT:
SELECT 
    * 
FROM 
    task  
ORDER BY 
    task.created desc 
LIMIT 1;



---7. Get the title and due date of all tasks where the title or description contains database
SELECT 
    title, due_date 
FROM 
    task 
WHERE 
    title 
LIKE 
   '%database%' 
OR 
  description 
LIKE
 '%database%';

---8. Get the title and status (as text) of all tasks
SELECT
    task.title,(status.name) status
FROM
    task
INNER JOIN
    status
ON
    task.status_id=status.id;

--9. Get the name of each status, along with a count of how many tasks have that status
SELECT
    (status.name) status, count(task.id) task_count
FROM
    task
INNER JOIN
    status
ON
    task.status_id=status.id 
GROUP BY 
    status.name;
    

--10. Get the names of all statuses, sorted by the status with most tasks first
SELECT 
    derived_table.* 
FROM 
    (SELECT
          (status.name) status, count(task.id) task_count
      FROM
          task
      INNER JOIN
          status
      ON
          task.status_id=status.id GROUP BY status.name) derived_table
ORDER BY 
    derived_table.task_count desc;