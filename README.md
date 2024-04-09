# NANO-LINK

#### MongoDB + Express + Node + Prisma + TypeScript API Template


## Getting Started

#### Understanding the folder structure
```json
├── prisma
│   └── schema.prisma
├── src
│   ├── controllers
│   │   ├── Home
│   │   |── UrlShortner
|   |   |── login
|   |   |── manage
│   │   ├── redirect
│   │   |── signup
│   │   ├── analytics
│   │   |── deleteUrl
|   |
│   ├── globals
│   │── interfaces 
│   │── interfaces   
│   ├── middlewares
│   ├── routers
│   ├── utils
│── server.ts
│── README.md
```

1. The Database schema is in `schema/prisma.schema`
2. `server.ts` is the starting point for the application.
3. API Controllers should be made inside `src/controllers`. Use subdirectories or files as per need.
4. API Middlewares exist in `src/middlewares`.
5. Once the Controllers and Middlewares are made, those are exposed at endpoints in `src/routers`.
6. Every Controller and Middleware function is of type `Interfaces.Controllers.Async` or `Interfaces.Middlewares.Async` (A Sync variant exists too). All these interfaces are written in `src/interfaces`.
7. Any utility functions (for the purpose of abstracting/reusing code in Controllers/Middlewares) should be made in `src/utils`.
8. `src/global` directory contains constants and helper functions for handling responses and error.




## Installation

Clone the repository:
```json
  git clone https://github.com/gdsc-nits-org/nanolink.git
```

Change into the project directory:
```bash
  cd nanolink

```
Install dependencies:
```bash
   npm install

```

Create a '.env' file in the root directory and set the following environment variables:
```json
  MONGODB_URI="mongodb://johndoe:randompassword@localhost:27017/mydb"

```
Adjust the `port` and `MONGODB_URI` values as needed.



##  Database Setup

1. Ensure that your MongoDB server is running.
2. Create a database named 'url-shortener' (or the name specified in your '.env' file).
##  Database Setup

1. Ensure that your MongoDB server is running.
2. Create a database named 'url-shortener' (or the name specified in your '.env' file).
## Running Tests

To run tests, run the following command

```bash
  npm run dev
```


## Endpoints

### 1.  User Signup
1. Method: POST
2. Endpoint: /api/signup
3. Request Body:


```json
  {
  "username": "example_user",
  "password": "password"
}

```
4. Responses:

```json
  {
  "success": true,
  "message": "User signed up successfully"
}


```
### 2. User Login
1. Method: POST
2. Endpoint: /api/login
3. Request Body:


```json
  {
  "username": "example_user",
  "password": "password"
}

```
4. Responses:

```json
  {
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}


```
### 3. Shorten URL
1. Method: POST
2. Endpoint: /api/shorten
3. Request Body:


```json
  {
  "longUrl": "https://example.com/very/long/url"
}

```
4. Responses:

```json
  {
  "shortUrl": "https://our-nanolink/abc123"
}

```
### 4. Manage Shortened URLs
1. Method: POST
2. Endpoint: /api/manage
3. Request Body:


```json
 [
  {
    "shortCode": "abc123",
    "longUrl": "https://example.com/very/long/url",
  },
  {
    "shortCode": "def456",
    "longUrl": "https://example.com/another/long/url",
  }
]

```

## Middleware
### 1. Authentication Middleware

1. Purpose: Verifies the JWT token sent by the client and adds the authenticated user's information to the request object.

2. Usage: Applied to protected routes that require authentication.

## Contributing

Contributions are always welcome!
