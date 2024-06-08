
let bcrypt = require("bcrypt")
async function saltAndHashPassword(password) {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
}

async function l()
{
  let pwd = "password"
let  x = await saltAndHashPassword(pwd)
console.log(x)
let pwd2 = "password"
let  x2 = await saltAndHashPassword(pwd2)
console.log(x2)
if(x === x2){
  console.log("Equal")
}
else{
  console.log("Not Equal")
}
let pwd3 = "password2222"
let  x3 = await  saltAndHashPassword(pwd3)
console.log(x3)
const match = await bcrypt.compare(pwd, x);
console.log(match)
return match
}
l()