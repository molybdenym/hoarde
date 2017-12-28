import { RoleNameSubscriptionFilters } from './rolenamesubscriptionfilters.input-type';
import { RoleIdSubscriptionFilters } from './roleidsubscriptionfilters.input-type';
import { RoleCreatedAtSubscriptionFilters } from './rolecreatedatsubscriptionfilters.input-type';
import { RoleModifiedAtSubscriptionFilters } from './rolemodifiedatsubscriptionfilters.input-type';
/* Subscription filter arguments for the Role type */
export interface RoleSubscriptionFilter {
  name?: RoleNameSubscriptionFilters | null; /* Filter results for on the name field. */
  id?: RoleIdSubscriptionFilters | null; /* Filter results for on the id field. */
  createdAt?: RoleCreatedAtSubscriptionFilters | null; /* Filter results for on the createdAt field. */
  modifiedAt?: RoleModifiedAtSubscriptionFilters | null; /* Filter results for on the modifiedAt field. */
}

