
export interface UpdateRoleInput {
  name?: string | null; 
  id: string; 
  clientMutationId?: string | null; /* An opaque string used by frontend frameworks like relay to track requests and responses. */
}

