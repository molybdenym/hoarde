import { DateTime } from './datetime.scalar';

export interface UserAggregationsMax {
  modifiedAt?: DateTime | null; 
  createdAt?: DateTime | null; 
  lastLogin?: DateTime | null; 
  username?: string | null; 
}

