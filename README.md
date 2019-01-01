# scheduler
https://medium.freecodecamp.org/learn-how-to-handle-authentication-with-node-using-passport-js-4a56ed18e81e

Backend Architecture:
====================

- Refactor project structure
    - Separate out business logic from controllers (lib or services)
    - Implement airbnb linting
    - Implement centralised error handling 
    - Implement logging avizia style
    - Have a constant file containing system wide constants.
    - Have db models separate from server folder and embed in req object

- Serivce Layer To Feed Queue
    - Write a process to provide DB connection
    - Logic to fetch from DB
    - Go Routine for logging the history with pending status
    - Go Routine for to feed the data to RabbitMQ
    - Same Go Routine above will be responsible for upating the status from pending success

- Serivce Layer To Fetch From Queue
    - Write a process to provide DB connection
    - Logic to fetch from RabbitMQ
    - Go Routine for logging the history with pending status
    - Go Routine for to ping the jobs webhook endpoint
    - Same Go Routine above will be responsible for upating the status from pending success
    - Ping the app webhook (webhook will update the status and create recurring entry)