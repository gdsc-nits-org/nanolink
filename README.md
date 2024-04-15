# NANO-LINK

#### MongoDB + Express + Node + Prisma + TypeScript API Template


## Getting Started

Prerequisites Node.js (>= version 14) MongoDB (Make sure MongoDB is installed and running)

## Installation

Clone the repository:
```markdown
  git clone https://github.com/gdsc-nits-org/nanolink.git
```

Change into the project directory:
```bash
  cd nanolink

```
Install dependencies:
```bash
   pnpm install

```

Create a '.env' file in the root directory and set the following environment variables:
```markdown
  MONGODB_URI="mongodb://johndoe:randompassword@localhost:27017/mydb"
```
Adjust the `port` and `MONGODB_URI` values as needed.

##  Database Setup

1. Ensure that your MongoDB server is running.
2. Create a database named 'url-shortener' (or the name specified in your '.env' file).

## Running Tests

To run tests, run the following command

```bash
  pnpm run dev
```


## Endpoints

### 1.  User Signup
1. Method: POST
2. Endpoint: /api/v1/signup
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
2. Endpoint: /api/v1/login
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
2. Endpoint: /api/v1/shorten
3. Request Body:


```json
  {
  "originalUrl": "https://example.com/very/long/url"
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
2. Endpoint: /api/v1/manage
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
### 5. DeleteUrl
1. Method: DELETE
2. Endpoint: /api/v1/DeleteUrl
3. Request Body:


```http
  {
   DELETE/api/v1/DeleteUrl/abc123
}

```
4. Responses:

```json
 {
  "success": true,
  "message": "URL deleted successfully"
}

```
### 6. analytics
1. Method: GET
2. Endpoint: /api/v1/getAnalytics
3. Request Body:


```http
  {
   GET/api/v1/getAnalytics/abc123
}

```
4. Responses:

```json
 {
  "id": "abc123",
  "originalUrl": "https://example.com/very/long/url",
  "shortUrl": "https://our-nanolink/abc123",
  "clickedCount": 100,
  "lastClicked": "2024-04-15T12:00:00Z",
  "createdAt": "2024-04-01T12:00:00Z",
  "updatedAt": "2024-04-15T12:00:00Z"
}


```
## Middleware
### 1. Authentication Middleware

1. Purpose: Verifies the JWT token sent by the client and adds the authenticated user's information to the request object.

2. Usage: Applied to protected routes that require authentication.

## Contributing

Contributions are always welcome!
