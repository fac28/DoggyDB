const { Layout, Table, AddBooking } = require("../templates.js");
const { listBookings } = require("../model/bookings.js");

function get(req, res) {
  let title = "Appointments";
  const bookings = listBookings();
  if (bookings.length == 0) {
    res.status(404);
    title = "No bookings found";
    content = "<h1>No bookings found</h1>";
  } else {
    title = "Bookings";
    content = Table({ caption: title, data: bookings });
  }
  content += /*html*/`<a href="/book"><button>Add booking</button></a>`
  const body = Layout({ title, content });
  res.send(body);
}

module.exports = { get };
