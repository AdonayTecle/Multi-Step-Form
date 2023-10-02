# Multi-Step-Form
![image](https://github.com/AdonayTecle/Multi-Step-Form/assets/15231050/0194e258-8763-4ad3-87b5-2337a691799f)
This is a multi-step form application built with React on the client-side and Express.js on the server-side. It allows users to submit their information in multiple steps.

# Prerequisites

Before you begin, ensure you have met the following requirements:

Node.js: Make sure you have Node.js installed. You can download it at https://nodejs.org/en/download.

# Getting Started

    npm install dotenv

## Client Setup

Open your terminal and navigate to the client directory:

    cd client

Install the client-side dependencies:

    npm install

create a build directory:

    npm run build

# Server Setup

Open a new terminal window and navigate to the server directory:

    cd server

Install the server-side dependencies:

    npm install

Create a SQLite database file.
Navigate to Multi-Step-Form\server\ and open the .env file
Change the DATABASE_PATH to the SQLite database file in your system

    DATABASE_PATH=C:\\sqlite\\dataform.db

Start the server:

    npm start

The Express.js server should now be running at http://localhost:3001.

# Project Structure

The project is structured as follows:

* **client/**: Contains the client-side React application.
    * **src/**: Contains the source code for the client application.
        * **components/**: Contains the React components for the form steps.
        * **App.tsx**: Main application component.
    * **package.json**: Client-side dependencies and scripts.
    * **tsconfig.json**: TypeScript configuration for the client.
* **server/**: Contains the server-side Express.js application.
    * **src/**: Contains the source code for the server application.
        * **controllers/**: Contains the controller logic for handling form submissions.
        * **models/**: Contains the Sequelize model for the user data.
        * **routes/**: Contains the API route definitions.
        * **server.ts**: Main server file.
        * **db.ts**: Database configuration using Sequelize.
    * **package.json**: Server-side dependencies and scripts.
    * **tsconfig.json**: TypeScript configuration for the server.

This application is built with React and Express.js.
It uses Sequelize as an ORM to interact with the SQLite database.
