import { getingPhotos, getOnePhoto } from "./api";
const list = document.querySelector(".list-post");
const btn = document.querySelector(".photos-btn");
const div = document.querySelector(".container");

const listTamplate = ({ title, id }) => {
  return `<li class="photos-item">
  <h3 id="${id}">${title}</h3>
</li>`;
};
const photosTemplate = ({ title, thumbnailUrl }) => {
  return `<h3>${title}</h3>
<img src="${thumbnailUrl}" alt="${title}">`;
};

const createCard = async () => {
  try {
    const data = await getingPhotos();
    div.innerHTML = "";
    list.innerHTML = data.map(listTamplate).join("");
  } catch (error) {
    console.log(error);
  }
};
const createPhoto = async (event) => {
  if (event.target.nodeName !== "H3") {
    return;
  }
  try {
    const data = await getOnePhoto(event.target.id);
    list.innerHTML = "";
    div.innerHTML = photosTemplate(data);
  } catch (error) {
    console.log(error);
  }
};
btn.addEventListener("click", createCard);
list.addEventListener("click", createPhoto);
