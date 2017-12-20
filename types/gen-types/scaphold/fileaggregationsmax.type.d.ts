import { DateTime } from './datetime.scalar';

export interface FileAggregationsMax {
  createdAt?: DateTime | null; 
  modifiedAt?: DateTime | null; 
  blobMimeType?: string | null; 
  blobUrl?: string | null; 
  name?: string | null; 
}

