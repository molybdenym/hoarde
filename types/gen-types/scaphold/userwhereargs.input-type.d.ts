import { UserRolesWhereArgs } from './userroleswhereargs.input-type';
import { UserPasswordWhereArgs } from './userpasswordwhereargs.input-type';
import { UserModifiedAtWhereArgs } from './usermodifiedatwhereargs.input-type';
import { UserIdWhereArgs } from './useridwhereargs.input-type';
import { UserCreatedAtWhereArgs } from './usercreatedatwhereargs.input-type';
import { UserLastLoginWhereArgs } from './userlastloginwhereargs.input-type';
import { UserUsernameWhereArgs } from './userusernamewhereargs.input-type';
import { PcWhereArgs } from './pcwhereargs.input-type';
/* Where filter arguments for the User type */
export interface UserWhereArgs {
  roles?: UserRolesWhereArgs | null; /* Filter results based on a related object via the roles connection */
  password?: UserPasswordWhereArgs | null; /* Filter results for on the password field. */
  modifiedAt?: UserModifiedAtWhereArgs | null; /* Filter results for on the modifiedAt field. */
  id?: UserIdWhereArgs | null; /* Filter results for on the id field. */
  createdAt?: UserCreatedAtWhereArgs | null; /* Filter results for on the createdAt field. */
  lastLogin?: UserLastLoginWhereArgs | null; /* Filter results for on the lastLogin field. */
  username?: UserUsernameWhereArgs | null; /* Filter results for on the username field. */
  playerCharacters?: PcWhereArgs | null; /* Filter results based on a related object via the playerCharacters connection */
  OR?: UserWhereArgs[] | null; /* Combine mutiple where expressions using the OR operator. */
  AND?: UserWhereArgs[] | null; /* Combine mutiple where expressions using the AND operator. */
}

