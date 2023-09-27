const db = require("../database/db.js");
const { findID } = require('./helpers.js');

const allBookings = db.prepare(/*sql*/ `
  SELECT date, dog_name AS customer, dog_breed AS breed, owner_name AS hooman
  FROM bookings
  JOIN dogs ON bookings.dog_id = dogs.id
  JOIN owners ON dogs.owner_id = owners.id
`);

function listBookings() {
  return allBookings.all();
}

const insert_booking = db.prepare(/*sql*/ `
  INSERT INTO bookings (dog_id, date)
  VALUES ($id, $date)
  RETURNING dog_id, date
`);

function createBooking(booking) {
  const dogInfo = findID(booking.dog_name, booking.owner_name);

  if(dogInfo){
    const {dogID} = dogInfo;

    return insert_booking.run({
      id: dogID,
      date: booking.date,
    });
  } else {
    console.log('customer not found')
    // redirect to add customer page
  };
}

module.exports = { listBookings, createBooking };
