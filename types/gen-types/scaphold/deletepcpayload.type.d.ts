import { PC } from './pc.type';
import { PcEdge } from './pcedge.type';
import { Viewer } from './viewer.type';

export interface DeletePcPayload {
  changedPc?: PC | null; /* The mutated PC. */
  changedEdge?: PcEdge | null; /* An edge containing the mutated PC. Use this to update your client side cache. */
  viewer?: Viewer | null; /* A view port into your application. */
  clientMutationId?: string | null; /* An opaque string used by frontend frameworks like relay to track requests and responses. */
}

