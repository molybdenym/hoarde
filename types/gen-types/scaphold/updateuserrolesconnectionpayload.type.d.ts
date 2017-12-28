import { UserRoles } from './userroles.type';
import { UserRolesEdge } from './userrolesedge.type';
import { Viewer } from './viewer.type';

export interface UpdateUserRolesConnectionPayload {
  changedUserRoles?: UserRoles | null; /* The mutated UserRoles. */
  changedEdge?: UserRolesEdge | null; /* An edge containing the mutated UserRoles. Use this to update your client side cache. */
  viewer?: Viewer | null; /* A view port into your application. */
  clientMutationId?: string | null; /* An opaque string used by frontend frameworks like relay to track requests and responses. */
}

