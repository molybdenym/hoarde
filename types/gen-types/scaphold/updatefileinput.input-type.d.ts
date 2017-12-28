
export interface UpdateFileInput {
  id: string; 
  name?: string | null; 
  blobFieldName?: string | null; 
  clientMutationId?: string | null; /* An opaque string used by frontend frameworks like relay to track requests and responses. */
}

