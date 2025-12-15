The implementation uses a classic layered architecture (Controller, Service, Repository).
Validation is handled by a global ValidationPipe and DTOs, ensuring immediate 400 Bad Request responses for invalid data.
The Service delegates storage to the InMemoryContactRequestRepository, fulfilling the mock requirement.
The Controller explicitly returns 201 Created on success.
The repository pattern with Dependency Injection decouples business logicfrom the temporary in-memory storage, while the use of DTOs ensures strong type safety and clean data contracts.

The key unhandled technical edge-case is memory exhaustion inherent to using an in-memory array for persistent storage, which is an accepted constraint given the "mock-repository" requirement.
