import { File } from './file.type';
import { FileEdge } from './fileedge.type';
import { Viewer } from './viewer.type';

export interface CreateFilePayload {
  changedFile?: File | null; /* The mutated File. */
  changedEdge?: FileEdge | null; /* An edge containing the mutated File. Use this to update your client side cache. */
  viewer?: Viewer | null; /* A view port into your application. */
  clientMutationId?: string | null; /* An opaque string used by frontend frameworks like relay to track requests and responses. */
}

