import { Injectable } from '@angular/core';
import { OAuthService, AuthConfig } from 'angular-oauth2-oidc';
import { environment } from 'src/environments/environment';
import { Utils } from './utils';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _loggedIn = false;
  private _name: string;
  private _tenant: string;

  isLoggedIn = () => this._loggedIn;
  getName = () => this._name;
  getTenant = () => this._tenant;
  getIssuer = () => this.oauthService.issuer;
  getToken = () => this.oauthService.getAccessToken();

  constructor(private oauthService: OAuthService) { }

  /**
   * init
   */
  public async init() {
    try {
      // Configure 3rd-party library
      this.oauthService.configure(this.getAuthConfig())
      await this.oauthService.loadDiscoveryDocument()

      // Case 1: Valid access token is available -> user is already logged in
      // Nothing to do except show the home page of the app
      if (this.oauthService.hasValidAccessToken()) {
        this.afterLogIn();
        return;
      }

      // Case 2: The authorization code is available in the hash fragment (normally when the user gets redirected back from the IAM Server).
      // Try to login with the code from the hash fragment.
      let qs = Utils.parseQueryString(window.location.search.substring(1))
      if (qs.code) {
        await this.oauthService.tryLoginCodeFlow();

        this.afterLogIn();
        return;
      }
      else if (qs.error) {
        alert("Error returned from authorization server: "+qs.error);
        return;
      }

      // Case 3: Fallback.
      // Start the code flow.
      this.oauthService.initCodeFlow();
    } catch {
      alert('Login currently not available. Retry later.');
    }
  }

  /**
   * login
   */
  public login() {
    this.oauthService.initCodeFlow();
  }

  /**
   * logout
   */
  public async logout() {
    this.oauthService.logOut();
    this._loggedIn = false;
    this._name = null;
  }

  private afterLogIn() {
    this._loggedIn = true;
    this.loadUser();
  }

  private loadUser() {
    const claims = this.oauthService.getIdentityClaims();
    if (!claims) {
      return;
    }
    this._name = (claims as any).name;
    this._tenant = (claims as any)['https://id.adamos.com/tenantId'];
  }

  private getAuthConfig(): AuthConfig {
    return {
      // Url of the Identity Provider
      // issuer: `${environment.iamEndpoint}/auth/realms/${tenant}`,
      issuer: `${environment.iamEndpoint}`,

      // The SPA's id. The SPA is registerd with this id at the auth-server
      clientId: environment.clientId,

      // URL of the SPA to redirect the user to after login
      redirectUri: window.location.origin,

      responseType: 'code',

      logoutUrl: `${environment.iamEndpoint}logout?returnTo=${window.location.origin}&client_id=${environment.clientId}`,

      // Just needed if your auth server demands a secret. In general, this
      // is a sign that the auth server is not configured with SPAs in mind
      // and it might not enforce further best practices vital for security
      // such applications.
      // dummyClientSecret: 'secret',

      // set the scope for the permissions the client should request
      // The first four are defined by OIDC. 
      // Important: Request offline_access to get a refresh token
      // The api scope is a usecase specific one
      scope: 'openid profile email',

      showDebugInformation: true,

      // Not recommented:
      // disablePKCI: true,
    };
  }
}
