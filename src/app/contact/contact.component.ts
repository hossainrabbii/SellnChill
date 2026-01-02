// src/app/contact/contact.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    company: '',
    message: '',
  };

  onChange(field: string, event: Event) {
    const value = (event.target as HTMLInputElement | HTMLTextAreaElement).value;
    this.formData[field as keyof typeof this.formData] = value;

    console.log(this.formData);
  }

  onSubmit() {
    console.log('Submitting form:', this.formData);
    //  call API here
  }
}
