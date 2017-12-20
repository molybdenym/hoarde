import { UserPasswordSubscriptionFilters } from './userpasswordsubscriptionfilters.input-type';
import { UserModifiedAtSubscriptionFilters } from './usermodifiedatsubscriptionfilters.input-type';
import { UserIdSubscriptionFilters } from './useridsubscriptionfilters.input-type';
import { UserCreatedAtSubscriptionFilters } from './usercreatedatsubscriptionfilters.input-type';
import { UserLastLoginSubscriptionFilters } from './userlastloginsubscriptionfilters.input-type';
import { UserUsernameSubscriptionFilters } from './userusernamesubscriptionfilters.input-type';
/* Subscription filter arguments for the User type */
export interface UserSubscriptionFilter {
  password?: UserPasswordSubscriptionFilters | null; /* Filter results for on the password field. */
  modifiedAt?: UserModifiedAtSubscriptionFilters | null; /* Filter results for on the modifiedAt field. */
  id?: UserIdSubscriptionFilters | null; /* Filter results for on the id field. */
  createdAt?: UserCreatedAtSubscriptionFilters | null; /* Filter results for on the createdAt field. */
  lastLogin?: UserLastLoginSubscriptionFilters | null; /* Filter results for on the lastLogin field. */
  username?: UserUsernameSubscriptionFilters | null; /* Filter results for on the username field. */
}

