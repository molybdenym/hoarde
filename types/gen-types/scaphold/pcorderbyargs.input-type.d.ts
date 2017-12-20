import { PcOrderByField } from './pcorderbyfield.enum';
import { OrderByDirection } from './orderbydirection.enum';

export interface PcOrderByArgs {
  field?: PcOrderByField | null; 
  direction?: OrderByDirection | null; 
}

