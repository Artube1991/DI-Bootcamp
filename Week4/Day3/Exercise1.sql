--01. Get a list of all the languages, from the language table.
select language_id, name from language
--02. Get a list of all films joined with their languages – select the following details : film title, description, and language name.
select language.name, film.title, film.description from language
inner join film on language.language_id = film.film_id
--03. Get all languages, even if there are no films in those languages – select the following details : film title, description, and language name.
select language.name, film.title, film.description from language
left join film on language.language_id = film.film_id
--04. Create a new table called new_film with the following columns : id, name. Add some new films to the table.
create table new_table (
	new_film_id serial primary key,
	new_film_name varchar
)

insert into new_table (new_film_name)
values (
'Brother'
	),
	(
	'Brother 2'
	),
	(
	'Morpheum'
	),
	(
	'Cargo 200'
	),
	(
	'I want it, too'
	)
--05. Create a new table called customer_review, which will contain film reviews that customers will make.
--Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
--It should have the following columns:
--review_id – a primary key, non null, auto-increment.
--film_id – references the new_film table. The film that is being reviewed.
--language_id – references the language table. What language the review is in.
--title – the title of the review.
--score – the rating of the review (1-10).
--review_text – the text of the review. No limit on the length.
--last_update – when the review was last updated.
create table customer_review (
	review_id serial not null,
	film_id int,
	language_id int,
	title varchar,
	score int,
	review_text varchar,
	last_update date,
	primary key (review_id),
	foreign key (film_id) references new_table (new_film_id) on delete cascade,
	foreign key (language_id) references language (language_id)
)
--06. Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
insert into customer_review (film_id, language_id, title, score, review_text, last_update)
values
	(
	(select new_film_id from new_table where new_film_name = 'Brother'),
	(select language_id from language where name = 'English'),
	'The partial review on Brother',
	8,
	'The movie is great! The best action movie about bandits and justice in 90s.',
	'2020/03/29'
	),

	(
	(select new_film_id from new_table where new_film_name = 'Cargo 200'),
	(select language_id from language where name = 'English'),
	'What the hell it was?!',
	3,
	'That was an awful movie. It is so scary and creepy. The director is sick bastard.',
	'2022/02/24'
	)

select customer_review.title, customer_review.review_text, new_table.new_film_name from new_table
join customer_review
on new_table.new_film_id = customer_review.film_id
--07. Delete a film that has a review from the new_film table, what happens to the customer_review table?
delete from new_table where new_film_name = 'Cargo 200'
select * from customer_review