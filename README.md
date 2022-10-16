An SPA (Single-page application) is a web app implementation that loads only a single web document, and then updates the body content of that single document via JavaScript APIs such as XMLHttpRequest and Fetch when different content is to be shown. 

This project as a login and register page in which a user can register and can login with the user credentials.

For this first we needed to install the json server package in our project by executing the command 'npm install -g json-server'.

After that we need to create the a database file 'db.json' in the folder assets then we need to execute the command 'json-server -- watch db.json ' to set the 'db.json' file to database.

After the sucessfull intallation of server the user get registered, the data will pass to the JSON server(live server) through post method.

Later we fetch the data from server through get method and check the credentials and get the alert message. Also we use the app-router
