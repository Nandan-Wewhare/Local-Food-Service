import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private http: HttpClient) {
    this.authService = new AuthService(http);
  }
  profileBody: any;
  ngOnInit(): void {
    this.authService.getMyProfile(this.authService.currentUser()).subscribe((res) => {
      this.profileBody = JSON.parse(JSON.stringify(res))
    })
  }
  authService: AuthService

  onUpdate(formBody: any) {
    this.authService.updateProfile(formBody.value).subscribe((res) => { window.alert("Profile updated") }, (error) => { window.alert("Please enter valid values") })
  }
}
