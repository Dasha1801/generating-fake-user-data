const seedrandom = require("seedrandom");

export function getSeed(seed, db, startPage, countRow, error, region) {
  let [generatorName, generatorAddress, generatorTel, generatorId, generatorError] =
    generateSeed(seed);

  const usersList = db.slice(startPage, startPage + countRow);

  const name = usersList
    .reduce((acc, el) => {
      acc.push(el.name);
      return acc;
    }, [])
    .sort((a, b) => randName() - randName());

  function randName() {
    generatorName = (45 * generatorName + 21) % 67;
    return generatorName / 67;
  }

  let address = usersList
    .reduce((acc, el) => {
      acc.push(el.address);
      return acc;
    }, [])
    .sort((a, b) => randAddress() - randAddress());

  function randAddress() {
    generatorAddress = (45 * generatorAddress + 21) % 67;
    return generatorAddress / 67;
  }

  let tel = usersList
    .reduce((acc, el) => {
      acc.push(el.tel);
      return acc;
    }, [])
    .sort((a, b) => randTel() - randTel());

  function randTel() {
    generatorTel = (45 * generatorTel + 21) % 67;
    return generatorTel / 67;
  }

  let id = usersList
    .reduce((acc, el) => {
      acc.push(el.id);
      return acc;
    }, [])
    .sort((a, b) => randId() - randId());

  function randId() {
    generatorId = (45 * generatorId + 21) % 67;
    return generatorId / 67;
  }

  return [name, address, tel, id];
}

function generateSeed(seed) {
  const generator = seedrandom(seed);
  let generatorName = generator();
  let generatorAddress = generator();
  let generatorTel = generator();
  let generatorId = generator();
  let generatorError = generator();
  return [generatorName, generatorAddress, generatorTel, generatorId, generatorError];
}


