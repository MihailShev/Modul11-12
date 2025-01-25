import { getingPosts, gettingPostDetails } from "./api";

const list = document.querySelector(".list-post");
const btn = document.querySelector("button");
const div = document.querySelector(".container");

const creatTemplate = ({ title, id }) => {
  return `
    <li class="post-item" >
        <p id="${id}" >${title}</p>
    </li>`;
};

const creatDetailsTeamplate = ({ title, body }) => {
  return `
    <h2 class="post-item" >
    ${title}
    </h2>
    <p>${body}</p>`;
};

const createMarkyp = async () => {
  try {
    const data = await getingPosts();
    list.innerHTML = data.map(creatTemplate).join("");
    div.innerHTML = "";
  } catch (error) {
    console.log(error.message);
  }
};

const postDatails = async (e) => {
  e.preventDefault();
  try {
    const data = await gettingPostDetails(e.target.id);
    list.innerHTML = "";
    div.innerHTML = creatDetailsTeamplate(data);
  } catch (error) {
    console.log(error.message);
  }
};

btn.addEventListener("click", createMarkyp);
list.addEventListener("click", postDatails);
