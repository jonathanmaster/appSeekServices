CREATE TABLE product(
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  newName VARCHAR(200) NOT NULL,
  description VARCHAR(200) NOT NULL,
  address VARCHAR(200) NOT NULL,
  service VARCHAR(200) NOT NULL,
  category VARCHAR(200) NOT NULL,
  phoneNumber INT NOT NULL,
  whatsapp_link VARCHAR(200) NOT NULL,
  facebook_link VARCHAR(200),
  instagram_link VARCHAR(200),
  experienceYears BIGINT,
  availableDays VARCHAR(100),
  availableHours VARCHAR(100),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



