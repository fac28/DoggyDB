const { Layout, AddBooking } = require("../templates.js");
const { createBooking } = require("../model/bookings.js");

function get(req, res) {
  const title = "Book Appointments";
  const content = AddBooking();
  
  const body = Layout({ title, content });

  res.send(body);
}

function post(req, res) {

  console.log(req.body)

  const dog_name = req.body.dog_name;
  const date = req.body.date;
  const owner_name = req.body.owner_name;
  const breed = req.body.breed;

  const booking = { dog_name, date, owner_name, breed };

  try {
    createBooking(booking);
    res.redirect("/");
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).send("Internal Server Error");
  }
}

module.exports = { get, post };
