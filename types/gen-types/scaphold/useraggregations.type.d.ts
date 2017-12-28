import { UserAggregationsMin } from './useraggregationsmin.type';
import { UserAggregationsMax } from './useraggregationsmax.type';

export interface UserAggregations {
  count?: number | null; /* Returns the number of objects in the connection. */
  min?: UserAggregationsMin | null; /* The minimum value for the field */
  max?: UserAggregationsMax | null; /* The maximum value for the field */
}

