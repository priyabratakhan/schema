const express = require("express");
const mongoose = require("mongoose");
const app = express();

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://pkhan:<password>@cluster0.me6x1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
  // return mongoose.connect("mongodb+srv://pkhan:5UJwn6Kt@GjRxvc@cluster0.me6x1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
};
//User
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  middleName: { type: String, required: false },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  gender: { type: String, default: "Female", required: false },
  type: { type: String, default: "Customer", required: false },
  createdAt: { type: String, required: true },
  updatedAt: { type: String, required: true },
});

//BranchDetail
const branchdetailSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  ifsc: { type: String, required: true },
  micr: { type: Number, required: true },
  createdAt: { type: String, required: true },
  updatedAt: { type: String, required: true },
});

//MasterAccount
const = masterAccount = new mongoose.Schema({
    balance: { type: Number, required: true },
  createdAt: { type: String, required: true },
  updatedAt: { type: String, required: true }
})

//SavingsAccount
const savingsAccount = new mongoose.Schema({
    account_number: { type: Number, required: true, unique: true },
    balance: { type: Number, required: true },
    interestRate: { type: Number, required: true },
    createdAt: { type: String, required: true },
  updatedAt: { type: String, required: true }
})

//FixedAccount
const fixedAccount = new mongoose.Schema({
    account_number: { type: Number, required: true, unique: true },
    balance: { type: Number, required: true },
    interestRate: { type: Number, required: true },
     maturityDate: { type: String, required: true },
    createdAt : { type: String, required: true },
  updatedAt: { type: String, required: true }
}
)
app.listen(5000, async () => {
  try {
    await connect();
  } catch (err) {
    console.log(err);
  }
  console.log("Listening on port 5000");
});
