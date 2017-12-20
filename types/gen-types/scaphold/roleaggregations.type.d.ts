import { RoleAggregationsMin } from './roleaggregationsmin.type';
import { RoleAggregationsMax } from './roleaggregationsmax.type';

export interface RoleAggregations {
  count?: number | null; /* Returns the number of objects in the connection. */
  min?: RoleAggregationsMin | null; /* The minimum value for the field */
  max?: RoleAggregationsMax | null; /* The maximum value for the field */
}

