interface Fish {
  lengthCM: number;
  speedKPH: number;
  name: string;
}

const ocean: Fish[] = [];

/**
 * Get a barracuda
 * @returns a barracuda
 */
function getBarracuda(): Fish {
  return {
    lengthCM: 165,
    speedKPH: 58,
    name: "Barracuda",
  };
}

/**
 * Releases a fish to the ocean
 * @param fish fish to release to the ocean
 */
function releaseFish(fish: Fish): void {
  ocean.push(fish);
}

const barracuda = getBarracuda();
releaseFish(barracuda);
