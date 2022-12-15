import { Component } from '@angular/core';
import { Todo } from './Todo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoapp';
  todos: Todo[] = [];
  newTodo:string;
   SaveTodo(){
    if(this.newTodo){
let todo= new Todo();
todo.name=this.newTodo;
todo.isComplated=true;
this.todos.push(todo);
this.newTodo="";
console.log(todo)
    }
    else{
      alert("Please Enter Todo")
    }
    
   }

   done(id:number){
this.todos[id].isComplated=!this.todos[id].isComplated;
   }
   removeTodo(id:number){
this.todos=this.todos.filter((v,i)=>i!==id);
   }
}
