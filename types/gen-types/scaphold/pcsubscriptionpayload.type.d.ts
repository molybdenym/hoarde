import { PcMutationEvent } from './pcmutationevent.enum';
import { PC } from './pc.type';
import { PcEdge } from './pcedge.type';
/* A payload wrapper for mutation operations. */
export interface PcSubscriptionPayload {
  mutation?: PcMutationEvent | null; /* The type of mutation operation that triggered this subscription. */
  value?: PC | null; /* The object that was just mutated. */
  edge?: PcEdge | null; 
}

