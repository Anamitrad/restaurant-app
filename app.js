let express = require('express')
let app = express();
let dbConfig = require('./config/db.config')
let serverConfig = require('./config/server.config')
let mongoose = require('mongoose')

mongoose.connect(dbConfig.DB_URL);

const db = mongoose.connection;

app.use(express.json());

db.on('error', () => {
    console.log("Error while connecting to the db");
});
db.on("open", () => {
    console.log("Connected to the MongoDB");
    /**
     * Write the code to init the db
     */
});

/**
 * Plug in the routes
 */
require("./routes/restaurant.routes")(app);

/**
 * Start the server
 */
 app.listen(serverConfig.PORT, () => {
    console.log(`Server started on the port no : ${serverConfig.PORT}`);
})
