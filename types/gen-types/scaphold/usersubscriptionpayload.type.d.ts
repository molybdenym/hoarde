import { UserMutationEvent } from './usermutationevent.enum';
import { User } from './user.type';
import { UserEdge } from './useredge.type';
/* A payload wrapper for mutation operations. */
export interface UserSubscriptionPayload {
  mutation?: UserMutationEvent | null; /* The type of mutation operation that triggered this subscription. */
  value?: User | null; /* The object that was just mutated. */
  edge?: UserEdge | null; 
}

