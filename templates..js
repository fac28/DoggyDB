

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

function AddBooking({ }) {

   return /*html*/ `
      <h1>${title}</h1>
      <form method="POST">
        <p>
          <label for="name">Name</label>
          <input name="name" id="name">
          ${validation(errors.name)}
        </p>
        <p>
          <label for="qty">Quantity per unit</label>
          <input name="quantity_per_unit" id="qty">
          ${validation(errors.qty)}
        </p>
        <p>
          <label for="price">Unit price</label>
          <input name="unit_price" id="price" type="number" step="0.01">
          ${validation(errors.price)}
        </p>
        <p>
          <label>Category</label>
          <select name="category_id">
            ${options.join("")}
          </select>
        </p>
        <button>Create &plus;</button>
      </form>
  `;
}
module.exports = { Layout, AddBooking };