-- Create posts table
CREATE TABLE IF NOT EXISTS posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- Insert sample data
INSERT INTO posts (title, content) VALUES 
('Welcome to My Blog', 'This is my first blog post using Docker Compose!'),
('Docker Tutorial', 'Learning Docker is fun and powerful!'),
('PostgreSQL Tips', 'Database management made easy with Docker.');
