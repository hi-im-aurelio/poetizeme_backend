# PoetizeMe Backend API Documentation

## Overview

PoetizeMe is a API for poetry lovers to publish and appreciate beautiful poems.

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

### Poetry

#### Create a new poem

```http
POST /create-poetry
```

**Request Body:**

```json
{
    "title": "Pensamentos",
    "content": "...i like the cold, I like the snow. I like how she looks. I feel like crying when I see her. I feel like writing when I see it.",
    "tags": ["Pensamento"],
    "authorId": "3bbefcaf-9ccd-4c2d-8654-60bdef2bb4c8"
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

**Request Body:**

```json
{
    "poetryId": "3fccfc35-7fde-4b6c-bc33-7784f44c6fba",
    "authorId": "3bbefcaf-9ccd-4c2d-8654-60bdef2bb4c8"
}
```

#### Remove a like from a poem

```http
POST /poetry/deslike
```

**Request Body:**

```json
{
    "poetryId": "3fccfc35-7fde-4b6c-bc33-7784f44c6fba",
    "authorId": "c3a99d93-0f05-47d8-9633-6b4052d8c9cb"
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

