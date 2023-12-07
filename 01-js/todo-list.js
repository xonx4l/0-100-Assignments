/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
   constructor(){
     this.todos = [];
   }

   add(todo){
    this.todos.push(todo);
   }

   remove(index){
     this.todos.splice(index,1);
   }

   update(index, updatedTodo){
     this.todos[index]=updatedTodo;
   }

   getAll(){
    return this.todos;
   }

   get(index){
    return this.todos[index];
   }

   clear() {
     this.todos =[];
   }
  }

  const todoList =new Todo();

  todoList.add("Do homework");
  todoList.add("bake cake");
  todoList.add("Exercise");

  console.log("All Todos:", todoList.getAll());

  todoList.update(1, "Finish coding assignment");
  console.log("updated Todo at index 1:", todoList.get(1));

  todoList.remove(0);
  console.log("remaining Todos after removing at index 0;", todoList.getAll());

  todoList.clear();
  console.log("cleared Todos:", todoList.getAll());

module.exports = Todo;
