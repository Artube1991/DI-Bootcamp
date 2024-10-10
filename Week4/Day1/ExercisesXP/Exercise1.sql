CREATE TABLE items(
	item_id SERIAL PRIMARY KEY,
	item VARCHAR,
	price int
)

create table customers(
	customer_id serial primary key,
	first_name varchar,
	last_name varchar
)

insert into items(item, price)
values (
	'Small Desk', '100'
	),

(	'Large Desk', '300'
	),

(	'Fan', '80',
	)

insert into customers(first_name, last_name)
values (
	'Greg', 'Jones'
	),

(	'Sandra', 'Jones'
	),

(	'Scott', 'Scott',
	),

(	'Trevor', 'Green',
	),

(	'Melanie', 'Johnson',
	)

select * from items
select item, price from items where price > 80
select item, price from items where price < 300
select first_name, last_name from customers where last_name='Smith'
select first_name, last_name from customers where last_name='Jones'
select first_name, last_name from customers where first_name != 'Scott'