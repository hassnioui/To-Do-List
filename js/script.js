let input = document.querySelector('.input-list');
let tasks = document.querySelector('.tasks');
let addList = document.querySelector('#add-list');


input.addEventListener('keyup', (e) => {
  if (input.value.trim() != "") {
    if (e.key === 'Enter') {
      let newItem = document.createElement('div');
      newItem.classList.add('item');
      newItem.innerHTML = `
            <div class="over-flow"><input type="checkbox" onclick="TestCheck(this)"/> <label>${input.value}</label> </div>
            <div class="actions">
                <i class="fa-regular fa-pen-to-square"></i>
                <i class="fa-solid fa-xmark"></i>         
            </div>
    `;


      if (!tasks && input.value.trim() != "") {
        tasks = document.createElement('div');
        tasks.classList.add('tasks');
        document.body.appendChild(tasks);
      }

      tasks.appendChild(newItem);
      input.value = "";
    }
  }
})

addList.addEventListener('click', () => {
  if (input.value.trim() != 0) {
    let newItem = document.createElement('div');
    newItem.classList.add('item');
    newItem.innerHTML = `
            <div class="over-flow"><input type="checkbox" onclick="TestCheck(this)"/> <label>${input.value}</label> </div>
            <div class="actions">
                <i class="fa-regular fa-pen-to-square"></i>
                <i class="fa-solid fa-xmark"></i>         
            </div>
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
  if (e.target.classList.contains('fa-xmark')) {
    let item = e.target.parentNode;
    item.parentNode.remove();
    if (tasks.childNodes.length === 0) {
      tasks.parentNode.removeChild(tasks);
      tasks = null;
    }
  } else if (e.target.classList.contains('fa-regular')) {
    let label = e.target.parentNode.previousElementSibling.querySelector('label');
    input.value = label.innerText;

    input.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        label.parentNode.parentNode.remove();
      }
    });

    addList.addEventListener('click', () => {
      label.parentNode.parentNode.remove();
    });

  }
});


function TestCheck(checkbox) {
  if (checkbox.checked == true) {
    checkbox.parentNode.style.textDecoration = "line-through";
  } else {
    checkbox.parentNode.style.textDecoration = "";
  }
}






