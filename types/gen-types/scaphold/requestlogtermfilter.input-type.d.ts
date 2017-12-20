
export interface RequestLogTermFilter {
  appId?: string | null; 
  userId?: string | null; 
  username?: string | null; 
  status?: string | null; 
  logType?: string | null; 
  requestMethod?: string | null; 
  originalUrl?: string | null; 
  errors?: string | null; 
  isAdmin?: boolean | null; 
  isBillable?: boolean | null; 
  duration?: number | null; 
  responseSizeBytes?: number | null; 
}

