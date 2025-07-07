import { Component } from '@angular/core';
import { AccountService } from '../../Components/services/account-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {
constructor(public accountService: AccountService, private router: Router) {}

  logout(): void {
    this.accountService.logout();
  }

  goToProfile(): void {
    this.router.navigate(['profile']); 
  }

  goToLogin(): void {
    this.router.navigate(['/account/login']);
  }
}
