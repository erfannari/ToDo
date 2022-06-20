import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RestApiService } from 'src/app/components/AuthenticationService/restApiService';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
@Injectable()
export class SignupComponent implements OnInit {
  img1: any = '../../../assets/icons/eye.png';
  img2: any = '../../../assets/icons/visibility.png';
  showImg: any;
  form: FormGroup;
  constructor(public fb: FormBuilder, public restApi: RestApiService, private router: Router) {
    this.form = this.fb.group({
      name: '',
      email: '',
      password: '',
      profile_pic: [null],
    });
  }
  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      profile_pic: file,
    });
    this.form.get('profile_pic').updateValueAndValidity();
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
  ngOnInit(): void {}
  registerUser() {
    const formData: any = new FormData();
    formData.append('name', this.form.get('name').value);
    formData.append('password', this.form.get('password').value);
    formData.append('email', this.form.get('email').value);
    formData.append('profile_pic', this.form.get('profile_pic').value);
    this.restApi.registerUser(formData).subscribe((data: {}) => {
      const token = data['authorisation'].token;
      this.router.navigate(['todo-info']);
      console.log(data);
      localStorage.setItem('user_token', token);
    });
  }
}
