//for loop
const jsonData = {
  "name": "Ajith",
  "age": 24,
  "native":"chennai"
};

// Using a 'for' loop to iterate over the object
for (let key in jsonData) {
  console.log(key + ": " + jsonData[key]);
}
//for in loop
const jsonData = {
  "name": "Ajith",
  "age": 24,
  "native": "Chennai"
};

// Using a 'for...in' loop to iterate over the object
for (let key in jsonData) {
  console.log(key + ": " + jsonData[key]);
}
//for of loop
const jsonData = {
  "name": "Ajith",
  "age": 24,
  "native": "Chennai"
};

// Convert the JSON object into an array of key-value pairs
const entries = Object.entries(jsonData);

// Using a 'for...of' loop to iterate over the entries
for (const [key, value] of entries) {
  console.log(key + ": " + value);
}

//forEach loop
const jsonData = {
    "name": "Ajith",
    "age": 24,
    "native": "Chennai"
  };
  
  // Convert the JSON object into an array of key-value pairs
  const entries = Object.entries(jsonData);
  
  // Using the 'forEach' method to iterate over the entries
  entries.forEach(([key, value]) => {
    console.log(key + ": " + value);
  });
  