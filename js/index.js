//Since I would not have been aible to code this document by myself. So I asked for help and Christine Hartneck, who had already done the exercise helped me out and we went through all the code.


let list = []

function watcher (){
let newTodo = document.getElementById ("submitButton");
newTodo.addEventListener("click", (event) => {
event.preventDefault();


let textField = document.getElementById ("textfield");
let newName = textField.value
if(newName != ""){
  list.push(newName)
  textField.value = ""
}

var todoList = document.getElementById('todoList');


todoList.innerHTML = ""
for (let i = 0; i < list.length; i++){
  todoList.innerHTML += "<input type='checkbox' name='todoElem' value='element"+i+"'>"+list[i]+"<br>"
}


});
}


  let clear = document.getElementById ("clearButton");
  clear.addEventListener("click", (event) => {
  event.preventDefault();

  var todoList = document.getElementsByName('todoElem');
  var i;
 for ( i = 0; i < todoList.length; i++){
   if( todoList[i].checked ==true){
        todoList[i].checked = false;
   }

 }

  });



  let mark = document.getElementById ("markButton");
  mark.addEventListener("click", (event) => {
  event.preventDefault();

  var todoList = document.getElementsByName('todoElem');
  var i;
 for ( i = 0; i < todoList.length; i++){
   if( todoList[i].checked ==false){
        todoList[i].checked = true;
   }

 }

  });



  let del = document.getElementById ("deleteButton");
  del.addEventListener("click", (event) => {
  event.preventDefault();
  var todoList = document.getElementById('todoList');
  todoList.innerHTML = ""
  list = [];

  });



watcher();

