
// Assignment Code
var characterLength;
var nun="0123456789"
var alpha = "abcdefghijklmnopqrstuvwxyz";
var upperChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChars="abcdefghijklmnopqrstuvwxyz";
var specialChar="!@#$%^&*()[]{}|?/<>";

var generateBtn = document.querySelector("#generate");


function generatePassword(){
  
  console.log("You clicked the button");
  

}
function prompt(){
  characterLength=parseInt(prompt("How many characters woukd your password to contain?"));
if(isNotANumber(characterLength)||characterLength<8||characterLength>128){
  alert("charcter length need to be a number,8-128 digits");
  return false;
}


}






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
