import { Secret } from './secret.scalar';

export interface CreateUserInput {
  password: Secret; 
  username: string; 
  clientMutationId?: string | null; 
}

