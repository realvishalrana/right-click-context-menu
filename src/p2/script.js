const images = document.querySelectorAll("img");
const result = document.getElementById("result");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");

const imaDataArr = [
  { img: img1, data: dataForImage1 },
  { img: img2, data: dataForImage2 },
  { img: img3, data: dataForImage3 },
];

imaDataArr.forEach((objEle) => {
  objEle.img.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    let menuBoxElem = document.getElementById("menuid");
    if (menuBoxElem) {
      menuBoxElem.remove();
    }
    const menuContainer = cerateMenuContainer(event.clientX, event.clientY);
    appendMenu(menuContainer, objEle.data);
  });
});

function cerateMenuContainer(x, y) {
  const menuContainer = document.createElement("div");
  menuContainer.setAttribute("id", "menuid");
  menuContainer.classList.add("contextMenu");
  menuContainer.style.left = x + "px";
  menuContainer.style.top = y + "px";
  menuContainer.style.display = "block";
  document.body.appendChild(menuContainer);
  return menuContainer;
}

function appendMenu(container, data) {
  let menuList = document.createElement("ul");
  data.forEach((obj, index) => {
    let list = document.createElement("li");
    list.classList.add("item");

    let arrowElem;
    if (!obj.separator) {
      // icon
      let iconElem = document.createElement("div");
      iconElem.classList.add("icon");
      iconElem.innerHTML = `<i class="${obj.icon}" aria-hidden="true"></i>`;
      list.appendChild(iconElem);

      // label
      let labelElem = document.createElement("div");
      labelElem.classList.add("label");
      let textNode = document.createTextNode(obj.label);
      labelElem.appendChild(textNode);
      list.appendChild(labelElem);

      // arrow icon
      arrowElem = document.createElement("div");
      arrowElem.classList.add("arrow");
      if (obj.items && obj.items.length) {
        arrowElem.innerHTML = `<i class="fa-solid fa-chevron-right"></i>`;
        list.appendChild(appendMenu(menuList, obj.items));
      }
      list.appendChild(arrowElem);
      menuList.appendChild(list);
    } else {
      let hr = document.createElement("hr");
      menuList.appendChild(hr);
    }

    container.appendChild(menuList);
  });
  return menuList;
}

document.addEventListener("click", (e) => {
  let menuBoxElem = document.getElementById("menuid");
  menuBoxElem.remove();
});
