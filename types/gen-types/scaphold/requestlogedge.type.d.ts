import { RequestLog } from './requestlog.type';
/* An edge wraps a node and a cursor. Edges are returned byConnection types as a standard way to paginate through connection values. */
export interface RequestLogEdge {
  node: RequestLog; /* The node value for the edge. */
  cursor: string; /* An opaque cursor pointing to an object in a connection.Used by the &#x27;after&#x27; and &#x27;before&#x27; pagination arguments. */
}

