import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { RestApiService } from 'src/app/components/AuthenticationService/restApiService';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  user_name: string;
  user_image: any;
  constructor(private _location: Location, private restApi: RestApiService) {
    this.restApi.me().subscribe((response) => {
      this.user_name = response['user'].name;
      this.user_image = environment.base_api_url + response['user'].profile_pic;
    });
  }
  backLastPage() {
    this._location.back();
  }
  ngOnInit(): void {}
}
