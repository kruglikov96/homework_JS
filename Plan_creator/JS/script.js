// const div = document.getElementById("lesson");
// div.style.color = "blue";

// const qsElement = div.querySelector("p");
// const qsAllElements = [...div.querySelectorAll("p")];

// console.log(qsElement);
// console.log(qsAllElements);


// const arr = [3,5,1];
// const arr2 = [8,9,15];
// const merged = [0, ...arr, 2, ...arr2];

// console.log(merged)


// const divLesson = document.getElementById("lesson");
// console.log(divLesson.textContent);

// const closestExample = document.querySelector(".closestExample");
// console.log(closestExample)
// console.log(closestExample.closest(".lesson3"));

// const card = document.querySelector(".card");
// const innerExample = document.querySelector(".innerExample");
// const input = document.querySelector("#input");


// card.addEventListener("click", (event) => {
//   if (event.target.id === "deleteBtn") {
//     innerExample.innerHTML += "<h1>DELETE</h1>";
//   }
//   if (event.target.id === "editBtn") {
//     innerExample.innerHTML = input.value;
//   }
  // console.log(event.target);
  // console.log(event.currentTarget);
// });

// innerExample.innerHTML = "Hello"

const drawList = (dataType) => {
  const todoSection = document.querySelector("#todo");

  todoSection.innerHTML = "";

  dataType.forEach((item) => {
    todoSection.innerHTML += `
        <div class="card" style= "border: 1px solid black; padding: 1rem; margin-bottom: 2px">
          <span>Title: </span>
          <span class="title">${item.title}</span>
          <br />
          <span>Description: </span>
          <span class="description">${item.description}</span>
          <br />
          <button class="editButton">Edit</button>
          <button class="deleteButton">Delete</button>
        </div>
      `;
  });
}

const init = () =>{
  const todoList = document.querySelector(".todoList");
  const inputTitle = document.querySelector("#inputTitle");
  const inputDescription = document.querySelector("#inputDescription");
  const addCardButton = document.querySelector("#addCardButton");
  const form = document.querySelector("#form");

  const data = {
    todo:[],
    inProgress:[],
    done:[]
  };

  addCardButton.addEventListener("click", (event) => {
    event.preventDefault();

    data.todo.push({
      title: inputTitle.value,
      description: inputDescription.value,
    })

    form.reset();

    drawList(data.todo)
  });

  const deleteToDo = (event) => {
    const card = event.target.closest(".card");
    const title = card.querySelector(".title").textContent;
    const description = card.querySelector(".description").textContent;
    const obj = { title, description };
    data.todo = data.todo.filter(
      (el) => el.title !== obj.title && el.description !== obj.description
    );
    drawList(data.todo);
  };

  todoList.addEventListener("click", (event) => {
    switch (event.target.classList.value) {
      case "deleteButton":
        deleteToDo(event);
        break;
      case "editButton":
        break;
      default:
        break;
    }
  })
}

init()


  // obj.title = inputTitle.value;
  // obj.description = inputDescription.value;
  // inputTitle.value = "";
  // inputDescription.value = "";

  // innerContainer.innerHTML += `<div style = "border: 3px solid; padding: 3px; display: flex; flex-direction: column"; >
  //   <p>Title: ${obj.title}</p> 
  //   <p>Title: ${obj.description}</p> 
  //     <div>
  //       <button >Edit</button>
  //       <button >Delete</button>
  //     </div>
  //   </div>`;

  // console.log(obj);
  





