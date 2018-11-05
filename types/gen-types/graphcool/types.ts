/* tslint:disable */

// ====================================================
// START: Typescript template
// ====================================================

// ====================================================
// Scalars
// ====================================================

export type DateTime = any;

// ====================================================
// Interfaces
// ====================================================

/** An object with an ID */
export interface Node {
  /** The id of the object. */
  id: string;
}

// ====================================================
// Types
// ====================================================

export interface Query {
  allAbilities: Ability[];

  allCharacters: Character[];

  allFiles: File[];

  allUsers: User[];

  _allAbilitiesMeta: _QueryMeta;

  _allCharactersMeta: _QueryMeta;

  _allFilesMeta: _QueryMeta;

  _allUsersMeta: _QueryMeta;

  Ability?: Ability | null;

  Character?: Character | null;

  File?: File | null;

  User?: User | null;

  user?: User | null;
  /** Fetches an object given its ID */
  node?: Node | null;
}

export interface Ability extends Node {
  abbr: AbilityAbbr;

  baseScore: number;

  character: Character;

  id: string;

  levelMod: number;

  magicMod: number;

  name: AbilityName;

  proficient?: boolean | null;

  raceMod: number;

  roll1?: number | null;

  roll2?: number | null;

  roll3?: number | null;
}

export interface Character extends Node {
  abilities?: Ability[] | null;

  createdAt: DateTime;

  id: string;

  player?: User | null;

  updatedAt: DateTime;
  /** Meta information about the query. */
  _abilitiesMeta: _QueryMeta;
}

export interface User extends Node {
  characters?: Character[] | null;

  createdAt: DateTime;

  email?: string | null;

  id: string;

  password?: string | null;

  updatedAt: DateTime;

  username: string;
  /** Meta information about the query. */
  _charactersMeta: _QueryMeta;
}
/** Meta information about the query. */
export interface _QueryMeta {
  count: number;
}

export interface File extends Node {
  contentType: string;

  createdAt: DateTime;

  id: string;

  name: string;

  secret: string;

  size: number;

  updatedAt: DateTime;

  url: string;
}

export interface Mutation {
  createAbility?: Ability | null;

  createCharacter?: Character | null;

  createFile?: File | null;

  updateAbility?: Ability | null;

  updateCharacter?: Character | null;

  updateFile?: File | null;

  updateUser?: User | null;

  updateOrCreateAbility?: Ability | null;

  updateOrCreateCharacter?: Character | null;

  updateOrCreateFile?: File | null;

  updateOrCreateUser?: User | null;

  deleteAbility?: Ability | null;

  deleteCharacter?: Character | null;

  deleteFile?: File | null;

  deleteUser?: User | null;

  addToCharacterAbilities?: AddToCharacterAbilitiesPayload | null;

  addToUserCharacters?: AddToUserCharactersPayload | null;

  removeFromUserCharacters?: RemoveFromUserCharactersPayload | null;

  signinUser: SigninPayload;

  createUser?: User | null;

  invokeFunction?: InvokeFunctionPayload | null;
}

export interface AddToCharacterAbilitiesPayload {
  characterCharacter?: Character | null;

  abilitiesAbility?: Ability | null;
}

export interface AddToUserCharactersPayload {
  playerUser?: User | null;

  charactersCharacter?: Character | null;
}

export interface RemoveFromUserCharactersPayload {
  playerUser?: User | null;

  charactersCharacter?: Character | null;
}
/** If authentication was successful the payload contains the user and a token. If unsuccessful this payload is null. */
export interface SigninPayload {
  token?: string | null;

  user?: User | null;
}

export interface InvokeFunctionPayload {
  result: string;

  clientMutationId?: string | null;
}

export interface Subscription {
  Ability?: AbilitySubscriptionPayload | null;

  Character?: CharacterSubscriptionPayload | null;

  File?: FileSubscriptionPayload | null;

  User?: UserSubscriptionPayload | null;
}

export interface AbilitySubscriptionPayload {
  mutation: _ModelMutationType;

  node?: Ability | null;

  updatedFields?: string[] | null;

  previousValues?: AbilityPreviousValues | null;
}

export interface AbilityPreviousValues {
  abbr: AbilityAbbr;

  baseScore: number;

  id: string;

  levelMod: number;

  magicMod: number;

  name: AbilityName;

  proficient?: boolean | null;

  raceMod: number;

  roll1?: number | null;

  roll2?: number | null;

  roll3?: number | null;
}

export interface CharacterSubscriptionPayload {
  mutation: _ModelMutationType;

  node?: Character | null;

  updatedFields?: string[] | null;

  previousValues?: CharacterPreviousValues | null;
}

export interface CharacterPreviousValues {
  createdAt: DateTime;

  id: string;

  updatedAt: DateTime;
}

export interface FileSubscriptionPayload {
  mutation: _ModelMutationType;

  node?: File | null;

  updatedFields?: string[] | null;

  previousValues?: FilePreviousValues | null;
}

export interface FilePreviousValues {
  contentType: string;

  createdAt: DateTime;

  id: string;

  name: string;

  secret: string;

  size: number;

  updatedAt: DateTime;

  url: string;
}

export interface UserSubscriptionPayload {
  mutation: _ModelMutationType;

  node?: User | null;

  updatedFields?: string[] | null;

  previousValues?: UserPreviousValues | null;
}

export interface UserPreviousValues {
  createdAt: DateTime;

  email?: string | null;

  id: string;

  password?: string | null;

  updatedAt: DateTime;

  username: string;
}

// ====================================================
// InputTypes
// ====================================================

export interface AbilityFilter {
  /** Logical AND on all given filters. */
  AND?: AbilityFilter[] | null;
  /** Logical OR on all given filters. */
  OR?: AbilityFilter[] | null;

  abbr?: AbilityAbbr | null;
  /** All values that are not equal to given value. */
  abbr_not?: AbilityAbbr | null;
  /** All values that are contained in given list. */
  abbr_in?: AbilityAbbr[] | null;
  /** All values that are not contained in given list. */
  abbr_not_in?: AbilityAbbr[] | null;

  baseScore?: number | null;
  /** All values that are not equal to given value. */
  baseScore_not?: number | null;
  /** All values that are contained in given list. */
  baseScore_in?: number[] | null;
  /** All values that are not contained in given list. */
  baseScore_not_in?: number[] | null;
  /** All values less than the given value. */
  baseScore_lt?: number | null;
  /** All values less than or equal the given value. */
  baseScore_lte?: number | null;
  /** All values greater than the given value. */
  baseScore_gt?: number | null;
  /** All values greater than or equal the given value. */
  baseScore_gte?: number | null;

  id?: string | null;
  /** All values that are not equal to given value. */
  id_not?: string | null;
  /** All values that are contained in given list. */
  id_in?: string[] | null;
  /** All values that are not contained in given list. */
  id_not_in?: string[] | null;
  /** All values less than the given value. */
  id_lt?: string | null;
  /** All values less than or equal the given value. */
  id_lte?: string | null;
  /** All values greater than the given value. */
  id_gt?: string | null;
  /** All values greater than or equal the given value. */
  id_gte?: string | null;
  /** All values containing the given string. */
  id_contains?: string | null;
  /** All values not containing the given string. */
  id_not_contains?: string | null;
  /** All values starting with the given string. */
  id_starts_with?: string | null;
  /** All values not starting with the given string. */
  id_not_starts_with?: string | null;
  /** All values ending with the given string. */
  id_ends_with?: string | null;
  /** All values not ending with the given string. */
  id_not_ends_with?: string | null;

  levelMod?: number | null;
  /** All values that are not equal to given value. */
  levelMod_not?: number | null;
  /** All values that are contained in given list. */
  levelMod_in?: number[] | null;
  /** All values that are not contained in given list. */
  levelMod_not_in?: number[] | null;
  /** All values less than the given value. */
  levelMod_lt?: number | null;
  /** All values less than or equal the given value. */
  levelMod_lte?: number | null;
  /** All values greater than the given value. */
  levelMod_gt?: number | null;
  /** All values greater than or equal the given value. */
  levelMod_gte?: number | null;

  magicMod?: number | null;
  /** All values that are not equal to given value. */
  magicMod_not?: number | null;
  /** All values that are contained in given list. */
  magicMod_in?: number[] | null;
  /** All values that are not contained in given list. */
  magicMod_not_in?: number[] | null;
  /** All values less than the given value. */
  magicMod_lt?: number | null;
  /** All values less than or equal the given value. */
  magicMod_lte?: number | null;
  /** All values greater than the given value. */
  magicMod_gt?: number | null;
  /** All values greater than or equal the given value. */
  magicMod_gte?: number | null;

  name?: AbilityName | null;
  /** All values that are not equal to given value. */
  name_not?: AbilityName | null;
  /** All values that are contained in given list. */
  name_in?: AbilityName[] | null;
  /** All values that are not contained in given list. */
  name_not_in?: AbilityName[] | null;

  proficient?: boolean | null;
  /** All values that are not equal to given value. */
  proficient_not?: boolean | null;

  raceMod?: number | null;
  /** All values that are not equal to given value. */
  raceMod_not?: number | null;
  /** All values that are contained in given list. */
  raceMod_in?: number[] | null;
  /** All values that are not contained in given list. */
  raceMod_not_in?: number[] | null;
  /** All values less than the given value. */
  raceMod_lt?: number | null;
  /** All values less than or equal the given value. */
  raceMod_lte?: number | null;
  /** All values greater than the given value. */
  raceMod_gt?: number | null;
  /** All values greater than or equal the given value. */
  raceMod_gte?: number | null;

  roll1?: number | null;
  /** All values that are not equal to given value. */
  roll1_not?: number | null;
  /** All values that are contained in given list. */
  roll1_in?: number[] | null;
  /** All values that are not contained in given list. */
  roll1_not_in?: number[] | null;
  /** All values less than the given value. */
  roll1_lt?: number | null;
  /** All values less than or equal the given value. */
  roll1_lte?: number | null;
  /** All values greater than the given value. */
  roll1_gt?: number | null;
  /** All values greater than or equal the given value. */
  roll1_gte?: number | null;

  roll2?: number | null;
  /** All values that are not equal to given value. */
  roll2_not?: number | null;
  /** All values that are contained in given list. */
  roll2_in?: number[] | null;
  /** All values that are not contained in given list. */
  roll2_not_in?: number[] | null;
  /** All values less than the given value. */
  roll2_lt?: number | null;
  /** All values less than or equal the given value. */
  roll2_lte?: number | null;
  /** All values greater than the given value. */
  roll2_gt?: number | null;
  /** All values greater than or equal the given value. */
  roll2_gte?: number | null;

  roll3?: number | null;
  /** All values that are not equal to given value. */
  roll3_not?: number | null;
  /** All values that are contained in given list. */
  roll3_in?: number[] | null;
  /** All values that are not contained in given list. */
  roll3_not_in?: number[] | null;
  /** All values less than the given value. */
  roll3_lt?: number | null;
  /** All values less than or equal the given value. */
  roll3_lte?: number | null;
  /** All values greater than the given value. */
  roll3_gt?: number | null;
  /** All values greater than or equal the given value. */
  roll3_gte?: number | null;

  character?: CharacterFilter | null;
}

export interface CharacterFilter {
  /** Logical AND on all given filters. */
  AND?: CharacterFilter[] | null;
  /** Logical OR on all given filters. */
  OR?: CharacterFilter[] | null;

  createdAt?: DateTime | null;
  /** All values that are not equal to given value. */
  createdAt_not?: DateTime | null;
  /** All values that are contained in given list. */
  createdAt_in?: DateTime[] | null;
  /** All values that are not contained in given list. */
  createdAt_not_in?: DateTime[] | null;
  /** All values less than the given value. */
  createdAt_lt?: DateTime | null;
  /** All values less than or equal the given value. */
  createdAt_lte?: DateTime | null;
  /** All values greater than the given value. */
  createdAt_gt?: DateTime | null;
  /** All values greater than or equal the given value. */
  createdAt_gte?: DateTime | null;

  id?: string | null;
  /** All values that are not equal to given value. */
  id_not?: string | null;
  /** All values that are contained in given list. */
  id_in?: string[] | null;
  /** All values that are not contained in given list. */
  id_not_in?: string[] | null;
  /** All values less than the given value. */
  id_lt?: string | null;
  /** All values less than or equal the given value. */
  id_lte?: string | null;
  /** All values greater than the given value. */
  id_gt?: string | null;
  /** All values greater than or equal the given value. */
  id_gte?: string | null;
  /** All values containing the given string. */
  id_contains?: string | null;
  /** All values not containing the given string. */
  id_not_contains?: string | null;
  /** All values starting with the given string. */
  id_starts_with?: string | null;
  /** All values not starting with the given string. */
  id_not_starts_with?: string | null;
  /** All values ending with the given string. */
  id_ends_with?: string | null;
  /** All values not ending with the given string. */
  id_not_ends_with?: string | null;

  updatedAt?: DateTime | null;
  /** All values that are not equal to given value. */
  updatedAt_not?: DateTime | null;
  /** All values that are contained in given list. */
  updatedAt_in?: DateTime[] | null;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: DateTime[] | null;
  /** All values less than the given value. */
  updatedAt_lt?: DateTime | null;
  /** All values less than or equal the given value. */
  updatedAt_lte?: DateTime | null;
  /** All values greater than the given value. */
  updatedAt_gt?: DateTime | null;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: DateTime | null;

  abilities_every?: AbilityFilter | null;

  abilities_some?: AbilityFilter | null;

  abilities_none?: AbilityFilter | null;

  player?: UserFilter | null;
}

export interface UserFilter {
  /** Logical AND on all given filters. */
  AND?: UserFilter[] | null;
  /** Logical OR on all given filters. */
  OR?: UserFilter[] | null;

  createdAt?: DateTime | null;
  /** All values that are not equal to given value. */
  createdAt_not?: DateTime | null;
  /** All values that are contained in given list. */
  createdAt_in?: DateTime[] | null;
  /** All values that are not contained in given list. */
  createdAt_not_in?: DateTime[] | null;
  /** All values less than the given value. */
  createdAt_lt?: DateTime | null;
  /** All values less than or equal the given value. */
  createdAt_lte?: DateTime | null;
  /** All values greater than the given value. */
  createdAt_gt?: DateTime | null;
  /** All values greater than or equal the given value. */
  createdAt_gte?: DateTime | null;

  email?: string | null;
  /** All values that are not equal to given value. */
  email_not?: string | null;
  /** All values that are contained in given list. */
  email_in?: string[] | null;
  /** All values that are not contained in given list. */
  email_not_in?: string[] | null;
  /** All values less than the given value. */
  email_lt?: string | null;
  /** All values less than or equal the given value. */
  email_lte?: string | null;
  /** All values greater than the given value. */
  email_gt?: string | null;
  /** All values greater than or equal the given value. */
  email_gte?: string | null;
  /** All values containing the given string. */
  email_contains?: string | null;
  /** All values not containing the given string. */
  email_not_contains?: string | null;
  /** All values starting with the given string. */
  email_starts_with?: string | null;
  /** All values not starting with the given string. */
  email_not_starts_with?: string | null;
  /** All values ending with the given string. */
  email_ends_with?: string | null;
  /** All values not ending with the given string. */
  email_not_ends_with?: string | null;

  id?: string | null;
  /** All values that are not equal to given value. */
  id_not?: string | null;
  /** All values that are contained in given list. */
  id_in?: string[] | null;
  /** All values that are not contained in given list. */
  id_not_in?: string[] | null;
  /** All values less than the given value. */
  id_lt?: string | null;
  /** All values less than or equal the given value. */
  id_lte?: string | null;
  /** All values greater than the given value. */
  id_gt?: string | null;
  /** All values greater than or equal the given value. */
  id_gte?: string | null;
  /** All values containing the given string. */
  id_contains?: string | null;
  /** All values not containing the given string. */
  id_not_contains?: string | null;
  /** All values starting with the given string. */
  id_starts_with?: string | null;
  /** All values not starting with the given string. */
  id_not_starts_with?: string | null;
  /** All values ending with the given string. */
  id_ends_with?: string | null;
  /** All values not ending with the given string. */
  id_not_ends_with?: string | null;

  password?: string | null;
  /** All values that are not equal to given value. */
  password_not?: string | null;
  /** All values that are contained in given list. */
  password_in?: string[] | null;
  /** All values that are not contained in given list. */
  password_not_in?: string[] | null;
  /** All values less than the given value. */
  password_lt?: string | null;
  /** All values less than or equal the given value. */
  password_lte?: string | null;
  /** All values greater than the given value. */
  password_gt?: string | null;
  /** All values greater than or equal the given value. */
  password_gte?: string | null;
  /** All values containing the given string. */
  password_contains?: string | null;
  /** All values not containing the given string. */
  password_not_contains?: string | null;
  /** All values starting with the given string. */
  password_starts_with?: string | null;
  /** All values not starting with the given string. */
  password_not_starts_with?: string | null;
  /** All values ending with the given string. */
  password_ends_with?: string | null;
  /** All values not ending with the given string. */
  password_not_ends_with?: string | null;

  updatedAt?: DateTime | null;
  /** All values that are not equal to given value. */
  updatedAt_not?: DateTime | null;
  /** All values that are contained in given list. */
  updatedAt_in?: DateTime[] | null;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: DateTime[] | null;
  /** All values less than the given value. */
  updatedAt_lt?: DateTime | null;
  /** All values less than or equal the given value. */
  updatedAt_lte?: DateTime | null;
  /** All values greater than the given value. */
  updatedAt_gt?: DateTime | null;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: DateTime | null;

  username?: string | null;
  /** All values that are not equal to given value. */
  username_not?: string | null;
  /** All values that are contained in given list. */
  username_in?: string[] | null;
  /** All values that are not contained in given list. */
  username_not_in?: string[] | null;
  /** All values less than the given value. */
  username_lt?: string | null;
  /** All values less than or equal the given value. */
  username_lte?: string | null;
  /** All values greater than the given value. */
  username_gt?: string | null;
  /** All values greater than or equal the given value. */
  username_gte?: string | null;
  /** All values containing the given string. */
  username_contains?: string | null;
  /** All values not containing the given string. */
  username_not_contains?: string | null;
  /** All values starting with the given string. */
  username_starts_with?: string | null;
  /** All values not starting with the given string. */
  username_not_starts_with?: string | null;
  /** All values ending with the given string. */
  username_ends_with?: string | null;
  /** All values not ending with the given string. */
  username_not_ends_with?: string | null;

  characters_every?: CharacterFilter | null;

  characters_some?: CharacterFilter | null;

  characters_none?: CharacterFilter | null;
}

export interface FileFilter {
  /** Logical AND on all given filters. */
  AND?: FileFilter[] | null;
  /** Logical OR on all given filters. */
  OR?: FileFilter[] | null;

  contentType?: string | null;
  /** All values that are not equal to given value. */
  contentType_not?: string | null;
  /** All values that are contained in given list. */
  contentType_in?: string[] | null;
  /** All values that are not contained in given list. */
  contentType_not_in?: string[] | null;
  /** All values less than the given value. */
  contentType_lt?: string | null;
  /** All values less than or equal the given value. */
  contentType_lte?: string | null;
  /** All values greater than the given value. */
  contentType_gt?: string | null;
  /** All values greater than or equal the given value. */
  contentType_gte?: string | null;
  /** All values containing the given string. */
  contentType_contains?: string | null;
  /** All values not containing the given string. */
  contentType_not_contains?: string | null;
  /** All values starting with the given string. */
  contentType_starts_with?: string | null;
  /** All values not starting with the given string. */
  contentType_not_starts_with?: string | null;
  /** All values ending with the given string. */
  contentType_ends_with?: string | null;
  /** All values not ending with the given string. */
  contentType_not_ends_with?: string | null;

  createdAt?: DateTime | null;
  /** All values that are not equal to given value. */
  createdAt_not?: DateTime | null;
  /** All values that are contained in given list. */
  createdAt_in?: DateTime[] | null;
  /** All values that are not contained in given list. */
  createdAt_not_in?: DateTime[] | null;
  /** All values less than the given value. */
  createdAt_lt?: DateTime | null;
  /** All values less than or equal the given value. */
  createdAt_lte?: DateTime | null;
  /** All values greater than the given value. */
  createdAt_gt?: DateTime | null;
  /** All values greater than or equal the given value. */
  createdAt_gte?: DateTime | null;

  id?: string | null;
  /** All values that are not equal to given value. */
  id_not?: string | null;
  /** All values that are contained in given list. */
  id_in?: string[] | null;
  /** All values that are not contained in given list. */
  id_not_in?: string[] | null;
  /** All values less than the given value. */
  id_lt?: string | null;
  /** All values less than or equal the given value. */
  id_lte?: string | null;
  /** All values greater than the given value. */
  id_gt?: string | null;
  /** All values greater than or equal the given value. */
  id_gte?: string | null;
  /** All values containing the given string. */
  id_contains?: string | null;
  /** All values not containing the given string. */
  id_not_contains?: string | null;
  /** All values starting with the given string. */
  id_starts_with?: string | null;
  /** All values not starting with the given string. */
  id_not_starts_with?: string | null;
  /** All values ending with the given string. */
  id_ends_with?: string | null;
  /** All values not ending with the given string. */
  id_not_ends_with?: string | null;

  name?: string | null;
  /** All values that are not equal to given value. */
  name_not?: string | null;
  /** All values that are contained in given list. */
  name_in?: string[] | null;
  /** All values that are not contained in given list. */
  name_not_in?: string[] | null;
  /** All values less than the given value. */
  name_lt?: string | null;
  /** All values less than or equal the given value. */
  name_lte?: string | null;
  /** All values greater than the given value. */
  name_gt?: string | null;
  /** All values greater than or equal the given value. */
  name_gte?: string | null;
  /** All values containing the given string. */
  name_contains?: string | null;
  /** All values not containing the given string. */
  name_not_contains?: string | null;
  /** All values starting with the given string. */
  name_starts_with?: string | null;
  /** All values not starting with the given string. */
  name_not_starts_with?: string | null;
  /** All values ending with the given string. */
  name_ends_with?: string | null;
  /** All values not ending with the given string. */
  name_not_ends_with?: string | null;

  secret?: string | null;
  /** All values that are not equal to given value. */
  secret_not?: string | null;
  /** All values that are contained in given list. */
  secret_in?: string[] | null;
  /** All values that are not contained in given list. */
  secret_not_in?: string[] | null;
  /** All values less than the given value. */
  secret_lt?: string | null;
  /** All values less than or equal the given value. */
  secret_lte?: string | null;
  /** All values greater than the given value. */
  secret_gt?: string | null;
  /** All values greater than or equal the given value. */
  secret_gte?: string | null;
  /** All values containing the given string. */
  secret_contains?: string | null;
  /** All values not containing the given string. */
  secret_not_contains?: string | null;
  /** All values starting with the given string. */
  secret_starts_with?: string | null;
  /** All values not starting with the given string. */
  secret_not_starts_with?: string | null;
  /** All values ending with the given string. */
  secret_ends_with?: string | null;
  /** All values not ending with the given string. */
  secret_not_ends_with?: string | null;

  size?: number | null;
  /** All values that are not equal to given value. */
  size_not?: number | null;
  /** All values that are contained in given list. */
  size_in?: number[] | null;
  /** All values that are not contained in given list. */
  size_not_in?: number[] | null;
  /** All values less than the given value. */
  size_lt?: number | null;
  /** All values less than or equal the given value. */
  size_lte?: number | null;
  /** All values greater than the given value. */
  size_gt?: number | null;
  /** All values greater than or equal the given value. */
  size_gte?: number | null;

  updatedAt?: DateTime | null;
  /** All values that are not equal to given value. */
  updatedAt_not?: DateTime | null;
  /** All values that are contained in given list. */
  updatedAt_in?: DateTime[] | null;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: DateTime[] | null;
  /** All values less than the given value. */
  updatedAt_lt?: DateTime | null;
  /** All values less than or equal the given value. */
  updatedAt_lte?: DateTime | null;
  /** All values greater than the given value. */
  updatedAt_gt?: DateTime | null;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: DateTime | null;

  url?: string | null;
  /** All values that are not equal to given value. */
  url_not?: string | null;
  /** All values that are contained in given list. */
  url_in?: string[] | null;
  /** All values that are not contained in given list. */
  url_not_in?: string[] | null;
  /** All values less than the given value. */
  url_lt?: string | null;
  /** All values less than or equal the given value. */
  url_lte?: string | null;
  /** All values greater than the given value. */
  url_gt?: string | null;
  /** All values greater than or equal the given value. */
  url_gte?: string | null;
  /** All values containing the given string. */
  url_contains?: string | null;
  /** All values not containing the given string. */
  url_not_contains?: string | null;
  /** All values starting with the given string. */
  url_starts_with?: string | null;
  /** All values not starting with the given string. */
  url_not_starts_with?: string | null;
  /** All values ending with the given string. */
  url_ends_with?: string | null;
  /** All values not ending with the given string. */
  url_not_ends_with?: string | null;
}

export interface AbilitycharacterCharacter {
  playerId?: string | null;

  abilitiesIds?: string[] | null;

  abilities?: CharacterabilitiesAbility[] | null;
}

export interface CharacterabilitiesAbility {
  abbr: AbilityAbbr;

  baseScore: number;

  levelMod: number;

  magicMod: number;

  name: AbilityName;

  proficient?: boolean | null;

  raceMod: number;

  roll1?: number | null;

  roll2?: number | null;

  roll3?: number | null;
}

export interface UsercharactersCharacter {
  abilitiesIds?: string[] | null;

  abilities?: CharacterabilitiesAbility[] | null;
}

export interface UpdateAbility {
  abbr?: AbilityAbbr | null;

  baseScore?: number | null;

  id: string;

  levelMod?: number | null;

  magicMod?: number | null;

  name?: AbilityName | null;

  proficient?: boolean | null;

  raceMod?: number | null;

  roll1?: number | null;

  roll2?: number | null;

  roll3?: number | null;

  characterId?: string | null;

  character?: AbilitycharacterCharacter | null;
}

export interface CreateAbility {
  abbr: AbilityAbbr;

  baseScore: number;

  levelMod: number;

  magicMod: number;

  name: AbilityName;

  proficient?: boolean | null;

  raceMod: number;

  roll1?: number | null;

  roll2?: number | null;

  roll3?: number | null;

  characterId?: string | null;

  character?: AbilitycharacterCharacter | null;
}

export interface UpdateCharacter {
  id: string;

  playerId?: string | null;

  abilitiesIds?: string[] | null;

  abilities?: CharacterabilitiesAbility[] | null;
}

export interface CreateCharacter {
  playerId?: string | null;

  abilitiesIds?: string[] | null;

  abilities?: CharacterabilitiesAbility[] | null;
}

export interface UpdateFile {
  id: string;

  name?: string | null;
}

export interface CreateFile {
  name: string;
}

export interface UpdateUser {
  id: string;

  username?: string | null;

  charactersIds?: string[] | null;

  characters?: UsercharactersCharacter[] | null;
}

export interface CreateUser {
  username: string;

  charactersIds?: string[] | null;

  characters?: UsercharactersCharacter[] | null;
}

export interface AuthProviderEmail {
  email: string;

  password: string;
}

export interface AuthProviderSignupData {
  email?: AuthProviderEmail | null;
}

export interface InvokeFunctionInput {
  name: string;

  input: string;

  clientMutationId?: string | null;
}

export interface AbilitySubscriptionFilter {
  /** Logical AND on all given filters. */
  AND?: AbilitySubscriptionFilter[] | null;
  /** Logical OR on all given filters. */
  OR?: AbilitySubscriptionFilter[] | null;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: _ModelMutationType[] | null;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: string | null;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: string[] | null;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: string[] | null;

  node?: AbilitySubscriptionFilterNode | null;
}

export interface AbilitySubscriptionFilterNode {
  abbr?: AbilityAbbr | null;
  /** All values that are not equal to given value. */
  abbr_not?: AbilityAbbr | null;
  /** All values that are contained in given list. */
  abbr_in?: AbilityAbbr[] | null;
  /** All values that are not contained in given list. */
  abbr_not_in?: AbilityAbbr[] | null;

  baseScore?: number | null;
  /** All values that are not equal to given value. */
  baseScore_not?: number | null;
  /** All values that are contained in given list. */
  baseScore_in?: number[] | null;
  /** All values that are not contained in given list. */
  baseScore_not_in?: number[] | null;
  /** All values less than the given value. */
  baseScore_lt?: number | null;
  /** All values less than or equal the given value. */
  baseScore_lte?: number | null;
  /** All values greater than the given value. */
  baseScore_gt?: number | null;
  /** All values greater than or equal the given value. */
  baseScore_gte?: number | null;

  id?: string | null;
  /** All values that are not equal to given value. */
  id_not?: string | null;
  /** All values that are contained in given list. */
  id_in?: string[] | null;
  /** All values that are not contained in given list. */
  id_not_in?: string[] | null;
  /** All values less than the given value. */
  id_lt?: string | null;
  /** All values less than or equal the given value. */
  id_lte?: string | null;
  /** All values greater than the given value. */
  id_gt?: string | null;
  /** All values greater than or equal the given value. */
  id_gte?: string | null;
  /** All values containing the given string. */
  id_contains?: string | null;
  /** All values not containing the given string. */
  id_not_contains?: string | null;
  /** All values starting with the given string. */
  id_starts_with?: string | null;
  /** All values not starting with the given string. */
  id_not_starts_with?: string | null;
  /** All values ending with the given string. */
  id_ends_with?: string | null;
  /** All values not ending with the given string. */
  id_not_ends_with?: string | null;

  levelMod?: number | null;
  /** All values that are not equal to given value. */
  levelMod_not?: number | null;
  /** All values that are contained in given list. */
  levelMod_in?: number[] | null;
  /** All values that are not contained in given list. */
  levelMod_not_in?: number[] | null;
  /** All values less than the given value. */
  levelMod_lt?: number | null;
  /** All values less than or equal the given value. */
  levelMod_lte?: number | null;
  /** All values greater than the given value. */
  levelMod_gt?: number | null;
  /** All values greater than or equal the given value. */
  levelMod_gte?: number | null;

  magicMod?: number | null;
  /** All values that are not equal to given value. */
  magicMod_not?: number | null;
  /** All values that are contained in given list. */
  magicMod_in?: number[] | null;
  /** All values that are not contained in given list. */
  magicMod_not_in?: number[] | null;
  /** All values less than the given value. */
  magicMod_lt?: number | null;
  /** All values less than or equal the given value. */
  magicMod_lte?: number | null;
  /** All values greater than the given value. */
  magicMod_gt?: number | null;
  /** All values greater than or equal the given value. */
  magicMod_gte?: number | null;

  name?: AbilityName | null;
  /** All values that are not equal to given value. */
  name_not?: AbilityName | null;
  /** All values that are contained in given list. */
  name_in?: AbilityName[] | null;
  /** All values that are not contained in given list. */
  name_not_in?: AbilityName[] | null;

  proficient?: boolean | null;
  /** All values that are not equal to given value. */
  proficient_not?: boolean | null;

  raceMod?: number | null;
  /** All values that are not equal to given value. */
  raceMod_not?: number | null;
  /** All values that are contained in given list. */
  raceMod_in?: number[] | null;
  /** All values that are not contained in given list. */
  raceMod_not_in?: number[] | null;
  /** All values less than the given value. */
  raceMod_lt?: number | null;
  /** All values less than or equal the given value. */
  raceMod_lte?: number | null;
  /** All values greater than the given value. */
  raceMod_gt?: number | null;
  /** All values greater than or equal the given value. */
  raceMod_gte?: number | null;

  roll1?: number | null;
  /** All values that are not equal to given value. */
  roll1_not?: number | null;
  /** All values that are contained in given list. */
  roll1_in?: number[] | null;
  /** All values that are not contained in given list. */
  roll1_not_in?: number[] | null;
  /** All values less than the given value. */
  roll1_lt?: number | null;
  /** All values less than or equal the given value. */
  roll1_lte?: number | null;
  /** All values greater than the given value. */
  roll1_gt?: number | null;
  /** All values greater than or equal the given value. */
  roll1_gte?: number | null;

  roll2?: number | null;
  /** All values that are not equal to given value. */
  roll2_not?: number | null;
  /** All values that are contained in given list. */
  roll2_in?: number[] | null;
  /** All values that are not contained in given list. */
  roll2_not_in?: number[] | null;
  /** All values less than the given value. */
  roll2_lt?: number | null;
  /** All values less than or equal the given value. */
  roll2_lte?: number | null;
  /** All values greater than the given value. */
  roll2_gt?: number | null;
  /** All values greater than or equal the given value. */
  roll2_gte?: number | null;

  roll3?: number | null;
  /** All values that are not equal to given value. */
  roll3_not?: number | null;
  /** All values that are contained in given list. */
  roll3_in?: number[] | null;
  /** All values that are not contained in given list. */
  roll3_not_in?: number[] | null;
  /** All values less than the given value. */
  roll3_lt?: number | null;
  /** All values less than or equal the given value. */
  roll3_lte?: number | null;
  /** All values greater than the given value. */
  roll3_gt?: number | null;
  /** All values greater than or equal the given value. */
  roll3_gte?: number | null;

  character?: CharacterFilter | null;
}

export interface CharacterSubscriptionFilter {
  /** Logical AND on all given filters. */
  AND?: CharacterSubscriptionFilter[] | null;
  /** Logical OR on all given filters. */
  OR?: CharacterSubscriptionFilter[] | null;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: _ModelMutationType[] | null;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: string | null;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: string[] | null;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: string[] | null;

  node?: CharacterSubscriptionFilterNode | null;
}

export interface CharacterSubscriptionFilterNode {
  createdAt?: DateTime | null;
  /** All values that are not equal to given value. */
  createdAt_not?: DateTime | null;
  /** All values that are contained in given list. */
  createdAt_in?: DateTime[] | null;
  /** All values that are not contained in given list. */
  createdAt_not_in?: DateTime[] | null;
  /** All values less than the given value. */
  createdAt_lt?: DateTime | null;
  /** All values less than or equal the given value. */
  createdAt_lte?: DateTime | null;
  /** All values greater than the given value. */
  createdAt_gt?: DateTime | null;
  /** All values greater than or equal the given value. */
  createdAt_gte?: DateTime | null;

  id?: string | null;
  /** All values that are not equal to given value. */
  id_not?: string | null;
  /** All values that are contained in given list. */
  id_in?: string[] | null;
  /** All values that are not contained in given list. */
  id_not_in?: string[] | null;
  /** All values less than the given value. */
  id_lt?: string | null;
  /** All values less than or equal the given value. */
  id_lte?: string | null;
  /** All values greater than the given value. */
  id_gt?: string | null;
  /** All values greater than or equal the given value. */
  id_gte?: string | null;
  /** All values containing the given string. */
  id_contains?: string | null;
  /** All values not containing the given string. */
  id_not_contains?: string | null;
  /** All values starting with the given string. */
  id_starts_with?: string | null;
  /** All values not starting with the given string. */
  id_not_starts_with?: string | null;
  /** All values ending with the given string. */
  id_ends_with?: string | null;
  /** All values not ending with the given string. */
  id_not_ends_with?: string | null;

  updatedAt?: DateTime | null;
  /** All values that are not equal to given value. */
  updatedAt_not?: DateTime | null;
  /** All values that are contained in given list. */
  updatedAt_in?: DateTime[] | null;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: DateTime[] | null;
  /** All values less than the given value. */
  updatedAt_lt?: DateTime | null;
  /** All values less than or equal the given value. */
  updatedAt_lte?: DateTime | null;
  /** All values greater than the given value. */
  updatedAt_gt?: DateTime | null;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: DateTime | null;

  abilities_every?: AbilityFilter | null;

  abilities_some?: AbilityFilter | null;

  abilities_none?: AbilityFilter | null;

  player?: UserFilter | null;
}

export interface FileSubscriptionFilter {
  /** Logical AND on all given filters. */
  AND?: FileSubscriptionFilter[] | null;
  /** Logical OR on all given filters. */
  OR?: FileSubscriptionFilter[] | null;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: _ModelMutationType[] | null;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: string | null;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: string[] | null;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: string[] | null;

  node?: FileSubscriptionFilterNode | null;
}

export interface FileSubscriptionFilterNode {
  contentType?: string | null;
  /** All values that are not equal to given value. */
  contentType_not?: string | null;
  /** All values that are contained in given list. */
  contentType_in?: string[] | null;
  /** All values that are not contained in given list. */
  contentType_not_in?: string[] | null;
  /** All values less than the given value. */
  contentType_lt?: string | null;
  /** All values less than or equal the given value. */
  contentType_lte?: string | null;
  /** All values greater than the given value. */
  contentType_gt?: string | null;
  /** All values greater than or equal the given value. */
  contentType_gte?: string | null;
  /** All values containing the given string. */
  contentType_contains?: string | null;
  /** All values not containing the given string. */
  contentType_not_contains?: string | null;
  /** All values starting with the given string. */
  contentType_starts_with?: string | null;
  /** All values not starting with the given string. */
  contentType_not_starts_with?: string | null;
  /** All values ending with the given string. */
  contentType_ends_with?: string | null;
  /** All values not ending with the given string. */
  contentType_not_ends_with?: string | null;

  createdAt?: DateTime | null;
  /** All values that are not equal to given value. */
  createdAt_not?: DateTime | null;
  /** All values that are contained in given list. */
  createdAt_in?: DateTime[] | null;
  /** All values that are not contained in given list. */
  createdAt_not_in?: DateTime[] | null;
  /** All values less than the given value. */
  createdAt_lt?: DateTime | null;
  /** All values less than or equal the given value. */
  createdAt_lte?: DateTime | null;
  /** All values greater than the given value. */
  createdAt_gt?: DateTime | null;
  /** All values greater than or equal the given value. */
  createdAt_gte?: DateTime | null;

  id?: string | null;
  /** All values that are not equal to given value. */
  id_not?: string | null;
  /** All values that are contained in given list. */
  id_in?: string[] | null;
  /** All values that are not contained in given list. */
  id_not_in?: string[] | null;
  /** All values less than the given value. */
  id_lt?: string | null;
  /** All values less than or equal the given value. */
  id_lte?: string | null;
  /** All values greater than the given value. */
  id_gt?: string | null;
  /** All values greater than or equal the given value. */
  id_gte?: string | null;
  /** All values containing the given string. */
  id_contains?: string | null;
  /** All values not containing the given string. */
  id_not_contains?: string | null;
  /** All values starting with the given string. */
  id_starts_with?: string | null;
  /** All values not starting with the given string. */
  id_not_starts_with?: string | null;
  /** All values ending with the given string. */
  id_ends_with?: string | null;
  /** All values not ending with the given string. */
  id_not_ends_with?: string | null;

  name?: string | null;
  /** All values that are not equal to given value. */
  name_not?: string | null;
  /** All values that are contained in given list. */
  name_in?: string[] | null;
  /** All values that are not contained in given list. */
  name_not_in?: string[] | null;
  /** All values less than the given value. */
  name_lt?: string | null;
  /** All values less than or equal the given value. */
  name_lte?: string | null;
  /** All values greater than the given value. */
  name_gt?: string | null;
  /** All values greater than or equal the given value. */
  name_gte?: string | null;
  /** All values containing the given string. */
  name_contains?: string | null;
  /** All values not containing the given string. */
  name_not_contains?: string | null;
  /** All values starting with the given string. */
  name_starts_with?: string | null;
  /** All values not starting with the given string. */
  name_not_starts_with?: string | null;
  /** All values ending with the given string. */
  name_ends_with?: string | null;
  /** All values not ending with the given string. */
  name_not_ends_with?: string | null;

  secret?: string | null;
  /** All values that are not equal to given value. */
  secret_not?: string | null;
  /** All values that are contained in given list. */
  secret_in?: string[] | null;
  /** All values that are not contained in given list. */
  secret_not_in?: string[] | null;
  /** All values less than the given value. */
  secret_lt?: string | null;
  /** All values less than or equal the given value. */
  secret_lte?: string | null;
  /** All values greater than the given value. */
  secret_gt?: string | null;
  /** All values greater than or equal the given value. */
  secret_gte?: string | null;
  /** All values containing the given string. */
  secret_contains?: string | null;
  /** All values not containing the given string. */
  secret_not_contains?: string | null;
  /** All values starting with the given string. */
  secret_starts_with?: string | null;
  /** All values not starting with the given string. */
  secret_not_starts_with?: string | null;
  /** All values ending with the given string. */
  secret_ends_with?: string | null;
  /** All values not ending with the given string. */
  secret_not_ends_with?: string | null;

  size?: number | null;
  /** All values that are not equal to given value. */
  size_not?: number | null;
  /** All values that are contained in given list. */
  size_in?: number[] | null;
  /** All values that are not contained in given list. */
  size_not_in?: number[] | null;
  /** All values less than the given value. */
  size_lt?: number | null;
  /** All values less than or equal the given value. */
  size_lte?: number | null;
  /** All values greater than the given value. */
  size_gt?: number | null;
  /** All values greater than or equal the given value. */
  size_gte?: number | null;

  updatedAt?: DateTime | null;
  /** All values that are not equal to given value. */
  updatedAt_not?: DateTime | null;
  /** All values that are contained in given list. */
  updatedAt_in?: DateTime[] | null;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: DateTime[] | null;
  /** All values less than the given value. */
  updatedAt_lt?: DateTime | null;
  /** All values less than or equal the given value. */
  updatedAt_lte?: DateTime | null;
  /** All values greater than the given value. */
  updatedAt_gt?: DateTime | null;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: DateTime | null;

  url?: string | null;
  /** All values that are not equal to given value. */
  url_not?: string | null;
  /** All values that are contained in given list. */
  url_in?: string[] | null;
  /** All values that are not contained in given list. */
  url_not_in?: string[] | null;
  /** All values less than the given value. */
  url_lt?: string | null;
  /** All values less than or equal the given value. */
  url_lte?: string | null;
  /** All values greater than the given value. */
  url_gt?: string | null;
  /** All values greater than or equal the given value. */
  url_gte?: string | null;
  /** All values containing the given string. */
  url_contains?: string | null;
  /** All values not containing the given string. */
  url_not_contains?: string | null;
  /** All values starting with the given string. */
  url_starts_with?: string | null;
  /** All values not starting with the given string. */
  url_not_starts_with?: string | null;
  /** All values ending with the given string. */
  url_ends_with?: string | null;
  /** All values not ending with the given string. */
  url_not_ends_with?: string | null;
}

export interface UserSubscriptionFilter {
  /** Logical AND on all given filters. */
  AND?: UserSubscriptionFilter[] | null;
  /** Logical OR on all given filters. */
  OR?: UserSubscriptionFilter[] | null;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: _ModelMutationType[] | null;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: string | null;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: string[] | null;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: string[] | null;

  node?: UserSubscriptionFilterNode | null;
}

export interface UserSubscriptionFilterNode {
  createdAt?: DateTime | null;
  /** All values that are not equal to given value. */
  createdAt_not?: DateTime | null;
  /** All values that are contained in given list. */
  createdAt_in?: DateTime[] | null;
  /** All values that are not contained in given list. */
  createdAt_not_in?: DateTime[] | null;
  /** All values less than the given value. */
  createdAt_lt?: DateTime | null;
  /** All values less than or equal the given value. */
  createdAt_lte?: DateTime | null;
  /** All values greater than the given value. */
  createdAt_gt?: DateTime | null;
  /** All values greater than or equal the given value. */
  createdAt_gte?: DateTime | null;

  email?: string | null;
  /** All values that are not equal to given value. */
  email_not?: string | null;
  /** All values that are contained in given list. */
  email_in?: string[] | null;
  /** All values that are not contained in given list. */
  email_not_in?: string[] | null;
  /** All values less than the given value. */
  email_lt?: string | null;
  /** All values less than or equal the given value. */
  email_lte?: string | null;
  /** All values greater than the given value. */
  email_gt?: string | null;
  /** All values greater than or equal the given value. */
  email_gte?: string | null;
  /** All values containing the given string. */
  email_contains?: string | null;
  /** All values not containing the given string. */
  email_not_contains?: string | null;
  /** All values starting with the given string. */
  email_starts_with?: string | null;
  /** All values not starting with the given string. */
  email_not_starts_with?: string | null;
  /** All values ending with the given string. */
  email_ends_with?: string | null;
  /** All values not ending with the given string. */
  email_not_ends_with?: string | null;

  id?: string | null;
  /** All values that are not equal to given value. */
  id_not?: string | null;
  /** All values that are contained in given list. */
  id_in?: string[] | null;
  /** All values that are not contained in given list. */
  id_not_in?: string[] | null;
  /** All values less than the given value. */
  id_lt?: string | null;
  /** All values less than or equal the given value. */
  id_lte?: string | null;
  /** All values greater than the given value. */
  id_gt?: string | null;
  /** All values greater than or equal the given value. */
  id_gte?: string | null;
  /** All values containing the given string. */
  id_contains?: string | null;
  /** All values not containing the given string. */
  id_not_contains?: string | null;
  /** All values starting with the given string. */
  id_starts_with?: string | null;
  /** All values not starting with the given string. */
  id_not_starts_with?: string | null;
  /** All values ending with the given string. */
  id_ends_with?: string | null;
  /** All values not ending with the given string. */
  id_not_ends_with?: string | null;

  password?: string | null;
  /** All values that are not equal to given value. */
  password_not?: string | null;
  /** All values that are contained in given list. */
  password_in?: string[] | null;
  /** All values that are not contained in given list. */
  password_not_in?: string[] | null;
  /** All values less than the given value. */
  password_lt?: string | null;
  /** All values less than or equal the given value. */
  password_lte?: string | null;
  /** All values greater than the given value. */
  password_gt?: string | null;
  /** All values greater than or equal the given value. */
  password_gte?: string | null;
  /** All values containing the given string. */
  password_contains?: string | null;
  /** All values not containing the given string. */
  password_not_contains?: string | null;
  /** All values starting with the given string. */
  password_starts_with?: string | null;
  /** All values not starting with the given string. */
  password_not_starts_with?: string | null;
  /** All values ending with the given string. */
  password_ends_with?: string | null;
  /** All values not ending with the given string. */
  password_not_ends_with?: string | null;

  updatedAt?: DateTime | null;
  /** All values that are not equal to given value. */
  updatedAt_not?: DateTime | null;
  /** All values that are contained in given list. */
  updatedAt_in?: DateTime[] | null;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: DateTime[] | null;
  /** All values less than the given value. */
  updatedAt_lt?: DateTime | null;
  /** All values less than or equal the given value. */
  updatedAt_lte?: DateTime | null;
  /** All values greater than the given value. */
  updatedAt_gt?: DateTime | null;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: DateTime | null;

  username?: string | null;
  /** All values that are not equal to given value. */
  username_not?: string | null;
  /** All values that are contained in given list. */
  username_in?: string[] | null;
  /** All values that are not contained in given list. */
  username_not_in?: string[] | null;
  /** All values less than the given value. */
  username_lt?: string | null;
  /** All values less than or equal the given value. */
  username_lte?: string | null;
  /** All values greater than the given value. */
  username_gt?: string | null;
  /** All values greater than or equal the given value. */
  username_gte?: string | null;
  /** All values containing the given string. */
  username_contains?: string | null;
  /** All values not containing the given string. */
  username_not_contains?: string | null;
  /** All values starting with the given string. */
  username_starts_with?: string | null;
  /** All values not starting with the given string. */
  username_not_starts_with?: string | null;
  /** All values ending with the given string. */
  username_ends_with?: string | null;
  /** All values not ending with the given string. */
  username_not_ends_with?: string | null;

  characters_every?: CharacterFilter | null;

  characters_some?: CharacterFilter | null;

  characters_none?: CharacterFilter | null;
}

// ====================================================
// Arguments
// ====================================================

export interface AllAbilitiesQueryArgs {
  filter?: AbilityFilter | null;

  orderBy?: AbilityOrderBy | null;

  skip?: number | null;

  after?: string | null;

  before?: string | null;

  first?: number | null;

  last?: number | null;
}
export interface AllCharactersQueryArgs {
  filter?: CharacterFilter | null;

  orderBy?: CharacterOrderBy | null;

  skip?: number | null;

  after?: string | null;

  before?: string | null;

  first?: number | null;

  last?: number | null;
}
export interface AllFilesQueryArgs {
  filter?: FileFilter | null;

  orderBy?: FileOrderBy | null;

  skip?: number | null;

  after?: string | null;

  before?: string | null;

  first?: number | null;

  last?: number | null;
}
export interface AllUsersQueryArgs {
  filter?: UserFilter | null;

  orderBy?: UserOrderBy | null;

  skip?: number | null;

  after?: string | null;

  before?: string | null;

  first?: number | null;

  last?: number | null;
}
export interface _AllAbilitiesMetaQueryArgs {
  filter?: AbilityFilter | null;

  orderBy?: AbilityOrderBy | null;

  skip?: number | null;

  after?: string | null;

  before?: string | null;

  first?: number | null;

  last?: number | null;
}
export interface _AllCharactersMetaQueryArgs {
  filter?: CharacterFilter | null;

  orderBy?: CharacterOrderBy | null;

  skip?: number | null;

  after?: string | null;

  before?: string | null;

  first?: number | null;

  last?: number | null;
}
export interface _AllFilesMetaQueryArgs {
  filter?: FileFilter | null;

  orderBy?: FileOrderBy | null;

  skip?: number | null;

  after?: string | null;

  before?: string | null;

  first?: number | null;

  last?: number | null;
}
export interface _AllUsersMetaQueryArgs {
  filter?: UserFilter | null;

  orderBy?: UserOrderBy | null;

  skip?: number | null;

  after?: string | null;

  before?: string | null;

  first?: number | null;

  last?: number | null;
}
export interface AbilityQueryArgs {
  id?: string | null;
}
export interface CharacterQueryArgs {
  id?: string | null;
}
export interface FileQueryArgs {
  id?: string | null;

  secret?: string | null;

  url?: string | null;
}
export interface UserQueryArgs {
  email?: string | null;

  id?: string | null;

  username?: string | null;
}
export interface NodeQueryArgs {
  /** The ID of an object */
  id: string;
}
export interface CharacterAbilityArgs {
  filter?: CharacterFilter | null;
}
export interface AbilitiesCharacterArgs {
  filter?: AbilityFilter | null;

  orderBy?: AbilityOrderBy | null;

  skip?: number | null;

  after?: string | null;

  before?: string | null;

  first?: number | null;

  last?: number | null;
}
export interface PlayerCharacterArgs {
  filter?: UserFilter | null;
}
export interface _AbilitiesMetaCharacterArgs {
  filter?: AbilityFilter | null;

  orderBy?: AbilityOrderBy | null;

  skip?: number | null;

  after?: string | null;

  before?: string | null;

  first?: number | null;

  last?: number | null;
}
export interface CharactersUserArgs {
  filter?: CharacterFilter | null;

  orderBy?: CharacterOrderBy | null;

  skip?: number | null;

  after?: string | null;

  before?: string | null;

  first?: number | null;

  last?: number | null;
}
export interface _CharactersMetaUserArgs {
  filter?: CharacterFilter | null;

  orderBy?: CharacterOrderBy | null;

  skip?: number | null;

  after?: string | null;

  before?: string | null;

  first?: number | null;

  last?: number | null;
}
export interface CreateAbilityMutationArgs {
  abbr: AbilityAbbr;

  baseScore: number;

  levelMod: number;

  magicMod: number;

  name: AbilityName;

  proficient?: boolean | null;

  raceMod: number;

  roll1?: number | null;

  roll2?: number | null;

  roll3?: number | null;

  characterId?: string | null;

  character?: AbilitycharacterCharacter | null;
}
export interface CreateCharacterMutationArgs {
  playerId?: string | null;

  abilitiesIds?: string[] | null;

  abilities?: CharacterabilitiesAbility[] | null;
}
export interface CreateFileMutationArgs {
  name: string;
}
export interface UpdateAbilityMutationArgs {
  abbr?: AbilityAbbr | null;

  baseScore?: number | null;

  id: string;

  levelMod?: number | null;

  magicMod?: number | null;

  name?: AbilityName | null;

  proficient?: boolean | null;

  raceMod?: number | null;

  roll1?: number | null;

  roll2?: number | null;

  roll3?: number | null;

  characterId?: string | null;

  character?: AbilitycharacterCharacter | null;
}
export interface UpdateCharacterMutationArgs {
  id: string;

  playerId?: string | null;

  abilitiesIds?: string[] | null;

  abilities?: CharacterabilitiesAbility[] | null;
}
export interface UpdateFileMutationArgs {
  id: string;

  name?: string | null;
}
export interface UpdateUserMutationArgs {
  id: string;

  username?: string | null;

  charactersIds?: string[] | null;

  characters?: UsercharactersCharacter[] | null;
}
export interface UpdateOrCreateAbilityMutationArgs {
  update: UpdateAbility;

  create: CreateAbility;
}
export interface UpdateOrCreateCharacterMutationArgs {
  update: UpdateCharacter;

  create: CreateCharacter;
}
export interface UpdateOrCreateFileMutationArgs {
  update: UpdateFile;

  create: CreateFile;
}
export interface UpdateOrCreateUserMutationArgs {
  update: UpdateUser;

  create: CreateUser;
}
export interface DeleteAbilityMutationArgs {
  id: string;
}
export interface DeleteCharacterMutationArgs {
  id: string;
}
export interface DeleteFileMutationArgs {
  id: string;
}
export interface DeleteUserMutationArgs {
  id: string;
}
export interface AddToCharacterAbilitiesMutationArgs {
  abilitiesAbilityId: string;

  characterCharacterId: string;
}
export interface AddToUserCharactersMutationArgs {
  charactersCharacterId: string;

  playerUserId: string;
}
export interface RemoveFromUserCharactersMutationArgs {
  charactersCharacterId: string;

  playerUserId: string;
}
export interface SigninUserMutationArgs {
  email?: AuthProviderEmail | null;
}
export interface CreateUserMutationArgs {
  username: string;

  charactersIds?: string[] | null;

  characters?: UsercharactersCharacter[] | null;

  authProvider: AuthProviderSignupData;
}
export interface InvokeFunctionMutationArgs {
  input: InvokeFunctionInput;
}
export interface AbilitySubscriptionArgs {
  filter?: AbilitySubscriptionFilter | null;
}
export interface CharacterSubscriptionArgs {
  filter?: CharacterSubscriptionFilter | null;
}
export interface FileSubscriptionArgs {
  filter?: FileSubscriptionFilter | null;
}
export interface UserSubscriptionArgs {
  filter?: UserSubscriptionFilter | null;
}

// ====================================================
// Enums
// ====================================================

export enum AbilityAbbr {
  Str = "Str",
  Dex = "Dex",
  Con = "Con",
  Wis = "Wis",
  Int = "Int",
  Cha = "Cha"
}

export enum AbilityName {
  Strength = "Strength",
  Dexterity = "Dexterity",
  Constitution = "Constitution",
  Wisdom = "Wisdom",
  Intelligence = "Intelligence",
  Charisma = "Charisma"
}

export enum AbilityOrderBy {
  abbr_ASC = "abbr_ASC",
  abbr_DESC = "abbr_DESC",
  baseScore_ASC = "baseScore_ASC",
  baseScore_DESC = "baseScore_DESC",
  id_ASC = "id_ASC",
  id_DESC = "id_DESC",
  levelMod_ASC = "levelMod_ASC",
  levelMod_DESC = "levelMod_DESC",
  magicMod_ASC = "magicMod_ASC",
  magicMod_DESC = "magicMod_DESC",
  name_ASC = "name_ASC",
  name_DESC = "name_DESC",
  proficient_ASC = "proficient_ASC",
  proficient_DESC = "proficient_DESC",
  raceMod_ASC = "raceMod_ASC",
  raceMod_DESC = "raceMod_DESC",
  roll1_ASC = "roll1_ASC",
  roll1_DESC = "roll1_DESC",
  roll2_ASC = "roll2_ASC",
  roll2_DESC = "roll2_DESC",
  roll3_ASC = "roll3_ASC",
  roll3_DESC = "roll3_DESC"
}

export enum CharacterOrderBy {
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",
  id_ASC = "id_ASC",
  id_DESC = "id_DESC",
  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC"
}

export enum FileOrderBy {
  contentType_ASC = "contentType_ASC",
  contentType_DESC = "contentType_DESC",
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",
  id_ASC = "id_ASC",
  id_DESC = "id_DESC",
  name_ASC = "name_ASC",
  name_DESC = "name_DESC",
  secret_ASC = "secret_ASC",
  secret_DESC = "secret_DESC",
  size_ASC = "size_ASC",
  size_DESC = "size_DESC",
  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",
  url_ASC = "url_ASC",
  url_DESC = "url_DESC"
}

export enum UserOrderBy {
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",
  email_ASC = "email_ASC",
  email_DESC = "email_DESC",
  id_ASC = "id_ASC",
  id_DESC = "id_DESC",
  password_ASC = "password_ASC",
  password_DESC = "password_DESC",
  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",
  username_ASC = "username_ASC",
  username_DESC = "username_DESC"
}

export enum _ModelMutationType {
  CREATED = "CREATED",
  UPDATED = "UPDATED",
  DELETED = "DELETED"
}

// ====================================================
// END: Typescript template
// ====================================================
