const express = require("express");
const booking = require("./routes/booking.js");
const AddBooking = require("./routes/bookingForm.js");

const server = express();

server.get("/form", AddBooking.get);
server.get("/", booking.get);
server.post("/form", express.urlencoded({ extended: false }), AddBooking.post);

module.exports = server;
