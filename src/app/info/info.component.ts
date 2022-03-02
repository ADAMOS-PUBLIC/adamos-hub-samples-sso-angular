import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  get name() {
    return this.authService.getName();
  }
  get tenant() {
    return this.authService.getTenant();
  }
  get token() {
    return this.authService.getToken();
  }

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    console.log('init Info')
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
  }

}
