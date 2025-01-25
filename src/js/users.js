import { getTodoService, getUsersServise } from "./api";

const list = document.querySelector(".list-post");
const btn = document.querySelector(".users-btn");
const div = document.querySelector(".container");

const createCartUser = ({ id, name, username, email }) => {
  const templ = `
    <li id="${id}">
    <p>${name}</p>
    <p>${username}</p>
    <p>${email}</p>
    <button class="posts" type="button">Get users posts</button>
    <button class="todo" type="button">Get users todo</button>
  </li>`;
  return templ;
};

const createTodoList = ({ title }) => {
  return `<p>${title}</p>`;
};

const onGetUsers = async () => {
  try {
    const data = await getUsersServise();
    div.innerHTML = "";
    list.innerHTML = data.map(createCartUser).join("");
  } catch (error) {
    console.log(error.message);
  }
};

const getUserTodo = async (e) => {
  if (!e.target.classList.contains("todo")) {
    return;
  }
  try {
    const data = await getTodoService(e.target.parentNode.id);
    e.target.parentNode.
        insertAdjacentHTML("beforeend", data.map(createTodoList).join(""))
    ;
  } catch (error) {
    console.log(error.message);
  }
};

btn.addEventListener("click", onGetUsers);
list.addEventListener('click', getUserTodo);
