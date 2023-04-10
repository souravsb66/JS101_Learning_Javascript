//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

// Username and password saved by user

let actual_username = "sourav66";
let actual_password = "123abc123";

// Username and password entered by user

let input_username = "sourav66";
let input_password = "123abc123";

if(input_username === actual_username) {
  if(input_password === actual_password) {
    console.log("Logged in..!!!");
  } else {
      console.log("Kindly check your password, and try again.")
  }
} else {
    console.log("Kindly check your username, and try again.");
}