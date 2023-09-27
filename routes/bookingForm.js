const { Layout, AddBooking } = require("../templates.js");
const { createBooking } = require("../model/bookings.js");

function get(req, res) {
  let title = "Book Appointments";

  const content = AddBooking();
  const body = Layout({ title, content });
  res.send(body);
}

function post(req, res) {
  // const errors = {};
  // if (req.body.dog_name == "") {
  //   errors.dog_name = "Please tell us who you are";
  // }
  // if (req.body.date == "") {
  //   errors.date = "Please select a date";
  // }
  // if (req.body.owner == "") {
  //   errors.owner = "Please tell us the name of your hooman";
  // }
  console.log(req.body);
  // const owner = req.body.owner_name;
  const dog_name = req.body.dog_name;
  const date = req.body.date;

  const booking = { dog_name, date };

  createBooking(booking);

  res.redirect("/");
}

module.exports = { get, post };
