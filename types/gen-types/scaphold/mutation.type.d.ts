import { MigrateSchemaPayload } from './migrateschemapayload.type';
import { MigrateSchemaInput } from './migrateschemainput.input-type';
import { LoginUserPayload } from './loginuserpayload.type';
import { LoginUserInput } from './loginuserinput.input-type';
import { ChangeUserPasswordPayload } from './changeuserpasswordpayload.type';
import { ChangeUserPasswordInput } from './changeuserpasswordinput.input-type';
import { CreateRolePayload } from './createrolepayload.type';
import { CreateRoleInput } from './createroleinput.input-type';
import { UpdateRolePayload } from './updaterolepayload.type';
import { UpdateRoleInput } from './updateroleinput.input-type';
import { DeleteRolePayload } from './deleterolepayload.type';
import { DeleteRoleInput } from './deleteroleinput.input-type';
import { CreateFilePayload } from './createfilepayload.type';
import { CreateFileInput } from './createfileinput.input-type';
import { UpdateFilePayload } from './updatefilepayload.type';
import { UpdateFileInput } from './updatefileinput.input-type';
import { DeleteFilePayload } from './deletefilepayload.type';
import { DeleteFileInput } from './deletefileinput.input-type';
import { CreatePcPayload } from './createpcpayload.type';
import { CreatePcInput } from './createpcinput.input-type';
import { UpdatePcPayload } from './updatepcpayload.type';
import { UpdatePcInput } from './updatepcinput.input-type';
import { DeletePcPayload } from './deletepcpayload.type';
import { DeletePcInput } from './deletepcinput.input-type';
import { CreateUserPayload } from './createuserpayload.type';
import { CreateUserInput } from './createuserinput.input-type';
import { UpdateUserPayload } from './updateuserpayload.type';
import { UpdateUserInput } from './updateuserinput.input-type';
import { DeleteUserPayload } from './deleteuserpayload.type';
import { DeleteUserInput } from './deleteuserinput.input-type';
import { AddToUserRolesConnectionPayload } from './addtouserrolesconnectionpayload.type';
import { AddToUserRolesConnectionInput } from './addtouserrolesconnectioninput.input-type';
import { UpdateUserRolesConnectionPayload } from './updateuserrolesconnectionpayload.type';
import { UpdateUserRolesConnectionInput } from './updateuserrolesconnectioninput.input-type';
import { RemoveFromUserRolesConnectionPayload } from './removefromuserrolesconnectionpayload.type';
import { RemoveFromUserRolesConnectionInput } from './removefromuserrolesconnectioninput.input-type';

export interface Mutation {
  migrateSchema?: MigrateSchemaPayload | null; 
  loginUser?: LoginUserPayload | null; 
  changeUserPassword?: ChangeUserPasswordPayload | null; 
  createRole?: CreateRolePayload | null; /* Create objects of type Role. */
  updateRole?: UpdateRolePayload | null; /* Update objects of type Role. */
  deleteRole?: DeleteRolePayload | null; /* Delete objects of type Role. */
  createFile?: CreateFilePayload | null; /* Create objects of type File. */
  updateFile?: UpdateFilePayload | null; /* Update objects of type File. */
  deleteFile?: DeleteFilePayload | null; /* Delete objects of type File. */
  createPc?: CreatePcPayload | null; /* Create objects of type PC. */
  updatePc?: UpdatePcPayload | null; /* Update objects of type PC. */
  deletePc?: DeletePcPayload | null; /* Delete objects of type PC. */
  createUser?: CreateUserPayload | null; /* Create objects of type User. */
  updateUser?: UpdateUserPayload | null; /* Update objects of type User. */
  deleteUser?: DeleteUserPayload | null; /* Delete objects of type User. */
  addToUserRolesConnection?: AddToUserRolesConnectionPayload | null; /* Adds a connection between an object of type&#x27;Role&#x27; and an object of type User. You can editthe &#x27;UserRoles&#x27; bridge type to add/remove custom fields for this connection. */
  updateUserRolesConnection?: UpdateUserRolesConnectionPayload | null; /* Updates an existing connection between an object of type&#x27;Role&#x27; and an object of type User. */
  removeFromUserRolesConnection?: RemoveFromUserRolesConnectionPayload | null; /* Removes a connection between an object of type&#x27;Role&#x27; and an object of type User. */
}

export interface MigrateSchemaMutationArgs {
  input: MigrateSchemaInput; 
}
export interface LoginUserMutationArgs {
  input: LoginUserInput; 
}
export interface ChangeUserPasswordMutationArgs {
  input: ChangeUserPasswordInput; 
}
export interface CreateRoleMutationArgs {
  input: CreateRoleInput; 
}
export interface UpdateRoleMutationArgs {
  input: UpdateRoleInput; 
}
export interface DeleteRoleMutationArgs {
  input: DeleteRoleInput; 
}
export interface CreateFileMutationArgs {
  input: CreateFileInput; 
}
export interface UpdateFileMutationArgs {
  input: UpdateFileInput; 
}
export interface DeleteFileMutationArgs {
  input: DeleteFileInput; 
}
export interface CreatePcMutationArgs {
  input: CreatePcInput; 
}
export interface UpdatePcMutationArgs {
  input: UpdatePcInput; 
}
export interface DeletePcMutationArgs {
  input: DeletePcInput; 
}
export interface CreateUserMutationArgs {
  input: CreateUserInput; 
}
export interface UpdateUserMutationArgs {
  input: UpdateUserInput; 
}
export interface DeleteUserMutationArgs {
  input: DeleteUserInput; 
}
export interface AddToUserRolesConnectionMutationArgs {
  input: AddToUserRolesConnectionInput; 
}
export interface UpdateUserRolesConnectionMutationArgs {
  input: UpdateUserRolesConnectionInput; 
}
export interface RemoveFromUserRolesConnectionMutationArgs {
  input: RemoveFromUserRolesConnectionInput; 
}
