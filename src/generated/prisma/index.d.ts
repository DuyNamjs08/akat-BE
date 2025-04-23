/**
 * Client
 **/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model Role
 *
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>;
/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model Token
 *
 */
export type Token = $Result.DefaultSelection<Prisma.$TokenPayload>;
/**
 * Model FacebookFanPage
 *
 */
export type FacebookFanPage =
  $Result.DefaultSelection<Prisma.$FacebookFanPagePayload>;
/**
 * Model FacebookConnections
 *
 */
export type FacebookConnections =
  $Result.DefaultSelection<Prisma.$FacebookConnectionsPayload>;
/**
 * Model FacebookPageInsights
 *
 */
export type FacebookPageInsights =
  $Result.DefaultSelection<Prisma.$FacebookPageInsightsPayload>;
/**
 * Model Profile
 *
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>;
/**
 * Model AdAccountRental
 *
 */
export type AdAccountRental =
  $Result.DefaultSelection<Prisma.$AdAccountRentalPayload>;
/**
 * Model SystemAdAccount
 *
 */
export type SystemAdAccount =
  $Result.DefaultSelection<Prisma.$SystemAdAccountPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Roles
 * const roles = await prisma.role.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Roles
   * const roles = await prisma.role.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Roles
   * const roles = await prisma.role.findMany()
   * ```
   */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.token`: Exposes CRUD operations for the **Token** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Tokens
   * const tokens = await prisma.token.findMany()
   * ```
   */
  get token(): Prisma.TokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.facebookFanPage`: Exposes CRUD operations for the **FacebookFanPage** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more FacebookFanPages
   * const facebookFanPages = await prisma.facebookFanPage.findMany()
   * ```
   */
  get facebookFanPage(): Prisma.FacebookFanPageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.facebookConnections`: Exposes CRUD operations for the **FacebookConnections** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more FacebookConnections
   * const facebookConnections = await prisma.facebookConnections.findMany()
   * ```
   */
  get facebookConnections(): Prisma.FacebookConnectionsDelegate<
    ExtArgs,
    ClientOptions
  >;

  /**
   * `prisma.facebookPageInsights`: Exposes CRUD operations for the **FacebookPageInsights** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more FacebookPageInsights
   * const facebookPageInsights = await prisma.facebookPageInsights.findMany()
   * ```
   */
  get facebookPageInsights(): Prisma.FacebookPageInsightsDelegate<
    ExtArgs,
    ClientOptions
  >;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Profiles
   * const profiles = await prisma.profile.findMany()
   * ```
   */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adAccountRental`: Exposes CRUD operations for the **AdAccountRental** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more AdAccountRentals
   * const adAccountRentals = await prisma.adAccountRental.findMany()
   * ```
   */
  get adAccountRental(): Prisma.AdAccountRentalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.systemAdAccount`: Exposes CRUD operations for the **SystemAdAccount** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more SystemAdAccounts
   * const systemAdAccounts = await prisma.systemAdAccount.findMany()
   * ```
   */
  get systemAdAccount(): Prisma.SystemAdAccountDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends bigint
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    Role: 'Role';
    User: 'User';
    Token: 'Token';
    FacebookFanPage: 'FacebookFanPage';
    FacebookConnections: 'FacebookConnections';
    FacebookPageInsights: 'FacebookPageInsights';
    Profile: 'Profile';
    AdAccountRental: 'AdAccountRental';
    SystemAdAccount: 'SystemAdAccount';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb<ClientOptions = {}>
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps:
        | 'role'
        | 'user'
        | 'token'
        | 'facebookFanPage'
        | 'facebookConnections'
        | 'facebookPageInsights'
        | 'profile'
        | 'adAccountRental'
        | 'systemAdAccount';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>;
        fields: Prisma.RoleFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RolePayload>;
          };
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RolePayload>;
          };
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[];
          };
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RolePayload>;
          };
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[];
          };
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RolePayload>;
          };
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RolePayload>;
          };
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[];
          };
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RolePayload>;
          };
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateRole>;
          };
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>;
            result: $Utils.Optional<RoleGroupByOutputType>[];
          };
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>;
            result: $Utils.Optional<RoleCountAggregateOutputType> | number;
          };
        };
      };
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      Token: {
        payload: Prisma.$TokenPayload<ExtArgs>;
        fields: Prisma.TokenFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.TokenFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.TokenFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>;
          };
          findFirst: {
            args: Prisma.TokenFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.TokenFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>;
          };
          findMany: {
            args: Prisma.TokenFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[];
          };
          create: {
            args: Prisma.TokenCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>;
          };
          createMany: {
            args: Prisma.TokenCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.TokenCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[];
          };
          delete: {
            args: Prisma.TokenDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>;
          };
          update: {
            args: Prisma.TokenUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>;
          };
          deleteMany: {
            args: Prisma.TokenDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.TokenUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.TokenUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[];
          };
          upsert: {
            args: Prisma.TokenUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>;
          };
          aggregate: {
            args: Prisma.TokenAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateToken>;
          };
          groupBy: {
            args: Prisma.TokenGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TokenGroupByOutputType>[];
          };
          count: {
            args: Prisma.TokenCountArgs<ExtArgs>;
            result: $Utils.Optional<TokenCountAggregateOutputType> | number;
          };
        };
      };
      FacebookFanPage: {
        payload: Prisma.$FacebookFanPagePayload<ExtArgs>;
        fields: Prisma.FacebookFanPageFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.FacebookFanPageFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FacebookFanPagePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.FacebookFanPageFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FacebookFanPagePayload>;
          };
          findFirst: {
            args: Prisma.FacebookFanPageFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FacebookFanPagePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.FacebookFanPageFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FacebookFanPagePayload>;
          };
          findMany: {
            args: Prisma.FacebookFanPageFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FacebookFanPagePayload>[];
          };
          create: {
            args: Prisma.FacebookFanPageCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FacebookFanPagePayload>;
          };
          createMany: {
            args: Prisma.FacebookFanPageCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.FacebookFanPageCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FacebookFanPagePayload>[];
          };
          delete: {
            args: Prisma.FacebookFanPageDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FacebookFanPagePayload>;
          };
          update: {
            args: Prisma.FacebookFanPageUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FacebookFanPagePayload>;
          };
          deleteMany: {
            args: Prisma.FacebookFanPageDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.FacebookFanPageUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.FacebookFanPageUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FacebookFanPagePayload>[];
          };
          upsert: {
            args: Prisma.FacebookFanPageUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FacebookFanPagePayload>;
          };
          aggregate: {
            args: Prisma.FacebookFanPageAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateFacebookFanPage>;
          };
          groupBy: {
            args: Prisma.FacebookFanPageGroupByArgs<ExtArgs>;
            result: $Utils.Optional<FacebookFanPageGroupByOutputType>[];
          };
          count: {
            args: Prisma.FacebookFanPageCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<FacebookFanPageCountAggregateOutputType>
              | number;
          };
        };
      };
      FacebookConnections: {
        payload: Prisma.$FacebookConnectionsPayload<ExtArgs>;
        fields: Prisma.FacebookConnectionsFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.FacebookConnectionsFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FacebookConnectionsPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.FacebookConnectionsFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FacebookConnectionsPayload>;
          };
          findFirst: {
            args: Prisma.FacebookConnectionsFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FacebookConnectionsPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.FacebookConnectionsFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FacebookConnectionsPayload>;
          };
          findMany: {
            args: Prisma.FacebookConnectionsFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FacebookConnectionsPayload>[];
          };
          create: {
            args: Prisma.FacebookConnectionsCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FacebookConnectionsPayload>;
          };
          createMany: {
            args: Prisma.FacebookConnectionsCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.FacebookConnectionsCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FacebookConnectionsPayload>[];
          };
          delete: {
            args: Prisma.FacebookConnectionsDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FacebookConnectionsPayload>;
          };
          update: {
            args: Prisma.FacebookConnectionsUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FacebookConnectionsPayload>;
          };
          deleteMany: {
            args: Prisma.FacebookConnectionsDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.FacebookConnectionsUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.FacebookConnectionsUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FacebookConnectionsPayload>[];
          };
          upsert: {
            args: Prisma.FacebookConnectionsUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FacebookConnectionsPayload>;
          };
          aggregate: {
            args: Prisma.FacebookConnectionsAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateFacebookConnections>;
          };
          groupBy: {
            args: Prisma.FacebookConnectionsGroupByArgs<ExtArgs>;
            result: $Utils.Optional<FacebookConnectionsGroupByOutputType>[];
          };
          count: {
            args: Prisma.FacebookConnectionsCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<FacebookConnectionsCountAggregateOutputType>
              | number;
          };
        };
      };
      FacebookPageInsights: {
        payload: Prisma.$FacebookPageInsightsPayload<ExtArgs>;
        fields: Prisma.FacebookPageInsightsFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.FacebookPageInsightsFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FacebookPageInsightsPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.FacebookPageInsightsFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FacebookPageInsightsPayload>;
          };
          findFirst: {
            args: Prisma.FacebookPageInsightsFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FacebookPageInsightsPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.FacebookPageInsightsFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FacebookPageInsightsPayload>;
          };
          findMany: {
            args: Prisma.FacebookPageInsightsFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FacebookPageInsightsPayload>[];
          };
          create: {
            args: Prisma.FacebookPageInsightsCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FacebookPageInsightsPayload>;
          };
          createMany: {
            args: Prisma.FacebookPageInsightsCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.FacebookPageInsightsCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FacebookPageInsightsPayload>[];
          };
          delete: {
            args: Prisma.FacebookPageInsightsDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FacebookPageInsightsPayload>;
          };
          update: {
            args: Prisma.FacebookPageInsightsUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FacebookPageInsightsPayload>;
          };
          deleteMany: {
            args: Prisma.FacebookPageInsightsDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.FacebookPageInsightsUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.FacebookPageInsightsUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FacebookPageInsightsPayload>[];
          };
          upsert: {
            args: Prisma.FacebookPageInsightsUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FacebookPageInsightsPayload>;
          };
          aggregate: {
            args: Prisma.FacebookPageInsightsAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateFacebookPageInsights>;
          };
          groupBy: {
            args: Prisma.FacebookPageInsightsGroupByArgs<ExtArgs>;
            result: $Utils.Optional<FacebookPageInsightsGroupByOutputType>[];
          };
          count: {
            args: Prisma.FacebookPageInsightsCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<FacebookPageInsightsCountAggregateOutputType>
              | number;
          };
        };
      };
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>;
        fields: Prisma.ProfileFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>;
          };
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>;
          };
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[];
          };
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>;
          };
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[];
          };
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>;
          };
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>;
          };
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[];
          };
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>;
          };
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateProfile>;
          };
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ProfileGroupByOutputType>[];
          };
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>;
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number;
          };
        };
      };
      AdAccountRental: {
        payload: Prisma.$AdAccountRentalPayload<ExtArgs>;
        fields: Prisma.AdAccountRentalFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.AdAccountRentalFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdAccountRentalPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.AdAccountRentalFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdAccountRentalPayload>;
          };
          findFirst: {
            args: Prisma.AdAccountRentalFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdAccountRentalPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.AdAccountRentalFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdAccountRentalPayload>;
          };
          findMany: {
            args: Prisma.AdAccountRentalFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdAccountRentalPayload>[];
          };
          create: {
            args: Prisma.AdAccountRentalCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdAccountRentalPayload>;
          };
          createMany: {
            args: Prisma.AdAccountRentalCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.AdAccountRentalCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdAccountRentalPayload>[];
          };
          delete: {
            args: Prisma.AdAccountRentalDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdAccountRentalPayload>;
          };
          update: {
            args: Prisma.AdAccountRentalUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdAccountRentalPayload>;
          };
          deleteMany: {
            args: Prisma.AdAccountRentalDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.AdAccountRentalUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.AdAccountRentalUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdAccountRentalPayload>[];
          };
          upsert: {
            args: Prisma.AdAccountRentalUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdAccountRentalPayload>;
          };
          aggregate: {
            args: Prisma.AdAccountRentalAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAdAccountRental>;
          };
          groupBy: {
            args: Prisma.AdAccountRentalGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AdAccountRentalGroupByOutputType>[];
          };
          count: {
            args: Prisma.AdAccountRentalCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<AdAccountRentalCountAggregateOutputType>
              | number;
          };
        };
      };
      SystemAdAccount: {
        payload: Prisma.$SystemAdAccountPayload<ExtArgs>;
        fields: Prisma.SystemAdAccountFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.SystemAdAccountFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SystemAdAccountPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.SystemAdAccountFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SystemAdAccountPayload>;
          };
          findFirst: {
            args: Prisma.SystemAdAccountFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SystemAdAccountPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.SystemAdAccountFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SystemAdAccountPayload>;
          };
          findMany: {
            args: Prisma.SystemAdAccountFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SystemAdAccountPayload>[];
          };
          create: {
            args: Prisma.SystemAdAccountCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SystemAdAccountPayload>;
          };
          createMany: {
            args: Prisma.SystemAdAccountCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.SystemAdAccountCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SystemAdAccountPayload>[];
          };
          delete: {
            args: Prisma.SystemAdAccountDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SystemAdAccountPayload>;
          };
          update: {
            args: Prisma.SystemAdAccountUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SystemAdAccountPayload>;
          };
          deleteMany: {
            args: Prisma.SystemAdAccountDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.SystemAdAccountUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.SystemAdAccountUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SystemAdAccountPayload>[];
          };
          upsert: {
            args: Prisma.SystemAdAccountUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SystemAdAccountPayload>;
          };
          aggregate: {
            args: Prisma.SystemAdAccountAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSystemAdAccount>;
          };
          groupBy: {
            args: Prisma.SystemAdAccountGroupByArgs<ExtArgs>;
            result: $Utils.Optional<SystemAdAccountGroupByOutputType>[];
          };
          count: {
            args: Prisma.SystemAdAccountCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<SystemAdAccountCountAggregateOutputType>
              | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    role?: RoleOmit;
    user?: UserOmit;
    token?: TokenOmit;
    facebookFanPage?: FacebookFanPageOmit;
    facebookConnections?: FacebookConnectionsOmit;
    facebookPageInsights?: FacebookPageInsightsOmit;
    profile?: ProfileOmit;
    adAccountRental?: AdAccountRentalOmit;
    systemAdAccount?: SystemAdAccountOmit;
  };

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T['emit'] extends 'event'
        ? T['level']
        : never
      : never;
  export type GetEvents<T extends any> =
    T extends Array<LogLevel | LogDefinition>
      ?
          | GetLogType<T[0]>
          | GetLogType<T[1]>
          | GetLogType<T[2]>
          | GetLogType<T[3]>
      : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number;
  };

  export type RoleCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs;
  };

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    rentals: number;
    facebook_connections: number;
    token: number;
  };

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    rentals?: boolean | UserCountOutputTypeCountRentalsArgs;
    facebook_connections?:
      | boolean
      | UserCountOutputTypeCountFacebook_connectionsArgs;
    token?: boolean | UserCountOutputTypeCountTokenArgs;
  };

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRentalsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AdAccountRentalWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFacebook_connectionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: FacebookConnectionsWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTokenArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TokenWhereInput;
  };

  /**
   * Count Type SystemAdAccountCountOutputType
   */

  export type SystemAdAccountCountOutputType = {
    rentals: number;
  };

  export type SystemAdAccountCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    rentals?: boolean | SystemAdAccountCountOutputTypeCountRentalsArgs;
  };

  // Custom InputTypes
  /**
   * SystemAdAccountCountOutputType without action
   */
  export type SystemAdAccountCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SystemAdAccountCountOutputType
     */
    select?: SystemAdAccountCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * SystemAdAccountCountOutputType without action
   */
  export type SystemAdAccountCountOutputTypeCountRentalsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AdAccountRentalWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null;
    _min: RoleMinAggregateOutputType | null;
    _max: RoleMaxAggregateOutputType | null;
  };

  export type RoleMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type RoleMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type RoleCountAggregateOutputType = {
    id: number;
    name: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type RoleMinAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type RoleMaxAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type RoleCountAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type RoleAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Roles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Roles
     **/
    _count?: true | RoleCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: RoleMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: RoleMaxAggregateInputType;
  };

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
    [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>;
  };

  export type RoleGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: RoleWhereInput;
    orderBy?:
      | RoleOrderByWithAggregationInput
      | RoleOrderByWithAggregationInput[];
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum;
    having?: RoleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RoleCountAggregateInputType | true;
    _min?: RoleMinAggregateInputType;
    _max?: RoleMaxAggregateInputType;
  };

  export type RoleGroupByOutputType = {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    _count: RoleCountAggregateOutputType | null;
    _min: RoleMinAggregateOutputType | null;
    _max: RoleMaxAggregateOutputType | null;
  };

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> & {
        [P in keyof T & keyof RoleGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
          : GetScalarType<T[P], RoleGroupByOutputType[P]>;
      }
    >
  >;

  export type RoleSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      users?: boolean | Role$usersArgs<ExtArgs>;
      _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['role']
  >;

  export type RoleSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['role']
  >;

  export type RoleSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['role']
  >;

  export type RoleSelectScalar = {
    id?: boolean;
    name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type RoleOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'name' | 'createdAt' | 'updatedAt',
    ExtArgs['result']['role']
  >;
  export type RoleInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    users?: boolean | Role$usersArgs<ExtArgs>;
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type RoleIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type RoleIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $RolePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Role';
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['role']
    >;
    composites: {};
  };

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> =
    $Result.GetResult<Prisma.$RolePayload, S>;

  type RoleCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RoleCountAggregateInputType | true;
  };

  export interface RoleDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Role'];
      meta: { name: 'Role' };
    };
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(
      args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>,
    ): Prisma__RoleClient<
      $Result.GetResult<
        Prisma.$RolePayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(
      args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__RoleClient<
      $Result.GetResult<
        Prisma.$RolePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(
      args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>,
    ): Prisma__RoleClient<
      $Result.GetResult<
        Prisma.$RolePayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__RoleClient<
      $Result.GetResult<
        Prisma.$RolePayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     *
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     *
     */
    findMany<T extends RoleFindManyArgs>(
      args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$RolePayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     *
     */
    create<T extends RoleCreateArgs>(
      args: SelectSubset<T, RoleCreateArgs<ExtArgs>>,
    ): Prisma__RoleClient<
      $Result.GetResult<
        Prisma.$RolePayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends RoleCreateManyArgs>(
      args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(
      args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$RolePayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     *
     */
    delete<T extends RoleDeleteArgs>(
      args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>,
    ): Prisma__RoleClient<
      $Result.GetResult<
        Prisma.$RolePayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends RoleUpdateArgs>(
      args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>,
    ): Prisma__RoleClient<
      $Result.GetResult<
        Prisma.$RolePayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends RoleDeleteManyArgs>(
      args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends RoleUpdateManyArgs>(
      args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(
      args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$RolePayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(
      args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>,
    ): Prisma__RoleClient<
      $Result.GetResult<
        Prisma.$RolePayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
     **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends RoleAggregateArgs>(
      args: Subset<T, RoleAggregateArgs>,
    ): Prisma.PrismaPromise<GetRoleAggregateType<T>>;

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetRoleGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Role model
     */
    readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    users<T extends Role$usersArgs<ExtArgs> = {}>(
      args?: Subset<T, Role$usersArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<'Role', 'String'>;
    readonly name: FieldRef<'Role', 'String'>;
    readonly createdAt: FieldRef<'Role', 'DateTime'>;
    readonly updatedAt: FieldRef<'Role', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null;
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput;
  };

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null;
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput;
  };

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null;
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Roles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[];
  };

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null;
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Roles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[];
  };

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null;
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Roles.
     */
    skip?: number;
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[];
  };

  /**
   * Role create
   */
  export type RoleCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null;
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>;
  };

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null;
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Role update
   */
  export type RoleUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null;
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>;
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput;
  };

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>;
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput;
    /**
     * Limit how many Roles to update.
     */
    limit?: number;
  };

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null;
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>;
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput;
    /**
     * Limit how many Roles to update.
     */
    limit?: number;
  };

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null;
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput;
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>;
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>;
  };

  /**
   * Role delete
   */
  export type RoleDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null;
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput;
  };

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput;
    /**
     * Limit how many Roles to delete.
     */
    limit?: number;
  };

  /**
   * Role.users
   */
  export type Role$usersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    where?: UserWhereInput;
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    cursor?: UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * Role without action
   */
  export type RoleDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null;
  };

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserAvgAggregateOutputType = {
    instance_id: number | null;
    email_change_confirm_status: number | null;
  };

  export type UserSumAggregateOutputType = {
    instance_id: number | null;
    email_change_confirm_status: number | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    instance_id: number | null;
    aud: string | null;
    email: string | null;
    password: string | null;
    email_confirmed_at: Date | null;
    invited_at: Date | null;
    confirmation_token: string | null;
    confirmation_sent_at: Date | null;
    recovery_token: string | null;
    recovery_sent_at: Date | null;
    email_change_token_new: string | null;
    email_change: string | null;
    email_change_sent_at: Date | null;
    last_sign_in_at: Date | null;
    is_super_admin: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
    phone: string | null;
    phone_confirmed_at: Date | null;
    phone_change: string | null;
    phone_change_token: string | null;
    phone_change_sent_at: Date | null;
    confirmed_at: Date | null;
    email_change_token_current: string | null;
    email_change_confirm_status: number | null;
    banned_until: Date | null;
    reauthentication_token: string | null;
    reauthentication_sent_at: Date | null;
    is_sso_user: boolean | null;
    deleted_at: Date | null;
    is_anonymous: boolean | null;
    role_id: string | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    instance_id: number | null;
    aud: string | null;
    email: string | null;
    password: string | null;
    email_confirmed_at: Date | null;
    invited_at: Date | null;
    confirmation_token: string | null;
    confirmation_sent_at: Date | null;
    recovery_token: string | null;
    recovery_sent_at: Date | null;
    email_change_token_new: string | null;
    email_change: string | null;
    email_change_sent_at: Date | null;
    last_sign_in_at: Date | null;
    is_super_admin: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
    phone: string | null;
    phone_confirmed_at: Date | null;
    phone_change: string | null;
    phone_change_token: string | null;
    phone_change_sent_at: Date | null;
    confirmed_at: Date | null;
    email_change_token_current: string | null;
    email_change_confirm_status: number | null;
    banned_until: Date | null;
    reauthentication_token: string | null;
    reauthentication_sent_at: Date | null;
    is_sso_user: boolean | null;
    deleted_at: Date | null;
    is_anonymous: boolean | null;
    role_id: string | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    instance_id: number;
    aud: number;
    email: number;
    password: number;
    email_confirmed_at: number;
    invited_at: number;
    confirmation_token: number;
    confirmation_sent_at: number;
    recovery_token: number;
    recovery_sent_at: number;
    email_change_token_new: number;
    email_change: number;
    email_change_sent_at: number;
    last_sign_in_at: number;
    raw_app_meta_data: number;
    raw_user_meta_data: number;
    is_super_admin: number;
    created_at: number;
    updated_at: number;
    phone: number;
    phone_confirmed_at: number;
    phone_change: number;
    phone_change_token: number;
    phone_change_sent_at: number;
    confirmed_at: number;
    email_change_token_current: number;
    email_change_confirm_status: number;
    banned_until: number;
    reauthentication_token: number;
    reauthentication_sent_at: number;
    is_sso_user: number;
    deleted_at: number;
    is_anonymous: number;
    role_id: number;
    _all: number;
  };

  export type UserAvgAggregateInputType = {
    instance_id?: true;
    email_change_confirm_status?: true;
  };

  export type UserSumAggregateInputType = {
    instance_id?: true;
    email_change_confirm_status?: true;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    instance_id?: true;
    aud?: true;
    email?: true;
    password?: true;
    email_confirmed_at?: true;
    invited_at?: true;
    confirmation_token?: true;
    confirmation_sent_at?: true;
    recovery_token?: true;
    recovery_sent_at?: true;
    email_change_token_new?: true;
    email_change?: true;
    email_change_sent_at?: true;
    last_sign_in_at?: true;
    is_super_admin?: true;
    created_at?: true;
    updated_at?: true;
    phone?: true;
    phone_confirmed_at?: true;
    phone_change?: true;
    phone_change_token?: true;
    phone_change_sent_at?: true;
    confirmed_at?: true;
    email_change_token_current?: true;
    email_change_confirm_status?: true;
    banned_until?: true;
    reauthentication_token?: true;
    reauthentication_sent_at?: true;
    is_sso_user?: true;
    deleted_at?: true;
    is_anonymous?: true;
    role_id?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    instance_id?: true;
    aud?: true;
    email?: true;
    password?: true;
    email_confirmed_at?: true;
    invited_at?: true;
    confirmation_token?: true;
    confirmation_sent_at?: true;
    recovery_token?: true;
    recovery_sent_at?: true;
    email_change_token_new?: true;
    email_change?: true;
    email_change_sent_at?: true;
    last_sign_in_at?: true;
    is_super_admin?: true;
    created_at?: true;
    updated_at?: true;
    phone?: true;
    phone_confirmed_at?: true;
    phone_change?: true;
    phone_change_token?: true;
    phone_change_sent_at?: true;
    confirmed_at?: true;
    email_change_token_current?: true;
    email_change_confirm_status?: true;
    banned_until?: true;
    reauthentication_token?: true;
    reauthentication_sent_at?: true;
    is_sso_user?: true;
    deleted_at?: true;
    is_anonymous?: true;
    role_id?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    instance_id?: true;
    aud?: true;
    email?: true;
    password?: true;
    email_confirmed_at?: true;
    invited_at?: true;
    confirmation_token?: true;
    confirmation_sent_at?: true;
    recovery_token?: true;
    recovery_sent_at?: true;
    email_change_token_new?: true;
    email_change?: true;
    email_change_sent_at?: true;
    last_sign_in_at?: true;
    raw_app_meta_data?: true;
    raw_user_meta_data?: true;
    is_super_admin?: true;
    created_at?: true;
    updated_at?: true;
    phone?: true;
    phone_confirmed_at?: true;
    phone_change?: true;
    phone_change_token?: true;
    phone_change_sent_at?: true;
    confirmed_at?: true;
    email_change_token_current?: true;
    email_change_confirm_status?: true;
    banned_until?: true;
    reauthentication_token?: true;
    reauthentication_sent_at?: true;
    is_sso_user?: true;
    deleted_at?: true;
    is_anonymous?: true;
    role_id?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: UserAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: UserSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
    orderBy?:
      | UserOrderByWithAggregationInput
      | UserOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    instance_id: number | null;
    aud: string | null;
    email: string;
    password: string;
    email_confirmed_at: Date | null;
    invited_at: Date | null;
    confirmation_token: string | null;
    confirmation_sent_at: Date | null;
    recovery_token: string | null;
    recovery_sent_at: Date | null;
    email_change_token_new: string | null;
    email_change: string | null;
    email_change_sent_at: Date | null;
    last_sign_in_at: Date | null;
    raw_app_meta_data: JsonValue | null;
    raw_user_meta_data: JsonValue | null;
    is_super_admin: boolean;
    created_at: Date;
    updated_at: Date;
    phone: string | null;
    phone_confirmed_at: Date | null;
    phone_change: string | null;
    phone_change_token: string | null;
    phone_change_sent_at: Date | null;
    confirmed_at: Date | null;
    email_change_token_current: string | null;
    email_change_confirm_status: number | null;
    banned_until: Date | null;
    reauthentication_token: string | null;
    reauthentication_sent_at: Date | null;
    is_sso_user: boolean;
    deleted_at: Date | null;
    is_anonymous: boolean;
    role_id: string;
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      instance_id?: boolean;
      aud?: boolean;
      email?: boolean;
      password?: boolean;
      email_confirmed_at?: boolean;
      invited_at?: boolean;
      confirmation_token?: boolean;
      confirmation_sent_at?: boolean;
      recovery_token?: boolean;
      recovery_sent_at?: boolean;
      email_change_token_new?: boolean;
      email_change?: boolean;
      email_change_sent_at?: boolean;
      last_sign_in_at?: boolean;
      raw_app_meta_data?: boolean;
      raw_user_meta_data?: boolean;
      is_super_admin?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      phone?: boolean;
      phone_confirmed_at?: boolean;
      phone_change?: boolean;
      phone_change_token?: boolean;
      phone_change_sent_at?: boolean;
      confirmed_at?: boolean;
      email_change_token_current?: boolean;
      email_change_confirm_status?: boolean;
      banned_until?: boolean;
      reauthentication_token?: boolean;
      reauthentication_sent_at?: boolean;
      is_sso_user?: boolean;
      deleted_at?: boolean;
      is_anonymous?: boolean;
      role_id?: boolean;
      rentals?: boolean | User$rentalsArgs<ExtArgs>;
      profile?: boolean | User$profileArgs<ExtArgs>;
      role?: boolean | RoleDefaultArgs<ExtArgs>;
      facebook_connections?: boolean | User$facebook_connectionsArgs<ExtArgs>;
      token?: boolean | User$tokenArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      instance_id?: boolean;
      aud?: boolean;
      email?: boolean;
      password?: boolean;
      email_confirmed_at?: boolean;
      invited_at?: boolean;
      confirmation_token?: boolean;
      confirmation_sent_at?: boolean;
      recovery_token?: boolean;
      recovery_sent_at?: boolean;
      email_change_token_new?: boolean;
      email_change?: boolean;
      email_change_sent_at?: boolean;
      last_sign_in_at?: boolean;
      raw_app_meta_data?: boolean;
      raw_user_meta_data?: boolean;
      is_super_admin?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      phone?: boolean;
      phone_confirmed_at?: boolean;
      phone_change?: boolean;
      phone_change_token?: boolean;
      phone_change_sent_at?: boolean;
      confirmed_at?: boolean;
      email_change_token_current?: boolean;
      email_change_confirm_status?: boolean;
      banned_until?: boolean;
      reauthentication_token?: boolean;
      reauthentication_sent_at?: boolean;
      is_sso_user?: boolean;
      deleted_at?: boolean;
      is_anonymous?: boolean;
      role_id?: boolean;
      role?: boolean | RoleDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      instance_id?: boolean;
      aud?: boolean;
      email?: boolean;
      password?: boolean;
      email_confirmed_at?: boolean;
      invited_at?: boolean;
      confirmation_token?: boolean;
      confirmation_sent_at?: boolean;
      recovery_token?: boolean;
      recovery_sent_at?: boolean;
      email_change_token_new?: boolean;
      email_change?: boolean;
      email_change_sent_at?: boolean;
      last_sign_in_at?: boolean;
      raw_app_meta_data?: boolean;
      raw_user_meta_data?: boolean;
      is_super_admin?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      phone?: boolean;
      phone_confirmed_at?: boolean;
      phone_change?: boolean;
      phone_change_token?: boolean;
      phone_change_sent_at?: boolean;
      confirmed_at?: boolean;
      email_change_token_current?: boolean;
      email_change_confirm_status?: boolean;
      banned_until?: boolean;
      reauthentication_token?: boolean;
      reauthentication_sent_at?: boolean;
      is_sso_user?: boolean;
      deleted_at?: boolean;
      is_anonymous?: boolean;
      role_id?: boolean;
      role?: boolean | RoleDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectScalar = {
    id?: boolean;
    instance_id?: boolean;
    aud?: boolean;
    email?: boolean;
    password?: boolean;
    email_confirmed_at?: boolean;
    invited_at?: boolean;
    confirmation_token?: boolean;
    confirmation_sent_at?: boolean;
    recovery_token?: boolean;
    recovery_sent_at?: boolean;
    email_change_token_new?: boolean;
    email_change?: boolean;
    email_change_sent_at?: boolean;
    last_sign_in_at?: boolean;
    raw_app_meta_data?: boolean;
    raw_user_meta_data?: boolean;
    is_super_admin?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    phone?: boolean;
    phone_confirmed_at?: boolean;
    phone_change?: boolean;
    phone_change_token?: boolean;
    phone_change_sent_at?: boolean;
    confirmed_at?: boolean;
    email_change_token_current?: boolean;
    email_change_confirm_status?: boolean;
    banned_until?: boolean;
    reauthentication_token?: boolean;
    reauthentication_sent_at?: boolean;
    is_sso_user?: boolean;
    deleted_at?: boolean;
    is_anonymous?: boolean;
    role_id?: boolean;
  };

  export type UserOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'instance_id'
    | 'aud'
    | 'email'
    | 'password'
    | 'email_confirmed_at'
    | 'invited_at'
    | 'confirmation_token'
    | 'confirmation_sent_at'
    | 'recovery_token'
    | 'recovery_sent_at'
    | 'email_change_token_new'
    | 'email_change'
    | 'email_change_sent_at'
    | 'last_sign_in_at'
    | 'raw_app_meta_data'
    | 'raw_user_meta_data'
    | 'is_super_admin'
    | 'created_at'
    | 'updated_at'
    | 'phone'
    | 'phone_confirmed_at'
    | 'phone_change'
    | 'phone_change_token'
    | 'phone_change_sent_at'
    | 'confirmed_at'
    | 'email_change_token_current'
    | 'email_change_confirm_status'
    | 'banned_until'
    | 'reauthentication_token'
    | 'reauthentication_sent_at'
    | 'is_sso_user'
    | 'deleted_at'
    | 'is_anonymous'
    | 'role_id',
    ExtArgs['result']['user']
  >;
  export type UserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    rentals?: boolean | User$rentalsArgs<ExtArgs>;
    profile?: boolean | User$profileArgs<ExtArgs>;
    role?: boolean | RoleDefaultArgs<ExtArgs>;
    facebook_connections?: boolean | User$facebook_connectionsArgs<ExtArgs>;
    token?: boolean | User$tokenArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type UserIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    role?: boolean | RoleDefaultArgs<ExtArgs>;
  };
  export type UserIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    role?: boolean | RoleDefaultArgs<ExtArgs>;
  };

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'User';
    objects: {
      rentals: Prisma.$AdAccountRentalPayload<ExtArgs>[];
      profile: Prisma.$ProfilePayload<ExtArgs> | null;
      role: Prisma.$RolePayload<ExtArgs>;
      facebook_connections: Prisma.$FacebookConnectionsPayload<ExtArgs>[];
      token: Prisma.$TokenPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        instance_id: number | null;
        aud: string | null;
        email: string;
        password: string;
        email_confirmed_at: Date | null;
        invited_at: Date | null;
        confirmation_token: string | null;
        confirmation_sent_at: Date | null;
        recovery_token: string | null;
        recovery_sent_at: Date | null;
        email_change_token_new: string | null;
        email_change: string | null;
        email_change_sent_at: Date | null;
        last_sign_in_at: Date | null;
        raw_app_meta_data: Prisma.JsonValue | null;
        raw_user_meta_data: Prisma.JsonValue | null;
        is_super_admin: boolean;
        created_at: Date;
        updated_at: Date;
        phone: string | null;
        phone_confirmed_at: Date | null;
        phone_change: string | null;
        phone_change_token: string | null;
        phone_change_sent_at: Date | null;
        confirmed_at: Date | null;
        email_change_token_current: string | null;
        email_change_confirm_status: number | null;
        banned_until: Date | null;
        reauthentication_token: string | null;
        reauthentication_sent_at: Date | null;
        is_sso_user: boolean;
        deleted_at: Date | null;
        is_anonymous: boolean;
        role_id: string;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>;

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['User'];
      meta: { name: 'User' };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    rentals<T extends User$rentalsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$rentalsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$AdAccountRentalPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    profile<T extends User$profileArgs<ExtArgs> = {}>(
      args?: Subset<T, User$profileArgs<ExtArgs>>,
    ): Prisma__ProfileClient<
      $Result.GetResult<
        Prisma.$ProfilePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, RoleDefaultArgs<ExtArgs>>,
    ): Prisma__RoleClient<
      | $Result.GetResult<
          Prisma.$RolePayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    facebook_connections<T extends User$facebook_connectionsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$facebook_connectionsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$FacebookConnectionsPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    token<T extends User$tokenArgs<ExtArgs> = {}>(
      args?: Subset<T, User$tokenArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$TokenPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<'User', 'String'>;
    readonly instance_id: FieldRef<'User', 'Int'>;
    readonly aud: FieldRef<'User', 'String'>;
    readonly email: FieldRef<'User', 'String'>;
    readonly password: FieldRef<'User', 'String'>;
    readonly email_confirmed_at: FieldRef<'User', 'DateTime'>;
    readonly invited_at: FieldRef<'User', 'DateTime'>;
    readonly confirmation_token: FieldRef<'User', 'String'>;
    readonly confirmation_sent_at: FieldRef<'User', 'DateTime'>;
    readonly recovery_token: FieldRef<'User', 'String'>;
    readonly recovery_sent_at: FieldRef<'User', 'DateTime'>;
    readonly email_change_token_new: FieldRef<'User', 'String'>;
    readonly email_change: FieldRef<'User', 'String'>;
    readonly email_change_sent_at: FieldRef<'User', 'DateTime'>;
    readonly last_sign_in_at: FieldRef<'User', 'DateTime'>;
    readonly raw_app_meta_data: FieldRef<'User', 'Json'>;
    readonly raw_user_meta_data: FieldRef<'User', 'Json'>;
    readonly is_super_admin: FieldRef<'User', 'Boolean'>;
    readonly created_at: FieldRef<'User', 'DateTime'>;
    readonly updated_at: FieldRef<'User', 'DateTime'>;
    readonly phone: FieldRef<'User', 'String'>;
    readonly phone_confirmed_at: FieldRef<'User', 'DateTime'>;
    readonly phone_change: FieldRef<'User', 'String'>;
    readonly phone_change_token: FieldRef<'User', 'String'>;
    readonly phone_change_sent_at: FieldRef<'User', 'DateTime'>;
    readonly confirmed_at: FieldRef<'User', 'DateTime'>;
    readonly email_change_token_current: FieldRef<'User', 'String'>;
    readonly email_change_confirm_status: FieldRef<'User', 'Int'>;
    readonly banned_until: FieldRef<'User', 'DateTime'>;
    readonly reauthentication_token: FieldRef<'User', 'String'>;
    readonly reauthentication_sent_at: FieldRef<'User', 'DateTime'>;
    readonly is_sso_user: FieldRef<'User', 'Boolean'>;
    readonly deleted_at: FieldRef<'User', 'DateTime'>;
    readonly is_anonymous: FieldRef<'User', 'Boolean'>;
    readonly role_id: FieldRef<'User', 'String'>;
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
  };

  /**
   * User.rentals
   */
  export type User$rentalsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdAccountRental
     */
    select?: AdAccountRentalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdAccountRental
     */
    omit?: AdAccountRentalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdAccountRentalInclude<ExtArgs> | null;
    where?: AdAccountRentalWhereInput;
    orderBy?:
      | AdAccountRentalOrderByWithRelationInput
      | AdAccountRentalOrderByWithRelationInput[];
    cursor?: AdAccountRentalWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | AdAccountRentalScalarFieldEnum
      | AdAccountRentalScalarFieldEnum[];
  };

  /**
   * User.profile
   */
  export type User$profileArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null;
    where?: ProfileWhereInput;
  };

  /**
   * User.facebook_connections
   */
  export type User$facebook_connectionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FacebookConnections
     */
    select?: FacebookConnectionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FacebookConnections
     */
    omit?: FacebookConnectionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookConnectionsInclude<ExtArgs> | null;
    where?: FacebookConnectionsWhereInput;
    orderBy?:
      | FacebookConnectionsOrderByWithRelationInput
      | FacebookConnectionsOrderByWithRelationInput[];
    cursor?: FacebookConnectionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | FacebookConnectionsScalarFieldEnum
      | FacebookConnectionsScalarFieldEnum[];
  };

  /**
   * User.token
   */
  export type User$tokenArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null;
    where?: TokenWhereInput;
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[];
    cursor?: TokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[];
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
  };

  /**
   * Model Token
   */

  export type AggregateToken = {
    _count: TokenCountAggregateOutputType | null;
    _min: TokenMinAggregateOutputType | null;
    _max: TokenMaxAggregateOutputType | null;
  };

  export type TokenMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TokenMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TokenCountAggregateOutputType = {
    id: number;
    user_id: number;
    user_token: number;
    access_token: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type TokenMinAggregateInputType = {
    id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TokenMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TokenCountAggregateInputType = {
    id?: true;
    user_id?: true;
    user_token?: true;
    access_token?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type TokenAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Token to aggregate.
     */
    where?: TokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: TokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tokens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Tokens
     **/
    _count?: true | TokenCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TokenMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TokenMaxAggregateInputType;
  };

  export type GetTokenAggregateType<T extends TokenAggregateArgs> = {
    [P in keyof T & keyof AggregateToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToken[P]>
      : GetScalarType<T[P], AggregateToken[P]>;
  };

  export type TokenGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TokenWhereInput;
    orderBy?:
      | TokenOrderByWithAggregationInput
      | TokenOrderByWithAggregationInput[];
    by: TokenScalarFieldEnum[] | TokenScalarFieldEnum;
    having?: TokenScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TokenCountAggregateInputType | true;
    _min?: TokenMinAggregateInputType;
    _max?: TokenMaxAggregateInputType;
  };

  export type TokenGroupByOutputType = {
    id: string;
    user_id: string;
    user_token: string[];
    access_token: string[];
    created_at: Date;
    updated_at: Date;
    _count: TokenCountAggregateOutputType | null;
    _min: TokenMinAggregateOutputType | null;
    _max: TokenMaxAggregateOutputType | null;
  };

  type GetTokenGroupByPayload<T extends TokenGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<TokenGroupByOutputType, T['by']> & {
          [P in keyof T & keyof TokenGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenGroupByOutputType[P]>
            : GetScalarType<T[P], TokenGroupByOutputType[P]>;
        }
      >
    >;

  export type TokenSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      user_token?: boolean;
      access_token?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['token']
  >;

  export type TokenSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      user_token?: boolean;
      access_token?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['token']
  >;

  export type TokenSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      user_token?: boolean;
      access_token?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['token']
  >;

  export type TokenSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    user_token?: boolean;
    access_token?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type TokenOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'user_id'
    | 'user_token'
    | 'access_token'
    | 'created_at'
    | 'updated_at',
    ExtArgs['result']['token']
  >;
  export type TokenInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type TokenIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type TokenIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $TokenPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Token';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        user_token: string[];
        access_token: string[];
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['token']
    >;
    composites: {};
  };

  type TokenGetPayload<
    S extends boolean | null | undefined | TokenDefaultArgs,
  > = $Result.GetResult<Prisma.$TokenPayload, S>;

  type TokenCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<TokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TokenCountAggregateInputType | true;
  };

  export interface TokenDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Token'];
      meta: { name: 'Token' };
    };
    /**
     * Find zero or one Token that matches the filter.
     * @param {TokenFindUniqueArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenFindUniqueArgs>(
      args: SelectSubset<T, TokenFindUniqueArgs<ExtArgs>>,
    ): Prisma__TokenClient<
      $Result.GetResult<
        Prisma.$TokenPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Token that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokenFindUniqueOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenFindUniqueOrThrowArgs>(
      args: SelectSubset<T, TokenFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__TokenClient<
      $Result.GetResult<
        Prisma.$TokenPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenFindFirstArgs>(
      args?: SelectSubset<T, TokenFindFirstArgs<ExtArgs>>,
    ): Prisma__TokenClient<
      $Result.GetResult<
        Prisma.$TokenPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TokenFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__TokenClient<
      $Result.GetResult<
        Prisma.$TokenPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.token.findMany()
     *
     * // Get first 10 Tokens
     * const tokens = await prisma.token.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const tokenWithIdOnly = await prisma.token.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TokenFindManyArgs>(
      args?: SelectSubset<T, TokenFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TokenPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Token.
     * @param {TokenCreateArgs} args - Arguments to create a Token.
     * @example
     * // Create one Token
     * const Token = await prisma.token.create({
     *   data: {
     *     // ... data to create a Token
     *   }
     * })
     *
     */
    create<T extends TokenCreateArgs>(
      args: SelectSubset<T, TokenCreateArgs<ExtArgs>>,
    ): Prisma__TokenClient<
      $Result.GetResult<
        Prisma.$TokenPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Tokens.
     * @param {TokenCreateManyArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TokenCreateManyArgs>(
      args?: SelectSubset<T, TokenCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Tokens and returns the data saved in the database.
     * @param {TokenCreateManyAndReturnArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TokenCreateManyAndReturnArgs>(
      args?: SelectSubset<T, TokenCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TokenPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Token.
     * @param {TokenDeleteArgs} args - Arguments to delete one Token.
     * @example
     * // Delete one Token
     * const Token = await prisma.token.delete({
     *   where: {
     *     // ... filter to delete one Token
     *   }
     * })
     *
     */
    delete<T extends TokenDeleteArgs>(
      args: SelectSubset<T, TokenDeleteArgs<ExtArgs>>,
    ): Prisma__TokenClient<
      $Result.GetResult<
        Prisma.$TokenPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Token.
     * @param {TokenUpdateArgs} args - Arguments to update one Token.
     * @example
     * // Update one Token
     * const token = await prisma.token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TokenUpdateArgs>(
      args: SelectSubset<T, TokenUpdateArgs<ExtArgs>>,
    ): Prisma__TokenClient<
      $Result.GetResult<
        Prisma.$TokenPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Tokens.
     * @param {TokenDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TokenDeleteManyArgs>(
      args?: SelectSubset<T, TokenDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TokenUpdateManyArgs>(
      args: SelectSubset<T, TokenUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Tokens and returns the data updated in the database.
     * @param {TokenUpdateManyAndReturnArgs} args - Arguments to update many Tokens.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends TokenUpdateManyAndReturnArgs>(
      args: SelectSubset<T, TokenUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TokenPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Token.
     * @param {TokenUpsertArgs} args - Arguments to update or create a Token.
     * @example
     * // Update or create a Token
     * const token = await prisma.token.upsert({
     *   create: {
     *     // ... data to create a Token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Token we want to update
     *   }
     * })
     */
    upsert<T extends TokenUpsertArgs>(
      args: SelectSubset<T, TokenUpsertArgs<ExtArgs>>,
    ): Prisma__TokenClient<
      $Result.GetResult<
        Prisma.$TokenPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.token.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
     **/
    count<T extends TokenCountArgs>(
      args?: Subset<T, TokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends TokenAggregateArgs>(
      args: Subset<T, TokenAggregateArgs>,
    ): Prisma.PrismaPromise<GetTokenAggregateType<T>>;

    /**
     * Group by Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends TokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenGroupByArgs['orderBy'] }
        : { orderBy?: TokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, TokenGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetTokenGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Token model
     */
    readonly fields: TokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Token model
   */
  interface TokenFieldRefs {
    readonly id: FieldRef<'Token', 'String'>;
    readonly user_id: FieldRef<'Token', 'String'>;
    readonly user_token: FieldRef<'Token', 'String[]'>;
    readonly access_token: FieldRef<'Token', 'String[]'>;
    readonly created_at: FieldRef<'Token', 'DateTime'>;
    readonly updated_at: FieldRef<'Token', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Token findUnique
   */
  export type TokenFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null;
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput;
  };

  /**
   * Token findUniqueOrThrow
   */
  export type TokenFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null;
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput;
  };

  /**
   * Token findFirst
   */
  export type TokenFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null;
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tokens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[];
  };

  /**
   * Token findFirstOrThrow
   */
  export type TokenFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null;
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tokens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[];
  };

  /**
   * Token findMany
   */
  export type TokenFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null;
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Tokens.
     */
    cursor?: TokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tokens.
     */
    skip?: number;
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[];
  };

  /**
   * Token create
   */
  export type TokenCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null;
    /**
     * The data needed to create a Token.
     */
    data: XOR<TokenCreateInput, TokenUncheckedCreateInput>;
  };

  /**
   * Token createMany
   */
  export type TokenCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Token createManyAndReturn
   */
  export type TokenCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null;
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Token update
   */
  export type TokenUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null;
    /**
     * The data needed to update a Token.
     */
    data: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>;
    /**
     * Choose, which Token to update.
     */
    where: TokenWhereUniqueInput;
  };

  /**
   * Token updateMany
   */
  export type TokenUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>;
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput;
    /**
     * Limit how many Tokens to update.
     */
    limit?: number;
  };

  /**
   * Token updateManyAndReturn
   */
  export type TokenUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null;
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>;
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput;
    /**
     * Limit how many Tokens to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Token upsert
   */
  export type TokenUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null;
    /**
     * The filter to search for the Token to update in case it exists.
     */
    where: TokenWhereUniqueInput;
    /**
     * In case the Token found by the `where` argument doesn't exist, create a new Token with this data.
     */
    create: XOR<TokenCreateInput, TokenUncheckedCreateInput>;
    /**
     * In case the Token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>;
  };

  /**
   * Token delete
   */
  export type TokenDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null;
    /**
     * Filter which Token to delete.
     */
    where: TokenWhereUniqueInput;
  };

  /**
   * Token deleteMany
   */
  export type TokenDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Tokens to delete
     */
    where?: TokenWhereInput;
    /**
     * Limit how many Tokens to delete.
     */
    limit?: number;
  };

  /**
   * Token without action
   */
  export type TokenDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null;
  };

  /**
   * Model FacebookFanPage
   */

  export type AggregateFacebookFanPage = {
    _count: FacebookFanPageCountAggregateOutputType | null;
    _avg: FacebookFanPageAvgAggregateOutputType | null;
    _sum: FacebookFanPageSumAggregateOutputType | null;
    _min: FacebookFanPageMinAggregateOutputType | null;
    _max: FacebookFanPageMaxAggregateOutputType | null;
  };

  export type FacebookFanPageAvgAggregateOutputType = {
    follower_count: number | null;
  };

  export type FacebookFanPageSumAggregateOutputType = {
    follower_count: number | null;
  };

  export type FacebookFanPageMinAggregateOutputType = {
    id: string | null;
    page_name: string | null;
    page_category: string | null;
    page_url: string | null;
    page_avatar_url: string | null;
    follower_count: number | null;
    page_type: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    connection_id: string | null;
  };

  export type FacebookFanPageMaxAggregateOutputType = {
    id: string | null;
    page_name: string | null;
    page_category: string | null;
    page_url: string | null;
    page_avatar_url: string | null;
    follower_count: number | null;
    page_type: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    connection_id: string | null;
  };

  export type FacebookFanPageCountAggregateOutputType = {
    id: number;
    page_name: number;
    page_category: number;
    page_url: number;
    page_avatar_url: number;
    follower_count: number;
    page_type: number;
    created_at: number;
    updated_at: number;
    connection_id: number;
    _all: number;
  };

  export type FacebookFanPageAvgAggregateInputType = {
    follower_count?: true;
  };

  export type FacebookFanPageSumAggregateInputType = {
    follower_count?: true;
  };

  export type FacebookFanPageMinAggregateInputType = {
    id?: true;
    page_name?: true;
    page_category?: true;
    page_url?: true;
    page_avatar_url?: true;
    follower_count?: true;
    page_type?: true;
    created_at?: true;
    updated_at?: true;
    connection_id?: true;
  };

  export type FacebookFanPageMaxAggregateInputType = {
    id?: true;
    page_name?: true;
    page_category?: true;
    page_url?: true;
    page_avatar_url?: true;
    follower_count?: true;
    page_type?: true;
    created_at?: true;
    updated_at?: true;
    connection_id?: true;
  };

  export type FacebookFanPageCountAggregateInputType = {
    id?: true;
    page_name?: true;
    page_category?: true;
    page_url?: true;
    page_avatar_url?: true;
    follower_count?: true;
    page_type?: true;
    created_at?: true;
    updated_at?: true;
    connection_id?: true;
    _all?: true;
  };

  export type FacebookFanPageAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which FacebookFanPage to aggregate.
     */
    where?: FacebookFanPageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FacebookFanPages to fetch.
     */
    orderBy?:
      | FacebookFanPageOrderByWithRelationInput
      | FacebookFanPageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: FacebookFanPageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FacebookFanPages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FacebookFanPages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned FacebookFanPages
     **/
    _count?: true | FacebookFanPageCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: FacebookFanPageAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: FacebookFanPageSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: FacebookFanPageMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: FacebookFanPageMaxAggregateInputType;
  };

  export type GetFacebookFanPageAggregateType<
    T extends FacebookFanPageAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateFacebookFanPage]: P extends
      | '_count'
      | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacebookFanPage[P]>
      : GetScalarType<T[P], AggregateFacebookFanPage[P]>;
  };

  export type FacebookFanPageGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: FacebookFanPageWhereInput;
    orderBy?:
      | FacebookFanPageOrderByWithAggregationInput
      | FacebookFanPageOrderByWithAggregationInput[];
    by: FacebookFanPageScalarFieldEnum[] | FacebookFanPageScalarFieldEnum;
    having?: FacebookFanPageScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FacebookFanPageCountAggregateInputType | true;
    _avg?: FacebookFanPageAvgAggregateInputType;
    _sum?: FacebookFanPageSumAggregateInputType;
    _min?: FacebookFanPageMinAggregateInputType;
    _max?: FacebookFanPageMaxAggregateInputType;
  };

  export type FacebookFanPageGroupByOutputType = {
    id: string;
    page_name: string;
    page_category: string;
    page_url: string;
    page_avatar_url: string;
    follower_count: number;
    page_type: string;
    created_at: Date;
    updated_at: Date;
    connection_id: string;
    _count: FacebookFanPageCountAggregateOutputType | null;
    _avg: FacebookFanPageAvgAggregateOutputType | null;
    _sum: FacebookFanPageSumAggregateOutputType | null;
    _min: FacebookFanPageMinAggregateOutputType | null;
    _max: FacebookFanPageMaxAggregateOutputType | null;
  };

  type GetFacebookFanPageGroupByPayload<T extends FacebookFanPageGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<FacebookFanPageGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof FacebookFanPageGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacebookFanPageGroupByOutputType[P]>
            : GetScalarType<T[P], FacebookFanPageGroupByOutputType[P]>;
        }
      >
    >;

  export type FacebookFanPageSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      page_name?: boolean;
      page_category?: boolean;
      page_url?: boolean;
      page_avatar_url?: boolean;
      follower_count?: boolean;
      page_type?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      connection_id?: boolean;
      facebook_page_insights?:
        | boolean
        | FacebookFanPage$facebook_page_insightsArgs<ExtArgs>;
      facebookConnections?:
        | boolean
        | FacebookFanPage$facebookConnectionsArgs<ExtArgs>;
    },
    ExtArgs['result']['facebookFanPage']
  >;

  export type FacebookFanPageSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      page_name?: boolean;
      page_category?: boolean;
      page_url?: boolean;
      page_avatar_url?: boolean;
      follower_count?: boolean;
      page_type?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      connection_id?: boolean;
    },
    ExtArgs['result']['facebookFanPage']
  >;

  export type FacebookFanPageSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      page_name?: boolean;
      page_category?: boolean;
      page_url?: boolean;
      page_avatar_url?: boolean;
      follower_count?: boolean;
      page_type?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      connection_id?: boolean;
    },
    ExtArgs['result']['facebookFanPage']
  >;

  export type FacebookFanPageSelectScalar = {
    id?: boolean;
    page_name?: boolean;
    page_category?: boolean;
    page_url?: boolean;
    page_avatar_url?: boolean;
    follower_count?: boolean;
    page_type?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    connection_id?: boolean;
  };

  export type FacebookFanPageOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'page_name'
    | 'page_category'
    | 'page_url'
    | 'page_avatar_url'
    | 'follower_count'
    | 'page_type'
    | 'created_at'
    | 'updated_at'
    | 'connection_id',
    ExtArgs['result']['facebookFanPage']
  >;
  export type FacebookFanPageInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    facebook_page_insights?:
      | boolean
      | FacebookFanPage$facebook_page_insightsArgs<ExtArgs>;
    facebookConnections?:
      | boolean
      | FacebookFanPage$facebookConnectionsArgs<ExtArgs>;
  };
  export type FacebookFanPageIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type FacebookFanPageIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $FacebookFanPagePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'FacebookFanPage';
    objects: {
      facebook_page_insights: Prisma.$FacebookPageInsightsPayload<ExtArgs> | null;
      facebookConnections: Prisma.$FacebookConnectionsPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        page_name: string;
        page_category: string;
        page_url: string;
        page_avatar_url: string;
        follower_count: number;
        page_type: string;
        created_at: Date;
        updated_at: Date;
        connection_id: string;
      },
      ExtArgs['result']['facebookFanPage']
    >;
    composites: {};
  };

  type FacebookFanPageGetPayload<
    S extends boolean | null | undefined | FacebookFanPageDefaultArgs,
  > = $Result.GetResult<Prisma.$FacebookFanPagePayload, S>;

  type FacebookFanPageCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    FacebookFanPageFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: FacebookFanPageCountAggregateInputType | true;
  };

  export interface FacebookFanPageDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['FacebookFanPage'];
      meta: { name: 'FacebookFanPage' };
    };
    /**
     * Find zero or one FacebookFanPage that matches the filter.
     * @param {FacebookFanPageFindUniqueArgs} args - Arguments to find a FacebookFanPage
     * @example
     * // Get one FacebookFanPage
     * const facebookFanPage = await prisma.facebookFanPage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacebookFanPageFindUniqueArgs>(
      args: SelectSubset<T, FacebookFanPageFindUniqueArgs<ExtArgs>>,
    ): Prisma__FacebookFanPageClient<
      $Result.GetResult<
        Prisma.$FacebookFanPagePayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one FacebookFanPage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FacebookFanPageFindUniqueOrThrowArgs} args - Arguments to find a FacebookFanPage
     * @example
     * // Get one FacebookFanPage
     * const facebookFanPage = await prisma.facebookFanPage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacebookFanPageFindUniqueOrThrowArgs>(
      args: SelectSubset<T, FacebookFanPageFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__FacebookFanPageClient<
      $Result.GetResult<
        Prisma.$FacebookFanPagePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first FacebookFanPage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookFanPageFindFirstArgs} args - Arguments to find a FacebookFanPage
     * @example
     * // Get one FacebookFanPage
     * const facebookFanPage = await prisma.facebookFanPage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacebookFanPageFindFirstArgs>(
      args?: SelectSubset<T, FacebookFanPageFindFirstArgs<ExtArgs>>,
    ): Prisma__FacebookFanPageClient<
      $Result.GetResult<
        Prisma.$FacebookFanPagePayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first FacebookFanPage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookFanPageFindFirstOrThrowArgs} args - Arguments to find a FacebookFanPage
     * @example
     * // Get one FacebookFanPage
     * const facebookFanPage = await prisma.facebookFanPage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacebookFanPageFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FacebookFanPageFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__FacebookFanPageClient<
      $Result.GetResult<
        Prisma.$FacebookFanPagePayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more FacebookFanPages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookFanPageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FacebookFanPages
     * const facebookFanPages = await prisma.facebookFanPage.findMany()
     *
     * // Get first 10 FacebookFanPages
     * const facebookFanPages = await prisma.facebookFanPage.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const facebookFanPageWithIdOnly = await prisma.facebookFanPage.findMany({ select: { id: true } })
     *
     */
    findMany<T extends FacebookFanPageFindManyArgs>(
      args?: SelectSubset<T, FacebookFanPageFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$FacebookFanPagePayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a FacebookFanPage.
     * @param {FacebookFanPageCreateArgs} args - Arguments to create a FacebookFanPage.
     * @example
     * // Create one FacebookFanPage
     * const FacebookFanPage = await prisma.facebookFanPage.create({
     *   data: {
     *     // ... data to create a FacebookFanPage
     *   }
     * })
     *
     */
    create<T extends FacebookFanPageCreateArgs>(
      args: SelectSubset<T, FacebookFanPageCreateArgs<ExtArgs>>,
    ): Prisma__FacebookFanPageClient<
      $Result.GetResult<
        Prisma.$FacebookFanPagePayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many FacebookFanPages.
     * @param {FacebookFanPageCreateManyArgs} args - Arguments to create many FacebookFanPages.
     * @example
     * // Create many FacebookFanPages
     * const facebookFanPage = await prisma.facebookFanPage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends FacebookFanPageCreateManyArgs>(
      args?: SelectSubset<T, FacebookFanPageCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many FacebookFanPages and returns the data saved in the database.
     * @param {FacebookFanPageCreateManyAndReturnArgs} args - Arguments to create many FacebookFanPages.
     * @example
     * // Create many FacebookFanPages
     * const facebookFanPage = await prisma.facebookFanPage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many FacebookFanPages and only return the `id`
     * const facebookFanPageWithIdOnly = await prisma.facebookFanPage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends FacebookFanPageCreateManyAndReturnArgs>(
      args?: SelectSubset<T, FacebookFanPageCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$FacebookFanPagePayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a FacebookFanPage.
     * @param {FacebookFanPageDeleteArgs} args - Arguments to delete one FacebookFanPage.
     * @example
     * // Delete one FacebookFanPage
     * const FacebookFanPage = await prisma.facebookFanPage.delete({
     *   where: {
     *     // ... filter to delete one FacebookFanPage
     *   }
     * })
     *
     */
    delete<T extends FacebookFanPageDeleteArgs>(
      args: SelectSubset<T, FacebookFanPageDeleteArgs<ExtArgs>>,
    ): Prisma__FacebookFanPageClient<
      $Result.GetResult<
        Prisma.$FacebookFanPagePayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one FacebookFanPage.
     * @param {FacebookFanPageUpdateArgs} args - Arguments to update one FacebookFanPage.
     * @example
     * // Update one FacebookFanPage
     * const facebookFanPage = await prisma.facebookFanPage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends FacebookFanPageUpdateArgs>(
      args: SelectSubset<T, FacebookFanPageUpdateArgs<ExtArgs>>,
    ): Prisma__FacebookFanPageClient<
      $Result.GetResult<
        Prisma.$FacebookFanPagePayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more FacebookFanPages.
     * @param {FacebookFanPageDeleteManyArgs} args - Arguments to filter FacebookFanPages to delete.
     * @example
     * // Delete a few FacebookFanPages
     * const { count } = await prisma.facebookFanPage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends FacebookFanPageDeleteManyArgs>(
      args?: SelectSubset<T, FacebookFanPageDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more FacebookFanPages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookFanPageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FacebookFanPages
     * const facebookFanPage = await prisma.facebookFanPage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends FacebookFanPageUpdateManyArgs>(
      args: SelectSubset<T, FacebookFanPageUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more FacebookFanPages and returns the data updated in the database.
     * @param {FacebookFanPageUpdateManyAndReturnArgs} args - Arguments to update many FacebookFanPages.
     * @example
     * // Update many FacebookFanPages
     * const facebookFanPage = await prisma.facebookFanPage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more FacebookFanPages and only return the `id`
     * const facebookFanPageWithIdOnly = await prisma.facebookFanPage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends FacebookFanPageUpdateManyAndReturnArgs>(
      args: SelectSubset<T, FacebookFanPageUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$FacebookFanPagePayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one FacebookFanPage.
     * @param {FacebookFanPageUpsertArgs} args - Arguments to update or create a FacebookFanPage.
     * @example
     * // Update or create a FacebookFanPage
     * const facebookFanPage = await prisma.facebookFanPage.upsert({
     *   create: {
     *     // ... data to create a FacebookFanPage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FacebookFanPage we want to update
     *   }
     * })
     */
    upsert<T extends FacebookFanPageUpsertArgs>(
      args: SelectSubset<T, FacebookFanPageUpsertArgs<ExtArgs>>,
    ): Prisma__FacebookFanPageClient<
      $Result.GetResult<
        Prisma.$FacebookFanPagePayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of FacebookFanPages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookFanPageCountArgs} args - Arguments to filter FacebookFanPages to count.
     * @example
     * // Count the number of FacebookFanPages
     * const count = await prisma.facebookFanPage.count({
     *   where: {
     *     // ... the filter for the FacebookFanPages we want to count
     *   }
     * })
     **/
    count<T extends FacebookFanPageCountArgs>(
      args?: Subset<T, FacebookFanPageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacebookFanPageCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a FacebookFanPage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookFanPageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends FacebookFanPageAggregateArgs>(
      args: Subset<T, FacebookFanPageAggregateArgs>,
    ): Prisma.PrismaPromise<GetFacebookFanPageAggregateType<T>>;

    /**
     * Group by FacebookFanPage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookFanPageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends FacebookFanPageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacebookFanPageGroupByArgs['orderBy'] }
        : { orderBy?: FacebookFanPageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, FacebookFanPageGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetFacebookFanPageGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the FacebookFanPage model
     */
    readonly fields: FacebookFanPageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FacebookFanPage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacebookFanPageClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    facebook_page_insights<
      T extends FacebookFanPage$facebook_page_insightsArgs<ExtArgs> = {},
    >(
      args?: Subset<T, FacebookFanPage$facebook_page_insightsArgs<ExtArgs>>,
    ): Prisma__FacebookPageInsightsClient<
      $Result.GetResult<
        Prisma.$FacebookPageInsightsPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    facebookConnections<
      T extends FacebookFanPage$facebookConnectionsArgs<ExtArgs> = {},
    >(
      args?: Subset<T, FacebookFanPage$facebookConnectionsArgs<ExtArgs>>,
    ): Prisma__FacebookConnectionsClient<
      $Result.GetResult<
        Prisma.$FacebookConnectionsPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the FacebookFanPage model
   */
  interface FacebookFanPageFieldRefs {
    readonly id: FieldRef<'FacebookFanPage', 'String'>;
    readonly page_name: FieldRef<'FacebookFanPage', 'String'>;
    readonly page_category: FieldRef<'FacebookFanPage', 'String'>;
    readonly page_url: FieldRef<'FacebookFanPage', 'String'>;
    readonly page_avatar_url: FieldRef<'FacebookFanPage', 'String'>;
    readonly follower_count: FieldRef<'FacebookFanPage', 'Int'>;
    readonly page_type: FieldRef<'FacebookFanPage', 'String'>;
    readonly created_at: FieldRef<'FacebookFanPage', 'DateTime'>;
    readonly updated_at: FieldRef<'FacebookFanPage', 'DateTime'>;
    readonly connection_id: FieldRef<'FacebookFanPage', 'String'>;
  }

  // Custom InputTypes
  /**
   * FacebookFanPage findUnique
   */
  export type FacebookFanPageFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FacebookFanPage
     */
    select?: FacebookFanPageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FacebookFanPage
     */
    omit?: FacebookFanPageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookFanPageInclude<ExtArgs> | null;
    /**
     * Filter, which FacebookFanPage to fetch.
     */
    where: FacebookFanPageWhereUniqueInput;
  };

  /**
   * FacebookFanPage findUniqueOrThrow
   */
  export type FacebookFanPageFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FacebookFanPage
     */
    select?: FacebookFanPageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FacebookFanPage
     */
    omit?: FacebookFanPageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookFanPageInclude<ExtArgs> | null;
    /**
     * Filter, which FacebookFanPage to fetch.
     */
    where: FacebookFanPageWhereUniqueInput;
  };

  /**
   * FacebookFanPage findFirst
   */
  export type FacebookFanPageFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FacebookFanPage
     */
    select?: FacebookFanPageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FacebookFanPage
     */
    omit?: FacebookFanPageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookFanPageInclude<ExtArgs> | null;
    /**
     * Filter, which FacebookFanPage to fetch.
     */
    where?: FacebookFanPageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FacebookFanPages to fetch.
     */
    orderBy?:
      | FacebookFanPageOrderByWithRelationInput
      | FacebookFanPageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for FacebookFanPages.
     */
    cursor?: FacebookFanPageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FacebookFanPages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FacebookFanPages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FacebookFanPages.
     */
    distinct?:
      | FacebookFanPageScalarFieldEnum
      | FacebookFanPageScalarFieldEnum[];
  };

  /**
   * FacebookFanPage findFirstOrThrow
   */
  export type FacebookFanPageFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FacebookFanPage
     */
    select?: FacebookFanPageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FacebookFanPage
     */
    omit?: FacebookFanPageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookFanPageInclude<ExtArgs> | null;
    /**
     * Filter, which FacebookFanPage to fetch.
     */
    where?: FacebookFanPageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FacebookFanPages to fetch.
     */
    orderBy?:
      | FacebookFanPageOrderByWithRelationInput
      | FacebookFanPageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for FacebookFanPages.
     */
    cursor?: FacebookFanPageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FacebookFanPages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FacebookFanPages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FacebookFanPages.
     */
    distinct?:
      | FacebookFanPageScalarFieldEnum
      | FacebookFanPageScalarFieldEnum[];
  };

  /**
   * FacebookFanPage findMany
   */
  export type FacebookFanPageFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FacebookFanPage
     */
    select?: FacebookFanPageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FacebookFanPage
     */
    omit?: FacebookFanPageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookFanPageInclude<ExtArgs> | null;
    /**
     * Filter, which FacebookFanPages to fetch.
     */
    where?: FacebookFanPageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FacebookFanPages to fetch.
     */
    orderBy?:
      | FacebookFanPageOrderByWithRelationInput
      | FacebookFanPageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing FacebookFanPages.
     */
    cursor?: FacebookFanPageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FacebookFanPages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FacebookFanPages.
     */
    skip?: number;
    distinct?:
      | FacebookFanPageScalarFieldEnum
      | FacebookFanPageScalarFieldEnum[];
  };

  /**
   * FacebookFanPage create
   */
  export type FacebookFanPageCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FacebookFanPage
     */
    select?: FacebookFanPageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FacebookFanPage
     */
    omit?: FacebookFanPageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookFanPageInclude<ExtArgs> | null;
    /**
     * The data needed to create a FacebookFanPage.
     */
    data: XOR<FacebookFanPageCreateInput, FacebookFanPageUncheckedCreateInput>;
  };

  /**
   * FacebookFanPage createMany
   */
  export type FacebookFanPageCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many FacebookFanPages.
     */
    data: FacebookFanPageCreateManyInput | FacebookFanPageCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * FacebookFanPage createManyAndReturn
   */
  export type FacebookFanPageCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FacebookFanPage
     */
    select?: FacebookFanPageSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the FacebookFanPage
     */
    omit?: FacebookFanPageOmit<ExtArgs> | null;
    /**
     * The data used to create many FacebookFanPages.
     */
    data: FacebookFanPageCreateManyInput | FacebookFanPageCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * FacebookFanPage update
   */
  export type FacebookFanPageUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FacebookFanPage
     */
    select?: FacebookFanPageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FacebookFanPage
     */
    omit?: FacebookFanPageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookFanPageInclude<ExtArgs> | null;
    /**
     * The data needed to update a FacebookFanPage.
     */
    data: XOR<FacebookFanPageUpdateInput, FacebookFanPageUncheckedUpdateInput>;
    /**
     * Choose, which FacebookFanPage to update.
     */
    where: FacebookFanPageWhereUniqueInput;
  };

  /**
   * FacebookFanPage updateMany
   */
  export type FacebookFanPageUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update FacebookFanPages.
     */
    data: XOR<
      FacebookFanPageUpdateManyMutationInput,
      FacebookFanPageUncheckedUpdateManyInput
    >;
    /**
     * Filter which FacebookFanPages to update
     */
    where?: FacebookFanPageWhereInput;
    /**
     * Limit how many FacebookFanPages to update.
     */
    limit?: number;
  };

  /**
   * FacebookFanPage updateManyAndReturn
   */
  export type FacebookFanPageUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FacebookFanPage
     */
    select?: FacebookFanPageSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the FacebookFanPage
     */
    omit?: FacebookFanPageOmit<ExtArgs> | null;
    /**
     * The data used to update FacebookFanPages.
     */
    data: XOR<
      FacebookFanPageUpdateManyMutationInput,
      FacebookFanPageUncheckedUpdateManyInput
    >;
    /**
     * Filter which FacebookFanPages to update
     */
    where?: FacebookFanPageWhereInput;
    /**
     * Limit how many FacebookFanPages to update.
     */
    limit?: number;
  };

  /**
   * FacebookFanPage upsert
   */
  export type FacebookFanPageUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FacebookFanPage
     */
    select?: FacebookFanPageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FacebookFanPage
     */
    omit?: FacebookFanPageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookFanPageInclude<ExtArgs> | null;
    /**
     * The filter to search for the FacebookFanPage to update in case it exists.
     */
    where: FacebookFanPageWhereUniqueInput;
    /**
     * In case the FacebookFanPage found by the `where` argument doesn't exist, create a new FacebookFanPage with this data.
     */
    create: XOR<
      FacebookFanPageCreateInput,
      FacebookFanPageUncheckedCreateInput
    >;
    /**
     * In case the FacebookFanPage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      FacebookFanPageUpdateInput,
      FacebookFanPageUncheckedUpdateInput
    >;
  };

  /**
   * FacebookFanPage delete
   */
  export type FacebookFanPageDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FacebookFanPage
     */
    select?: FacebookFanPageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FacebookFanPage
     */
    omit?: FacebookFanPageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookFanPageInclude<ExtArgs> | null;
    /**
     * Filter which FacebookFanPage to delete.
     */
    where: FacebookFanPageWhereUniqueInput;
  };

  /**
   * FacebookFanPage deleteMany
   */
  export type FacebookFanPageDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which FacebookFanPages to delete
     */
    where?: FacebookFanPageWhereInput;
    /**
     * Limit how many FacebookFanPages to delete.
     */
    limit?: number;
  };

  /**
   * FacebookFanPage.facebook_page_insights
   */
  export type FacebookFanPage$facebook_page_insightsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FacebookPageInsights
     */
    select?: FacebookPageInsightsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FacebookPageInsights
     */
    omit?: FacebookPageInsightsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookPageInsightsInclude<ExtArgs> | null;
    where?: FacebookPageInsightsWhereInput;
  };

  /**
   * FacebookFanPage.facebookConnections
   */
  export type FacebookFanPage$facebookConnectionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FacebookConnections
     */
    select?: FacebookConnectionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FacebookConnections
     */
    omit?: FacebookConnectionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookConnectionsInclude<ExtArgs> | null;
    where?: FacebookConnectionsWhereInput;
  };

  /**
   * FacebookFanPage without action
   */
  export type FacebookFanPageDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FacebookFanPage
     */
    select?: FacebookFanPageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FacebookFanPage
     */
    omit?: FacebookFanPageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookFanPageInclude<ExtArgs> | null;
  };

  /**
   * Model FacebookConnections
   */

  export type AggregateFacebookConnections = {
    _count: FacebookConnectionsCountAggregateOutputType | null;
    _min: FacebookConnectionsMinAggregateOutputType | null;
    _max: FacebookConnectionsMaxAggregateOutputType | null;
  };

  export type FacebookConnectionsMinAggregateOutputType = {
    id: string | null;
    page_id: string | null;
    status: string | null;
    last_sync: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    facebook_fanpage_id: string | null;
    role_id: string | null;
  };

  export type FacebookConnectionsMaxAggregateOutputType = {
    id: string | null;
    page_id: string | null;
    status: string | null;
    last_sync: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    facebook_fanpage_id: string | null;
    role_id: string | null;
  };

  export type FacebookConnectionsCountAggregateOutputType = {
    id: number;
    page_id: number;
    access_token: number;
    status: number;
    permissions: number;
    last_sync: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    facebook_fanpage_id: number;
    role_id: number;
    _all: number;
  };

  export type FacebookConnectionsMinAggregateInputType = {
    id?: true;
    page_id?: true;
    status?: true;
    last_sync?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    facebook_fanpage_id?: true;
    role_id?: true;
  };

  export type FacebookConnectionsMaxAggregateInputType = {
    id?: true;
    page_id?: true;
    status?: true;
    last_sync?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    facebook_fanpage_id?: true;
    role_id?: true;
  };

  export type FacebookConnectionsCountAggregateInputType = {
    id?: true;
    page_id?: true;
    access_token?: true;
    status?: true;
    permissions?: true;
    last_sync?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    facebook_fanpage_id?: true;
    role_id?: true;
    _all?: true;
  };

  export type FacebookConnectionsAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which FacebookConnections to aggregate.
     */
    where?: FacebookConnectionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FacebookConnections to fetch.
     */
    orderBy?:
      | FacebookConnectionsOrderByWithRelationInput
      | FacebookConnectionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: FacebookConnectionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FacebookConnections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FacebookConnections.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned FacebookConnections
     **/
    _count?: true | FacebookConnectionsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: FacebookConnectionsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: FacebookConnectionsMaxAggregateInputType;
  };

  export type GetFacebookConnectionsAggregateType<
    T extends FacebookConnectionsAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateFacebookConnections]: P extends
      | '_count'
      | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacebookConnections[P]>
      : GetScalarType<T[P], AggregateFacebookConnections[P]>;
  };

  export type FacebookConnectionsGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: FacebookConnectionsWhereInput;
    orderBy?:
      | FacebookConnectionsOrderByWithAggregationInput
      | FacebookConnectionsOrderByWithAggregationInput[];
    by:
      | FacebookConnectionsScalarFieldEnum[]
      | FacebookConnectionsScalarFieldEnum;
    having?: FacebookConnectionsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FacebookConnectionsCountAggregateInputType | true;
    _min?: FacebookConnectionsMinAggregateInputType;
    _max?: FacebookConnectionsMaxAggregateInputType;
  };

  export type FacebookConnectionsGroupByOutputType = {
    id: string;
    page_id: string;
    access_token: string[];
    status: string;
    permissions: string[];
    last_sync: Date | null;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    facebook_fanpage_id: string;
    role_id: string | null;
    _count: FacebookConnectionsCountAggregateOutputType | null;
    _min: FacebookConnectionsMinAggregateOutputType | null;
    _max: FacebookConnectionsMaxAggregateOutputType | null;
  };

  type GetFacebookConnectionsGroupByPayload<
    T extends FacebookConnectionsGroupByArgs,
  > = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacebookConnectionsGroupByOutputType, T['by']> & {
        [P in keyof T &
          keyof FacebookConnectionsGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], FacebookConnectionsGroupByOutputType[P]>
          : GetScalarType<T[P], FacebookConnectionsGroupByOutputType[P]>;
      }
    >
  >;

  export type FacebookConnectionsSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      page_id?: boolean;
      access_token?: boolean;
      status?: boolean;
      permissions?: boolean;
      last_sync?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user_id?: boolean;
      facebook_fanpage_id?: boolean;
      role_id?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      facebookFanpage?: boolean | FacebookFanPageDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['facebookConnections']
  >;

  export type FacebookConnectionsSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      page_id?: boolean;
      access_token?: boolean;
      status?: boolean;
      permissions?: boolean;
      last_sync?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user_id?: boolean;
      facebook_fanpage_id?: boolean;
      role_id?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      facebookFanpage?: boolean | FacebookFanPageDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['facebookConnections']
  >;

  export type FacebookConnectionsSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      page_id?: boolean;
      access_token?: boolean;
      status?: boolean;
      permissions?: boolean;
      last_sync?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user_id?: boolean;
      facebook_fanpage_id?: boolean;
      role_id?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      facebookFanpage?: boolean | FacebookFanPageDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['facebookConnections']
  >;

  export type FacebookConnectionsSelectScalar = {
    id?: boolean;
    page_id?: boolean;
    access_token?: boolean;
    status?: boolean;
    permissions?: boolean;
    last_sync?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    facebook_fanpage_id?: boolean;
    role_id?: boolean;
  };

  export type FacebookConnectionsOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'page_id'
    | 'access_token'
    | 'status'
    | 'permissions'
    | 'last_sync'
    | 'created_at'
    | 'updated_at'
    | 'user_id'
    | 'facebook_fanpage_id'
    | 'role_id',
    ExtArgs['result']['facebookConnections']
  >;
  export type FacebookConnectionsInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    facebookFanpage?: boolean | FacebookFanPageDefaultArgs<ExtArgs>;
  };
  export type FacebookConnectionsIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    facebookFanpage?: boolean | FacebookFanPageDefaultArgs<ExtArgs>;
  };
  export type FacebookConnectionsIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    facebookFanpage?: boolean | FacebookFanPageDefaultArgs<ExtArgs>;
  };

  export type $FacebookConnectionsPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'FacebookConnections';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      facebookFanpage: Prisma.$FacebookFanPagePayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        page_id: string;
        access_token: string[];
        status: string;
        permissions: string[];
        last_sync: Date | null;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        facebook_fanpage_id: string;
        role_id: string | null;
      },
      ExtArgs['result']['facebookConnections']
    >;
    composites: {};
  };

  type FacebookConnectionsGetPayload<
    S extends boolean | null | undefined | FacebookConnectionsDefaultArgs,
  > = $Result.GetResult<Prisma.$FacebookConnectionsPayload, S>;

  type FacebookConnectionsCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    FacebookConnectionsFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: FacebookConnectionsCountAggregateInputType | true;
  };

  export interface FacebookConnectionsDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['FacebookConnections'];
      meta: { name: 'FacebookConnections' };
    };
    /**
     * Find zero or one FacebookConnections that matches the filter.
     * @param {FacebookConnectionsFindUniqueArgs} args - Arguments to find a FacebookConnections
     * @example
     * // Get one FacebookConnections
     * const facebookConnections = await prisma.facebookConnections.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacebookConnectionsFindUniqueArgs>(
      args: SelectSubset<T, FacebookConnectionsFindUniqueArgs<ExtArgs>>,
    ): Prisma__FacebookConnectionsClient<
      $Result.GetResult<
        Prisma.$FacebookConnectionsPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one FacebookConnections that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FacebookConnectionsFindUniqueOrThrowArgs} args - Arguments to find a FacebookConnections
     * @example
     * // Get one FacebookConnections
     * const facebookConnections = await prisma.facebookConnections.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacebookConnectionsFindUniqueOrThrowArgs>(
      args: SelectSubset<T, FacebookConnectionsFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__FacebookConnectionsClient<
      $Result.GetResult<
        Prisma.$FacebookConnectionsPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first FacebookConnections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookConnectionsFindFirstArgs} args - Arguments to find a FacebookConnections
     * @example
     * // Get one FacebookConnections
     * const facebookConnections = await prisma.facebookConnections.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacebookConnectionsFindFirstArgs>(
      args?: SelectSubset<T, FacebookConnectionsFindFirstArgs<ExtArgs>>,
    ): Prisma__FacebookConnectionsClient<
      $Result.GetResult<
        Prisma.$FacebookConnectionsPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first FacebookConnections that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookConnectionsFindFirstOrThrowArgs} args - Arguments to find a FacebookConnections
     * @example
     * // Get one FacebookConnections
     * const facebookConnections = await prisma.facebookConnections.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacebookConnectionsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FacebookConnectionsFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__FacebookConnectionsClient<
      $Result.GetResult<
        Prisma.$FacebookConnectionsPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more FacebookConnections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookConnectionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FacebookConnections
     * const facebookConnections = await prisma.facebookConnections.findMany()
     *
     * // Get first 10 FacebookConnections
     * const facebookConnections = await prisma.facebookConnections.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const facebookConnectionsWithIdOnly = await prisma.facebookConnections.findMany({ select: { id: true } })
     *
     */
    findMany<T extends FacebookConnectionsFindManyArgs>(
      args?: SelectSubset<T, FacebookConnectionsFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$FacebookConnectionsPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a FacebookConnections.
     * @param {FacebookConnectionsCreateArgs} args - Arguments to create a FacebookConnections.
     * @example
     * // Create one FacebookConnections
     * const FacebookConnections = await prisma.facebookConnections.create({
     *   data: {
     *     // ... data to create a FacebookConnections
     *   }
     * })
     *
     */
    create<T extends FacebookConnectionsCreateArgs>(
      args: SelectSubset<T, FacebookConnectionsCreateArgs<ExtArgs>>,
    ): Prisma__FacebookConnectionsClient<
      $Result.GetResult<
        Prisma.$FacebookConnectionsPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many FacebookConnections.
     * @param {FacebookConnectionsCreateManyArgs} args - Arguments to create many FacebookConnections.
     * @example
     * // Create many FacebookConnections
     * const facebookConnections = await prisma.facebookConnections.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends FacebookConnectionsCreateManyArgs>(
      args?: SelectSubset<T, FacebookConnectionsCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many FacebookConnections and returns the data saved in the database.
     * @param {FacebookConnectionsCreateManyAndReturnArgs} args - Arguments to create many FacebookConnections.
     * @example
     * // Create many FacebookConnections
     * const facebookConnections = await prisma.facebookConnections.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many FacebookConnections and only return the `id`
     * const facebookConnectionsWithIdOnly = await prisma.facebookConnections.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends FacebookConnectionsCreateManyAndReturnArgs>(
      args?: SelectSubset<
        T,
        FacebookConnectionsCreateManyAndReturnArgs<ExtArgs>
      >,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$FacebookConnectionsPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a FacebookConnections.
     * @param {FacebookConnectionsDeleteArgs} args - Arguments to delete one FacebookConnections.
     * @example
     * // Delete one FacebookConnections
     * const FacebookConnections = await prisma.facebookConnections.delete({
     *   where: {
     *     // ... filter to delete one FacebookConnections
     *   }
     * })
     *
     */
    delete<T extends FacebookConnectionsDeleteArgs>(
      args: SelectSubset<T, FacebookConnectionsDeleteArgs<ExtArgs>>,
    ): Prisma__FacebookConnectionsClient<
      $Result.GetResult<
        Prisma.$FacebookConnectionsPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one FacebookConnections.
     * @param {FacebookConnectionsUpdateArgs} args - Arguments to update one FacebookConnections.
     * @example
     * // Update one FacebookConnections
     * const facebookConnections = await prisma.facebookConnections.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends FacebookConnectionsUpdateArgs>(
      args: SelectSubset<T, FacebookConnectionsUpdateArgs<ExtArgs>>,
    ): Prisma__FacebookConnectionsClient<
      $Result.GetResult<
        Prisma.$FacebookConnectionsPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more FacebookConnections.
     * @param {FacebookConnectionsDeleteManyArgs} args - Arguments to filter FacebookConnections to delete.
     * @example
     * // Delete a few FacebookConnections
     * const { count } = await prisma.facebookConnections.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends FacebookConnectionsDeleteManyArgs>(
      args?: SelectSubset<T, FacebookConnectionsDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more FacebookConnections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookConnectionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FacebookConnections
     * const facebookConnections = await prisma.facebookConnections.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends FacebookConnectionsUpdateManyArgs>(
      args: SelectSubset<T, FacebookConnectionsUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more FacebookConnections and returns the data updated in the database.
     * @param {FacebookConnectionsUpdateManyAndReturnArgs} args - Arguments to update many FacebookConnections.
     * @example
     * // Update many FacebookConnections
     * const facebookConnections = await prisma.facebookConnections.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more FacebookConnections and only return the `id`
     * const facebookConnectionsWithIdOnly = await prisma.facebookConnections.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends FacebookConnectionsUpdateManyAndReturnArgs>(
      args: SelectSubset<
        T,
        FacebookConnectionsUpdateManyAndReturnArgs<ExtArgs>
      >,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$FacebookConnectionsPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one FacebookConnections.
     * @param {FacebookConnectionsUpsertArgs} args - Arguments to update or create a FacebookConnections.
     * @example
     * // Update or create a FacebookConnections
     * const facebookConnections = await prisma.facebookConnections.upsert({
     *   create: {
     *     // ... data to create a FacebookConnections
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FacebookConnections we want to update
     *   }
     * })
     */
    upsert<T extends FacebookConnectionsUpsertArgs>(
      args: SelectSubset<T, FacebookConnectionsUpsertArgs<ExtArgs>>,
    ): Prisma__FacebookConnectionsClient<
      $Result.GetResult<
        Prisma.$FacebookConnectionsPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of FacebookConnections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookConnectionsCountArgs} args - Arguments to filter FacebookConnections to count.
     * @example
     * // Count the number of FacebookConnections
     * const count = await prisma.facebookConnections.count({
     *   where: {
     *     // ... the filter for the FacebookConnections we want to count
     *   }
     * })
     **/
    count<T extends FacebookConnectionsCountArgs>(
      args?: Subset<T, FacebookConnectionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<
              T['select'],
              FacebookConnectionsCountAggregateOutputType
            >
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a FacebookConnections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookConnectionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends FacebookConnectionsAggregateArgs>(
      args: Subset<T, FacebookConnectionsAggregateArgs>,
    ): Prisma.PrismaPromise<GetFacebookConnectionsAggregateType<T>>;

    /**
     * Group by FacebookConnections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookConnectionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends FacebookConnectionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacebookConnectionsGroupByArgs['orderBy'] }
        : { orderBy?: FacebookConnectionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, FacebookConnectionsGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetFacebookConnectionsGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the FacebookConnections model
     */
    readonly fields: FacebookConnectionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FacebookConnections.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacebookConnectionsClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    facebookFanpage<T extends FacebookFanPageDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, FacebookFanPageDefaultArgs<ExtArgs>>,
    ): Prisma__FacebookFanPageClient<
      | $Result.GetResult<
          Prisma.$FacebookFanPagePayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the FacebookConnections model
   */
  interface FacebookConnectionsFieldRefs {
    readonly id: FieldRef<'FacebookConnections', 'String'>;
    readonly page_id: FieldRef<'FacebookConnections', 'String'>;
    readonly access_token: FieldRef<'FacebookConnections', 'String[]'>;
    readonly status: FieldRef<'FacebookConnections', 'String'>;
    readonly permissions: FieldRef<'FacebookConnections', 'String[]'>;
    readonly last_sync: FieldRef<'FacebookConnections', 'DateTime'>;
    readonly created_at: FieldRef<'FacebookConnections', 'DateTime'>;
    readonly updated_at: FieldRef<'FacebookConnections', 'DateTime'>;
    readonly user_id: FieldRef<'FacebookConnections', 'String'>;
    readonly facebook_fanpage_id: FieldRef<'FacebookConnections', 'String'>;
    readonly role_id: FieldRef<'FacebookConnections', 'String'>;
  }

  // Custom InputTypes
  /**
   * FacebookConnections findUnique
   */
  export type FacebookConnectionsFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FacebookConnections
     */
    select?: FacebookConnectionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FacebookConnections
     */
    omit?: FacebookConnectionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookConnectionsInclude<ExtArgs> | null;
    /**
     * Filter, which FacebookConnections to fetch.
     */
    where: FacebookConnectionsWhereUniqueInput;
  };

  /**
   * FacebookConnections findUniqueOrThrow
   */
  export type FacebookConnectionsFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FacebookConnections
     */
    select?: FacebookConnectionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FacebookConnections
     */
    omit?: FacebookConnectionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookConnectionsInclude<ExtArgs> | null;
    /**
     * Filter, which FacebookConnections to fetch.
     */
    where: FacebookConnectionsWhereUniqueInput;
  };

  /**
   * FacebookConnections findFirst
   */
  export type FacebookConnectionsFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FacebookConnections
     */
    select?: FacebookConnectionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FacebookConnections
     */
    omit?: FacebookConnectionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookConnectionsInclude<ExtArgs> | null;
    /**
     * Filter, which FacebookConnections to fetch.
     */
    where?: FacebookConnectionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FacebookConnections to fetch.
     */
    orderBy?:
      | FacebookConnectionsOrderByWithRelationInput
      | FacebookConnectionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for FacebookConnections.
     */
    cursor?: FacebookConnectionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FacebookConnections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FacebookConnections.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FacebookConnections.
     */
    distinct?:
      | FacebookConnectionsScalarFieldEnum
      | FacebookConnectionsScalarFieldEnum[];
  };

  /**
   * FacebookConnections findFirstOrThrow
   */
  export type FacebookConnectionsFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FacebookConnections
     */
    select?: FacebookConnectionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FacebookConnections
     */
    omit?: FacebookConnectionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookConnectionsInclude<ExtArgs> | null;
    /**
     * Filter, which FacebookConnections to fetch.
     */
    where?: FacebookConnectionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FacebookConnections to fetch.
     */
    orderBy?:
      | FacebookConnectionsOrderByWithRelationInput
      | FacebookConnectionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for FacebookConnections.
     */
    cursor?: FacebookConnectionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FacebookConnections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FacebookConnections.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FacebookConnections.
     */
    distinct?:
      | FacebookConnectionsScalarFieldEnum
      | FacebookConnectionsScalarFieldEnum[];
  };

  /**
   * FacebookConnections findMany
   */
  export type FacebookConnectionsFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FacebookConnections
     */
    select?: FacebookConnectionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FacebookConnections
     */
    omit?: FacebookConnectionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookConnectionsInclude<ExtArgs> | null;
    /**
     * Filter, which FacebookConnections to fetch.
     */
    where?: FacebookConnectionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FacebookConnections to fetch.
     */
    orderBy?:
      | FacebookConnectionsOrderByWithRelationInput
      | FacebookConnectionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing FacebookConnections.
     */
    cursor?: FacebookConnectionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FacebookConnections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FacebookConnections.
     */
    skip?: number;
    distinct?:
      | FacebookConnectionsScalarFieldEnum
      | FacebookConnectionsScalarFieldEnum[];
  };

  /**
   * FacebookConnections create
   */
  export type FacebookConnectionsCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FacebookConnections
     */
    select?: FacebookConnectionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FacebookConnections
     */
    omit?: FacebookConnectionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookConnectionsInclude<ExtArgs> | null;
    /**
     * The data needed to create a FacebookConnections.
     */
    data: XOR<
      FacebookConnectionsCreateInput,
      FacebookConnectionsUncheckedCreateInput
    >;
  };

  /**
   * FacebookConnections createMany
   */
  export type FacebookConnectionsCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many FacebookConnections.
     */
    data:
      | FacebookConnectionsCreateManyInput
      | FacebookConnectionsCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * FacebookConnections createManyAndReturn
   */
  export type FacebookConnectionsCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FacebookConnections
     */
    select?: FacebookConnectionsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the FacebookConnections
     */
    omit?: FacebookConnectionsOmit<ExtArgs> | null;
    /**
     * The data used to create many FacebookConnections.
     */
    data:
      | FacebookConnectionsCreateManyInput
      | FacebookConnectionsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookConnectionsIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * FacebookConnections update
   */
  export type FacebookConnectionsUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FacebookConnections
     */
    select?: FacebookConnectionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FacebookConnections
     */
    omit?: FacebookConnectionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookConnectionsInclude<ExtArgs> | null;
    /**
     * The data needed to update a FacebookConnections.
     */
    data: XOR<
      FacebookConnectionsUpdateInput,
      FacebookConnectionsUncheckedUpdateInput
    >;
    /**
     * Choose, which FacebookConnections to update.
     */
    where: FacebookConnectionsWhereUniqueInput;
  };

  /**
   * FacebookConnections updateMany
   */
  export type FacebookConnectionsUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update FacebookConnections.
     */
    data: XOR<
      FacebookConnectionsUpdateManyMutationInput,
      FacebookConnectionsUncheckedUpdateManyInput
    >;
    /**
     * Filter which FacebookConnections to update
     */
    where?: FacebookConnectionsWhereInput;
    /**
     * Limit how many FacebookConnections to update.
     */
    limit?: number;
  };

  /**
   * FacebookConnections updateManyAndReturn
   */
  export type FacebookConnectionsUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FacebookConnections
     */
    select?: FacebookConnectionsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the FacebookConnections
     */
    omit?: FacebookConnectionsOmit<ExtArgs> | null;
    /**
     * The data used to update FacebookConnections.
     */
    data: XOR<
      FacebookConnectionsUpdateManyMutationInput,
      FacebookConnectionsUncheckedUpdateManyInput
    >;
    /**
     * Filter which FacebookConnections to update
     */
    where?: FacebookConnectionsWhereInput;
    /**
     * Limit how many FacebookConnections to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookConnectionsIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * FacebookConnections upsert
   */
  export type FacebookConnectionsUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FacebookConnections
     */
    select?: FacebookConnectionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FacebookConnections
     */
    omit?: FacebookConnectionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookConnectionsInclude<ExtArgs> | null;
    /**
     * The filter to search for the FacebookConnections to update in case it exists.
     */
    where: FacebookConnectionsWhereUniqueInput;
    /**
     * In case the FacebookConnections found by the `where` argument doesn't exist, create a new FacebookConnections with this data.
     */
    create: XOR<
      FacebookConnectionsCreateInput,
      FacebookConnectionsUncheckedCreateInput
    >;
    /**
     * In case the FacebookConnections was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      FacebookConnectionsUpdateInput,
      FacebookConnectionsUncheckedUpdateInput
    >;
  };

  /**
   * FacebookConnections delete
   */
  export type FacebookConnectionsDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FacebookConnections
     */
    select?: FacebookConnectionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FacebookConnections
     */
    omit?: FacebookConnectionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookConnectionsInclude<ExtArgs> | null;
    /**
     * Filter which FacebookConnections to delete.
     */
    where: FacebookConnectionsWhereUniqueInput;
  };

  /**
   * FacebookConnections deleteMany
   */
  export type FacebookConnectionsDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which FacebookConnections to delete
     */
    where?: FacebookConnectionsWhereInput;
    /**
     * Limit how many FacebookConnections to delete.
     */
    limit?: number;
  };

  /**
   * FacebookConnections without action
   */
  export type FacebookConnectionsDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FacebookConnections
     */
    select?: FacebookConnectionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FacebookConnections
     */
    omit?: FacebookConnectionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookConnectionsInclude<ExtArgs> | null;
  };

  /**
   * Model FacebookPageInsights
   */

  export type AggregateFacebookPageInsights = {
    _count: FacebookPageInsightsCountAggregateOutputType | null;
    _avg: FacebookPageInsightsAvgAggregateOutputType | null;
    _sum: FacebookPageInsightsSumAggregateOutputType | null;
    _min: FacebookPageInsightsMinAggregateOutputType | null;
    _max: FacebookPageInsightsMaxAggregateOutputType | null;
  };

  export type FacebookPageInsightsAvgAggregateOutputType = {
    id: number | null;
    posts: number | null;
    approach: number | null;
    interactions: number | null;
    follows: number | null;
  };

  export type FacebookPageInsightsSumAggregateOutputType = {
    id: number | null;
    posts: number | null;
    approach: number | null;
    interactions: number | null;
    follows: number | null;
  };

  export type FacebookPageInsightsMinAggregateOutputType = {
    id: number | null;
    posts: number | null;
    approach: number | null;
    interactions: number | null;
    follows: number | null;
    created_at: Date | null;
    name: string | null;
    image_url: string | null;
    category: string | null;
    status: string | null;
    user_id: string | null;
    facebook_fanpage_id: string | null;
  };

  export type FacebookPageInsightsMaxAggregateOutputType = {
    id: number | null;
    posts: number | null;
    approach: number | null;
    interactions: number | null;
    follows: number | null;
    created_at: Date | null;
    name: string | null;
    image_url: string | null;
    category: string | null;
    status: string | null;
    user_id: string | null;
    facebook_fanpage_id: string | null;
  };

  export type FacebookPageInsightsCountAggregateOutputType = {
    id: number;
    posts: number;
    approach: number;
    interactions: number;
    follows: number;
    created_at: number;
    name: number;
    image_url: number;
    category: number;
    status: number;
    user_id: number;
    facebook_fanpage_id: number;
    _all: number;
  };

  export type FacebookPageInsightsAvgAggregateInputType = {
    id?: true;
    posts?: true;
    approach?: true;
    interactions?: true;
    follows?: true;
  };

  export type FacebookPageInsightsSumAggregateInputType = {
    id?: true;
    posts?: true;
    approach?: true;
    interactions?: true;
    follows?: true;
  };

  export type FacebookPageInsightsMinAggregateInputType = {
    id?: true;
    posts?: true;
    approach?: true;
    interactions?: true;
    follows?: true;
    created_at?: true;
    name?: true;
    image_url?: true;
    category?: true;
    status?: true;
    user_id?: true;
    facebook_fanpage_id?: true;
  };

  export type FacebookPageInsightsMaxAggregateInputType = {
    id?: true;
    posts?: true;
    approach?: true;
    interactions?: true;
    follows?: true;
    created_at?: true;
    name?: true;
    image_url?: true;
    category?: true;
    status?: true;
    user_id?: true;
    facebook_fanpage_id?: true;
  };

  export type FacebookPageInsightsCountAggregateInputType = {
    id?: true;
    posts?: true;
    approach?: true;
    interactions?: true;
    follows?: true;
    created_at?: true;
    name?: true;
    image_url?: true;
    category?: true;
    status?: true;
    user_id?: true;
    facebook_fanpage_id?: true;
    _all?: true;
  };

  export type FacebookPageInsightsAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which FacebookPageInsights to aggregate.
     */
    where?: FacebookPageInsightsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FacebookPageInsights to fetch.
     */
    orderBy?:
      | FacebookPageInsightsOrderByWithRelationInput
      | FacebookPageInsightsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: FacebookPageInsightsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FacebookPageInsights from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FacebookPageInsights.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned FacebookPageInsights
     **/
    _count?: true | FacebookPageInsightsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: FacebookPageInsightsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: FacebookPageInsightsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: FacebookPageInsightsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: FacebookPageInsightsMaxAggregateInputType;
  };

  export type GetFacebookPageInsightsAggregateType<
    T extends FacebookPageInsightsAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateFacebookPageInsights]: P extends
      | '_count'
      | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacebookPageInsights[P]>
      : GetScalarType<T[P], AggregateFacebookPageInsights[P]>;
  };

  export type FacebookPageInsightsGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: FacebookPageInsightsWhereInput;
    orderBy?:
      | FacebookPageInsightsOrderByWithAggregationInput
      | FacebookPageInsightsOrderByWithAggregationInput[];
    by:
      | FacebookPageInsightsScalarFieldEnum[]
      | FacebookPageInsightsScalarFieldEnum;
    having?: FacebookPageInsightsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FacebookPageInsightsCountAggregateInputType | true;
    _avg?: FacebookPageInsightsAvgAggregateInputType;
    _sum?: FacebookPageInsightsSumAggregateInputType;
    _min?: FacebookPageInsightsMinAggregateInputType;
    _max?: FacebookPageInsightsMaxAggregateInputType;
  };

  export type FacebookPageInsightsGroupByOutputType = {
    id: number;
    posts: number;
    approach: number;
    interactions: number;
    follows: number;
    created_at: Date;
    name: string | null;
    image_url: string | null;
    category: string | null;
    status: string | null;
    user_id: string | null;
    facebook_fanpage_id: string;
    _count: FacebookPageInsightsCountAggregateOutputType | null;
    _avg: FacebookPageInsightsAvgAggregateOutputType | null;
    _sum: FacebookPageInsightsSumAggregateOutputType | null;
    _min: FacebookPageInsightsMinAggregateOutputType | null;
    _max: FacebookPageInsightsMaxAggregateOutputType | null;
  };

  type GetFacebookPageInsightsGroupByPayload<
    T extends FacebookPageInsightsGroupByArgs,
  > = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacebookPageInsightsGroupByOutputType, T['by']> & {
        [P in keyof T &
          keyof FacebookPageInsightsGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], FacebookPageInsightsGroupByOutputType[P]>
          : GetScalarType<T[P], FacebookPageInsightsGroupByOutputType[P]>;
      }
    >
  >;

  export type FacebookPageInsightsSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      posts?: boolean;
      approach?: boolean;
      interactions?: boolean;
      follows?: boolean;
      created_at?: boolean;
      name?: boolean;
      image_url?: boolean;
      category?: boolean;
      status?: boolean;
      user_id?: boolean;
      facebook_fanpage_id?: boolean;
      facebookFanpage?: boolean | FacebookFanPageDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['facebookPageInsights']
  >;

  export type FacebookPageInsightsSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      posts?: boolean;
      approach?: boolean;
      interactions?: boolean;
      follows?: boolean;
      created_at?: boolean;
      name?: boolean;
      image_url?: boolean;
      category?: boolean;
      status?: boolean;
      user_id?: boolean;
      facebook_fanpage_id?: boolean;
      facebookFanpage?: boolean | FacebookFanPageDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['facebookPageInsights']
  >;

  export type FacebookPageInsightsSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      posts?: boolean;
      approach?: boolean;
      interactions?: boolean;
      follows?: boolean;
      created_at?: boolean;
      name?: boolean;
      image_url?: boolean;
      category?: boolean;
      status?: boolean;
      user_id?: boolean;
      facebook_fanpage_id?: boolean;
      facebookFanpage?: boolean | FacebookFanPageDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['facebookPageInsights']
  >;

  export type FacebookPageInsightsSelectScalar = {
    id?: boolean;
    posts?: boolean;
    approach?: boolean;
    interactions?: boolean;
    follows?: boolean;
    created_at?: boolean;
    name?: boolean;
    image_url?: boolean;
    category?: boolean;
    status?: boolean;
    user_id?: boolean;
    facebook_fanpage_id?: boolean;
  };

  export type FacebookPageInsightsOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'posts'
    | 'approach'
    | 'interactions'
    | 'follows'
    | 'created_at'
    | 'name'
    | 'image_url'
    | 'category'
    | 'status'
    | 'user_id'
    | 'facebook_fanpage_id',
    ExtArgs['result']['facebookPageInsights']
  >;
  export type FacebookPageInsightsInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    facebookFanpage?: boolean | FacebookFanPageDefaultArgs<ExtArgs>;
  };
  export type FacebookPageInsightsIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    facebookFanpage?: boolean | FacebookFanPageDefaultArgs<ExtArgs>;
  };
  export type FacebookPageInsightsIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    facebookFanpage?: boolean | FacebookFanPageDefaultArgs<ExtArgs>;
  };

  export type $FacebookPageInsightsPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'FacebookPageInsights';
    objects: {
      facebookFanpage: Prisma.$FacebookFanPagePayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        posts: number;
        approach: number;
        interactions: number;
        follows: number;
        created_at: Date;
        name: string | null;
        image_url: string | null;
        category: string | null;
        status: string | null;
        user_id: string | null;
        facebook_fanpage_id: string;
      },
      ExtArgs['result']['facebookPageInsights']
    >;
    composites: {};
  };

  type FacebookPageInsightsGetPayload<
    S extends boolean | null | undefined | FacebookPageInsightsDefaultArgs,
  > = $Result.GetResult<Prisma.$FacebookPageInsightsPayload, S>;

  type FacebookPageInsightsCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    FacebookPageInsightsFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: FacebookPageInsightsCountAggregateInputType | true;
  };

  export interface FacebookPageInsightsDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['FacebookPageInsights'];
      meta: { name: 'FacebookPageInsights' };
    };
    /**
     * Find zero or one FacebookPageInsights that matches the filter.
     * @param {FacebookPageInsightsFindUniqueArgs} args - Arguments to find a FacebookPageInsights
     * @example
     * // Get one FacebookPageInsights
     * const facebookPageInsights = await prisma.facebookPageInsights.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacebookPageInsightsFindUniqueArgs>(
      args: SelectSubset<T, FacebookPageInsightsFindUniqueArgs<ExtArgs>>,
    ): Prisma__FacebookPageInsightsClient<
      $Result.GetResult<
        Prisma.$FacebookPageInsightsPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one FacebookPageInsights that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FacebookPageInsightsFindUniqueOrThrowArgs} args - Arguments to find a FacebookPageInsights
     * @example
     * // Get one FacebookPageInsights
     * const facebookPageInsights = await prisma.facebookPageInsights.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacebookPageInsightsFindUniqueOrThrowArgs>(
      args: SelectSubset<T, FacebookPageInsightsFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__FacebookPageInsightsClient<
      $Result.GetResult<
        Prisma.$FacebookPageInsightsPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first FacebookPageInsights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookPageInsightsFindFirstArgs} args - Arguments to find a FacebookPageInsights
     * @example
     * // Get one FacebookPageInsights
     * const facebookPageInsights = await prisma.facebookPageInsights.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacebookPageInsightsFindFirstArgs>(
      args?: SelectSubset<T, FacebookPageInsightsFindFirstArgs<ExtArgs>>,
    ): Prisma__FacebookPageInsightsClient<
      $Result.GetResult<
        Prisma.$FacebookPageInsightsPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first FacebookPageInsights that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookPageInsightsFindFirstOrThrowArgs} args - Arguments to find a FacebookPageInsights
     * @example
     * // Get one FacebookPageInsights
     * const facebookPageInsights = await prisma.facebookPageInsights.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacebookPageInsightsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FacebookPageInsightsFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__FacebookPageInsightsClient<
      $Result.GetResult<
        Prisma.$FacebookPageInsightsPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more FacebookPageInsights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookPageInsightsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FacebookPageInsights
     * const facebookPageInsights = await prisma.facebookPageInsights.findMany()
     *
     * // Get first 10 FacebookPageInsights
     * const facebookPageInsights = await prisma.facebookPageInsights.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const facebookPageInsightsWithIdOnly = await prisma.facebookPageInsights.findMany({ select: { id: true } })
     *
     */
    findMany<T extends FacebookPageInsightsFindManyArgs>(
      args?: SelectSubset<T, FacebookPageInsightsFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$FacebookPageInsightsPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a FacebookPageInsights.
     * @param {FacebookPageInsightsCreateArgs} args - Arguments to create a FacebookPageInsights.
     * @example
     * // Create one FacebookPageInsights
     * const FacebookPageInsights = await prisma.facebookPageInsights.create({
     *   data: {
     *     // ... data to create a FacebookPageInsights
     *   }
     * })
     *
     */
    create<T extends FacebookPageInsightsCreateArgs>(
      args: SelectSubset<T, FacebookPageInsightsCreateArgs<ExtArgs>>,
    ): Prisma__FacebookPageInsightsClient<
      $Result.GetResult<
        Prisma.$FacebookPageInsightsPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many FacebookPageInsights.
     * @param {FacebookPageInsightsCreateManyArgs} args - Arguments to create many FacebookPageInsights.
     * @example
     * // Create many FacebookPageInsights
     * const facebookPageInsights = await prisma.facebookPageInsights.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends FacebookPageInsightsCreateManyArgs>(
      args?: SelectSubset<T, FacebookPageInsightsCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many FacebookPageInsights and returns the data saved in the database.
     * @param {FacebookPageInsightsCreateManyAndReturnArgs} args - Arguments to create many FacebookPageInsights.
     * @example
     * // Create many FacebookPageInsights
     * const facebookPageInsights = await prisma.facebookPageInsights.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many FacebookPageInsights and only return the `id`
     * const facebookPageInsightsWithIdOnly = await prisma.facebookPageInsights.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends FacebookPageInsightsCreateManyAndReturnArgs>(
      args?: SelectSubset<
        T,
        FacebookPageInsightsCreateManyAndReturnArgs<ExtArgs>
      >,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$FacebookPageInsightsPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a FacebookPageInsights.
     * @param {FacebookPageInsightsDeleteArgs} args - Arguments to delete one FacebookPageInsights.
     * @example
     * // Delete one FacebookPageInsights
     * const FacebookPageInsights = await prisma.facebookPageInsights.delete({
     *   where: {
     *     // ... filter to delete one FacebookPageInsights
     *   }
     * })
     *
     */
    delete<T extends FacebookPageInsightsDeleteArgs>(
      args: SelectSubset<T, FacebookPageInsightsDeleteArgs<ExtArgs>>,
    ): Prisma__FacebookPageInsightsClient<
      $Result.GetResult<
        Prisma.$FacebookPageInsightsPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one FacebookPageInsights.
     * @param {FacebookPageInsightsUpdateArgs} args - Arguments to update one FacebookPageInsights.
     * @example
     * // Update one FacebookPageInsights
     * const facebookPageInsights = await prisma.facebookPageInsights.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends FacebookPageInsightsUpdateArgs>(
      args: SelectSubset<T, FacebookPageInsightsUpdateArgs<ExtArgs>>,
    ): Prisma__FacebookPageInsightsClient<
      $Result.GetResult<
        Prisma.$FacebookPageInsightsPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more FacebookPageInsights.
     * @param {FacebookPageInsightsDeleteManyArgs} args - Arguments to filter FacebookPageInsights to delete.
     * @example
     * // Delete a few FacebookPageInsights
     * const { count } = await prisma.facebookPageInsights.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends FacebookPageInsightsDeleteManyArgs>(
      args?: SelectSubset<T, FacebookPageInsightsDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more FacebookPageInsights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookPageInsightsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FacebookPageInsights
     * const facebookPageInsights = await prisma.facebookPageInsights.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends FacebookPageInsightsUpdateManyArgs>(
      args: SelectSubset<T, FacebookPageInsightsUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more FacebookPageInsights and returns the data updated in the database.
     * @param {FacebookPageInsightsUpdateManyAndReturnArgs} args - Arguments to update many FacebookPageInsights.
     * @example
     * // Update many FacebookPageInsights
     * const facebookPageInsights = await prisma.facebookPageInsights.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more FacebookPageInsights and only return the `id`
     * const facebookPageInsightsWithIdOnly = await prisma.facebookPageInsights.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends FacebookPageInsightsUpdateManyAndReturnArgs>(
      args: SelectSubset<
        T,
        FacebookPageInsightsUpdateManyAndReturnArgs<ExtArgs>
      >,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$FacebookPageInsightsPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one FacebookPageInsights.
     * @param {FacebookPageInsightsUpsertArgs} args - Arguments to update or create a FacebookPageInsights.
     * @example
     * // Update or create a FacebookPageInsights
     * const facebookPageInsights = await prisma.facebookPageInsights.upsert({
     *   create: {
     *     // ... data to create a FacebookPageInsights
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FacebookPageInsights we want to update
     *   }
     * })
     */
    upsert<T extends FacebookPageInsightsUpsertArgs>(
      args: SelectSubset<T, FacebookPageInsightsUpsertArgs<ExtArgs>>,
    ): Prisma__FacebookPageInsightsClient<
      $Result.GetResult<
        Prisma.$FacebookPageInsightsPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of FacebookPageInsights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookPageInsightsCountArgs} args - Arguments to filter FacebookPageInsights to count.
     * @example
     * // Count the number of FacebookPageInsights
     * const count = await prisma.facebookPageInsights.count({
     *   where: {
     *     // ... the filter for the FacebookPageInsights we want to count
     *   }
     * })
     **/
    count<T extends FacebookPageInsightsCountArgs>(
      args?: Subset<T, FacebookPageInsightsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<
              T['select'],
              FacebookPageInsightsCountAggregateOutputType
            >
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a FacebookPageInsights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookPageInsightsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends FacebookPageInsightsAggregateArgs>(
      args: Subset<T, FacebookPageInsightsAggregateArgs>,
    ): Prisma.PrismaPromise<GetFacebookPageInsightsAggregateType<T>>;

    /**
     * Group by FacebookPageInsights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacebookPageInsightsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends FacebookPageInsightsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacebookPageInsightsGroupByArgs['orderBy'] }
        : { orderBy?: FacebookPageInsightsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, FacebookPageInsightsGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetFacebookPageInsightsGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the FacebookPageInsights model
     */
    readonly fields: FacebookPageInsightsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FacebookPageInsights.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacebookPageInsightsClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    facebookFanpage<T extends FacebookFanPageDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, FacebookFanPageDefaultArgs<ExtArgs>>,
    ): Prisma__FacebookFanPageClient<
      | $Result.GetResult<
          Prisma.$FacebookFanPagePayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the FacebookPageInsights model
   */
  interface FacebookPageInsightsFieldRefs {
    readonly id: FieldRef<'FacebookPageInsights', 'Int'>;
    readonly posts: FieldRef<'FacebookPageInsights', 'Int'>;
    readonly approach: FieldRef<'FacebookPageInsights', 'Int'>;
    readonly interactions: FieldRef<'FacebookPageInsights', 'Int'>;
    readonly follows: FieldRef<'FacebookPageInsights', 'Int'>;
    readonly created_at: FieldRef<'FacebookPageInsights', 'DateTime'>;
    readonly name: FieldRef<'FacebookPageInsights', 'String'>;
    readonly image_url: FieldRef<'FacebookPageInsights', 'String'>;
    readonly category: FieldRef<'FacebookPageInsights', 'String'>;
    readonly status: FieldRef<'FacebookPageInsights', 'String'>;
    readonly user_id: FieldRef<'FacebookPageInsights', 'String'>;
    readonly facebook_fanpage_id: FieldRef<'FacebookPageInsights', 'String'>;
  }

  // Custom InputTypes
  /**
   * FacebookPageInsights findUnique
   */
  export type FacebookPageInsightsFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FacebookPageInsights
     */
    select?: FacebookPageInsightsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FacebookPageInsights
     */
    omit?: FacebookPageInsightsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookPageInsightsInclude<ExtArgs> | null;
    /**
     * Filter, which FacebookPageInsights to fetch.
     */
    where: FacebookPageInsightsWhereUniqueInput;
  };

  /**
   * FacebookPageInsights findUniqueOrThrow
   */
  export type FacebookPageInsightsFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FacebookPageInsights
     */
    select?: FacebookPageInsightsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FacebookPageInsights
     */
    omit?: FacebookPageInsightsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookPageInsightsInclude<ExtArgs> | null;
    /**
     * Filter, which FacebookPageInsights to fetch.
     */
    where: FacebookPageInsightsWhereUniqueInput;
  };

  /**
   * FacebookPageInsights findFirst
   */
  export type FacebookPageInsightsFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FacebookPageInsights
     */
    select?: FacebookPageInsightsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FacebookPageInsights
     */
    omit?: FacebookPageInsightsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookPageInsightsInclude<ExtArgs> | null;
    /**
     * Filter, which FacebookPageInsights to fetch.
     */
    where?: FacebookPageInsightsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FacebookPageInsights to fetch.
     */
    orderBy?:
      | FacebookPageInsightsOrderByWithRelationInput
      | FacebookPageInsightsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for FacebookPageInsights.
     */
    cursor?: FacebookPageInsightsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FacebookPageInsights from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FacebookPageInsights.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FacebookPageInsights.
     */
    distinct?:
      | FacebookPageInsightsScalarFieldEnum
      | FacebookPageInsightsScalarFieldEnum[];
  };

  /**
   * FacebookPageInsights findFirstOrThrow
   */
  export type FacebookPageInsightsFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FacebookPageInsights
     */
    select?: FacebookPageInsightsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FacebookPageInsights
     */
    omit?: FacebookPageInsightsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookPageInsightsInclude<ExtArgs> | null;
    /**
     * Filter, which FacebookPageInsights to fetch.
     */
    where?: FacebookPageInsightsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FacebookPageInsights to fetch.
     */
    orderBy?:
      | FacebookPageInsightsOrderByWithRelationInput
      | FacebookPageInsightsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for FacebookPageInsights.
     */
    cursor?: FacebookPageInsightsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FacebookPageInsights from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FacebookPageInsights.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FacebookPageInsights.
     */
    distinct?:
      | FacebookPageInsightsScalarFieldEnum
      | FacebookPageInsightsScalarFieldEnum[];
  };

  /**
   * FacebookPageInsights findMany
   */
  export type FacebookPageInsightsFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FacebookPageInsights
     */
    select?: FacebookPageInsightsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FacebookPageInsights
     */
    omit?: FacebookPageInsightsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookPageInsightsInclude<ExtArgs> | null;
    /**
     * Filter, which FacebookPageInsights to fetch.
     */
    where?: FacebookPageInsightsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FacebookPageInsights to fetch.
     */
    orderBy?:
      | FacebookPageInsightsOrderByWithRelationInput
      | FacebookPageInsightsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing FacebookPageInsights.
     */
    cursor?: FacebookPageInsightsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FacebookPageInsights from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FacebookPageInsights.
     */
    skip?: number;
    distinct?:
      | FacebookPageInsightsScalarFieldEnum
      | FacebookPageInsightsScalarFieldEnum[];
  };

  /**
   * FacebookPageInsights create
   */
  export type FacebookPageInsightsCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FacebookPageInsights
     */
    select?: FacebookPageInsightsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FacebookPageInsights
     */
    omit?: FacebookPageInsightsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookPageInsightsInclude<ExtArgs> | null;
    /**
     * The data needed to create a FacebookPageInsights.
     */
    data: XOR<
      FacebookPageInsightsCreateInput,
      FacebookPageInsightsUncheckedCreateInput
    >;
  };

  /**
   * FacebookPageInsights createMany
   */
  export type FacebookPageInsightsCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many FacebookPageInsights.
     */
    data:
      | FacebookPageInsightsCreateManyInput
      | FacebookPageInsightsCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * FacebookPageInsights createManyAndReturn
   */
  export type FacebookPageInsightsCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FacebookPageInsights
     */
    select?: FacebookPageInsightsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the FacebookPageInsights
     */
    omit?: FacebookPageInsightsOmit<ExtArgs> | null;
    /**
     * The data used to create many FacebookPageInsights.
     */
    data:
      | FacebookPageInsightsCreateManyInput
      | FacebookPageInsightsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookPageInsightsIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * FacebookPageInsights update
   */
  export type FacebookPageInsightsUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FacebookPageInsights
     */
    select?: FacebookPageInsightsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FacebookPageInsights
     */
    omit?: FacebookPageInsightsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookPageInsightsInclude<ExtArgs> | null;
    /**
     * The data needed to update a FacebookPageInsights.
     */
    data: XOR<
      FacebookPageInsightsUpdateInput,
      FacebookPageInsightsUncheckedUpdateInput
    >;
    /**
     * Choose, which FacebookPageInsights to update.
     */
    where: FacebookPageInsightsWhereUniqueInput;
  };

  /**
   * FacebookPageInsights updateMany
   */
  export type FacebookPageInsightsUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update FacebookPageInsights.
     */
    data: XOR<
      FacebookPageInsightsUpdateManyMutationInput,
      FacebookPageInsightsUncheckedUpdateManyInput
    >;
    /**
     * Filter which FacebookPageInsights to update
     */
    where?: FacebookPageInsightsWhereInput;
    /**
     * Limit how many FacebookPageInsights to update.
     */
    limit?: number;
  };

  /**
   * FacebookPageInsights updateManyAndReturn
   */
  export type FacebookPageInsightsUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FacebookPageInsights
     */
    select?: FacebookPageInsightsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the FacebookPageInsights
     */
    omit?: FacebookPageInsightsOmit<ExtArgs> | null;
    /**
     * The data used to update FacebookPageInsights.
     */
    data: XOR<
      FacebookPageInsightsUpdateManyMutationInput,
      FacebookPageInsightsUncheckedUpdateManyInput
    >;
    /**
     * Filter which FacebookPageInsights to update
     */
    where?: FacebookPageInsightsWhereInput;
    /**
     * Limit how many FacebookPageInsights to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookPageInsightsIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * FacebookPageInsights upsert
   */
  export type FacebookPageInsightsUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FacebookPageInsights
     */
    select?: FacebookPageInsightsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FacebookPageInsights
     */
    omit?: FacebookPageInsightsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookPageInsightsInclude<ExtArgs> | null;
    /**
     * The filter to search for the FacebookPageInsights to update in case it exists.
     */
    where: FacebookPageInsightsWhereUniqueInput;
    /**
     * In case the FacebookPageInsights found by the `where` argument doesn't exist, create a new FacebookPageInsights with this data.
     */
    create: XOR<
      FacebookPageInsightsCreateInput,
      FacebookPageInsightsUncheckedCreateInput
    >;
    /**
     * In case the FacebookPageInsights was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      FacebookPageInsightsUpdateInput,
      FacebookPageInsightsUncheckedUpdateInput
    >;
  };

  /**
   * FacebookPageInsights delete
   */
  export type FacebookPageInsightsDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FacebookPageInsights
     */
    select?: FacebookPageInsightsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FacebookPageInsights
     */
    omit?: FacebookPageInsightsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookPageInsightsInclude<ExtArgs> | null;
    /**
     * Filter which FacebookPageInsights to delete.
     */
    where: FacebookPageInsightsWhereUniqueInput;
  };

  /**
   * FacebookPageInsights deleteMany
   */
  export type FacebookPageInsightsDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which FacebookPageInsights to delete
     */
    where?: FacebookPageInsightsWhereInput;
    /**
     * Limit how many FacebookPageInsights to delete.
     */
    limit?: number;
  };

  /**
   * FacebookPageInsights without action
   */
  export type FacebookPageInsightsDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FacebookPageInsights
     */
    select?: FacebookPageInsightsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FacebookPageInsights
     */
    omit?: FacebookPageInsightsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacebookPageInsightsInclude<ExtArgs> | null;
  };

  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null;
    _min: ProfileMinAggregateOutputType | null;
    _max: ProfileMaxAggregateOutputType | null;
  };

  export type ProfileMinAggregateOutputType = {
    user_id: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type ProfileMaxAggregateOutputType = {
    user_id: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type ProfileCountAggregateOutputType = {
    user_id: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type ProfileMinAggregateInputType = {
    user_id?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type ProfileMaxAggregateInputType = {
    user_id?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type ProfileCountAggregateInputType = {
    user_id?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type ProfileAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Profiles to fetch.
     */
    orderBy?:
      | ProfileOrderByWithRelationInput
      | ProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Profiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Profiles
     **/
    _count?: true | ProfileCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ProfileMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ProfileMaxAggregateInputType;
  };

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
    [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>;
  };

  export type ProfileGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProfileWhereInput;
    orderBy?:
      | ProfileOrderByWithAggregationInput
      | ProfileOrderByWithAggregationInput[];
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum;
    having?: ProfileScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProfileCountAggregateInputType | true;
    _min?: ProfileMinAggregateInputType;
    _max?: ProfileMaxAggregateInputType;
  };

  export type ProfileGroupByOutputType = {
    user_id: string;
    createdAt: Date;
    updatedAt: Date;
    _count: ProfileCountAggregateOutputType | null;
    _min: ProfileMinAggregateOutputType | null;
    _max: ProfileMaxAggregateOutputType | null;
  };

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ProfileGroupByOutputType, T['by']> & {
          [P in keyof T & keyof ProfileGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>;
        }
      >
    >;

  export type ProfileSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      user_id?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['profile']
  >;

  export type ProfileSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      user_id?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['profile']
  >;

  export type ProfileSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      user_id?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['profile']
  >;

  export type ProfileSelectScalar = {
    user_id?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type ProfileOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'user_id' | 'createdAt' | 'updatedAt',
    ExtArgs['result']['profile']
  >;
  export type ProfileInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type ProfileIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type ProfileIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $ProfilePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Profile';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        user_id: string;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['profile']
    >;
    composites: {};
  };

  type ProfileGetPayload<
    S extends boolean | null | undefined | ProfileDefaultArgs,
  > = $Result.GetResult<Prisma.$ProfilePayload, S>;

  type ProfileCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProfileCountAggregateInputType | true;
  };

  export interface ProfileDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Profile'];
      meta: { name: 'Profile' };
    };
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(
      args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>,
    ): Prisma__ProfileClient<
      $Result.GetResult<
        Prisma.$ProfilePayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ProfileClient<
      $Result.GetResult<
        Prisma.$ProfilePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(
      args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>,
    ): Prisma__ProfileClient<
      $Result.GetResult<
        Prisma.$ProfilePayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ProfileClient<
      $Result.GetResult<
        Prisma.$ProfilePayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     *
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     *
     * // Only select the `user_id`
     * const profileWithUser_idOnly = await prisma.profile.findMany({ select: { user_id: true } })
     *
     */
    findMany<T extends ProfileFindManyArgs>(
      args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProfilePayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     *
     */
    create<T extends ProfileCreateArgs>(
      args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>,
    ): Prisma__ProfileClient<
      $Result.GetResult<
        Prisma.$ProfilePayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProfileCreateManyArgs>(
      args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Profiles and only return the `user_id`
     * const profileWithUser_idOnly = await prisma.profile.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProfilePayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     *
     */
    delete<T extends ProfileDeleteArgs>(
      args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>,
    ): Prisma__ProfileClient<
      $Result.GetResult<
        Prisma.$ProfilePayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProfileUpdateArgs>(
      args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>,
    ): Prisma__ProfileClient<
      $Result.GetResult<
        Prisma.$ProfilePayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProfileDeleteManyArgs>(
      args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProfileUpdateManyArgs>(
      args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Profiles and only return the `user_id`
     * const profileWithUser_idOnly = await prisma.profile.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProfilePayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(
      args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>,
    ): Prisma__ProfileClient<
      $Result.GetResult<
        Prisma.$ProfilePayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
     **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ProfileAggregateArgs>(
      args: Subset<T, ProfileAggregateArgs>,
    ): Prisma.PrismaPromise<GetProfileAggregateType<T>>;

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetProfileGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Profile model
     */
    readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly user_id: FieldRef<'Profile', 'String'>;
    readonly createdAt: FieldRef<'Profile', 'DateTime'>;
    readonly updatedAt: FieldRef<'Profile', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null;
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput;
  };

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null;
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput;
  };

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null;
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Profiles to fetch.
     */
    orderBy?:
      | ProfileOrderByWithRelationInput
      | ProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Profiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[];
  };

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null;
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Profiles to fetch.
     */
    orderBy?:
      | ProfileOrderByWithRelationInput
      | ProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Profiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[];
  };

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null;
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Profiles to fetch.
     */
    orderBy?:
      | ProfileOrderByWithRelationInput
      | ProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Profiles.
     */
    skip?: number;
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[];
  };

  /**
   * Profile create
   */
  export type ProfileCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null;
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>;
  };

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null;
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null;
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>;
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput;
  };

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>;
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput;
    /**
     * Limit how many Profiles to update.
     */
    limit?: number;
  };

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null;
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>;
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput;
    /**
     * Limit how many Profiles to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null;
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput;
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>;
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>;
  };

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null;
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput;
  };

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput;
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number;
  };

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null;
  };

  /**
   * Model AdAccountRental
   */

  export type AggregateAdAccountRental = {
    _count: AdAccountRentalCountAggregateOutputType | null;
    _avg: AdAccountRentalAvgAggregateOutputType | null;
    _sum: AdAccountRentalSumAggregateOutputType | null;
    _min: AdAccountRentalMinAggregateOutputType | null;
    _max: AdAccountRentalMaxAggregateOutputType | null;
  };

  export type AdAccountRentalAvgAggregateOutputType = {
    account_id: number | null;
  };

  export type AdAccountRentalSumAggregateOutputType = {
    account_id: number | null;
  };

  export type AdAccountRentalMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    start_date: Date | null;
    end_date: Date | null;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    account_id: number | null;
  };

  export type AdAccountRentalMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    start_date: Date | null;
    end_date: Date | null;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    account_id: number | null;
  };

  export type AdAccountRentalCountAggregateOutputType = {
    id: number;
    user_id: number;
    start_date: number;
    end_date: number;
    status: number;
    created_at: number;
    updated_at: number;
    account_id: number;
    _all: number;
  };

  export type AdAccountRentalAvgAggregateInputType = {
    account_id?: true;
  };

  export type AdAccountRentalSumAggregateInputType = {
    account_id?: true;
  };

  export type AdAccountRentalMinAggregateInputType = {
    id?: true;
    user_id?: true;
    start_date?: true;
    end_date?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    account_id?: true;
  };

  export type AdAccountRentalMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    start_date?: true;
    end_date?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    account_id?: true;
  };

  export type AdAccountRentalCountAggregateInputType = {
    id?: true;
    user_id?: true;
    start_date?: true;
    end_date?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    account_id?: true;
    _all?: true;
  };

  export type AdAccountRentalAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which AdAccountRental to aggregate.
     */
    where?: AdAccountRentalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AdAccountRentals to fetch.
     */
    orderBy?:
      | AdAccountRentalOrderByWithRelationInput
      | AdAccountRentalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: AdAccountRentalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AdAccountRentals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AdAccountRentals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned AdAccountRentals
     **/
    _count?: true | AdAccountRentalCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: AdAccountRentalAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: AdAccountRentalSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AdAccountRentalMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AdAccountRentalMaxAggregateInputType;
  };

  export type GetAdAccountRentalAggregateType<
    T extends AdAccountRentalAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateAdAccountRental]: P extends
      | '_count'
      | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdAccountRental[P]>
      : GetScalarType<T[P], AggregateAdAccountRental[P]>;
  };

  export type AdAccountRentalGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AdAccountRentalWhereInput;
    orderBy?:
      | AdAccountRentalOrderByWithAggregationInput
      | AdAccountRentalOrderByWithAggregationInput[];
    by: AdAccountRentalScalarFieldEnum[] | AdAccountRentalScalarFieldEnum;
    having?: AdAccountRentalScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AdAccountRentalCountAggregateInputType | true;
    _avg?: AdAccountRentalAvgAggregateInputType;
    _sum?: AdAccountRentalSumAggregateInputType;
    _min?: AdAccountRentalMinAggregateInputType;
    _max?: AdAccountRentalMaxAggregateInputType;
  };

  export type AdAccountRentalGroupByOutputType = {
    id: string;
    user_id: string;
    start_date: Date;
    end_date: Date;
    status: string;
    created_at: Date;
    updated_at: Date;
    account_id: number;
    _count: AdAccountRentalCountAggregateOutputType | null;
    _avg: AdAccountRentalAvgAggregateOutputType | null;
    _sum: AdAccountRentalSumAggregateOutputType | null;
    _min: AdAccountRentalMinAggregateOutputType | null;
    _max: AdAccountRentalMaxAggregateOutputType | null;
  };

  type GetAdAccountRentalGroupByPayload<T extends AdAccountRentalGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<AdAccountRentalGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof AdAccountRentalGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdAccountRentalGroupByOutputType[P]>
            : GetScalarType<T[P], AdAccountRentalGroupByOutputType[P]>;
        }
      >
    >;

  export type AdAccountRentalSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      start_date?: boolean;
      end_date?: boolean;
      status?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      account_id?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      account?: boolean | SystemAdAccountDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['adAccountRental']
  >;

  export type AdAccountRentalSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      start_date?: boolean;
      end_date?: boolean;
      status?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      account_id?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      account?: boolean | SystemAdAccountDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['adAccountRental']
  >;

  export type AdAccountRentalSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      start_date?: boolean;
      end_date?: boolean;
      status?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      account_id?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      account?: boolean | SystemAdAccountDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['adAccountRental']
  >;

  export type AdAccountRentalSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    start_date?: boolean;
    end_date?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    account_id?: boolean;
  };

  export type AdAccountRentalOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'user_id'
    | 'start_date'
    | 'end_date'
    | 'status'
    | 'created_at'
    | 'updated_at'
    | 'account_id',
    ExtArgs['result']['adAccountRental']
  >;
  export type AdAccountRentalInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    account?: boolean | SystemAdAccountDefaultArgs<ExtArgs>;
  };
  export type AdAccountRentalIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    account?: boolean | SystemAdAccountDefaultArgs<ExtArgs>;
  };
  export type AdAccountRentalIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    account?: boolean | SystemAdAccountDefaultArgs<ExtArgs>;
  };

  export type $AdAccountRentalPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'AdAccountRental';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      account: Prisma.$SystemAdAccountPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        start_date: Date;
        end_date: Date;
        status: string;
        created_at: Date;
        updated_at: Date;
        account_id: number;
      },
      ExtArgs['result']['adAccountRental']
    >;
    composites: {};
  };

  type AdAccountRentalGetPayload<
    S extends boolean | null | undefined | AdAccountRentalDefaultArgs,
  > = $Result.GetResult<Prisma.$AdAccountRentalPayload, S>;

  type AdAccountRentalCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    AdAccountRentalFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: AdAccountRentalCountAggregateInputType | true;
  };

  export interface AdAccountRentalDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['AdAccountRental'];
      meta: { name: 'AdAccountRental' };
    };
    /**
     * Find zero or one AdAccountRental that matches the filter.
     * @param {AdAccountRentalFindUniqueArgs} args - Arguments to find a AdAccountRental
     * @example
     * // Get one AdAccountRental
     * const adAccountRental = await prisma.adAccountRental.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdAccountRentalFindUniqueArgs>(
      args: SelectSubset<T, AdAccountRentalFindUniqueArgs<ExtArgs>>,
    ): Prisma__AdAccountRentalClient<
      $Result.GetResult<
        Prisma.$AdAccountRentalPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one AdAccountRental that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdAccountRentalFindUniqueOrThrowArgs} args - Arguments to find a AdAccountRental
     * @example
     * // Get one AdAccountRental
     * const adAccountRental = await prisma.adAccountRental.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdAccountRentalFindUniqueOrThrowArgs>(
      args: SelectSubset<T, AdAccountRentalFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__AdAccountRentalClient<
      $Result.GetResult<
        Prisma.$AdAccountRentalPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first AdAccountRental that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdAccountRentalFindFirstArgs} args - Arguments to find a AdAccountRental
     * @example
     * // Get one AdAccountRental
     * const adAccountRental = await prisma.adAccountRental.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdAccountRentalFindFirstArgs>(
      args?: SelectSubset<T, AdAccountRentalFindFirstArgs<ExtArgs>>,
    ): Prisma__AdAccountRentalClient<
      $Result.GetResult<
        Prisma.$AdAccountRentalPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first AdAccountRental that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdAccountRentalFindFirstOrThrowArgs} args - Arguments to find a AdAccountRental
     * @example
     * // Get one AdAccountRental
     * const adAccountRental = await prisma.adAccountRental.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdAccountRentalFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AdAccountRentalFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__AdAccountRentalClient<
      $Result.GetResult<
        Prisma.$AdAccountRentalPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more AdAccountRentals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdAccountRentalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdAccountRentals
     * const adAccountRentals = await prisma.adAccountRental.findMany()
     *
     * // Get first 10 AdAccountRentals
     * const adAccountRentals = await prisma.adAccountRental.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const adAccountRentalWithIdOnly = await prisma.adAccountRental.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AdAccountRentalFindManyArgs>(
      args?: SelectSubset<T, AdAccountRentalFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AdAccountRentalPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a AdAccountRental.
     * @param {AdAccountRentalCreateArgs} args - Arguments to create a AdAccountRental.
     * @example
     * // Create one AdAccountRental
     * const AdAccountRental = await prisma.adAccountRental.create({
     *   data: {
     *     // ... data to create a AdAccountRental
     *   }
     * })
     *
     */
    create<T extends AdAccountRentalCreateArgs>(
      args: SelectSubset<T, AdAccountRentalCreateArgs<ExtArgs>>,
    ): Prisma__AdAccountRentalClient<
      $Result.GetResult<
        Prisma.$AdAccountRentalPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many AdAccountRentals.
     * @param {AdAccountRentalCreateManyArgs} args - Arguments to create many AdAccountRentals.
     * @example
     * // Create many AdAccountRentals
     * const adAccountRental = await prisma.adAccountRental.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AdAccountRentalCreateManyArgs>(
      args?: SelectSubset<T, AdAccountRentalCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many AdAccountRentals and returns the data saved in the database.
     * @param {AdAccountRentalCreateManyAndReturnArgs} args - Arguments to create many AdAccountRentals.
     * @example
     * // Create many AdAccountRentals
     * const adAccountRental = await prisma.adAccountRental.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many AdAccountRentals and only return the `id`
     * const adAccountRentalWithIdOnly = await prisma.adAccountRental.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AdAccountRentalCreateManyAndReturnArgs>(
      args?: SelectSubset<T, AdAccountRentalCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AdAccountRentalPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a AdAccountRental.
     * @param {AdAccountRentalDeleteArgs} args - Arguments to delete one AdAccountRental.
     * @example
     * // Delete one AdAccountRental
     * const AdAccountRental = await prisma.adAccountRental.delete({
     *   where: {
     *     // ... filter to delete one AdAccountRental
     *   }
     * })
     *
     */
    delete<T extends AdAccountRentalDeleteArgs>(
      args: SelectSubset<T, AdAccountRentalDeleteArgs<ExtArgs>>,
    ): Prisma__AdAccountRentalClient<
      $Result.GetResult<
        Prisma.$AdAccountRentalPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one AdAccountRental.
     * @param {AdAccountRentalUpdateArgs} args - Arguments to update one AdAccountRental.
     * @example
     * // Update one AdAccountRental
     * const adAccountRental = await prisma.adAccountRental.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AdAccountRentalUpdateArgs>(
      args: SelectSubset<T, AdAccountRentalUpdateArgs<ExtArgs>>,
    ): Prisma__AdAccountRentalClient<
      $Result.GetResult<
        Prisma.$AdAccountRentalPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more AdAccountRentals.
     * @param {AdAccountRentalDeleteManyArgs} args - Arguments to filter AdAccountRentals to delete.
     * @example
     * // Delete a few AdAccountRentals
     * const { count } = await prisma.adAccountRental.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AdAccountRentalDeleteManyArgs>(
      args?: SelectSubset<T, AdAccountRentalDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more AdAccountRentals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdAccountRentalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdAccountRentals
     * const adAccountRental = await prisma.adAccountRental.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AdAccountRentalUpdateManyArgs>(
      args: SelectSubset<T, AdAccountRentalUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more AdAccountRentals and returns the data updated in the database.
     * @param {AdAccountRentalUpdateManyAndReturnArgs} args - Arguments to update many AdAccountRentals.
     * @example
     * // Update many AdAccountRentals
     * const adAccountRental = await prisma.adAccountRental.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more AdAccountRentals and only return the `id`
     * const adAccountRentalWithIdOnly = await prisma.adAccountRental.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends AdAccountRentalUpdateManyAndReturnArgs>(
      args: SelectSubset<T, AdAccountRentalUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AdAccountRentalPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one AdAccountRental.
     * @param {AdAccountRentalUpsertArgs} args - Arguments to update or create a AdAccountRental.
     * @example
     * // Update or create a AdAccountRental
     * const adAccountRental = await prisma.adAccountRental.upsert({
     *   create: {
     *     // ... data to create a AdAccountRental
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdAccountRental we want to update
     *   }
     * })
     */
    upsert<T extends AdAccountRentalUpsertArgs>(
      args: SelectSubset<T, AdAccountRentalUpsertArgs<ExtArgs>>,
    ): Prisma__AdAccountRentalClient<
      $Result.GetResult<
        Prisma.$AdAccountRentalPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of AdAccountRentals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdAccountRentalCountArgs} args - Arguments to filter AdAccountRentals to count.
     * @example
     * // Count the number of AdAccountRentals
     * const count = await prisma.adAccountRental.count({
     *   where: {
     *     // ... the filter for the AdAccountRentals we want to count
     *   }
     * })
     **/
    count<T extends AdAccountRentalCountArgs>(
      args?: Subset<T, AdAccountRentalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdAccountRentalCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a AdAccountRental.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdAccountRentalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends AdAccountRentalAggregateArgs>(
      args: Subset<T, AdAccountRentalAggregateArgs>,
    ): Prisma.PrismaPromise<GetAdAccountRentalAggregateType<T>>;

    /**
     * Group by AdAccountRental.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdAccountRentalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends AdAccountRentalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdAccountRentalGroupByArgs['orderBy'] }
        : { orderBy?: AdAccountRentalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, AdAccountRentalGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetAdAccountRentalGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the AdAccountRental model
     */
    readonly fields: AdAccountRentalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdAccountRental.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdAccountRentalClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    account<T extends SystemAdAccountDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, SystemAdAccountDefaultArgs<ExtArgs>>,
    ): Prisma__SystemAdAccountClient<
      | $Result.GetResult<
          Prisma.$SystemAdAccountPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the AdAccountRental model
   */
  interface AdAccountRentalFieldRefs {
    readonly id: FieldRef<'AdAccountRental', 'String'>;
    readonly user_id: FieldRef<'AdAccountRental', 'String'>;
    readonly start_date: FieldRef<'AdAccountRental', 'DateTime'>;
    readonly end_date: FieldRef<'AdAccountRental', 'DateTime'>;
    readonly status: FieldRef<'AdAccountRental', 'String'>;
    readonly created_at: FieldRef<'AdAccountRental', 'DateTime'>;
    readonly updated_at: FieldRef<'AdAccountRental', 'DateTime'>;
    readonly account_id: FieldRef<'AdAccountRental', 'Int'>;
  }

  // Custom InputTypes
  /**
   * AdAccountRental findUnique
   */
  export type AdAccountRentalFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdAccountRental
     */
    select?: AdAccountRentalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdAccountRental
     */
    omit?: AdAccountRentalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdAccountRentalInclude<ExtArgs> | null;
    /**
     * Filter, which AdAccountRental to fetch.
     */
    where: AdAccountRentalWhereUniqueInput;
  };

  /**
   * AdAccountRental findUniqueOrThrow
   */
  export type AdAccountRentalFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdAccountRental
     */
    select?: AdAccountRentalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdAccountRental
     */
    omit?: AdAccountRentalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdAccountRentalInclude<ExtArgs> | null;
    /**
     * Filter, which AdAccountRental to fetch.
     */
    where: AdAccountRentalWhereUniqueInput;
  };

  /**
   * AdAccountRental findFirst
   */
  export type AdAccountRentalFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdAccountRental
     */
    select?: AdAccountRentalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdAccountRental
     */
    omit?: AdAccountRentalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdAccountRentalInclude<ExtArgs> | null;
    /**
     * Filter, which AdAccountRental to fetch.
     */
    where?: AdAccountRentalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AdAccountRentals to fetch.
     */
    orderBy?:
      | AdAccountRentalOrderByWithRelationInput
      | AdAccountRentalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AdAccountRentals.
     */
    cursor?: AdAccountRentalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AdAccountRentals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AdAccountRentals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AdAccountRentals.
     */
    distinct?:
      | AdAccountRentalScalarFieldEnum
      | AdAccountRentalScalarFieldEnum[];
  };

  /**
   * AdAccountRental findFirstOrThrow
   */
  export type AdAccountRentalFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdAccountRental
     */
    select?: AdAccountRentalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdAccountRental
     */
    omit?: AdAccountRentalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdAccountRentalInclude<ExtArgs> | null;
    /**
     * Filter, which AdAccountRental to fetch.
     */
    where?: AdAccountRentalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AdAccountRentals to fetch.
     */
    orderBy?:
      | AdAccountRentalOrderByWithRelationInput
      | AdAccountRentalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AdAccountRentals.
     */
    cursor?: AdAccountRentalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AdAccountRentals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AdAccountRentals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AdAccountRentals.
     */
    distinct?:
      | AdAccountRentalScalarFieldEnum
      | AdAccountRentalScalarFieldEnum[];
  };

  /**
   * AdAccountRental findMany
   */
  export type AdAccountRentalFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdAccountRental
     */
    select?: AdAccountRentalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdAccountRental
     */
    omit?: AdAccountRentalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdAccountRentalInclude<ExtArgs> | null;
    /**
     * Filter, which AdAccountRentals to fetch.
     */
    where?: AdAccountRentalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AdAccountRentals to fetch.
     */
    orderBy?:
      | AdAccountRentalOrderByWithRelationInput
      | AdAccountRentalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing AdAccountRentals.
     */
    cursor?: AdAccountRentalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AdAccountRentals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AdAccountRentals.
     */
    skip?: number;
    distinct?:
      | AdAccountRentalScalarFieldEnum
      | AdAccountRentalScalarFieldEnum[];
  };

  /**
   * AdAccountRental create
   */
  export type AdAccountRentalCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdAccountRental
     */
    select?: AdAccountRentalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdAccountRental
     */
    omit?: AdAccountRentalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdAccountRentalInclude<ExtArgs> | null;
    /**
     * The data needed to create a AdAccountRental.
     */
    data: XOR<AdAccountRentalCreateInput, AdAccountRentalUncheckedCreateInput>;
  };

  /**
   * AdAccountRental createMany
   */
  export type AdAccountRentalCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many AdAccountRentals.
     */
    data: AdAccountRentalCreateManyInput | AdAccountRentalCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * AdAccountRental createManyAndReturn
   */
  export type AdAccountRentalCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdAccountRental
     */
    select?: AdAccountRentalSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AdAccountRental
     */
    omit?: AdAccountRentalOmit<ExtArgs> | null;
    /**
     * The data used to create many AdAccountRentals.
     */
    data: AdAccountRentalCreateManyInput | AdAccountRentalCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdAccountRentalIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * AdAccountRental update
   */
  export type AdAccountRentalUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdAccountRental
     */
    select?: AdAccountRentalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdAccountRental
     */
    omit?: AdAccountRentalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdAccountRentalInclude<ExtArgs> | null;
    /**
     * The data needed to update a AdAccountRental.
     */
    data: XOR<AdAccountRentalUpdateInput, AdAccountRentalUncheckedUpdateInput>;
    /**
     * Choose, which AdAccountRental to update.
     */
    where: AdAccountRentalWhereUniqueInput;
  };

  /**
   * AdAccountRental updateMany
   */
  export type AdAccountRentalUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update AdAccountRentals.
     */
    data: XOR<
      AdAccountRentalUpdateManyMutationInput,
      AdAccountRentalUncheckedUpdateManyInput
    >;
    /**
     * Filter which AdAccountRentals to update
     */
    where?: AdAccountRentalWhereInput;
    /**
     * Limit how many AdAccountRentals to update.
     */
    limit?: number;
  };

  /**
   * AdAccountRental updateManyAndReturn
   */
  export type AdAccountRentalUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdAccountRental
     */
    select?: AdAccountRentalSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AdAccountRental
     */
    omit?: AdAccountRentalOmit<ExtArgs> | null;
    /**
     * The data used to update AdAccountRentals.
     */
    data: XOR<
      AdAccountRentalUpdateManyMutationInput,
      AdAccountRentalUncheckedUpdateManyInput
    >;
    /**
     * Filter which AdAccountRentals to update
     */
    where?: AdAccountRentalWhereInput;
    /**
     * Limit how many AdAccountRentals to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdAccountRentalIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * AdAccountRental upsert
   */
  export type AdAccountRentalUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdAccountRental
     */
    select?: AdAccountRentalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdAccountRental
     */
    omit?: AdAccountRentalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdAccountRentalInclude<ExtArgs> | null;
    /**
     * The filter to search for the AdAccountRental to update in case it exists.
     */
    where: AdAccountRentalWhereUniqueInput;
    /**
     * In case the AdAccountRental found by the `where` argument doesn't exist, create a new AdAccountRental with this data.
     */
    create: XOR<
      AdAccountRentalCreateInput,
      AdAccountRentalUncheckedCreateInput
    >;
    /**
     * In case the AdAccountRental was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      AdAccountRentalUpdateInput,
      AdAccountRentalUncheckedUpdateInput
    >;
  };

  /**
   * AdAccountRental delete
   */
  export type AdAccountRentalDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdAccountRental
     */
    select?: AdAccountRentalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdAccountRental
     */
    omit?: AdAccountRentalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdAccountRentalInclude<ExtArgs> | null;
    /**
     * Filter which AdAccountRental to delete.
     */
    where: AdAccountRentalWhereUniqueInput;
  };

  /**
   * AdAccountRental deleteMany
   */
  export type AdAccountRentalDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which AdAccountRentals to delete
     */
    where?: AdAccountRentalWhereInput;
    /**
     * Limit how many AdAccountRentals to delete.
     */
    limit?: number;
  };

  /**
   * AdAccountRental without action
   */
  export type AdAccountRentalDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdAccountRental
     */
    select?: AdAccountRentalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdAccountRental
     */
    omit?: AdAccountRentalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdAccountRentalInclude<ExtArgs> | null;
  };

  /**
   * Model SystemAdAccount
   */

  export type AggregateSystemAdAccount = {
    _count: SystemAdAccountCountAggregateOutputType | null;
    _avg: SystemAdAccountAvgAggregateOutputType | null;
    _sum: SystemAdAccountSumAggregateOutputType | null;
    _min: SystemAdAccountMinAggregateOutputType | null;
    _max: SystemAdAccountMaxAggregateOutputType | null;
  };

  export type SystemAdAccountAvgAggregateOutputType = {
    id: number | null;
    daily_budget: number | null;
    total_spent: number | null;
  };

  export type SystemAdAccountSumAggregateOutputType = {
    id: number | null;
    daily_budget: number | null;
    total_spent: number | null;
  };

  export type SystemAdAccountMinAggregateOutputType = {
    id: number | null;
    account_id: string | null;
    name: string | null;
    status: string | null;
    daily_budget: number | null;
    total_spent: number | null;
    available: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type SystemAdAccountMaxAggregateOutputType = {
    id: number | null;
    account_id: string | null;
    name: string | null;
    status: string | null;
    daily_budget: number | null;
    total_spent: number | null;
    available: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type SystemAdAccountCountAggregateOutputType = {
    id: number;
    account_id: number;
    name: number;
    status: number;
    daily_budget: number;
    total_spent: number;
    available: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type SystemAdAccountAvgAggregateInputType = {
    id?: true;
    daily_budget?: true;
    total_spent?: true;
  };

  export type SystemAdAccountSumAggregateInputType = {
    id?: true;
    daily_budget?: true;
    total_spent?: true;
  };

  export type SystemAdAccountMinAggregateInputType = {
    id?: true;
    account_id?: true;
    name?: true;
    status?: true;
    daily_budget?: true;
    total_spent?: true;
    available?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type SystemAdAccountMaxAggregateInputType = {
    id?: true;
    account_id?: true;
    name?: true;
    status?: true;
    daily_budget?: true;
    total_spent?: true;
    available?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type SystemAdAccountCountAggregateInputType = {
    id?: true;
    account_id?: true;
    name?: true;
    status?: true;
    daily_budget?: true;
    total_spent?: true;
    available?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type SystemAdAccountAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which SystemAdAccount to aggregate.
     */
    where?: SystemAdAccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SystemAdAccounts to fetch.
     */
    orderBy?:
      | SystemAdAccountOrderByWithRelationInput
      | SystemAdAccountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: SystemAdAccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SystemAdAccounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SystemAdAccounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned SystemAdAccounts
     **/
    _count?: true | SystemAdAccountCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: SystemAdAccountAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: SystemAdAccountSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: SystemAdAccountMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: SystemAdAccountMaxAggregateInputType;
  };

  export type GetSystemAdAccountAggregateType<
    T extends SystemAdAccountAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateSystemAdAccount]: P extends
      | '_count'
      | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemAdAccount[P]>
      : GetScalarType<T[P], AggregateSystemAdAccount[P]>;
  };

  export type SystemAdAccountGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: SystemAdAccountWhereInput;
    orderBy?:
      | SystemAdAccountOrderByWithAggregationInput
      | SystemAdAccountOrderByWithAggregationInput[];
    by: SystemAdAccountScalarFieldEnum[] | SystemAdAccountScalarFieldEnum;
    having?: SystemAdAccountScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SystemAdAccountCountAggregateInputType | true;
    _avg?: SystemAdAccountAvgAggregateInputType;
    _sum?: SystemAdAccountSumAggregateInputType;
    _min?: SystemAdAccountMinAggregateInputType;
    _max?: SystemAdAccountMaxAggregateInputType;
  };

  export type SystemAdAccountGroupByOutputType = {
    id: number;
    account_id: string;
    name: string;
    status: string;
    daily_budget: number;
    total_spent: number;
    available: boolean;
    created_at: Date;
    updated_at: Date;
    _count: SystemAdAccountCountAggregateOutputType | null;
    _avg: SystemAdAccountAvgAggregateOutputType | null;
    _sum: SystemAdAccountSumAggregateOutputType | null;
    _min: SystemAdAccountMinAggregateOutputType | null;
    _max: SystemAdAccountMaxAggregateOutputType | null;
  };

  type GetSystemAdAccountGroupByPayload<T extends SystemAdAccountGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<SystemAdAccountGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof SystemAdAccountGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemAdAccountGroupByOutputType[P]>
            : GetScalarType<T[P], SystemAdAccountGroupByOutputType[P]>;
        }
      >
    >;

  export type SystemAdAccountSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      account_id?: boolean;
      name?: boolean;
      status?: boolean;
      daily_budget?: boolean;
      total_spent?: boolean;
      available?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      rentals?: boolean | SystemAdAccount$rentalsArgs<ExtArgs>;
      _count?: boolean | SystemAdAccountCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['systemAdAccount']
  >;

  export type SystemAdAccountSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      account_id?: boolean;
      name?: boolean;
      status?: boolean;
      daily_budget?: boolean;
      total_spent?: boolean;
      available?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
    },
    ExtArgs['result']['systemAdAccount']
  >;

  export type SystemAdAccountSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      account_id?: boolean;
      name?: boolean;
      status?: boolean;
      daily_budget?: boolean;
      total_spent?: boolean;
      available?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
    },
    ExtArgs['result']['systemAdAccount']
  >;

  export type SystemAdAccountSelectScalar = {
    id?: boolean;
    account_id?: boolean;
    name?: boolean;
    status?: boolean;
    daily_budget?: boolean;
    total_spent?: boolean;
    available?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type SystemAdAccountOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'account_id'
    | 'name'
    | 'status'
    | 'daily_budget'
    | 'total_spent'
    | 'available'
    | 'created_at'
    | 'updated_at',
    ExtArgs['result']['systemAdAccount']
  >;
  export type SystemAdAccountInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    rentals?: boolean | SystemAdAccount$rentalsArgs<ExtArgs>;
    _count?: boolean | SystemAdAccountCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type SystemAdAccountIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type SystemAdAccountIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $SystemAdAccountPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'SystemAdAccount';
    objects: {
      rentals: Prisma.$AdAccountRentalPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        account_id: string;
        name: string;
        status: string;
        daily_budget: number;
        total_spent: number;
        available: boolean;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['systemAdAccount']
    >;
    composites: {};
  };

  type SystemAdAccountGetPayload<
    S extends boolean | null | undefined | SystemAdAccountDefaultArgs,
  > = $Result.GetResult<Prisma.$SystemAdAccountPayload, S>;

  type SystemAdAccountCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    SystemAdAccountFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: SystemAdAccountCountAggregateInputType | true;
  };

  export interface SystemAdAccountDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['SystemAdAccount'];
      meta: { name: 'SystemAdAccount' };
    };
    /**
     * Find zero or one SystemAdAccount that matches the filter.
     * @param {SystemAdAccountFindUniqueArgs} args - Arguments to find a SystemAdAccount
     * @example
     * // Get one SystemAdAccount
     * const systemAdAccount = await prisma.systemAdAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SystemAdAccountFindUniqueArgs>(
      args: SelectSubset<T, SystemAdAccountFindUniqueArgs<ExtArgs>>,
    ): Prisma__SystemAdAccountClient<
      $Result.GetResult<
        Prisma.$SystemAdAccountPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one SystemAdAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SystemAdAccountFindUniqueOrThrowArgs} args - Arguments to find a SystemAdAccount
     * @example
     * // Get one SystemAdAccount
     * const systemAdAccount = await prisma.systemAdAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SystemAdAccountFindUniqueOrThrowArgs>(
      args: SelectSubset<T, SystemAdAccountFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__SystemAdAccountClient<
      $Result.GetResult<
        Prisma.$SystemAdAccountPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first SystemAdAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemAdAccountFindFirstArgs} args - Arguments to find a SystemAdAccount
     * @example
     * // Get one SystemAdAccount
     * const systemAdAccount = await prisma.systemAdAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SystemAdAccountFindFirstArgs>(
      args?: SelectSubset<T, SystemAdAccountFindFirstArgs<ExtArgs>>,
    ): Prisma__SystemAdAccountClient<
      $Result.GetResult<
        Prisma.$SystemAdAccountPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first SystemAdAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemAdAccountFindFirstOrThrowArgs} args - Arguments to find a SystemAdAccount
     * @example
     * // Get one SystemAdAccount
     * const systemAdAccount = await prisma.systemAdAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SystemAdAccountFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SystemAdAccountFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__SystemAdAccountClient<
      $Result.GetResult<
        Prisma.$SystemAdAccountPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more SystemAdAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemAdAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemAdAccounts
     * const systemAdAccounts = await prisma.systemAdAccount.findMany()
     *
     * // Get first 10 SystemAdAccounts
     * const systemAdAccounts = await prisma.systemAdAccount.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const systemAdAccountWithIdOnly = await prisma.systemAdAccount.findMany({ select: { id: true } })
     *
     */
    findMany<T extends SystemAdAccountFindManyArgs>(
      args?: SelectSubset<T, SystemAdAccountFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SystemAdAccountPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a SystemAdAccount.
     * @param {SystemAdAccountCreateArgs} args - Arguments to create a SystemAdAccount.
     * @example
     * // Create one SystemAdAccount
     * const SystemAdAccount = await prisma.systemAdAccount.create({
     *   data: {
     *     // ... data to create a SystemAdAccount
     *   }
     * })
     *
     */
    create<T extends SystemAdAccountCreateArgs>(
      args: SelectSubset<T, SystemAdAccountCreateArgs<ExtArgs>>,
    ): Prisma__SystemAdAccountClient<
      $Result.GetResult<
        Prisma.$SystemAdAccountPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many SystemAdAccounts.
     * @param {SystemAdAccountCreateManyArgs} args - Arguments to create many SystemAdAccounts.
     * @example
     * // Create many SystemAdAccounts
     * const systemAdAccount = await prisma.systemAdAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SystemAdAccountCreateManyArgs>(
      args?: SelectSubset<T, SystemAdAccountCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many SystemAdAccounts and returns the data saved in the database.
     * @param {SystemAdAccountCreateManyAndReturnArgs} args - Arguments to create many SystemAdAccounts.
     * @example
     * // Create many SystemAdAccounts
     * const systemAdAccount = await prisma.systemAdAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many SystemAdAccounts and only return the `id`
     * const systemAdAccountWithIdOnly = await prisma.systemAdAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SystemAdAccountCreateManyAndReturnArgs>(
      args?: SelectSubset<T, SystemAdAccountCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SystemAdAccountPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a SystemAdAccount.
     * @param {SystemAdAccountDeleteArgs} args - Arguments to delete one SystemAdAccount.
     * @example
     * // Delete one SystemAdAccount
     * const SystemAdAccount = await prisma.systemAdAccount.delete({
     *   where: {
     *     // ... filter to delete one SystemAdAccount
     *   }
     * })
     *
     */
    delete<T extends SystemAdAccountDeleteArgs>(
      args: SelectSubset<T, SystemAdAccountDeleteArgs<ExtArgs>>,
    ): Prisma__SystemAdAccountClient<
      $Result.GetResult<
        Prisma.$SystemAdAccountPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one SystemAdAccount.
     * @param {SystemAdAccountUpdateArgs} args - Arguments to update one SystemAdAccount.
     * @example
     * // Update one SystemAdAccount
     * const systemAdAccount = await prisma.systemAdAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SystemAdAccountUpdateArgs>(
      args: SelectSubset<T, SystemAdAccountUpdateArgs<ExtArgs>>,
    ): Prisma__SystemAdAccountClient<
      $Result.GetResult<
        Prisma.$SystemAdAccountPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more SystemAdAccounts.
     * @param {SystemAdAccountDeleteManyArgs} args - Arguments to filter SystemAdAccounts to delete.
     * @example
     * // Delete a few SystemAdAccounts
     * const { count } = await prisma.systemAdAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SystemAdAccountDeleteManyArgs>(
      args?: SelectSubset<T, SystemAdAccountDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more SystemAdAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemAdAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemAdAccounts
     * const systemAdAccount = await prisma.systemAdAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SystemAdAccountUpdateManyArgs>(
      args: SelectSubset<T, SystemAdAccountUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more SystemAdAccounts and returns the data updated in the database.
     * @param {SystemAdAccountUpdateManyAndReturnArgs} args - Arguments to update many SystemAdAccounts.
     * @example
     * // Update many SystemAdAccounts
     * const systemAdAccount = await prisma.systemAdAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more SystemAdAccounts and only return the `id`
     * const systemAdAccountWithIdOnly = await prisma.systemAdAccount.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends SystemAdAccountUpdateManyAndReturnArgs>(
      args: SelectSubset<T, SystemAdAccountUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SystemAdAccountPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one SystemAdAccount.
     * @param {SystemAdAccountUpsertArgs} args - Arguments to update or create a SystemAdAccount.
     * @example
     * // Update or create a SystemAdAccount
     * const systemAdAccount = await prisma.systemAdAccount.upsert({
     *   create: {
     *     // ... data to create a SystemAdAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemAdAccount we want to update
     *   }
     * })
     */
    upsert<T extends SystemAdAccountUpsertArgs>(
      args: SelectSubset<T, SystemAdAccountUpsertArgs<ExtArgs>>,
    ): Prisma__SystemAdAccountClient<
      $Result.GetResult<
        Prisma.$SystemAdAccountPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of SystemAdAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemAdAccountCountArgs} args - Arguments to filter SystemAdAccounts to count.
     * @example
     * // Count the number of SystemAdAccounts
     * const count = await prisma.systemAdAccount.count({
     *   where: {
     *     // ... the filter for the SystemAdAccounts we want to count
     *   }
     * })
     **/
    count<T extends SystemAdAccountCountArgs>(
      args?: Subset<T, SystemAdAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemAdAccountCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a SystemAdAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemAdAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends SystemAdAccountAggregateArgs>(
      args: Subset<T, SystemAdAccountAggregateArgs>,
    ): Prisma.PrismaPromise<GetSystemAdAccountAggregateType<T>>;

    /**
     * Group by SystemAdAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemAdAccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends SystemAdAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemAdAccountGroupByArgs['orderBy'] }
        : { orderBy?: SystemAdAccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, SystemAdAccountGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetSystemAdAccountGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the SystemAdAccount model
     */
    readonly fields: SystemAdAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemAdAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemAdAccountClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    rentals<T extends SystemAdAccount$rentalsArgs<ExtArgs> = {}>(
      args?: Subset<T, SystemAdAccount$rentalsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$AdAccountRentalPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the SystemAdAccount model
   */
  interface SystemAdAccountFieldRefs {
    readonly id: FieldRef<'SystemAdAccount', 'Int'>;
    readonly account_id: FieldRef<'SystemAdAccount', 'String'>;
    readonly name: FieldRef<'SystemAdAccount', 'String'>;
    readonly status: FieldRef<'SystemAdAccount', 'String'>;
    readonly daily_budget: FieldRef<'SystemAdAccount', 'Float'>;
    readonly total_spent: FieldRef<'SystemAdAccount', 'Float'>;
    readonly available: FieldRef<'SystemAdAccount', 'Boolean'>;
    readonly created_at: FieldRef<'SystemAdAccount', 'DateTime'>;
    readonly updated_at: FieldRef<'SystemAdAccount', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * SystemAdAccount findUnique
   */
  export type SystemAdAccountFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SystemAdAccount
     */
    select?: SystemAdAccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SystemAdAccount
     */
    omit?: SystemAdAccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemAdAccountInclude<ExtArgs> | null;
    /**
     * Filter, which SystemAdAccount to fetch.
     */
    where: SystemAdAccountWhereUniqueInput;
  };

  /**
   * SystemAdAccount findUniqueOrThrow
   */
  export type SystemAdAccountFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SystemAdAccount
     */
    select?: SystemAdAccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SystemAdAccount
     */
    omit?: SystemAdAccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemAdAccountInclude<ExtArgs> | null;
    /**
     * Filter, which SystemAdAccount to fetch.
     */
    where: SystemAdAccountWhereUniqueInput;
  };

  /**
   * SystemAdAccount findFirst
   */
  export type SystemAdAccountFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SystemAdAccount
     */
    select?: SystemAdAccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SystemAdAccount
     */
    omit?: SystemAdAccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemAdAccountInclude<ExtArgs> | null;
    /**
     * Filter, which SystemAdAccount to fetch.
     */
    where?: SystemAdAccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SystemAdAccounts to fetch.
     */
    orderBy?:
      | SystemAdAccountOrderByWithRelationInput
      | SystemAdAccountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SystemAdAccounts.
     */
    cursor?: SystemAdAccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SystemAdAccounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SystemAdAccounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SystemAdAccounts.
     */
    distinct?:
      | SystemAdAccountScalarFieldEnum
      | SystemAdAccountScalarFieldEnum[];
  };

  /**
   * SystemAdAccount findFirstOrThrow
   */
  export type SystemAdAccountFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SystemAdAccount
     */
    select?: SystemAdAccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SystemAdAccount
     */
    omit?: SystemAdAccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemAdAccountInclude<ExtArgs> | null;
    /**
     * Filter, which SystemAdAccount to fetch.
     */
    where?: SystemAdAccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SystemAdAccounts to fetch.
     */
    orderBy?:
      | SystemAdAccountOrderByWithRelationInput
      | SystemAdAccountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SystemAdAccounts.
     */
    cursor?: SystemAdAccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SystemAdAccounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SystemAdAccounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SystemAdAccounts.
     */
    distinct?:
      | SystemAdAccountScalarFieldEnum
      | SystemAdAccountScalarFieldEnum[];
  };

  /**
   * SystemAdAccount findMany
   */
  export type SystemAdAccountFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SystemAdAccount
     */
    select?: SystemAdAccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SystemAdAccount
     */
    omit?: SystemAdAccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemAdAccountInclude<ExtArgs> | null;
    /**
     * Filter, which SystemAdAccounts to fetch.
     */
    where?: SystemAdAccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SystemAdAccounts to fetch.
     */
    orderBy?:
      | SystemAdAccountOrderByWithRelationInput
      | SystemAdAccountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing SystemAdAccounts.
     */
    cursor?: SystemAdAccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SystemAdAccounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SystemAdAccounts.
     */
    skip?: number;
    distinct?:
      | SystemAdAccountScalarFieldEnum
      | SystemAdAccountScalarFieldEnum[];
  };

  /**
   * SystemAdAccount create
   */
  export type SystemAdAccountCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SystemAdAccount
     */
    select?: SystemAdAccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SystemAdAccount
     */
    omit?: SystemAdAccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemAdAccountInclude<ExtArgs> | null;
    /**
     * The data needed to create a SystemAdAccount.
     */
    data: XOR<SystemAdAccountCreateInput, SystemAdAccountUncheckedCreateInput>;
  };

  /**
   * SystemAdAccount createMany
   */
  export type SystemAdAccountCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many SystemAdAccounts.
     */
    data: SystemAdAccountCreateManyInput | SystemAdAccountCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * SystemAdAccount createManyAndReturn
   */
  export type SystemAdAccountCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SystemAdAccount
     */
    select?: SystemAdAccountSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SystemAdAccount
     */
    omit?: SystemAdAccountOmit<ExtArgs> | null;
    /**
     * The data used to create many SystemAdAccounts.
     */
    data: SystemAdAccountCreateManyInput | SystemAdAccountCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * SystemAdAccount update
   */
  export type SystemAdAccountUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SystemAdAccount
     */
    select?: SystemAdAccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SystemAdAccount
     */
    omit?: SystemAdAccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemAdAccountInclude<ExtArgs> | null;
    /**
     * The data needed to update a SystemAdAccount.
     */
    data: XOR<SystemAdAccountUpdateInput, SystemAdAccountUncheckedUpdateInput>;
    /**
     * Choose, which SystemAdAccount to update.
     */
    where: SystemAdAccountWhereUniqueInput;
  };

  /**
   * SystemAdAccount updateMany
   */
  export type SystemAdAccountUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update SystemAdAccounts.
     */
    data: XOR<
      SystemAdAccountUpdateManyMutationInput,
      SystemAdAccountUncheckedUpdateManyInput
    >;
    /**
     * Filter which SystemAdAccounts to update
     */
    where?: SystemAdAccountWhereInput;
    /**
     * Limit how many SystemAdAccounts to update.
     */
    limit?: number;
  };

  /**
   * SystemAdAccount updateManyAndReturn
   */
  export type SystemAdAccountUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SystemAdAccount
     */
    select?: SystemAdAccountSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SystemAdAccount
     */
    omit?: SystemAdAccountOmit<ExtArgs> | null;
    /**
     * The data used to update SystemAdAccounts.
     */
    data: XOR<
      SystemAdAccountUpdateManyMutationInput,
      SystemAdAccountUncheckedUpdateManyInput
    >;
    /**
     * Filter which SystemAdAccounts to update
     */
    where?: SystemAdAccountWhereInput;
    /**
     * Limit how many SystemAdAccounts to update.
     */
    limit?: number;
  };

  /**
   * SystemAdAccount upsert
   */
  export type SystemAdAccountUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SystemAdAccount
     */
    select?: SystemAdAccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SystemAdAccount
     */
    omit?: SystemAdAccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemAdAccountInclude<ExtArgs> | null;
    /**
     * The filter to search for the SystemAdAccount to update in case it exists.
     */
    where: SystemAdAccountWhereUniqueInput;
    /**
     * In case the SystemAdAccount found by the `where` argument doesn't exist, create a new SystemAdAccount with this data.
     */
    create: XOR<
      SystemAdAccountCreateInput,
      SystemAdAccountUncheckedCreateInput
    >;
    /**
     * In case the SystemAdAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      SystemAdAccountUpdateInput,
      SystemAdAccountUncheckedUpdateInput
    >;
  };

  /**
   * SystemAdAccount delete
   */
  export type SystemAdAccountDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SystemAdAccount
     */
    select?: SystemAdAccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SystemAdAccount
     */
    omit?: SystemAdAccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemAdAccountInclude<ExtArgs> | null;
    /**
     * Filter which SystemAdAccount to delete.
     */
    where: SystemAdAccountWhereUniqueInput;
  };

  /**
   * SystemAdAccount deleteMany
   */
  export type SystemAdAccountDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which SystemAdAccounts to delete
     */
    where?: SystemAdAccountWhereInput;
    /**
     * Limit how many SystemAdAccounts to delete.
     */
    limit?: number;
  };

  /**
   * SystemAdAccount.rentals
   */
  export type SystemAdAccount$rentalsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdAccountRental
     */
    select?: AdAccountRentalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdAccountRental
     */
    omit?: AdAccountRentalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdAccountRentalInclude<ExtArgs> | null;
    where?: AdAccountRentalWhereInput;
    orderBy?:
      | AdAccountRentalOrderByWithRelationInput
      | AdAccountRentalOrderByWithRelationInput[];
    cursor?: AdAccountRentalWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | AdAccountRentalScalarFieldEnum
      | AdAccountRentalScalarFieldEnum[];
  };

  /**
   * SystemAdAccount without action
   */
  export type SystemAdAccountDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SystemAdAccount
     */
    select?: SystemAdAccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SystemAdAccount
     */
    omit?: SystemAdAccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemAdAccountInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const RoleScalarFieldEnum: {
    id: 'id';
    name: 'name';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type RoleScalarFieldEnum =
    (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    instance_id: 'instance_id';
    aud: 'aud';
    email: 'email';
    password: 'password';
    email_confirmed_at: 'email_confirmed_at';
    invited_at: 'invited_at';
    confirmation_token: 'confirmation_token';
    confirmation_sent_at: 'confirmation_sent_at';
    recovery_token: 'recovery_token';
    recovery_sent_at: 'recovery_sent_at';
    email_change_token_new: 'email_change_token_new';
    email_change: 'email_change';
    email_change_sent_at: 'email_change_sent_at';
    last_sign_in_at: 'last_sign_in_at';
    raw_app_meta_data: 'raw_app_meta_data';
    raw_user_meta_data: 'raw_user_meta_data';
    is_super_admin: 'is_super_admin';
    created_at: 'created_at';
    updated_at: 'updated_at';
    phone: 'phone';
    phone_confirmed_at: 'phone_confirmed_at';
    phone_change: 'phone_change';
    phone_change_token: 'phone_change_token';
    phone_change_sent_at: 'phone_change_sent_at';
    confirmed_at: 'confirmed_at';
    email_change_token_current: 'email_change_token_current';
    email_change_confirm_status: 'email_change_confirm_status';
    banned_until: 'banned_until';
    reauthentication_token: 'reauthentication_token';
    reauthentication_sent_at: 'reauthentication_sent_at';
    is_sso_user: 'is_sso_user';
    deleted_at: 'deleted_at';
    is_anonymous: 'is_anonymous';
    role_id: 'role_id';
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const TokenScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    user_token: 'user_token';
    access_token: 'access_token';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type TokenScalarFieldEnum =
    (typeof TokenScalarFieldEnum)[keyof typeof TokenScalarFieldEnum];

  export const FacebookFanPageScalarFieldEnum: {
    id: 'id';
    page_name: 'page_name';
    page_category: 'page_category';
    page_url: 'page_url';
    page_avatar_url: 'page_avatar_url';
    follower_count: 'follower_count';
    page_type: 'page_type';
    created_at: 'created_at';
    updated_at: 'updated_at';
    connection_id: 'connection_id';
  };

  export type FacebookFanPageScalarFieldEnum =
    (typeof FacebookFanPageScalarFieldEnum)[keyof typeof FacebookFanPageScalarFieldEnum];

  export const FacebookConnectionsScalarFieldEnum: {
    id: 'id';
    page_id: 'page_id';
    access_token: 'access_token';
    status: 'status';
    permissions: 'permissions';
    last_sync: 'last_sync';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    facebook_fanpage_id: 'facebook_fanpage_id';
    role_id: 'role_id';
  };

  export type FacebookConnectionsScalarFieldEnum =
    (typeof FacebookConnectionsScalarFieldEnum)[keyof typeof FacebookConnectionsScalarFieldEnum];

  export const FacebookPageInsightsScalarFieldEnum: {
    id: 'id';
    posts: 'posts';
    approach: 'approach';
    interactions: 'interactions';
    follows: 'follows';
    created_at: 'created_at';
    name: 'name';
    image_url: 'image_url';
    category: 'category';
    status: 'status';
    user_id: 'user_id';
    facebook_fanpage_id: 'facebook_fanpage_id';
  };

  export type FacebookPageInsightsScalarFieldEnum =
    (typeof FacebookPageInsightsScalarFieldEnum)[keyof typeof FacebookPageInsightsScalarFieldEnum];

  export const ProfileScalarFieldEnum: {
    user_id: 'user_id';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type ProfileScalarFieldEnum =
    (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum];

  export const AdAccountRentalScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    start_date: 'start_date';
    end_date: 'end_date';
    status: 'status';
    created_at: 'created_at';
    updated_at: 'updated_at';
    account_id: 'account_id';
  };

  export type AdAccountRentalScalarFieldEnum =
    (typeof AdAccountRentalScalarFieldEnum)[keyof typeof AdAccountRentalScalarFieldEnum];

  export const SystemAdAccountScalarFieldEnum: {
    id: 'id';
    account_id: 'account_id';
    name: 'name';
    status: 'status';
    daily_budget: 'daily_budget';
    total_spent: 'total_spent';
    available: 'available';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type SystemAdAccountScalarFieldEnum =
    (typeof SystemAdAccountScalarFieldEnum)[keyof typeof SystemAdAccountScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull;
    JsonNull: typeof JsonNull;
  };

  export type NullableJsonNullValueInput =
    (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const JsonNullValueFilter: {
    DbNull: typeof DbNull;
    JsonNull: typeof JsonNull;
    AnyNull: typeof AnyNull;
  };

  export type JsonNullValueFilter =
    (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String'
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String[]'
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime'
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int'
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int[]'
  >;

  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Json'
  >;

  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'QueryMode'
  >;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Boolean'
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float'
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float[]'
  >;

  /**
   * Deep Input Types
   */

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[];
    OR?: RoleWhereInput[];
    NOT?: RoleWhereInput | RoleWhereInput[];
    id?: StringFilter<'Role'> | string;
    name?: StringFilter<'Role'> | string;
    createdAt?: DateTimeFilter<'Role'> | Date | string;
    updatedAt?: DateTimeFilter<'Role'> | Date | string;
    users?: UserListRelationFilter;
  };

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    users?: UserOrderByRelationAggregateInput;
  };

  export type RoleWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      name?: string;
      AND?: RoleWhereInput | RoleWhereInput[];
      OR?: RoleWhereInput[];
      NOT?: RoleWhereInput | RoleWhereInput[];
      createdAt?: DateTimeFilter<'Role'> | Date | string;
      updatedAt?: DateTimeFilter<'Role'> | Date | string;
      users?: UserListRelationFilter;
    },
    'id' | 'name'
  >;

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: RoleCountOrderByAggregateInput;
    _max?: RoleMaxOrderByAggregateInput;
    _min?: RoleMinOrderByAggregateInput;
  };

  export type RoleScalarWhereWithAggregatesInput = {
    AND?:
      | RoleScalarWhereWithAggregatesInput
      | RoleScalarWhereWithAggregatesInput[];
    OR?: RoleScalarWhereWithAggregatesInput[];
    NOT?:
      | RoleScalarWhereWithAggregatesInput
      | RoleScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Role'> | string;
    name?: StringWithAggregatesFilter<'Role'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'Role'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Role'> | Date | string;
  };

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: StringFilter<'User'> | string;
    instance_id?: IntNullableFilter<'User'> | number | null;
    aud?: StringNullableFilter<'User'> | string | null;
    email?: StringFilter<'User'> | string;
    password?: StringFilter<'User'> | string;
    email_confirmed_at?: DateTimeNullableFilter<'User'> | Date | string | null;
    invited_at?: DateTimeNullableFilter<'User'> | Date | string | null;
    confirmation_token?: StringNullableFilter<'User'> | string | null;
    confirmation_sent_at?:
      | DateTimeNullableFilter<'User'>
      | Date
      | string
      | null;
    recovery_token?: StringNullableFilter<'User'> | string | null;
    recovery_sent_at?: DateTimeNullableFilter<'User'> | Date | string | null;
    email_change_token_new?: StringNullableFilter<'User'> | string | null;
    email_change?: StringNullableFilter<'User'> | string | null;
    email_change_sent_at?:
      | DateTimeNullableFilter<'User'>
      | Date
      | string
      | null;
    last_sign_in_at?: DateTimeNullableFilter<'User'> | Date | string | null;
    raw_app_meta_data?: JsonNullableFilter<'User'>;
    raw_user_meta_data?: JsonNullableFilter<'User'>;
    is_super_admin?: BoolFilter<'User'> | boolean;
    created_at?: DateTimeFilter<'User'> | Date | string;
    updated_at?: DateTimeFilter<'User'> | Date | string;
    phone?: StringNullableFilter<'User'> | string | null;
    phone_confirmed_at?: DateTimeNullableFilter<'User'> | Date | string | null;
    phone_change?: StringNullableFilter<'User'> | string | null;
    phone_change_token?: StringNullableFilter<'User'> | string | null;
    phone_change_sent_at?:
      | DateTimeNullableFilter<'User'>
      | Date
      | string
      | null;
    confirmed_at?: DateTimeNullableFilter<'User'> | Date | string | null;
    email_change_token_current?: StringNullableFilter<'User'> | string | null;
    email_change_confirm_status?: IntNullableFilter<'User'> | number | null;
    banned_until?: DateTimeNullableFilter<'User'> | Date | string | null;
    reauthentication_token?: StringNullableFilter<'User'> | string | null;
    reauthentication_sent_at?:
      | DateTimeNullableFilter<'User'>
      | Date
      | string
      | null;
    is_sso_user?: BoolFilter<'User'> | boolean;
    deleted_at?: DateTimeNullableFilter<'User'> | Date | string | null;
    is_anonymous?: BoolFilter<'User'> | boolean;
    role_id?: StringFilter<'User'> | string;
    rentals?: AdAccountRentalListRelationFilter;
    profile?: XOR<
      ProfileNullableScalarRelationFilter,
      ProfileWhereInput
    > | null;
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>;
    facebook_connections?: FacebookConnectionsListRelationFilter;
    token?: TokenListRelationFilter;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    instance_id?: SortOrderInput | SortOrder;
    aud?: SortOrderInput | SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    email_confirmed_at?: SortOrderInput | SortOrder;
    invited_at?: SortOrderInput | SortOrder;
    confirmation_token?: SortOrderInput | SortOrder;
    confirmation_sent_at?: SortOrderInput | SortOrder;
    recovery_token?: SortOrderInput | SortOrder;
    recovery_sent_at?: SortOrderInput | SortOrder;
    email_change_token_new?: SortOrderInput | SortOrder;
    email_change?: SortOrderInput | SortOrder;
    email_change_sent_at?: SortOrderInput | SortOrder;
    last_sign_in_at?: SortOrderInput | SortOrder;
    raw_app_meta_data?: SortOrderInput | SortOrder;
    raw_user_meta_data?: SortOrderInput | SortOrder;
    is_super_admin?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    phone?: SortOrderInput | SortOrder;
    phone_confirmed_at?: SortOrderInput | SortOrder;
    phone_change?: SortOrderInput | SortOrder;
    phone_change_token?: SortOrderInput | SortOrder;
    phone_change_sent_at?: SortOrderInput | SortOrder;
    confirmed_at?: SortOrderInput | SortOrder;
    email_change_token_current?: SortOrderInput | SortOrder;
    email_change_confirm_status?: SortOrderInput | SortOrder;
    banned_until?: SortOrderInput | SortOrder;
    reauthentication_token?: SortOrderInput | SortOrder;
    reauthentication_sent_at?: SortOrderInput | SortOrder;
    is_sso_user?: SortOrder;
    deleted_at?: SortOrderInput | SortOrder;
    is_anonymous?: SortOrder;
    role_id?: SortOrder;
    rentals?: AdAccountRentalOrderByRelationAggregateInput;
    profile?: ProfileOrderByWithRelationInput;
    role?: RoleOrderByWithRelationInput;
    facebook_connections?: FacebookConnectionsOrderByRelationAggregateInput;
    token?: TokenOrderByRelationAggregateInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      instance_id?: IntNullableFilter<'User'> | number | null;
      aud?: StringNullableFilter<'User'> | string | null;
      password?: StringFilter<'User'> | string;
      email_confirmed_at?:
        | DateTimeNullableFilter<'User'>
        | Date
        | string
        | null;
      invited_at?: DateTimeNullableFilter<'User'> | Date | string | null;
      confirmation_token?: StringNullableFilter<'User'> | string | null;
      confirmation_sent_at?:
        | DateTimeNullableFilter<'User'>
        | Date
        | string
        | null;
      recovery_token?: StringNullableFilter<'User'> | string | null;
      recovery_sent_at?: DateTimeNullableFilter<'User'> | Date | string | null;
      email_change_token_new?: StringNullableFilter<'User'> | string | null;
      email_change?: StringNullableFilter<'User'> | string | null;
      email_change_sent_at?:
        | DateTimeNullableFilter<'User'>
        | Date
        | string
        | null;
      last_sign_in_at?: DateTimeNullableFilter<'User'> | Date | string | null;
      raw_app_meta_data?: JsonNullableFilter<'User'>;
      raw_user_meta_data?: JsonNullableFilter<'User'>;
      is_super_admin?: BoolFilter<'User'> | boolean;
      created_at?: DateTimeFilter<'User'> | Date | string;
      updated_at?: DateTimeFilter<'User'> | Date | string;
      phone?: StringNullableFilter<'User'> | string | null;
      phone_confirmed_at?:
        | DateTimeNullableFilter<'User'>
        | Date
        | string
        | null;
      phone_change?: StringNullableFilter<'User'> | string | null;
      phone_change_token?: StringNullableFilter<'User'> | string | null;
      phone_change_sent_at?:
        | DateTimeNullableFilter<'User'>
        | Date
        | string
        | null;
      confirmed_at?: DateTimeNullableFilter<'User'> | Date | string | null;
      email_change_token_current?: StringNullableFilter<'User'> | string | null;
      email_change_confirm_status?: IntNullableFilter<'User'> | number | null;
      banned_until?: DateTimeNullableFilter<'User'> | Date | string | null;
      reauthentication_token?: StringNullableFilter<'User'> | string | null;
      reauthentication_sent_at?:
        | DateTimeNullableFilter<'User'>
        | Date
        | string
        | null;
      is_sso_user?: BoolFilter<'User'> | boolean;
      deleted_at?: DateTimeNullableFilter<'User'> | Date | string | null;
      is_anonymous?: BoolFilter<'User'> | boolean;
      role_id?: StringFilter<'User'> | string;
      rentals?: AdAccountRentalListRelationFilter;
      profile?: XOR<
        ProfileNullableScalarRelationFilter,
        ProfileWhereInput
      > | null;
      role?: XOR<RoleScalarRelationFilter, RoleWhereInput>;
      facebook_connections?: FacebookConnectionsListRelationFilter;
      token?: TokenListRelationFilter;
    },
    'id' | 'email'
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    instance_id?: SortOrderInput | SortOrder;
    aud?: SortOrderInput | SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    email_confirmed_at?: SortOrderInput | SortOrder;
    invited_at?: SortOrderInput | SortOrder;
    confirmation_token?: SortOrderInput | SortOrder;
    confirmation_sent_at?: SortOrderInput | SortOrder;
    recovery_token?: SortOrderInput | SortOrder;
    recovery_sent_at?: SortOrderInput | SortOrder;
    email_change_token_new?: SortOrderInput | SortOrder;
    email_change?: SortOrderInput | SortOrder;
    email_change_sent_at?: SortOrderInput | SortOrder;
    last_sign_in_at?: SortOrderInput | SortOrder;
    raw_app_meta_data?: SortOrderInput | SortOrder;
    raw_user_meta_data?: SortOrderInput | SortOrder;
    is_super_admin?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    phone?: SortOrderInput | SortOrder;
    phone_confirmed_at?: SortOrderInput | SortOrder;
    phone_change?: SortOrderInput | SortOrder;
    phone_change_token?: SortOrderInput | SortOrder;
    phone_change_sent_at?: SortOrderInput | SortOrder;
    confirmed_at?: SortOrderInput | SortOrder;
    email_change_token_current?: SortOrderInput | SortOrder;
    email_change_confirm_status?: SortOrderInput | SortOrder;
    banned_until?: SortOrderInput | SortOrder;
    reauthentication_token?: SortOrderInput | SortOrder;
    reauthentication_sent_at?: SortOrderInput | SortOrder;
    is_sso_user?: SortOrder;
    deleted_at?: SortOrderInput | SortOrder;
    is_anonymous?: SortOrder;
    role_id?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _avg?: UserAvgOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
    _sum?: UserSumOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'User'> | string;
    instance_id?: IntNullableWithAggregatesFilter<'User'> | number | null;
    aud?: StringNullableWithAggregatesFilter<'User'> | string | null;
    email?: StringWithAggregatesFilter<'User'> | string;
    password?: StringWithAggregatesFilter<'User'> | string;
    email_confirmed_at?:
      | DateTimeNullableWithAggregatesFilter<'User'>
      | Date
      | string
      | null;
    invited_at?:
      | DateTimeNullableWithAggregatesFilter<'User'>
      | Date
      | string
      | null;
    confirmation_token?:
      | StringNullableWithAggregatesFilter<'User'>
      | string
      | null;
    confirmation_sent_at?:
      | DateTimeNullableWithAggregatesFilter<'User'>
      | Date
      | string
      | null;
    recovery_token?: StringNullableWithAggregatesFilter<'User'> | string | null;
    recovery_sent_at?:
      | DateTimeNullableWithAggregatesFilter<'User'>
      | Date
      | string
      | null;
    email_change_token_new?:
      | StringNullableWithAggregatesFilter<'User'>
      | string
      | null;
    email_change?: StringNullableWithAggregatesFilter<'User'> | string | null;
    email_change_sent_at?:
      | DateTimeNullableWithAggregatesFilter<'User'>
      | Date
      | string
      | null;
    last_sign_in_at?:
      | DateTimeNullableWithAggregatesFilter<'User'>
      | Date
      | string
      | null;
    raw_app_meta_data?: JsonNullableWithAggregatesFilter<'User'>;
    raw_user_meta_data?: JsonNullableWithAggregatesFilter<'User'>;
    is_super_admin?: BoolWithAggregatesFilter<'User'> | boolean;
    created_at?: DateTimeWithAggregatesFilter<'User'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'User'> | Date | string;
    phone?: StringNullableWithAggregatesFilter<'User'> | string | null;
    phone_confirmed_at?:
      | DateTimeNullableWithAggregatesFilter<'User'>
      | Date
      | string
      | null;
    phone_change?: StringNullableWithAggregatesFilter<'User'> | string | null;
    phone_change_token?:
      | StringNullableWithAggregatesFilter<'User'>
      | string
      | null;
    phone_change_sent_at?:
      | DateTimeNullableWithAggregatesFilter<'User'>
      | Date
      | string
      | null;
    confirmed_at?:
      | DateTimeNullableWithAggregatesFilter<'User'>
      | Date
      | string
      | null;
    email_change_token_current?:
      | StringNullableWithAggregatesFilter<'User'>
      | string
      | null;
    email_change_confirm_status?:
      | IntNullableWithAggregatesFilter<'User'>
      | number
      | null;
    banned_until?:
      | DateTimeNullableWithAggregatesFilter<'User'>
      | Date
      | string
      | null;
    reauthentication_token?:
      | StringNullableWithAggregatesFilter<'User'>
      | string
      | null;
    reauthentication_sent_at?:
      | DateTimeNullableWithAggregatesFilter<'User'>
      | Date
      | string
      | null;
    is_sso_user?: BoolWithAggregatesFilter<'User'> | boolean;
    deleted_at?:
      | DateTimeNullableWithAggregatesFilter<'User'>
      | Date
      | string
      | null;
    is_anonymous?: BoolWithAggregatesFilter<'User'> | boolean;
    role_id?: StringWithAggregatesFilter<'User'> | string;
  };

  export type TokenWhereInput = {
    AND?: TokenWhereInput | TokenWhereInput[];
    OR?: TokenWhereInput[];
    NOT?: TokenWhereInput | TokenWhereInput[];
    id?: StringFilter<'Token'> | string;
    user_id?: StringFilter<'Token'> | string;
    user_token?: StringNullableListFilter<'Token'>;
    access_token?: StringNullableListFilter<'Token'>;
    created_at?: DateTimeFilter<'Token'> | Date | string;
    updated_at?: DateTimeFilter<'Token'> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type TokenOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    user_token?: SortOrder;
    access_token?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type TokenWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: TokenWhereInput | TokenWhereInput[];
      OR?: TokenWhereInput[];
      NOT?: TokenWhereInput | TokenWhereInput[];
      user_id?: StringFilter<'Token'> | string;
      user_token?: StringNullableListFilter<'Token'>;
      access_token?: StringNullableListFilter<'Token'>;
      created_at?: DateTimeFilter<'Token'> | Date | string;
      updated_at?: DateTimeFilter<'Token'> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    'id'
  >;

  export type TokenOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    user_token?: SortOrder;
    access_token?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: TokenCountOrderByAggregateInput;
    _max?: TokenMaxOrderByAggregateInput;
    _min?: TokenMinOrderByAggregateInput;
  };

  export type TokenScalarWhereWithAggregatesInput = {
    AND?:
      | TokenScalarWhereWithAggregatesInput
      | TokenScalarWhereWithAggregatesInput[];
    OR?: TokenScalarWhereWithAggregatesInput[];
    NOT?:
      | TokenScalarWhereWithAggregatesInput
      | TokenScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Token'> | string;
    user_id?: StringWithAggregatesFilter<'Token'> | string;
    user_token?: StringNullableListFilter<'Token'>;
    access_token?: StringNullableListFilter<'Token'>;
    created_at?: DateTimeWithAggregatesFilter<'Token'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'Token'> | Date | string;
  };

  export type FacebookFanPageWhereInput = {
    AND?: FacebookFanPageWhereInput | FacebookFanPageWhereInput[];
    OR?: FacebookFanPageWhereInput[];
    NOT?: FacebookFanPageWhereInput | FacebookFanPageWhereInput[];
    id?: StringFilter<'FacebookFanPage'> | string;
    page_name?: StringFilter<'FacebookFanPage'> | string;
    page_category?: StringFilter<'FacebookFanPage'> | string;
    page_url?: StringFilter<'FacebookFanPage'> | string;
    page_avatar_url?: StringFilter<'FacebookFanPage'> | string;
    follower_count?: IntFilter<'FacebookFanPage'> | number;
    page_type?: StringFilter<'FacebookFanPage'> | string;
    created_at?: DateTimeFilter<'FacebookFanPage'> | Date | string;
    updated_at?: DateTimeFilter<'FacebookFanPage'> | Date | string;
    connection_id?: StringFilter<'FacebookFanPage'> | string;
    facebook_page_insights?: XOR<
      FacebookPageInsightsNullableScalarRelationFilter,
      FacebookPageInsightsWhereInput
    > | null;
    facebookConnections?: XOR<
      FacebookConnectionsNullableScalarRelationFilter,
      FacebookConnectionsWhereInput
    > | null;
  };

  export type FacebookFanPageOrderByWithRelationInput = {
    id?: SortOrder;
    page_name?: SortOrder;
    page_category?: SortOrder;
    page_url?: SortOrder;
    page_avatar_url?: SortOrder;
    follower_count?: SortOrder;
    page_type?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    connection_id?: SortOrder;
    facebook_page_insights?: FacebookPageInsightsOrderByWithRelationInput;
    facebookConnections?: FacebookConnectionsOrderByWithRelationInput;
  };

  export type FacebookFanPageWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      connection_id?: string;
      AND?: FacebookFanPageWhereInput | FacebookFanPageWhereInput[];
      OR?: FacebookFanPageWhereInput[];
      NOT?: FacebookFanPageWhereInput | FacebookFanPageWhereInput[];
      page_name?: StringFilter<'FacebookFanPage'> | string;
      page_category?: StringFilter<'FacebookFanPage'> | string;
      page_url?: StringFilter<'FacebookFanPage'> | string;
      page_avatar_url?: StringFilter<'FacebookFanPage'> | string;
      follower_count?: IntFilter<'FacebookFanPage'> | number;
      page_type?: StringFilter<'FacebookFanPage'> | string;
      created_at?: DateTimeFilter<'FacebookFanPage'> | Date | string;
      updated_at?: DateTimeFilter<'FacebookFanPage'> | Date | string;
      facebook_page_insights?: XOR<
        FacebookPageInsightsNullableScalarRelationFilter,
        FacebookPageInsightsWhereInput
      > | null;
      facebookConnections?: XOR<
        FacebookConnectionsNullableScalarRelationFilter,
        FacebookConnectionsWhereInput
      > | null;
    },
    'id' | 'connection_id'
  >;

  export type FacebookFanPageOrderByWithAggregationInput = {
    id?: SortOrder;
    page_name?: SortOrder;
    page_category?: SortOrder;
    page_url?: SortOrder;
    page_avatar_url?: SortOrder;
    follower_count?: SortOrder;
    page_type?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    connection_id?: SortOrder;
    _count?: FacebookFanPageCountOrderByAggregateInput;
    _avg?: FacebookFanPageAvgOrderByAggregateInput;
    _max?: FacebookFanPageMaxOrderByAggregateInput;
    _min?: FacebookFanPageMinOrderByAggregateInput;
    _sum?: FacebookFanPageSumOrderByAggregateInput;
  };

  export type FacebookFanPageScalarWhereWithAggregatesInput = {
    AND?:
      | FacebookFanPageScalarWhereWithAggregatesInput
      | FacebookFanPageScalarWhereWithAggregatesInput[];
    OR?: FacebookFanPageScalarWhereWithAggregatesInput[];
    NOT?:
      | FacebookFanPageScalarWhereWithAggregatesInput
      | FacebookFanPageScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'FacebookFanPage'> | string;
    page_name?: StringWithAggregatesFilter<'FacebookFanPage'> | string;
    page_category?: StringWithAggregatesFilter<'FacebookFanPage'> | string;
    page_url?: StringWithAggregatesFilter<'FacebookFanPage'> | string;
    page_avatar_url?: StringWithAggregatesFilter<'FacebookFanPage'> | string;
    follower_count?: IntWithAggregatesFilter<'FacebookFanPage'> | number;
    page_type?: StringWithAggregatesFilter<'FacebookFanPage'> | string;
    created_at?:
      | DateTimeWithAggregatesFilter<'FacebookFanPage'>
      | Date
      | string;
    updated_at?:
      | DateTimeWithAggregatesFilter<'FacebookFanPage'>
      | Date
      | string;
    connection_id?: StringWithAggregatesFilter<'FacebookFanPage'> | string;
  };

  export type FacebookConnectionsWhereInput = {
    AND?: FacebookConnectionsWhereInput | FacebookConnectionsWhereInput[];
    OR?: FacebookConnectionsWhereInput[];
    NOT?: FacebookConnectionsWhereInput | FacebookConnectionsWhereInput[];
    id?: StringFilter<'FacebookConnections'> | string;
    page_id?: StringFilter<'FacebookConnections'> | string;
    access_token?: StringNullableListFilter<'FacebookConnections'>;
    status?: StringFilter<'FacebookConnections'> | string;
    permissions?: StringNullableListFilter<'FacebookConnections'>;
    last_sync?:
      | DateTimeNullableFilter<'FacebookConnections'>
      | Date
      | string
      | null;
    created_at?: DateTimeFilter<'FacebookConnections'> | Date | string;
    updated_at?: DateTimeFilter<'FacebookConnections'> | Date | string;
    user_id?: StringFilter<'FacebookConnections'> | string;
    facebook_fanpage_id?: StringFilter<'FacebookConnections'> | string;
    role_id?: StringNullableFilter<'FacebookConnections'> | string | null;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    facebookFanpage?: XOR<
      FacebookFanPageScalarRelationFilter,
      FacebookFanPageWhereInput
    >;
  };

  export type FacebookConnectionsOrderByWithRelationInput = {
    id?: SortOrder;
    page_id?: SortOrder;
    access_token?: SortOrder;
    status?: SortOrder;
    permissions?: SortOrder;
    last_sync?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    facebook_fanpage_id?: SortOrder;
    role_id?: SortOrderInput | SortOrder;
    user?: UserOrderByWithRelationInput;
    facebookFanpage?: FacebookFanPageOrderByWithRelationInput;
  };

  export type FacebookConnectionsWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      facebook_fanpage_id?: string;
      AND?: FacebookConnectionsWhereInput | FacebookConnectionsWhereInput[];
      OR?: FacebookConnectionsWhereInput[];
      NOT?: FacebookConnectionsWhereInput | FacebookConnectionsWhereInput[];
      page_id?: StringFilter<'FacebookConnections'> | string;
      access_token?: StringNullableListFilter<'FacebookConnections'>;
      status?: StringFilter<'FacebookConnections'> | string;
      permissions?: StringNullableListFilter<'FacebookConnections'>;
      last_sync?:
        | DateTimeNullableFilter<'FacebookConnections'>
        | Date
        | string
        | null;
      created_at?: DateTimeFilter<'FacebookConnections'> | Date | string;
      updated_at?: DateTimeFilter<'FacebookConnections'> | Date | string;
      user_id?: StringFilter<'FacebookConnections'> | string;
      role_id?: StringNullableFilter<'FacebookConnections'> | string | null;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      facebookFanpage?: XOR<
        FacebookFanPageScalarRelationFilter,
        FacebookFanPageWhereInput
      >;
    },
    'id' | 'facebook_fanpage_id'
  >;

  export type FacebookConnectionsOrderByWithAggregationInput = {
    id?: SortOrder;
    page_id?: SortOrder;
    access_token?: SortOrder;
    status?: SortOrder;
    permissions?: SortOrder;
    last_sync?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    facebook_fanpage_id?: SortOrder;
    role_id?: SortOrderInput | SortOrder;
    _count?: FacebookConnectionsCountOrderByAggregateInput;
    _max?: FacebookConnectionsMaxOrderByAggregateInput;
    _min?: FacebookConnectionsMinOrderByAggregateInput;
  };

  export type FacebookConnectionsScalarWhereWithAggregatesInput = {
    AND?:
      | FacebookConnectionsScalarWhereWithAggregatesInput
      | FacebookConnectionsScalarWhereWithAggregatesInput[];
    OR?: FacebookConnectionsScalarWhereWithAggregatesInput[];
    NOT?:
      | FacebookConnectionsScalarWhereWithAggregatesInput
      | FacebookConnectionsScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'FacebookConnections'> | string;
    page_id?: StringWithAggregatesFilter<'FacebookConnections'> | string;
    access_token?: StringNullableListFilter<'FacebookConnections'>;
    status?: StringWithAggregatesFilter<'FacebookConnections'> | string;
    permissions?: StringNullableListFilter<'FacebookConnections'>;
    last_sync?:
      | DateTimeNullableWithAggregatesFilter<'FacebookConnections'>
      | Date
      | string
      | null;
    created_at?:
      | DateTimeWithAggregatesFilter<'FacebookConnections'>
      | Date
      | string;
    updated_at?:
      | DateTimeWithAggregatesFilter<'FacebookConnections'>
      | Date
      | string;
    user_id?: StringWithAggregatesFilter<'FacebookConnections'> | string;
    facebook_fanpage_id?:
      | StringWithAggregatesFilter<'FacebookConnections'>
      | string;
    role_id?:
      | StringNullableWithAggregatesFilter<'FacebookConnections'>
      | string
      | null;
  };

  export type FacebookPageInsightsWhereInput = {
    AND?: FacebookPageInsightsWhereInput | FacebookPageInsightsWhereInput[];
    OR?: FacebookPageInsightsWhereInput[];
    NOT?: FacebookPageInsightsWhereInput | FacebookPageInsightsWhereInput[];
    id?: IntFilter<'FacebookPageInsights'> | number;
    posts?: IntFilter<'FacebookPageInsights'> | number;
    approach?: IntFilter<'FacebookPageInsights'> | number;
    interactions?: IntFilter<'FacebookPageInsights'> | number;
    follows?: IntFilter<'FacebookPageInsights'> | number;
    created_at?: DateTimeFilter<'FacebookPageInsights'> | Date | string;
    name?: StringNullableFilter<'FacebookPageInsights'> | string | null;
    image_url?: StringNullableFilter<'FacebookPageInsights'> | string | null;
    category?: StringNullableFilter<'FacebookPageInsights'> | string | null;
    status?: StringNullableFilter<'FacebookPageInsights'> | string | null;
    user_id?: StringNullableFilter<'FacebookPageInsights'> | string | null;
    facebook_fanpage_id?: StringFilter<'FacebookPageInsights'> | string;
    facebookFanpage?: XOR<
      FacebookFanPageScalarRelationFilter,
      FacebookFanPageWhereInput
    >;
  };

  export type FacebookPageInsightsOrderByWithRelationInput = {
    id?: SortOrder;
    posts?: SortOrder;
    approach?: SortOrder;
    interactions?: SortOrder;
    follows?: SortOrder;
    created_at?: SortOrder;
    name?: SortOrderInput | SortOrder;
    image_url?: SortOrderInput | SortOrder;
    category?: SortOrderInput | SortOrder;
    status?: SortOrderInput | SortOrder;
    user_id?: SortOrderInput | SortOrder;
    facebook_fanpage_id?: SortOrder;
    facebookFanpage?: FacebookFanPageOrderByWithRelationInput;
  };

  export type FacebookPageInsightsWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      facebook_fanpage_id?: string;
      AND?: FacebookPageInsightsWhereInput | FacebookPageInsightsWhereInput[];
      OR?: FacebookPageInsightsWhereInput[];
      NOT?: FacebookPageInsightsWhereInput | FacebookPageInsightsWhereInput[];
      posts?: IntFilter<'FacebookPageInsights'> | number;
      approach?: IntFilter<'FacebookPageInsights'> | number;
      interactions?: IntFilter<'FacebookPageInsights'> | number;
      follows?: IntFilter<'FacebookPageInsights'> | number;
      created_at?: DateTimeFilter<'FacebookPageInsights'> | Date | string;
      name?: StringNullableFilter<'FacebookPageInsights'> | string | null;
      image_url?: StringNullableFilter<'FacebookPageInsights'> | string | null;
      category?: StringNullableFilter<'FacebookPageInsights'> | string | null;
      status?: StringNullableFilter<'FacebookPageInsights'> | string | null;
      user_id?: StringNullableFilter<'FacebookPageInsights'> | string | null;
      facebookFanpage?: XOR<
        FacebookFanPageScalarRelationFilter,
        FacebookFanPageWhereInput
      >;
    },
    'id' | 'facebook_fanpage_id'
  >;

  export type FacebookPageInsightsOrderByWithAggregationInput = {
    id?: SortOrder;
    posts?: SortOrder;
    approach?: SortOrder;
    interactions?: SortOrder;
    follows?: SortOrder;
    created_at?: SortOrder;
    name?: SortOrderInput | SortOrder;
    image_url?: SortOrderInput | SortOrder;
    category?: SortOrderInput | SortOrder;
    status?: SortOrderInput | SortOrder;
    user_id?: SortOrderInput | SortOrder;
    facebook_fanpage_id?: SortOrder;
    _count?: FacebookPageInsightsCountOrderByAggregateInput;
    _avg?: FacebookPageInsightsAvgOrderByAggregateInput;
    _max?: FacebookPageInsightsMaxOrderByAggregateInput;
    _min?: FacebookPageInsightsMinOrderByAggregateInput;
    _sum?: FacebookPageInsightsSumOrderByAggregateInput;
  };

  export type FacebookPageInsightsScalarWhereWithAggregatesInput = {
    AND?:
      | FacebookPageInsightsScalarWhereWithAggregatesInput
      | FacebookPageInsightsScalarWhereWithAggregatesInput[];
    OR?: FacebookPageInsightsScalarWhereWithAggregatesInput[];
    NOT?:
      | FacebookPageInsightsScalarWhereWithAggregatesInput
      | FacebookPageInsightsScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'FacebookPageInsights'> | number;
    posts?: IntWithAggregatesFilter<'FacebookPageInsights'> | number;
    approach?: IntWithAggregatesFilter<'FacebookPageInsights'> | number;
    interactions?: IntWithAggregatesFilter<'FacebookPageInsights'> | number;
    follows?: IntWithAggregatesFilter<'FacebookPageInsights'> | number;
    created_at?:
      | DateTimeWithAggregatesFilter<'FacebookPageInsights'>
      | Date
      | string;
    name?:
      | StringNullableWithAggregatesFilter<'FacebookPageInsights'>
      | string
      | null;
    image_url?:
      | StringNullableWithAggregatesFilter<'FacebookPageInsights'>
      | string
      | null;
    category?:
      | StringNullableWithAggregatesFilter<'FacebookPageInsights'>
      | string
      | null;
    status?:
      | StringNullableWithAggregatesFilter<'FacebookPageInsights'>
      | string
      | null;
    user_id?:
      | StringNullableWithAggregatesFilter<'FacebookPageInsights'>
      | string
      | null;
    facebook_fanpage_id?:
      | StringWithAggregatesFilter<'FacebookPageInsights'>
      | string;
  };

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[];
    OR?: ProfileWhereInput[];
    NOT?: ProfileWhereInput | ProfileWhereInput[];
    user_id?: StringFilter<'Profile'> | string;
    createdAt?: DateTimeFilter<'Profile'> | Date | string;
    updatedAt?: DateTimeFilter<'Profile'> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type ProfileOrderByWithRelationInput = {
    user_id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type ProfileWhereUniqueInput = Prisma.AtLeast<
    {
      user_id?: string;
      AND?: ProfileWhereInput | ProfileWhereInput[];
      OR?: ProfileWhereInput[];
      NOT?: ProfileWhereInput | ProfileWhereInput[];
      createdAt?: DateTimeFilter<'Profile'> | Date | string;
      updatedAt?: DateTimeFilter<'Profile'> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    'user_id'
  >;

  export type ProfileOrderByWithAggregationInput = {
    user_id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: ProfileCountOrderByAggregateInput;
    _max?: ProfileMaxOrderByAggregateInput;
    _min?: ProfileMinOrderByAggregateInput;
  };

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?:
      | ProfileScalarWhereWithAggregatesInput
      | ProfileScalarWhereWithAggregatesInput[];
    OR?: ProfileScalarWhereWithAggregatesInput[];
    NOT?:
      | ProfileScalarWhereWithAggregatesInput
      | ProfileScalarWhereWithAggregatesInput[];
    user_id?: StringWithAggregatesFilter<'Profile'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'Profile'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Profile'> | Date | string;
  };

  export type AdAccountRentalWhereInput = {
    AND?: AdAccountRentalWhereInput | AdAccountRentalWhereInput[];
    OR?: AdAccountRentalWhereInput[];
    NOT?: AdAccountRentalWhereInput | AdAccountRentalWhereInput[];
    id?: StringFilter<'AdAccountRental'> | string;
    user_id?: StringFilter<'AdAccountRental'> | string;
    start_date?: DateTimeFilter<'AdAccountRental'> | Date | string;
    end_date?: DateTimeFilter<'AdAccountRental'> | Date | string;
    status?: StringFilter<'AdAccountRental'> | string;
    created_at?: DateTimeFilter<'AdAccountRental'> | Date | string;
    updated_at?: DateTimeFilter<'AdAccountRental'> | Date | string;
    account_id?: IntFilter<'AdAccountRental'> | number;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    account?: XOR<
      SystemAdAccountScalarRelationFilter,
      SystemAdAccountWhereInput
    >;
  };

  export type AdAccountRentalOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    account_id?: SortOrder;
    user?: UserOrderByWithRelationInput;
    account?: SystemAdAccountOrderByWithRelationInput;
  };

  export type AdAccountRentalWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: AdAccountRentalWhereInput | AdAccountRentalWhereInput[];
      OR?: AdAccountRentalWhereInput[];
      NOT?: AdAccountRentalWhereInput | AdAccountRentalWhereInput[];
      user_id?: StringFilter<'AdAccountRental'> | string;
      start_date?: DateTimeFilter<'AdAccountRental'> | Date | string;
      end_date?: DateTimeFilter<'AdAccountRental'> | Date | string;
      status?: StringFilter<'AdAccountRental'> | string;
      created_at?: DateTimeFilter<'AdAccountRental'> | Date | string;
      updated_at?: DateTimeFilter<'AdAccountRental'> | Date | string;
      account_id?: IntFilter<'AdAccountRental'> | number;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      account?: XOR<
        SystemAdAccountScalarRelationFilter,
        SystemAdAccountWhereInput
      >;
    },
    'id'
  >;

  export type AdAccountRentalOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    account_id?: SortOrder;
    _count?: AdAccountRentalCountOrderByAggregateInput;
    _avg?: AdAccountRentalAvgOrderByAggregateInput;
    _max?: AdAccountRentalMaxOrderByAggregateInput;
    _min?: AdAccountRentalMinOrderByAggregateInput;
    _sum?: AdAccountRentalSumOrderByAggregateInput;
  };

  export type AdAccountRentalScalarWhereWithAggregatesInput = {
    AND?:
      | AdAccountRentalScalarWhereWithAggregatesInput
      | AdAccountRentalScalarWhereWithAggregatesInput[];
    OR?: AdAccountRentalScalarWhereWithAggregatesInput[];
    NOT?:
      | AdAccountRentalScalarWhereWithAggregatesInput
      | AdAccountRentalScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'AdAccountRental'> | string;
    user_id?: StringWithAggregatesFilter<'AdAccountRental'> | string;
    start_date?:
      | DateTimeWithAggregatesFilter<'AdAccountRental'>
      | Date
      | string;
    end_date?: DateTimeWithAggregatesFilter<'AdAccountRental'> | Date | string;
    status?: StringWithAggregatesFilter<'AdAccountRental'> | string;
    created_at?:
      | DateTimeWithAggregatesFilter<'AdAccountRental'>
      | Date
      | string;
    updated_at?:
      | DateTimeWithAggregatesFilter<'AdAccountRental'>
      | Date
      | string;
    account_id?: IntWithAggregatesFilter<'AdAccountRental'> | number;
  };

  export type SystemAdAccountWhereInput = {
    AND?: SystemAdAccountWhereInput | SystemAdAccountWhereInput[];
    OR?: SystemAdAccountWhereInput[];
    NOT?: SystemAdAccountWhereInput | SystemAdAccountWhereInput[];
    id?: IntFilter<'SystemAdAccount'> | number;
    account_id?: StringFilter<'SystemAdAccount'> | string;
    name?: StringFilter<'SystemAdAccount'> | string;
    status?: StringFilter<'SystemAdAccount'> | string;
    daily_budget?: FloatFilter<'SystemAdAccount'> | number;
    total_spent?: FloatFilter<'SystemAdAccount'> | number;
    available?: BoolFilter<'SystemAdAccount'> | boolean;
    created_at?: DateTimeFilter<'SystemAdAccount'> | Date | string;
    updated_at?: DateTimeFilter<'SystemAdAccount'> | Date | string;
    rentals?: AdAccountRentalListRelationFilter;
  };

  export type SystemAdAccountOrderByWithRelationInput = {
    id?: SortOrder;
    account_id?: SortOrder;
    name?: SortOrder;
    status?: SortOrder;
    daily_budget?: SortOrder;
    total_spent?: SortOrder;
    available?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    rentals?: AdAccountRentalOrderByRelationAggregateInput;
  };

  export type SystemAdAccountWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      account_id?: string;
      AND?: SystemAdAccountWhereInput | SystemAdAccountWhereInput[];
      OR?: SystemAdAccountWhereInput[];
      NOT?: SystemAdAccountWhereInput | SystemAdAccountWhereInput[];
      name?: StringFilter<'SystemAdAccount'> | string;
      status?: StringFilter<'SystemAdAccount'> | string;
      daily_budget?: FloatFilter<'SystemAdAccount'> | number;
      total_spent?: FloatFilter<'SystemAdAccount'> | number;
      available?: BoolFilter<'SystemAdAccount'> | boolean;
      created_at?: DateTimeFilter<'SystemAdAccount'> | Date | string;
      updated_at?: DateTimeFilter<'SystemAdAccount'> | Date | string;
      rentals?: AdAccountRentalListRelationFilter;
    },
    'id' | 'account_id'
  >;

  export type SystemAdAccountOrderByWithAggregationInput = {
    id?: SortOrder;
    account_id?: SortOrder;
    name?: SortOrder;
    status?: SortOrder;
    daily_budget?: SortOrder;
    total_spent?: SortOrder;
    available?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: SystemAdAccountCountOrderByAggregateInput;
    _avg?: SystemAdAccountAvgOrderByAggregateInput;
    _max?: SystemAdAccountMaxOrderByAggregateInput;
    _min?: SystemAdAccountMinOrderByAggregateInput;
    _sum?: SystemAdAccountSumOrderByAggregateInput;
  };

  export type SystemAdAccountScalarWhereWithAggregatesInput = {
    AND?:
      | SystemAdAccountScalarWhereWithAggregatesInput
      | SystemAdAccountScalarWhereWithAggregatesInput[];
    OR?: SystemAdAccountScalarWhereWithAggregatesInput[];
    NOT?:
      | SystemAdAccountScalarWhereWithAggregatesInput
      | SystemAdAccountScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'SystemAdAccount'> | number;
    account_id?: StringWithAggregatesFilter<'SystemAdAccount'> | string;
    name?: StringWithAggregatesFilter<'SystemAdAccount'> | string;
    status?: StringWithAggregatesFilter<'SystemAdAccount'> | string;
    daily_budget?: FloatWithAggregatesFilter<'SystemAdAccount'> | number;
    total_spent?: FloatWithAggregatesFilter<'SystemAdAccount'> | number;
    available?: BoolWithAggregatesFilter<'SystemAdAccount'> | boolean;
    created_at?:
      | DateTimeWithAggregatesFilter<'SystemAdAccount'>
      | Date
      | string;
    updated_at?:
      | DateTimeWithAggregatesFilter<'SystemAdAccount'>
      | Date
      | string;
  };

  export type RoleCreateInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: UserCreateNestedManyWithoutRoleInput;
  };

  export type RoleUncheckedCreateInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: UserUncheckedCreateNestedManyWithoutRoleInput;
  };

  export type RoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    users?: UserUpdateManyWithoutRoleNestedInput;
  };

  export type RoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput;
  };

  export type RoleCreateManyInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type RoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserCreateInput = {
    id?: string;
    instance_id?: number | null;
    aud?: string | null;
    email: string;
    password: string;
    email_confirmed_at?: Date | string | null;
    invited_at?: Date | string | null;
    confirmation_token?: string | null;
    confirmation_sent_at?: Date | string | null;
    recovery_token?: string | null;
    recovery_sent_at?: Date | string | null;
    email_change_token_new?: string | null;
    email_change?: string | null;
    email_change_sent_at?: Date | string | null;
    last_sign_in_at?: Date | string | null;
    raw_app_meta_data?: NullableJsonNullValueInput | InputJsonValue;
    raw_user_meta_data?: NullableJsonNullValueInput | InputJsonValue;
    is_super_admin?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    phone?: string | null;
    phone_confirmed_at?: Date | string | null;
    phone_change?: string | null;
    phone_change_token?: string | null;
    phone_change_sent_at?: Date | string | null;
    confirmed_at?: Date | string | null;
    email_change_token_current?: string | null;
    email_change_confirm_status?: number | null;
    banned_until?: Date | string | null;
    reauthentication_token?: string | null;
    reauthentication_sent_at?: Date | string | null;
    is_sso_user?: boolean;
    deleted_at?: Date | string | null;
    is_anonymous?: boolean;
    rentals?: AdAccountRentalCreateNestedManyWithoutUserInput;
    profile?: ProfileCreateNestedOneWithoutUserInput;
    role: RoleCreateNestedOneWithoutUsersInput;
    facebook_connections?: FacebookConnectionsCreateNestedManyWithoutUserInput;
    token?: TokenCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateInput = {
    id?: string;
    instance_id?: number | null;
    aud?: string | null;
    email: string;
    password: string;
    email_confirmed_at?: Date | string | null;
    invited_at?: Date | string | null;
    confirmation_token?: string | null;
    confirmation_sent_at?: Date | string | null;
    recovery_token?: string | null;
    recovery_sent_at?: Date | string | null;
    email_change_token_new?: string | null;
    email_change?: string | null;
    email_change_sent_at?: Date | string | null;
    last_sign_in_at?: Date | string | null;
    raw_app_meta_data?: NullableJsonNullValueInput | InputJsonValue;
    raw_user_meta_data?: NullableJsonNullValueInput | InputJsonValue;
    is_super_admin?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    phone?: string | null;
    phone_confirmed_at?: Date | string | null;
    phone_change?: string | null;
    phone_change_token?: string | null;
    phone_change_sent_at?: Date | string | null;
    confirmed_at?: Date | string | null;
    email_change_token_current?: string | null;
    email_change_confirm_status?: number | null;
    banned_until?: Date | string | null;
    reauthentication_token?: string | null;
    reauthentication_sent_at?: Date | string | null;
    is_sso_user?: boolean;
    deleted_at?: Date | string | null;
    is_anonymous?: boolean;
    role_id: string;
    rentals?: AdAccountRentalUncheckedCreateNestedManyWithoutUserInput;
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput;
    facebook_connections?: FacebookConnectionsUncheckedCreateNestedManyWithoutUserInput;
    token?: TokenUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    instance_id?: NullableIntFieldUpdateOperationsInput | number | null;
    aud?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    email_confirmed_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    invited_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    confirmation_token?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    confirmation_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    recovery_token?: NullableStringFieldUpdateOperationsInput | string | null;
    recovery_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    email_change_token_new?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    email_change?: NullableStringFieldUpdateOperationsInput | string | null;
    email_change_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    last_sign_in_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    raw_app_meta_data?: NullableJsonNullValueInput | InputJsonValue;
    raw_user_meta_data?: NullableJsonNullValueInput | InputJsonValue;
    is_super_admin?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_confirmed_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    phone_change?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_change_token?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    phone_change_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    confirmed_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    email_change_token_current?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    email_change_confirm_status?:
      | NullableIntFieldUpdateOperationsInput
      | number
      | null;
    banned_until?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    reauthentication_token?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    reauthentication_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    is_sso_user?: BoolFieldUpdateOperationsInput | boolean;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    is_anonymous?: BoolFieldUpdateOperationsInput | boolean;
    rentals?: AdAccountRentalUpdateManyWithoutUserNestedInput;
    profile?: ProfileUpdateOneWithoutUserNestedInput;
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput;
    facebook_connections?: FacebookConnectionsUpdateManyWithoutUserNestedInput;
    token?: TokenUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    instance_id?: NullableIntFieldUpdateOperationsInput | number | null;
    aud?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    email_confirmed_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    invited_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    confirmation_token?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    confirmation_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    recovery_token?: NullableStringFieldUpdateOperationsInput | string | null;
    recovery_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    email_change_token_new?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    email_change?: NullableStringFieldUpdateOperationsInput | string | null;
    email_change_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    last_sign_in_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    raw_app_meta_data?: NullableJsonNullValueInput | InputJsonValue;
    raw_user_meta_data?: NullableJsonNullValueInput | InputJsonValue;
    is_super_admin?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_confirmed_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    phone_change?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_change_token?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    phone_change_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    confirmed_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    email_change_token_current?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    email_change_confirm_status?:
      | NullableIntFieldUpdateOperationsInput
      | number
      | null;
    banned_until?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    reauthentication_token?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    reauthentication_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    is_sso_user?: BoolFieldUpdateOperationsInput | boolean;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    is_anonymous?: BoolFieldUpdateOperationsInput | boolean;
    role_id?: StringFieldUpdateOperationsInput | string;
    rentals?: AdAccountRentalUncheckedUpdateManyWithoutUserNestedInput;
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput;
    facebook_connections?: FacebookConnectionsUncheckedUpdateManyWithoutUserNestedInput;
    token?: TokenUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateManyInput = {
    id?: string;
    instance_id?: number | null;
    aud?: string | null;
    email: string;
    password: string;
    email_confirmed_at?: Date | string | null;
    invited_at?: Date | string | null;
    confirmation_token?: string | null;
    confirmation_sent_at?: Date | string | null;
    recovery_token?: string | null;
    recovery_sent_at?: Date | string | null;
    email_change_token_new?: string | null;
    email_change?: string | null;
    email_change_sent_at?: Date | string | null;
    last_sign_in_at?: Date | string | null;
    raw_app_meta_data?: NullableJsonNullValueInput | InputJsonValue;
    raw_user_meta_data?: NullableJsonNullValueInput | InputJsonValue;
    is_super_admin?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    phone?: string | null;
    phone_confirmed_at?: Date | string | null;
    phone_change?: string | null;
    phone_change_token?: string | null;
    phone_change_sent_at?: Date | string | null;
    confirmed_at?: Date | string | null;
    email_change_token_current?: string | null;
    email_change_confirm_status?: number | null;
    banned_until?: Date | string | null;
    reauthentication_token?: string | null;
    reauthentication_sent_at?: Date | string | null;
    is_sso_user?: boolean;
    deleted_at?: Date | string | null;
    is_anonymous?: boolean;
    role_id: string;
  };

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    instance_id?: NullableIntFieldUpdateOperationsInput | number | null;
    aud?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    email_confirmed_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    invited_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    confirmation_token?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    confirmation_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    recovery_token?: NullableStringFieldUpdateOperationsInput | string | null;
    recovery_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    email_change_token_new?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    email_change?: NullableStringFieldUpdateOperationsInput | string | null;
    email_change_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    last_sign_in_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    raw_app_meta_data?: NullableJsonNullValueInput | InputJsonValue;
    raw_user_meta_data?: NullableJsonNullValueInput | InputJsonValue;
    is_super_admin?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_confirmed_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    phone_change?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_change_token?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    phone_change_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    confirmed_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    email_change_token_current?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    email_change_confirm_status?:
      | NullableIntFieldUpdateOperationsInput
      | number
      | null;
    banned_until?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    reauthentication_token?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    reauthentication_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    is_sso_user?: BoolFieldUpdateOperationsInput | boolean;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    is_anonymous?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    instance_id?: NullableIntFieldUpdateOperationsInput | number | null;
    aud?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    email_confirmed_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    invited_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    confirmation_token?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    confirmation_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    recovery_token?: NullableStringFieldUpdateOperationsInput | string | null;
    recovery_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    email_change_token_new?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    email_change?: NullableStringFieldUpdateOperationsInput | string | null;
    email_change_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    last_sign_in_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    raw_app_meta_data?: NullableJsonNullValueInput | InputJsonValue;
    raw_user_meta_data?: NullableJsonNullValueInput | InputJsonValue;
    is_super_admin?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_confirmed_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    phone_change?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_change_token?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    phone_change_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    confirmed_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    email_change_token_current?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    email_change_confirm_status?:
      | NullableIntFieldUpdateOperationsInput
      | number
      | null;
    banned_until?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    reauthentication_token?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    reauthentication_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    is_sso_user?: BoolFieldUpdateOperationsInput | boolean;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    is_anonymous?: BoolFieldUpdateOperationsInput | boolean;
    role_id?: StringFieldUpdateOperationsInput | string;
  };

  export type TokenCreateInput = {
    id?: string;
    user_token?: TokenCreateuser_tokenInput | string[];
    access_token?: TokenCreateaccess_tokenInput | string[];
    created_at?: Date | string;
    updated_at?: Date | string;
    user: UserCreateNestedOneWithoutTokenInput;
  };

  export type TokenUncheckedCreateInput = {
    id?: string;
    user_id: string;
    user_token?: TokenCreateuser_tokenInput | string[];
    access_token?: TokenCreateaccess_tokenInput | string[];
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type TokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_token?: TokenUpdateuser_tokenInput | string[];
    access_token?: TokenUpdateaccess_tokenInput | string[];
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutTokenNestedInput;
  };

  export type TokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    user_token?: TokenUpdateuser_tokenInput | string[];
    access_token?: TokenUpdateaccess_tokenInput | string[];
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TokenCreateManyInput = {
    id?: string;
    user_id: string;
    user_token?: TokenCreateuser_tokenInput | string[];
    access_token?: TokenCreateaccess_tokenInput | string[];
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type TokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_token?: TokenUpdateuser_tokenInput | string[];
    access_token?: TokenUpdateaccess_tokenInput | string[];
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    user_token?: TokenUpdateuser_tokenInput | string[];
    access_token?: TokenUpdateaccess_tokenInput | string[];
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FacebookFanPageCreateInput = {
    id?: string;
    page_name: string;
    page_category: string;
    page_url: string;
    page_avatar_url: string;
    follower_count: number;
    page_type: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    connection_id: string;
    facebook_page_insights?: FacebookPageInsightsCreateNestedOneWithoutFacebookFanpageInput;
    facebookConnections?: FacebookConnectionsCreateNestedOneWithoutFacebookFanpageInput;
  };

  export type FacebookFanPageUncheckedCreateInput = {
    id?: string;
    page_name: string;
    page_category: string;
    page_url: string;
    page_avatar_url: string;
    follower_count: number;
    page_type: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    connection_id: string;
    facebook_page_insights?: FacebookPageInsightsUncheckedCreateNestedOneWithoutFacebookFanpageInput;
    facebookConnections?: FacebookConnectionsUncheckedCreateNestedOneWithoutFacebookFanpageInput;
  };

  export type FacebookFanPageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    page_name?: StringFieldUpdateOperationsInput | string;
    page_category?: StringFieldUpdateOperationsInput | string;
    page_url?: StringFieldUpdateOperationsInput | string;
    page_avatar_url?: StringFieldUpdateOperationsInput | string;
    follower_count?: IntFieldUpdateOperationsInput | number;
    page_type?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    connection_id?: StringFieldUpdateOperationsInput | string;
    facebook_page_insights?: FacebookPageInsightsUpdateOneWithoutFacebookFanpageNestedInput;
    facebookConnections?: FacebookConnectionsUpdateOneWithoutFacebookFanpageNestedInput;
  };

  export type FacebookFanPageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    page_name?: StringFieldUpdateOperationsInput | string;
    page_category?: StringFieldUpdateOperationsInput | string;
    page_url?: StringFieldUpdateOperationsInput | string;
    page_avatar_url?: StringFieldUpdateOperationsInput | string;
    follower_count?: IntFieldUpdateOperationsInput | number;
    page_type?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    connection_id?: StringFieldUpdateOperationsInput | string;
    facebook_page_insights?: FacebookPageInsightsUncheckedUpdateOneWithoutFacebookFanpageNestedInput;
    facebookConnections?: FacebookConnectionsUncheckedUpdateOneWithoutFacebookFanpageNestedInput;
  };

  export type FacebookFanPageCreateManyInput = {
    id?: string;
    page_name: string;
    page_category: string;
    page_url: string;
    page_avatar_url: string;
    follower_count: number;
    page_type: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    connection_id: string;
  };

  export type FacebookFanPageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    page_name?: StringFieldUpdateOperationsInput | string;
    page_category?: StringFieldUpdateOperationsInput | string;
    page_url?: StringFieldUpdateOperationsInput | string;
    page_avatar_url?: StringFieldUpdateOperationsInput | string;
    follower_count?: IntFieldUpdateOperationsInput | number;
    page_type?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    connection_id?: StringFieldUpdateOperationsInput | string;
  };

  export type FacebookFanPageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    page_name?: StringFieldUpdateOperationsInput | string;
    page_category?: StringFieldUpdateOperationsInput | string;
    page_url?: StringFieldUpdateOperationsInput | string;
    page_avatar_url?: StringFieldUpdateOperationsInput | string;
    follower_count?: IntFieldUpdateOperationsInput | number;
    page_type?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    connection_id?: StringFieldUpdateOperationsInput | string;
  };

  export type FacebookConnectionsCreateInput = {
    id?: string;
    page_id?: string;
    access_token?: FacebookConnectionsCreateaccess_tokenInput | string[];
    status?: string;
    permissions?: FacebookConnectionsCreatepermissionsInput | string[];
    last_sync?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    role_id?: string | null;
    user: UserCreateNestedOneWithoutFacebook_connectionsInput;
    facebookFanpage: FacebookFanPageCreateNestedOneWithoutFacebookConnectionsInput;
  };

  export type FacebookConnectionsUncheckedCreateInput = {
    id?: string;
    page_id?: string;
    access_token?: FacebookConnectionsCreateaccess_tokenInput | string[];
    status?: string;
    permissions?: FacebookConnectionsCreatepermissionsInput | string[];
    last_sync?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    facebook_fanpage_id: string;
    role_id?: string | null;
  };

  export type FacebookConnectionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    page_id?: StringFieldUpdateOperationsInput | string;
    access_token?: FacebookConnectionsUpdateaccess_tokenInput | string[];
    status?: StringFieldUpdateOperationsInput | string;
    permissions?: FacebookConnectionsUpdatepermissionsInput | string[];
    last_sync?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    role_id?: NullableStringFieldUpdateOperationsInput | string | null;
    user?: UserUpdateOneRequiredWithoutFacebook_connectionsNestedInput;
    facebookFanpage?: FacebookFanPageUpdateOneRequiredWithoutFacebookConnectionsNestedInput;
  };

  export type FacebookConnectionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    page_id?: StringFieldUpdateOperationsInput | string;
    access_token?: FacebookConnectionsUpdateaccess_tokenInput | string[];
    status?: StringFieldUpdateOperationsInput | string;
    permissions?: FacebookConnectionsUpdatepermissionsInput | string[];
    last_sync?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    facebook_fanpage_id?: StringFieldUpdateOperationsInput | string;
    role_id?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type FacebookConnectionsCreateManyInput = {
    id?: string;
    page_id?: string;
    access_token?: FacebookConnectionsCreateaccess_tokenInput | string[];
    status?: string;
    permissions?: FacebookConnectionsCreatepermissionsInput | string[];
    last_sync?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    facebook_fanpage_id: string;
    role_id?: string | null;
  };

  export type FacebookConnectionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    page_id?: StringFieldUpdateOperationsInput | string;
    access_token?: FacebookConnectionsUpdateaccess_tokenInput | string[];
    status?: StringFieldUpdateOperationsInput | string;
    permissions?: FacebookConnectionsUpdatepermissionsInput | string[];
    last_sync?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    role_id?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type FacebookConnectionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    page_id?: StringFieldUpdateOperationsInput | string;
    access_token?: FacebookConnectionsUpdateaccess_tokenInput | string[];
    status?: StringFieldUpdateOperationsInput | string;
    permissions?: FacebookConnectionsUpdatepermissionsInput | string[];
    last_sync?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    facebook_fanpage_id?: StringFieldUpdateOperationsInput | string;
    role_id?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type FacebookPageInsightsCreateInput = {
    posts: number;
    approach: number;
    interactions: number;
    follows: number;
    created_at?: Date | string;
    name?: string | null;
    image_url?: string | null;
    category?: string | null;
    status?: string | null;
    user_id?: string | null;
    facebookFanpage: FacebookFanPageCreateNestedOneWithoutFacebook_page_insightsInput;
  };

  export type FacebookPageInsightsUncheckedCreateInput = {
    id?: number;
    posts: number;
    approach: number;
    interactions: number;
    follows: number;
    created_at?: Date | string;
    name?: string | null;
    image_url?: string | null;
    category?: string | null;
    status?: string | null;
    user_id?: string | null;
    facebook_fanpage_id: string;
  };

  export type FacebookPageInsightsUpdateInput = {
    posts?: IntFieldUpdateOperationsInput | number;
    approach?: IntFieldUpdateOperationsInput | number;
    interactions?: IntFieldUpdateOperationsInput | number;
    follows?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    image_url?: NullableStringFieldUpdateOperationsInput | string | null;
    category?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: NullableStringFieldUpdateOperationsInput | string | null;
    facebookFanpage?: FacebookFanPageUpdateOneRequiredWithoutFacebook_page_insightsNestedInput;
  };

  export type FacebookPageInsightsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    posts?: IntFieldUpdateOperationsInput | number;
    approach?: IntFieldUpdateOperationsInput | number;
    interactions?: IntFieldUpdateOperationsInput | number;
    follows?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    image_url?: NullableStringFieldUpdateOperationsInput | string | null;
    category?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: NullableStringFieldUpdateOperationsInput | string | null;
    facebook_fanpage_id?: StringFieldUpdateOperationsInput | string;
  };

  export type FacebookPageInsightsCreateManyInput = {
    id?: number;
    posts: number;
    approach: number;
    interactions: number;
    follows: number;
    created_at?: Date | string;
    name?: string | null;
    image_url?: string | null;
    category?: string | null;
    status?: string | null;
    user_id?: string | null;
    facebook_fanpage_id: string;
  };

  export type FacebookPageInsightsUpdateManyMutationInput = {
    posts?: IntFieldUpdateOperationsInput | number;
    approach?: IntFieldUpdateOperationsInput | number;
    interactions?: IntFieldUpdateOperationsInput | number;
    follows?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    image_url?: NullableStringFieldUpdateOperationsInput | string | null;
    category?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type FacebookPageInsightsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    posts?: IntFieldUpdateOperationsInput | number;
    approach?: IntFieldUpdateOperationsInput | number;
    interactions?: IntFieldUpdateOperationsInput | number;
    follows?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    image_url?: NullableStringFieldUpdateOperationsInput | string | null;
    category?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: NullableStringFieldUpdateOperationsInput | string | null;
    facebook_fanpage_id?: StringFieldUpdateOperationsInput | string;
  };

  export type ProfileCreateInput = {
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutProfileInput;
  };

  export type ProfileUncheckedCreateInput = {
    user_id: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ProfileUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutProfileNestedInput;
  };

  export type ProfileUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProfileCreateManyInput = {
    user_id: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ProfileUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProfileUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AdAccountRentalCreateInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: UserCreateNestedOneWithoutRentalsInput;
    account: SystemAdAccountCreateNestedOneWithoutRentalsInput;
  };

  export type AdAccountRentalUncheckedCreateInput = {
    id?: string;
    user_id: string;
    start_date: Date | string;
    end_date: Date | string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    account_id: number;
  };

  export type AdAccountRentalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutRentalsNestedInput;
    account?: SystemAdAccountUpdateOneRequiredWithoutRentalsNestedInput;
  };

  export type AdAccountRentalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    account_id?: IntFieldUpdateOperationsInput | number;
  };

  export type AdAccountRentalCreateManyInput = {
    id?: string;
    user_id: string;
    start_date: Date | string;
    end_date: Date | string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    account_id: number;
  };

  export type AdAccountRentalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AdAccountRentalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    account_id?: IntFieldUpdateOperationsInput | number;
  };

  export type SystemAdAccountCreateInput = {
    account_id: string;
    name: string;
    status: string;
    daily_budget: number;
    total_spent: number;
    available: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    rentals?: AdAccountRentalCreateNestedManyWithoutAccountInput;
  };

  export type SystemAdAccountUncheckedCreateInput = {
    id?: number;
    account_id: string;
    name: string;
    status: string;
    daily_budget: number;
    total_spent: number;
    available: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    rentals?: AdAccountRentalUncheckedCreateNestedManyWithoutAccountInput;
  };

  export type SystemAdAccountUpdateInput = {
    account_id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    daily_budget?: FloatFieldUpdateOperationsInput | number;
    total_spent?: FloatFieldUpdateOperationsInput | number;
    available?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    rentals?: AdAccountRentalUpdateManyWithoutAccountNestedInput;
  };

  export type SystemAdAccountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    account_id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    daily_budget?: FloatFieldUpdateOperationsInput | number;
    total_spent?: FloatFieldUpdateOperationsInput | number;
    available?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    rentals?: AdAccountRentalUncheckedUpdateManyWithoutAccountNestedInput;
  };

  export type SystemAdAccountCreateManyInput = {
    id?: number;
    account_id: string;
    name: string;
    status: string;
    daily_budget: number;
    total_spent: number;
    available: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type SystemAdAccountUpdateManyMutationInput = {
    account_id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    daily_budget?: FloatFieldUpdateOperationsInput | number;
    total_spent?: FloatFieldUpdateOperationsInput | number;
    available?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SystemAdAccountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    account_id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    daily_budget?: FloatFieldUpdateOperationsInput | number;
    total_spent?: FloatFieldUpdateOperationsInput | number;
    available?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type UserListRelationFilter = {
    every?: UserWhereInput;
    some?: UserWhereInput;
    none?: UserWhereInput;
  };

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonNullableFilterBase<$PrismaModel>>,
          Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>
        >,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<
        Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>
      >;

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type AdAccountRentalListRelationFilter = {
    every?: AdAccountRentalWhereInput;
    some?: AdAccountRentalWhereInput;
    none?: AdAccountRentalWhereInput;
  };

  export type ProfileNullableScalarRelationFilter = {
    is?: ProfileWhereInput | null;
    isNot?: ProfileWhereInput | null;
  };

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput;
    isNot?: RoleWhereInput;
  };

  export type FacebookConnectionsListRelationFilter = {
    every?: FacebookConnectionsWhereInput;
    some?: FacebookConnectionsWhereInput;
    none?: FacebookConnectionsWhereInput;
  };

  export type TokenListRelationFilter = {
    every?: TokenWhereInput;
    some?: TokenWhereInput;
    none?: TokenWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type AdAccountRentalOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type FacebookConnectionsOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type TokenOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    instance_id?: SortOrder;
    aud?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    email_confirmed_at?: SortOrder;
    invited_at?: SortOrder;
    confirmation_token?: SortOrder;
    confirmation_sent_at?: SortOrder;
    recovery_token?: SortOrder;
    recovery_sent_at?: SortOrder;
    email_change_token_new?: SortOrder;
    email_change?: SortOrder;
    email_change_sent_at?: SortOrder;
    last_sign_in_at?: SortOrder;
    raw_app_meta_data?: SortOrder;
    raw_user_meta_data?: SortOrder;
    is_super_admin?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    phone?: SortOrder;
    phone_confirmed_at?: SortOrder;
    phone_change?: SortOrder;
    phone_change_token?: SortOrder;
    phone_change_sent_at?: SortOrder;
    confirmed_at?: SortOrder;
    email_change_token_current?: SortOrder;
    email_change_confirm_status?: SortOrder;
    banned_until?: SortOrder;
    reauthentication_token?: SortOrder;
    reauthentication_sent_at?: SortOrder;
    is_sso_user?: SortOrder;
    deleted_at?: SortOrder;
    is_anonymous?: SortOrder;
    role_id?: SortOrder;
  };

  export type UserAvgOrderByAggregateInput = {
    instance_id?: SortOrder;
    email_change_confirm_status?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    instance_id?: SortOrder;
    aud?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    email_confirmed_at?: SortOrder;
    invited_at?: SortOrder;
    confirmation_token?: SortOrder;
    confirmation_sent_at?: SortOrder;
    recovery_token?: SortOrder;
    recovery_sent_at?: SortOrder;
    email_change_token_new?: SortOrder;
    email_change?: SortOrder;
    email_change_sent_at?: SortOrder;
    last_sign_in_at?: SortOrder;
    is_super_admin?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    phone?: SortOrder;
    phone_confirmed_at?: SortOrder;
    phone_change?: SortOrder;
    phone_change_token?: SortOrder;
    phone_change_sent_at?: SortOrder;
    confirmed_at?: SortOrder;
    email_change_token_current?: SortOrder;
    email_change_confirm_status?: SortOrder;
    banned_until?: SortOrder;
    reauthentication_token?: SortOrder;
    reauthentication_sent_at?: SortOrder;
    is_sso_user?: SortOrder;
    deleted_at?: SortOrder;
    is_anonymous?: SortOrder;
    role_id?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    instance_id?: SortOrder;
    aud?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    email_confirmed_at?: SortOrder;
    invited_at?: SortOrder;
    confirmation_token?: SortOrder;
    confirmation_sent_at?: SortOrder;
    recovery_token?: SortOrder;
    recovery_sent_at?: SortOrder;
    email_change_token_new?: SortOrder;
    email_change?: SortOrder;
    email_change_sent_at?: SortOrder;
    last_sign_in_at?: SortOrder;
    is_super_admin?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    phone?: SortOrder;
    phone_confirmed_at?: SortOrder;
    phone_change?: SortOrder;
    phone_change_token?: SortOrder;
    phone_change_sent_at?: SortOrder;
    confirmed_at?: SortOrder;
    email_change_token_current?: SortOrder;
    email_change_confirm_status?: SortOrder;
    banned_until?: SortOrder;
    reauthentication_token?: SortOrder;
    reauthentication_sent_at?: SortOrder;
    is_sso_user?: SortOrder;
    deleted_at?: SortOrder;
    is_anonymous?: SortOrder;
    role_id?: SortOrder;
  };

  export type UserSumOrderByAggregateInput = {
    instance_id?: SortOrder;
    email_change_confirm_status?: SortOrder;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?:
      | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
      | Date
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>,
          Exclude<
            keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>,
            'path'
          >
        >,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<
        Omit<
          Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>,
          'path'
        >
      >;

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedJsonNullableFilter<$PrismaModel>;
    _max?: NestedJsonNullableFilter<$PrismaModel>;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
  };

  export type UserScalarRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type TokenCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    user_token?: SortOrder;
    access_token?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type TokenMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type TokenMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type FacebookPageInsightsNullableScalarRelationFilter = {
    is?: FacebookPageInsightsWhereInput | null;
    isNot?: FacebookPageInsightsWhereInput | null;
  };

  export type FacebookConnectionsNullableScalarRelationFilter = {
    is?: FacebookConnectionsWhereInput | null;
    isNot?: FacebookConnectionsWhereInput | null;
  };

  export type FacebookFanPageCountOrderByAggregateInput = {
    id?: SortOrder;
    page_name?: SortOrder;
    page_category?: SortOrder;
    page_url?: SortOrder;
    page_avatar_url?: SortOrder;
    follower_count?: SortOrder;
    page_type?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    connection_id?: SortOrder;
  };

  export type FacebookFanPageAvgOrderByAggregateInput = {
    follower_count?: SortOrder;
  };

  export type FacebookFanPageMaxOrderByAggregateInput = {
    id?: SortOrder;
    page_name?: SortOrder;
    page_category?: SortOrder;
    page_url?: SortOrder;
    page_avatar_url?: SortOrder;
    follower_count?: SortOrder;
    page_type?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    connection_id?: SortOrder;
  };

  export type FacebookFanPageMinOrderByAggregateInput = {
    id?: SortOrder;
    page_name?: SortOrder;
    page_category?: SortOrder;
    page_url?: SortOrder;
    page_avatar_url?: SortOrder;
    follower_count?: SortOrder;
    page_type?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    connection_id?: SortOrder;
  };

  export type FacebookFanPageSumOrderByAggregateInput = {
    follower_count?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type FacebookFanPageScalarRelationFilter = {
    is?: FacebookFanPageWhereInput;
    isNot?: FacebookFanPageWhereInput;
  };

  export type FacebookConnectionsCountOrderByAggregateInput = {
    id?: SortOrder;
    page_id?: SortOrder;
    access_token?: SortOrder;
    status?: SortOrder;
    permissions?: SortOrder;
    last_sync?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    facebook_fanpage_id?: SortOrder;
    role_id?: SortOrder;
  };

  export type FacebookConnectionsMaxOrderByAggregateInput = {
    id?: SortOrder;
    page_id?: SortOrder;
    status?: SortOrder;
    last_sync?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    facebook_fanpage_id?: SortOrder;
    role_id?: SortOrder;
  };

  export type FacebookConnectionsMinOrderByAggregateInput = {
    id?: SortOrder;
    page_id?: SortOrder;
    status?: SortOrder;
    last_sync?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    facebook_fanpage_id?: SortOrder;
    role_id?: SortOrder;
  };

  export type FacebookPageInsightsCountOrderByAggregateInput = {
    id?: SortOrder;
    posts?: SortOrder;
    approach?: SortOrder;
    interactions?: SortOrder;
    follows?: SortOrder;
    created_at?: SortOrder;
    name?: SortOrder;
    image_url?: SortOrder;
    category?: SortOrder;
    status?: SortOrder;
    user_id?: SortOrder;
    facebook_fanpage_id?: SortOrder;
  };

  export type FacebookPageInsightsAvgOrderByAggregateInput = {
    id?: SortOrder;
    posts?: SortOrder;
    approach?: SortOrder;
    interactions?: SortOrder;
    follows?: SortOrder;
  };

  export type FacebookPageInsightsMaxOrderByAggregateInput = {
    id?: SortOrder;
    posts?: SortOrder;
    approach?: SortOrder;
    interactions?: SortOrder;
    follows?: SortOrder;
    created_at?: SortOrder;
    name?: SortOrder;
    image_url?: SortOrder;
    category?: SortOrder;
    status?: SortOrder;
    user_id?: SortOrder;
    facebook_fanpage_id?: SortOrder;
  };

  export type FacebookPageInsightsMinOrderByAggregateInput = {
    id?: SortOrder;
    posts?: SortOrder;
    approach?: SortOrder;
    interactions?: SortOrder;
    follows?: SortOrder;
    created_at?: SortOrder;
    name?: SortOrder;
    image_url?: SortOrder;
    category?: SortOrder;
    status?: SortOrder;
    user_id?: SortOrder;
    facebook_fanpage_id?: SortOrder;
  };

  export type FacebookPageInsightsSumOrderByAggregateInput = {
    id?: SortOrder;
    posts?: SortOrder;
    approach?: SortOrder;
    interactions?: SortOrder;
    follows?: SortOrder;
  };

  export type ProfileCountOrderByAggregateInput = {
    user_id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ProfileMaxOrderByAggregateInput = {
    user_id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ProfileMinOrderByAggregateInput = {
    user_id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type SystemAdAccountScalarRelationFilter = {
    is?: SystemAdAccountWhereInput;
    isNot?: SystemAdAccountWhereInput;
  };

  export type AdAccountRentalCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    account_id?: SortOrder;
  };

  export type AdAccountRentalAvgOrderByAggregateInput = {
    account_id?: SortOrder;
  };

  export type AdAccountRentalMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    account_id?: SortOrder;
  };

  export type AdAccountRentalMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    account_id?: SortOrder;
  };

  export type AdAccountRentalSumOrderByAggregateInput = {
    account_id?: SortOrder;
  };

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type SystemAdAccountCountOrderByAggregateInput = {
    id?: SortOrder;
    account_id?: SortOrder;
    name?: SortOrder;
    status?: SortOrder;
    daily_budget?: SortOrder;
    total_spent?: SortOrder;
    available?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type SystemAdAccountAvgOrderByAggregateInput = {
    id?: SortOrder;
    daily_budget?: SortOrder;
    total_spent?: SortOrder;
  };

  export type SystemAdAccountMaxOrderByAggregateInput = {
    id?: SortOrder;
    account_id?: SortOrder;
    name?: SortOrder;
    status?: SortOrder;
    daily_budget?: SortOrder;
    total_spent?: SortOrder;
    available?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type SystemAdAccountMinOrderByAggregateInput = {
    id?: SortOrder;
    account_id?: SortOrder;
    name?: SortOrder;
    status?: SortOrder;
    daily_budget?: SortOrder;
    total_spent?: SortOrder;
    available?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type SystemAdAccountSumOrderByAggregateInput = {
    id?: SortOrder;
    daily_budget?: SortOrder;
    total_spent?: SortOrder;
  };

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
  };

  export type UserCreateNestedManyWithoutRoleInput = {
    create?:
      | XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
      | UserCreateWithoutRoleInput[]
      | UserUncheckedCreateWithoutRoleInput[];
    connectOrCreate?:
      | UserCreateOrConnectWithoutRoleInput
      | UserCreateOrConnectWithoutRoleInput[];
    createMany?: UserCreateManyRoleInputEnvelope;
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[];
  };

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?:
      | XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
      | UserCreateWithoutRoleInput[]
      | UserUncheckedCreateWithoutRoleInput[];
    connectOrCreate?:
      | UserCreateOrConnectWithoutRoleInput
      | UserCreateOrConnectWithoutRoleInput[];
    createMany?: UserCreateManyRoleInputEnvelope;
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?:
      | XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
      | UserCreateWithoutRoleInput[]
      | UserUncheckedCreateWithoutRoleInput[];
    connectOrCreate?:
      | UserCreateOrConnectWithoutRoleInput
      | UserCreateOrConnectWithoutRoleInput[];
    upsert?:
      | UserUpsertWithWhereUniqueWithoutRoleInput
      | UserUpsertWithWhereUniqueWithoutRoleInput[];
    createMany?: UserCreateManyRoleInputEnvelope;
    set?: UserWhereUniqueInput | UserWhereUniqueInput[];
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[];
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[];
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[];
    update?:
      | UserUpdateWithWhereUniqueWithoutRoleInput
      | UserUpdateWithWhereUniqueWithoutRoleInput[];
    updateMany?:
      | UserUpdateManyWithWhereWithoutRoleInput
      | UserUpdateManyWithWhereWithoutRoleInput[];
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[];
  };

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?:
      | XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
      | UserCreateWithoutRoleInput[]
      | UserUncheckedCreateWithoutRoleInput[];
    connectOrCreate?:
      | UserCreateOrConnectWithoutRoleInput
      | UserCreateOrConnectWithoutRoleInput[];
    upsert?:
      | UserUpsertWithWhereUniqueWithoutRoleInput
      | UserUpsertWithWhereUniqueWithoutRoleInput[];
    createMany?: UserCreateManyRoleInputEnvelope;
    set?: UserWhereUniqueInput | UserWhereUniqueInput[];
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[];
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[];
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[];
    update?:
      | UserUpdateWithWhereUniqueWithoutRoleInput
      | UserUpdateWithWhereUniqueWithoutRoleInput[];
    updateMany?:
      | UserUpdateManyWithWhereWithoutRoleInput
      | UserUpdateManyWithWhereWithoutRoleInput[];
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[];
  };

  export type AdAccountRentalCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          AdAccountRentalCreateWithoutUserInput,
          AdAccountRentalUncheckedCreateWithoutUserInput
        >
      | AdAccountRentalCreateWithoutUserInput[]
      | AdAccountRentalUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | AdAccountRentalCreateOrConnectWithoutUserInput
      | AdAccountRentalCreateOrConnectWithoutUserInput[];
    createMany?: AdAccountRentalCreateManyUserInputEnvelope;
    connect?:
      | AdAccountRentalWhereUniqueInput
      | AdAccountRentalWhereUniqueInput[];
  };

  export type ProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<
      ProfileCreateWithoutUserInput,
      ProfileUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput;
    connect?: ProfileWhereUniqueInput;
  };

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<
      RoleCreateWithoutUsersInput,
      RoleUncheckedCreateWithoutUsersInput
    >;
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput;
    connect?: RoleWhereUniqueInput;
  };

  export type FacebookConnectionsCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          FacebookConnectionsCreateWithoutUserInput,
          FacebookConnectionsUncheckedCreateWithoutUserInput
        >
      | FacebookConnectionsCreateWithoutUserInput[]
      | FacebookConnectionsUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | FacebookConnectionsCreateOrConnectWithoutUserInput
      | FacebookConnectionsCreateOrConnectWithoutUserInput[];
    createMany?: FacebookConnectionsCreateManyUserInputEnvelope;
    connect?:
      | FacebookConnectionsWhereUniqueInput
      | FacebookConnectionsWhereUniqueInput[];
  };

  export type TokenCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
      | TokenCreateWithoutUserInput[]
      | TokenUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | TokenCreateOrConnectWithoutUserInput
      | TokenCreateOrConnectWithoutUserInput[];
    createMany?: TokenCreateManyUserInputEnvelope;
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[];
  };

  export type AdAccountRentalUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          AdAccountRentalCreateWithoutUserInput,
          AdAccountRentalUncheckedCreateWithoutUserInput
        >
      | AdAccountRentalCreateWithoutUserInput[]
      | AdAccountRentalUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | AdAccountRentalCreateOrConnectWithoutUserInput
      | AdAccountRentalCreateOrConnectWithoutUserInput[];
    createMany?: AdAccountRentalCreateManyUserInputEnvelope;
    connect?:
      | AdAccountRentalWhereUniqueInput
      | AdAccountRentalWhereUniqueInput[];
  };

  export type ProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<
      ProfileCreateWithoutUserInput,
      ProfileUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput;
    connect?: ProfileWhereUniqueInput;
  };

  export type FacebookConnectionsUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          FacebookConnectionsCreateWithoutUserInput,
          FacebookConnectionsUncheckedCreateWithoutUserInput
        >
      | FacebookConnectionsCreateWithoutUserInput[]
      | FacebookConnectionsUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | FacebookConnectionsCreateOrConnectWithoutUserInput
      | FacebookConnectionsCreateOrConnectWithoutUserInput[];
    createMany?: FacebookConnectionsCreateManyUserInputEnvelope;
    connect?:
      | FacebookConnectionsWhereUniqueInput
      | FacebookConnectionsWhereUniqueInput[];
  };

  export type TokenUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
      | TokenCreateWithoutUserInput[]
      | TokenUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | TokenCreateOrConnectWithoutUserInput
      | TokenCreateOrConnectWithoutUserInput[];
    createMany?: TokenCreateManyUserInputEnvelope;
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[];
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type AdAccountRentalUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          AdAccountRentalCreateWithoutUserInput,
          AdAccountRentalUncheckedCreateWithoutUserInput
        >
      | AdAccountRentalCreateWithoutUserInput[]
      | AdAccountRentalUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | AdAccountRentalCreateOrConnectWithoutUserInput
      | AdAccountRentalCreateOrConnectWithoutUserInput[];
    upsert?:
      | AdAccountRentalUpsertWithWhereUniqueWithoutUserInput
      | AdAccountRentalUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: AdAccountRentalCreateManyUserInputEnvelope;
    set?: AdAccountRentalWhereUniqueInput | AdAccountRentalWhereUniqueInput[];
    disconnect?:
      | AdAccountRentalWhereUniqueInput
      | AdAccountRentalWhereUniqueInput[];
    delete?:
      | AdAccountRentalWhereUniqueInput
      | AdAccountRentalWhereUniqueInput[];
    connect?:
      | AdAccountRentalWhereUniqueInput
      | AdAccountRentalWhereUniqueInput[];
    update?:
      | AdAccountRentalUpdateWithWhereUniqueWithoutUserInput
      | AdAccountRentalUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | AdAccountRentalUpdateManyWithWhereWithoutUserInput
      | AdAccountRentalUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      | AdAccountRentalScalarWhereInput
      | AdAccountRentalScalarWhereInput[];
  };

  export type ProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<
      ProfileCreateWithoutUserInput,
      ProfileUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput;
    upsert?: ProfileUpsertWithoutUserInput;
    disconnect?: ProfileWhereInput | boolean;
    delete?: ProfileWhereInput | boolean;
    connect?: ProfileWhereUniqueInput;
    update?: XOR<
      XOR<
        ProfileUpdateToOneWithWhereWithoutUserInput,
        ProfileUpdateWithoutUserInput
      >,
      ProfileUncheckedUpdateWithoutUserInput
    >;
  };

  export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<
      RoleCreateWithoutUsersInput,
      RoleUncheckedCreateWithoutUsersInput
    >;
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput;
    upsert?: RoleUpsertWithoutUsersInput;
    connect?: RoleWhereUniqueInput;
    update?: XOR<
      XOR<
        RoleUpdateToOneWithWhereWithoutUsersInput,
        RoleUpdateWithoutUsersInput
      >,
      RoleUncheckedUpdateWithoutUsersInput
    >;
  };

  export type FacebookConnectionsUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          FacebookConnectionsCreateWithoutUserInput,
          FacebookConnectionsUncheckedCreateWithoutUserInput
        >
      | FacebookConnectionsCreateWithoutUserInput[]
      | FacebookConnectionsUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | FacebookConnectionsCreateOrConnectWithoutUserInput
      | FacebookConnectionsCreateOrConnectWithoutUserInput[];
    upsert?:
      | FacebookConnectionsUpsertWithWhereUniqueWithoutUserInput
      | FacebookConnectionsUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: FacebookConnectionsCreateManyUserInputEnvelope;
    set?:
      | FacebookConnectionsWhereUniqueInput
      | FacebookConnectionsWhereUniqueInput[];
    disconnect?:
      | FacebookConnectionsWhereUniqueInput
      | FacebookConnectionsWhereUniqueInput[];
    delete?:
      | FacebookConnectionsWhereUniqueInput
      | FacebookConnectionsWhereUniqueInput[];
    connect?:
      | FacebookConnectionsWhereUniqueInput
      | FacebookConnectionsWhereUniqueInput[];
    update?:
      | FacebookConnectionsUpdateWithWhereUniqueWithoutUserInput
      | FacebookConnectionsUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | FacebookConnectionsUpdateManyWithWhereWithoutUserInput
      | FacebookConnectionsUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      | FacebookConnectionsScalarWhereInput
      | FacebookConnectionsScalarWhereInput[];
  };

  export type TokenUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
      | TokenCreateWithoutUserInput[]
      | TokenUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | TokenCreateOrConnectWithoutUserInput
      | TokenCreateOrConnectWithoutUserInput[];
    upsert?:
      | TokenUpsertWithWhereUniqueWithoutUserInput
      | TokenUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: TokenCreateManyUserInputEnvelope;
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[];
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[];
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[];
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[];
    update?:
      | TokenUpdateWithWhereUniqueWithoutUserInput
      | TokenUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | TokenUpdateManyWithWhereWithoutUserInput
      | TokenUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[];
  };

  export type AdAccountRentalUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          AdAccountRentalCreateWithoutUserInput,
          AdAccountRentalUncheckedCreateWithoutUserInput
        >
      | AdAccountRentalCreateWithoutUserInput[]
      | AdAccountRentalUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | AdAccountRentalCreateOrConnectWithoutUserInput
      | AdAccountRentalCreateOrConnectWithoutUserInput[];
    upsert?:
      | AdAccountRentalUpsertWithWhereUniqueWithoutUserInput
      | AdAccountRentalUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: AdAccountRentalCreateManyUserInputEnvelope;
    set?: AdAccountRentalWhereUniqueInput | AdAccountRentalWhereUniqueInput[];
    disconnect?:
      | AdAccountRentalWhereUniqueInput
      | AdAccountRentalWhereUniqueInput[];
    delete?:
      | AdAccountRentalWhereUniqueInput
      | AdAccountRentalWhereUniqueInput[];
    connect?:
      | AdAccountRentalWhereUniqueInput
      | AdAccountRentalWhereUniqueInput[];
    update?:
      | AdAccountRentalUpdateWithWhereUniqueWithoutUserInput
      | AdAccountRentalUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | AdAccountRentalUpdateManyWithWhereWithoutUserInput
      | AdAccountRentalUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      | AdAccountRentalScalarWhereInput
      | AdAccountRentalScalarWhereInput[];
  };

  export type ProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<
      ProfileCreateWithoutUserInput,
      ProfileUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput;
    upsert?: ProfileUpsertWithoutUserInput;
    disconnect?: ProfileWhereInput | boolean;
    delete?: ProfileWhereInput | boolean;
    connect?: ProfileWhereUniqueInput;
    update?: XOR<
      XOR<
        ProfileUpdateToOneWithWhereWithoutUserInput,
        ProfileUpdateWithoutUserInput
      >,
      ProfileUncheckedUpdateWithoutUserInput
    >;
  };

  export type FacebookConnectionsUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          FacebookConnectionsCreateWithoutUserInput,
          FacebookConnectionsUncheckedCreateWithoutUserInput
        >
      | FacebookConnectionsCreateWithoutUserInput[]
      | FacebookConnectionsUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | FacebookConnectionsCreateOrConnectWithoutUserInput
      | FacebookConnectionsCreateOrConnectWithoutUserInput[];
    upsert?:
      | FacebookConnectionsUpsertWithWhereUniqueWithoutUserInput
      | FacebookConnectionsUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: FacebookConnectionsCreateManyUserInputEnvelope;
    set?:
      | FacebookConnectionsWhereUniqueInput
      | FacebookConnectionsWhereUniqueInput[];
    disconnect?:
      | FacebookConnectionsWhereUniqueInput
      | FacebookConnectionsWhereUniqueInput[];
    delete?:
      | FacebookConnectionsWhereUniqueInput
      | FacebookConnectionsWhereUniqueInput[];
    connect?:
      | FacebookConnectionsWhereUniqueInput
      | FacebookConnectionsWhereUniqueInput[];
    update?:
      | FacebookConnectionsUpdateWithWhereUniqueWithoutUserInput
      | FacebookConnectionsUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | FacebookConnectionsUpdateManyWithWhereWithoutUserInput
      | FacebookConnectionsUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      | FacebookConnectionsScalarWhereInput
      | FacebookConnectionsScalarWhereInput[];
  };

  export type TokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
      | TokenCreateWithoutUserInput[]
      | TokenUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | TokenCreateOrConnectWithoutUserInput
      | TokenCreateOrConnectWithoutUserInput[];
    upsert?:
      | TokenUpsertWithWhereUniqueWithoutUserInput
      | TokenUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: TokenCreateManyUserInputEnvelope;
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[];
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[];
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[];
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[];
    update?:
      | TokenUpdateWithWhereUniqueWithoutUserInput
      | TokenUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | TokenUpdateManyWithWhereWithoutUserInput
      | TokenUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[];
  };

  export type TokenCreateuser_tokenInput = {
    set: string[];
  };

  export type TokenCreateaccess_tokenInput = {
    set: string[];
  };

  export type UserCreateNestedOneWithoutTokenInput = {
    create?: XOR<
      UserCreateWithoutTokenInput,
      UserUncheckedCreateWithoutTokenInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutTokenInput;
    connect?: UserWhereUniqueInput;
  };

  export type TokenUpdateuser_tokenInput = {
    set?: string[];
    push?: string | string[];
  };

  export type TokenUpdateaccess_tokenInput = {
    set?: string[];
    push?: string | string[];
  };

  export type UserUpdateOneRequiredWithoutTokenNestedInput = {
    create?: XOR<
      UserCreateWithoutTokenInput,
      UserUncheckedCreateWithoutTokenInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutTokenInput;
    upsert?: UserUpsertWithoutTokenInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutTokenInput,
        UserUpdateWithoutTokenInput
      >,
      UserUncheckedUpdateWithoutTokenInput
    >;
  };

  export type FacebookPageInsightsCreateNestedOneWithoutFacebookFanpageInput = {
    create?: XOR<
      FacebookPageInsightsCreateWithoutFacebookFanpageInput,
      FacebookPageInsightsUncheckedCreateWithoutFacebookFanpageInput
    >;
    connectOrCreate?: FacebookPageInsightsCreateOrConnectWithoutFacebookFanpageInput;
    connect?: FacebookPageInsightsWhereUniqueInput;
  };

  export type FacebookConnectionsCreateNestedOneWithoutFacebookFanpageInput = {
    create?: XOR<
      FacebookConnectionsCreateWithoutFacebookFanpageInput,
      FacebookConnectionsUncheckedCreateWithoutFacebookFanpageInput
    >;
    connectOrCreate?: FacebookConnectionsCreateOrConnectWithoutFacebookFanpageInput;
    connect?: FacebookConnectionsWhereUniqueInput;
  };

  export type FacebookPageInsightsUncheckedCreateNestedOneWithoutFacebookFanpageInput =
    {
      create?: XOR<
        FacebookPageInsightsCreateWithoutFacebookFanpageInput,
        FacebookPageInsightsUncheckedCreateWithoutFacebookFanpageInput
      >;
      connectOrCreate?: FacebookPageInsightsCreateOrConnectWithoutFacebookFanpageInput;
      connect?: FacebookPageInsightsWhereUniqueInput;
    };

  export type FacebookConnectionsUncheckedCreateNestedOneWithoutFacebookFanpageInput =
    {
      create?: XOR<
        FacebookConnectionsCreateWithoutFacebookFanpageInput,
        FacebookConnectionsUncheckedCreateWithoutFacebookFanpageInput
      >;
      connectOrCreate?: FacebookConnectionsCreateOrConnectWithoutFacebookFanpageInput;
      connect?: FacebookConnectionsWhereUniqueInput;
    };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type FacebookPageInsightsUpdateOneWithoutFacebookFanpageNestedInput = {
    create?: XOR<
      FacebookPageInsightsCreateWithoutFacebookFanpageInput,
      FacebookPageInsightsUncheckedCreateWithoutFacebookFanpageInput
    >;
    connectOrCreate?: FacebookPageInsightsCreateOrConnectWithoutFacebookFanpageInput;
    upsert?: FacebookPageInsightsUpsertWithoutFacebookFanpageInput;
    disconnect?: FacebookPageInsightsWhereInput | boolean;
    delete?: FacebookPageInsightsWhereInput | boolean;
    connect?: FacebookPageInsightsWhereUniqueInput;
    update?: XOR<
      XOR<
        FacebookPageInsightsUpdateToOneWithWhereWithoutFacebookFanpageInput,
        FacebookPageInsightsUpdateWithoutFacebookFanpageInput
      >,
      FacebookPageInsightsUncheckedUpdateWithoutFacebookFanpageInput
    >;
  };

  export type FacebookConnectionsUpdateOneWithoutFacebookFanpageNestedInput = {
    create?: XOR<
      FacebookConnectionsCreateWithoutFacebookFanpageInput,
      FacebookConnectionsUncheckedCreateWithoutFacebookFanpageInput
    >;
    connectOrCreate?: FacebookConnectionsCreateOrConnectWithoutFacebookFanpageInput;
    upsert?: FacebookConnectionsUpsertWithoutFacebookFanpageInput;
    disconnect?: FacebookConnectionsWhereInput | boolean;
    delete?: FacebookConnectionsWhereInput | boolean;
    connect?: FacebookConnectionsWhereUniqueInput;
    update?: XOR<
      XOR<
        FacebookConnectionsUpdateToOneWithWhereWithoutFacebookFanpageInput,
        FacebookConnectionsUpdateWithoutFacebookFanpageInput
      >,
      FacebookConnectionsUncheckedUpdateWithoutFacebookFanpageInput
    >;
  };

  export type FacebookPageInsightsUncheckedUpdateOneWithoutFacebookFanpageNestedInput =
    {
      create?: XOR<
        FacebookPageInsightsCreateWithoutFacebookFanpageInput,
        FacebookPageInsightsUncheckedCreateWithoutFacebookFanpageInput
      >;
      connectOrCreate?: FacebookPageInsightsCreateOrConnectWithoutFacebookFanpageInput;
      upsert?: FacebookPageInsightsUpsertWithoutFacebookFanpageInput;
      disconnect?: FacebookPageInsightsWhereInput | boolean;
      delete?: FacebookPageInsightsWhereInput | boolean;
      connect?: FacebookPageInsightsWhereUniqueInput;
      update?: XOR<
        XOR<
          FacebookPageInsightsUpdateToOneWithWhereWithoutFacebookFanpageInput,
          FacebookPageInsightsUpdateWithoutFacebookFanpageInput
        >,
        FacebookPageInsightsUncheckedUpdateWithoutFacebookFanpageInput
      >;
    };

  export type FacebookConnectionsUncheckedUpdateOneWithoutFacebookFanpageNestedInput =
    {
      create?: XOR<
        FacebookConnectionsCreateWithoutFacebookFanpageInput,
        FacebookConnectionsUncheckedCreateWithoutFacebookFanpageInput
      >;
      connectOrCreate?: FacebookConnectionsCreateOrConnectWithoutFacebookFanpageInput;
      upsert?: FacebookConnectionsUpsertWithoutFacebookFanpageInput;
      disconnect?: FacebookConnectionsWhereInput | boolean;
      delete?: FacebookConnectionsWhereInput | boolean;
      connect?: FacebookConnectionsWhereUniqueInput;
      update?: XOR<
        XOR<
          FacebookConnectionsUpdateToOneWithWhereWithoutFacebookFanpageInput,
          FacebookConnectionsUpdateWithoutFacebookFanpageInput
        >,
        FacebookConnectionsUncheckedUpdateWithoutFacebookFanpageInput
      >;
    };

  export type FacebookConnectionsCreateaccess_tokenInput = {
    set: string[];
  };

  export type FacebookConnectionsCreatepermissionsInput = {
    set: string[];
  };

  export type UserCreateNestedOneWithoutFacebook_connectionsInput = {
    create?: XOR<
      UserCreateWithoutFacebook_connectionsInput,
      UserUncheckedCreateWithoutFacebook_connectionsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutFacebook_connectionsInput;
    connect?: UserWhereUniqueInput;
  };

  export type FacebookFanPageCreateNestedOneWithoutFacebookConnectionsInput = {
    create?: XOR<
      FacebookFanPageCreateWithoutFacebookConnectionsInput,
      FacebookFanPageUncheckedCreateWithoutFacebookConnectionsInput
    >;
    connectOrCreate?: FacebookFanPageCreateOrConnectWithoutFacebookConnectionsInput;
    connect?: FacebookFanPageWhereUniqueInput;
  };

  export type FacebookConnectionsUpdateaccess_tokenInput = {
    set?: string[];
    push?: string | string[];
  };

  export type FacebookConnectionsUpdatepermissionsInput = {
    set?: string[];
    push?: string | string[];
  };

  export type UserUpdateOneRequiredWithoutFacebook_connectionsNestedInput = {
    create?: XOR<
      UserCreateWithoutFacebook_connectionsInput,
      UserUncheckedCreateWithoutFacebook_connectionsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutFacebook_connectionsInput;
    upsert?: UserUpsertWithoutFacebook_connectionsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutFacebook_connectionsInput,
        UserUpdateWithoutFacebook_connectionsInput
      >,
      UserUncheckedUpdateWithoutFacebook_connectionsInput
    >;
  };

  export type FacebookFanPageUpdateOneRequiredWithoutFacebookConnectionsNestedInput =
    {
      create?: XOR<
        FacebookFanPageCreateWithoutFacebookConnectionsInput,
        FacebookFanPageUncheckedCreateWithoutFacebookConnectionsInput
      >;
      connectOrCreate?: FacebookFanPageCreateOrConnectWithoutFacebookConnectionsInput;
      upsert?: FacebookFanPageUpsertWithoutFacebookConnectionsInput;
      connect?: FacebookFanPageWhereUniqueInput;
      update?: XOR<
        XOR<
          FacebookFanPageUpdateToOneWithWhereWithoutFacebookConnectionsInput,
          FacebookFanPageUpdateWithoutFacebookConnectionsInput
        >,
        FacebookFanPageUncheckedUpdateWithoutFacebookConnectionsInput
      >;
    };

  export type FacebookFanPageCreateNestedOneWithoutFacebook_page_insightsInput =
    {
      create?: XOR<
        FacebookFanPageCreateWithoutFacebook_page_insightsInput,
        FacebookFanPageUncheckedCreateWithoutFacebook_page_insightsInput
      >;
      connectOrCreate?: FacebookFanPageCreateOrConnectWithoutFacebook_page_insightsInput;
      connect?: FacebookFanPageWhereUniqueInput;
    };

  export type FacebookFanPageUpdateOneRequiredWithoutFacebook_page_insightsNestedInput =
    {
      create?: XOR<
        FacebookFanPageCreateWithoutFacebook_page_insightsInput,
        FacebookFanPageUncheckedCreateWithoutFacebook_page_insightsInput
      >;
      connectOrCreate?: FacebookFanPageCreateOrConnectWithoutFacebook_page_insightsInput;
      upsert?: FacebookFanPageUpsertWithoutFacebook_page_insightsInput;
      connect?: FacebookFanPageWhereUniqueInput;
      update?: XOR<
        XOR<
          FacebookFanPageUpdateToOneWithWhereWithoutFacebook_page_insightsInput,
          FacebookFanPageUpdateWithoutFacebook_page_insightsInput
        >,
        FacebookFanPageUncheckedUpdateWithoutFacebook_page_insightsInput
      >;
    };

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<
      UserCreateWithoutProfileInput,
      UserUncheckedCreateWithoutProfileInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput;
    connect?: UserWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<
      UserCreateWithoutProfileInput,
      UserUncheckedCreateWithoutProfileInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput;
    upsert?: UserUpsertWithoutProfileInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutProfileInput,
        UserUpdateWithoutProfileInput
      >,
      UserUncheckedUpdateWithoutProfileInput
    >;
  };

  export type UserCreateNestedOneWithoutRentalsInput = {
    create?: XOR<
      UserCreateWithoutRentalsInput,
      UserUncheckedCreateWithoutRentalsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutRentalsInput;
    connect?: UserWhereUniqueInput;
  };

  export type SystemAdAccountCreateNestedOneWithoutRentalsInput = {
    create?: XOR<
      SystemAdAccountCreateWithoutRentalsInput,
      SystemAdAccountUncheckedCreateWithoutRentalsInput
    >;
    connectOrCreate?: SystemAdAccountCreateOrConnectWithoutRentalsInput;
    connect?: SystemAdAccountWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutRentalsNestedInput = {
    create?: XOR<
      UserCreateWithoutRentalsInput,
      UserUncheckedCreateWithoutRentalsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutRentalsInput;
    upsert?: UserUpsertWithoutRentalsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutRentalsInput,
        UserUpdateWithoutRentalsInput
      >,
      UserUncheckedUpdateWithoutRentalsInput
    >;
  };

  export type SystemAdAccountUpdateOneRequiredWithoutRentalsNestedInput = {
    create?: XOR<
      SystemAdAccountCreateWithoutRentalsInput,
      SystemAdAccountUncheckedCreateWithoutRentalsInput
    >;
    connectOrCreate?: SystemAdAccountCreateOrConnectWithoutRentalsInput;
    upsert?: SystemAdAccountUpsertWithoutRentalsInput;
    connect?: SystemAdAccountWhereUniqueInput;
    update?: XOR<
      XOR<
        SystemAdAccountUpdateToOneWithWhereWithoutRentalsInput,
        SystemAdAccountUpdateWithoutRentalsInput
      >,
      SystemAdAccountUncheckedUpdateWithoutRentalsInput
    >;
  };

  export type AdAccountRentalCreateNestedManyWithoutAccountInput = {
    create?:
      | XOR<
          AdAccountRentalCreateWithoutAccountInput,
          AdAccountRentalUncheckedCreateWithoutAccountInput
        >
      | AdAccountRentalCreateWithoutAccountInput[]
      | AdAccountRentalUncheckedCreateWithoutAccountInput[];
    connectOrCreate?:
      | AdAccountRentalCreateOrConnectWithoutAccountInput
      | AdAccountRentalCreateOrConnectWithoutAccountInput[];
    createMany?: AdAccountRentalCreateManyAccountInputEnvelope;
    connect?:
      | AdAccountRentalWhereUniqueInput
      | AdAccountRentalWhereUniqueInput[];
  };

  export type AdAccountRentalUncheckedCreateNestedManyWithoutAccountInput = {
    create?:
      | XOR<
          AdAccountRentalCreateWithoutAccountInput,
          AdAccountRentalUncheckedCreateWithoutAccountInput
        >
      | AdAccountRentalCreateWithoutAccountInput[]
      | AdAccountRentalUncheckedCreateWithoutAccountInput[];
    connectOrCreate?:
      | AdAccountRentalCreateOrConnectWithoutAccountInput
      | AdAccountRentalCreateOrConnectWithoutAccountInput[];
    createMany?: AdAccountRentalCreateManyAccountInputEnvelope;
    connect?:
      | AdAccountRentalWhereUniqueInput
      | AdAccountRentalWhereUniqueInput[];
  };

  export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type AdAccountRentalUpdateManyWithoutAccountNestedInput = {
    create?:
      | XOR<
          AdAccountRentalCreateWithoutAccountInput,
          AdAccountRentalUncheckedCreateWithoutAccountInput
        >
      | AdAccountRentalCreateWithoutAccountInput[]
      | AdAccountRentalUncheckedCreateWithoutAccountInput[];
    connectOrCreate?:
      | AdAccountRentalCreateOrConnectWithoutAccountInput
      | AdAccountRentalCreateOrConnectWithoutAccountInput[];
    upsert?:
      | AdAccountRentalUpsertWithWhereUniqueWithoutAccountInput
      | AdAccountRentalUpsertWithWhereUniqueWithoutAccountInput[];
    createMany?: AdAccountRentalCreateManyAccountInputEnvelope;
    set?: AdAccountRentalWhereUniqueInput | AdAccountRentalWhereUniqueInput[];
    disconnect?:
      | AdAccountRentalWhereUniqueInput
      | AdAccountRentalWhereUniqueInput[];
    delete?:
      | AdAccountRentalWhereUniqueInput
      | AdAccountRentalWhereUniqueInput[];
    connect?:
      | AdAccountRentalWhereUniqueInput
      | AdAccountRentalWhereUniqueInput[];
    update?:
      | AdAccountRentalUpdateWithWhereUniqueWithoutAccountInput
      | AdAccountRentalUpdateWithWhereUniqueWithoutAccountInput[];
    updateMany?:
      | AdAccountRentalUpdateManyWithWhereWithoutAccountInput
      | AdAccountRentalUpdateManyWithWhereWithoutAccountInput[];
    deleteMany?:
      | AdAccountRentalScalarWhereInput
      | AdAccountRentalScalarWhereInput[];
  };

  export type AdAccountRentalUncheckedUpdateManyWithoutAccountNestedInput = {
    create?:
      | XOR<
          AdAccountRentalCreateWithoutAccountInput,
          AdAccountRentalUncheckedCreateWithoutAccountInput
        >
      | AdAccountRentalCreateWithoutAccountInput[]
      | AdAccountRentalUncheckedCreateWithoutAccountInput[];
    connectOrCreate?:
      | AdAccountRentalCreateOrConnectWithoutAccountInput
      | AdAccountRentalCreateOrConnectWithoutAccountInput[];
    upsert?:
      | AdAccountRentalUpsertWithWhereUniqueWithoutAccountInput
      | AdAccountRentalUpsertWithWhereUniqueWithoutAccountInput[];
    createMany?: AdAccountRentalCreateManyAccountInputEnvelope;
    set?: AdAccountRentalWhereUniqueInput | AdAccountRentalWhereUniqueInput[];
    disconnect?:
      | AdAccountRentalWhereUniqueInput
      | AdAccountRentalWhereUniqueInput[];
    delete?:
      | AdAccountRentalWhereUniqueInput
      | AdAccountRentalWhereUniqueInput[];
    connect?:
      | AdAccountRentalWhereUniqueInput
      | AdAccountRentalWhereUniqueInput[];
    update?:
      | AdAccountRentalUpdateWithWhereUniqueWithoutAccountInput
      | AdAccountRentalUpdateWithWhereUniqueWithoutAccountInput[];
    updateMany?:
      | AdAccountRentalUpdateManyWithWhereWithoutAccountInput
      | AdAccountRentalUpdateManyWithWhereWithoutAccountInput[];
    deleteMany?:
      | AdAccountRentalScalarWhereInput
      | AdAccountRentalScalarWhereInput[];
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
      in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
      notIn?:
        | Date[]
        | string[]
        | ListDateTimeFieldRefInput<$PrismaModel>
        | null;
      lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      not?:
        | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
        | Date
        | string
        | null;
      _count?: NestedIntNullableFilter<$PrismaModel>;
      _min?: NestedDateTimeNullableFilter<$PrismaModel>;
      _max?: NestedDateTimeNullableFilter<$PrismaModel>;
    };
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<NestedJsonNullableFilterBase<$PrismaModel>>,
          Exclude<
            keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>,
            'path'
          >
        >,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<
        Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>
      >;

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
  };

  export type UserCreateWithoutRoleInput = {
    id?: string;
    instance_id?: number | null;
    aud?: string | null;
    email: string;
    password: string;
    email_confirmed_at?: Date | string | null;
    invited_at?: Date | string | null;
    confirmation_token?: string | null;
    confirmation_sent_at?: Date | string | null;
    recovery_token?: string | null;
    recovery_sent_at?: Date | string | null;
    email_change_token_new?: string | null;
    email_change?: string | null;
    email_change_sent_at?: Date | string | null;
    last_sign_in_at?: Date | string | null;
    raw_app_meta_data?: NullableJsonNullValueInput | InputJsonValue;
    raw_user_meta_data?: NullableJsonNullValueInput | InputJsonValue;
    is_super_admin?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    phone?: string | null;
    phone_confirmed_at?: Date | string | null;
    phone_change?: string | null;
    phone_change_token?: string | null;
    phone_change_sent_at?: Date | string | null;
    confirmed_at?: Date | string | null;
    email_change_token_current?: string | null;
    email_change_confirm_status?: number | null;
    banned_until?: Date | string | null;
    reauthentication_token?: string | null;
    reauthentication_sent_at?: Date | string | null;
    is_sso_user?: boolean;
    deleted_at?: Date | string | null;
    is_anonymous?: boolean;
    rentals?: AdAccountRentalCreateNestedManyWithoutUserInput;
    profile?: ProfileCreateNestedOneWithoutUserInput;
    facebook_connections?: FacebookConnectionsCreateNestedManyWithoutUserInput;
    token?: TokenCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutRoleInput = {
    id?: string;
    instance_id?: number | null;
    aud?: string | null;
    email: string;
    password: string;
    email_confirmed_at?: Date | string | null;
    invited_at?: Date | string | null;
    confirmation_token?: string | null;
    confirmation_sent_at?: Date | string | null;
    recovery_token?: string | null;
    recovery_sent_at?: Date | string | null;
    email_change_token_new?: string | null;
    email_change?: string | null;
    email_change_sent_at?: Date | string | null;
    last_sign_in_at?: Date | string | null;
    raw_app_meta_data?: NullableJsonNullValueInput | InputJsonValue;
    raw_user_meta_data?: NullableJsonNullValueInput | InputJsonValue;
    is_super_admin?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    phone?: string | null;
    phone_confirmed_at?: Date | string | null;
    phone_change?: string | null;
    phone_change_token?: string | null;
    phone_change_sent_at?: Date | string | null;
    confirmed_at?: Date | string | null;
    email_change_token_current?: string | null;
    email_change_confirm_status?: number | null;
    banned_until?: Date | string | null;
    reauthentication_token?: string | null;
    reauthentication_sent_at?: Date | string | null;
    is_sso_user?: boolean;
    deleted_at?: Date | string | null;
    is_anonymous?: boolean;
    rentals?: AdAccountRentalUncheckedCreateNestedManyWithoutUserInput;
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput;
    facebook_connections?: FacebookConnectionsUncheckedCreateNestedManyWithoutUserInput;
    token?: TokenUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutRoleInput,
      UserUncheckedCreateWithoutRoleInput
    >;
  };

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[];
    skipDuplicates?: boolean;
  };

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput;
    update: XOR<
      UserUpdateWithoutRoleInput,
      UserUncheckedUpdateWithoutRoleInput
    >;
    create: XOR<
      UserCreateWithoutRoleInput,
      UserUncheckedCreateWithoutRoleInput
    >;
  };

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput;
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>;
  };

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput;
    data: XOR<
      UserUpdateManyMutationInput,
      UserUncheckedUpdateManyWithoutRoleInput
    >;
  };

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[];
    OR?: UserScalarWhereInput[];
    NOT?: UserScalarWhereInput | UserScalarWhereInput[];
    id?: StringFilter<'User'> | string;
    instance_id?: IntNullableFilter<'User'> | number | null;
    aud?: StringNullableFilter<'User'> | string | null;
    email?: StringFilter<'User'> | string;
    password?: StringFilter<'User'> | string;
    email_confirmed_at?: DateTimeNullableFilter<'User'> | Date | string | null;
    invited_at?: DateTimeNullableFilter<'User'> | Date | string | null;
    confirmation_token?: StringNullableFilter<'User'> | string | null;
    confirmation_sent_at?:
      | DateTimeNullableFilter<'User'>
      | Date
      | string
      | null;
    recovery_token?: StringNullableFilter<'User'> | string | null;
    recovery_sent_at?: DateTimeNullableFilter<'User'> | Date | string | null;
    email_change_token_new?: StringNullableFilter<'User'> | string | null;
    email_change?: StringNullableFilter<'User'> | string | null;
    email_change_sent_at?:
      | DateTimeNullableFilter<'User'>
      | Date
      | string
      | null;
    last_sign_in_at?: DateTimeNullableFilter<'User'> | Date | string | null;
    raw_app_meta_data?: JsonNullableFilter<'User'>;
    raw_user_meta_data?: JsonNullableFilter<'User'>;
    is_super_admin?: BoolFilter<'User'> | boolean;
    created_at?: DateTimeFilter<'User'> | Date | string;
    updated_at?: DateTimeFilter<'User'> | Date | string;
    phone?: StringNullableFilter<'User'> | string | null;
    phone_confirmed_at?: DateTimeNullableFilter<'User'> | Date | string | null;
    phone_change?: StringNullableFilter<'User'> | string | null;
    phone_change_token?: StringNullableFilter<'User'> | string | null;
    phone_change_sent_at?:
      | DateTimeNullableFilter<'User'>
      | Date
      | string
      | null;
    confirmed_at?: DateTimeNullableFilter<'User'> | Date | string | null;
    email_change_token_current?: StringNullableFilter<'User'> | string | null;
    email_change_confirm_status?: IntNullableFilter<'User'> | number | null;
    banned_until?: DateTimeNullableFilter<'User'> | Date | string | null;
    reauthentication_token?: StringNullableFilter<'User'> | string | null;
    reauthentication_sent_at?:
      | DateTimeNullableFilter<'User'>
      | Date
      | string
      | null;
    is_sso_user?: BoolFilter<'User'> | boolean;
    deleted_at?: DateTimeNullableFilter<'User'> | Date | string | null;
    is_anonymous?: BoolFilter<'User'> | boolean;
    role_id?: StringFilter<'User'> | string;
  };

  export type AdAccountRentalCreateWithoutUserInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    account: SystemAdAccountCreateNestedOneWithoutRentalsInput;
  };

  export type AdAccountRentalUncheckedCreateWithoutUserInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    account_id: number;
  };

  export type AdAccountRentalCreateOrConnectWithoutUserInput = {
    where: AdAccountRentalWhereUniqueInput;
    create: XOR<
      AdAccountRentalCreateWithoutUserInput,
      AdAccountRentalUncheckedCreateWithoutUserInput
    >;
  };

  export type AdAccountRentalCreateManyUserInputEnvelope = {
    data:
      | AdAccountRentalCreateManyUserInput
      | AdAccountRentalCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type ProfileCreateWithoutUserInput = {
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ProfileUncheckedCreateWithoutUserInput = {
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ProfileCreateOrConnectWithoutUserInput = {
    where: ProfileWhereUniqueInput;
    create: XOR<
      ProfileCreateWithoutUserInput,
      ProfileUncheckedCreateWithoutUserInput
    >;
  };

  export type RoleCreateWithoutUsersInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput;
    create: XOR<
      RoleCreateWithoutUsersInput,
      RoleUncheckedCreateWithoutUsersInput
    >;
  };

  export type FacebookConnectionsCreateWithoutUserInput = {
    id?: string;
    page_id?: string;
    access_token?: FacebookConnectionsCreateaccess_tokenInput | string[];
    status?: string;
    permissions?: FacebookConnectionsCreatepermissionsInput | string[];
    last_sync?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    role_id?: string | null;
    facebookFanpage: FacebookFanPageCreateNestedOneWithoutFacebookConnectionsInput;
  };

  export type FacebookConnectionsUncheckedCreateWithoutUserInput = {
    id?: string;
    page_id?: string;
    access_token?: FacebookConnectionsCreateaccess_tokenInput | string[];
    status?: string;
    permissions?: FacebookConnectionsCreatepermissionsInput | string[];
    last_sync?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    facebook_fanpage_id: string;
    role_id?: string | null;
  };

  export type FacebookConnectionsCreateOrConnectWithoutUserInput = {
    where: FacebookConnectionsWhereUniqueInput;
    create: XOR<
      FacebookConnectionsCreateWithoutUserInput,
      FacebookConnectionsUncheckedCreateWithoutUserInput
    >;
  };

  export type FacebookConnectionsCreateManyUserInputEnvelope = {
    data:
      | FacebookConnectionsCreateManyUserInput
      | FacebookConnectionsCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type TokenCreateWithoutUserInput = {
    id?: string;
    user_token?: TokenCreateuser_tokenInput | string[];
    access_token?: TokenCreateaccess_tokenInput | string[];
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type TokenUncheckedCreateWithoutUserInput = {
    id?: string;
    user_token?: TokenCreateuser_tokenInput | string[];
    access_token?: TokenCreateaccess_tokenInput | string[];
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type TokenCreateOrConnectWithoutUserInput = {
    where: TokenWhereUniqueInput;
    create: XOR<
      TokenCreateWithoutUserInput,
      TokenUncheckedCreateWithoutUserInput
    >;
  };

  export type TokenCreateManyUserInputEnvelope = {
    data: TokenCreateManyUserInput | TokenCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type AdAccountRentalUpsertWithWhereUniqueWithoutUserInput = {
    where: AdAccountRentalWhereUniqueInput;
    update: XOR<
      AdAccountRentalUpdateWithoutUserInput,
      AdAccountRentalUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      AdAccountRentalCreateWithoutUserInput,
      AdAccountRentalUncheckedCreateWithoutUserInput
    >;
  };

  export type AdAccountRentalUpdateWithWhereUniqueWithoutUserInput = {
    where: AdAccountRentalWhereUniqueInput;
    data: XOR<
      AdAccountRentalUpdateWithoutUserInput,
      AdAccountRentalUncheckedUpdateWithoutUserInput
    >;
  };

  export type AdAccountRentalUpdateManyWithWhereWithoutUserInput = {
    where: AdAccountRentalScalarWhereInput;
    data: XOR<
      AdAccountRentalUpdateManyMutationInput,
      AdAccountRentalUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type AdAccountRentalScalarWhereInput = {
    AND?: AdAccountRentalScalarWhereInput | AdAccountRentalScalarWhereInput[];
    OR?: AdAccountRentalScalarWhereInput[];
    NOT?: AdAccountRentalScalarWhereInput | AdAccountRentalScalarWhereInput[];
    id?: StringFilter<'AdAccountRental'> | string;
    user_id?: StringFilter<'AdAccountRental'> | string;
    start_date?: DateTimeFilter<'AdAccountRental'> | Date | string;
    end_date?: DateTimeFilter<'AdAccountRental'> | Date | string;
    status?: StringFilter<'AdAccountRental'> | string;
    created_at?: DateTimeFilter<'AdAccountRental'> | Date | string;
    updated_at?: DateTimeFilter<'AdAccountRental'> | Date | string;
    account_id?: IntFilter<'AdAccountRental'> | number;
  };

  export type ProfileUpsertWithoutUserInput = {
    update: XOR<
      ProfileUpdateWithoutUserInput,
      ProfileUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      ProfileCreateWithoutUserInput,
      ProfileUncheckedCreateWithoutUserInput
    >;
    where?: ProfileWhereInput;
  };

  export type ProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfileWhereInput;
    data: XOR<
      ProfileUpdateWithoutUserInput,
      ProfileUncheckedUpdateWithoutUserInput
    >;
  };

  export type ProfileUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProfileUncheckedUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<
      RoleUpdateWithoutUsersInput,
      RoleUncheckedUpdateWithoutUsersInput
    >;
    create: XOR<
      RoleCreateWithoutUsersInput,
      RoleUncheckedCreateWithoutUsersInput
    >;
    where?: RoleWhereInput;
  };

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput;
    data: XOR<
      RoleUpdateWithoutUsersInput,
      RoleUncheckedUpdateWithoutUsersInput
    >;
  };

  export type RoleUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FacebookConnectionsUpsertWithWhereUniqueWithoutUserInput = {
    where: FacebookConnectionsWhereUniqueInput;
    update: XOR<
      FacebookConnectionsUpdateWithoutUserInput,
      FacebookConnectionsUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      FacebookConnectionsCreateWithoutUserInput,
      FacebookConnectionsUncheckedCreateWithoutUserInput
    >;
  };

  export type FacebookConnectionsUpdateWithWhereUniqueWithoutUserInput = {
    where: FacebookConnectionsWhereUniqueInput;
    data: XOR<
      FacebookConnectionsUpdateWithoutUserInput,
      FacebookConnectionsUncheckedUpdateWithoutUserInput
    >;
  };

  export type FacebookConnectionsUpdateManyWithWhereWithoutUserInput = {
    where: FacebookConnectionsScalarWhereInput;
    data: XOR<
      FacebookConnectionsUpdateManyMutationInput,
      FacebookConnectionsUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type FacebookConnectionsScalarWhereInput = {
    AND?:
      | FacebookConnectionsScalarWhereInput
      | FacebookConnectionsScalarWhereInput[];
    OR?: FacebookConnectionsScalarWhereInput[];
    NOT?:
      | FacebookConnectionsScalarWhereInput
      | FacebookConnectionsScalarWhereInput[];
    id?: StringFilter<'FacebookConnections'> | string;
    page_id?: StringFilter<'FacebookConnections'> | string;
    access_token?: StringNullableListFilter<'FacebookConnections'>;
    status?: StringFilter<'FacebookConnections'> | string;
    permissions?: StringNullableListFilter<'FacebookConnections'>;
    last_sync?:
      | DateTimeNullableFilter<'FacebookConnections'>
      | Date
      | string
      | null;
    created_at?: DateTimeFilter<'FacebookConnections'> | Date | string;
    updated_at?: DateTimeFilter<'FacebookConnections'> | Date | string;
    user_id?: StringFilter<'FacebookConnections'> | string;
    facebook_fanpage_id?: StringFilter<'FacebookConnections'> | string;
    role_id?: StringNullableFilter<'FacebookConnections'> | string | null;
  };

  export type TokenUpsertWithWhereUniqueWithoutUserInput = {
    where: TokenWhereUniqueInput;
    update: XOR<
      TokenUpdateWithoutUserInput,
      TokenUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      TokenCreateWithoutUserInput,
      TokenUncheckedCreateWithoutUserInput
    >;
  };

  export type TokenUpdateWithWhereUniqueWithoutUserInput = {
    where: TokenWhereUniqueInput;
    data: XOR<
      TokenUpdateWithoutUserInput,
      TokenUncheckedUpdateWithoutUserInput
    >;
  };

  export type TokenUpdateManyWithWhereWithoutUserInput = {
    where: TokenScalarWhereInput;
    data: XOR<
      TokenUpdateManyMutationInput,
      TokenUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type TokenScalarWhereInput = {
    AND?: TokenScalarWhereInput | TokenScalarWhereInput[];
    OR?: TokenScalarWhereInput[];
    NOT?: TokenScalarWhereInput | TokenScalarWhereInput[];
    id?: StringFilter<'Token'> | string;
    user_id?: StringFilter<'Token'> | string;
    user_token?: StringNullableListFilter<'Token'>;
    access_token?: StringNullableListFilter<'Token'>;
    created_at?: DateTimeFilter<'Token'> | Date | string;
    updated_at?: DateTimeFilter<'Token'> | Date | string;
  };

  export type UserCreateWithoutTokenInput = {
    id?: string;
    instance_id?: number | null;
    aud?: string | null;
    email: string;
    password: string;
    email_confirmed_at?: Date | string | null;
    invited_at?: Date | string | null;
    confirmation_token?: string | null;
    confirmation_sent_at?: Date | string | null;
    recovery_token?: string | null;
    recovery_sent_at?: Date | string | null;
    email_change_token_new?: string | null;
    email_change?: string | null;
    email_change_sent_at?: Date | string | null;
    last_sign_in_at?: Date | string | null;
    raw_app_meta_data?: NullableJsonNullValueInput | InputJsonValue;
    raw_user_meta_data?: NullableJsonNullValueInput | InputJsonValue;
    is_super_admin?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    phone?: string | null;
    phone_confirmed_at?: Date | string | null;
    phone_change?: string | null;
    phone_change_token?: string | null;
    phone_change_sent_at?: Date | string | null;
    confirmed_at?: Date | string | null;
    email_change_token_current?: string | null;
    email_change_confirm_status?: number | null;
    banned_until?: Date | string | null;
    reauthentication_token?: string | null;
    reauthentication_sent_at?: Date | string | null;
    is_sso_user?: boolean;
    deleted_at?: Date | string | null;
    is_anonymous?: boolean;
    rentals?: AdAccountRentalCreateNestedManyWithoutUserInput;
    profile?: ProfileCreateNestedOneWithoutUserInput;
    role: RoleCreateNestedOneWithoutUsersInput;
    facebook_connections?: FacebookConnectionsCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutTokenInput = {
    id?: string;
    instance_id?: number | null;
    aud?: string | null;
    email: string;
    password: string;
    email_confirmed_at?: Date | string | null;
    invited_at?: Date | string | null;
    confirmation_token?: string | null;
    confirmation_sent_at?: Date | string | null;
    recovery_token?: string | null;
    recovery_sent_at?: Date | string | null;
    email_change_token_new?: string | null;
    email_change?: string | null;
    email_change_sent_at?: Date | string | null;
    last_sign_in_at?: Date | string | null;
    raw_app_meta_data?: NullableJsonNullValueInput | InputJsonValue;
    raw_user_meta_data?: NullableJsonNullValueInput | InputJsonValue;
    is_super_admin?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    phone?: string | null;
    phone_confirmed_at?: Date | string | null;
    phone_change?: string | null;
    phone_change_token?: string | null;
    phone_change_sent_at?: Date | string | null;
    confirmed_at?: Date | string | null;
    email_change_token_current?: string | null;
    email_change_confirm_status?: number | null;
    banned_until?: Date | string | null;
    reauthentication_token?: string | null;
    reauthentication_sent_at?: Date | string | null;
    is_sso_user?: boolean;
    deleted_at?: Date | string | null;
    is_anonymous?: boolean;
    role_id: string;
    rentals?: AdAccountRentalUncheckedCreateNestedManyWithoutUserInput;
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput;
    facebook_connections?: FacebookConnectionsUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutTokenInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutTokenInput,
      UserUncheckedCreateWithoutTokenInput
    >;
  };

  export type UserUpsertWithoutTokenInput = {
    update: XOR<
      UserUpdateWithoutTokenInput,
      UserUncheckedUpdateWithoutTokenInput
    >;
    create: XOR<
      UserCreateWithoutTokenInput,
      UserUncheckedCreateWithoutTokenInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutTokenInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutTokenInput,
      UserUncheckedUpdateWithoutTokenInput
    >;
  };

  export type UserUpdateWithoutTokenInput = {
    id?: StringFieldUpdateOperationsInput | string;
    instance_id?: NullableIntFieldUpdateOperationsInput | number | null;
    aud?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    email_confirmed_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    invited_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    confirmation_token?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    confirmation_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    recovery_token?: NullableStringFieldUpdateOperationsInput | string | null;
    recovery_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    email_change_token_new?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    email_change?: NullableStringFieldUpdateOperationsInput | string | null;
    email_change_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    last_sign_in_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    raw_app_meta_data?: NullableJsonNullValueInput | InputJsonValue;
    raw_user_meta_data?: NullableJsonNullValueInput | InputJsonValue;
    is_super_admin?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_confirmed_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    phone_change?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_change_token?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    phone_change_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    confirmed_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    email_change_token_current?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    email_change_confirm_status?:
      | NullableIntFieldUpdateOperationsInput
      | number
      | null;
    banned_until?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    reauthentication_token?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    reauthentication_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    is_sso_user?: BoolFieldUpdateOperationsInput | boolean;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    is_anonymous?: BoolFieldUpdateOperationsInput | boolean;
    rentals?: AdAccountRentalUpdateManyWithoutUserNestedInput;
    profile?: ProfileUpdateOneWithoutUserNestedInput;
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput;
    facebook_connections?: FacebookConnectionsUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutTokenInput = {
    id?: StringFieldUpdateOperationsInput | string;
    instance_id?: NullableIntFieldUpdateOperationsInput | number | null;
    aud?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    email_confirmed_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    invited_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    confirmation_token?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    confirmation_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    recovery_token?: NullableStringFieldUpdateOperationsInput | string | null;
    recovery_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    email_change_token_new?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    email_change?: NullableStringFieldUpdateOperationsInput | string | null;
    email_change_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    last_sign_in_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    raw_app_meta_data?: NullableJsonNullValueInput | InputJsonValue;
    raw_user_meta_data?: NullableJsonNullValueInput | InputJsonValue;
    is_super_admin?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_confirmed_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    phone_change?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_change_token?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    phone_change_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    confirmed_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    email_change_token_current?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    email_change_confirm_status?:
      | NullableIntFieldUpdateOperationsInput
      | number
      | null;
    banned_until?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    reauthentication_token?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    reauthentication_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    is_sso_user?: BoolFieldUpdateOperationsInput | boolean;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    is_anonymous?: BoolFieldUpdateOperationsInput | boolean;
    role_id?: StringFieldUpdateOperationsInput | string;
    rentals?: AdAccountRentalUncheckedUpdateManyWithoutUserNestedInput;
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput;
    facebook_connections?: FacebookConnectionsUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type FacebookPageInsightsCreateWithoutFacebookFanpageInput = {
    posts: number;
    approach: number;
    interactions: number;
    follows: number;
    created_at?: Date | string;
    name?: string | null;
    image_url?: string | null;
    category?: string | null;
    status?: string | null;
    user_id?: string | null;
  };

  export type FacebookPageInsightsUncheckedCreateWithoutFacebookFanpageInput = {
    id?: number;
    posts: number;
    approach: number;
    interactions: number;
    follows: number;
    created_at?: Date | string;
    name?: string | null;
    image_url?: string | null;
    category?: string | null;
    status?: string | null;
    user_id?: string | null;
  };

  export type FacebookPageInsightsCreateOrConnectWithoutFacebookFanpageInput = {
    where: FacebookPageInsightsWhereUniqueInput;
    create: XOR<
      FacebookPageInsightsCreateWithoutFacebookFanpageInput,
      FacebookPageInsightsUncheckedCreateWithoutFacebookFanpageInput
    >;
  };

  export type FacebookConnectionsCreateWithoutFacebookFanpageInput = {
    id?: string;
    page_id?: string;
    access_token?: FacebookConnectionsCreateaccess_tokenInput | string[];
    status?: string;
    permissions?: FacebookConnectionsCreatepermissionsInput | string[];
    last_sync?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    role_id?: string | null;
    user: UserCreateNestedOneWithoutFacebook_connectionsInput;
  };

  export type FacebookConnectionsUncheckedCreateWithoutFacebookFanpageInput = {
    id?: string;
    page_id?: string;
    access_token?: FacebookConnectionsCreateaccess_tokenInput | string[];
    status?: string;
    permissions?: FacebookConnectionsCreatepermissionsInput | string[];
    last_sync?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    role_id?: string | null;
  };

  export type FacebookConnectionsCreateOrConnectWithoutFacebookFanpageInput = {
    where: FacebookConnectionsWhereUniqueInput;
    create: XOR<
      FacebookConnectionsCreateWithoutFacebookFanpageInput,
      FacebookConnectionsUncheckedCreateWithoutFacebookFanpageInput
    >;
  };

  export type FacebookPageInsightsUpsertWithoutFacebookFanpageInput = {
    update: XOR<
      FacebookPageInsightsUpdateWithoutFacebookFanpageInput,
      FacebookPageInsightsUncheckedUpdateWithoutFacebookFanpageInput
    >;
    create: XOR<
      FacebookPageInsightsCreateWithoutFacebookFanpageInput,
      FacebookPageInsightsUncheckedCreateWithoutFacebookFanpageInput
    >;
    where?: FacebookPageInsightsWhereInput;
  };

  export type FacebookPageInsightsUpdateToOneWithWhereWithoutFacebookFanpageInput =
    {
      where?: FacebookPageInsightsWhereInput;
      data: XOR<
        FacebookPageInsightsUpdateWithoutFacebookFanpageInput,
        FacebookPageInsightsUncheckedUpdateWithoutFacebookFanpageInput
      >;
    };

  export type FacebookPageInsightsUpdateWithoutFacebookFanpageInput = {
    posts?: IntFieldUpdateOperationsInput | number;
    approach?: IntFieldUpdateOperationsInput | number;
    interactions?: IntFieldUpdateOperationsInput | number;
    follows?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    image_url?: NullableStringFieldUpdateOperationsInput | string | null;
    category?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type FacebookPageInsightsUncheckedUpdateWithoutFacebookFanpageInput = {
    id?: IntFieldUpdateOperationsInput | number;
    posts?: IntFieldUpdateOperationsInput | number;
    approach?: IntFieldUpdateOperationsInput | number;
    interactions?: IntFieldUpdateOperationsInput | number;
    follows?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    image_url?: NullableStringFieldUpdateOperationsInput | string | null;
    category?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type FacebookConnectionsUpsertWithoutFacebookFanpageInput = {
    update: XOR<
      FacebookConnectionsUpdateWithoutFacebookFanpageInput,
      FacebookConnectionsUncheckedUpdateWithoutFacebookFanpageInput
    >;
    create: XOR<
      FacebookConnectionsCreateWithoutFacebookFanpageInput,
      FacebookConnectionsUncheckedCreateWithoutFacebookFanpageInput
    >;
    where?: FacebookConnectionsWhereInput;
  };

  export type FacebookConnectionsUpdateToOneWithWhereWithoutFacebookFanpageInput =
    {
      where?: FacebookConnectionsWhereInput;
      data: XOR<
        FacebookConnectionsUpdateWithoutFacebookFanpageInput,
        FacebookConnectionsUncheckedUpdateWithoutFacebookFanpageInput
      >;
    };

  export type FacebookConnectionsUpdateWithoutFacebookFanpageInput = {
    id?: StringFieldUpdateOperationsInput | string;
    page_id?: StringFieldUpdateOperationsInput | string;
    access_token?: FacebookConnectionsUpdateaccess_tokenInput | string[];
    status?: StringFieldUpdateOperationsInput | string;
    permissions?: FacebookConnectionsUpdatepermissionsInput | string[];
    last_sync?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    role_id?: NullableStringFieldUpdateOperationsInput | string | null;
    user?: UserUpdateOneRequiredWithoutFacebook_connectionsNestedInput;
  };

  export type FacebookConnectionsUncheckedUpdateWithoutFacebookFanpageInput = {
    id?: StringFieldUpdateOperationsInput | string;
    page_id?: StringFieldUpdateOperationsInput | string;
    access_token?: FacebookConnectionsUpdateaccess_tokenInput | string[];
    status?: StringFieldUpdateOperationsInput | string;
    permissions?: FacebookConnectionsUpdatepermissionsInput | string[];
    last_sync?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    role_id?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type UserCreateWithoutFacebook_connectionsInput = {
    id?: string;
    instance_id?: number | null;
    aud?: string | null;
    email: string;
    password: string;
    email_confirmed_at?: Date | string | null;
    invited_at?: Date | string | null;
    confirmation_token?: string | null;
    confirmation_sent_at?: Date | string | null;
    recovery_token?: string | null;
    recovery_sent_at?: Date | string | null;
    email_change_token_new?: string | null;
    email_change?: string | null;
    email_change_sent_at?: Date | string | null;
    last_sign_in_at?: Date | string | null;
    raw_app_meta_data?: NullableJsonNullValueInput | InputJsonValue;
    raw_user_meta_data?: NullableJsonNullValueInput | InputJsonValue;
    is_super_admin?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    phone?: string | null;
    phone_confirmed_at?: Date | string | null;
    phone_change?: string | null;
    phone_change_token?: string | null;
    phone_change_sent_at?: Date | string | null;
    confirmed_at?: Date | string | null;
    email_change_token_current?: string | null;
    email_change_confirm_status?: number | null;
    banned_until?: Date | string | null;
    reauthentication_token?: string | null;
    reauthentication_sent_at?: Date | string | null;
    is_sso_user?: boolean;
    deleted_at?: Date | string | null;
    is_anonymous?: boolean;
    rentals?: AdAccountRentalCreateNestedManyWithoutUserInput;
    profile?: ProfileCreateNestedOneWithoutUserInput;
    role: RoleCreateNestedOneWithoutUsersInput;
    token?: TokenCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutFacebook_connectionsInput = {
    id?: string;
    instance_id?: number | null;
    aud?: string | null;
    email: string;
    password: string;
    email_confirmed_at?: Date | string | null;
    invited_at?: Date | string | null;
    confirmation_token?: string | null;
    confirmation_sent_at?: Date | string | null;
    recovery_token?: string | null;
    recovery_sent_at?: Date | string | null;
    email_change_token_new?: string | null;
    email_change?: string | null;
    email_change_sent_at?: Date | string | null;
    last_sign_in_at?: Date | string | null;
    raw_app_meta_data?: NullableJsonNullValueInput | InputJsonValue;
    raw_user_meta_data?: NullableJsonNullValueInput | InputJsonValue;
    is_super_admin?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    phone?: string | null;
    phone_confirmed_at?: Date | string | null;
    phone_change?: string | null;
    phone_change_token?: string | null;
    phone_change_sent_at?: Date | string | null;
    confirmed_at?: Date | string | null;
    email_change_token_current?: string | null;
    email_change_confirm_status?: number | null;
    banned_until?: Date | string | null;
    reauthentication_token?: string | null;
    reauthentication_sent_at?: Date | string | null;
    is_sso_user?: boolean;
    deleted_at?: Date | string | null;
    is_anonymous?: boolean;
    role_id: string;
    rentals?: AdAccountRentalUncheckedCreateNestedManyWithoutUserInput;
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput;
    token?: TokenUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutFacebook_connectionsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutFacebook_connectionsInput,
      UserUncheckedCreateWithoutFacebook_connectionsInput
    >;
  };

  export type FacebookFanPageCreateWithoutFacebookConnectionsInput = {
    id?: string;
    page_name: string;
    page_category: string;
    page_url: string;
    page_avatar_url: string;
    follower_count: number;
    page_type: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    connection_id: string;
    facebook_page_insights?: FacebookPageInsightsCreateNestedOneWithoutFacebookFanpageInput;
  };

  export type FacebookFanPageUncheckedCreateWithoutFacebookConnectionsInput = {
    id?: string;
    page_name: string;
    page_category: string;
    page_url: string;
    page_avatar_url: string;
    follower_count: number;
    page_type: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    connection_id: string;
    facebook_page_insights?: FacebookPageInsightsUncheckedCreateNestedOneWithoutFacebookFanpageInput;
  };

  export type FacebookFanPageCreateOrConnectWithoutFacebookConnectionsInput = {
    where: FacebookFanPageWhereUniqueInput;
    create: XOR<
      FacebookFanPageCreateWithoutFacebookConnectionsInput,
      FacebookFanPageUncheckedCreateWithoutFacebookConnectionsInput
    >;
  };

  export type UserUpsertWithoutFacebook_connectionsInput = {
    update: XOR<
      UserUpdateWithoutFacebook_connectionsInput,
      UserUncheckedUpdateWithoutFacebook_connectionsInput
    >;
    create: XOR<
      UserCreateWithoutFacebook_connectionsInput,
      UserUncheckedCreateWithoutFacebook_connectionsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutFacebook_connectionsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutFacebook_connectionsInput,
      UserUncheckedUpdateWithoutFacebook_connectionsInput
    >;
  };

  export type UserUpdateWithoutFacebook_connectionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    instance_id?: NullableIntFieldUpdateOperationsInput | number | null;
    aud?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    email_confirmed_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    invited_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    confirmation_token?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    confirmation_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    recovery_token?: NullableStringFieldUpdateOperationsInput | string | null;
    recovery_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    email_change_token_new?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    email_change?: NullableStringFieldUpdateOperationsInput | string | null;
    email_change_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    last_sign_in_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    raw_app_meta_data?: NullableJsonNullValueInput | InputJsonValue;
    raw_user_meta_data?: NullableJsonNullValueInput | InputJsonValue;
    is_super_admin?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_confirmed_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    phone_change?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_change_token?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    phone_change_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    confirmed_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    email_change_token_current?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    email_change_confirm_status?:
      | NullableIntFieldUpdateOperationsInput
      | number
      | null;
    banned_until?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    reauthentication_token?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    reauthentication_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    is_sso_user?: BoolFieldUpdateOperationsInput | boolean;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    is_anonymous?: BoolFieldUpdateOperationsInput | boolean;
    rentals?: AdAccountRentalUpdateManyWithoutUserNestedInput;
    profile?: ProfileUpdateOneWithoutUserNestedInput;
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput;
    token?: TokenUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutFacebook_connectionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    instance_id?: NullableIntFieldUpdateOperationsInput | number | null;
    aud?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    email_confirmed_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    invited_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    confirmation_token?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    confirmation_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    recovery_token?: NullableStringFieldUpdateOperationsInput | string | null;
    recovery_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    email_change_token_new?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    email_change?: NullableStringFieldUpdateOperationsInput | string | null;
    email_change_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    last_sign_in_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    raw_app_meta_data?: NullableJsonNullValueInput | InputJsonValue;
    raw_user_meta_data?: NullableJsonNullValueInput | InputJsonValue;
    is_super_admin?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_confirmed_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    phone_change?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_change_token?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    phone_change_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    confirmed_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    email_change_token_current?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    email_change_confirm_status?:
      | NullableIntFieldUpdateOperationsInput
      | number
      | null;
    banned_until?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    reauthentication_token?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    reauthentication_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    is_sso_user?: BoolFieldUpdateOperationsInput | boolean;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    is_anonymous?: BoolFieldUpdateOperationsInput | boolean;
    role_id?: StringFieldUpdateOperationsInput | string;
    rentals?: AdAccountRentalUncheckedUpdateManyWithoutUserNestedInput;
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput;
    token?: TokenUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type FacebookFanPageUpsertWithoutFacebookConnectionsInput = {
    update: XOR<
      FacebookFanPageUpdateWithoutFacebookConnectionsInput,
      FacebookFanPageUncheckedUpdateWithoutFacebookConnectionsInput
    >;
    create: XOR<
      FacebookFanPageCreateWithoutFacebookConnectionsInput,
      FacebookFanPageUncheckedCreateWithoutFacebookConnectionsInput
    >;
    where?: FacebookFanPageWhereInput;
  };

  export type FacebookFanPageUpdateToOneWithWhereWithoutFacebookConnectionsInput =
    {
      where?: FacebookFanPageWhereInput;
      data: XOR<
        FacebookFanPageUpdateWithoutFacebookConnectionsInput,
        FacebookFanPageUncheckedUpdateWithoutFacebookConnectionsInput
      >;
    };

  export type FacebookFanPageUpdateWithoutFacebookConnectionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    page_name?: StringFieldUpdateOperationsInput | string;
    page_category?: StringFieldUpdateOperationsInput | string;
    page_url?: StringFieldUpdateOperationsInput | string;
    page_avatar_url?: StringFieldUpdateOperationsInput | string;
    follower_count?: IntFieldUpdateOperationsInput | number;
    page_type?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    connection_id?: StringFieldUpdateOperationsInput | string;
    facebook_page_insights?: FacebookPageInsightsUpdateOneWithoutFacebookFanpageNestedInput;
  };

  export type FacebookFanPageUncheckedUpdateWithoutFacebookConnectionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    page_name?: StringFieldUpdateOperationsInput | string;
    page_category?: StringFieldUpdateOperationsInput | string;
    page_url?: StringFieldUpdateOperationsInput | string;
    page_avatar_url?: StringFieldUpdateOperationsInput | string;
    follower_count?: IntFieldUpdateOperationsInput | number;
    page_type?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    connection_id?: StringFieldUpdateOperationsInput | string;
    facebook_page_insights?: FacebookPageInsightsUncheckedUpdateOneWithoutFacebookFanpageNestedInput;
  };

  export type FacebookFanPageCreateWithoutFacebook_page_insightsInput = {
    id?: string;
    page_name: string;
    page_category: string;
    page_url: string;
    page_avatar_url: string;
    follower_count: number;
    page_type: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    connection_id: string;
    facebookConnections?: FacebookConnectionsCreateNestedOneWithoutFacebookFanpageInput;
  };

  export type FacebookFanPageUncheckedCreateWithoutFacebook_page_insightsInput =
    {
      id?: string;
      page_name: string;
      page_category: string;
      page_url: string;
      page_avatar_url: string;
      follower_count: number;
      page_type: string;
      created_at?: Date | string;
      updated_at?: Date | string;
      connection_id: string;
      facebookConnections?: FacebookConnectionsUncheckedCreateNestedOneWithoutFacebookFanpageInput;
    };

  export type FacebookFanPageCreateOrConnectWithoutFacebook_page_insightsInput =
    {
      where: FacebookFanPageWhereUniqueInput;
      create: XOR<
        FacebookFanPageCreateWithoutFacebook_page_insightsInput,
        FacebookFanPageUncheckedCreateWithoutFacebook_page_insightsInput
      >;
    };

  export type FacebookFanPageUpsertWithoutFacebook_page_insightsInput = {
    update: XOR<
      FacebookFanPageUpdateWithoutFacebook_page_insightsInput,
      FacebookFanPageUncheckedUpdateWithoutFacebook_page_insightsInput
    >;
    create: XOR<
      FacebookFanPageCreateWithoutFacebook_page_insightsInput,
      FacebookFanPageUncheckedCreateWithoutFacebook_page_insightsInput
    >;
    where?: FacebookFanPageWhereInput;
  };

  export type FacebookFanPageUpdateToOneWithWhereWithoutFacebook_page_insightsInput =
    {
      where?: FacebookFanPageWhereInput;
      data: XOR<
        FacebookFanPageUpdateWithoutFacebook_page_insightsInput,
        FacebookFanPageUncheckedUpdateWithoutFacebook_page_insightsInput
      >;
    };

  export type FacebookFanPageUpdateWithoutFacebook_page_insightsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    page_name?: StringFieldUpdateOperationsInput | string;
    page_category?: StringFieldUpdateOperationsInput | string;
    page_url?: StringFieldUpdateOperationsInput | string;
    page_avatar_url?: StringFieldUpdateOperationsInput | string;
    follower_count?: IntFieldUpdateOperationsInput | number;
    page_type?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    connection_id?: StringFieldUpdateOperationsInput | string;
    facebookConnections?: FacebookConnectionsUpdateOneWithoutFacebookFanpageNestedInput;
  };

  export type FacebookFanPageUncheckedUpdateWithoutFacebook_page_insightsInput =
    {
      id?: StringFieldUpdateOperationsInput | string;
      page_name?: StringFieldUpdateOperationsInput | string;
      page_category?: StringFieldUpdateOperationsInput | string;
      page_url?: StringFieldUpdateOperationsInput | string;
      page_avatar_url?: StringFieldUpdateOperationsInput | string;
      follower_count?: IntFieldUpdateOperationsInput | number;
      page_type?: StringFieldUpdateOperationsInput | string;
      created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
      updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
      connection_id?: StringFieldUpdateOperationsInput | string;
      facebookConnections?: FacebookConnectionsUncheckedUpdateOneWithoutFacebookFanpageNestedInput;
    };

  export type UserCreateWithoutProfileInput = {
    id?: string;
    instance_id?: number | null;
    aud?: string | null;
    email: string;
    password: string;
    email_confirmed_at?: Date | string | null;
    invited_at?: Date | string | null;
    confirmation_token?: string | null;
    confirmation_sent_at?: Date | string | null;
    recovery_token?: string | null;
    recovery_sent_at?: Date | string | null;
    email_change_token_new?: string | null;
    email_change?: string | null;
    email_change_sent_at?: Date | string | null;
    last_sign_in_at?: Date | string | null;
    raw_app_meta_data?: NullableJsonNullValueInput | InputJsonValue;
    raw_user_meta_data?: NullableJsonNullValueInput | InputJsonValue;
    is_super_admin?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    phone?: string | null;
    phone_confirmed_at?: Date | string | null;
    phone_change?: string | null;
    phone_change_token?: string | null;
    phone_change_sent_at?: Date | string | null;
    confirmed_at?: Date | string | null;
    email_change_token_current?: string | null;
    email_change_confirm_status?: number | null;
    banned_until?: Date | string | null;
    reauthentication_token?: string | null;
    reauthentication_sent_at?: Date | string | null;
    is_sso_user?: boolean;
    deleted_at?: Date | string | null;
    is_anonymous?: boolean;
    rentals?: AdAccountRentalCreateNestedManyWithoutUserInput;
    role: RoleCreateNestedOneWithoutUsersInput;
    facebook_connections?: FacebookConnectionsCreateNestedManyWithoutUserInput;
    token?: TokenCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: string;
    instance_id?: number | null;
    aud?: string | null;
    email: string;
    password: string;
    email_confirmed_at?: Date | string | null;
    invited_at?: Date | string | null;
    confirmation_token?: string | null;
    confirmation_sent_at?: Date | string | null;
    recovery_token?: string | null;
    recovery_sent_at?: Date | string | null;
    email_change_token_new?: string | null;
    email_change?: string | null;
    email_change_sent_at?: Date | string | null;
    last_sign_in_at?: Date | string | null;
    raw_app_meta_data?: NullableJsonNullValueInput | InputJsonValue;
    raw_user_meta_data?: NullableJsonNullValueInput | InputJsonValue;
    is_super_admin?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    phone?: string | null;
    phone_confirmed_at?: Date | string | null;
    phone_change?: string | null;
    phone_change_token?: string | null;
    phone_change_sent_at?: Date | string | null;
    confirmed_at?: Date | string | null;
    email_change_token_current?: string | null;
    email_change_confirm_status?: number | null;
    banned_until?: Date | string | null;
    reauthentication_token?: string | null;
    reauthentication_sent_at?: Date | string | null;
    is_sso_user?: boolean;
    deleted_at?: Date | string | null;
    is_anonymous?: boolean;
    role_id: string;
    rentals?: AdAccountRentalUncheckedCreateNestedManyWithoutUserInput;
    facebook_connections?: FacebookConnectionsUncheckedCreateNestedManyWithoutUserInput;
    token?: TokenUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutProfileInput,
      UserUncheckedCreateWithoutProfileInput
    >;
  };

  export type UserUpsertWithoutProfileInput = {
    update: XOR<
      UserUpdateWithoutProfileInput,
      UserUncheckedUpdateWithoutProfileInput
    >;
    create: XOR<
      UserCreateWithoutProfileInput,
      UserUncheckedCreateWithoutProfileInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutProfileInput,
      UserUncheckedUpdateWithoutProfileInput
    >;
  };

  export type UserUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string;
    instance_id?: NullableIntFieldUpdateOperationsInput | number | null;
    aud?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    email_confirmed_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    invited_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    confirmation_token?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    confirmation_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    recovery_token?: NullableStringFieldUpdateOperationsInput | string | null;
    recovery_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    email_change_token_new?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    email_change?: NullableStringFieldUpdateOperationsInput | string | null;
    email_change_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    last_sign_in_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    raw_app_meta_data?: NullableJsonNullValueInput | InputJsonValue;
    raw_user_meta_data?: NullableJsonNullValueInput | InputJsonValue;
    is_super_admin?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_confirmed_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    phone_change?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_change_token?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    phone_change_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    confirmed_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    email_change_token_current?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    email_change_confirm_status?:
      | NullableIntFieldUpdateOperationsInput
      | number
      | null;
    banned_until?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    reauthentication_token?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    reauthentication_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    is_sso_user?: BoolFieldUpdateOperationsInput | boolean;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    is_anonymous?: BoolFieldUpdateOperationsInput | boolean;
    rentals?: AdAccountRentalUpdateManyWithoutUserNestedInput;
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput;
    facebook_connections?: FacebookConnectionsUpdateManyWithoutUserNestedInput;
    token?: TokenUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string;
    instance_id?: NullableIntFieldUpdateOperationsInput | number | null;
    aud?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    email_confirmed_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    invited_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    confirmation_token?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    confirmation_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    recovery_token?: NullableStringFieldUpdateOperationsInput | string | null;
    recovery_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    email_change_token_new?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    email_change?: NullableStringFieldUpdateOperationsInput | string | null;
    email_change_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    last_sign_in_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    raw_app_meta_data?: NullableJsonNullValueInput | InputJsonValue;
    raw_user_meta_data?: NullableJsonNullValueInput | InputJsonValue;
    is_super_admin?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_confirmed_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    phone_change?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_change_token?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    phone_change_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    confirmed_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    email_change_token_current?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    email_change_confirm_status?:
      | NullableIntFieldUpdateOperationsInput
      | number
      | null;
    banned_until?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    reauthentication_token?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    reauthentication_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    is_sso_user?: BoolFieldUpdateOperationsInput | boolean;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    is_anonymous?: BoolFieldUpdateOperationsInput | boolean;
    role_id?: StringFieldUpdateOperationsInput | string;
    rentals?: AdAccountRentalUncheckedUpdateManyWithoutUserNestedInput;
    facebook_connections?: FacebookConnectionsUncheckedUpdateManyWithoutUserNestedInput;
    token?: TokenUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateWithoutRentalsInput = {
    id?: string;
    instance_id?: number | null;
    aud?: string | null;
    email: string;
    password: string;
    email_confirmed_at?: Date | string | null;
    invited_at?: Date | string | null;
    confirmation_token?: string | null;
    confirmation_sent_at?: Date | string | null;
    recovery_token?: string | null;
    recovery_sent_at?: Date | string | null;
    email_change_token_new?: string | null;
    email_change?: string | null;
    email_change_sent_at?: Date | string | null;
    last_sign_in_at?: Date | string | null;
    raw_app_meta_data?: NullableJsonNullValueInput | InputJsonValue;
    raw_user_meta_data?: NullableJsonNullValueInput | InputJsonValue;
    is_super_admin?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    phone?: string | null;
    phone_confirmed_at?: Date | string | null;
    phone_change?: string | null;
    phone_change_token?: string | null;
    phone_change_sent_at?: Date | string | null;
    confirmed_at?: Date | string | null;
    email_change_token_current?: string | null;
    email_change_confirm_status?: number | null;
    banned_until?: Date | string | null;
    reauthentication_token?: string | null;
    reauthentication_sent_at?: Date | string | null;
    is_sso_user?: boolean;
    deleted_at?: Date | string | null;
    is_anonymous?: boolean;
    profile?: ProfileCreateNestedOneWithoutUserInput;
    role: RoleCreateNestedOneWithoutUsersInput;
    facebook_connections?: FacebookConnectionsCreateNestedManyWithoutUserInput;
    token?: TokenCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutRentalsInput = {
    id?: string;
    instance_id?: number | null;
    aud?: string | null;
    email: string;
    password: string;
    email_confirmed_at?: Date | string | null;
    invited_at?: Date | string | null;
    confirmation_token?: string | null;
    confirmation_sent_at?: Date | string | null;
    recovery_token?: string | null;
    recovery_sent_at?: Date | string | null;
    email_change_token_new?: string | null;
    email_change?: string | null;
    email_change_sent_at?: Date | string | null;
    last_sign_in_at?: Date | string | null;
    raw_app_meta_data?: NullableJsonNullValueInput | InputJsonValue;
    raw_user_meta_data?: NullableJsonNullValueInput | InputJsonValue;
    is_super_admin?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    phone?: string | null;
    phone_confirmed_at?: Date | string | null;
    phone_change?: string | null;
    phone_change_token?: string | null;
    phone_change_sent_at?: Date | string | null;
    confirmed_at?: Date | string | null;
    email_change_token_current?: string | null;
    email_change_confirm_status?: number | null;
    banned_until?: Date | string | null;
    reauthentication_token?: string | null;
    reauthentication_sent_at?: Date | string | null;
    is_sso_user?: boolean;
    deleted_at?: Date | string | null;
    is_anonymous?: boolean;
    role_id: string;
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput;
    facebook_connections?: FacebookConnectionsUncheckedCreateNestedManyWithoutUserInput;
    token?: TokenUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutRentalsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutRentalsInput,
      UserUncheckedCreateWithoutRentalsInput
    >;
  };

  export type SystemAdAccountCreateWithoutRentalsInput = {
    account_id: string;
    name: string;
    status: string;
    daily_budget: number;
    total_spent: number;
    available: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type SystemAdAccountUncheckedCreateWithoutRentalsInput = {
    id?: number;
    account_id: string;
    name: string;
    status: string;
    daily_budget: number;
    total_spent: number;
    available: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type SystemAdAccountCreateOrConnectWithoutRentalsInput = {
    where: SystemAdAccountWhereUniqueInput;
    create: XOR<
      SystemAdAccountCreateWithoutRentalsInput,
      SystemAdAccountUncheckedCreateWithoutRentalsInput
    >;
  };

  export type UserUpsertWithoutRentalsInput = {
    update: XOR<
      UserUpdateWithoutRentalsInput,
      UserUncheckedUpdateWithoutRentalsInput
    >;
    create: XOR<
      UserCreateWithoutRentalsInput,
      UserUncheckedCreateWithoutRentalsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutRentalsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutRentalsInput,
      UserUncheckedUpdateWithoutRentalsInput
    >;
  };

  export type UserUpdateWithoutRentalsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    instance_id?: NullableIntFieldUpdateOperationsInput | number | null;
    aud?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    email_confirmed_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    invited_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    confirmation_token?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    confirmation_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    recovery_token?: NullableStringFieldUpdateOperationsInput | string | null;
    recovery_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    email_change_token_new?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    email_change?: NullableStringFieldUpdateOperationsInput | string | null;
    email_change_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    last_sign_in_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    raw_app_meta_data?: NullableJsonNullValueInput | InputJsonValue;
    raw_user_meta_data?: NullableJsonNullValueInput | InputJsonValue;
    is_super_admin?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_confirmed_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    phone_change?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_change_token?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    phone_change_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    confirmed_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    email_change_token_current?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    email_change_confirm_status?:
      | NullableIntFieldUpdateOperationsInput
      | number
      | null;
    banned_until?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    reauthentication_token?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    reauthentication_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    is_sso_user?: BoolFieldUpdateOperationsInput | boolean;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    is_anonymous?: BoolFieldUpdateOperationsInput | boolean;
    profile?: ProfileUpdateOneWithoutUserNestedInput;
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput;
    facebook_connections?: FacebookConnectionsUpdateManyWithoutUserNestedInput;
    token?: TokenUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutRentalsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    instance_id?: NullableIntFieldUpdateOperationsInput | number | null;
    aud?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    email_confirmed_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    invited_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    confirmation_token?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    confirmation_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    recovery_token?: NullableStringFieldUpdateOperationsInput | string | null;
    recovery_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    email_change_token_new?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    email_change?: NullableStringFieldUpdateOperationsInput | string | null;
    email_change_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    last_sign_in_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    raw_app_meta_data?: NullableJsonNullValueInput | InputJsonValue;
    raw_user_meta_data?: NullableJsonNullValueInput | InputJsonValue;
    is_super_admin?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_confirmed_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    phone_change?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_change_token?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    phone_change_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    confirmed_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    email_change_token_current?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    email_change_confirm_status?:
      | NullableIntFieldUpdateOperationsInput
      | number
      | null;
    banned_until?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    reauthentication_token?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    reauthentication_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    is_sso_user?: BoolFieldUpdateOperationsInput | boolean;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    is_anonymous?: BoolFieldUpdateOperationsInput | boolean;
    role_id?: StringFieldUpdateOperationsInput | string;
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput;
    facebook_connections?: FacebookConnectionsUncheckedUpdateManyWithoutUserNestedInput;
    token?: TokenUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type SystemAdAccountUpsertWithoutRentalsInput = {
    update: XOR<
      SystemAdAccountUpdateWithoutRentalsInput,
      SystemAdAccountUncheckedUpdateWithoutRentalsInput
    >;
    create: XOR<
      SystemAdAccountCreateWithoutRentalsInput,
      SystemAdAccountUncheckedCreateWithoutRentalsInput
    >;
    where?: SystemAdAccountWhereInput;
  };

  export type SystemAdAccountUpdateToOneWithWhereWithoutRentalsInput = {
    where?: SystemAdAccountWhereInput;
    data: XOR<
      SystemAdAccountUpdateWithoutRentalsInput,
      SystemAdAccountUncheckedUpdateWithoutRentalsInput
    >;
  };

  export type SystemAdAccountUpdateWithoutRentalsInput = {
    account_id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    daily_budget?: FloatFieldUpdateOperationsInput | number;
    total_spent?: FloatFieldUpdateOperationsInput | number;
    available?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SystemAdAccountUncheckedUpdateWithoutRentalsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    account_id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    daily_budget?: FloatFieldUpdateOperationsInput | number;
    total_spent?: FloatFieldUpdateOperationsInput | number;
    available?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AdAccountRentalCreateWithoutAccountInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: UserCreateNestedOneWithoutRentalsInput;
  };

  export type AdAccountRentalUncheckedCreateWithoutAccountInput = {
    id?: string;
    user_id: string;
    start_date: Date | string;
    end_date: Date | string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type AdAccountRentalCreateOrConnectWithoutAccountInput = {
    where: AdAccountRentalWhereUniqueInput;
    create: XOR<
      AdAccountRentalCreateWithoutAccountInput,
      AdAccountRentalUncheckedCreateWithoutAccountInput
    >;
  };

  export type AdAccountRentalCreateManyAccountInputEnvelope = {
    data:
      | AdAccountRentalCreateManyAccountInput
      | AdAccountRentalCreateManyAccountInput[];
    skipDuplicates?: boolean;
  };

  export type AdAccountRentalUpsertWithWhereUniqueWithoutAccountInput = {
    where: AdAccountRentalWhereUniqueInput;
    update: XOR<
      AdAccountRentalUpdateWithoutAccountInput,
      AdAccountRentalUncheckedUpdateWithoutAccountInput
    >;
    create: XOR<
      AdAccountRentalCreateWithoutAccountInput,
      AdAccountRentalUncheckedCreateWithoutAccountInput
    >;
  };

  export type AdAccountRentalUpdateWithWhereUniqueWithoutAccountInput = {
    where: AdAccountRentalWhereUniqueInput;
    data: XOR<
      AdAccountRentalUpdateWithoutAccountInput,
      AdAccountRentalUncheckedUpdateWithoutAccountInput
    >;
  };

  export type AdAccountRentalUpdateManyWithWhereWithoutAccountInput = {
    where: AdAccountRentalScalarWhereInput;
    data: XOR<
      AdAccountRentalUpdateManyMutationInput,
      AdAccountRentalUncheckedUpdateManyWithoutAccountInput
    >;
  };

  export type UserCreateManyRoleInput = {
    id?: string;
    instance_id?: number | null;
    aud?: string | null;
    email: string;
    password: string;
    email_confirmed_at?: Date | string | null;
    invited_at?: Date | string | null;
    confirmation_token?: string | null;
    confirmation_sent_at?: Date | string | null;
    recovery_token?: string | null;
    recovery_sent_at?: Date | string | null;
    email_change_token_new?: string | null;
    email_change?: string | null;
    email_change_sent_at?: Date | string | null;
    last_sign_in_at?: Date | string | null;
    raw_app_meta_data?: NullableJsonNullValueInput | InputJsonValue;
    raw_user_meta_data?: NullableJsonNullValueInput | InputJsonValue;
    is_super_admin?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    phone?: string | null;
    phone_confirmed_at?: Date | string | null;
    phone_change?: string | null;
    phone_change_token?: string | null;
    phone_change_sent_at?: Date | string | null;
    confirmed_at?: Date | string | null;
    email_change_token_current?: string | null;
    email_change_confirm_status?: number | null;
    banned_until?: Date | string | null;
    reauthentication_token?: string | null;
    reauthentication_sent_at?: Date | string | null;
    is_sso_user?: boolean;
    deleted_at?: Date | string | null;
    is_anonymous?: boolean;
  };

  export type UserUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    instance_id?: NullableIntFieldUpdateOperationsInput | number | null;
    aud?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    email_confirmed_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    invited_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    confirmation_token?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    confirmation_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    recovery_token?: NullableStringFieldUpdateOperationsInput | string | null;
    recovery_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    email_change_token_new?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    email_change?: NullableStringFieldUpdateOperationsInput | string | null;
    email_change_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    last_sign_in_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    raw_app_meta_data?: NullableJsonNullValueInput | InputJsonValue;
    raw_user_meta_data?: NullableJsonNullValueInput | InputJsonValue;
    is_super_admin?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_confirmed_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    phone_change?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_change_token?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    phone_change_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    confirmed_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    email_change_token_current?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    email_change_confirm_status?:
      | NullableIntFieldUpdateOperationsInput
      | number
      | null;
    banned_until?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    reauthentication_token?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    reauthentication_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    is_sso_user?: BoolFieldUpdateOperationsInput | boolean;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    is_anonymous?: BoolFieldUpdateOperationsInput | boolean;
    rentals?: AdAccountRentalUpdateManyWithoutUserNestedInput;
    profile?: ProfileUpdateOneWithoutUserNestedInput;
    facebook_connections?: FacebookConnectionsUpdateManyWithoutUserNestedInput;
    token?: TokenUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    instance_id?: NullableIntFieldUpdateOperationsInput | number | null;
    aud?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    email_confirmed_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    invited_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    confirmation_token?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    confirmation_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    recovery_token?: NullableStringFieldUpdateOperationsInput | string | null;
    recovery_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    email_change_token_new?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    email_change?: NullableStringFieldUpdateOperationsInput | string | null;
    email_change_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    last_sign_in_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    raw_app_meta_data?: NullableJsonNullValueInput | InputJsonValue;
    raw_user_meta_data?: NullableJsonNullValueInput | InputJsonValue;
    is_super_admin?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_confirmed_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    phone_change?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_change_token?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    phone_change_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    confirmed_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    email_change_token_current?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    email_change_confirm_status?:
      | NullableIntFieldUpdateOperationsInput
      | number
      | null;
    banned_until?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    reauthentication_token?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    reauthentication_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    is_sso_user?: BoolFieldUpdateOperationsInput | boolean;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    is_anonymous?: BoolFieldUpdateOperationsInput | boolean;
    rentals?: AdAccountRentalUncheckedUpdateManyWithoutUserNestedInput;
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput;
    facebook_connections?: FacebookConnectionsUncheckedUpdateManyWithoutUserNestedInput;
    token?: TokenUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    instance_id?: NullableIntFieldUpdateOperationsInput | number | null;
    aud?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    email_confirmed_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    invited_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    confirmation_token?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    confirmation_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    recovery_token?: NullableStringFieldUpdateOperationsInput | string | null;
    recovery_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    email_change_token_new?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    email_change?: NullableStringFieldUpdateOperationsInput | string | null;
    email_change_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    last_sign_in_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    raw_app_meta_data?: NullableJsonNullValueInput | InputJsonValue;
    raw_user_meta_data?: NullableJsonNullValueInput | InputJsonValue;
    is_super_admin?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_confirmed_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    phone_change?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_change_token?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    phone_change_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    confirmed_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    email_change_token_current?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    email_change_confirm_status?:
      | NullableIntFieldUpdateOperationsInput
      | number
      | null;
    banned_until?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    reauthentication_token?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    reauthentication_sent_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    is_sso_user?: BoolFieldUpdateOperationsInput | boolean;
    deleted_at?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    is_anonymous?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type AdAccountRentalCreateManyUserInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    account_id: number;
  };

  export type FacebookConnectionsCreateManyUserInput = {
    id?: string;
    page_id?: string;
    access_token?: FacebookConnectionsCreateaccess_tokenInput | string[];
    status?: string;
    permissions?: FacebookConnectionsCreatepermissionsInput | string[];
    last_sync?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    facebook_fanpage_id: string;
    role_id?: string | null;
  };

  export type TokenCreateManyUserInput = {
    id?: string;
    user_token?: TokenCreateuser_tokenInput | string[];
    access_token?: TokenCreateaccess_tokenInput | string[];
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type AdAccountRentalUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    account?: SystemAdAccountUpdateOneRequiredWithoutRentalsNestedInput;
  };

  export type AdAccountRentalUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    account_id?: IntFieldUpdateOperationsInput | number;
  };

  export type AdAccountRentalUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    account_id?: IntFieldUpdateOperationsInput | number;
  };

  export type FacebookConnectionsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    page_id?: StringFieldUpdateOperationsInput | string;
    access_token?: FacebookConnectionsUpdateaccess_tokenInput | string[];
    status?: StringFieldUpdateOperationsInput | string;
    permissions?: FacebookConnectionsUpdatepermissionsInput | string[];
    last_sync?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    role_id?: NullableStringFieldUpdateOperationsInput | string | null;
    facebookFanpage?: FacebookFanPageUpdateOneRequiredWithoutFacebookConnectionsNestedInput;
  };

  export type FacebookConnectionsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    page_id?: StringFieldUpdateOperationsInput | string;
    access_token?: FacebookConnectionsUpdateaccess_tokenInput | string[];
    status?: StringFieldUpdateOperationsInput | string;
    permissions?: FacebookConnectionsUpdatepermissionsInput | string[];
    last_sync?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    facebook_fanpage_id?: StringFieldUpdateOperationsInput | string;
    role_id?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type FacebookConnectionsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    page_id?: StringFieldUpdateOperationsInput | string;
    access_token?: FacebookConnectionsUpdateaccess_tokenInput | string[];
    status?: StringFieldUpdateOperationsInput | string;
    permissions?: FacebookConnectionsUpdatepermissionsInput | string[];
    last_sync?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    facebook_fanpage_id?: StringFieldUpdateOperationsInput | string;
    role_id?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type TokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_token?: TokenUpdateuser_tokenInput | string[];
    access_token?: TokenUpdateaccess_tokenInput | string[];
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_token?: TokenUpdateuser_tokenInput | string[];
    access_token?: TokenUpdateaccess_tokenInput | string[];
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_token?: TokenUpdateuser_tokenInput | string[];
    access_token?: TokenUpdateaccess_tokenInput | string[];
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AdAccountRentalCreateManyAccountInput = {
    id?: string;
    user_id: string;
    start_date: Date | string;
    end_date: Date | string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type AdAccountRentalUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutRentalsNestedInput;
  };

  export type AdAccountRentalUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AdAccountRentalUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
