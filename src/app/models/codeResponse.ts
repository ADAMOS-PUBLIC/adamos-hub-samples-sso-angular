/**
 * Represents an auth-code-response for the oauth process.
 */
export interface CodeResponse {
  readonly code?: string;
  readonly error?: string;
}