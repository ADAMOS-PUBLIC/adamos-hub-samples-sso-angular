import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from "@angular/router"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'adamos-hub-samples-sso-angular';

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    console.log('init App Component')
    this.authService.configure();
    
    if (this.authService.isCallback()) {
      // do nothing
    }
    else if (this.authService.hasValidAccessToken()) {
      this.router.navigate(['/info'])
      this.authService.afterLogIn()
    }
    else {
      this.authService.login()
    }
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
}
