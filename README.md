# Ticket Management System

## Setup Instructions

1. Clone the repository:
   git clone <repository_url>
   cd ticket-management-system

2.Install the dependencies:
npm install

3.Run the application:
node server.js or nodemon server.js

4.The API will be available at http://localhost:3000/api/tickets.


5. Endpoints
POST /api/tickets/create - Create a new ticket
Request body: { "title": "string", "description": "string" }

GET /api/tickets - Retrieve all tickets

GET /api/tickets/:id - Retrieve a ticket by ID- use id genrated by uuid package dont use _id 

PUT /api/tickets/:id - Update a ticket by ID
Request body: { "title": "string", "description": "string", "status": "string" }

DELETE /api/tickets/:id - Delete a ticket by ID

