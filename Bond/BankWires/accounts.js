const mongoose = require("mongoose");
const Vault = require("../models/Vault");
const Secret = require("../models/letItBe");

let localhost = "http://localhost:4000/vault";

let encryptionOne = {
  hash: "what is my name?",
  key: "bond,james"
};
let encryptionTwo = {
  hash: "what is my car?",
  key: "aston martin"
};

let encryptionThree = {
  hash: "are you sorry?",
  key: "I love you"
};

enigma = () => {
  let hashOne = encryptionOne;
  let hashTwo = encryptionTwo;
  let hashThree = encryptionThree;

  Secret.create(hashThree, (err, secret) => {
    if (err) {
      console.log(`ERROR INPUTING SECRET IN ----- ${err}`);
    } else {
      console.log("SECRET CREATED --------", secret);

      Vault.create(hashOne, (err, fileCreated) => {
        if (err) {
          throw err;
        }
        console.log("FILE ONE ENCRYPTED", fileCreated);
        Vault.create(hashTwo, (err, decoy) => {
          if (err) {
            console.log(err);
          }
          console.log(`DECOY DEPLOYED: ${decoy}`);
        });

        console.log("DOUBLE INJECTION SUCCESFULL");
      });
    }
  });

  console.log("10 HOURS UNTIL LAUNCH");
};

module.exports = enigma;
