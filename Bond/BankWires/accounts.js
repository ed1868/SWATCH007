const mongoose = require("mongoose");
const Vault = require("../models/Vault");

let localhost = "http://localhost:4000/vault";

let encryptionOne = {
  hash: "what is my name?",
  key: "bond,james"
};
let encryptionTwo = {
  hash: "what is my car?",
  key: "aston martin"
};

enigma = () => {
  let hashOne = encryptionOne;
  let hashTwo = encryptionTwo;

  Vault.create(hashOne, (err, fileCreated) => {
    if (err) {
      throw err;
    }
    console.log('FILE ONE ENCRYPTED',fileCreated);
  });
};

module.exports = enigma;
