import { Secret } from './secret.scalar';

export interface UserPasswordWhereArgs {
  eq?: Secret | null; /* Equal to. This takes a higher precedence than the other operators. */
  ne?: Secret | null; /* Not equal to. */
  gt?: Secret | null; /* Greater than. */
  gte?: Secret | null; /* Greater than or equal to. */
  lt?: Secret | null; /* Less than. */
  lte?: Secret | null; /* Less than or equal to. */
  between?: Secret[] | null; /* A two element tuple describing a range of values. */
  notBetween?: Secret[] | null; /* A two element tuple describing an excluded range of values. */
  in?: Secret[] | null; /* A list of values to include. */
  notIn?: Secret[] | null; /* A list of values to exclude. */
  like?: string | null; /* A pattern to match for likeness. */
  notLike?: string | null; /* A pattern to match for likeness and exclude. */
  isNull?: boolean | null; /* Filters for null values. This takes precedence after &#x27;eq&#x27; but before all other fields */
}

