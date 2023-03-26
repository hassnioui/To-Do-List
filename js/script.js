let input = document.querySelector('.input-list');
let removeList = document.querySelector('.remove-list');
let tasks = document.querySelector('.tasks');
let addList = document.querySelector('.add-list');

input.addEventListener('keyup', () => {
  if (input.value.trim() != 0) {
    addList.classList.add("active");
  } else {
    addList.classList.remove("active");
  }
})

addList.addEventListener('click', () => {
  if (input.value.trim() != 0) {
    let newItem = document.createElement('div');
    newItem.classList.add('item');
    newItem.innerHTML = `
      <p class="over-flow" contenteditable="true" >${input.value}</p>
      <svg class="remove-list" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
        <path fill="currentColor" d="M19.7 4.3c-.4-.4-1-.4-1.4 0L12 10.6 5.7 4.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4L10.6 12l-6.3 6.3c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0L12 13.4l6.3 6.3c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4L13.4 12l6.3-6.3c.4-.4.4-1 0-1.4z" />
      </svg>
    `;

    if (!tasks) {
      tasks = document.createElement('div');
      tasks.classList.add('tasks');
      document.body.appendChild(tasks);
    }

    tasks.appendChild(newItem);
    input.value = "";
  }
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-list')) {
    let item = e.target.parentNode;
    item.remove();
    if (tasks.childNodes.length === 0) {
      tasks.parentNode.removeChild(tasks);
      tasks = null;
    }
  }
});


document.addEventListener('dblclick', (e) => {
  if (e.target.classList.contains('over-flow')) {
    if (e.target.style.textDecoration === "line-through") {
      e.target.style.textDecoration = "";
    } else {
      e.target.style.textDecoration = "line-through";
    }
  }
});




