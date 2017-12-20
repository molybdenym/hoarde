
export interface PcPlayerIdSubscriptionFilters {
  eq?: string | null; /* Equal to. This takes a higher precedence than the other operators. */
  in?: string[] | null; /* A list of values to include. */
  notIn?: string[] | null; /* A list of values to exclude. */
}

