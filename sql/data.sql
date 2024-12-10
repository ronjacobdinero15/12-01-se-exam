CREATE TABLE hr (
    hr_id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(100),
    username VARCHAR(15),
    password TEXT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    contact VARCHAR(15),
    business_type VARCHAR(100),
    date_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);

INSERT INTO hr (email, username, password, first_name, last_name, contact, business_type) VALUES
('jane.doe@example.com', 'janedoe', SHA('1'), 'Jane', 'Doe', '09123456789', 'Healthcare'),
('john.smith@example.com', 'johnsmith', SHA('1'), 'John', 'Smith', '09187654321', 'Technology'),
('emily.clark@example.com', 'emilyclark', SHA('1'), 'Emily', 'Clark', '09123498765', 'Education'),
('michael.brown@example.com', 'mikebrown', SHA('1'), 'Michael', 'Brown', '09183746592', 'Construction'),
('sarah.lee@example.com', 'sarahlee', SHA('1'), 'Sarah', 'Lee', '09174563218', 'Finance');


CREATE TABLE applicant (
    applicant_id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(100),
    username VARCHAR(15),
    password TEXT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    contact VARCHAR(15),
    date_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);

INSERT INTO applicant (email, username, password, first_name, last_name, contact) 
VALUES
  ('applicant1@example.com', 'user1', SHA1('1'), 'John', 'Doe', '1234567890'),
  ('applicant2@example.com', 'user2', SHA1('1'), 'Jane', 'Smith', '0987654321'),
  ('applicant3@example.com', 'user3', SHA1('1'), 'Mike', 'Johnson', '1122334455'),
  ('applicant4@example.com', 'user4', SHA1('1'), 'Emily', 'Davis', '2233445566'),
  ('applicant5@example.com', 'user5', SHA1('1'), 'Chris', 'Brown', '3344556677');

CREATE TABLE job_posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    jobTitle VARCHAR(255),
    jobDescription TEXT,
    hr_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO job_posts (jobTitle, jobDescription, hr_id)
VALUES
    ('Software Developer', 'Responsible for developing and maintaining software applications.', 1),
    ('Graphic Designer', 'Design visually appealing graphics for marketing materials.', 2),
    ('Marketing Specialist', 'Plan and execute marketing strategies.', 3),
    ('HR Manager', 'Oversee HR operations and ensure compliance with labor laws.', 1),
    ('Data Analyst', 'Analyze data to support business decisions.', 2),
    ('Content Writer', 'Create engaging and SEO-friendly content.', 3),
    ('Sales Executive', 'Drive sales and build customer relationships.', 1),
    ('Product Manager', 'Manage product lifecycle and roadmap.', 2),
    ('Customer Support Representative', 'Assist customers with inquiries and complaints.', 3),
    ('IT Support Specialist', 'Provide technical support and resolve IT issues.', 1);


CREATE TABLE job_applications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    job_id INT NOT NULL,
    jobTitle VARCHAR(255),
    jobDescription TEXT,
    applicant_id INT NOT NULL,
    hr_id INT NOT NULL,
    applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
