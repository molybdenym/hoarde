import { Type } from './type.type';
import { DateTime } from './datetime.scalar';
import { Node } from './node.interface';
/* A Scaphold Schema. */
export interface Schema extends Node {
  id: string; /* A global id */
  name: string; 
  description?: string | null; 
  types?: Type[] | null; 
  createdAt?: DateTime | null; 
  modifiedAt?: DateTime | null; 
}

