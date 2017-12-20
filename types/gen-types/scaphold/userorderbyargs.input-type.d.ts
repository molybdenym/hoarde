import { UserOrderByField } from './userorderbyfield.enum';
import { OrderByDirection } from './orderbydirection.enum';

export interface UserOrderByArgs {
  field?: UserOrderByField | null; 
  direction?: OrderByDirection | null; 
}

