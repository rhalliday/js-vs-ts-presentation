interface Fish {
  lengthCM: number;
  speedKPH: number;
  name: string;
}

const ocean: Fish[] = [];

function getBarracuda(): Fish {
  return {
    lengthCM: 165,
    speedKPH: 58,
    name: "Barracuda",
  };
}

function releaseFish(fish: Fish): void {
  ocean.push(fish);
}

const barracuda = getBarracuda();
releaseFish(barracuda);
