import { CodeResponse } from '../models/code-response';

/**
 * This class provides some util functions.
 * The functions could also live without a wrapping class, but with our current bundling it is not possible to mock them for testing.
 * https://github.com/webpack/webpack/issues/6979
 *
 * @export
 */
export class Utils {
  static parseQueryString(string): CodeResponse {
    if(string == "") { return {}; }
    var segments = string.split("&").map(s => s.split("=") );
    var queryString = {};
    segments.forEach(s => queryString[s[0]] = s[1]);
    return queryString;
  }
}
