import { FileCreatedAtSubscriptionFilters } from './filecreatedatsubscriptionfilters.input-type';
import { FileIdSubscriptionFilters } from './fileidsubscriptionfilters.input-type';
import { FileBlobMimeTypeSubscriptionFilters } from './fileblobmimetypesubscriptionfilters.input-type';
import { FileModifiedAtSubscriptionFilters } from './filemodifiedatsubscriptionfilters.input-type';
import { FileBlobUrlSubscriptionFilters } from './filebloburlsubscriptionfilters.input-type';
import { FileNameSubscriptionFilters } from './filenamesubscriptionfilters.input-type';
/* Subscription filter arguments for the File type */
export interface FileSubscriptionFilter {
  createdAt?: FileCreatedAtSubscriptionFilters | null; /* Filter results for on the createdAt field. */
  id?: FileIdSubscriptionFilters | null; /* Filter results for on the id field. */
  blobMimeType?: FileBlobMimeTypeSubscriptionFilters | null; /* Filter results for on the blobMimeType field. */
  modifiedAt?: FileModifiedAtSubscriptionFilters | null; /* Filter results for on the modifiedAt field. */
  blobUrl?: FileBlobUrlSubscriptionFilters | null; /* Filter results for on the blobUrl field. */
  name?: FileNameSubscriptionFilters | null; /* Filter results for on the name field. */
}

