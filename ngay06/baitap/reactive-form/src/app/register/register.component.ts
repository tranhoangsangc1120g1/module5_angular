import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  rfRegister=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)]),
    confirmPassword:new FormControl('',[Validators.required]),
    country:new FormControl('',[Validators.required]),
    age:new FormControl('',[Validators.required,Validators.min(18)]),
    gender:new FormControl('',[Validators.required]),
    phone:new FormControl('',[Validators.required,Validators.pattern("\\+84[\d]{9,10}")])
  })

  onSubmit() {
    console.log(this.rfRegister.value)
  }
}
