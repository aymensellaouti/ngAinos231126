import { Routes } from '@angular/router';
import { First } from './components/first/first';
import { Color } from './components/color/color';
import { TodoComponent } from './todo/todo/todo.component';
import { WeekTodoComponent } from './todo/week-todo/week-todo.component';
import { CvPage } from './cv/cv-page/cv-page';

export const routes: Routes = [
  {path: '', component: First},
  {path: 'color', component: Color},
  {path: 'todo', component: TodoComponent},
  {path: 'weekTodo', component: WeekTodoComponent},
  {path: 'cv', component: CvPage}
];
