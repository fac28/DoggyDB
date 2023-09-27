function Layout({ title, content }) {
  return /*html*/ `
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>${title}</title>

        </head>
        <body>
          <div class="layout">
            <main>
              ${content}
            </main>
          </div>
        </body>
      </html>
    `;
}

function AddBooking() {
  return /*html*/ `

      <form method="POST" action="/book">
        <p>

          <label for="owner_name">Owner's Name</label>
          <input name="owner_name" id="owner_name" value = 'Deepa' v>

        </p>
        <p>

        <label for="dog_name">Dog's Name</label>
        <input name="dog_name" id="dog_name" value='Bruno'>

      </p>

    <p>

    <label for="breed">Dog's breed</label>
    <input name="breed" id="breed" value='Cocker Spaniel'>

  </p>
  <p>

  <label for="date">Appointment Date</label>
  <input name="date" type = "date" id="date" value = '2024-01-01'>

</p>
        <button>Submit</button>
      </form>
  `;
}

function Table({ caption, data }) {
  const keys = Object.keys(data[0]);
  return /*html*/ `
    <div class="table-wrapper">
      <table>
        <caption>${caption} <small>(${data.length})</small></caption>
        <thead>
          <tr>
            ${keys.map((key) => `<th>${key}</th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${data.map(Row).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function Row(entry) {
  return /*html*/ `
    <tr>
      ${Object.values(entry)
        .map((val) => `<td>${val}</td>`)
        .join("")}
    </tr>
  `;
}
function AddCustomer() {
  return /*html*/ `

      <form method="POST" action="/register">
        <p>

          <label for="owner_name">Owner's Name</label>
          <input name="owner_name" id="owner_name" >

        </p>
        <p>

        <label for="dog_name">Dog's Name</label>
        <input name="dog_name" id="dog_name" >

      </p>

    <p>

    <label for="breed">Dog's breed</label>
    <input name="breed" id="breed" >

  </p>

        <button>Submit</button>
      </form>
  `;
}

module.exports = { Layout, Table, AddBooking, AddCustomer };
