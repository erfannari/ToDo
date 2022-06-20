import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestApiService } from 'src/app/components/AuthenticationService/restApiService';
import { AuthguardServiceService } from '../../Services/authguard-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-sign-up',
  templateUrl: './login-sign-up.component.html',
  styleUrls: ['./login-sign-up.component.scss'],
})
export class LoginSignUpComponent implements OnInit {
  img1: any = '../../../assets/icons/eye.png';
  img2: any = '../../../assets/icons/visibility.png';
  showImg: any;
  userId: any;
  errorMessage = '';
  userLogin = {
    email: '',
    password: '',
  };
  constructor(
    public restApi: RestApiService,
    private router: Router,
    public AuthGuard: AuthguardServiceService
  ) {}

  ngOnInit(): void {
    localStorage.getItem('user_token');
  }

  showPassword(): any {
    this.showImg = !this.showImg;
    const inputPass: any = document.getElementById('passInput');
    if (inputPass.type === 'password') {
      inputPass.type = 'text';
    } else {
      inputPass.type = 'password';
    }
  }
  userEntry() {
    this.restApi.loginUser(this.userLogin).subscribe(
      (response) => {
        const token = response['authorisation'].token;
        localStorage.setItem('user_token', token);
        console.log(response);
        if (this.AuthGuard.getToken()) {
          this.router.navigateByUrl('/todo-info');
        }
      },
      (error) => {
        this.errorMessage = error.error.message;
        alert(error.error.message + ' User');
      }
    );
  }
}
