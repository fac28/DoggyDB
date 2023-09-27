const express = require("express");
const booking = require("./routes/booking.js");
const AddBooking = require("./routes/bookingForm.js");
const AddCustomer = require("./routes/addCustomerForm.js");

const server = express();

server.get("/book", AddBooking.get);
server.get("/", booking.get);
server.post("/book", express.urlencoded({ extended: false }), AddBooking.post);
server.get("/register", AddCustomer.get);
server.post("/register", express.urlencoded({ extended: false }), AddCustomer.post);
module.exports = server;
