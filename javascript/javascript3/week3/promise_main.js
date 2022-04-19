//Getting into promises

const promiseAll = Promise.all([
  fetch(
    " https://api.github.com/search/repositories?q=user:SvitlanaBurlaka"
  ).then((response) => response.json()),
  fetch(" https://api.github.com/search/repositories?q=user:alina-kho").then(
    (response) => response.json()
  ),
  fetch(
    " https://api.github.com/search/repositories?q=user:TatjanaOcedova"
  ).then((response) => response.json()),
]);

const body = document.querySelector("body");
const ulToRenderInfo = document.createElement("ul");
body.appendChild(ulToRenderInfo);

promiseAll.then((data) => {
  data.forEach((element) => {
    console.log(element.items);
    const listItem = document.createElement("li");
    listItem.innerHTML = `${element.items[0].owner.login}'s repository`;
    const ulToRenderInfoForeachRepo = document.createElement("ul");
    listItem.appendChild(ulToRenderInfoForeachRepo);
    element.items.forEach((item) => {
      const listItemForEachRepo = document.createElement("li");
      listItemForEachRepo.innerHTML = `${item.name}: ${item.html_url}`;
      ulToRenderInfoForeachRepo.appendChild(listItemForEachRepo);
    });
    ulToRenderInfo.appendChild(listItem);
  });
});
