# PoetizeMe Backend API Documentation

## Overview

PoetizeMe is an API for poetry lovers to publish and appreciate beautiful poems.

## POSTMAN EXAMPLES
[See the examples here](https://www.postman.com/blue-comet-9798/workspace/poetizeme/api)
### User Management

### HOST: https://poetizeme-backend.vercel.app/

#### Register a new user (author)

```http
POST /author
```

**Request Body:**

```json
{
  "username": "fariosofernando404",
  "password": "123456"
}
```

#### User Login

```http
POST /login
```

**Request Body:**

```json
{
  "username": "fariosofernando404",
  "password": "123456"
}
```

#### Delete User

```http
DELETE /delete-author
```

**Authentication:**
- Include the user's token in the request headers.

### Poetry

#### Create a new poem

```http
POST /create-poetry
```

**Authentication:**
- Include the user's token in the request headers.

**Request Body:**

```json
{
    "title": "Pensamentos",
    "content": "...i like the cold, I like the snow. I like how she looks. I feel like crying when I see her. I feel like writing when I see it.",
    "tags": ["Pensamento"]
}
```

#### Get all poems

```http
GET /poetry
```

#### Get a poem by ID

```http
GET /get-poetry-by-id/:id
```

#### Get poems by tag

```http
GET /get-poety-by-tag/:tag
```

#### Like a poem

```http
POST /poetry/like
```

**Authentication:**
- Include the user's token in the request headers.

**Request Body:**

```json
{
    "poetryId": "3fccfc35-7fde-4b6c-bc33-7784f44c6fba"
}
```

#### Remove a like from a poem

```http
POST /poetry/deslike
```

**Authentication:**
- Include the user's token in the request headers.

**Request Body:**

```json
{
    "poetryId": "3fccfc35-7fde-4b6c-bc33-7784f44c6fba"
}
```

#### Get poems between dates

```http
POST /get-poetry-date-between
```

**Request Body:**

```json
{
    "startDate" : "2023-10-24",
    "endDate" : "2023-10-25"
}
```

## Contributing

We welcome contributions in the form of code, suggestions, or bug reports. Feel free to open a pull request or an issue on GitHub.

## License

This project is licensed under the MIT License.
