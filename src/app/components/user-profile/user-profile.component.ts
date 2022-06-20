import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/components/AuthenticationService/restApiService';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/Router';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  user_name: string;
  user_email: string;
  user_image: any;
  constructor(public restApi: RestApiService, private router: Router) {
    this.restApi.me().subscribe((response) => {
      this.user_name = response['user'].name;
      this.user_email = response['user'].email;
      this.user_image = environment.base_api_url + response['user'].profile_pic;
      console.log(response);
    });
  }
  ngOnInit(): void {}
  userLogOut() {
    this.restApi.logOut().subscribe((logOutResponse) => {
      // localStorage.removeItem('user_token');
      this.router.navigateByUrl('/login');
      console.log('log out response:' + logOutResponse);
    });
  }
}
