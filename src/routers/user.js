const express = require("express");
const fs = require("fs");
const User = require("../models/User");
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
router.get("/getFruits", (req, res) => {
  res.json(fruitsList);
});

// Change Fruit Nutritions element with req body
// req must incloud an ID Param with fruit ID
router.post("/fruit/:id/updateNutrition", async (req, res) => {
  try {
    const indexFruitToGetChanged = fruitsList.fruitsList.indexOf(
      fruitsList.fruitsList.find((fruit) => fruit.id == req.params.id)
    );
    if (indexFruitToGetChanged !== -1) {
      fruitsList.fruitsList[indexFruitToGetChanged] = req.body;
    }
    // res.send(fruitsList.fruitsList[indexFruitToGetChanged].nutritions);

    res.status(200).json("updated");
    // Over-writing the original file so changes are permanent
    // TODO: Relocate the fruits list file to MongoDB
    const fruitsListJSON = JSON.stringify(fruitsList, null, 2);
    fs.writeFile("./src/fruitsList/fruits.json", fruitsListJSON, (err) => {
      if (err) {
        console.log("Error writing file", err);
      } else {
        console.log("Success writing file", req.body);
      }
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
