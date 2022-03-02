import { Injectable } from '@angular/core';
import { OAuthService, AuthConfig } from 'angular-oauth2-oidc';
import { environment } from 'src/environments/environment';
import { Utils } from './utils';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _loggedIn = false;
  private _name: string|undefined;
  private _tenant: string|undefined;

  isLoggedIn = () => this._loggedIn;
  getName = () => this._name;
  getTenant = () => this._tenant;
  getIssuer = () => this.oauthService.issuer;
  getToken = () => this.oauthService.getAccessToken();

  constructor(private oauthService: OAuthService) { }

  /**
   * configure
   */
  public async configure() {
    this.oauthService.configure(this.getAuthConfig())
    await this.oauthService.loadDiscoveryDocument()
  }

  public hasValidAccessToken() {
    return this.oauthService.hasValidAccessToken()
  }

  public isCallback(): boolean {
    let qs = Utils.parseQueryString(window.location.search.substring(1))
    return !!qs.code || !!qs.error
  }

  public async tryLoginCodeFlow() {
    await this.oauthService.tryLoginCodeFlow()
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
    this._name = '';
  }

  public afterLogIn() {
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
      redirectUri: `${window.location.origin}/login/callback`,

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
