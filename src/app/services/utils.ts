import { CodeResponse } from '../models/code-response';

/**
 * This class provides some util functions.
 * The functions could also live without a wrapping class, but with our current bundling it is not possible to mock them for testing.
 * https://github.com/webpack/webpack/issues/6979
 *
 * @export
 */
export class Utils {
  static parseQueryString(string: string): CodeResponse {
    if(string == "") { return {}; }
    
    let segments = string.split("&");
    let qs = { code: '', error: '' };
    segments.forEach(segment => {
      let keyValueArr = segment.split('=')
      const key = keyValueArr[0]
      const value = keyValueArr[1]
      if (key === 'code') qs.code = value
      if (key === 'error') qs.error = value
      
    })
    return qs;
  }
}
