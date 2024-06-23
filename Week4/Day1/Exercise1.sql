CREATE TABLE items(
	item_id SERIAL PRIMARY KEY,
	itemt VARCHAR,
	price int
)

create table customers(
	customer_id serial primary key,
	first_name varchar,
	last_name varchar
)

select * from items
select itemt, price from items where price > 80
select itemt, price from items where price < 300
select first_name, last_name from customers where last_name='Smith'
select first_name, last_name from customers where last_name='Jones'
select first_name, last_name from customers where first_name != 'Scott'