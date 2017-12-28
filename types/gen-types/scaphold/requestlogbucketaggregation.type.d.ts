import { RequestLogAggregationBucket } from './requestlogaggregationbucket.type';

export interface RequestLogBucketAggregation {
  buckets?: RequestLogAggregationBucket[] | null; 
}

