const firstName = prompt("Your first name?");
const lastName = prompt("Your last name?");
const language = prompt("What country do you live?");
 
const user = {
   name: {
       first: firstName,
       last: lastName,
   },
   language: language
};
 
if (user.language === "england") {
   alert("Nice to meet you " + user.name.first + " " + user.name.last + "!");
} else if (user.language === "france") {
   alert("Ravi de vous rencontrer " + user.name.first + " " + user.name.last + "!");
} else if (user.language === "japan") {
   alert("Hajimemashite" + user.name.first + " " + user.name.last + "!");
} else if (user.language === "indonesia") {
   alert("Senang bertemu dengan Anda " + user.name.first + " " + user.name.last + "!");
} else if (user.language === "germany") {
   alert("Schön dich kennenzulernen " + user.name.first + " " + user.name.last + "!"); 
} else {
   alert("Gusto en conocerte " + user.name.first + " " + user.name.last + "!");
}
