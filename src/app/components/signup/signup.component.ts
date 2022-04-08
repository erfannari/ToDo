import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
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
