import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuth!: boolean
  authSubscription!: Subscription

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authSubscription = this.authService.authSubject.subscribe(
      isAuth => this.isAuth = isAuth
    )
    this.authService.emitAuthSubject()
  }

  onSignOut() {
    this.authService.signOut()
  }

}
