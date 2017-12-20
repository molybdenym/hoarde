import { MetricAggregationResult } from './metricaggregationresult.type';
import { RequestLogNumericField } from './requestlognumericfield.enum';
import { RequestLogField } from './requestlogfield.enum';
import { StatsAggregationResult } from './statsaggregationresult.type';
import { RequestLogBucketAggregation } from './requestlogbucketaggregation.type';
import { RequestLogDateTimeField } from './requestlogdatetimefield.enum';
import { DateRangeInput } from './daterangeinput.input-type';
import { RequestLogStringField } from './requestlogstringfield.enum';
import { RequestLogFilterAggregation } from './requestlogfilteraggregation.type';
import { RequestLogTermFilter } from './requestlogtermfilter.input-type';
import { NestedResolverLogAggregation } from './nestedresolverlogaggregation.type';

export interface RequestLogAggregationSet {
  avg?: MetricAggregationResult | null; 
  cardinality?: MetricAggregationResult | null; 
  max?: MetricAggregationResult | null; 
  min?: MetricAggregationResult | null; 
  percentiles?: MetricAggregationResult | null; 
  stats?: StatsAggregationResult | null; 
  sum?: MetricAggregationResult | null; 
  value_count?: MetricAggregationResult | null; 
  date_range?: RequestLogBucketAggregation | null; 
  date_histogram?: RequestLogBucketAggregation | null; 
  terms?: RequestLogBucketAggregation | null; 
  filter?: RequestLogFilterAggregation | null; 
  resolvers?: NestedResolverLogAggregation | null; 
}

export interface AvgRequestLogAggregationSetArgs {
  field?: RequestLogNumericField | null; 
}
export interface CardinalityRequestLogAggregationSetArgs {
  field?: RequestLogField | null; 
  precision_threshhold?: number | null; 
}
export interface MaxRequestLogAggregationSetArgs {
  field?: RequestLogNumericField | null; 
}
export interface MinRequestLogAggregationSetArgs {
  field?: RequestLogNumericField | null; 
}
export interface PercentilesRequestLogAggregationSetArgs {
  field?: RequestLogNumericField | null; 
}
export interface StatsRequestLogAggregationSetArgs {
  field?: RequestLogNumericField | null; 
}
export interface SumRequestLogAggregationSetArgs {
  field?: RequestLogNumericField | null; 
}
export interface ValueCountRequestLogAggregationSetArgs {
  field?: RequestLogNumericField | null; 
}
export interface DateRangeRequestLogAggregationSetArgs {
  field?: RequestLogDateTimeField | null; 
  format?: string | null; 
  ranges: DateRangeInput[]; 
}
export interface DateHistogramRequestLogAggregationSetArgs {
  field?: RequestLogDateTimeField | null; 
  interval?: string | null; 
  format?: string | null; 
  time_zone?: string | null; 
  missing?: string | null; 
}
export interface TermsRequestLogAggregationSetArgs {
  field?: RequestLogStringField | null; 
  size?: number | null; 
  missing?: string | null; 
}
export interface FilterRequestLogAggregationSetArgs {
  term?: RequestLogTermFilter | null; 
}
