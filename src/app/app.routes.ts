import { Routes } from '@angular/router';
import { First } from './components/first/first';
import { Color } from './components/color/color';
import { TodoComponent } from './todo/todo/todo.component';
import { WeekTodoComponent } from './todo/week-todo/week-todo.component';
import { CvPage } from './cv/cv-page/cv-page';
import { Second } from './components/second/second';
import { Nf404 } from './components/nf404/nf404';
import { DetailsCvComponent } from './cv/details-cv/details-cv.component';
import { Login } from './auth/login/login';

export const routes: Routes = [
  {path: '', component: First},
  {path: 'color', component: Color},
  {path: 'todo', component: TodoComponent},
  {path: 'weekTodo', component: WeekTodoComponent},
  {path: 'cv', component: CvPage},
  {path: 'login', component: Login},
  {path: 'cv/:id', component: DetailsCvComponent},
  {path: 'hello/:name', component: Second},
  {path: '**', component: Nf404},
];
