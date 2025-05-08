import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  Uname: string = '';
  Ulastname: string = '';
  Ucredential: number | null = null;
  Uemail: string = '';
  Upassword: string = '';
  repeatUPassword: string = '';
  loading: boolean = false;

  addUser() {
    if (!this.Uname || !this.Ulastname || !this.Ucredential || !this.Uemail || !this.Upassword || !this.repeatUPassword) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    if (this.Upassword !== this.repeatUPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      alert('Registro exitoso');
    }, 1000);
  }
}
