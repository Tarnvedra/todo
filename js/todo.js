// init variables
var todos = [];
var counter = 0;
// get todays date
let today = new Date().toLocaleDateString()
document.getElementById("date").innerHTML = '<i>Todays Date is:</i> ' + today;
// add a new todo
function addTodo() {
            // clear list from screen after each todo is added
            document.getElementById('todo-list').innerHTML = "";
            // create variables for todo input box
            clearTodo = document.querySelector("#todo");
            newTodo = document.getElementById('todo').value;
            // check to make sure an empty string is not entered
            if (newTodo.length = 0 || newTodo === "" ) {
                alert('No todo entered');
            }
            else {
            // when condition is false add todo to array
            todos[counter] = ' ';
            todos[counter] = todos[counter] + newTodo;
            counter = counter + 1;
            // call displaytodos function to get all current todos in list
            displayTodos();
            // clear input box for next todo
            clearTodo.value = "";
            }
           
         
}
// display all todos added
function displayTodos () {
            ul = document.createElement('ul');
            document.getElementById('todo-list').appendChild(ul);
            todos.forEach(function (todos)
                     {
                        // create li element and style it
                        let li = document.createElement('li');
                        li.style.fontSize = "1.5rem"
                        li.style.backgroundColor = "whitesmoke";
                        li.style.margin = "4px";
                        li.style.minWidth = "150px"
                        li.style.maxWidth = "300px";
                        // add list element to unordered list parent
                        ul.appendChild(li);
                        // create delete button for each element
                        let button = document.createElement('button');
                        var buttonText = document.createTextNode("X"); 
                        button.appendChild(buttonText); 
                        button.className = "btn btn-danger delete";
                        // finally add todo text and delete button to li element
                        li.innerHTML += todos;
                        li.appendChild(button); 
                     });

        // add event listners for todos delete buttons
        var elements = document.getElementsByClassName("delete");
        for (var i = 0; i < elements.length; i++) {
                        elements[i].addEventListener('click', deleteTodo);
                        test = (element) => element === todos[i];
                        r = todos.findIndex(test);
                        console.log('value of r = '+r);
                           }

                
function deleteTodo(e , i) {

   const item = e.target;
   const removeTodo = item.parentElement;
   removeTodo.remove();
   // not deleting item from array
   console.log('element number =:' +i);
   todos = todos.slice(i,1);
   //alert('array =:'+todos);
}
}