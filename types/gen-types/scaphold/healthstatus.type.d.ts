
export interface HealthStatus {
  healthy: boolean; /* Returns &#x60;true&#x60; for healthy and &#x60;false&#x60; for unhealthy. */
  message?: string | null; /* Additional information about the health of the API. */
}

