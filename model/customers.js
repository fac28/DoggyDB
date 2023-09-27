const db = require("../database/db.js");
const { findID, findOwnerId } = require('./helpers.js');

const allCustomers = db.prepare(/*sql*/ `
  SELECT dog_name AS customer, dog_breed AS breed, owners.owner_name AS hooman
  FROM dogs
  JOIN owners ON dogs.owner_id = owners.id
`);

function listCustomers() {
  return allCustomers.all();
}

function isRegistered(name, owner){
  const customerInfo = findID(name, owner);
  if(customerInfo){
    return true
  } else {
    console.log('not a current customer')
    return false
  }
}

const addOwner = db.prepare(/*sql*/ `
  INSERT INTO owners (owner_name)
  VALUES ($name)
  RETURNING owner_name
`);

function createOwner(owner){
  console.log('Owner: ', owner)

  const ownerInfo = findOwnerId(owner);
  if(ownerInfo===undefined) {
    addOwner.run({
      name: owner
    })};
}

const addCustomer= db.prepare(/*sql*/ `
  INSERT INTO dogs (dog_name, dog_breed, owner_id)
  VALUES ($name, $breed, $owner)
  RETURNING dog_name, dog_breed, owner_id
`);

function createCustomer(customer){
  const { ownerID } = findOwnerId(customer.owner_name);

  if(isRegistered(customer.dog_name, customer.owner_name)===false){
    addCustomer.run({
      name: customer.dog_name,
      breed: customer.dog_breed,
      owner: ownerID
    });
  }
}

module.exports = { listCustomers, isRegistered, createOwner, createCustomer };
