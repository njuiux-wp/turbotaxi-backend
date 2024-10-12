// controllers/bookingController.js
const bookingModel = require('../models/bookingModel');

const bookCab = (req, res) => {
    const { uname, uphone, uemail, departureDate, departureTime, returnDate, returnTime, from, to, type } = req.body;

    // Create a new booking
    const newBooking = { uname, uphone, uemail, departureDate, departureTime, returnDate, returnTime, from, to, type };
    bookingModel.addBooking(newBooking);

    res.status(201).json({ message: 'Booking Successful', data: newBooking });
};

module.exports = { bookCab };
