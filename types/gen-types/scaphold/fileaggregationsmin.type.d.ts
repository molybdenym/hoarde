import { DateTime } from './datetime.scalar';

export interface FileAggregationsMin {
  createdAt?: DateTime | null; 
  modifiedAt?: DateTime | null; 
  blobMimeType?: string | null; 
  blobUrl?: string | null; 
  name?: string | null; 
}

