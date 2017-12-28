/* PageInfo must contain fields hasPreviousPage and hasNextPage,both of which return non‐null booleans. */
export interface PageInfo {
  hasNextPage: boolean; /* hasNextPage will be false if the client is not paginating with first,or if the client is paginating with first, and the server has determinedthat the client has reached the end of the set of edges defined by theircursors. */
  hasPreviousPage: boolean; /* hasPreviousPage will be false if the client is not paginating with last,or if the client is paginating with last, and the server has determinedthat the client has reached the end of the set of edges defined by theircursors. */
}

