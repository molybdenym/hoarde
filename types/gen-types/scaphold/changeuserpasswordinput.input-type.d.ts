
export interface ChangeUserPasswordInput {
  id: string; 
  oldPassword: string; 
  newPassword: string; 
  clientMutationId?: string | null; /* An opaque string used by frontend frameworks like relay to track requests and responses. */
}

