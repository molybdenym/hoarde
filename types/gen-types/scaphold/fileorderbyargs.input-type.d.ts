import { FileOrderByField } from './fileorderbyfield.enum';
import { OrderByDirection } from './orderbydirection.enum';

export interface FileOrderByArgs {
  field?: FileOrderByField | null; 
  direction?: OrderByDirection | null; 
}

