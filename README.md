This file describes the installation process of the Location API for OOR project as well as its structure.
==========================================================================================================

## Installation

To install the API, follow these steps:
1. Clone the repository: ```git clone https://github.com/vagison/oor-api.git```
2. Navigate to the project directory: ```cd oor-api```
3. Install the dependencies: ```npm i```

## Running

To run the API, follow these steps:
1. To start the compiled application located in the dist directory using Node you have to run the following commands:

    ```npm run build```
   
    ```npm start```
3. Alternatively to run the app in development mode with nodemon you have to run the following command: ```npm run dev```
4. To clean the dist directory, you can use the following command: ```npm run clean```

## Environment Configuration

Create a .env file in the root of the project and configure the environment variables listed in .env.dist:

## API description

app.js is the entry point of the app. It starts the server, initiates the the database connection and more:

The folder structure of the project is self explanatory. Here's a brief introduction to it:
-------------------------------------------------------------------------------------------
* Config: Contains all configurations required for database connection, CORS, and JWT settings.
* Constants: Holds all hardcoded values, including error and response messages.
* Controllers: Houses the actual implementations of server-side functions.
* Middleware: Includes functions meant to be executed when Routes attempt to access Controllers. This also contains error-handling logic, cookie parser, and Express validators.
* Models: Defines the schemas for server-side entities.
* Routes: Represents server-side endpoints that expect calls from the client-side. Routes redirect these calls to Controllers.
* Services: Encompasses various service modules responsible for specific business logic and functionalities.
* Util: Serves as a folder to store helper functions, validator schemas, and database initializing logic.

There are some files in the root directory apart from app.js:
-------------------------------------------------------------
* package.json - includes a list of the packages and their versions used for this project.
* .babelrc.json - used to run the app with nodemon in development mode and for building purposes.
* .gitignore - used to exclude files from being pushed to the repository.

Server-side entities
---------------------
* User
* Location

## Using API endpoints

To use the endpoints, you can visit the Postman URL below and then either fork or download the collection:

https://www.postman.com/crimson-zodiac-594208/workspace/oor-api/request/24141310-e93a778f-6a19-4f30-b5bb-cb763246ae1f

The request names are self-explanatory, and any additional information can be found within the requests themselves.

Note that the global variable "apiURL" should be manually set in your Postman client according to your usage (default is http://localhost:3000).
