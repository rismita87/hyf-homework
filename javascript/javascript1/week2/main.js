//Step 3: Smart-ease - Goes Global!
//Flight booking fullname function

function getFullname(
  firstname = "FirstName",
  surname = "LastName",
  useformalName,
  woman
) {
  if (useformalName === true) {
    if (woman === true) {
      console.log('"Lady ' + firstname + " " + surname + '"');
    } else {
      console.log('"Lord ' + firstname + " " + surname + '"');
    }
  } else {
    if (firstname === " " || surname === " ") {
      firstname = "FirstName";
      surname = "LastName";
      console.log('"' + firstname + " " + surname + '"');
    } else {
      console.log('"' + firstname + " " + surname + '"');
    }
  }
}

const fullname1 = getFullname("Aaditri", "Sarkar", true, true);
const fullname2 = getFullname(" ");
