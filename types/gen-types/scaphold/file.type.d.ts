import { DateTime } from './datetime.scalar';
import { Node } from './node.interface';
import { Timestamped } from './timestamped.interface';
import { Blob } from './blob.interface';
/* The File type */
export interface File extends Node,Timestamped,Blob {
  createdAt: DateTime; /* When paired with the Node interface, this is an automatically managedtimestamp that is set when an object is first created. */
  id: string; /* A globally unique ID. */
  blobMimeType?: string | null; /* The mimeType of the blob asset. */
  modifiedAt: DateTime; /* When paired with the Node interface, this is an automatically managedtimestamp that is set whenever an object is mutated. */
  blobUrl?: string | null; /* A pre-signed url to your file. */
  name?: string | null; /* The name of the File. If no name is given, the uploaded file&#x27;s name will be used. */
}

