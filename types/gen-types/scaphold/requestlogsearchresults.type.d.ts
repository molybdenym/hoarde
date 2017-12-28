import { RequestLogEdge } from './requestlogedge.type';
import { RequestLogAggregationSet } from './requestlogaggregationset.type';

export interface RequestLogSearchResults {
  edges?: RequestLogEdge[] | null; /* Returns a set of documents satisfying the query string and pagination arguments. The &#x27;q&#x27; querystring accepts any elasticsearch query string. See (https://www.elastic.co/guide/en/elasticsearch/reference/current/ query-dsl-query-string-query.html#query-string-syntax) for mre details. */
  aggregations?: RequestLogAggregationSet | null; /* Run complex aggregations on your data. */
  took?: number | null; 
}

export interface EdgesRequestLogSearchResultsArgs {
  q?: string | null; 
  first?: number | null; 
  after?: string | null; 
}
