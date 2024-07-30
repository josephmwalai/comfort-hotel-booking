import { Component } from '@angular/core';
import { RoomieService } from '../../services/roomie.service';
import { error } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginObj: any = {
    phone: '',
    password: '',
  };

  constructor(private roomieSrv: RoomieService, private router: Router) {}

  onLogin() {
    this.roomieSrv.login(this.loginObj).subscribe(
      (res: any) => {
        if (res.result) {
          localStorage.setItem('hotelUser', JSON.stringify(res.data));
          this.router.navigateByUrl('/dashboard');
        } else {
          alert('Check User Credentials');
        }
      },

      (error) => {}
    );
  }
}
