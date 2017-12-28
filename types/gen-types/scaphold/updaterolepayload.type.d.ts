import { Role } from './role.type';
import { RoleEdge } from './roleedge.type';
import { Viewer } from './viewer.type';

export interface UpdateRolePayload {
  changedRole?: Role | null; /* The mutated Role. */
  changedEdge?: RoleEdge | null; /* An edge containing the mutated Role. Use this to update your client side cache. */
  viewer?: Viewer | null; /* A view port into your application. */
  clientMutationId?: string | null; /* An opaque string used by frontend frameworks like relay to track requests and responses. */
}

