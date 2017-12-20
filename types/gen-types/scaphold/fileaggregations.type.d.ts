import { FileAggregationsMin } from './fileaggregationsmin.type';
import { FileAggregationsMax } from './fileaggregationsmax.type';

export interface FileAggregations {
  count?: number | null; /* Returns the number of objects in the connection. */
  min?: FileAggregationsMin | null; /* The minimum value for the field */
  max?: FileAggregationsMax | null; /* The maximum value for the field */
}

