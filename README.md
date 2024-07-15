A password manager created in ReactJS, NodeJS, Express and MySQL that allows the user to store their password in a mysql database and encrypt them using CryptoJS. The UI elements have been created using CSS, Axios is used for sending http requests, Nodemon is used for ease of development and Cors is used to access the local MySQL database.

In order to use the App, create a MySQL database with the name "passwordmanager" and a table called "passwords" with id(INT,PK,AI) , Password(VARCHAR(255)), title (VARCHAR(255)) as columns.

Change the password in the index.js in server folder to your local MySQL workbench password.

Run the client and server at the terminal.
