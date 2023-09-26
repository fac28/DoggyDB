const express = require("express");

const bookingForm = require("./routes/booking.js");
const server = express();

server.get("/", bookingForm.get);
module.exports = server;
