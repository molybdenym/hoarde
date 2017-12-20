
export interface ResolverLogTermFilter {
  fieldName?: string | null; 
  operation?: string | null; 
  path?: string | null; 
  status?: string | null; 
  error?: string | null; 
  parentType?: string | null; 
  returnType?: string | null; 
  parsedReturnType?: string | null; 
  totalDuration?: number | null; 
  count?: number | null; 
  minDuration?: number | null; 
  maxDuration?: number | null; 
  avgDuration?: number | null; 
}

