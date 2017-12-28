import { RoleSubscriptionPayload } from './rolesubscriptionpayload.type';
import { RoleSubscriptionFilter } from './rolesubscriptionfilter.input-type';
import { RoleMutationEvent } from './rolemutationevent.enum';
import { FileSubscriptionPayload } from './filesubscriptionpayload.type';
import { FileSubscriptionFilter } from './filesubscriptionfilter.input-type';
import { FileMutationEvent } from './filemutationevent.enum';
import { PcSubscriptionPayload } from './pcsubscriptionpayload.type';
import { PcSubscriptionFilter } from './pcsubscriptionfilter.input-type';
import { PcMutationEvent } from './pcmutationevent.enum';
import { UserSubscriptionPayload } from './usersubscriptionpayload.type';
import { UserSubscriptionFilter } from './usersubscriptionfilter.input-type';
import { UserMutationEvent } from './usermutationevent.enum';

export interface Subscription {
  subscribeToRole?: RoleSubscriptionPayload | null; 
  subscribeToFile?: FileSubscriptionPayload | null; 
  subscribeToPc?: PcSubscriptionPayload | null; 
  subscribeToUser?: UserSubscriptionPayload | null; 
}

export interface SubscribeToRoleSubscriptionArgs {
  filter?: RoleSubscriptionFilter | null; 
  mutations: RoleMutationEvent[]; 
}
export interface SubscribeToFileSubscriptionArgs {
  filter?: FileSubscriptionFilter | null; 
  mutations: FileMutationEvent[]; 
}
export interface SubscribeToPcSubscriptionArgs {
  filter?: PcSubscriptionFilter | null; 
  mutations: PcMutationEvent[]; 
}
export interface SubscribeToUserSubscriptionArgs {
  filter?: UserSubscriptionFilter | null; 
  mutations: UserMutationEvent[]; 
}
