import { UserRolesEdgeWhereArgs } from './userrolesedgewhereargs.input-type';
import { RoleWhereArgs } from './rolewhereargs.input-type';
/* Select objects by filtering on objects in a connection */
export interface UserRolesWhereArgs {
  edge?: UserRolesEdgeWhereArgs | null; /* Filter on values on the connection edge. E.G. Get all users with readonly membership to a role. */
  node?: RoleWhereArgs | null; /* Filter on values in the target type. E.G. Get all users that are a member of the Executives role */
}

