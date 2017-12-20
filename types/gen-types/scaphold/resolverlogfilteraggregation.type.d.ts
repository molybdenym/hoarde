import { ResolverLogAggregationSet } from './resolverlogaggregationset.type';

export interface ResolverLogFilterAggregation {
  doc_count?: number | null; 
  aggregations?: ResolverLogAggregationSet | null; 
}

