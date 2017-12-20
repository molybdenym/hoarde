import { DateTime } from './datetime.scalar';

export interface PcCreatedAtWhereArgs {
  eq?: DateTime | null; /* Equal to. This takes a higher precedence than the other operators. */
  ne?: DateTime | null; /* Not equal to. */
  gt?: DateTime | null; /* Greater than. */
  gte?: DateTime | null; /* Greater than or equal to. */
  lt?: DateTime | null; /* Less than. */
  lte?: DateTime | null; /* Less than or equal to. */
  between?: DateTime[] | null; /* A two element tuple describing a range of values. */
  notBetween?: DateTime[] | null; /* A two element tuple describing an excluded range of values. */
  in?: DateTime[] | null; /* A list of values to include. */
  notIn?: DateTime[] | null; /* A list of values to exclude. */
  like?: string | null; /* A pattern to match for likeness. */
  notLike?: string | null; /* A pattern to match for likeness and exclude. */
  isNull?: boolean | null; /* Filters for null values. This takes precedence after &#x27;eq&#x27; but before all other fields */
}

