import { PermissionScopeEnum } from './permissionscopeenum.enum';
import { MigrateFieldInput } from './migratefieldinput.input-type';
import { MigrateRoleInput } from './migrateroleinput.input-type';
/* A scaphold type permission. */
export interface MigratePermissionInput {
  id?: string | null; 
  scope: PermissionScopeEnum; 
  userFields?: MigrateFieldInput[] | null; 
  protectedFields?: MigrateFieldInput[] | null; 
  roles?: MigrateRoleInput[] | null; 
  create?: boolean | null; 
  read?: boolean | null; 
  update?: boolean | null; 
  delete?: boolean | null; 
  enabled?: boolean | null; 
}

