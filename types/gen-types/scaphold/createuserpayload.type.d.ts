import { User } from './user.type';
import { UserEdge } from './useredge.type';
import { Viewer } from './viewer.type';

export interface CreateUserPayload {
  token?: string | null; /* The user&#x27;s authentication token. Embed this under the&#x27;Authorization&#x27; header with the format &#x27;Bearer &lt;token&gt;&#x27; */
  changedUser?: User | null; /* The mutated User. */
  changedEdge?: UserEdge | null; /* An edge containing the mutated User. Use this to update your client side cache. */
  viewer?: Viewer | null; /* A view port into your application. */
  clientMutationId?: string | null; /* An opaque string used by frontend frameworks like relay to track requests and responses. */
}

