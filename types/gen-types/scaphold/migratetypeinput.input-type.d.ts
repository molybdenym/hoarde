import { TypeKind } from './typekind.enum';
import { MigrateFieldInput } from './migratefieldinput.input-type';
import { MigratePermissionInput } from './migratepermissioninput.input-type';
/* A Scaphold User. */
export interface MigrateTypeInput {
  id?: string | null; /* A global id */
  name: string; 
  description?: string | null; 
  kind: TypeKind; 
  interfaces?: string[] | null; 
  fields?: MigrateFieldInput[] | null; 
  permissions?: MigratePermissionInput[] | null; 
  values?: string[] | null; 
  isBridge?: boolean | null; 
  position?: number | null; 
  isEditable?: boolean | null; 
  isDeletable?: boolean | null; 
  isExtendable?: boolean | null; 
}

