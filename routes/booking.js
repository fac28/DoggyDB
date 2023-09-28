const { Layout, Table } = require('../templates.js')
const { listBookings } = require('../model/bookings.js')

function get (req, res) {
  // Parse query parameters for sorting
  const sortColumn = req.query.sort || 'date' // Default to sorting by 'date'
  const sortOrder = req.query.order || 'asc' // Default to ascending order

  const bookings = listBookings()

  function sortBookings (bookings) {
    bookings.sort((a, b) => {
      const aValue = a[sortColumn]
      const bValue = b[sortColumn]

      if (sortOrder === 'asc') {
        return aValue.localeCompare(bValue)
      } else {
        return bValue.localeCompare(aValue)
      }
    })
  }

  if (bookings.length === 0) {
    const title = 'No bookings found'
    const content = '<h1>No bookings found</h1>'
    const body = Layout({ title, content })
    return res.send(body)
  }

  const title = 'Bookings'
  sortBookings(bookings)
  let content = Table({ caption: title, data: bookings, sortColumn, sortOrder })

  content = /* html */ `${content} <a href="/book" id='bookbutt'><button>Add booking</button></a>
  `

  const body = Layout({ title, content })
  res.send(body)
}

module.exports = { get }
