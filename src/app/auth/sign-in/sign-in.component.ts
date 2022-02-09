import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signInForm!: FormGroup
  errorMessage!: string

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm()
  }
  
  initForm() {
    this.signInForm = this.formBuilder.group({
      email: ['',[ Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }
  onSignIn() {
    console.log("testt");
    
  }

}
