const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const easterEgg = new mongoose.Schema(
  {
    key: String,
    secret: String
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Vault = mongoose.model("Vault", vaultSchema);
module.exports = Vault;
