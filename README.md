# User and Password

- admin
- password123

# Notes App

An application to manage notes with categories, filtering, and archiving support.

## Technologies Used

### Frontend
- React
- TypeScript
- TailwindCSS

### Backend
- Node.js
- Express
- Sequelize (MySQL)

## Requirements

- Node.js 18.17 or higher
- MySQL 8.0 or higher

### Environment Variables
Create a `.env` file in both the `frontend` and `backend` folders with the following configuration:

#### Backend
```plaintext
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=notes_app
DB_HOST=127.0.0.1
DB_DIALECT=mysql
