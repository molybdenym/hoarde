import { RoleMutationEvent } from './rolemutationevent.enum';
import { Role } from './role.type';
import { RoleEdge } from './roleedge.type';
/* A payload wrapper for mutation operations. */
export interface RoleSubscriptionPayload {
  mutation?: RoleMutationEvent | null; /* The type of mutation operation that triggered this subscription. */
  value?: Role | null; /* The object that was just mutated. */
  edge?: RoleEdge | null; 
}

