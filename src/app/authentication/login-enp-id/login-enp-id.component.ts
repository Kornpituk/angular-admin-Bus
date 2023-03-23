import { Component } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'

import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login-enp-id',
  templateUrl: './login-enp-id.component.html',
  styleUrls: ['./login-enp-id.component.css']
})
export class LoginEnpIdComponent {

  constructor(private builder: FormBuilder, private toastr: ToastrService, private service: AuthService,
    private router: Router) {
      sessionStorage.clear();

  }

  result: any;

  loginform = this.builder.group({
    username: this.builder.control('', Validators.required),
  });

  proceedlogin() {
    if (this.loginform.valid) {
      this.service.GetUserbyUserName(this.loginform.value.username).subscribe(item => {
        this.result = item;
        console.log(this.result);
        if (this.result.user_name === this.loginform.value.username) {
          if (this.result.is_active) {
            sessionStorage.setItem('username',this.result.user_name);
            sessionStorage.setItem('role',this.result.role);
            // document.getElementById('role').innerHTML = role;
            this.router.navigate(['']);
          } else {
            this.toastr.error('Please contact Admin', 'InActive User');
            this.router.navigate(['/wait-verify']);
          }
        } else {
          this.toastr.error('Invalid credentials');
          console.log(this.loginform.value.username);
        }
      });
    } else {
      this.toastr.warning('Please enter valid data.')
    }
  }

}
