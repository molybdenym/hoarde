import { Node } from './node.interface';
import { Role } from './role.type';
import { File } from './file.type';
import { PC } from './pc.type';
import { User } from './user.type';
import { Viewer } from './viewer.type';
import { HealthStatus } from './healthstatus.type';
import { RequestLogSearchResults } from './requestlogsearchresults.type';

export interface Query {
  node?: Node | null; 
  getRole?: Role | null; /* Get objects of type Role by id. */
  getFile?: File | null; /* Get objects of type File by id. */
  getPc?: PC | null; /* Get objects of type PC by id. */
  getUser?: User | null; /* Get objects of type User by id. */
  viewer?: Viewer | null; 
  checkHealth?: HealthStatus | null; /* Check the health of your GraphQL API by pinging the server.It will return &#x60;true&#x60; for healthy and &#x60;false&#x60; for unhealthy. */
  searchRequestLogs?: RequestLogSearchResults | null; 
}

export interface NodeQueryArgs {
  id: string; 
}
export interface GetRoleQueryArgs {
  id: string; 
}
export interface GetFileQueryArgs {
  id: string; 
}
export interface GetPcQueryArgs {
  id: string; 
}
export interface GetUserQueryArgs {
  id: string; 
}
