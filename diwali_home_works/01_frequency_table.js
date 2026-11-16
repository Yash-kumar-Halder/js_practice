const fruits = ["apple", "banana", "apple", "apple", "orange", "banana"];

const frequencyTable = {};

for (const fruit of fruits) {
  if (!frequencyTable[fruit]) frequencyTable[fruit] = 0;
  frequencyTable[fruit]++;
}

console.log(frequencyTable);
