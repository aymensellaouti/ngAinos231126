import { Component, effect, signal, WritableSignal } from '@angular/core';
import { CredentialsDto } from '../dto/credentials.dto';
import { email, form, minLength, required, FormField, FormRoot } from '@angular/forms/signals';

@Component({
  imports: [FormField, FormRoot],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  credentials: WritableSignal<CredentialsDto> = signal({
    email: '',
    password:''
  });

  loginForm = form(this.credentials, (form) => {
    required(form.email, {
      message: 'champ obligatoire'
    });
    required(form.password, {
      message: 'trop court',
    });
    email(form.email, {
      message: 'email obligatoire',
    });
    minLength(form.password, 4);
  })

  showErrorEffect  = effect(() => {
    console.log(this.loginForm().errors());
  })
}
