import { DateTime } from './datetime.scalar';
import { ResolverLog } from './resolverlog.type';
import { Node } from './node.interface';
/* ### RequestLogRequest Logs are backed by elasticsearch and therefore offer more powerful querying andanalytical capabilities. We have adapted the ElasticSearch API to better fit GraphQL, butthe concepts remain the same. The definitive guide is a great place to start if you arenew to search (https://www.elastic.co/guide/en/elasticsearch/guide/current/index.html),and these docs cover the API in more detail:(https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html) */
export interface RequestLog extends Node {
  id: string; 
  username?: string | null; 
  isAdmin?: boolean | null; 
  isBillable?: boolean | null; 
  start?: DateTime | null; 
  duration?: number | null; 
  responseSizeBytes?: number | null; 
  requestMethod?: string | null; 
  status?: string | null; 
  errors?: string[] | null; 
  resolvers?: ResolverLog[] | null; 
  createdAt: DateTime; 
}

