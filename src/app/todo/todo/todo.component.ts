import { Component, inject, signal } from "@angular/core";
import { Todo } from "../model/todo";
import { TodoService } from "../service/todo.service";
import { FormsModule } from "@angular/forms";
import { form, FormField, FormRoot, required } from "@angular/forms/signals";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  imports: [FormsModule, FormField, FormRoot],
  providers: [TodoService],
})
export class TodoComponent {
  todoService = inject(TodoService);
  // Le signal qui représente le formulaire
  todo = signal(new Todo());

  protected readonly todoForm = form(this.todo, (form) => {
    required(form.name);
    required(form.content);
  });
  todos = this.todoService.getTodos();

  addTodo() {
    this.todoService.addTodo(this.todo());
    this.todo.set(new Todo());
    this.todoService.logTodos();
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
}
