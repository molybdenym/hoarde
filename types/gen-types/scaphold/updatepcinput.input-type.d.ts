import { AbilityInput } from './abilityinput.input-type';

export interface UpdatePcInput {
  id: string; 
  playerId?: string | null; 
  abilities?: AbilityInput[] | null; 
  clientMutationId?: string | null; /* An opaque string used by frontend frameworks like relay to track requests and responses. */
}

