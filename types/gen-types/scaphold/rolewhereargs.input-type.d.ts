import { RoleMembersWhereArgs } from './rolememberswhereargs.input-type';
import { RoleNameWhereArgs } from './rolenamewhereargs.input-type';
import { RoleIdWhereArgs } from './roleidwhereargs.input-type';
import { RoleCreatedAtWhereArgs } from './rolecreatedatwhereargs.input-type';
import { RoleModifiedAtWhereArgs } from './rolemodifiedatwhereargs.input-type';
/* Where filter arguments for the Role type */
export interface RoleWhereArgs {
  members?: RoleMembersWhereArgs | null; /* Filter results based on a related object via the members connection */
  name?: RoleNameWhereArgs | null; /* Filter results for on the name field. */
  id?: RoleIdWhereArgs | null; /* Filter results for on the id field. */
  createdAt?: RoleCreatedAtWhereArgs | null; /* Filter results for on the createdAt field. */
  modifiedAt?: RoleModifiedAtWhereArgs | null; /* Filter results for on the modifiedAt field. */
  OR?: RoleWhereArgs[] | null; /* Combine mutiple where expressions using the OR operator. */
  AND?: RoleWhereArgs[] | null; /* Combine mutiple where expressions using the AND operator. */
}

