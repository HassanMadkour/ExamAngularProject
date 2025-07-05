import { Component, OnInit } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { AccountService } from '../../services/account-service';
import { IJWTClaims } from '../../models/ijwtclaims';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  constructor(private accountService:AccountService) {}
  ngOnInit(): void {
   const token = localStorage.getItem('token'); 

if (token) {
  const decoded = jwtDecode<IJWTClaims>(token);
  console.log('Decoded claims:', decoded);

  console.log('id:', decoded.id);
  console.log('userName:', decoded.userName);
  console.log('role:', decoded.role);

}
  }


  logOut() {
    this.accountService.logout() ;
  }
}
