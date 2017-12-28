
export interface FileIdWhereArgs {
  eq?: string | null; /* Equal to. This takes a higher precedence than the other operators. */
  ne?: string | null; /* Not equal to. */
  in?: string[] | null; /* A list of values to include. */
  notIn?: string[] | null; /* A list of values to exclude. */
  isNull?: boolean | null; /* Filters for null values. This takes precedence after &#x27;eq&#x27; but before all other fields */
}

