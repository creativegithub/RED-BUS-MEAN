const mongoose = require("mongoose");
const schema = mongoose.Schema;

const busSchema = new schema({
  operatorName: {
    type: String,
    required: true,
  },

  busType: {
    type: String,
    required: true,
  },

  departureTime: {
    type: String,
    required: true,
  },

  rating: {
    type: [Number],
    required: true,
  },

  //   Fare is Manual

  totalSeats: {
    type: Number,
    required: false,
  },

  routes: {
    type: schema.Types.ObjectId,
    ref: "Routes",
    required: true,
  },

  images: {
    type: String,
    required: true,
  },

  liveTracking: {
    type: Number,
    required: true,
  },

  reschedulable: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Buses", busSchema);
