import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  message: string = 'Vous etes déconnecté !';
  name: string;
  password: string;
  auth: AuthService;

  constructor(private authService: AuthService, private router:Router) {}

  ngOnInit(): void {
    this.auth = this.authService;
  }

  setMessage() {
    if(this.authService.isLoggedIn) {
      this.message = 'Vous etes connecté !'
    } else {
      this.message = 'Identifiant ou mot de passe incorrects'
    }
  }

  login() {
    this.message = 'Tentative de connexion en cours ....'
    this.authService.login(this.name, this.password)
        .subscribe((isLoggedIn: boolean) => {
          this.setMessage();
          if(isLoggedIn){
            this.router.navigate(['liste-pokemons']);
          } else {
            this.router.navigate(['login']);
          }
          
        }) 
  }

  logout() {
    this.authService.logout();
    this.message = 'Vous etes déconnecté'
  }
  

}
