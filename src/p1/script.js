let hidden = null;

const images = document.querySelectorAll("img");
images.forEach((dataInsideJson) => {
  dataInsideJson.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    let menuBoxElem = document.getElementById("menuid");
    console.log("menuBoxElem", menuBoxElem);
    if (menuBoxElem) {
      menuBoxElem.remove();
    }
    const menuContainer = cerateMenuContainer(event.clientX, event.clientY);
    const test = appendMenu(menuContainer, data);
    console.log(test);
    // setTimeout(() => {
    // renderList(data, event.clientX, event.clientY);
    // }, 2000);
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

// let menu = document.createElement("div");
// menu.setAttribute("id", "menuid");

function renderList(obj, x, y) {
  menu.classList.add("contextMenu");
  let result = document.createElement("ul");

  for (let key in obj) {
    let list = document.createElement("li");
    let spanElem = document.createElement("span");
    let textnode = document.createTextNode(obj[key].label);

    if (obj[key].separator) {
      let hr = document.createElement("hr");
      list.appendChild(hr);
      // list.classList.add("separator");
    }

    if (textnode.textContent !== "undefined") {
      spanElem.innerHTML = `<i class="${obj[key].icon}" aria-hidden="true"></i>`;
      list.prepend(spanElem);
      list.appendChild(textnode);
      // list.appendChild(`<i class="fa-solid fa-chevron-right"></i>`);
    }
    if (typeof obj[key] === "object") {
      list.appendChild(renderList(obj[key]["items"]));

      if (obj[key]["items"]) {
        // list.innerHTML = `<i class="fa-solid fa-chevron-right"></i>`;
        // list.appendChild(`<i class="fa-solid fa-chevron-right"></i>`);
      }
    }

    result.appendChild(list);
  }
  menu.appendChild(result);
  if (menu.textContent) {
    document.body.appendChild(menu);
  }

  hidden = menu;
  menu.style.left = x + "px";
  menu.style.top = y + "px";
  menu.style.display = "block";

  return result;
}

document.addEventListener("click", (e) => {
  open();
});

function open() {
  if (hidden !== null) {
    let x = document.getElementById("menuid");
  }
}

// function open() {
//   if (hidden !== null) {
//     closeContextMenu(hidden);
//   }
// }

// function closeContextMenu(menu) {
//   menu.style.left = "0px";
//   menu.style.top = "0px";
//   let x = document.getElementById("menuid");
//   document.body.removeChild(menu);
//   hidden = null;
// }
