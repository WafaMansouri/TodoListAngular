
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

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

  signUp(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        this.httpClient
        .post('https://todo-list-ee9e5-default-rtdb.europe-west1.firebasedatabase.app/users.json', {
          email, password
        })
        .subscribe({
          next: () => {
            this.isAuth = true;
            localStorage.setItem("isAuth", "true")
            this.emitAuthSubject()
            resolve("true")
          },
          error: (error) => {
            reject(error)
          }
        })
      }
    )
  }
  signIn(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        this.httpClient
        .get('https://todo-list-ee9e5-default-rtdb.europe-west1.firebasedatabase.app/users.json')
        .subscribe({
          next: (response: any) => {
            for (let i in response) {
                if (response[i].email === email) {
                  if(response[i].password!==password) {
                    this.isAuth =false
                    reject("Wrong password!")
                  }
                  else {
                    this.isAuth = true
                    localStorage.setItem("isAuth", "true")
                    this.emitAuthSubject()
                  }
                }
            }
            if (!this.isAuth) {
              reject("Email not exist!")
            }
            resolve(email)
          },
          error: (error) => {
              console.log('Erreur de chargement ! ' + error);
              reject(error)
          }
        })
      }
    )
  }
  signOut() {
    this.isAuth = false
    localStorage.removeItem("isAuth")
    this.emitAuthSubject()
  }
}
