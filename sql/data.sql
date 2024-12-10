CREATE TABLE hr (
    hr_id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(100),
    username VARCHAR(15),
    password TEXT,
    full_name VARCHAR(100),
    contact VARCHAR(15),
    business_type VARCHAR(100),
    date_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);

INSERT INTO hr (email, username, password, full_name, contact, business_type) VALUES
('jane.doe@example.com', 'janedoe', SHA('1'), 'Jane Doe', '09123456789', 'Healthcare'),
('john.smith@example.com', 'johnsmith', SHA('1'), 'John Smith', '09187654321', 'Technology'),
('emily.clark@example.com', 'emilyclark', SHA('1'), 'Emily Clark', '09123498765', 'Education'),
('michael.brown@example.com', 'mikebrown', SHA('1'), 'Michael Brown', '09183746592', 'Construction'),
('sarah.lee@example.com', 'sarahlee', SHA('1'), 'Sarah', 'Lee 09174563218', 'Finance');


CREATE TABLE applicant (
    applicant_id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(100),
    username VARCHAR(15),
    password TEXT,
    full_name VARCHAR(100),
    contact VARCHAR(15),
    prev_job VARCHAR(100),
    years_of_experience INT,
    date_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);

INSERT INTO applicant (email, username, password, full_name, contact, prev_job, years_of_experience) 
VALUES
  ('applicant1@example.com', 'user1', SHA1('1'), 'John Doe', '1234567890', 'Software Engineer', 5),
  ('applicant2@example.com', 'user2', SHA1('1'), 'Jane Smith', '0987654321', 'Graphic Designer', 3),
  ('applicant3@example.com', 'user3', SHA1('1'), 'Mike Johnson', '1122334455', 'Data Analyst', 4),
  ('applicant4@example.com', 'user4', SHA1('1'), 'Emily Davis', '2233445566', 'Project Manager', 7),
  ('applicant5@example.com', 'user5', SHA1('1'), 'Chris Brown', '3344556677', 'Marketing Specialist', 2);


CREATE TABLE job_posts (
    job_id INT AUTO_INCREMENT PRIMARY KEY,
    job_title VARCHAR(255),
    job_description TEXT,
    hr_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO job_posts (job_title, job_description, hr_id)
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
    application_id INT AUTO_INCREMENT PRIMARY KEY,
    job_id INT NOT NULL,
    job_title VARCHAR(255),
    job_description TEXT,
    applicant_id INT NOT NULL,
    applicant_name VARCHAR(100),
    years_of_experience INT,
    status VARCHAR(50) DEFAULT 'pending',
    hr_id INT NOT NULL,
    applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO job_applications (job_id, job_title, job_description, applicant_id, applicant_name, hr_id, years_of_experience)
VALUES
  (1, 'Software Developer', 'Responsible for developing and maintaining software applications.', 1, 'John Doe', 1, 5),
  (2, 'Graphic Designer', 'Design visually appealing graphics for marketing materials.', 2, 'Jane Smith', 2, 3),
  (5, 'Data Analyst', 'Analyze data to support business decisions.', 3, 'Mike Johnson', 2, 4),
  (4, 'HR Manager', 'Oversee HR operations and ensure compliance with labor laws.', 4, 'Emily Davis', 1, 7),
  (3, 'Marketing Specialist', 'Plan and execute marketing strategies.', 5, 'Chris Brown', 3, 2),
  (8, 'Product Manager', 'Manage product lifecycle and roadmap.', 4, 'Emily Davis', 2, 7),
  (6, 'Content Writer', 'Create engaging and SEO-friendly content.', 2, 'Jane Smith', 3, 3),
  (7, 'Sales Executive', 'Drive sales and build customer relationships.', 5, 'Chris Brown', 1, 2),
  (9, 'Customer Support Representative', 'Assist customers with inquiries and complaints.', 3, 'Mike Johnson', 3, 4),
  (10, 'IT Support Specialist', 'Provide technical support and resolve IT issues.', 1, 'John Doe', 1, 5);
