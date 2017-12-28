import { PcAggregationsMin } from './pcaggregationsmin.type';
import { PcAggregationsMax } from './pcaggregationsmax.type';

export interface PcAggregations {
  count?: number | null; /* Returns the number of objects in the connection. */
  min?: PcAggregationsMin | null; /* The minimum value for the field */
  max?: PcAggregationsMax | null; /* The maximum value for the field */
}

