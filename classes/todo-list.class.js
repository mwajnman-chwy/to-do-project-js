import { Todo } from "./todo.class";

export class TodoList {

    constructor(){
        this.cargarLocalStorage();
    }

    nuevoTodo(todo){
        this.todos.push(todo)
        this.guardarLocalStorage()
    }

    eliminarTodo(id){
        this.todos = this.todos.filter(todo=>todo.id!=id)
        this.guardarLocalStorage()
    }

    marcarCompletado(id){
        const todoModif = this.todos.find(element => element.id==id)
        todoModif.completado = !todoModif.completado
        this.guardarLocalStorage()
    }
    
    eliminarCompletados(){
        this.todos = this.todos.filter(element=>!element.completado)
        this.guardarLocalStorage()
    }

    guardarLocalStorage(){
        localStorage.setItem('todo',JSON.stringify(this.todos));
    }
    
    cargarLocalStorage(){
        this.todos = localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : []
        this.todos = this.todos.map(element => Todo.fromJson(element))
        console.log(this.todos)
    }
}