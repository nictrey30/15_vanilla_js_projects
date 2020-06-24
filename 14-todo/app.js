// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const submitBtn = document.querySelector('.submit-btn');

const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// edit option
let editElement;
let editFlag = false;
let editID = '';

// ****** FUNCTIONS **********
// display alert
const displayAlert = (text, action) => {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  // remove alert
  setTimeout(() => {
    alert.textContent = '';
    alert.classList.remove(`alert-${action}`);
  }, 1000);
};

// ****** LOCAL STORAGE **********
const addToLocalStorage = (id, value) => {};

// set back to default
const setBackToDefault = () => {
  form.grocery.value = '';
  editFlag = false;
  editID = '';
  submitBtn.textContent = 'submit';
};

// delete function
const deleteItem = () => {
  console.log('item deleted');
};
// edit function
const editItem = () => {
  console.log('edit item');
};
// add item
const addItem = (e) => {
  e.preventDefault();
  const value = form.grocery.value.trim();
  const id = new Date().getTime().toString();
  if (value && !editFlag) {
    // if the value is not an empty string and i am not editing
    const element = document.createElement('article');
    element.classList.add('grocery-item');
    // add id
    const attr = document.createAttribute('data-id');
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `
      <p class="title">${value}</p>
      <div class="btn-container">
        <button type="button" class="edit-btn">
          <i class="fas fa-edit"></i>
        </button>
        <button type="button" class="delete-btn">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    `;
    const deleteBtn = element.querySelector('.delete-btn');
    const editBtn = element.querySelector('.edit-btn');
    deleteBtn.addEventListener('click', deleteItem);
    editBtn.addEventListener('click', editItem);
    // append child
    list.appendChild(element);
    // display alert
    displayAlert('item added to the list', 'success');
    // show container if item added with success
    if (!container.classList.contains('show-container'))
      container.classList.add('show-container');
    // add to localStorage
    addToLocalStorage(id, value);
    // set back to default
    setBackToDefault();
  } else if (value && editFlag) {
    console.log('editing');
  } else {
    displayAlert('please enter a value', 'danger');
  }
};

// clear items
const clearItems = () => {
  const items = document.querySelectorAll('.grocery-item');
  if (items.length) {
    items.forEach((item) => {
      // list is the parent of the item
      list.removeChild(item);
    });
  }
  displayAlert('empty list', 'danger');
  container.classList.remove('show-container');
  setBackToDefault();
  // localStorage.removeItem('list')
};

// ****** EVENT LISTENERS **********
// submit form
form.addEventListener('submit', addItem);
clearBtn.addEventListener('click', clearItems);

// ****** SETUP ITEMS **********
