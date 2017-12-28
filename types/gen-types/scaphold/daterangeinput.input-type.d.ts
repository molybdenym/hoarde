/* A range aggregation that is dedicated for date values.The main difference between this aggregation and the normal rangeaggregation is that the from and to values can be expressed in DateMath expressions, and it is also possible to specify a date formatby which the from and to response fields will be returned. Notethat this aggregation includes the from value and excludes theto value for each range */
export interface DateRangeInput {
  from?: string | null; /* E.G. { &quot;from&quot;: &quot;now-10M/M&quot; } means &#x27;&gt;&#x3D; now minus 10 months, rounded down to the start of the month.&#x27; */
  to?: string | null; /* E.G. { &quot;to&quot;: &quot;now-10M/M&quot; } means &#x27;&lt; now minus 10 months, rounded down to the start of the month.&#x27; */
}

