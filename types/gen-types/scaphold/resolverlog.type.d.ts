import { DateTime } from './datetime.scalar';

export interface ResolverLog {
  parentType?: string | null; 
  returnType?: string | null; 
  parsedReturnType?: string | null; 
  fieldName?: string | null; 
  operation?: string | null; 
  start?: DateTime | null; 
  minDuration?: number | null; 
  maxDuration?: number | null; 
  avgDuration?: number | null; 
  totalDuration?: number | null; 
  count?: number | null; 
  path?: string[] | null; 
  statuses?: string | null; 
  errors?: string | null; 
}

