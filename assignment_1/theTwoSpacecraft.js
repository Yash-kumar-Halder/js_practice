const AURORA = "Aurora";
const EMBER = "Ember";
const NEBULA = "Nebula";
const RIFT = "Rift";
const OBSIDIAN = "Obsidian";
const ECLIPSE = "Eclipse";

function firstRoute(gate) {
  if (gate === AURORA) return EMBER;
  if (gate === EMBER) return NEBULA;
  if (gate === NEBULA) return RIFT;
  if (gate === RIFT) return AURORA;
}
function secondRoute(gate) {
  if (gate === EMBER) return NEBULA;
  if (gate === NEBULA) return RIFT;
  if (gate === RIFT) return OBSIDIAN;
  if (gate === OBSIDIAN) return ECLIPSE;
  if (gate === ECLIPSE) return EMBER;
}

function getMovesToMeet(sirstShipGate, secondShipGate) {
  if (sirstShipGate === secondShipGate) {
    return 0;
  }
  return (
    1 + getMovesToMeet(firstRoute(sirstShipGate), secondRoute(secondShipGate))
  );
}

console.log(getMovesToMeet("Aurora", "Ember"));
