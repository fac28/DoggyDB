const express = require('express')
const booking = require('./routes/booking.js')
const AddBooking = require('./routes/bookingForm.js')

const server = express()
server.use(express.static('public'))

server.get('/book', AddBooking.get)
server.get('/', booking.get)
server.post('/book', express.urlencoded({ extended: false }), AddBooking.post)

module.exports = server
