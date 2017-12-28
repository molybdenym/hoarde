import { AccessLevel } from './accesslevel.enum';

export interface UserRolesAccessLevelWhereArgs {
  eq?: AccessLevel | null; /* Equal to. This takes a higher precedence than the other operators. */
  ne?: AccessLevel | null; /* Not equal to. */
  gt?: AccessLevel | null; /* Greater than. */
  gte?: AccessLevel | null; /* Greater than or equal to. */
  lt?: AccessLevel | null; /* Less than. */
  lte?: AccessLevel | null; /* Less than or equal to. */
  between?: AccessLevel[] | null; /* A two element tuple describing a range of values. */
  notBetween?: AccessLevel[] | null; /* A two element tuple describing an excluded range of values. */
  in?: AccessLevel[] | null; /* A list of values to include. */
  notIn?: AccessLevel[] | null; /* A list of values to exclude. */
  like?: string | null; /* A pattern to match for likeness. */
  notLike?: string | null; /* A pattern to match for likeness and exclude. */
  isNull?: boolean | null; /* Filters for null values. This takes precedence after &#x27;eq&#x27; but before all other fields */
}

