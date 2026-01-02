import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModalComponent } from '../components/login-modal/login-modal.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, LoginModalComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  menuOpen = false;
  showLogin = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  openLogin() {
    this.showLogin = true;
  }

  closeLogin() {
    this.showLogin = false;
  }

  // Close mobile menu when any item is clicked
  closeMenuOnMobile() {
    if (window.innerWidth < 768) {
      this.menuOpen = false;
    }
  }
}
