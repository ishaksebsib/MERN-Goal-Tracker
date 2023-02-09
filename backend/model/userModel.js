const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Plase add a name"],
    },
    email: {
      type: String,
      require: [true, "Plase add a email"],
      unique: true,
    },
    Password: {
      type: String,
      require: [true, "Plase add a Password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
