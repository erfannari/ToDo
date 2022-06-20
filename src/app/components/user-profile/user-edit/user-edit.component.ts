import { Component, OnInit } from '@angular/core';
import { userProfile } from '../../../models/userProfile';
import { RestApiService } from 'src/app/components/AuthenticationService/restApiService';
import {environment} from '../../../../environments/environment'
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {
  user_name: string;
  user_email: string;
  user_image: any;
  constructor(public restApi: RestApiService) {
    this.restApi.me().subscribe((response) => {
      this.user_name = response['user'].name;
      this.user_email = response['user'].email;
      this.user_image = environment.base_api_url + response['user'].profile_pic;
    });
  }
  ngOnInit(): void {}
}
