// select items

const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// edit option

let editElement;
let editFlag = false;
let editID = ''; 

// event listeners
// (submit form)
form.addEventListener('submit',addItem);


// functions

function addItem(e){
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();
    
    if(value && !editFlag){
        console.log('add item to the list');
        const element = document.createElement('artcle');
        // add class
        element.classList.add('grocery-item');
        // add id
        const attr = document.createAttribute('data-id');
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHTML = ` 
                                <p class="title">${value}</p>
                                <div class="btn-container">
                                    <button type="button" class="edit-btn">
                                        <i class="bi bi-pencil-fill"></i>
                                    </button>

                                    <button type="button" class="delete-btn">
                                        <i class="bi bi-trash-fill"></i>
                                    </button>
                                </div>
                             `;
        //  append child

        list.appendChild(element);
        displayAlert("item added to the list","success");
        // show container

        container.classList.add("show-container");
        

    }else if(value !== '' && editFlag){
        console.log('editing');
    }else{
        console.log('empty value');
        displayAlert("please enter value","danger");
    }
}

// *** Display alert****
function displayAlert(text,action){
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    setTimeout(()=>{
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`);
    },3000);
}
// local storage
// SetUp Items