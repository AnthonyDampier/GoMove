
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE `exercise_type` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`exercise_name` VARCHAR(255),
	`major_muscle_group` TEXT,
	`targeted_muscle_group` TEXT,
	UNIQUE KEY `exercise_pk` (`id`) USING BTREE
);

CREATE TABLE `workout_genre` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`genre` VARCHAR(255)
);

CREATE TABLE `program_set` (
	`program_id` INT,
	`session_id` INT,
	`exercise_id` INT,
	`set_id` INT,
	`reps` INT,
	`percent_of_max` DECIMAL
);

CREATE TABLE `program` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`program_title` VARCHAR(250),
	`author_user_id` INT,
	`program_genre` INT,
	`num_of_sessions` INT,
	`approved` BOOLEAN DEFAULT 'false',
	`image` VARCHAR(400),
	`description` VARCHAR(400)
);

