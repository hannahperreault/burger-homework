
CREATE TABLE burgers (
    id INTEGER AUTO_INCREMENT NOT NULL,
    description VARCHAR(255),
    burger_name VARCHAR(255),
    devoured BOOLEAN,
    createdAt TIMESTAMP NOT NULL,
    PRIMARY KEY(id)  
);

