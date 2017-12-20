import { DateTime } from './datetime.scalar';
import { User } from './user.type';
import { Ability } from './ability.type';
import { Node } from './node.interface';
import { Timestamped } from './timestamped.interface';
/* The PC type */
export interface PC extends Node,Timestamped {
  id: string; /* A globally unique ID. */
  modifiedAt: DateTime; /* When paired with the Node interface, this is an automatically managedtimestamp that is set whenever an object is mutated. */
  player?: User | null; /* The reverse field of &#x27;playerCharacters&#x27; in M:1 connectionwith type &#x27;PC&#x27;. */
  createdAt: DateTime; /* When paired with the Node interface, this is an automatically managedtimestamp that is set when an object is first created. */
  abilities?: Ability[] | null; 
}

