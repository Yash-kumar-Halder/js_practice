function capitalOF(country) {
  const countryCapitalData = {
    India: "Delhi",
    France: "Paris",
    Germany: "Berlin",
    Japan: "Tokyo",
    "United Kingdom": "London",
  };
  return countryCapitalData[country];
}

console.log(capitalOF("India"));
console.log(capitalOF("Germany"));
console.log(capitalOF("United Kingdom"));
