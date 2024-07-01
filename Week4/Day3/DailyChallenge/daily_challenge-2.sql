create table Book(
	book_id SERIAL PRIMARY KEY,
	title varchar NOT NULL,
	author text NOT NULL
)

insert into Book (title, author) values
	('Alice in Wonderland', 'Lewis Carroll'),
	('Harry Potter', 'J.K.Rowling'),
	('To Kill a Mockingbird', 'Harper Lee');

create table Student(
	student_id SERIAL PRIMARY KEY,
	name text NOT NULL UNIQUE,
	age integer check (age < 15)
);

insert into Student (name, age) values
('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14);

create table Library(
	book_fk_id int,
	student_fk_id int,
	borrow_date date,
	primary key (book_fk_id, student_fk_id),
	foreign key (book_fk_id) references Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
	foreign key (student_fk_id) references Student(student_id) ON DELETE CASCADE ON UPDATE CASCADE
);

insert into Library(
	student_fk_id, book_fk_id, borrow_date
)
VALUES
((select student_id from Student where name = 'John'),
	(select book_id from Book where title = 'Alice in Wonderland'),
	'2022/02/15'),
((select student_id from Student where name = 'Bob'),
	(select book_id from Book where title = 'To Kill a Mockingbird'),
	'2021/03/03'),
((select student_id from Student where name = 'Lera'),
	(select book_id from Book where title = 'Alice in Wonderland'),
	'2021/05/23'),
((select student_id from Student where name = 'Bob'),
	(select book_id from Book where title = 'Harry Potter'),
	'2021/08/12');

--Select all the columns from the junction table
select * from library

--Select the name of the student and the title of the borrowed books
select AVG(Student.age) AS Average_age
from Student
full outer join Library
on Library.student_fk_id = Student.student_id
full outer join Book on Book.book_id = Library.book_fk_id
where Book.title = 'Alice in Wonderland'

--Delete a student from the Student table, what happened in the junction table ?
delete from Student
where name = 'Lera'
--The row consisting of student Lera id was deleted too.