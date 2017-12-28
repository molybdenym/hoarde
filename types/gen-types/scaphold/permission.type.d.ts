import { PermissionScopeEnum } from './permissionscopeenum.enum';
import { Field } from './field.type';
import { Role } from './role.type';
import { DateTime } from './datetime.scalar';
import { Node } from './node.interface';
/* A scaphold type permission. */
export interface Permission extends Node {
  id: string; 
  scope: PermissionScopeEnum; 
  userFields?: Field[] | null; 
  protectedFields?: Field[] | null; 
  roles?: Role[] | null; 
  enabled?: boolean | null; 
  create?: boolean | null; 
  read?: boolean | null; 
  update?: boolean | null; 
  delete?: boolean | null; 
  createdAt?: DateTime | null; 
  modifiedAt?: DateTime | null; 
}

