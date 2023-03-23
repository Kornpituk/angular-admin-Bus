import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-wait-verify',
  templateUrl: './wait-verify.component.html',
  styleUrls: ['./wait-verify.component.css'],
})
export class WaitVerifyComponent implements OnInit {
  constructor(
    private builder: FormBuilder,
    private toastr: ToastrService,
    private service: AuthService,
    private router: Router
  ) {
    sessionStorage.clear();
  }
  ngOnInit(): void {
    this.proceedlogin();
  }

  result: any;

  loginform = this.builder.group({
    username: this.builder.control('', Validators.required),
  });

  // proceedlogin() {
  //     this.service.GetUserbyCode(this.loginform.value.username).subscribe(item => {
  //       this.result = item;
  //       if (this.result.userName === this.loginform.value.username) {
  //         if (this.result.IsActive) {
  //           sessionStorage.setItem('username',this.result.username);
  //           sessionStorage.setItem('role',this.result.role);
  //           this.router.navigate(['']);
  //         } else {
  //           this.toastr.error('Please contact Admin', 'InActive User');
  //         }
  //       } else {
  //         this.toastr.error('Invalid credentials');
  //       }
  //     });
  // }

  proceedlogin() {
    if (this.result.IsActive) {
      sessionStorage.setItem('username', this.result.username);
      sessionStorage.setItem('role', this.result.role);
      this.router.navigate(['']);
    } else {
      this.toastr.error('Please contact Admin', 'InActive User');
    }
  }
}
