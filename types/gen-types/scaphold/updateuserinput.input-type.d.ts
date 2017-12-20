import { Secret } from './secret.scalar';

export interface UpdateUserInput {
  password?: Secret | null; 
  id: string; 
  username?: string | null; 
  clientMutationId?: string | null; /* An opaque string used by frontend frameworks like relay to track requests and responses. */
}

