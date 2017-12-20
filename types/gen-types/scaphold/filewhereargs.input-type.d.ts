import { FileCreatedAtWhereArgs } from './filecreatedatwhereargs.input-type';
import { FileIdWhereArgs } from './fileidwhereargs.input-type';
import { FileBlobMimeTypeWhereArgs } from './fileblobmimetypewhereargs.input-type';
import { FileModifiedAtWhereArgs } from './filemodifiedatwhereargs.input-type';
import { FileBlobUrlWhereArgs } from './filebloburlwhereargs.input-type';
import { FileNameWhereArgs } from './filenamewhereargs.input-type';
/* Where filter arguments for the File type */
export interface FileWhereArgs {
  createdAt?: FileCreatedAtWhereArgs | null; /* Filter results for on the createdAt field. */
  id?: FileIdWhereArgs | null; /* Filter results for on the id field. */
  blobMimeType?: FileBlobMimeTypeWhereArgs | null; /* Filter results for on the blobMimeType field. */
  modifiedAt?: FileModifiedAtWhereArgs | null; /* Filter results for on the modifiedAt field. */
  blobUrl?: FileBlobUrlWhereArgs | null; /* Filter results for on the blobUrl field. */
  name?: FileNameWhereArgs | null; /* Filter results for on the name field. */
  OR?: FileWhereArgs[] | null; /* Combine mutiple where expressions using the OR operator. */
  AND?: FileWhereArgs[] | null; /* Combine mutiple where expressions using the AND operator. */
}

