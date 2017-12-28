import { MetricAggregationResult } from './metricaggregationresult.type';
import { ResolverLogNumericField } from './resolverlognumericfield.enum';
import { ResolverLogField } from './resolverlogfield.enum';
import { StatsAggregationResult } from './statsaggregationresult.type';
import { ResolverLogBucketAggregation } from './resolverlogbucketaggregation.type';
import { ResolverLogDateTimeField } from './resolverlogdatetimefield.enum';
import { DateRangeInput } from './daterangeinput.input-type';
import { ResolverLogStringField } from './resolverlogstringfield.enum';
import { ResolverLogFilterAggregation } from './resolverlogfilteraggregation.type';
import { ResolverLogTermFilter } from './resolverlogtermfilter.input-type';

export interface ResolverLogAggregationSet {
  avg?: MetricAggregationResult | null; 
  cardinality?: MetricAggregationResult | null; 
  max?: MetricAggregationResult | null; 
  min?: MetricAggregationResult | null; 
  percentiles?: MetricAggregationResult | null; 
  stats?: StatsAggregationResult | null; 
  sum?: MetricAggregationResult | null; 
  value_count?: MetricAggregationResult | null; 
  date_range?: ResolverLogBucketAggregation | null; 
  date_histogram?: ResolverLogBucketAggregation | null; 
  terms?: ResolverLogBucketAggregation | null; 
  filter?: ResolverLogFilterAggregation | null; 
}

export interface AvgResolverLogAggregationSetArgs {
  field?: ResolverLogNumericField | null; 
}
export interface CardinalityResolverLogAggregationSetArgs {
  field?: ResolverLogField | null; 
  precision_threshhold?: number | null; 
}
export interface MaxResolverLogAggregationSetArgs {
  field?: ResolverLogNumericField | null; 
}
export interface MinResolverLogAggregationSetArgs {
  field?: ResolverLogNumericField | null; 
}
export interface PercentilesResolverLogAggregationSetArgs {
  field?: ResolverLogNumericField | null; 
}
export interface StatsResolverLogAggregationSetArgs {
  field?: ResolverLogNumericField | null; 
}
export interface SumResolverLogAggregationSetArgs {
  field?: ResolverLogNumericField | null; 
}
export interface ValueCountResolverLogAggregationSetArgs {
  field?: ResolverLogNumericField | null; 
}
export interface DateRangeResolverLogAggregationSetArgs {
  field?: ResolverLogDateTimeField | null; 
  format?: string | null; 
  ranges: DateRangeInput[]; 
}
export interface DateHistogramResolverLogAggregationSetArgs {
  field?: ResolverLogDateTimeField | null; 
  interval?: string | null; 
  format?: string | null; 
  time_zone?: string | null; 
  missing?: string | null; 
}
export interface TermsResolverLogAggregationSetArgs {
  field?: ResolverLogStringField | null; 
  size?: number | null; 
  missing?: string | null; 
}
export interface FilterResolverLogAggregationSetArgs {
  term?: ResolverLogTermFilter | null; 
}
