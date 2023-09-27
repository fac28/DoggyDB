const db = require("../database/db.js");

const allBookings = db.prepare(/*sql*/ `
  SELECT date, dog_name AS customer, dog_breed AS breed, owner_name AS hooman 
  FROM bookings
  JOIN dogs ON bookings.dog_id = dogs.id
  JOIN owners ON dogs.owner_id = owners.id
`);

function listBookings() {
  return allBookings.all();
}

const selectedDog = db.prepare(/*sql*/ `
  SELECT dogs.id as dogID
  FROM dogs
  JOIN bookings on dogs.id = bookings.dog_id
  WHERE dogs.dog_name = $name
  RETURNING dogID;
`);

// we collect dog's name from the form
// then find the dog's id using its name
function findID(name) {
  return selectedDog.get({ name });
}

const insert_booking = db.prepare(/*sql*/ `
  INSERT INTO bookings (dog_id, date)
  VALUES ($id, $date)
  RETURNING dog_id, date
`);

function createBooking(booking) {
  const { dogId } = findID(booking.dog_name);
  console.log(dogId);

  return insert_booking.run({
    id: dogId,
    date: booking.date,
  });
}

module.exports = { listBookings, createBooking };
