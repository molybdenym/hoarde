import { AnyObject } from './anyobject.scalar';
import { Node } from './node.interface';
/* A Scaphold User. */
export interface Field extends Node {
  id: string; /* A global id */
  name: string; 
  description?: string | null; 
  columnName?: string | null; 
  nonNull?: boolean | null; 
  unique?: boolean | null; 
  indexed?: boolean | null; 
  type?: string | null; 
  ofType?: string | null; 
  ofTypeNonNull?: boolean | null; 
  reverseName?: string | null; 
  defaultValue?: AnyObject | null; 
  isEditable?: boolean | null; 
  through?: string | null; 
  position?: number | null; 
}

