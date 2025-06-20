# Custom API Server – Keploy API Fellowship

This is a simple Express.js-based custom API server built as part of the **Keploy API Fellowship** by **Shruti Sinha**. It allows clients to perform CRUD (Create, Read, Update, Delete) operations on user data stored in **MongoDB Atlas**.

---

## About This Project

- Built a Node.js API server with Express
- Integrated with MongoDB Atlas using Mongoose
- Exposed 4 API endpoints for managing users
- Tested endpoints using Postman
- Hosted on localhost for development

---

## Tech Stack

- **Node.js**
- **Express**
- **MongoDB Atlas**
- **Mongoose**
- **Postman (for testing)**

---

## API Endpoints

### POST `/users`
Creates a new user.

**Request Body (JSON):**
```json
{
  "name": "Shruti",
  "email": "22051282@kiit.ac.in",
  "age": 20
}

**Response:**
```json
{
  "_id": "60b6c8d3...",
  "name": "Shruti",
  "email": "22051282@kiit.ac.in",
  "age": 20,
  "__v": 0
}

### GET `/users`
Retrieves all users stored in the database.

**Response:**
```json
[
  {
    "_id": "60b6c8d3...",
    "name": "Shruti",
    "email": "22051282@kiit.ac.in",
    "age": 20
  }
]

### PUT /users/:id
Updates an existing user's information by ID.

**Request Body (JSON):**
```json
{
  "name": "Shruti Sinha",
  "age": 21
}

**Response:**
```json
{
  "_id": "60b6c8d3...",
  "name": "Shruti Sinha",
  "email": "22051282@kiit.ac.in",
  "age": 21,
  "__v": 0
}

### DELETE /users/:id
Deletes a user based on their unique ID.

**Response:**
{
  "message": "User deleted"
}

## How to Run the Project

### Clone the repo
git clone https://github.com/shrutisinha02/custom-api-server.git
cd custom-api-server

### Install dependencies
npm install

### Create a .env file
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/?retryWrites=true&w=majority

### Start the server
node index.js
The server runs at http://localhost:5000

## Testing the API with Postman

### Open the Postman Desktop App

Use the following URLs:

GET http://localhost:5000/users

POST http://localhost:5000/users with raw JSON body

PUT http://localhost:5000/users/:id

DELETE http://localhost:5000/users/:id

