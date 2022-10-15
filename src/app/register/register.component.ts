import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signupForm!: FormGroup
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private routes: Router) { }


  ngOnInit(): void {

    this.signupForm = this.formBuilder.group(
      {
        email: [''],
        username: [''],
        password: ['']
      }
    )
  }

  signup() {

    this.http.post<any>('http://localhost:3000/user', this.signupForm.value).subscribe(res => {

      alert("Inser" + JSON.stringify(res))

    })

  }

}
