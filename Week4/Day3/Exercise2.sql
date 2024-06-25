--01.Use UPDATE to change the language of some films. Make sure that you use valid languages.
update film set language_id = 2 where film_id = 99
update film set language_id = 2 where film_id = 999
update film set language_id = 2 where film_id = 500

--03. We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?

--Table 'customer_review' is a child table. Deleting it doesn't cause any consiquences for other tables. We can drop it with the query:
drop table if exists customer_review

--04. Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
SELECT count(*) FROM rental

--05. Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet) 
SELECT rental.rental_id, rental.rental_date, rental.return_date, payment.payment_id, payment.amount, payment.payment_date
from rental
inner join payment
on rental.rental_id = payment.rental_id
order by amount desc limit 30
