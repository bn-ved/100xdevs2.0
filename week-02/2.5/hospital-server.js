const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

var users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

// GET request
// Retrieve all the kidneys.
app.get("/", (_, res) => {
  const johnKidneys = users[0].kidneys;
  const numberOfKidneys = johnKidneys.length;
  let numberOfHealthyKidneys = 0;
  for (let i = 0; i < numberOfKidneys; i++) {
    if (johnKidneys[i].healthy) {
      numberOfHealthyKidneys++;
    }
  }
  const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys,
  });
});

// POST request
// Add kidneys
app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy === true;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Done!",
  });
});

// PUT request
// Update Unhealthy Kidneys
app.put("/", (_, res) => {
  if (isAtLeastOneUnhealthyKidney()) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
      users[0].kidneys[i].healthy = true;
    }
    res.json({
      msg: "Done!",
    });
  } else {
    res.status(411).json({
      msg: "There is no unhealthy kidneys",
    });
  }
});

// DELETE request
// Delete Unhealthy Kidneys
app.delete("/", (_, res) => {
  if (isAtLeastOneUnhealthyKidney()) {
    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy) {
        newKidneys.push({
          healthy: true,
        });
      }
    }
    users[0].kidneys = newKidneys;
    res.json({
      msg: "Done!",
    });
  } else {
    res.status(411).json({
      msg: "There is no unhealthy kidneys",
    });
  }
});

// Check if there is atleast one unhealthy kidney.
function isAtLeastOneUnhealthyKidney() {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i]) {
      return true;
    }
  }
  return false;
}

app.listen(PORT, () => {
  console.log(`The app is listening on port ${PORT}`);
});
