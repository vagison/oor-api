This file describes the installation and the structure of Location API for OOR project.
=======================================================================================

## Installation

To install the API, follow these steps:
1. Clone the repository:   
    git clone https://github.com/vagison/oor-api.git
2. Navigate to the project directory:
    cd oor-api
3. Install dependencies:
    npm i

## Running

To run the API, follow these steps:
1. To start the compiled application located in the dist directory using Node you have to run the following commands
    npm run build
    npm start
2. Alternativelly to run the app in development mode with nodemon you have to run the following command
    npm run dev
3. To clean the dist directory, you can use the following command:
    npm run clean

## Environment Configuration

Create a .env file in the root of the project and configure the environment variables as described in .env.dist:

## API description

app.js is the entry point of the app. It starts the server, initiates the connection to the database and more:
--------------------------------------------------------------------------------------------------------------

The folder structure of the project is self explanatory. Here's a brief introduction to it:
-------------------------------------------------------------------------------------------
* Config - contains all configurations required for db connection, cors and jwt configuration.
* Constants - contains all hardcoded values, including: error and response messages.
* Controllers - actual implementations of server-side functions.
* Middleware - any functions supposed to be executed when Routes try to access Controllers.
* Models - schemas of server-side entities.
* Routes - server-side links that expect calls from the client-side. Routes redirect these calls to Controllers (see below).
* Services - contains various service modules responsible for handling specific business logic and functionalities.
* Util - serves as a folder to store helper functions, validator schemas and db initializing logic.

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

To use the endpoints, you can visit the Postman URL below and then either fork or download the collection. 

https://www.postman.com/crimson-zodiac-594208/workspace/oor-api/request/24141310-e93a778f-6a19-4f30-b5bb-cb763246ae1f

The request names are self-explanatory, and additional information can be found within the requests themselves.

Note that the global variable "apiURL" should be manually set according to usage (default is http://localhost:3000).