import { AnyObject } from './anyobject.scalar';
import { RequestLogAggregationSet } from './requestlogaggregationset.type';

export interface RequestLogAggregationBucket {
  doc_count?: number | null; 
  key?: AnyObject | null; 
  key_as_string?: string | null; 
  aggregations?: RequestLogAggregationSet | null; 
}

