import { FileMutationEvent } from './filemutationevent.enum';
import { File } from './file.type';
import { FileEdge } from './fileedge.type';
/* A payload wrapper for mutation operations. */
export interface FileSubscriptionPayload {
  mutation?: FileMutationEvent | null; /* The type of mutation operation that triggered this subscription. */
  value?: File | null; /* The object that was just mutated. */
  edge?: FileEdge | null; 
}

