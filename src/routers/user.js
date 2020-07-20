const express = require("express");
const fs = require("fs");
const User = require("../models/User");
const Fruits = require("../models/Fruits");
const auth = require("../middleware/auth");
const fruitsList = require("../fruitsList/fruits.json");

const router = express.Router();

// Create a new user
router.post("/register", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send({ user });
  } catch (error) {
    res.status(400).send(error);
  }
});

//Login a registered user
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findByCredentials(email, password);

    if (!user) {
      return res
        .status(401)
        .send({ error: "Login failed! Check authentication credentials" });
    }
    const token = await user.generateAuthToken();
    res.send({ email: user.email, name: user.name, token });
    console.log("user:", user);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// View logged in user profile
router.get("/checkAuth", auth, async (req, res) => {
  res.send(req.user);
});

// Log user out of the application
router.post("/checkAuth/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token != req.token;
    });
    await req.user.save();
    res.send();
  } catch (error) {
    res.status(500).send(error);
  }
});

// Log user out of all devices
router.post("/checkAuth/logoutAll", auth, async (req, res) => {
  try {
    req.user.tokens.splice(0, req.user.tokens.length);
    await req.user.save();
    res.send();
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get Fruits List from DB
router.get("/getFruits", async (req, res) => {
  const MongoFruits = await Fruits.find({});

  console.log({ fruitsList: MongoFruits });

  res.json({ fruitsList: MongoFruits });
});

// Change Fruit Nutritions element with req body
// req must incloud an ID Param with fruit ID
router.post("/fruit/:id/updateNutrition", async (req, res) => {
  try {
    const MongoFruit = await Fruits.replaceOne(
      { _id: req.params.id },
      req.body
    );
    res.json(MongoFruit);
  } catch (error) {
    console.log("error", error);
  }
  //     fruitsList.fruitsList[indexFruitToGetChanged] = req.body;
  //   }
  // try {
  //   const indexFruitToGetChanged = fruitsList.fruitsList.indexOf(
  //     fruitsList.fruitsList.find((fruit) => fruit.id == req.params.id)
  //   );
  //   if (indexFruitToGetChanged !== -1) {
  //     fruitsList.fruitsList[indexFruitToGetChanged] = req.body;
  //   }
  //   // res.send(fruitsList.fruitsList[indexFruitToGetChanged].nutritions);

  //   // Over-writing the original file so changes are permanent
  //   const fruitsListJSON = JSON.stringify(fruitsList, null, 2);
  //   fs.writeFile("./src/fruitsList/fruits.json", fruitsListJSON, (err) => {
  //     if (err) {
  //       console.log("Error writing file", err);
  //       res.status(500).send("oops, something went wrong");
  //     } else {
  //       console.log("Success writing file", req.body);
  //       res.status(200).json("updated");
  //     }
  //   });
  // } catch (error) {
  //   res.status(500).send(error);
  // }
});

// Add new fruit

router.post("/newFruit", async (req, res) => {
  try {
    const fruit = new Fruits(req.body);
    await fruit.save();
    console.log(fruit);
    res.status(201).send({ fruit });
  } catch (error) {
    console.log("failed");
    res.status(400).send(error);
  }
});

module.exports = router;
