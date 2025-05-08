import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule], // aquí se importa FormsModule
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  Uemail: string = '';
  Upassword: string = '';
  loading: boolean = false;

  constructor() {}

  login() {
    if (!this.Uemail || !this.Upassword) {
      alert('Por favor completa ambos campos');
      return;
    }

    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      alert('Login simulado completado');
    }, 1000);
  }
}
