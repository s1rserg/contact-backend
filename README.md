# 📧 Contact Request Backend Service

An isolated **NestJS microservice** designed to handle and store contact submission requests. It follows a clean, layered architecture and enforces strict input validation.

---

## Features

- **Endpoint:** `POST /contact-request`
- **Validation:** DTOs with `class-validator` for strict input checks
- **Storage:** In-memory **Mock Repository** (no persistent database)
- **Error Handling:**
  - `400 Bad Request` for validation failures
  - `201 Created` on successful submission

---

## Architecture

```
Controller → Service → Mock Repository
```

Each layer has a single responsibility, ensuring testability and maintainability.

---

## Getting Started

### Prerequisites

- Node.js (LTS recommended)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/s1rserg/contact-backend.git
cd contact-backend
```

2. Switch to the `feat/contact-request` branch:

```bash
git checkout feat/contact-request
```

3. Install dependencies:

```bash
npm install
```

---

### Running the Application

To start the application in development mode with live reload:

```bash
npm run start:dev
```

The service will be available at:

```
http://localhost:3000
```

---

## API Reference

### `POST /contact-request`

Submits a new contact message and stores it temporarily in memory.

#### Request Body

| Field   | Type   | Required | Validation   | Description            |
| ------- | ------ | -------- | ------------ | ---------------------- |
| name    | string | Yes      | Min 2 chars  | Sender's name          |
| email   | string | Yes      | Valid email  | Sender's email address |
| message | string | Yes      | Min 10 chars | Message content        |

#### Responses

- **201 Created** – Contact request successfully stored
- **400 Bad Request** – Validation failed
