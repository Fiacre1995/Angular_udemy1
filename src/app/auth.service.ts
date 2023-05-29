import { Injectable } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Permet de vérifier si l'utilisateur est connecté 
  isLoggedIn: boolean = false;

  //redirection de l'URL
  redirectUrl: string;

  login(name: string, password:string): Observable<boolean> {
    const isLoggedIn = (name == 'pikatchu' && password == 'pikatchu');

    return of(isLoggedIn).pipe(
      delay(1000),
      tap(isLoggedIn => this.isLoggedIn = isLoggedIn)
    );
  }

  // Permet de déconnecté l'utilisateur en cour
  logout() {
    this.isLoggedIn = false;
  }
}
