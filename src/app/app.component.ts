import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'adamos-hub-samples-sso-angular';

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
    this.authService.init();
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
  }
}
