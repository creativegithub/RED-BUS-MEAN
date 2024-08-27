const Route = require("../models/route");
const Bus = require("../models/bus");
const Booking = require("../models/booking");

exports.getoneroute = async (req, res) => {
  let { departure, arrival, date } = req.params;

  try {
    let routes = await Route.find().lean().exec();
    let route = routes.find((route) => {
      return (
        route.departureLocation.name.toLowerCase() ===
          departure.toLowerCase() &&
        route.arrivalLocation.name.toLowerCase() === arrival.toLowerCase()
      );
    });

    if (!route) {
      return res.status(404).send("Route not found");
    }

    let buses = await Bus.find();

    let matchedbuses = buses.filter((bus) => {
      return bus.routes.toString() === route._id.toString();
    });

    const booking = await Booking.find().lean().exec();
    const busidwithseatobj = {};

    for (let i = 0; i < matchedbuses.length; i++) {
      let currentBusseats = [];
      const busbooking = booking.filter((booking) => {
        return (
          booking.departureDetails.date === date &&
          booking.busId.toString() === matchedbuses[i]._id.toString()
        );
      });
      busbooking.forEach((booking) => {
        currentBusseats = [...currentBusseats, ...booking.seats];
      });
      busidwithseatobj[matchedbuses[i]._id.toString()] = currentBusseats;
    }
    res.send({ route: route, matchedbuses: matchedbuses, busidwithseatobj });
  } catch (error) {
    console.error("Error fetching route:", error);
    res.status(500).send("Server error");
  }
};
