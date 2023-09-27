const test = require("node:test");
const assert = require("node:assert");
const { request } = require("./helpers.js");

test("form updates database", async () => {
  const post_response = await request("/form", {
    method: "POST",
    body: "owner_name=Deepa&dog_name=Bruno&breed=Cocker Spaniel&date=2024-01-02",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    redirect: "manual",
  });
  assert.equal(post_response.status, 302);
  assert.equal(post_response.headers.location, "/");

  const { status, body } = await request("/");
  assert.match(
    body,
    /<td>2024-01-02<\/td>/i,
    `Expected HTML to include "<td>2024-01-02</td>", but received:\n${body}`
  );
});
