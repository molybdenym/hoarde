import { PcIdSubscriptionFilters } from './pcidsubscriptionfilters.input-type';
import { PcModifiedAtSubscriptionFilters } from './pcmodifiedatsubscriptionfilters.input-type';
import { PcCreatedAtSubscriptionFilters } from './pccreatedatsubscriptionfilters.input-type';
import { PcPlayerIdSubscriptionFilters } from './pcplayeridsubscriptionfilters.input-type';
/* Subscription filter arguments for the PC type */
export interface PcSubscriptionFilter {
  id?: PcIdSubscriptionFilters | null; /* Filter results for on the id field. */
  modifiedAt?: PcModifiedAtSubscriptionFilters | null; /* Filter results for on the modifiedAt field. */
  createdAt?: PcCreatedAtSubscriptionFilters | null; /* Filter results for on the createdAt field. */
  playerId?: PcPlayerIdSubscriptionFilters | null; /* Filter results for on the playerId field. */
}

