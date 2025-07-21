const express = require("express");
const app = express();
const userModal = require("./userModal");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/create", async (req, res) => {
  let createdUser = await userModal.create({
    name: "Saksham",
    email: "Saksham@gmail.com",
    username: "sakshi",
  });
  res.send(createdUser);
});

app.get("/update", async (req, res) => {
  let UpdatedData = await userModal.findOneAndUpdate(
    { name: "Mayank Badal" },
    { username: "Badal" },
    { new: true }
  );
  res.send(UpdatedData);
});

// this is for read all data from database
app.get("/readAll", async (req, res) => {
  let readData = await userModal.find();
  res.send(readData);
})

// this is for read one data from database
app.get("/readOne",async(req,res)=>{
let readOne=await userModal.findOne({name:"Mayank Badal"});
res.send(readOne);
});

app.get("/delete",async(req,res)=>{
let deleteData=await userModal.findOneAndDelete({username:"Badal"})
res.send(deleteData);
})

app.listen(3000);
