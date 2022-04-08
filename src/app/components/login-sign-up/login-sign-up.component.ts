import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-sign-up',
  templateUrl: './login-sign-up.component.html',
  styleUrls: ['./login-sign-up.component.scss'],
})
export class LoginSignUpComponent implements OnInit {
  img1: any = '../../../assets/icons/eye.png';
  img2: any = '../../../assets/icons/visibility.png';
  showImg: any;
  constructor() {}

  ngOnInit(): void {}

  showPassword(): any {
    this.showImg = !this.showImg;
    const inputPass: any = document.getElementById('passInput');
    if (inputPass.type === 'password') {
      inputPass.type = 'text';
    } else {
      inputPass.type = 'password';
    }
  }
}
