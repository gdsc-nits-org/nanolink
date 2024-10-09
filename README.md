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
  PORT="RANDOM_PORT"
  JWT_SECRET_KEY="STRONG_SECRET_KEY"
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
  "name": "xyz",
  "email": "abc@gmail.com",
  "password": "password"
}

```
4. Responses:

```json
  {
  "message": "User signed up successfully"
  "status": 200,
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
   "status": 200,
    "msg": "Loggedin Successfully"
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
    "msg": "Url shortened successfully",
    "status": 200,
    "shortUrl": "https://our-nanolink/abc123"
}

```
### 4. Fetch All URLs
1. Method: GET
2. Endpoint: /api/v1/url/fetchAll
3. Request Body:


```json
{
   "userId": "66235a95d41ea94865cc01e6"
    
}

```

4. Responses:

```json
  {
        "id": "66235b13d41ea94865cc01e8",
        "originalUrl": "https//:google.com",
        "shortUrl": "localhost/st6Wnp",
        "clickedCount": 0,
        "lastClicked": "Never",
        "createdAt": "April 20th 2024, 11:35:07 am",
        "updatedAt": "April 20th 2024, 11:35:07 am",
        "userId": "66235a95d41ea94865cc01e6"
    }

```
### 5. Manage Shortened URLs
1. Method: POST
2. Endpoint: /api/v1/url/manage/shortUrl_ID
3. Request Body:


```json
  {
    "originalUrl": "https://example.com/very/long/url",
  },

```

4. Responses:

```json
 "msg": "Url updated successfully",
 "status": 200


```
### 6. DeleteUrl
1. Method: DELETE
2. Endpoint: /api/v1/DeleteUrl/shortUrl_ID
3. Responses:

```json
 {
  "status": 200,
  "message": "URL deleted successfully"
}

```
### 7. analytics
1. Method: GET
2. Endpoint: /api/v1/analytics/shortUrl_ID
3. Responses:

```json
 {
    "id": "6622da11df9bf4bfb7a347cf",
    "originalUrl": "https://example.com/very/long/url",
    "shortUrl": "localhost/ofib6x",
    "clickedCount": 0,
    "lastClicked": "Never",
    "createdAt": "April 20th 2024, 2:24:40 am",
    "updatedAt": "April 20th 2024, 2:24:40 am"
}


```
## Middleware
### 1. Authentication Middleware

1. Purpose: Verifies the JWT token sent by the client and adds the authenticated user's information to the request object.

2. Usage: Applied to protected routes that require authentication.

## Contributing

Contributions are always welcome!
