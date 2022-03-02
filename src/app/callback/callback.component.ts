import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { AuthService } from '../services/auth.service';
import { Utils } from '../services/utils';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  errorMessage: string|undefined;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    console.log('init Callback')
    this.handleCallback()
  }

  async handleCallback() {
    await this.authService.configure()

    let qs = Utils.parseQueryString(window.location.search.substring(1))
    if (qs.code) {
      await this.authService.tryLoginCodeFlow()
      
      this.authService.afterLogIn()

      this.router.navigate(['/info'])
    }
    else if (qs.error) {
      // alert("Error returned from authorization server: "+qs.error);
      this.errorMessage = qs.error
    }
  }

}
