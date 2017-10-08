CREATE TABLE articles (
    id SERIAL PRIMARY KEY,
    title VARCHAR (200) NOT NULL,
    create_date TIMESTAMP NOT NULL,
    source VARCHAR NOT NULL,
    authors VARCHAR NOT NULL,
    url VARCHAR UNIQUE NOT NULL,
    top_image_url VARCHAR NOT NULL,
    summary VARCHAR (5000) NOT NULL,
    description VARCHAR NOT NULL,
    positivity_score int NOT NULL,
    trustworthiness DOUBLE PRECISION NOT NULL,
    likes INT NOT NULL
);
