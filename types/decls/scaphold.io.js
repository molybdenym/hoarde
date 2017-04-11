declare type Query =  {
      node: ?Node;
      getRole: ?Role;
      getFile: ?File;
      getPc: ?PC;
      getUser: ?User;
      viewer: ?Viewer;
      checkHealth: ?HealthStatus;
      searchRequestLogs: ?RequestLogSearchResults;
}

declare type NodeQuery =  {
      id: string;
}

declare type GetRoleQuery =  {
      id: string;
}

declare type GetFileQuery =  {
      id: string;
}

declare type GetPcQuery =  {
      id: string;
}

declare type GetUserQuery =  {
      id: string;
}

declare type Node =  {
      id: string;
}

declare type Role = Node & Timestamped &  {
      members: ?RoleMembersConnection;
      name: string;
      id: string;
      createdAt: DateTime;
      modifiedAt: DateTime;
}

declare type MembersRole =  {
      where: ?UserWhereArgs;
      orderBy: ?Array<UserOrderByArgs>;
      first: ?number;
      after: ?string;
      last: ?number;
      before: ?string;
}

declare type Timestamped =  {
      createdAt: DateTime;
      modifiedAt: DateTime;
}

declare type DateTime = any;

declare type UserWhereArgs =  {
      roles: ?UserRolesWhereArgs;
      password: ?UserPasswordWhereArgs;
      modifiedAt: ?UserModifiedAtWhereArgs;
      id: ?UserIdWhereArgs;
      createdAt: ?UserCreatedAtWhereArgs;
      lastLogin: ?UserLastLoginWhereArgs;
      username: ?UserUsernameWhereArgs;
      playerCharacters: ?PcWhereArgs;
      OR: ?Array<UserWhereArgs>;
      AND: ?Array<UserWhereArgs>;
}

declare type UserRolesWhereArgs =  {
      edge: ?UserRolesEdgeWhereArgs;
      node: ?RoleWhereArgs;
}

declare type UserRolesEdgeWhereArgs =  {
      accessLevel: ?UserRolesAccessLevelWhereArgs;
      modifiedAt: ?UserRolesModifiedAtWhereArgs;
      createdAt: ?UserRolesCreatedAtWhereArgs;
}

declare type UserRolesAccessLevelWhereArgs =  {
      eq: ?AccessLevel;
      ne: ?AccessLevel;
      gt: ?AccessLevel;
      gte: ?AccessLevel;
      lt: ?AccessLevel;
      lte: ?AccessLevel;
      between: ?Array<AccessLevel>;
      notBetween: ?Array<AccessLevel>;
      in: ?Array<AccessLevel>;
      notIn: ?Array<AccessLevel>;
      like: ?string;
      notLike: ?string;
      isNull: ?bool;
}

declare type AccessLevel = "admin" | "readwrite" | "readonly";

declare type UserRolesModifiedAtWhereArgs =  {
      eq: ?DateTime;
      ne: ?DateTime;
      gt: ?DateTime;
      gte: ?DateTime;
      lt: ?DateTime;
      lte: ?DateTime;
      between: ?Array<DateTime>;
      notBetween: ?Array<DateTime>;
      in: ?Array<DateTime>;
      notIn: ?Array<DateTime>;
      like: ?string;
      notLike: ?string;
      isNull: ?bool;
}

declare type UserRolesCreatedAtWhereArgs =  {
      eq: ?DateTime;
      ne: ?DateTime;
      gt: ?DateTime;
      gte: ?DateTime;
      lt: ?DateTime;
      lte: ?DateTime;
      between: ?Array<DateTime>;
      notBetween: ?Array<DateTime>;
      in: ?Array<DateTime>;
      notIn: ?Array<DateTime>;
      like: ?string;
      notLike: ?string;
      isNull: ?bool;
}

declare type RoleWhereArgs =  {
      members: ?RoleMembersWhereArgs;
      name: ?RoleNameWhereArgs;
      id: ?RoleIdWhereArgs;
      createdAt: ?RoleCreatedAtWhereArgs;
      modifiedAt: ?RoleModifiedAtWhereArgs;
      OR: ?Array<RoleWhereArgs>;
      AND: ?Array<RoleWhereArgs>;
}

declare type RoleMembersWhereArgs =  {
      edge: ?UserRolesEdgeWhereArgs;
      node: ?UserWhereArgs;
}

declare type RoleNameWhereArgs =  {
      eq: ?string;
      ne: ?string;
      gt: ?string;
      gte: ?string;
      lt: ?string;
      lte: ?string;
      between: ?Array<string>;
      notBetween: ?Array<string>;
      in: ?Array<string>;
      notIn: ?Array<string>;
      like: ?string;
      notLike: ?string;
      isNull: ?bool;
}

declare type RoleIdWhereArgs =  {
      eq: ?string;
      ne: ?string;
      in: ?Array<string>;
      notIn: ?Array<string>;
      isNull: ?bool;
}

declare type RoleCreatedAtWhereArgs =  {
      eq: ?DateTime;
      ne: ?DateTime;
      gt: ?DateTime;
      gte: ?DateTime;
      lt: ?DateTime;
      lte: ?DateTime;
      between: ?Array<DateTime>;
      notBetween: ?Array<DateTime>;
      in: ?Array<DateTime>;
      notIn: ?Array<DateTime>;
      like: ?string;
      notLike: ?string;
      isNull: ?bool;
}

declare type RoleModifiedAtWhereArgs =  {
      eq: ?DateTime;
      ne: ?DateTime;
      gt: ?DateTime;
      gte: ?DateTime;
      lt: ?DateTime;
      lte: ?DateTime;
      between: ?Array<DateTime>;
      notBetween: ?Array<DateTime>;
      in: ?Array<DateTime>;
      notIn: ?Array<DateTime>;
      like: ?string;
      notLike: ?string;
      isNull: ?bool;
}

declare type UserPasswordWhereArgs =  {
      eq: ?Secret;
      ne: ?Secret;
      gt: ?Secret;
      gte: ?Secret;
      lt: ?Secret;
      lte: ?Secret;
      between: ?Array<Secret>;
      notBetween: ?Array<Secret>;
      in: ?Array<Secret>;
      notIn: ?Array<Secret>;
      like: ?string;
      notLike: ?string;
      isNull: ?bool;
}

declare type Secret = any;

declare type UserModifiedAtWhereArgs =  {
      eq: ?DateTime;
      ne: ?DateTime;
      gt: ?DateTime;
      gte: ?DateTime;
      lt: ?DateTime;
      lte: ?DateTime;
      between: ?Array<DateTime>;
      notBetween: ?Array<DateTime>;
      in: ?Array<DateTime>;
      notIn: ?Array<DateTime>;
      like: ?string;
      notLike: ?string;
      isNull: ?bool;
}

declare type UserIdWhereArgs =  {
      eq: ?string;
      ne: ?string;
      in: ?Array<string>;
      notIn: ?Array<string>;
      isNull: ?bool;
}

declare type UserCreatedAtWhereArgs =  {
      eq: ?DateTime;
      ne: ?DateTime;
      gt: ?DateTime;
      gte: ?DateTime;
      lt: ?DateTime;
      lte: ?DateTime;
      between: ?Array<DateTime>;
      notBetween: ?Array<DateTime>;
      in: ?Array<DateTime>;
      notIn: ?Array<DateTime>;
      like: ?string;
      notLike: ?string;
      isNull: ?bool;
}

declare type UserLastLoginWhereArgs =  {
      eq: ?DateTime;
      ne: ?DateTime;
      gt: ?DateTime;
      gte: ?DateTime;
      lt: ?DateTime;
      lte: ?DateTime;
      between: ?Array<DateTime>;
      notBetween: ?Array<DateTime>;
      in: ?Array<DateTime>;
      notIn: ?Array<DateTime>;
      like: ?string;
      notLike: ?string;
      isNull: ?bool;
}

declare type UserUsernameWhereArgs =  {
      eq: ?string;
      ne: ?string;
      gt: ?string;
      gte: ?string;
      lt: ?string;
      lte: ?string;
      between: ?Array<string>;
      notBetween: ?Array<string>;
      in: ?Array<string>;
      notIn: ?Array<string>;
      like: ?string;
      notLike: ?string;
      isNull: ?bool;
}

declare type PcWhereArgs =  {
      id: ?PcIdWhereArgs;
      modifiedAt: ?PcModifiedAtWhereArgs;
      player: ?UserWhereArgs;
      createdAt: ?PcCreatedAtWhereArgs;
      playerId: ?PcPlayerIdWhereArgs;
      OR: ?Array<PcWhereArgs>;
      AND: ?Array<PcWhereArgs>;
}

declare type PcIdWhereArgs =  {
      eq: ?string;
      ne: ?string;
      in: ?Array<string>;
      notIn: ?Array<string>;
      isNull: ?bool;
}

declare type PcModifiedAtWhereArgs =  {
      eq: ?DateTime;
      ne: ?DateTime;
      gt: ?DateTime;
      gte: ?DateTime;
      lt: ?DateTime;
      lte: ?DateTime;
      between: ?Array<DateTime>;
      notBetween: ?Array<DateTime>;
      in: ?Array<DateTime>;
      notIn: ?Array<DateTime>;
      like: ?string;
      notLike: ?string;
      isNull: ?bool;
}

declare type PcCreatedAtWhereArgs =  {
      eq: ?DateTime;
      ne: ?DateTime;
      gt: ?DateTime;
      gte: ?DateTime;
      lt: ?DateTime;
      lte: ?DateTime;
      between: ?Array<DateTime>;
      notBetween: ?Array<DateTime>;
      in: ?Array<DateTime>;
      notIn: ?Array<DateTime>;
      like: ?string;
      notLike: ?string;
      isNull: ?bool;
}

declare type PcPlayerIdWhereArgs =  {
      eq: ?string;
      ne: ?string;
      in: ?Array<string>;
      notIn: ?Array<string>;
      isNull: ?bool;
}

declare type UserOrderByArgs =  {
      field: ?UserOrderByField;
      direction: ?OrderByDirection;
}

declare type UserOrderByField = "password" | "modifiedAt" | "id" | "createdAt" | "lastLogin" | "username";

declare type OrderByDirection = "ASC" | "DESC";

declare type RoleMembersConnection =  {
      edges: ?Array<RoleMembersEdge>;
      pageInfo: PageInfo;
      aggregations: ?UserAggregations;
}

declare type RoleMembersEdge =  {
      node: User;
      cursor: string;
      accessLevel: AccessLevel;
      modifiedAt: DateTime;
      createdAt: DateTime;
}

declare type User = Node & Timestamped &  {
      roles: ?UserRolesConnection;
      modifiedAt: DateTime;
      id: string;
      createdAt: DateTime;
      lastLogin: DateTime;
      username: string;
      playerCharacters: ?PcConnection;
}

declare type RolesUser =  {
      where: ?RoleWhereArgs;
      orderBy: ?Array<RoleOrderByArgs>;
      first: ?number;
      after: ?string;
      last: ?number;
      before: ?string;
}

declare type PlayerCharactersUser =  {
      where: ?PcWhereArgs;
      orderBy: ?Array<PcOrderByArgs>;
      first: ?number;
      after: ?string;
      last: ?number;
      before: ?string;
}

declare type RoleOrderByArgs =  {
      field: ?RoleOrderByField;
      direction: ?OrderByDirection;
}

declare type RoleOrderByField = "name" | "id" | "createdAt" | "modifiedAt";

declare type UserRolesConnection =  {
      edges: ?Array<UserRolesEdge>;
      pageInfo: PageInfo;
      aggregations: ?RoleAggregations;
}

declare type UserRolesEdge =  {
      node: Role;
      cursor: string;
      accessLevel: AccessLevel;
      modifiedAt: DateTime;
      createdAt: DateTime;
}

declare type PageInfo =  {
      hasNextPage: bool;
      hasPreviousPage: bool;
}

declare type RoleAggregations =  {
      count: ?number;
      min: ?RoleAggregationsMin;
      max: ?RoleAggregationsMax;
}

declare type RoleAggregationsMin =  {
      name: ?string;
      createdAt: ?DateTime;
      modifiedAt: ?DateTime;
}

declare type RoleAggregationsMax =  {
      name: ?string;
      createdAt: ?DateTime;
      modifiedAt: ?DateTime;
}

declare type PcOrderByArgs =  {
      field: ?PcOrderByField;
      direction: ?OrderByDirection;
}

declare type PcOrderByField = "id" | "modifiedAt" | "createdAt";

declare type PcConnection =  {
      edges: ?Array<PcEdge>;
      pageInfo: PageInfo;
      aggregations: ?PcAggregations;
}

declare type PcEdge =  {
      node: PC;
      cursor: string;
}

declare type PC = Node & Timestamped &  {
      id: string;
      modifiedAt: DateTime;
      player: ?User;
      createdAt: DateTime;
      abilities: ?Array<Ability>;
}

declare type Ability =  {
      raceMod: number;
      roll2: ?number;
      baseScore: ?number;
      levelMod: number;
      roll3: ?number;
      roll1: ?number;
      proficient: ?bool;
      magicMod: number;
      abbr: string;
}

declare type PcAggregations =  {
      count: ?number;
      min: ?PcAggregationsMin;
      max: ?PcAggregationsMax;
}

declare type PcAggregationsMin =  {
      modifiedAt: ?DateTime;
      createdAt: ?DateTime;
}

declare type PcAggregationsMax =  {
      modifiedAt: ?DateTime;
      createdAt: ?DateTime;
}

declare type UserAggregations =  {
      count: ?number;
      min: ?UserAggregationsMin;
      max: ?UserAggregationsMax;
}

declare type UserAggregationsMin =  {
      modifiedAt: ?DateTime;
      createdAt: ?DateTime;
      lastLogin: ?DateTime;
      username: ?string;
}

declare type UserAggregationsMax =  {
      modifiedAt: ?DateTime;
      createdAt: ?DateTime;
      lastLogin: ?DateTime;
      username: ?string;
}

declare type File = Node & Timestamped & Blob &  {
      createdAt: DateTime;
      id: string;
      blobMimeType: ?string;
      modifiedAt: DateTime;
      blobUrl: ?string;
      name: ?string;
}

declare type Blob =  {
      blobMimeType: ?string;
      blobUrl: ?string;
}

declare type Viewer = Node &  {
      id: string;
      allRoles: ?RoleConnection;
      allFiles: ?FileConnection;
      allPcs: ?PcConnection;
      allUsers: ?UserConnection;
      user: ?User;
}

declare type AllRolesViewer =  {
      where: ?RoleWhereArgs;
      orderBy: ?Array<RoleOrderByArgs>;
      first: ?number;
      after: ?string;
      last: ?number;
      before: ?string;
}

declare type AllFilesViewer =  {
      where: ?FileWhereArgs;
      orderBy: ?Array<FileOrderByArgs>;
      first: ?number;
      after: ?string;
      last: ?number;
      before: ?string;
}

declare type AllPcsViewer =  {
      where: ?PcWhereArgs;
      orderBy: ?Array<PcOrderByArgs>;
      first: ?number;
      after: ?string;
      last: ?number;
      before: ?string;
}

declare type AllUsersViewer =  {
      where: ?UserWhereArgs;
      orderBy: ?Array<UserOrderByArgs>;
      first: ?number;
      after: ?string;
      last: ?number;
      before: ?string;
}

declare type RoleConnection =  {
      edges: ?Array<RoleEdge>;
      pageInfo: PageInfo;
      aggregations: ?RoleAggregations;
}

declare type RoleEdge =  {
      node: Role;
      cursor: string;
}

declare type FileWhereArgs =  {
      createdAt: ?FileCreatedAtWhereArgs;
      id: ?FileIdWhereArgs;
      blobMimeType: ?FileBlobMimeTypeWhereArgs;
      modifiedAt: ?FileModifiedAtWhereArgs;
      blobUrl: ?FileBlobUrlWhereArgs;
      name: ?FileNameWhereArgs;
      OR: ?Array<FileWhereArgs>;
      AND: ?Array<FileWhereArgs>;
}

declare type FileCreatedAtWhereArgs =  {
      eq: ?DateTime;
      ne: ?DateTime;
      gt: ?DateTime;
      gte: ?DateTime;
      lt: ?DateTime;
      lte: ?DateTime;
      between: ?Array<DateTime>;
      notBetween: ?Array<DateTime>;
      in: ?Array<DateTime>;
      notIn: ?Array<DateTime>;
      like: ?string;
      notLike: ?string;
      isNull: ?bool;
}

declare type FileIdWhereArgs =  {
      eq: ?string;
      ne: ?string;
      in: ?Array<string>;
      notIn: ?Array<string>;
      isNull: ?bool;
}

declare type FileBlobMimeTypeWhereArgs =  {
      eq: ?string;
      ne: ?string;
      gt: ?string;
      gte: ?string;
      lt: ?string;
      lte: ?string;
      between: ?Array<string>;
      notBetween: ?Array<string>;
      in: ?Array<string>;
      notIn: ?Array<string>;
      like: ?string;
      notLike: ?string;
      isNull: ?bool;
}

declare type FileModifiedAtWhereArgs =  {
      eq: ?DateTime;
      ne: ?DateTime;
      gt: ?DateTime;
      gte: ?DateTime;
      lt: ?DateTime;
      lte: ?DateTime;
      between: ?Array<DateTime>;
      notBetween: ?Array<DateTime>;
      in: ?Array<DateTime>;
      notIn: ?Array<DateTime>;
      like: ?string;
      notLike: ?string;
      isNull: ?bool;
}

declare type FileBlobUrlWhereArgs =  {
      eq: ?string;
      ne: ?string;
      gt: ?string;
      gte: ?string;
      lt: ?string;
      lte: ?string;
      between: ?Array<string>;
      notBetween: ?Array<string>;
      in: ?Array<string>;
      notIn: ?Array<string>;
      like: ?string;
      notLike: ?string;
      isNull: ?bool;
}

declare type FileNameWhereArgs =  {
      eq: ?string;
      ne: ?string;
      gt: ?string;
      gte: ?string;
      lt: ?string;
      lte: ?string;
      between: ?Array<string>;
      notBetween: ?Array<string>;
      in: ?Array<string>;
      notIn: ?Array<string>;
      like: ?string;
      notLike: ?string;
      isNull: ?bool;
}

declare type FileOrderByArgs =  {
      field: ?FileOrderByField;
      direction: ?OrderByDirection;
}

declare type FileOrderByField = "createdAt" | "id" | "blobMimeType" | "modifiedAt" | "blobUrl" | "name";

declare type FileConnection =  {
      edges: ?Array<FileEdge>;
      pageInfo: PageInfo;
      aggregations: ?FileAggregations;
}

declare type FileEdge =  {
      node: File;
      cursor: string;
}

declare type FileAggregations =  {
      count: ?number;
      min: ?FileAggregationsMin;
      max: ?FileAggregationsMax;
}

declare type FileAggregationsMin =  {
      createdAt: ?DateTime;
      modifiedAt: ?DateTime;
      blobMimeType: ?string;
      blobUrl: ?string;
      name: ?string;
}

declare type FileAggregationsMax =  {
      createdAt: ?DateTime;
      modifiedAt: ?DateTime;
      blobMimeType: ?string;
      blobUrl: ?string;
      name: ?string;
}

declare type UserConnection =  {
      edges: ?Array<UserEdge>;
      pageInfo: PageInfo;
      aggregations: ?UserAggregations;
}

declare type UserEdge =  {
      node: User;
      cursor: string;
}

declare type HealthStatus =  {
      healthy: bool;
      message: ?string;
}

declare type RequestLogSearchResults =  {
      edges: ?Array<RequestLogEdge>;
      aggregations: ?RequestLogAggregationSet;
      took: ?number;
}

declare type EdgesRequestLogSearchResults =  {
      q: ?string;
      first: ?number;
      after: ?string;
}

declare type RequestLogEdge =  {
      node: RequestLog;
      cursor: string;
}

declare type RequestLog = Node &  {
      id: string;
      username: ?string;
      isAdmin: ?bool;
      isBillable: ?bool;
      start: ?DateTime;
      duration: ?number;
      responseSizeBytes: ?number;
      requestMethod: ?string;
      status: ?string;
      errors: ?Array<string>;
      resolvers: ?Array<ResolverLog>;
      createdAt: DateTime;
}

declare type ResolverLog =  {
      parentType: ?string;
      returnType: ?string;
      parsedReturnType: ?string;
      fieldName: ?string;
      operation: ?string;
      start: ?DateTime;
      minDuration: ?number;
      maxDuration: ?number;
      avgDuration: ?number;
      totalDuration: ?number;
      count: ?number;
      path: ?Array<string>;
      statuses: ?string;
      errors: ?string;
}

declare type RequestLogAggregationSet =  {
      avg: ?MetricAggregationResult;
      cardinality: ?MetricAggregationResult;
      max: ?MetricAggregationResult;
      min: ?MetricAggregationResult;
      percentiles: ?MetricAggregationResult;
      stats: ?StatsAggregationResult;
      sum: ?MetricAggregationResult;
      value_count: ?MetricAggregationResult;
      date_range: ?RequestLogBucketAggregation;
      date_histogram: ?RequestLogBucketAggregation;
      terms: ?RequestLogBucketAggregation;
      filter: ?RequestLogFilterAggregation;
      resolvers: ?NestedResolverLogAggregation;
}

declare type AvgRequestLogAggregationSet =  {
      field: ?RequestLogNumericField;
}

declare type CardinalityRequestLogAggregationSet =  {
      field: ?RequestLogField;
      precision_threshhold: ?number;
}

declare type MaxRequestLogAggregationSet =  {
      field: ?RequestLogNumericField;
}

declare type MinRequestLogAggregationSet =  {
      field: ?RequestLogNumericField;
}

declare type PercentilesRequestLogAggregationSet =  {
      field: ?RequestLogNumericField;
}

declare type StatsRequestLogAggregationSet =  {
      field: ?RequestLogNumericField;
}

declare type SumRequestLogAggregationSet =  {
      field: ?RequestLogNumericField;
}

declare type ValueCountRequestLogAggregationSet =  {
      field: ?RequestLogNumericField;
}

declare type DateRangeRequestLogAggregationSet =  {
      field: ?RequestLogDateTimeField;
      format: ?string;
      ranges: Array<DateRangeInput>;
}

declare type DateHistogramRequestLogAggregationSet =  {
      field: ?RequestLogDateTimeField;
      interval: ?string;
      format: ?string;
      time_zone: ?string;
      missing: ?string;
}

declare type TermsRequestLogAggregationSet =  {
      field: ?RequestLogStringField;
      size: ?number;
      missing: ?string;
}

declare type FilterRequestLogAggregationSet =  {
      term: ?RequestLogTermFilter;
}

declare type RequestLogNumericField = "duration" | "responseSizeBytes";

declare type MetricAggregationResult =  {
      value: ?AnyObject;
      value_as_string: ?string;
}

declare type AnyObject = any;

declare type RequestLogField = "appId" | "userId" | "isAdmin" | "username" | "isBillable" | "status" | "logType" | "start" | "createdAt" | "duration" | "durationHr" | "responseSizeBytes" | "requestMethod" | "originalUrl" | "errors" | "resolvers";

declare type StatsAggregationResult =  {
      count: ?number;
      min: ?number;
      max: ?number;
      avg: ?number;
      sum: ?number;
}

declare type RequestLogDateTimeField = "createdAt";

declare type DateRangeInput =  {
      from: ?string;
      to: ?string;
}

declare type RequestLogBucketAggregation =  {
      buckets: ?Array<RequestLogAggregationBucket>;
}

declare type RequestLogAggregationBucket =  {
      doc_count: ?number;
      key: ?AnyObject;
      key_as_string: ?string;
      aggregations: ?RequestLogAggregationSet;
}

declare type RequestLogStringField = "appId" | "userId" | "username" | "status" | "logType" | "requestMethod" | "originalUrl" | "errors";

declare type RequestLogTermFilter =  {
      appId: ?string;
      userId: ?string;
      username: ?string;
      status: ?string;
      logType: ?string;
      requestMethod: ?string;
      originalUrl: ?string;
      errors: ?string;
      isAdmin: ?bool;
      isBillable: ?bool;
      duration: ?number;
      responseSizeBytes: ?number;
}

declare type RequestLogFilterAggregation =  {
      doc_count: ?number;
      aggregations: ?RequestLogAggregationSet;
}

declare type NestedResolverLogAggregation =  {
      doc_count: ?number;
      aggregations: ?ResolverLogAggregationSet;
}

declare type ResolverLogAggregationSet =  {
      avg: ?MetricAggregationResult;
      cardinality: ?MetricAggregationResult;
      max: ?MetricAggregationResult;
      min: ?MetricAggregationResult;
      percentiles: ?MetricAggregationResult;
      stats: ?StatsAggregationResult;
      sum: ?MetricAggregationResult;
      value_count: ?MetricAggregationResult;
      date_range: ?ResolverLogBucketAggregation;
      date_histogram: ?ResolverLogBucketAggregation;
      terms: ?ResolverLogBucketAggregation;
      filter: ?ResolverLogFilterAggregation;
}

declare type AvgResolverLogAggregationSet =  {
      field: ?ResolverLogNumericField;
}

declare type CardinalityResolverLogAggregationSet =  {
      field: ?ResolverLogField;
      precision_threshhold: ?number;
}

declare type MaxResolverLogAggregationSet =  {
      field: ?ResolverLogNumericField;
}

declare type MinResolverLogAggregationSet =  {
      field: ?ResolverLogNumericField;
}

declare type PercentilesResolverLogAggregationSet =  {
      field: ?ResolverLogNumericField;
}

declare type StatsResolverLogAggregationSet =  {
      field: ?ResolverLogNumericField;
}

declare type SumResolverLogAggregationSet =  {
      field: ?ResolverLogNumericField;
}

declare type ValueCountResolverLogAggregationSet =  {
      field: ?ResolverLogNumericField;
}

declare type DateRangeResolverLogAggregationSet =  {
      field: ?ResolverLogDateTimeField;
      format: ?string;
      ranges: Array<DateRangeInput>;
}

declare type DateHistogramResolverLogAggregationSet =  {
      field: ?ResolverLogDateTimeField;
      interval: ?string;
      format: ?string;
      time_zone: ?string;
      missing: ?string;
}

declare type TermsResolverLogAggregationSet =  {
      field: ?ResolverLogStringField;
      size: ?number;
      missing: ?string;
}

declare type FilterResolverLogAggregationSet =  {
      term: ?ResolverLogTermFilter;
}

declare type ResolverLogNumericField = "totalDuration" | "count" | "minDuration" | "maxDuration" | "avgDuration";

declare type ResolverLogField = "fieldName" | "operation" | "start" | "path" | "status" | "error" | "totalDuration" | "count" | "minDuration" | "maxDuration" | "avgDuration" | "parentType" | "returnType" | "parsedReturnType";

declare type ResolverLogDateTimeField = "start";

declare type ResolverLogBucketAggregation =  {
      buckets: ?Array<ResolverLogAggregationBucket>;
}

declare type ResolverLogAggregationBucket =  {
      doc_count: ?number;
      key: ?AnyObject;
      key_as_string: ?string;
      aggregations: ?ResolverLogAggregationSet;
}

declare type ResolverLogStringField = "fieldName" | "operation" | "path" | "status" | "error" | "parentType" | "returnType" | "parsedReturnType";

declare type ResolverLogTermFilter =  {
      fieldName: ?string;
      operation: ?string;
      path: ?string;
      status: ?string;
      error: ?string;
      parentType: ?string;
      returnType: ?string;
      parsedReturnType: ?string;
      totalDuration: ?number;
      count: ?number;
      minDuration: ?number;
      maxDuration: ?number;
      avgDuration: ?number;
}

declare type ResolverLogFilterAggregation =  {
      doc_count: ?number;
      aggregations: ?ResolverLogAggregationSet;
}

declare type Mutation =  {
      migrateSchema: ?MigrateSchemaPayload;
      loginUser: ?LoginUserPayload;
      changeUserPassword: ?ChangeUserPasswordPayload;
      createRole: ?CreateRolePayload;
      updateRole: ?UpdateRolePayload;
      deleteRole: ?DeleteRolePayload;
      createFile: ?CreateFilePayload;
      updateFile: ?UpdateFilePayload;
      deleteFile: ?DeleteFilePayload;
      createPc: ?CreatePcPayload;
      updatePc: ?UpdatePcPayload;
      deletePc: ?DeletePcPayload;
      createUser: ?CreateUserPayload;
      updateUser: ?UpdateUserPayload;
      deleteUser: ?DeleteUserPayload;
      addToUserRolesConnection: ?AddToUserRolesConnectionPayload;
      updateUserRolesConnection: ?UpdateUserRolesConnectionPayload;
      removeFromUserRolesConnection: ?RemoveFromUserRolesConnectionPayload;
}

declare type MigrateSchemaMutation =  {
      input: MigrateSchemaInput;
}

declare type LoginUserMutation =  {
      input: LoginUserInput;
}

declare type ChangeUserPasswordMutation =  {
      input: ChangeUserPasswordInput;
}

declare type CreateRoleMutation =  {
      input: CreateRoleInput;
}

declare type UpdateRoleMutation =  {
      input: UpdateRoleInput;
}

declare type DeleteRoleMutation =  {
      input: DeleteRoleInput;
}

declare type CreateFileMutation =  {
      input: CreateFileInput;
}

declare type UpdateFileMutation =  {
      input: UpdateFileInput;
}

declare type DeleteFileMutation =  {
      input: DeleteFileInput;
}

declare type CreatePcMutation =  {
      input: CreatePcInput;
}

declare type UpdatePcMutation =  {
      input: UpdatePcInput;
}

declare type DeletePcMutation =  {
      input: DeletePcInput;
}

declare type CreateUserMutation =  {
      input: CreateUserInput;
}

declare type UpdateUserMutation =  {
      input: UpdateUserInput;
}

declare type DeleteUserMutation =  {
      input: DeleteUserInput;
}

declare type AddToUserRolesConnectionMutation =  {
      input: AddToUserRolesConnectionInput;
}

declare type UpdateUserRolesConnectionMutation =  {
      input: UpdateUserRolesConnectionInput;
}

declare type RemoveFromUserRolesConnectionMutation =  {
      input: RemoveFromUserRolesConnectionInput;
}

declare type MigrateSchemaInput =  {
      id: string;
      name: ?string;
      description: ?string;
      types: ?Array<MigrateTypeInput>;
      clientMutationId: ?string;
}

declare type MigrateTypeInput =  {
      id: ?string;
      name: string;
      description: ?string;
      kind: TypeKind;
      interfaces: ?Array<string>;
      fields: ?Array<MigrateFieldInput>;
      permissions: ?Array<MigratePermissionInput>;
      values: ?Array<string>;
      isBridge: ?bool;
      position: ?number;
      isEditable: ?bool;
      isDeletable: ?bool;
      isExtendable: ?bool;
}

declare type TypeKind = "OBJECT" | "ENUM" | "INTERFACE";

declare type MigrateFieldInput =  {
      id: ?string;
      name: string;
      description: ?string;
      columnName: ?string;
      nonNull: ?bool;
      unique: ?bool;
      indexed: ?bool;
      type: ?string;
      ofType: ?string;
      ofTypeNonNull: ?bool;
      reverseName: ?string;
      defaultValue: ?AnyObject;
      isEditable: ?bool;
      through: ?string;
      position: ?number;
}

declare type MigratePermissionInput =  {
      id: ?string;
      scope: PermissionScopeEnum;
      userFields: ?Array<MigrateFieldInput>;
      protectedFields: ?Array<MigrateFieldInput>;
      roles: ?Array<MigrateRoleInput>;
      create: ?bool;
      read: ?bool;
      update: ?bool;
      delete: ?bool;
      enabled: ?bool;
}

declare type PermissionScopeEnum = "EVERYONE" | "AUTHENTICATED" | "RELATION" | "ROLE";

declare type MigrateRoleInput =  {
      id: string;
      name: string;
}

declare type MigrateSchemaPayload =  {
      changedSchema: ?Schema;
      viewer: ?Viewer;
      clientMutationId: ?string;
}

declare type Schema = Node &  {
      id: string;
      name: string;
      description: ?string;
      types: ?Array<Type>;
      createdAt: ?DateTime;
      modifiedAt: ?DateTime;
}

declare type Type = Node &  {
      id: string;
      name: string;
      description: ?string;
      kind: ?TypeKind;
      interfaces: ?Array<string>;
      fields: ?Array<Field>;
      permissions: ?Array<Permission>;
      values: ?Array<string>;
      isBridge: ?bool;
      position: ?number;
      isEditable: ?bool;
      isDeletable: ?bool;
      isExtendable: ?bool;
      createdAt: ?DateTime;
      modifiedAt: ?DateTime;
}

declare type Field = Node &  {
      id: string;
      name: string;
      description: ?string;
      columnName: ?string;
      nonNull: ?bool;
      unique: ?bool;
      indexed: ?bool;
      type: ?string;
      ofType: ?string;
      ofTypeNonNull: ?bool;
      reverseName: ?string;
      defaultValue: ?AnyObject;
      isEditable: ?bool;
      through: ?string;
      position: ?number;
}

declare type Permission = Node &  {
      id: string;
      scope: PermissionScopeEnum;
      userFields: ?Array<Field>;
      protectedFields: ?Array<Field>;
      roles: ?Array<Role>;
      enabled: ?bool;
      create: ?bool;
      read: ?bool;
      update: ?bool;
      delete: ?bool;
      createdAt: ?DateTime;
      modifiedAt: ?DateTime;
}

declare type LoginUserInput =  {
      username: string;
      password: string;
      clientMutationId: ?string;
}

declare type LoginUserPayload =  {
      token: ?string;
      user: ?User;
      changedEdge: ?UserEdge;
      viewer: ?Viewer;
      clientMutationId: ?string;
}

declare type ChangeUserPasswordInput =  {
      id: string;
      oldPassword: string;
      newPassword: string;
      clientMutationId: ?string;
}

declare type ChangeUserPasswordPayload =  {
      changedUser: ?User;
      changedEdge: ?UserEdge;
      viewer: ?Viewer;
      clientMutationId: ?string;
}

declare type CreateRoleInput =  {
      name: string;
      clientMutationId: ?string;
}

declare type CreateRolePayload =  {
      changedRole: ?Role;
      changedEdge: ?RoleEdge;
      viewer: ?Viewer;
      clientMutationId: ?string;
}

declare type UpdateRoleInput =  {
      name: ?string;
      id: string;
      clientMutationId: ?string;
}

declare type UpdateRolePayload =  {
      changedRole: ?Role;
      changedEdge: ?RoleEdge;
      viewer: ?Viewer;
      clientMutationId: ?string;
}

declare type DeleteRoleInput =  {
      id: string;
      clientMutationId: ?string;
}

declare type DeleteRolePayload =  {
      changedRole: ?Role;
      changedEdge: ?RoleEdge;
      viewer: ?Viewer;
      clientMutationId: ?string;
}

declare type CreateFileInput =  {
      name: ?string;
      blobFieldName: string;
      clientMutationId: ?string;
}

declare type CreateFilePayload =  {
      changedFile: ?File;
      changedEdge: ?FileEdge;
      viewer: ?Viewer;
      clientMutationId: ?string;
}

declare type UpdateFileInput =  {
      id: string;
      name: ?string;
      blobFieldName: ?string;
      clientMutationId: ?string;
}

declare type UpdateFilePayload =  {
      changedFile: ?File;
      changedEdge: ?FileEdge;
      viewer: ?Viewer;
      clientMutationId: ?string;
}

declare type DeleteFileInput =  {
      id: string;
      clientMutationId: ?string;
}

declare type DeleteFilePayload =  {
      changedFile: ?File;
      changedEdge: ?FileEdge;
      viewer: ?Viewer;
      clientMutationId: ?string;
}

declare type CreatePcInput =  {
      playerId: ?string;
      player: ?CreateUserInput;
      abilities: ?Array<AbilityInput>;
      clientMutationId: ?string;
}

declare type CreateUserInput =  {
      password: Secret;
      username: string;
      clientMutationId: ?string;
}

declare type AbilityInput =  {
      raceMod: number;
      roll2: ?number;
      baseScore: ?number;
      levelMod: number;
      roll3: ?number;
      roll1: ?number;
      proficient: ?bool;
      magicMod: number;
      abbr: string;
}

declare type CreatePcPayload =  {
      changedPc: ?PC;
      changedEdge: ?PcEdge;
      viewer: ?Viewer;
      clientMutationId: ?string;
}

declare type UpdatePcInput =  {
      id: string;
      playerId: ?string;
      abilities: ?Array<AbilityInput>;
      clientMutationId: ?string;
}

declare type UpdatePcPayload =  {
      changedPc: ?PC;
      changedEdge: ?PcEdge;
      viewer: ?Viewer;
      clientMutationId: ?string;
}

declare type DeletePcInput =  {
      id: string;
      clientMutationId: ?string;
}

declare type DeletePcPayload =  {
      changedPc: ?PC;
      changedEdge: ?PcEdge;
      viewer: ?Viewer;
      clientMutationId: ?string;
}

declare type CreateUserPayload =  {
      token: ?string;
      changedUser: ?User;
      changedEdge: ?UserEdge;
      viewer: ?Viewer;
      clientMutationId: ?string;
}

declare type UpdateUserInput =  {
      password: ?Secret;
      id: string;
      username: ?string;
      clientMutationId: ?string;
}

declare type UpdateUserPayload =  {
      changedUser: ?User;
      changedEdge: ?UserEdge;
      viewer: ?Viewer;
      clientMutationId: ?string;
}

declare type DeleteUserInput =  {
      id: string;
      clientMutationId: ?string;
}

declare type DeleteUserPayload =  {
      changedUser: ?User;
      changedEdge: ?UserEdge;
      viewer: ?Viewer;
      clientMutationId: ?string;
}

declare type AddToUserRolesConnectionInput =  {
      roleId: string;
      userId: string;
      accessLevel: AccessLevel;
      clientMutationId: ?string;
}

declare type AddToUserRolesConnectionPayload =  {
      changedUserRoles: ?UserRoles;
      changedEdge: ?UserRolesEdge;
      viewer: ?Viewer;
      clientMutationId: ?string;
}

declare type UserRoles = Timestamped &  {
      accessLevel: AccessLevel;
      modifiedAt: DateTime;
      createdAt: DateTime;
      role: ?Role;
      user: ?User;
}

declare type UpdateUserRolesConnectionInput =  {
      roleId: string;
      userId: string;
      accessLevel: AccessLevel;
      clientMutationId: ?string;
}

declare type UpdateUserRolesConnectionPayload =  {
      changedUserRoles: ?UserRoles;
      changedEdge: ?UserRolesEdge;
      viewer: ?Viewer;
      clientMutationId: ?string;
}

declare type RemoveFromUserRolesConnectionInput =  {
      roleId: string;
      userId: string;
      clientMutationId: ?string;
}

declare type RemoveFromUserRolesConnectionPayload =  {
      changedUserRoles: ?UserRoles;
      changedEdge: ?UserRolesEdge;
      viewer: ?Viewer;
      clientMutationId: ?string;
}

declare type Subscription =  {
      subscribeToRole: ?RoleSubscriptionPayload;
      subscribeToFile: ?FileSubscriptionPayload;
      subscribeToPc: ?PcSubscriptionPayload;
      subscribeToUser: ?UserSubscriptionPayload;
}

declare type SubscribeToRoleSubscription =  {
      filter: ?RoleSubscriptionFilter;
      mutations: Array<RoleMutationEvent>;
}

declare type SubscribeToFileSubscription =  {
      filter: ?FileSubscriptionFilter;
      mutations: Array<FileMutationEvent>;
}

declare type SubscribeToPcSubscription =  {
      filter: ?PcSubscriptionFilter;
      mutations: Array<PcMutationEvent>;
}

declare type SubscribeToUserSubscription =  {
      filter: ?UserSubscriptionFilter;
      mutations: Array<UserMutationEvent>;
}

declare type RoleSubscriptionFilter =  {
      name: ?RoleNameSubscriptionFilters;
      id: ?RoleIdSubscriptionFilters;
      createdAt: ?RoleCreatedAtSubscriptionFilters;
      modifiedAt: ?RoleModifiedAtSubscriptionFilters;
}

declare type RoleNameSubscriptionFilters =  {
      eq: ?string;
      gt: ?string;
      gte: ?string;
      lt: ?string;
      lte: ?string;
      ne: ?string;
      between: ?Array<string>;
      notBetween: ?Array<string>;
      in: ?Array<string>;
      notIn: ?Array<string>;
      like: ?string;
      notLike: ?string;
      matches: ?string;
      notMatches: ?string;
      isNull: ?bool;
}

declare type RoleIdSubscriptionFilters =  {
      eq: ?string;
      in: ?Array<string>;
      notIn: ?Array<string>;
}

declare type RoleCreatedAtSubscriptionFilters =  {
      eq: ?DateTime;
      gt: ?DateTime;
      gte: ?DateTime;
      lt: ?DateTime;
      lte: ?DateTime;
      ne: ?DateTime;
      between: ?Array<DateTime>;
      notBetween: ?Array<DateTime>;
      in: ?Array<DateTime>;
      notIn: ?Array<DateTime>;
      like: ?string;
      notLike: ?string;
      matches: ?string;
      notMatches: ?string;
      isNull: ?bool;
}

declare type RoleModifiedAtSubscriptionFilters =  {
      eq: ?DateTime;
      gt: ?DateTime;
      gte: ?DateTime;
      lt: ?DateTime;
      lte: ?DateTime;
      ne: ?DateTime;
      between: ?Array<DateTime>;
      notBetween: ?Array<DateTime>;
      in: ?Array<DateTime>;
      notIn: ?Array<DateTime>;
      like: ?string;
      notLike: ?string;
      matches: ?string;
      notMatches: ?string;
      isNull: ?bool;
}

declare type RoleMutationEvent = "createRole" | "updateRole" | "deleteRole";

declare type RoleSubscriptionPayload =  {
      mutation: ?RoleMutationEvent;
      value: ?Role;
      edge: ?RoleEdge;
}

declare type FileSubscriptionFilter =  {
      createdAt: ?FileCreatedAtSubscriptionFilters;
      id: ?FileIdSubscriptionFilters;
      blobMimeType: ?FileBlobMimeTypeSubscriptionFilters;
      modifiedAt: ?FileModifiedAtSubscriptionFilters;
      blobUrl: ?FileBlobUrlSubscriptionFilters;
      name: ?FileNameSubscriptionFilters;
}

declare type FileCreatedAtSubscriptionFilters =  {
      eq: ?DateTime;
      gt: ?DateTime;
      gte: ?DateTime;
      lt: ?DateTime;
      lte: ?DateTime;
      ne: ?DateTime;
      between: ?Array<DateTime>;
      notBetween: ?Array<DateTime>;
      in: ?Array<DateTime>;
      notIn: ?Array<DateTime>;
      like: ?string;
      notLike: ?string;
      matches: ?string;
      notMatches: ?string;
      isNull: ?bool;
}

declare type FileIdSubscriptionFilters =  {
      eq: ?string;
      in: ?Array<string>;
      notIn: ?Array<string>;
}

declare type FileBlobMimeTypeSubscriptionFilters =  {
      eq: ?string;
      gt: ?string;
      gte: ?string;
      lt: ?string;
      lte: ?string;
      ne: ?string;
      between: ?Array<string>;
      notBetween: ?Array<string>;
      in: ?Array<string>;
      notIn: ?Array<string>;
      like: ?string;
      notLike: ?string;
      matches: ?string;
      notMatches: ?string;
      isNull: ?bool;
}

declare type FileModifiedAtSubscriptionFilters =  {
      eq: ?DateTime;
      gt: ?DateTime;
      gte: ?DateTime;
      lt: ?DateTime;
      lte: ?DateTime;
      ne: ?DateTime;
      between: ?Array<DateTime>;
      notBetween: ?Array<DateTime>;
      in: ?Array<DateTime>;
      notIn: ?Array<DateTime>;
      like: ?string;
      notLike: ?string;
      matches: ?string;
      notMatches: ?string;
      isNull: ?bool;
}

declare type FileBlobUrlSubscriptionFilters =  {
      eq: ?string;
      gt: ?string;
      gte: ?string;
      lt: ?string;
      lte: ?string;
      ne: ?string;
      between: ?Array<string>;
      notBetween: ?Array<string>;
      in: ?Array<string>;
      notIn: ?Array<string>;
      like: ?string;
      notLike: ?string;
      matches: ?string;
      notMatches: ?string;
      isNull: ?bool;
}

declare type FileNameSubscriptionFilters =  {
      eq: ?string;
      gt: ?string;
      gte: ?string;
      lt: ?string;
      lte: ?string;
      ne: ?string;
      between: ?Array<string>;
      notBetween: ?Array<string>;
      in: ?Array<string>;
      notIn: ?Array<string>;
      like: ?string;
      notLike: ?string;
      matches: ?string;
      notMatches: ?string;
      isNull: ?bool;
}

declare type FileMutationEvent = "createFile" | "updateFile" | "deleteFile";

declare type FileSubscriptionPayload =  {
      mutation: ?FileMutationEvent;
      value: ?File;
      edge: ?FileEdge;
}

declare type PcSubscriptionFilter =  {
      id: ?PcIdSubscriptionFilters;
      modifiedAt: ?PcModifiedAtSubscriptionFilters;
      createdAt: ?PcCreatedAtSubscriptionFilters;
      playerId: ?PcPlayerIdSubscriptionFilters;
}

declare type PcIdSubscriptionFilters =  {
      eq: ?string;
      in: ?Array<string>;
      notIn: ?Array<string>;
}

declare type PcModifiedAtSubscriptionFilters =  {
      eq: ?DateTime;
      gt: ?DateTime;
      gte: ?DateTime;
      lt: ?DateTime;
      lte: ?DateTime;
      ne: ?DateTime;
      between: ?Array<DateTime>;
      notBetween: ?Array<DateTime>;
      in: ?Array<DateTime>;
      notIn: ?Array<DateTime>;
      like: ?string;
      notLike: ?string;
      matches: ?string;
      notMatches: ?string;
      isNull: ?bool;
}

declare type PcCreatedAtSubscriptionFilters =  {
      eq: ?DateTime;
      gt: ?DateTime;
      gte: ?DateTime;
      lt: ?DateTime;
      lte: ?DateTime;
      ne: ?DateTime;
      between: ?Array<DateTime>;
      notBetween: ?Array<DateTime>;
      in: ?Array<DateTime>;
      notIn: ?Array<DateTime>;
      like: ?string;
      notLike: ?string;
      matches: ?string;
      notMatches: ?string;
      isNull: ?bool;
}

declare type PcPlayerIdSubscriptionFilters =  {
      eq: ?string;
      in: ?Array<string>;
      notIn: ?Array<string>;
}

declare type PcMutationEvent = "createPc" | "updatePc" | "deletePc";

declare type PcSubscriptionPayload =  {
      mutation: ?PcMutationEvent;
      value: ?PC;
      edge: ?PcEdge;
}

declare type UserSubscriptionFilter =  {
      password: ?UserPasswordSubscriptionFilters;
      modifiedAt: ?UserModifiedAtSubscriptionFilters;
      id: ?UserIdSubscriptionFilters;
      createdAt: ?UserCreatedAtSubscriptionFilters;
      lastLogin: ?UserLastLoginSubscriptionFilters;
      username: ?UserUsernameSubscriptionFilters;
}

declare type UserPasswordSubscriptionFilters =  {
      eq: ?Secret;
      gt: ?Secret;
      gte: ?Secret;
      lt: ?Secret;
      lte: ?Secret;
      ne: ?Secret;
      between: ?Array<Secret>;
      notBetween: ?Array<Secret>;
      in: ?Array<Secret>;
      notIn: ?Array<Secret>;
      like: ?string;
      notLike: ?string;
      matches: ?string;
      notMatches: ?string;
      isNull: ?bool;
}

declare type UserModifiedAtSubscriptionFilters =  {
      eq: ?DateTime;
      gt: ?DateTime;
      gte: ?DateTime;
      lt: ?DateTime;
      lte: ?DateTime;
      ne: ?DateTime;
      between: ?Array<DateTime>;
      notBetween: ?Array<DateTime>;
      in: ?Array<DateTime>;
      notIn: ?Array<DateTime>;
      like: ?string;
      notLike: ?string;
      matches: ?string;
      notMatches: ?string;
      isNull: ?bool;
}

declare type UserIdSubscriptionFilters =  {
      eq: ?string;
      in: ?Array<string>;
      notIn: ?Array<string>;
}

declare type UserCreatedAtSubscriptionFilters =  {
      eq: ?DateTime;
      gt: ?DateTime;
      gte: ?DateTime;
      lt: ?DateTime;
      lte: ?DateTime;
      ne: ?DateTime;
      between: ?Array<DateTime>;
      notBetween: ?Array<DateTime>;
      in: ?Array<DateTime>;
      notIn: ?Array<DateTime>;
      like: ?string;
      notLike: ?string;
      matches: ?string;
      notMatches: ?string;
      isNull: ?bool;
}

declare type UserLastLoginSubscriptionFilters =  {
      eq: ?DateTime;
      gt: ?DateTime;
      gte: ?DateTime;
      lt: ?DateTime;
      lte: ?DateTime;
      ne: ?DateTime;
      between: ?Array<DateTime>;
      notBetween: ?Array<DateTime>;
      in: ?Array<DateTime>;
      notIn: ?Array<DateTime>;
      like: ?string;
      notLike: ?string;
      matches: ?string;
      notMatches: ?string;
      isNull: ?bool;
}

declare type UserUsernameSubscriptionFilters =  {
      eq: ?string;
      gt: ?string;
      gte: ?string;
      lt: ?string;
      lte: ?string;
      ne: ?string;
      between: ?Array<string>;
      notBetween: ?Array<string>;
      in: ?Array<string>;
      notIn: ?Array<string>;
      like: ?string;
      notLike: ?string;
      matches: ?string;
      notMatches: ?string;
      isNull: ?bool;
}

declare type UserMutationEvent = "loginUser" | "createUser" | "updateUser" | "deleteUser";

declare type UserSubscriptionPayload =  {
      mutation: ?UserMutationEvent;
      value: ?User;
      edge: ?UserEdge;
}

