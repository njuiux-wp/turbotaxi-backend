// models/bookingModel.js
const fs = require('fs');
const path = require('path');

const bookingsFilePath = path.join(__dirname, '../data/bookings.json');

let bookings = [];

// Load existing bookings from file
const loadBookings = () => {
    if (fs.existsSync(bookingsFilePath)) {
        const data = fs.readFileSync(bookingsFilePath, 'utf-8');
        try {
            bookings = JSON.parse(data);
        } catch (err) {
            console.error("Error parsing JSON:", err);
            bookings = []; // Default to empty array on error
        }
    }
};

// Save bookings to file
const saveBookings = () => {
    fs.writeFileSync(bookingsFilePath, JSON.stringify(bookings, null, 2));
};

// Load bookings on module import
loadBookings();

const getBookings = () => bookings;

const addBooking = (booking) => {
    bookings.push(booking);
    saveBookings();
};

module.exports = { getBookings, addBooking };
