import { Schema } from './schema.type';
import { Viewer } from './viewer.type';

export interface MigrateSchemaPayload {
  changedSchema?: Schema | null; /* The mutated Schema. */
  viewer?: Viewer | null; /* A view port into your application. */
  clientMutationId?: string | null; /* An opaque string used by frontend frameworks like relay to track requests and responses. */
}

