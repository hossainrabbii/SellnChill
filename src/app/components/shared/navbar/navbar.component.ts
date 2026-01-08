import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginModalComponent } from '../../login-modal/login-modal.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, LoginModalComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  menuOpen = false;
  showLogin = false;

  openSubMenu: string | null = null;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  toggleSubMenu(name: string) {
    this.openSubMenu = this.openSubMenu === name ? null : name;
  }

  openLogin() {
    this.showLogin = true;
    this.closeAll();
  }

  closeLogin() {
    this.showLogin = false;
  }

  closeAll() {
    this.menuOpen = false;
    this.openSubMenu = null;
  }
}
