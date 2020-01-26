const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const vaultSchema = new mongoose.Schema(
  {
    hash: String,
    key: String,
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
