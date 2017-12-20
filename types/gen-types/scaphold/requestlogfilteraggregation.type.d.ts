import { RequestLogAggregationSet } from './requestlogaggregationset.type';

export interface RequestLogFilterAggregation {
  doc_count?: number | null; 
  aggregations?: RequestLogAggregationSet | null; 
}

