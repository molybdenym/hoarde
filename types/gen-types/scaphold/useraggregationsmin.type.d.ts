import { DateTime } from './datetime.scalar';

export interface UserAggregationsMin {
  modifiedAt?: DateTime | null; 
  createdAt?: DateTime | null; 
  lastLogin?: DateTime | null; 
  username?: string | null; 
}

