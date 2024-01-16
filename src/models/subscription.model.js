const mongoose = require("mongoose");

const subscriptionSchema = new mongoose.Schema(
  {
    subscriber: {
      type: Schema.types.ObjectId,
      ref: "User",
    },
    channel: {
      type: Schema.types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);
const Subscription = mongoose.model("Subscription", subscriptionSchema);

module.exports = Subscription;
