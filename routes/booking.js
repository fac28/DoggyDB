const { Layout, AddBooking } = require("../templates.js");

function get(req, res) {
  const title = "Book Appointment";
  const content = AddBooking();
  const body = Layout({ title, content });
  res.send(body);
}

module.exports = { get };
