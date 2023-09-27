const { Layout, Table } = require('../templates.js')
const { listBookings } = require('../model/bookings.js')

function get(req, res) {
  let title = "Appointments";
  const bookings = listBookings();
  let content = '<h1>No bookings found</h1>'

  // Parse query parameters for sorting
  const sortColumn = req.query.sort || "id"; // Default to sorting by 'id'
  const sortOrder = req.query.order || "asc"; // Default to ascending order

  // Sort the bookings array based on the selected column and order
  bookings.sort((a, b) => {
    const aValue = a[sortColumn];
    const bValue = b[sortColumn];

    if (sortOrder === "asc") {
      return aValue.localeCompare(bValue);
    } else {
      return bValue.localeCompare(aValue);
    }
  });

  if (bookings.length === 0) {
    res.status(404);
    title = "No bookings found";
    content = "<h1>No bookings found</h1>";
  } else {
    title = "Bookings";
    content = Table({ caption: title, data: bookings, sortColumn, sortOrder });
  }

  content += /*html*/`<a href="/book"><button>Add booking</button></a>
  <a href="/register"><button>Join the club</button></a>`;

  const body = Layout({ title, content });
  res.send(body);
}

module.exports = { get }
