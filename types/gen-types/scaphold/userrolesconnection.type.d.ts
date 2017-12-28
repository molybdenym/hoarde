import { UserRolesEdge } from './userrolesedge.type';
import { PageInfo } from './pageinfo.type';
import { RoleAggregations } from './roleaggregations.type';
/* An edge wraps a node and a cursor. Edges are returned byConnection types as a standard way to paginate through connection values. */
export interface UserRolesConnection {
  edges?: UserRolesEdge[] | null; /* The set of edges in this page. */
  pageInfo: PageInfo; /* Metadata on the current page of data. */
  aggregations?: RoleAggregations | null; /* Aggregation operators for the Role type. */
}

