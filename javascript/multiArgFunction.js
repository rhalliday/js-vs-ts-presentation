/**
 * Log out the name, their age and their folical status
 * @param {string} name name of the person
 * @param {number} age age of the person
 * @param {boolean} hasHair whether the person has hair
 */
function multiArgJS(name, age, hasHair) {
  if (typeof name !== "string") {
    throw Error("multiArgJS needs a string name");
  }
  if (typeof age !== "number") {
    throw Error("multiArgJS needs a numerical age");
  }
  if (typeof hasHair !== "boolean") {
    throw Error("multiArgJS needs a boolean hasHair");
  }
  console.log(
    `${name} is ${age} years old and has ${hasHair ? "hair" : "no hair"}`
  );
}

// success
multiArgJS("bob", 39, false);

// runtime error
multiArgJS("bob", "39", "false");

// runtime error
multiArgJS();
