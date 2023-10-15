<b> Introduction


This is a REST API developed using Node.js, Express, and MongoDB. It includes the following features:

JWT authentication
Testing with Jest
Pagination
Documentation of the endpoints
Installation
To install the API, run the following command:

npm install
Running the API
To run the API, run the following command:

npm start for spinning up the server


cd 👉 flatFile, then cmd tsc populateDb.tsc then cmd node populateDb.js

                                     💡
                          ** DATABASE CONNECTION **


Here, I am using Cloud based instance of MongoDB on Atlas server. it is important you create a cluster of MongoDb on Atlas and then replace the URI used in creating connection via mongoose. my credentials are secured in .env file to manage access to making connection to my account. Thanks for your understanding!

Authentication
The API uses JWT authentication. To obtain a JWT token, you can send a POST request to the /auth/login endpoint with your username and password. The response will include a JWT token.

Testing
The API is tested using Jest. To run the tests, run the following command:

npm test
Pagination
The API supports pagination. To paginate the results of an endpoint, you can use the limit and offset query parameters. For example, to get the first 10 acronyms, you would send a GET request to the following endpoint:

/acronyms?limit=10
To get the next 10 acronyms, you would send a GET request to the following endpoint:

/acronyms?limit=10&offset=10
You can continue to paginate the results by increasing the offset value.

Documentation of the endpoints
The following table lists the endpoints of the API and their descriptions:

Endpoint	Description
/auth/login	Authenticates a user and returns a JWT token.
/acronyms	Gets a list of acronyms.
/acronyms/:acronymID	Gets a specific acronym.
/acronyms	Creates a new acronym.
/acronyms/:acronymID	Updates an existing acronym.
/acronyms/:acronymID	Deletes an existing acronym.
Example usage
To get a list of all acronyms, you can send a GET request to the /acronyms endpoint:

curl http://localhost:3000/acronyms
To get a specific acronym, you can send a GET request to the /acronyms/:acronymID endpoint, where :acronymID is the ID of the acronym:

curl http://localhost:3000/acronyms/
To create a new acronym, you can send a POST request to the /acronyms endpoint with the following JSON body:



To update an existing acronym, you can send a PUT request to the /acronyms/:acronymID endpoint with the following JSON body:



To delete an existing acronym, you can send a DELETE request to the /acronyms/:acronymID endpoint.

