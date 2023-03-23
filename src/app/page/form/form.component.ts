import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { FormBuilder, Validators } from '@angular/forms'


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit  {
  [x: string]: any;
  nameUser : any;


  constructor( private service: AuthService,private builder: FormBuilder) {
      this.getDataUser();
  }

  userform = this.builder.group({
    user_id: this.builder.control(''),
    name: this.builder.control(''),
    user_name: this.builder.control(''),
    password: this.builder.control(''),
    email: this.builder.control(''),
    gender: this.builder.control('male'),
    role: this.builder.control('', Validators.required),
    isactive: this.builder.control(false)
  });

  ngOnInit(): void {
    this.nameUser = sessionStorage.getItem('name_name');
    console.log("nameUser: ",this.nameUser);
  }

  getDataUser() {
    this.nameUser = sessionStorage.getItem('name_name');
    console.log("nameUser: ",this.nameUser);
  }

  startDate = new Date(1990, 0, 1);
}
