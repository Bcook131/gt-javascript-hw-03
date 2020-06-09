// Assignment Code
var generateBtn = document.querySelector("#generate");
const resultEl = document.getElementById('password')
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var length = Number(prompt("How many characters would you like in your password?"));
while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must 8-128."));

var uppers = confirm("Press ok for passsword to contain capital letters.");
var lowers = confirm("Press ok for password to contain lower case letters.");
var numbers = confirm("Press ok for password to contain numbers.");
var symbols= confirm("Press ok for password to contain symbols.");

while (!uppers && !lowers && !numbers && !symbols) {
    alert("You must select one of the character types.")
    uppers = confirm("Press ok for passsword to contain capital letters.")
    lowers = confirm("Press ok for password to contain lower case letters.")
    numbers = confirm("Press ok for password to contain numbers.")
    symbols = confirm("Press ok for password to contain symbols.")
};
window.addEventListener('load', function(){
    generateNewPassword();
});
function generateNewPassword(){
     var password = "";
         
     var allowed = {};
     if (uppers) password += rando(allowed.uppers = "QWERTYUIOPASDFGHJKLZXCVBNM");
     if (lowers) password += rando(allowed.lowers = "qwertyuiopasdfghjklzxcvbnm");
     if (numbers) password += rando(allowed.numbers = "1234567890");
     if (symbols) password += rando(allowed.symbols = "!@#$%^&*(){}[]=<>/,.");

     for (var i = password.length; i < length; i++) password += rando(rando(allowed).value);

     document.getElementById("password").value = randoSequence(password).join("");
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
