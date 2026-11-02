# Write your MySQL query statement below
select c.name as Customers
from Customers c
left join Orders o
on c.id = o.customerId
where o.id is null

-- Synced seamlessly with LeetHub Pro
-- Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
-- Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna