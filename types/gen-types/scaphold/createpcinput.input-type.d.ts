import { CreateUserInput } from './createuserinput.input-type';
import { AbilityInput } from './abilityinput.input-type';

export interface CreatePcInput {
  player?: CreateUserInput | null; 
  playerId?: string | null; 
  abilities?: AbilityInput[] | null; 
  clientMutationId?: string | null; 
}

