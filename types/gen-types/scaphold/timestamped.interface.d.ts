import { DateTime } from './datetime.scalar';

export interface Timestamped {
  createdAt: DateTime; 
  modifiedAt: DateTime; 
}

