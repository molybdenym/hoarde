import { PcEdge } from './pcedge.type';
import { PageInfo } from './pageinfo.type';
import { PcAggregations } from './pcaggregations.type';
/* An edge wraps a node and a cursor. Edges are returned byConnection types as a standard way to paginate through connection values. */
export interface PcConnection {
  edges?: PcEdge[] | null; /* The set of edges in this page. */
  pageInfo: PageInfo; /* Metadata on the current page of data. */
  aggregations?: PcAggregations | null; /* Aggregation operators for the PC type. */
}

