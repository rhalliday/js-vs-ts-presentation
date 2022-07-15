const oceanish = [];

/**
 * Check if an object is a fish
 * @param {object} fish a fish
 * @returns {boolean} true if it is a fish, false otherwise
 */
function isFish(fish) {
  return (
    typeof fish?.lengthCM === "number" &&
    typeof fish?.speedKPH === "number" &&
    typeof fish?.name === "string"
  );
}

/**
 * Gets you a barracuda
 * @returns {object} a barracuda
 */
function getBarracudaJS() {
  return {
    lengthCM: 165,
    speedKPH: 58,
    name: "Barracuda",
  };
}

/**
 * Releases a fish to the ocean
 * @param {object} fish a fish to release
 */
function releaseFishJS(fish) {
  if (
    typeof fish?.lengthCM !== "number" ||
    typeof fish?.speedKPH !== "number" ||
    typeof fish?.name !== "string"
  ) {
    throw Error("releaseFish needs a fish");
  }
  oceanish.push(fish);
}

const barracudaJS = getBarracudaJS();
if (isFish(barracudaJS)) {
  releaseFishJS(barracudaJS);
}

const cod = { name: "Cod" };
releaseFishJS(cod);
