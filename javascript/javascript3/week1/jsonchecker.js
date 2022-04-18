//Create your own json file:
const myJesonFile = `{"computerName": "MacBook Air",
   "colour": "silver", 
   "music":["classical","rabindraSangeet","bollywood"],
   "pets":0}`;
console.log(myJesonFile);
console.log(JSON.parse(myJesonFile));

//Find a cool api:
document
  .getElementById("inputButtonId")
  .addEventListener("click", function (event) {
    console.log("jvjidfbvjdfb");
    (async function () {
      const jsonDataVal = await fetch(
        document.getElementById("jsonLinkInput").value
      );
      const jsonContent = await jsonDataVal.json();
      const jsonType = checkJsonContent(jsonContent);
      //const jsonContent = await jsonData.json();

      document.getElementById("jsonStatusView").innerHTML = jsonType;
    })();
  });

function checkJsonContent(jsonData) {
  const stringConstructor = "abc".constructor;
  const arrayConstructor = [].constructor;
  const objectConstructor = {}.constructor;
  if (jsonData === null) {
    return "null";
  }
  if (jsonData === undefined) {
    return "undefined";
  }
  if (jsonData.constructor === stringConstructor) {
    return "String";
  }
  if (jsonData.constructor === arrayConstructor) {
    return "Array";
  }
  if (jsonData.constructor === objectConstructor) {
    return "Object";
  }
  {
    return "don't know";
  }
}
