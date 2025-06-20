```markdown
# Custom API Server – Keploy API Fellowship

A simple Express.js-based custom API server built as part of the Keploy API Fellowship by Shruti Sinha. It allows clients to perform CRUD (Create, Read, Update, Delete) operations on user data stored in MongoDB Atlas.

## About This Project

- Built a Node.js API server with Express
- Integrated with MongoDB Atlas using Mongoose
- Exposed 4 API endpoints for managing users
- Tested endpoints using Postman
- Hosted on localhost for development

## Tech Stack

- Node.js
- Express
- MongoDB Atlas
- Mongoose
- Postman (for testing)

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
```

**Response:**
```json
{
    "name": "Shruti",
    "quantity": 1,
    "_id": "6855c983dbcfd7fa89a82eca",
    "__v": 0
}
```

### GET `/users`
Retrieves all users stored in the database.

**Response:**
```json
[
    {
        "_id": "6855c983dbcfd7fa89a82eca",
        "name": "Shruti",
        "quantity": 1,
        "__v": 0
    }
]
```

### PUT `/users/:id`
Updates an existing user's information by ID.

**Request Body (JSON):**
```json
{
  "name": "Shruti Sinha",
  "email": "sinha.shruti0211@gmail.com",
  "age": 20
}
```

**Response:**
```json
{
    "_id": "6855c983dbcfd7fa89a82eca",
    "name": "Shruti Sinha",
    "quantity": 1,
    "__v": 0
}
```

### DELETE `/users/:id`
Deletes a user based on their unique ID.

**Response:**
```json
{
  "message": "User deleted"
}
```

## How to Run the Project

### Clone the repo
```bash
git clone https://github.com/shrutisinha02/custom-api-server.git
cd custom-api-server
```

### Install dependencies
```bash
npm install
```

### Create a .env file
```
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/?retryWrites=true&w=majority
```

### Start the server
```bash
node index.js
```
The server runs at http://localhost:5000

## Testing the API with Postman

1. Open the Postman Desktop App
2. Use the following URLs:
   - GET `http://localhost:5000/users`
   - POST `http://localhost:5000/users` with raw JSON body
   - PUT `http://localhost:5000/users/:id`
   - DELETE `http://localhost:5000/users/:id`
```
