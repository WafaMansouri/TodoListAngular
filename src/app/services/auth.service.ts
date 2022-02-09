
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth: boolean = false
  authSubject = new Subject<boolean>()

  constructor(private httpClient: HttpClient) { }

  emitAuthSubject() {
    const auth = localStorage.getItem("isAuth")
    auth ? this.authSubject.next(true) : this.authSubject.next(false)
  }

  signUp() {}
  signIn() {
    localStorage.setItem("isAuth", "true")
  }
  signOut() {console.log("pppp");
    localStorage.removeItem("isAuth")
  }
}
