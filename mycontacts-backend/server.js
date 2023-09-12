const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

// Add a built-in middleware
app.use(express.json());
app.use("/api/contacts",require("./routes/contactRoutes"));
// added error handler
app.use(errorHandler);


app.listen(port, () => {
    console.log('Server running on port ${port}');
});