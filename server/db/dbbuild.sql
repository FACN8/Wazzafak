BEGIN;

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS busers CASCADE;
DROP TABLE IF EXISTS vacancies CASCADE;
DROP TABLE IF EXISTS applications CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    phone VARCHAR(30) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    year_of_birth int NOT NULL,
    country VARCHAR(30) NOT NULL,
    bio text
);

CREATE TABLE busers (
    id SERIAL PRIMARY KEY,
    bname VARCHAR(30) NOT NULL,
    phone VARCHAR(30) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    address text,
    city VARCHAR(30) NOT NULL,
    country VARCHAR(30) NOT NULL,
    open_days text,
    open_hours text,
    descr text
);

CREATE TABLE vacancies (
    id SERIAL PRIMARY KEY,
    business_id int NOT NULL,
    FOREIGN KEY (business_id) references busers (id) ON DELETE CASCADE,
    title VARCHAR(40) NOT NULL,
    wage text,
    work_days text,
    work_hours text,
    descr text NOT NULL
);

CREATE TABLE applications (
    id SERIAL PRIMARY KEY,
    user_id int NOT NULL,
    FOREIGN KEY (user_id) references users (id) ON DELETE CASCADE,
    vacancy_id int NOT NULL,
    FOREIGN KEY (vacancy_id) references vacancies (id) ON DELETE CASCADE,
    message text
);

INSERT INTO users (first_name, last_name, phone, email, password, year_of_birth, country, bio) VALUES
    ('Ivan', 'Korey', '0502000001', 'korean@gmail.com', '1', '2000', 'Korea', 'My name is ivan i like to code, i find coding very likable because i like it but not for the sake of liking it.'),
    ('Rabea', 'Diaz', '0545555555', 'rdiaz@gmail.com', '2', '1900', 'Columbia', 'I have been growing cats since the 1920, been taking care of them and feeding them and throwing fake mouses in fron of them.'),
    ('Yousef', 'Russo', '0543215678', 'yourusso@gmail.com', '3', '1992', 'USA', 'I love drinking coffee and smoking cigarettes, and then smoke and smoke untill i faint or find a good job'),
    ('Fatmeeh', 'Larsona', '0546666667', 'fatmethegood@gmail.com', '4', '1999', 'Britain', 'I think i am very creative and optimistic, i like drawing and i have a very unique perception of life'),
    ('Hadil', 'Gucci', '0587870030', 'hgucci@gmail.com', '5', '1997', 'Italy', 'Because i am very cute and i have a very strong personality, and i find myself very beautiful and i am full of life and spread joy'),
    ('Mahmoud', 'Gates', '0501010101', 'mgates@gmail.com', '6', '1997', 'Argentina', 'I type quickly and i eat slowly so i cant choke while typing fast. i love puppies and birds'),
    ('Aysam', 'Obama', '0501025721', 'Aybama@gmail.com', '7', '1995', 'Mexico', 'I have a driving license, i sleep 6 hours and i dress neat so i am good for representative jobs'),
    ('Francis', 'Isenberg', '0549753352', 'frantheman@gmail.com', '8', '1991', 'Greece', 'I am hard working reliable worker, i know how to swim and i am a specialest in the art of prevention');

INSERT INTO busers (bname, phone, email, password, address, city, country, open_days, open_hours, descr) VALUES
    ('Kentucky Fried Chicken', '046567891', 'kfc@gmail.com', '1', 'street 1', 'Nazareth', 'Israel', 'Mon-Fri', '8:00-23:00', 'KFC, also known as Kentucky Fried Chicken, is an American fast food restaurant chain headquartered in Louisville, Kentucky, that specializes in fried chicken. It is the worlds second-largest restaurant chain after McDonalds, with 22,621 locations globally in 136 countries as of December 2018.'),
    ('Mc Donalds', '050505050', 'mcd@gmail.com', '2', 'street 1', 'Haifa', 'Israel', 'Sun-Fri', '10:00-22:00', 'McDonalds Corporation is an American fast food company, founded in 1940 as a restaurant operated by Richard and Maurice McDonald, in San Bernardino, California, United States.'),
    ('Super-Pharm', '050606060', 'spharm@gmail.com', '3','street 1', 'Nazareth', 'Israel', 'Sun-Thu', '10:00-22:00', 'Super-Pharm is a pharmacy chain in Israel and Poland. Founded by Murray Koffler with his two oldest children, Leon and Theo, the pharmacy uses a similar logo and private-label brand, such as Life, as Shoppers Drug Mart in Canada.'),
    ('Starbucks', '053218760', 'starb@gmail.com', '4', 'street 1', 'Nazareth', 'Israel', 'Sun-Thu', '08:00-21:00', 'Starbucks Corporation is an American coffee company and coffeehouse chain. Starbucks was founded in Seattle, Washington, in 1971. As of early 2019, the company operates over 30,000 locations worldwide.'),
    ('Massad', '050609870', 'massad@gmail.com', '5', 'street 1', 'Nazareth', 'Israel', 'Sun-Thu', '10:00-22:00', 'Massad is a great cookies shop making cookies since 1963, was founded by the massad family with love');

INSERT INTO vacancies (business_id, title, wage, work_days, work_hours, descr) VALUES
    ('1','Cook', '30 Ils', 'Mon-Fri', '8:00-16:00', 'We need young people whom like to cook chicken before we drop them in to the deep oil'),
    ('1','Fryer', '30 Ils', 'Sun-Thu', '16:00-24:00', 'Fryer for a night shift'),
    ('1','Chickens', '0 Ils', 'Mon-Fri', '8:00-24:00', 'We need brave young chicks'),
    ('3','Pharmacist', '70 Ils', 'Mon-Fri', '8:00-16:00, 16:00-24:00', 'A responsible smart pharamicist to give people medicines'),
    ('3','Sales', '40 Ils', 'Sun-Thu', '16:00-24:00', 'Selling perfume is an art'),
    ('4','Cook', '50 Ils', 'Sun-Thu', '8:00-16:00, 16:00-24:00', 'Make sandwiches and salads'),
    ('2','Chipser', '30 Ils', 'Mon-Fri', '8:00-16:00', 'Tssss a lover of the sound of tsss in deep oil'),
    ('4','Barista', '30 Ils', 'Sun-Thu', '16:00-24:00', 'Coffe for people who like to stay late'),
    ('5','Conditor', '30 Ils', 'Mon-Fri', '8:00-24:00', 'do you like the art of making cakes? then you have a place in our shop'),
    ('5','Cookieman', '30 Ils', 'Sun-Thu', '8:00-24:00', 'If you know the cookie man We need you'),
    ('4','Cat', '30 Ils', 'Mon-Fri', '00:00-00:00', 'Meawo Meaow Meawo Meaow Meawo Meaow Meawo Meaow Meawo Meaow Meawo Meaow '),
    ('2','Cook', '30 Ils', 'Mon-Fri', '8:00-16:00', 'If scrambled eggs is your hobby we want you');

INSERT INTO applications (user_id, vacancy_id, message) VALUES
    (1,1,'I love chicken and oil'),(1,10,'I like Baking'),(3,8,'I like drinking Coffee'),(3,9,'I have a sweet youth'),
    (2,2,'Fry those chicken'),(2,4,'Drug those people'),(4,11,'Meaw Meaw'),(4,5,'tsss tsss tsss mmmmm'),
    (5,4,'I am very responsible'),(5,8,'Coffee is my life'),(5,7,'Chip by chip we will fry you'),(6,5,'Selling is my middle name'),
    (6,12,'I love chicken and oil'),(7,11,'I like Baking'),(7,10,'I like drinking Coffee'),(7,9,'I have a sweet youth'),
    (8,9,'I love chicken and oil'),(8,6,'I like Baking'),(2,7,'I like drinking Coffee'),(1,8,'I have a sweet youth');

COMMIT;