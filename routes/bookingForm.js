const { Layout, AddBooking } = require("../templates.js");
const { createBooking } = require("../model/bookings.js");

function get(req, res) {
  let title = "Book Appointments";

  let content = AddBooking();
  const body = Layout({ title, content });

  res.send(body);
}

function post(req, res) {
  const dog_name = req.body.dog_name;
  const date = req.body.date;

  const booking = { dog_name, date };

  createBooking(booking);

  res.redirect("/");
}

module.exports = { get, post };
