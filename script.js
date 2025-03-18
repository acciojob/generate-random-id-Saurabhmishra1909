function makeid(l) {
  // write your code here
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; // Allowed characters
  let result = ''; // Initialize the result string

  // Loop to generate the random string
  for (let i = 0; i < l; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length); // Generate a random index
    result += characters[randomIndex]; // Append the random character to the result
  }

  return result;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
