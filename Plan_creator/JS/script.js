const drawList = (dataType, section) => {
  section.innerHTML = "";
  console.log(section);

  dataType.forEach((item) => {
    section.innerHTML += `
        <div class="card" style= "border: 1px solid black; padding: 1rem; margin-bottom: 2px">
          <span>Title: </span>
          <span class="title">${item.title}</span>
          <br />
          <span>Description: </span>
          <span class="description">${item.description}</span>
          <br />
          ${
            section.id !== "isDeleted"
              ? `<button class="editButton">Edit</button>
          <button class="deleteButton">Delete</button>
          <button class="nextButton">Next</button>`
              : ""
          }
        </div>
      `;
  });
};

const init = () => {
  const todoSection = document.querySelector("#todo");
  const inProgressSection = document.querySelector("#inProgress");
  const isFinishedSection = document.querySelector("#isFinished");
  const deleteSection = document.querySelector("#isDeleted");
  const modalWrapper = document.querySelector(".wrapper");
  const todoList = document.querySelector(".todoList");
  const inProgressList = document.querySelector(".inProgressList");
  const isFinishedList = document.querySelector(".isFinishedList");
  const clearAllBtn = document.querySelector(".clearAllBtn");
  const inputTitle = document.querySelector("#inputTitle");
  const inputDescription = document.querySelector("#inputDescription");
  const addCardButton = document.querySelector("#addCardButton");
  const form = document.querySelector("#form");

  const data = {
    todo: [],
    inProgress: [],
    done: [],
    deleted: [],
  };

  addCardButton.addEventListener("click", (event) => {
    event.preventDefault();
    data.todo.push({
      title: inputTitle.value,
      description: inputDescription.value,
    });

    form.reset();
    drawList(data.todo, todoSection);
  });

  clearAllBtn.addEventListener("click", (event) => {
    data.deleted = [];
    drawList(data.deleted, deleteSection);
  });

  const deleteCard = (oldList, title, description) => {
    oldList.forEach((item, index) => {
      if (item.title === title && item.description === description) {
        oldList.splice(index, 1);
        data.deleted.push({
          title: title,
          description: description,
        });
      }
    });
    drawList(data.deleted, deleteSection);
  };

  const deleteToDo = (event) => {
    const card = event.target.closest(".card");
    const title = card.querySelector(".title").textContent;
    const description = card.querySelector(".description").textContent;
    const list = event.target.closest(".list");
    console.log(list.id);
    // const obj = { title, description };
    // data.todo = data.todo.filter(
    //   (el) => el.title !== obj.title && el.description !== obj.description
    // );
    if (list.id === "toDoListSection") {
      deleteCard(data.todo, title, description);
      drawList(data.todo, todoSection);
    }
    if (list.id === "inProgressListSection") {
      deleteCard(data.inProgress, title, description);
      drawList(data.inProgress, inProgressSection);
    }
    if (list.id === "isFinishedListSection") {
      deleteCard(data.done, title, description);
      drawList(data.done, isFinishedSection);
    }
  };

  const copyValueInModal = (event) => {
    const cardEdit = event.target.closest(".card");
    const titleEdit = cardEdit.querySelector(".title").textContent;
    const descriptionEdit = cardEdit.querySelector(".description").textContent;

    const inputTitleModal = document.querySelector("#inputTitleModal");
    inputTitleModal.value = titleEdit;

    const inputDescriptionModal = document.querySelector(
      "#inputDescriptionModal"
    );
    inputDescriptionModal.value = descriptionEdit;

    return { titleEdit, descriptionEdit };
  };

  const editCard = (editedList, titleEdit, descriptionEdit) => {
    editedList.forEach((item, index) => {
      if (item.title === titleEdit && item.description === descriptionEdit) {
        editedList.splice(index, 1, {
          title: inputTitleModal.value,
          description: inputDescriptionModal.value,
        });
      }
    });
  };

  const editToDo = (event) => {
    closeModal(event);
    const { titleEdit, descriptionEdit } = copyValueInModal(event);
    const submitButton = document.querySelector("#submitButton");
    const list = event.target.closest(".list");
    submitButton.addEventListener("click", (event) => {
      if (list.id === "toDoListSection") {
        editCard(data.todo, titleEdit, descriptionEdit);
        drawList(data.todo, todoSection);
      }
      if (list.id === "inProgressListSection") {
        editCard(data.inProgress, titleEdit, descriptionEdit);
        drawList(data.inProgress, inProgressSection);
      }
      if (list.id === "isFinishedListSection") {
        editCard(data.done, titleEdit, descriptionEdit);
        drawList(data.done, isFinishedSection);
      }
      modalWrapper.style.display = "none";
    });
  };

  const closeModal = (event) => {
    modalWrapper.style.display = "block";
    const closeButton = document.querySelector("#closeButton");
    closeButton.addEventListener("click", () => {
      modalWrapper.style.display = "none";
    });
  };

  const moveCard = (oldList, newList, title, description) => {
    oldList.forEach((item, index) => {
      if (item.title === title && item.description === description) {
        oldList.splice(index, 1);
        newList.push({
          title: title,
          description: description,
        });
      }
    });
  };

  const nextToDo = (event) => {
    const card = event.target.closest(".card");
    const title = card.querySelector(".title").textContent;
    const description = card.querySelector(".description").textContent;
    const list = event.target.closest(".list");
    if (list.id === "toDoListSection") {
      moveCard(data.todo, data.inProgress, title, description);
    }
    if (list.id === "inProgressListSection") {
      moveCard(data.inProgress, data.done, title, description);
    }
    if (list.id === "isFinishedListSection") {
      moveCard(data.done, data.deleted, title, description);
    }

    drawList(data.inProgress, inProgressSection);
    drawList(data.todo, todoSection);
    drawList(data.done, isFinishedSection);
    drawList(data.deleted, deleteSection);
  };

  todoList.addEventListener("click", (event) => {
    switch (event.target.classList.value) {
      case "deleteButton":
        deleteToDo(event);
        break;
      case "editButton":
        editToDo(event);
        break;
      case "nextButton":
        nextToDo(event);

      default:
        break;
    }
  });

  inProgressList.addEventListener("click", (event) => {
    switch (event.target.classList.value) {
      case "deleteButton":
        deleteToDo(event);
        break;
      case "editButton":
        editToDo(event);
        break;
      case "nextButton":
        nextToDo(event);

      default:
        break;
    }
  });

  isFinishedList.addEventListener("click", (event) => {
    switch (event.target.classList.value) {
      case "deleteButton":
        deleteToDo(event);
        break;
      case "editButton":
        editToDo(event);
        break;
      case "nextButton":
        nextToDo(event);

      default:
        break;
    }
  });
};

init();
