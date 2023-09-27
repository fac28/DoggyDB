const test = require("node:test");
const assert = require("node:assert");
const { request } = require("./helpers.js");

test("/ returns form page", async () => {
  const { status, body } = await request("/form");

  assert.equal(status, 200);
  assert.match(
    body,
    / <label for="dog_name">Dog's Name<\/label>/i,
    `Expected HTML to include <h1>Hello Express</h1>, but received:\n${body}\n`
  );
});
