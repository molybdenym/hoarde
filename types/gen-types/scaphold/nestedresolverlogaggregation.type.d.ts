import { ResolverLogAggregationSet } from './resolverlogaggregationset.type';

export interface NestedResolverLogAggregation {
  doc_count?: number | null; 
  aggregations?: ResolverLogAggregationSet | null; 
}

