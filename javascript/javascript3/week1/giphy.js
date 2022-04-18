let imagedataGlobal = {};
document
  .getElementById("giphySearchButton")
  .addEventListener("click", function (event) {
    (async function () {
      const giphyData = await fetch(
        "https://api.giphy.com/v1/gifs/search?api_key=0Wy5BoIlIgUp7JN9d31tMp1baJLbnKFk&q=" +
          document.getElementById("giphyInputId").value +
          "&limit=25&offset=0&rating=g&lang=en"
      );

      const gifInfo = await giphyData.json();
      imagedataGlobal = gifInfo;
      let imageContent = "";
      const inputWord = document.getElementById("giphyInputId").value;
      gifInfo.data.forEach(
        (eachImage) =>
          (imageContent =
            imageContent +
            "<p><image src=" +
            eachImage.images.downsized_small.mp4 +
            "/></p>")
      );
      document.getElementById("imageDispayLocation").innerHTML = imageContent;
    })();
  });
document
  .getElementById("giphyNumberInputId")
  .addEventListener("input", function (event) {
    let imageCounter = 0;
    let imageContent = "";
    const gifNumber = document.getElementById("giphyNumberInputId").value;
    while (imageCounter < gifNumber) {
      //console.log(imagedataGlobal.data[imageCounter]);
      imageContent =
        imageContent +
        "<p><image src=" +
        imagedataGlobal.data[imageCounter].images.downsized_small.mp4 +
        "/></p>";
      imageCounter++;
    }
    document.getElementById("imageDispayLocation").innerHTML = imageContent;
  });
