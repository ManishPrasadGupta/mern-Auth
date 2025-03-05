# Full-Stack Authentication System

This project is a full-stack authentication system built using React for the frontend and Express for the backend. It incorporates CORS and JWT tokens for secure authentication.
## Features

- User registration and login
- JWT-based authentication
- Refresh token implementation
- CORS configuration for secure cross-origin requests
## Technologies Used
### Frontend:
- React
- Axios
- React Router
### Backend:

- Express.js

- bcryptjs (for password hashing)

- jsonwebtoken (JWT authentication)

- dotenv (for environment variables)

- cors (Cross-Origin Resource Sharing)

- mongoose (for MongoDB database)

  

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/your-repo.git

cd your-repo
```

### 2. Install Dependencies and Build the Project

From the root directory, run:
```bash
npm install

npm run build
```
This will install all dependencies for both the frontend and backend and build the project.

### 3. Environment Variables

Create a .env file in the backend directory and add the following:
```bash
MONGODB_URI=mongodb+srv://your_username:your_password@cluster.mongodb.net/database_name
PORT=3000
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development

MAILTRAP_TOKEN=your_mailtrap_token
MAILTRAP_ENDPOINT=smtp.mailtrap.io

CLIENT_URL=http://localhost:5173
```

### 4.  Start the Application

To start both the frontend and backend servers simultaneously, run:
```bash
npm start
```
  
## Usage

- Open the application in your browser at http://localhost:3000
- Register a new user
- Login with the registered credentials
- Access protected routes with JWT authentication
## API Endpoints


- POST /api/auth/register - Register a new user
- POST /api/auth/login - Login and receive JWT token
- GET /api/auth/protected - Access a protected route