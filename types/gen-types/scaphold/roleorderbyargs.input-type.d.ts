import { RoleOrderByField } from './roleorderbyfield.enum';
import { OrderByDirection } from './orderbydirection.enum';

export interface RoleOrderByArgs {
  field?: RoleOrderByField | null; 
  direction?: OrderByDirection | null; 
}

