import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
})
export class LoginModalComponent {
  @Output() close = new EventEmitter<void>();

  email = '';
  password = '';

  submit() {
    console.log('Login Data:', {
      email: this.email,
      password: this.password,
    });
  }

  closeModal() {
    this.close.emit();
  }
}
