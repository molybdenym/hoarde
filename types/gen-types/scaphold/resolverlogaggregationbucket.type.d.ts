import { AnyObject } from './anyobject.scalar';
import { ResolverLogAggregationSet } from './resolverlogaggregationset.type';

export interface ResolverLogAggregationBucket {
  doc_count?: number | null; 
  key?: AnyObject | null; 
  key_as_string?: string | null; 
  aggregations?: ResolverLogAggregationSet | null; 
}

