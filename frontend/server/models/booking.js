const mongoose = require("mongoose");
const schema = mongoose.Schema;

const bookingSchema = new schema({
  customerId: {
    type: String,
    required: true,
  },

  passengerDetails: [
    {
      name: { type: String, required: true },
      gender: { type: String, required: true },
      age: { type: Number, required: true },
    },
  ],

  email: {
    type: String,
    required: true,
  },

  phoneNumber: {
    type: String,
    required: true,
  },

  fare: {
    type: Number,
    required: true,
  },

  status: {
    type: String,
    required: true,
  },

  bookingDate: {
    type: String,
    required: true,
  },

  busId: {
    type: String,
    required: true,
  },

  seats: {
    type: [Number],
    required: true,
  },

  departureDetails: {
    city: { type: String, required: true },

    time: { type: String, required: true },

    date: { type: String, required: true },
  },

  arrivalDetails: {
    city: { type: String, required: true },

    time: { type: String, required: true },

    date: { type: String, required: true },
  },

  duration: {
    type: String,
    required: true,
  },

  isBusinessTravel: {
    type: Boolean,
    required: false,
  },

  businessDetails: {
    gst: { type: String, required: false },

    name: { type: String, required: false },

    address: { type: String, required: false },

    email: { type: String, required: false },
  },

  isInsurance: {
    type: Boolean,
    required: false,
  },

  isCovidDonated: {
    type: Boolean,
    required: false,
  },
});

module.exports = mongoose.model("Bookings", bookingSchema);
