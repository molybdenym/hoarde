import { TypeKind } from './typekind.enum';
import { Field } from './field.type';
import { Permission } from './permission.type';
import { DateTime } from './datetime.scalar';
import { Node } from './node.interface';
/* A Scaphold User. */
export interface Type extends Node {
  id: string; /* A global id */
  name: string; 
  description?: string | null; 
  kind?: TypeKind | null; 
  interfaces?: string[] | null; 
  fields?: Field[] | null; 
  permissions?: Permission[] | null; 
  values?: string[] | null; 
  isBridge?: boolean | null; 
  position?: number | null; 
  isEditable?: boolean | null; 
  isDeletable?: boolean | null; 
  isExtendable?: boolean | null; 
  createdAt?: DateTime | null; 
  modifiedAt?: DateTime | null; 
}

