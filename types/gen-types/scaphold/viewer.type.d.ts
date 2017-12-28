import { RoleConnection } from './roleconnection.type';
import { RoleWhereArgs } from './rolewhereargs.input-type';
import { RoleOrderByArgs } from './roleorderbyargs.input-type';
import { FileConnection } from './fileconnection.type';
import { FileWhereArgs } from './filewhereargs.input-type';
import { FileOrderByArgs } from './fileorderbyargs.input-type';
import { PcConnection } from './pcconnection.type';
import { PcWhereArgs } from './pcwhereargs.input-type';
import { PcOrderByArgs } from './pcorderbyargs.input-type';
import { UserConnection } from './userconnection.type';
import { UserWhereArgs } from './userwhereargs.input-type';
import { UserOrderByArgs } from './userorderbyargs.input-type';
import { User } from './user.type';
import { Node } from './node.interface';

export interface Viewer extends Node {
  id: string; 
  allRoles?: RoleConnection | null; /* Sift through all objects of type &#x27;Role&#x27;. */
  allFiles?: FileConnection | null; /* Sift through all objects of type &#x27;File&#x27;. */
  allPcs?: PcConnection | null; /* Sift through all objects of type &#x27;PC&#x27;. */
  allUsers?: UserConnection | null; /* Sift through all objects of type &#x27;User&#x27;. */
  user?: User | null; /* Returns the currently logged in user and is also the entry point for queries that leverage RELATION scoped permissions. */
}

export interface AllRolesViewerArgs {
  where?: RoleWhereArgs | null; 
  orderBy?: RoleOrderByArgs[] | null; 
  first?: number | null; 
  after?: string | null; 
  last?: number | null; 
  before?: string | null; 
}
export interface AllFilesViewerArgs {
  where?: FileWhereArgs | null; 
  orderBy?: FileOrderByArgs[] | null; 
  first?: number | null; 
  after?: string | null; 
  last?: number | null; 
  before?: string | null; 
}
export interface AllPcsViewerArgs {
  where?: PcWhereArgs | null; 
  orderBy?: PcOrderByArgs[] | null; 
  first?: number | null; 
  after?: string | null; 
  last?: number | null; 
  before?: string | null; 
}
export interface AllUsersViewerArgs {
  where?: UserWhereArgs | null; 
  orderBy?: UserOrderByArgs[] | null; 
  first?: number | null; 
  after?: string | null; 
  last?: number | null; 
  before?: string | null; 
}
