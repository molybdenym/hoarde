import { AccessLevel } from './accesslevel.enum';
import { DateTime } from './datetime.scalar';
import { Role } from './role.type';
import { User } from './user.type';
import { Timestamped } from './timestamped.interface';
/* The UserRoles type */
export interface UserRoles extends Timestamped {
  accessLevel: AccessLevel; /* The access level for this user enrollment. */
  modifiedAt: DateTime; /* When paired with the Node interface, this is an automatically managedtimestamp that is set whenever an object is mutated. */
  createdAt: DateTime; /* When paired with the Node interface, this is an automatically managedtimestamp that is set when an object is first created. */
  role?: Role | null; 
  user?: User | null; 
}

