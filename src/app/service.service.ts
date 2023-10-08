import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  private isAuthenticated = false;
  login() {
    this.isAuthenticated = true;
    this.isAuthenticatedUser();
    
  }

  logout() {

    this.isAuthenticated = false;
  }

  isAuthenticatedUser(): any {
    const userData = localStorage.getItem('user');
    if(userData){
      return this.isAuthenticated = true;
    }else{
      this.isAuthenticated = false;
    }
    
  }
}
