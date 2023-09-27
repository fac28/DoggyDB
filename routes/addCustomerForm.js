const { Layout, AddCustomer} = require("../templates.js");
const { createCustomer, createOwner } = require("../model/customers.js");

function get(req, res) {
  let title = "Add Customer";

  const content = AddCustomer();
  const body = Layout({ title, content });
  res.send(body);
}

function post(req, res) {

  console.log(req.body);

  const dog_name = req.body.dog_name;
  const owner_name = req.body.owner_name;
  const dog_breed = req.body.breed;

  const customer = { dog_name, owner_name, dog_breed };

  // create owner if there's not one yet
  createOwner(owner_name)

  // create customer if there's not one yet
  createCustomer(customer);

  res.redirect("/");
}

module.exports = { get, post };
