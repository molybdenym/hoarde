import { AccessLevel } from './accesslevel.enum';

export interface AddToUserRolesConnectionInput {
  roleId: string; 
  userId: string; 
  accessLevel: AccessLevel; 
  clientMutationId?: string | null; /* An opaque string used by frontend frameworks like relay to track requests and responses. */
}

