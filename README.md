#📧 Contact Request Backend Service
This is an isolated NestJS microservice designed to handle and store contact submission requests. It implements a clean, layered architecture (Controller -> Service -> Mock Repository) and enforces strict input validation.

##Features\* **Endpoint:** `POST /contact-request`

- **Validation:** Uses DTOs and `class-validator` for strict input checks.
- **Storage:** Data is stored in an **In-Memory Mock Repository**, adhering to the requirement of not using a persistent database.
- **Error Handling:** Returns **400 Bad Request** for validation failures and **201 Created** for success.

##🚀 Getting Started###Prerequisites\* Node.js (LTS recommended)

###Installation1. Clone the repository:

```bash
git clone https://github.com/s1rserg/contact-backend.git
cd contact-backend

```

2. Install dependencies:

```bash
npm install

```

###Running the ApplicationTo run the application in development mode with live reload:

```bash
npm run start:dev

```

The application will be available at `http://localhost:3000`.

##🖥️ API Endpoint###`POST /contact-request`Submits a new contact message and stores it temporarily in memory.

| Parameter | Type     | Required | Validation   | Description                 |
| --------- | -------- | -------- | ------------ | --------------------------- |
| `name`    | `string` | Yes      | Min 2 chars  | Sender's name.              |
| `email`   | `string` | Yes      | Valid email  | Sender's email address.     |
| `message` | `string` | Yes      | Min 10 chars | The content of the message. |
