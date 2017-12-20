
export interface UserUsernameWhereArgs {
  eq?: string | null; /* Equal to. This takes a higher precedence than the other operators. */
  ne?: string | null; /* Not equal to. */
  gt?: string | null; /* Greater than. */
  gte?: string | null; /* Greater than or equal to. */
  lt?: string | null; /* Less than. */
  lte?: string | null; /* Less than or equal to. */
  between?: string[] | null; /* A two element tuple describing a range of values. */
  notBetween?: string[] | null; /* A two element tuple describing an excluded range of values. */
  in?: string[] | null; /* A list of values to include. */
  notIn?: string[] | null; /* A list of values to exclude. */
  like?: string | null; /* A pattern to match for likeness. */
  notLike?: string | null; /* A pattern to match for likeness and exclude. */
  isNull?: boolean | null; /* Filters for null values. This takes precedence after &#x27;eq&#x27; but before all other fields */
}

