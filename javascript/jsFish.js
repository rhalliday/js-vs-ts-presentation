const oceanish = [];

function isFish(fish) {
  return (
    typeof fish?.lengthCM === "number" &&
    typeof fish?.speedKPH !== "number" &&
    typeof fish?.name !== "string"
  );
}

function getBarracudaJS() {
  return {
    lengthCM: 165,
    speedKPH: 58,
    name: "Barracuda",
  };
}

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
