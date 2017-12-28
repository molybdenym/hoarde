import { User } from './user.type';
import { AccessLevel } from './accesslevel.enum';
import { DateTime } from './datetime.scalar';
/* An edge wraps a node and a cursor. Edges are returned byConnection types as a standard way to paginate through connection values. */
export interface RoleMembersEdge {
  node: User; /* The node value for the edge. */
  cursor: string; /* An opaque cursor pointing to an object in a connection.Used by the &#x27;after&#x27; and &#x27;before&#x27; pagination arguments. */
  accessLevel: AccessLevel; /* The access level for this user enrollment. */
  modifiedAt: DateTime; /* When paired with the Node interface, this is an automatically managedtimestamp that is set whenever an object is mutated. */
  createdAt: DateTime; /* When paired with the Node interface, this is an automatically managedtimestamp that is set when an object is first created. */
}

