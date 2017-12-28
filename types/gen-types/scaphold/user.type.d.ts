import { UserRolesConnection } from './userrolesconnection.type';
import { RoleWhereArgs } from './rolewhereargs.input-type';
import { RoleOrderByArgs } from './roleorderbyargs.input-type';
import { DateTime } from './datetime.scalar';
import { PcConnection } from './pcconnection.type';
import { PcWhereArgs } from './pcwhereargs.input-type';
import { PcOrderByArgs } from './pcorderbyargs.input-type';
import { Node } from './node.interface';
import { Timestamped } from './timestamped.interface';
/* The User type */
export interface User extends Node,Timestamped {
  roles?: UserRolesConnection | null; /* A list of roles in which this user is enrolled */
  modifiedAt: DateTime; /* When paired with the Node interface, this is an automatically managedtimestamp that is set whenever an object is mutated. */
  id: string; /* A globally unique ID. */
  createdAt: DateTime; /* When paired with the Node interface, this is an automatically managedtimestamp that is set when an object is first created. */
  lastLogin: DateTime; /* An automatically managed timestamp that is set every time a user logs in. */
  username: string; /* The user&#x27;s username. */
  playerCharacters?: PcConnection | null; 
}

export interface RolesUserArgs {
  where?: RoleWhereArgs | null; 
  orderBy?: RoleOrderByArgs[] | null; 
  first?: number | null; 
  after?: string | null; 
  last?: number | null; 
  before?: string | null; 
}
export interface PlayerCharactersUserArgs {
  where?: PcWhereArgs | null; 
  orderBy?: PcOrderByArgs[] | null; 
  first?: number | null; 
  after?: string | null; 
  last?: number | null; 
  before?: string | null; 
}
