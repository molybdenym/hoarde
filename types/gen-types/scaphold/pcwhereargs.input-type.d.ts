import { PcIdWhereArgs } from './pcidwhereargs.input-type';
import { PcModifiedAtWhereArgs } from './pcmodifiedatwhereargs.input-type';
import { UserWhereArgs } from './userwhereargs.input-type';
import { PcCreatedAtWhereArgs } from './pccreatedatwhereargs.input-type';
import { PcPlayerIdWhereArgs } from './pcplayeridwhereargs.input-type';
/* Where filter arguments for the PC type */
export interface PcWhereArgs {
  id?: PcIdWhereArgs | null; /* Filter results for on the id field. */
  modifiedAt?: PcModifiedAtWhereArgs | null; /* Filter results for on the modifiedAt field. */
  player?: UserWhereArgs | null; /* Filter results based on a related object via the player connection */
  createdAt?: PcCreatedAtWhereArgs | null; /* Filter results for on the createdAt field. */
  playerId?: PcPlayerIdWhereArgs | null; /* Filter results for on the playerId field. */
  OR?: PcWhereArgs[] | null; /* Combine mutiple where expressions using the OR operator. */
  AND?: PcWhereArgs[] | null; /* Combine mutiple where expressions using the AND operator. */
}

