const test = require('node:test')
const assert = require('node:assert')
const { request } = require('./helpers.js')

test('returns booking form page', async () => {
  const { status, body } = await request('/book')

  assert.equal(status, 200)
  assert.match(
    body,
    / <label for="dog_name">Your Name<\/label>/i,
    `Expected HTML to include <label for="dog_name">Your Name</label>, but received:\n${body}\n`
  )
})
