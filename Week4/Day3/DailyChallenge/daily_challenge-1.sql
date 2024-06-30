create table CUSTOMER(
	id serial primary key,
	first_name varchar,
	last_name varchar not null
)

create table customer_profile(
	id serial primary key,
	isLoggedIn boolean default false,
	customer_id int,
	foreign key (customer_id) references customer(id)
)

insert into customer (first_name, last_name)
values
	('John', 'Doe'),
	('Jerome', 'Lalu'),
	('Lea', 'Rive');

insert into customer_profile (isLoggedIn, customer_id)
values
	(false, 1),
	(true, 2);

--The first_name of the LoggedIn customers
select customer.first_name, customer_profile.isLoggedin from customer
inner join customer_profile
on customer_profile.customer_id = customer.id
where customer_profile.isLoggedIn is false

--All the customers first_name and isLoggedIn columns - even the customers those who don’t have a profile.
select customer.first_name, customer_profile.isLoggedin from customer
left join customer_profile
on customer_profile.customer_id = customer.id

--The number of customers that are not LoggedIn
select count(customer_profile.isLoggedin) from customer
inner join customer_profile
on customer_profile.customer_id = customer.id
where customer_profile.isLoggedIn is true
