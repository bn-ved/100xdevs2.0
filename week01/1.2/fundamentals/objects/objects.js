const person = {
  firstName: "harkirat",
  gender: "male",
};

// Array of objects

const personArray = [{
  firstName: "harkirat",
  gender: "male",
}, {
  firtstName: "priya",
  gender: "female",
}];

// print male persons

for (let i = 0; i < personArray.length; i++) {
  if (personArray[i]["gender"] == "male") {
    console.log(personArray[i]["firstName"]);
  }
}
