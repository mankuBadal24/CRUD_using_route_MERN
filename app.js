const express = require("express");
const app = express();
const userModal = require("./userModal");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/create", async (req, res) => {
  let createdUser = await userModal.create({
    name: "Mayank Badal",
    email: "mayankbadal@gmail.com",
    username: "mayank",
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

app.listen(3000);
