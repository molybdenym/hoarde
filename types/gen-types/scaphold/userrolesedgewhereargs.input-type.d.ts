import { UserRolesAccessLevelWhereArgs } from './userrolesaccesslevelwhereargs.input-type';
import { UserRolesModifiedAtWhereArgs } from './userrolesmodifiedatwhereargs.input-type';
import { UserRolesCreatedAtWhereArgs } from './userrolescreatedatwhereargs.input-type';
/* Where filter arguments for the UserRoles type */
export interface UserRolesEdgeWhereArgs {
  accessLevel?: UserRolesAccessLevelWhereArgs | null; /* Filter results based on values in the bridge model. */
  modifiedAt?: UserRolesModifiedAtWhereArgs | null; /* Filter results based on values in the bridge model. */
  createdAt?: UserRolesCreatedAtWhereArgs | null; /* Filter results based on values in the bridge model. */
}

