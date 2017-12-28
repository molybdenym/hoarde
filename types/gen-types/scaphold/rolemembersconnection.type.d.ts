import { RoleMembersEdge } from './rolemembersedge.type';
import { PageInfo } from './pageinfo.type';
import { UserAggregations } from './useraggregations.type';
/* An edge wraps a node and a cursor. Edges are returned byConnection types as a standard way to paginate through connection values. */
export interface RoleMembersConnection {
  edges?: RoleMembersEdge[] | null; /* The set of edges in this page. */
  pageInfo: PageInfo; /* Metadata on the current page of data. */
  aggregations?: UserAggregations | null; /* Aggregation operators for the User type. */
}

