const Customer = require("../models/customer");

exports.addnewcustomer = async (req, res) => {
  try {
    const { name, email, googleId, profilePicture } = req.body;
    let existingcustomer = await Customer.findOne({ email: email })
      .lean()
      .exec();
    if (existingcustomer) {
      res.send(existingcustomer);
    } else {
      const customer = new Customer({
        name,
        email,
        googleId,
        profilePicture,
      });
      const newCustomer = await customer.save();
      res.status(201).json(newCustomer);
    }
  } catch (error) {
    console.error("Error adding customer", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
