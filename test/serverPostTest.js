const test = require("node:test");
const assert = require("node:assert");
const { request } = require("./helpers.js");
const db = require("../database/db.js");

const delete_test_booking = db.prepare(/*sql*/ `
  DELETE FROM bookings WHERE date = ?
`);

function removeTestBooking() {
  try {
    delete_test_booking.run("1000-01-02");
    console.log("Booking deleted successfully.");
  } catch (error) {
    console.error("Error deleting booking:", error);
  }
}

test("form updates database", async () => {
  const requestBody = {
    dog_name: "Bruno",
    date: "1000-01-02",
    owner_name: "Deepa",
    breed: "Cocker Spaniel",
  };

  const post_response = await request("/book", {
    method: "POST",
    body: new URLSearchParams(requestBody).toString(),
    headers: { "content-type": "application/x-www-form-urlencoded" },
    redirect: "manual",
  });
  //assert.equal(post_response.status, 302);
  assert.equal(post_response.headers.location, "/");

  const { status, body } = await request("/");
  assert.match(
    body,
    /<td>1000-01-02<\/td>/i,
    `Expected HTML to include "<td>1000-01-02</td>", but received:\n${body}`
  );
  removeTestBooking();
});
