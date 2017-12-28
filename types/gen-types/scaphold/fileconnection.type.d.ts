import { FileEdge } from './fileedge.type';
import { PageInfo } from './pageinfo.type';
import { FileAggregations } from './fileaggregations.type';
/* An edge wraps a node and a cursor. Edges are returned byConnection types as a standard way to paginate through connection values. */
export interface FileConnection {
  edges?: FileEdge[] | null; /* The set of edges in this page. */
  pageInfo: PageInfo; /* Metadata on the current page of data. */
  aggregations?: FileAggregations | null; /* Aggregation operators for the File type. */
}

