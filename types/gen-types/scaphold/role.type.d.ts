import { RoleMembersConnection } from './rolemembersconnection.type';
import { UserWhereArgs } from './userwhereargs.input-type';
import { UserOrderByArgs } from './userorderbyargs.input-type';
import { DateTime } from './datetime.scalar';
import { Node } from './node.interface';
import { Timestamped } from './timestamped.interface';
/* The Role type */
export interface Role extends Node,Timestamped {
  members?: RoleMembersConnection | null; /* The user&#x60;s belonging to this role */
  name: string; /* The name of the role. */
  id: string; /* A globally unique ID. */
  createdAt: DateTime; /* When paired with the Node interface, this is an automatically managedtimestamp that is set when an object is first created. */
  modifiedAt: DateTime; /* When paired with the Node interface, this is an automatically managedtimestamp that is set whenever an object is mutated. */
}

export interface MembersRoleArgs {
  where?: UserWhereArgs | null; 
  orderBy?: UserOrderByArgs[] | null; 
  first?: number | null; 
  after?: string | null; 
  last?: number | null; 
  before?: string | null; 
}
