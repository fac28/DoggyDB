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
      
      <form method="POST">
        <p>
        
          <label for="owner_name">Owner's Name</label>
          <input name="owner_name" id="owner_name">
          
        </p>
        <p>
        
        <label for="dog_name">Dog's Name</label>
        <input name="dog_name" id="dog_name">
        
      </p>
 
    <p>
        
    <label for="breed">Dog's breed</label>
    <input name="breed" id="breed">
    
  </p>
  <p>
        
  <label for="date">Appointment Date</label>
  <input name="date" type = "date" id="date">
  
</p> 
        <button>Submit</button>
      </form>
  `;
}
module.exports = { Layout, AddBooking };
