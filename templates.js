function Layout ({ title, content }) {
  return /* html */ `
      <!doctype html>
      <html lang="en">
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
          <meta charset="UTF-8">
          <title>${title}</title>
          <link rel="stylesheet" href="styles.css" />
        </head>
        <body>
          <div class="layout">
            <main>
              ${content}
            </main>
          </div>
        </body>
      </html>
    `
}

function AddBooking () {
  return /* html */ `
  <h1> Book Appointment</h1>
      <form method="POST" action="/book">
        <p>

          <label for="owner_name">Owner's Name</label>
          <input name="owner_name" id="owner_name" value = 'Deepa' required>

        </p>
        <p>

        <label for="dog_name">Dog's Name</label>
        <input name="dog_name" id="dog_name" value='Bruno' required>

      </p>

    <p>

    <label for="breed">Dog's breed</label>
    <input name="breed" id="breed" value='Cocker Spaniel' required>

  </p>
  <p>

  <label for="date">Appointment Date</label>
  <input name="date" type = "date" id="date" value = '2024-01-01' required>

</p>
        <button>Submit</button>
      </form>
  `
}

function Table ({ caption, data, sortColumn, sortOrder }) {
  const keys = Object.keys(data[0])

  // Function to toggle the sorting order
  function toggleSortOrder (column) {
    if (sortColumn === column) {
      return sortOrder === 'asc' ? 'desc' : 'asc'
    } else {
      return 'asc'
    }
  }

  return /* html */ `
    <div class="table-wrapper">
    <h1> DoggyDB </h1>
      <table>
        <caption>${caption} <small>(${data.length})</small></caption>
        <thead>
          <tr>
            ${keys
              .map(
                (key) => `
              <th>
                <a href="?sort=${key}&order=${toggleSortOrder(key)}">
                  ${key} ${
                    sortColumn === key ? (sortOrder === 'asc' ? '▲' : '▼') : ''
                  }
                </a>
              </th>
            `
              )
              .join('')}

          </tr>
        </thead>
        <tbody>
          ${data.map(Row).join('')}
        </tbody>
      </table>
    </div>
  `
}

function Row (entry) {
  return /* html */ `
    <tr>
      ${Object.values(entry)
        .map((val) => `<td>${val}</td>`)
        .join('')}
    </tr>
  `
}
function AddCustomer () {
  return /* html */ `
<h1> Register </h1>
      <form method="POST" action="/register">
        <p>

          <label for="owner_name">Owner's Name</label>
          <input name="owner_name" id="owner_name" required>

        </p>
        <p>

        <label for="dog_name">Dog's Name</label>
        <input name="dog_name" id="dog_name" required>

      </p>

    <p>

    <label for="breed">Dog's breed</label>
    <input name="breed" id="breed" required>

  </p>

        <button>Submit</button>
      </form>
  `
}

module.exports = { Layout, Table, AddBooking, AddCustomer }
