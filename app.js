const noDefault = document.querySelector('.removeDefault');
const input = document.querySelector('input[type="text"]')
const ul = document.querySelector('.newToDos');
const savedTodos = JSON.parse(localStorage.getItem("OBJECTCONTAINER")) || [];

noDefault.addEventListener('click', function(event){
    event.preventDefault();

    // New <li> 
    const newTodo = document.createElement('li');
     const liText = newTodo.innerText = input.value;
    input.value = "";

    // The "DONE" <button>
    const lineTrough = document.createElement('button');
    lineTrough.addEventListener('click', function(event){
        event.preventDefault();
        newTodo.classList.toggle('done');
    })

    // The "REMOVE <button>"
    const removeBtn = document.createElement('button');
    removeBtn.addEventListener('click',function(event){
        event.preventDefault();
        newTodo.remove();
    })

    removeBtn.innerText = "Remove me";
    lineTrough.innerText = 'Done';
    ul.append(newTodo);
    newTodo.append(lineTrough);
    newTodo.appendChild(removeBtn);


    // // retrieve from localStorage
    // for (let i = 0; i < savedTodos.length; i++) {
    //     let newTodo = document.createElement("li");
    //     newTodo.innerText = savedTodos[i].task;
    //     newTodo.isCompleted = savedTodos[i].isCompleted ? true : false;
    //     if (newTodo.isCompleted) {
    //       newTodo.style.textDecoration = "line-through";
    //     }
    //     ul.appendChild(newTodo);
    // }

    // save to localStorage
  savedTodos.push({ task: newTodo.innerText, isCompleted: false });
  localStorage.setItem("OBJECTCONTAINER", JSON.stringify(savedTodos));

});
