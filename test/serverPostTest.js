const test = require('node:test')
const assert = require('node:assert')
const { request } = require('./helpers.js')
const db = require('../database/db.js')

test('booking form updates database', async () => {
  const requestBody = {
    dog_name: 'Bruno',
    date: '1000-01-02',
    owner_name: 'Deepa',
    breed: 'Cocker Spaniel'
  }

  const postResponse = await request('/book', {
    method: 'POST',
    body: new URLSearchParams(requestBody).toString(),
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    redirect: 'manual'
  })
  assert.equal(postResponse.status, 302)
  assert.equal(postResponse.headers.location, '/')

  const { body } = await request('/')
  assert.match(
    body,
    /<td>1000-01-02<\/td>/i,
    `Expected HTML to include "<td>1000-01-02</td>", but received:\n${body}`
  )
  removeTestBooking()
})

const deleteTestBooking = db.prepare(/* sql */ `
  DELETE FROM bookings WHERE date = ?
`)

function removeTestBooking () {
  try {
    deleteTestBooking.run('1000-01-02')
  } catch (error) {
    console.error('Error deleting booking:', error)
  }
}
