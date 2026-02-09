let inputText = document.querySelector("#input-text");
let body = document.querySelector("body")
let button = document.querySelector(".add-todo");
let todoContainer = document.querySelector(".todo-container")


button.onclick = () => {
    if(inputText.value.length > 0){
        let CreateLi = document.createElement("div");
        CreateLi.id = "todo-list";
        CreateLi.classList.add("todo-list")
        CreateLi.innerHTML = inputText.value;
        todoContainer.appendChild(CreateLi);

        let CreateSpan = document.createElement("span");
        CreateSpan.classList.add('mark-done');
        CreateSpan.innerHTML = '<i class="fa-regular fa-circle"></i>';
        CreateLi.appendChild(CreateSpan);

        let createDelete = document.createElement('span');
        createDelete.classList.add("delete");
        createDelete.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
        CreateLi.appendChild(createDelete);

        CreateSpan.addEventListener("click", (e) =>{
            if(!CreateLi.classList.toggle("done")){
        CreateSpan.innerHTML = '<i class="fa-regular fa-circle"></i>';   
        } else{
            CreateSpan.innerHTML = '<i class="fa-regular fa-circle"></i>'; CreateSpan.innerHTML = '<i class="fa-regular fa-circle-check"></i>'
        }
        })

        createDelete.addEventListener("click", (e) => {
            createDelete.parentNode.remove()
        })


    let getLi = document.querySelectorAll(".todo-list").length
  
   if(getLi > 8){
    todoContainer.classList.add("scroll")
    savedata()
    
   }  else if(getLi <= 8){
    todoContainer.classList.remove("scroll") 
    savedata()
   
   }

   savedata()
    } else{
        console.log('error')
    }
    savedata()
}

function savedata(){
    localStorage.setItem("listdata", todoContainer.innerHTML)
}

function getdata(){
    todoContainer.innerHTML = localStorage.getItem("listdata")
}

getdata();
