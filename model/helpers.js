const db = require('../database/db.js')

const selectedDog = db.prepare(/* sql */ `
  SELECT dogs.id as dogID
  FROM dogs
  WHERE dogs.dog_name = $name
  AND dogs.owner_id = (SELECT id FROM owners WHERE owner_name = $owner)
  `)

// find a dog's id using its name
function findID (name, owner) {
  return selectedDog.get({ name, owner })
}

const selectedOwner = db.prepare(/* sql */ `
  SELECT owners.id as ownerID
  FROM owners
  WHERE owners.owner_name = $name
  `)

// find an owner's id using its name
function findOwnerId (name) {
  return selectedOwner.get({ name })
}

module.exports = { findID, findOwnerId }
