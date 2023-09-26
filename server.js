const express = require("express");

const bookingForm = require("./routes/booking.js");
const server = express();

server.get("/", bookingForm);
module.exports = server;
