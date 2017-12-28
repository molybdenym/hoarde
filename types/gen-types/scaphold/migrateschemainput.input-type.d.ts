import { MigrateTypeInput } from './migratetypeinput.input-type';

export interface MigrateSchemaInput {
  id: string; 
  name?: string | null; 
  description?: string | null; 
  types?: MigrateTypeInput[] | null; 
  clientMutationId?: string | null; /* An opaque string used by frontend frameworks like relay to track requests and responses. */
}

