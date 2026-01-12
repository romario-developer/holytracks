
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Ministry
 * 
 */
export type Ministry = $Result.DefaultSelection<Prisma.$MinistryPayload>
/**
 * Model MinistryMember
 * 
 */
export type MinistryMember = $Result.DefaultSelection<Prisma.$MinistryMemberPayload>
/**
 * Model Song
 * 
 */
export type Song = $Result.DefaultSelection<Prisma.$SongPayload>
/**
 * Model Arrangement
 * 
 */
export type Arrangement = $Result.DefaultSelection<Prisma.$ArrangementPayload>
/**
 * Model Setlist
 * 
 */
export type Setlist = $Result.DefaultSelection<Prisma.$SetlistPayload>
/**
 * Model SetlistItem
 * 
 */
export type SetlistItem = $Result.DefaultSelection<Prisma.$SetlistItemPayload>
/**
 * Model EventLog
 * 
 */
export type EventLog = $Result.DefaultSelection<Prisma.$EventLogPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.ministry`: Exposes CRUD operations for the **Ministry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ministries
    * const ministries = await prisma.ministry.findMany()
    * ```
    */
  get ministry(): Prisma.MinistryDelegate<ExtArgs>;

  /**
   * `prisma.ministryMember`: Exposes CRUD operations for the **MinistryMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MinistryMembers
    * const ministryMembers = await prisma.ministryMember.findMany()
    * ```
    */
  get ministryMember(): Prisma.MinistryMemberDelegate<ExtArgs>;

  /**
   * `prisma.song`: Exposes CRUD operations for the **Song** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Songs
    * const songs = await prisma.song.findMany()
    * ```
    */
  get song(): Prisma.SongDelegate<ExtArgs>;

  /**
   * `prisma.arrangement`: Exposes CRUD operations for the **Arrangement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Arrangements
    * const arrangements = await prisma.arrangement.findMany()
    * ```
    */
  get arrangement(): Prisma.ArrangementDelegate<ExtArgs>;

  /**
   * `prisma.setlist`: Exposes CRUD operations for the **Setlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Setlists
    * const setlists = await prisma.setlist.findMany()
    * ```
    */
  get setlist(): Prisma.SetlistDelegate<ExtArgs>;

  /**
   * `prisma.setlistItem`: Exposes CRUD operations for the **SetlistItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SetlistItems
    * const setlistItems = await prisma.setlistItem.findMany()
    * ```
    */
  get setlistItem(): Prisma.SetlistItemDelegate<ExtArgs>;

  /**
   * `prisma.eventLog`: Exposes CRUD operations for the **EventLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventLogs
    * const eventLogs = await prisma.eventLog.findMany()
    * ```
    */
  get eventLog(): Prisma.EventLogDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.12.0
   * Query Engine version: 473ed3124229e22d881cb7addf559799debae1ab
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Ministry: 'Ministry',
    MinistryMember: 'MinistryMember',
    Song: 'Song',
    Arrangement: 'Arrangement',
    Setlist: 'Setlist',
    SetlistItem: 'SetlistItem',
    EventLog: 'EventLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'ministry' | 'ministryMember' | 'song' | 'arrangement' | 'setlist' | 'setlistItem' | 'eventLog'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Ministry: {
        payload: Prisma.$MinistryPayload<ExtArgs>
        fields: Prisma.MinistryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MinistryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MinistryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MinistryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MinistryPayload>
          }
          findFirst: {
            args: Prisma.MinistryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MinistryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MinistryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MinistryPayload>
          }
          findMany: {
            args: Prisma.MinistryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MinistryPayload>[]
          }
          create: {
            args: Prisma.MinistryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MinistryPayload>
          }
          createMany: {
            args: Prisma.MinistryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MinistryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MinistryPayload>
          }
          update: {
            args: Prisma.MinistryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MinistryPayload>
          }
          deleteMany: {
            args: Prisma.MinistryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MinistryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MinistryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MinistryPayload>
          }
          aggregate: {
            args: Prisma.MinistryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMinistry>
          }
          groupBy: {
            args: Prisma.MinistryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MinistryGroupByOutputType>[]
          }
          count: {
            args: Prisma.MinistryCountArgs<ExtArgs>,
            result: $Utils.Optional<MinistryCountAggregateOutputType> | number
          }
        }
      }
      MinistryMember: {
        payload: Prisma.$MinistryMemberPayload<ExtArgs>
        fields: Prisma.MinistryMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MinistryMemberFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MinistryMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MinistryMemberFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MinistryMemberPayload>
          }
          findFirst: {
            args: Prisma.MinistryMemberFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MinistryMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MinistryMemberFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MinistryMemberPayload>
          }
          findMany: {
            args: Prisma.MinistryMemberFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MinistryMemberPayload>[]
          }
          create: {
            args: Prisma.MinistryMemberCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MinistryMemberPayload>
          }
          createMany: {
            args: Prisma.MinistryMemberCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MinistryMemberDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MinistryMemberPayload>
          }
          update: {
            args: Prisma.MinistryMemberUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MinistryMemberPayload>
          }
          deleteMany: {
            args: Prisma.MinistryMemberDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MinistryMemberUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MinistryMemberUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MinistryMemberPayload>
          }
          aggregate: {
            args: Prisma.MinistryMemberAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMinistryMember>
          }
          groupBy: {
            args: Prisma.MinistryMemberGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MinistryMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.MinistryMemberCountArgs<ExtArgs>,
            result: $Utils.Optional<MinistryMemberCountAggregateOutputType> | number
          }
        }
      }
      Song: {
        payload: Prisma.$SongPayload<ExtArgs>
        fields: Prisma.SongFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SongFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SongFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          findFirst: {
            args: Prisma.SongFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SongFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          findMany: {
            args: Prisma.SongFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongPayload>[]
          }
          create: {
            args: Prisma.SongCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          createMany: {
            args: Prisma.SongCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SongDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          update: {
            args: Prisma.SongUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          deleteMany: {
            args: Prisma.SongDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SongUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SongUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SongPayload>
          }
          aggregate: {
            args: Prisma.SongAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSong>
          }
          groupBy: {
            args: Prisma.SongGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SongGroupByOutputType>[]
          }
          count: {
            args: Prisma.SongCountArgs<ExtArgs>,
            result: $Utils.Optional<SongCountAggregateOutputType> | number
          }
        }
      }
      Arrangement: {
        payload: Prisma.$ArrangementPayload<ExtArgs>
        fields: Prisma.ArrangementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArrangementFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArrangementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArrangementFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArrangementPayload>
          }
          findFirst: {
            args: Prisma.ArrangementFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArrangementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArrangementFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArrangementPayload>
          }
          findMany: {
            args: Prisma.ArrangementFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArrangementPayload>[]
          }
          create: {
            args: Prisma.ArrangementCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArrangementPayload>
          }
          createMany: {
            args: Prisma.ArrangementCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ArrangementDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArrangementPayload>
          }
          update: {
            args: Prisma.ArrangementUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArrangementPayload>
          }
          deleteMany: {
            args: Prisma.ArrangementDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ArrangementUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ArrangementUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArrangementPayload>
          }
          aggregate: {
            args: Prisma.ArrangementAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateArrangement>
          }
          groupBy: {
            args: Prisma.ArrangementGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ArrangementGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArrangementCountArgs<ExtArgs>,
            result: $Utils.Optional<ArrangementCountAggregateOutputType> | number
          }
        }
      }
      Setlist: {
        payload: Prisma.$SetlistPayload<ExtArgs>
        fields: Prisma.SetlistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SetlistFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SetlistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SetlistFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SetlistPayload>
          }
          findFirst: {
            args: Prisma.SetlistFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SetlistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SetlistFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SetlistPayload>
          }
          findMany: {
            args: Prisma.SetlistFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SetlistPayload>[]
          }
          create: {
            args: Prisma.SetlistCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SetlistPayload>
          }
          createMany: {
            args: Prisma.SetlistCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SetlistDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SetlistPayload>
          }
          update: {
            args: Prisma.SetlistUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SetlistPayload>
          }
          deleteMany: {
            args: Prisma.SetlistDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SetlistUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SetlistUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SetlistPayload>
          }
          aggregate: {
            args: Prisma.SetlistAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSetlist>
          }
          groupBy: {
            args: Prisma.SetlistGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SetlistGroupByOutputType>[]
          }
          count: {
            args: Prisma.SetlistCountArgs<ExtArgs>,
            result: $Utils.Optional<SetlistCountAggregateOutputType> | number
          }
        }
      }
      SetlistItem: {
        payload: Prisma.$SetlistItemPayload<ExtArgs>
        fields: Prisma.SetlistItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SetlistItemFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SetlistItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SetlistItemFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SetlistItemPayload>
          }
          findFirst: {
            args: Prisma.SetlistItemFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SetlistItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SetlistItemFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SetlistItemPayload>
          }
          findMany: {
            args: Prisma.SetlistItemFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SetlistItemPayload>[]
          }
          create: {
            args: Prisma.SetlistItemCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SetlistItemPayload>
          }
          createMany: {
            args: Prisma.SetlistItemCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SetlistItemDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SetlistItemPayload>
          }
          update: {
            args: Prisma.SetlistItemUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SetlistItemPayload>
          }
          deleteMany: {
            args: Prisma.SetlistItemDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SetlistItemUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SetlistItemUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SetlistItemPayload>
          }
          aggregate: {
            args: Prisma.SetlistItemAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSetlistItem>
          }
          groupBy: {
            args: Prisma.SetlistItemGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SetlistItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.SetlistItemCountArgs<ExtArgs>,
            result: $Utils.Optional<SetlistItemCountAggregateOutputType> | number
          }
        }
      }
      EventLog: {
        payload: Prisma.$EventLogPayload<ExtArgs>
        fields: Prisma.EventLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventLogFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventLogFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload>
          }
          findFirst: {
            args: Prisma.EventLogFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventLogFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload>
          }
          findMany: {
            args: Prisma.EventLogFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload>[]
          }
          create: {
            args: Prisma.EventLogCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload>
          }
          createMany: {
            args: Prisma.EventLogCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EventLogDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload>
          }
          update: {
            args: Prisma.EventLogUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload>
          }
          deleteMany: {
            args: Prisma.EventLogDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EventLogUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EventLogUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload>
          }
          aggregate: {
            args: Prisma.EventLogAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEventLog>
          }
          groupBy: {
            args: Prisma.EventLogGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EventLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventLogCountArgs<ExtArgs>,
            result: $Utils.Optional<EventLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
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
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    ministries: number
    memberships: number
    setlists: number
    events: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ministries?: boolean | UserCountOutputTypeCountMinistriesArgs
    memberships?: boolean | UserCountOutputTypeCountMembershipsArgs
    setlists?: boolean | UserCountOutputTypeCountSetlistsArgs
    events?: boolean | UserCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMinistriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MinistryWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MinistryMemberWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSetlistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SetlistWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventLogWhereInput
  }



  /**
   * Count Type MinistryCountOutputType
   */

  export type MinistryCountOutputType = {
    members: number
    setlists: number
    events: number
  }

  export type MinistryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | MinistryCountOutputTypeCountMembersArgs
    setlists?: boolean | MinistryCountOutputTypeCountSetlistsArgs
    events?: boolean | MinistryCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes

  /**
   * MinistryCountOutputType without action
   */
  export type MinistryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MinistryCountOutputType
     */
    select?: MinistryCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * MinistryCountOutputType without action
   */
  export type MinistryCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MinistryMemberWhereInput
  }


  /**
   * MinistryCountOutputType without action
   */
  export type MinistryCountOutputTypeCountSetlistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SetlistWhereInput
  }


  /**
   * MinistryCountOutputType without action
   */
  export type MinistryCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventLogWhereInput
  }



  /**
   * Count Type SongCountOutputType
   */

  export type SongCountOutputType = {
    arrangements: number
  }

  export type SongCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    arrangements?: boolean | SongCountOutputTypeCountArrangementsArgs
  }

  // Custom InputTypes

  /**
   * SongCountOutputType without action
   */
  export type SongCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongCountOutputType
     */
    select?: SongCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * SongCountOutputType without action
   */
  export type SongCountOutputTypeCountArrangementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArrangementWhereInput
  }



  /**
   * Count Type ArrangementCountOutputType
   */

  export type ArrangementCountOutputType = {
    items: number
  }

  export type ArrangementCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | ArrangementCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes

  /**
   * ArrangementCountOutputType without action
   */
  export type ArrangementCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArrangementCountOutputType
     */
    select?: ArrangementCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ArrangementCountOutputType without action
   */
  export type ArrangementCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SetlistItemWhereInput
  }



  /**
   * Count Type SetlistCountOutputType
   */

  export type SetlistCountOutputType = {
    items: number
    events: number
  }

  export type SetlistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | SetlistCountOutputTypeCountItemsArgs
    events?: boolean | SetlistCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes

  /**
   * SetlistCountOutputType without action
   */
  export type SetlistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetlistCountOutputType
     */
    select?: SetlistCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * SetlistCountOutputType without action
   */
  export type SetlistCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SetlistItemWhereInput
  }


  /**
   * SetlistCountOutputType without action
   */
  export type SetlistCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventLogWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    name: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    name: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    createdAt?: boolean
    ministries?: boolean | User$ministriesArgs<ExtArgs>
    memberships?: boolean | User$membershipsArgs<ExtArgs>
    setlists?: boolean | User$setlistsArgs<ExtArgs>
    events?: boolean | User$eventsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ministries?: boolean | User$ministriesArgs<ExtArgs>
    memberships?: boolean | User$membershipsArgs<ExtArgs>
    setlists?: boolean | User$setlistsArgs<ExtArgs>
    events?: boolean | User$eventsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      ministries: Prisma.$MinistryPayload<ExtArgs>[]
      memberships: Prisma.$MinistryMemberPayload<ExtArgs>[]
      setlists: Prisma.$SetlistPayload<ExtArgs>[]
      events: Prisma.$EventLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      name: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
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
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
    >

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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

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
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    ministries<T extends User$ministriesArgs<ExtArgs> = {}>(args?: Subset<T, User$ministriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MinistryPayload<ExtArgs>, T, 'findMany'> | Null>;

    memberships<T extends User$membershipsArgs<ExtArgs> = {}>(args?: Subset<T, User$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MinistryMemberPayload<ExtArgs>, T, 'findMany'> | Null>;

    setlists<T extends User$setlistsArgs<ExtArgs> = {}>(args?: Subset<T, User$setlistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SetlistPayload<ExtArgs>, T, 'findMany'> | Null>;

    events<T extends User$eventsArgs<ExtArgs> = {}>(args?: Subset<T, User$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
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
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.ministries
   */
  export type User$ministriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ministry
     */
    select?: MinistrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MinistryInclude<ExtArgs> | null
    where?: MinistryWhereInput
    orderBy?: MinistryOrderByWithRelationInput | MinistryOrderByWithRelationInput[]
    cursor?: MinistryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MinistryScalarFieldEnum | MinistryScalarFieldEnum[]
  }


  /**
   * User.memberships
   */
  export type User$membershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MinistryMember
     */
    select?: MinistryMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MinistryMemberInclude<ExtArgs> | null
    where?: MinistryMemberWhereInput
    orderBy?: MinistryMemberOrderByWithRelationInput | MinistryMemberOrderByWithRelationInput[]
    cursor?: MinistryMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MinistryMemberScalarFieldEnum | MinistryMemberScalarFieldEnum[]
  }


  /**
   * User.setlists
   */
  export type User$setlistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setlist
     */
    select?: SetlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SetlistInclude<ExtArgs> | null
    where?: SetlistWhereInput
    orderBy?: SetlistOrderByWithRelationInput | SetlistOrderByWithRelationInput[]
    cursor?: SetlistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SetlistScalarFieldEnum | SetlistScalarFieldEnum[]
  }


  /**
   * User.events
   */
  export type User$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventLogInclude<ExtArgs> | null
    where?: EventLogWhereInput
    orderBy?: EventLogOrderByWithRelationInput | EventLogOrderByWithRelationInput[]
    cursor?: EventLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventLogScalarFieldEnum | EventLogScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Ministry
   */

  export type AggregateMinistry = {
    _count: MinistryCountAggregateOutputType | null
    _min: MinistryMinAggregateOutputType | null
    _max: MinistryMaxAggregateOutputType | null
  }

  export type MinistryMinAggregateOutputType = {
    id: string | null
    name: string | null
    ownerUserId: string | null
    createdAt: Date | null
  }

  export type MinistryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    ownerUserId: string | null
    createdAt: Date | null
  }

  export type MinistryCountAggregateOutputType = {
    id: number
    name: number
    ownerUserId: number
    createdAt: number
    _all: number
  }


  export type MinistryMinAggregateInputType = {
    id?: true
    name?: true
    ownerUserId?: true
    createdAt?: true
  }

  export type MinistryMaxAggregateInputType = {
    id?: true
    name?: true
    ownerUserId?: true
    createdAt?: true
  }

  export type MinistryCountAggregateInputType = {
    id?: true
    name?: true
    ownerUserId?: true
    createdAt?: true
    _all?: true
  }

  export type MinistryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ministry to aggregate.
     */
    where?: MinistryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ministries to fetch.
     */
    orderBy?: MinistryOrderByWithRelationInput | MinistryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MinistryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ministries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ministries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ministries
    **/
    _count?: true | MinistryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MinistryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MinistryMaxAggregateInputType
  }

  export type GetMinistryAggregateType<T extends MinistryAggregateArgs> = {
        [P in keyof T & keyof AggregateMinistry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMinistry[P]>
      : GetScalarType<T[P], AggregateMinistry[P]>
  }




  export type MinistryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MinistryWhereInput
    orderBy?: MinistryOrderByWithAggregationInput | MinistryOrderByWithAggregationInput[]
    by: MinistryScalarFieldEnum[] | MinistryScalarFieldEnum
    having?: MinistryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MinistryCountAggregateInputType | true
    _min?: MinistryMinAggregateInputType
    _max?: MinistryMaxAggregateInputType
  }

  export type MinistryGroupByOutputType = {
    id: string
    name: string
    ownerUserId: string
    createdAt: Date
    _count: MinistryCountAggregateOutputType | null
    _min: MinistryMinAggregateOutputType | null
    _max: MinistryMaxAggregateOutputType | null
  }

  type GetMinistryGroupByPayload<T extends MinistryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MinistryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MinistryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MinistryGroupByOutputType[P]>
            : GetScalarType<T[P], MinistryGroupByOutputType[P]>
        }
      >
    >


  export type MinistrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ownerUserId?: boolean
    createdAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Ministry$membersArgs<ExtArgs>
    setlists?: boolean | Ministry$setlistsArgs<ExtArgs>
    events?: boolean | Ministry$eventsArgs<ExtArgs>
    _count?: boolean | MinistryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ministry"]>

  export type MinistrySelectScalar = {
    id?: boolean
    name?: boolean
    ownerUserId?: boolean
    createdAt?: boolean
  }

  export type MinistryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Ministry$membersArgs<ExtArgs>
    setlists?: boolean | Ministry$setlistsArgs<ExtArgs>
    events?: boolean | Ministry$eventsArgs<ExtArgs>
    _count?: boolean | MinistryCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $MinistryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ministry"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      members: Prisma.$MinistryMemberPayload<ExtArgs>[]
      setlists: Prisma.$SetlistPayload<ExtArgs>[]
      events: Prisma.$EventLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      ownerUserId: string
      createdAt: Date
    }, ExtArgs["result"]["ministry"]>
    composites: {}
  }


  type MinistryGetPayload<S extends boolean | null | undefined | MinistryDefaultArgs> = $Result.GetResult<Prisma.$MinistryPayload, S>

  type MinistryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MinistryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MinistryCountAggregateInputType | true
    }

  export interface MinistryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ministry'], meta: { name: 'Ministry' } }
    /**
     * Find zero or one Ministry that matches the filter.
     * @param {MinistryFindUniqueArgs} args - Arguments to find a Ministry
     * @example
     * // Get one Ministry
     * const ministry = await prisma.ministry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MinistryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MinistryFindUniqueArgs<ExtArgs>>
    ): Prisma__MinistryClient<$Result.GetResult<Prisma.$MinistryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Ministry that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MinistryFindUniqueOrThrowArgs} args - Arguments to find a Ministry
     * @example
     * // Get one Ministry
     * const ministry = await prisma.ministry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MinistryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MinistryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MinistryClient<$Result.GetResult<Prisma.$MinistryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Ministry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MinistryFindFirstArgs} args - Arguments to find a Ministry
     * @example
     * // Get one Ministry
     * const ministry = await prisma.ministry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MinistryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MinistryFindFirstArgs<ExtArgs>>
    ): Prisma__MinistryClient<$Result.GetResult<Prisma.$MinistryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Ministry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MinistryFindFirstOrThrowArgs} args - Arguments to find a Ministry
     * @example
     * // Get one Ministry
     * const ministry = await prisma.ministry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MinistryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MinistryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MinistryClient<$Result.GetResult<Prisma.$MinistryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Ministries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MinistryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ministries
     * const ministries = await prisma.ministry.findMany()
     * 
     * // Get first 10 Ministries
     * const ministries = await prisma.ministry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ministryWithIdOnly = await prisma.ministry.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MinistryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MinistryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MinistryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Ministry.
     * @param {MinistryCreateArgs} args - Arguments to create a Ministry.
     * @example
     * // Create one Ministry
     * const Ministry = await prisma.ministry.create({
     *   data: {
     *     // ... data to create a Ministry
     *   }
     * })
     * 
    **/
    create<T extends MinistryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MinistryCreateArgs<ExtArgs>>
    ): Prisma__MinistryClient<$Result.GetResult<Prisma.$MinistryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Ministries.
     *     @param {MinistryCreateManyArgs} args - Arguments to create many Ministries.
     *     @example
     *     // Create many Ministries
     *     const ministry = await prisma.ministry.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MinistryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MinistryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ministry.
     * @param {MinistryDeleteArgs} args - Arguments to delete one Ministry.
     * @example
     * // Delete one Ministry
     * const Ministry = await prisma.ministry.delete({
     *   where: {
     *     // ... filter to delete one Ministry
     *   }
     * })
     * 
    **/
    delete<T extends MinistryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MinistryDeleteArgs<ExtArgs>>
    ): Prisma__MinistryClient<$Result.GetResult<Prisma.$MinistryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Ministry.
     * @param {MinistryUpdateArgs} args - Arguments to update one Ministry.
     * @example
     * // Update one Ministry
     * const ministry = await prisma.ministry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MinistryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MinistryUpdateArgs<ExtArgs>>
    ): Prisma__MinistryClient<$Result.GetResult<Prisma.$MinistryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Ministries.
     * @param {MinistryDeleteManyArgs} args - Arguments to filter Ministries to delete.
     * @example
     * // Delete a few Ministries
     * const { count } = await prisma.ministry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MinistryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MinistryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ministries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MinistryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ministries
     * const ministry = await prisma.ministry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MinistryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MinistryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ministry.
     * @param {MinistryUpsertArgs} args - Arguments to update or create a Ministry.
     * @example
     * // Update or create a Ministry
     * const ministry = await prisma.ministry.upsert({
     *   create: {
     *     // ... data to create a Ministry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ministry we want to update
     *   }
     * })
    **/
    upsert<T extends MinistryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MinistryUpsertArgs<ExtArgs>>
    ): Prisma__MinistryClient<$Result.GetResult<Prisma.$MinistryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Ministries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MinistryCountArgs} args - Arguments to filter Ministries to count.
     * @example
     * // Count the number of Ministries
     * const count = await prisma.ministry.count({
     *   where: {
     *     // ... the filter for the Ministries we want to count
     *   }
     * })
    **/
    count<T extends MinistryCountArgs>(
      args?: Subset<T, MinistryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MinistryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ministry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MinistryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MinistryAggregateArgs>(args: Subset<T, MinistryAggregateArgs>): Prisma.PrismaPromise<GetMinistryAggregateType<T>>

    /**
     * Group by Ministry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MinistryGroupByArgs} args - Group by arguments.
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
      T extends MinistryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MinistryGroupByArgs['orderBy'] }
        : { orderBy?: MinistryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MinistryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMinistryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ministry model
   */
  readonly fields: MinistryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ministry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MinistryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    members<T extends Ministry$membersArgs<ExtArgs> = {}>(args?: Subset<T, Ministry$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MinistryMemberPayload<ExtArgs>, T, 'findMany'> | Null>;

    setlists<T extends Ministry$setlistsArgs<ExtArgs> = {}>(args?: Subset<T, Ministry$setlistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SetlistPayload<ExtArgs>, T, 'findMany'> | Null>;

    events<T extends Ministry$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Ministry$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Ministry model
   */ 
  interface MinistryFieldRefs {
    readonly id: FieldRef<"Ministry", 'String'>
    readonly name: FieldRef<"Ministry", 'String'>
    readonly ownerUserId: FieldRef<"Ministry", 'String'>
    readonly createdAt: FieldRef<"Ministry", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Ministry findUnique
   */
  export type MinistryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ministry
     */
    select?: MinistrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MinistryInclude<ExtArgs> | null
    /**
     * Filter, which Ministry to fetch.
     */
    where: MinistryWhereUniqueInput
  }


  /**
   * Ministry findUniqueOrThrow
   */
  export type MinistryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ministry
     */
    select?: MinistrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MinistryInclude<ExtArgs> | null
    /**
     * Filter, which Ministry to fetch.
     */
    where: MinistryWhereUniqueInput
  }


  /**
   * Ministry findFirst
   */
  export type MinistryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ministry
     */
    select?: MinistrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MinistryInclude<ExtArgs> | null
    /**
     * Filter, which Ministry to fetch.
     */
    where?: MinistryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ministries to fetch.
     */
    orderBy?: MinistryOrderByWithRelationInput | MinistryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ministries.
     */
    cursor?: MinistryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ministries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ministries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ministries.
     */
    distinct?: MinistryScalarFieldEnum | MinistryScalarFieldEnum[]
  }


  /**
   * Ministry findFirstOrThrow
   */
  export type MinistryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ministry
     */
    select?: MinistrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MinistryInclude<ExtArgs> | null
    /**
     * Filter, which Ministry to fetch.
     */
    where?: MinistryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ministries to fetch.
     */
    orderBy?: MinistryOrderByWithRelationInput | MinistryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ministries.
     */
    cursor?: MinistryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ministries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ministries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ministries.
     */
    distinct?: MinistryScalarFieldEnum | MinistryScalarFieldEnum[]
  }


  /**
   * Ministry findMany
   */
  export type MinistryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ministry
     */
    select?: MinistrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MinistryInclude<ExtArgs> | null
    /**
     * Filter, which Ministries to fetch.
     */
    where?: MinistryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ministries to fetch.
     */
    orderBy?: MinistryOrderByWithRelationInput | MinistryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ministries.
     */
    cursor?: MinistryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ministries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ministries.
     */
    skip?: number
    distinct?: MinistryScalarFieldEnum | MinistryScalarFieldEnum[]
  }


  /**
   * Ministry create
   */
  export type MinistryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ministry
     */
    select?: MinistrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MinistryInclude<ExtArgs> | null
    /**
     * The data needed to create a Ministry.
     */
    data: XOR<MinistryCreateInput, MinistryUncheckedCreateInput>
  }


  /**
   * Ministry createMany
   */
  export type MinistryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ministries.
     */
    data: MinistryCreateManyInput | MinistryCreateManyInput[]
  }


  /**
   * Ministry update
   */
  export type MinistryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ministry
     */
    select?: MinistrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MinistryInclude<ExtArgs> | null
    /**
     * The data needed to update a Ministry.
     */
    data: XOR<MinistryUpdateInput, MinistryUncheckedUpdateInput>
    /**
     * Choose, which Ministry to update.
     */
    where: MinistryWhereUniqueInput
  }


  /**
   * Ministry updateMany
   */
  export type MinistryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ministries.
     */
    data: XOR<MinistryUpdateManyMutationInput, MinistryUncheckedUpdateManyInput>
    /**
     * Filter which Ministries to update
     */
    where?: MinistryWhereInput
  }


  /**
   * Ministry upsert
   */
  export type MinistryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ministry
     */
    select?: MinistrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MinistryInclude<ExtArgs> | null
    /**
     * The filter to search for the Ministry to update in case it exists.
     */
    where: MinistryWhereUniqueInput
    /**
     * In case the Ministry found by the `where` argument doesn't exist, create a new Ministry with this data.
     */
    create: XOR<MinistryCreateInput, MinistryUncheckedCreateInput>
    /**
     * In case the Ministry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MinistryUpdateInput, MinistryUncheckedUpdateInput>
  }


  /**
   * Ministry delete
   */
  export type MinistryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ministry
     */
    select?: MinistrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MinistryInclude<ExtArgs> | null
    /**
     * Filter which Ministry to delete.
     */
    where: MinistryWhereUniqueInput
  }


  /**
   * Ministry deleteMany
   */
  export type MinistryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ministries to delete
     */
    where?: MinistryWhereInput
  }


  /**
   * Ministry.members
   */
  export type Ministry$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MinistryMember
     */
    select?: MinistryMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MinistryMemberInclude<ExtArgs> | null
    where?: MinistryMemberWhereInput
    orderBy?: MinistryMemberOrderByWithRelationInput | MinistryMemberOrderByWithRelationInput[]
    cursor?: MinistryMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MinistryMemberScalarFieldEnum | MinistryMemberScalarFieldEnum[]
  }


  /**
   * Ministry.setlists
   */
  export type Ministry$setlistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setlist
     */
    select?: SetlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SetlistInclude<ExtArgs> | null
    where?: SetlistWhereInput
    orderBy?: SetlistOrderByWithRelationInput | SetlistOrderByWithRelationInput[]
    cursor?: SetlistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SetlistScalarFieldEnum | SetlistScalarFieldEnum[]
  }


  /**
   * Ministry.events
   */
  export type Ministry$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventLogInclude<ExtArgs> | null
    where?: EventLogWhereInput
    orderBy?: EventLogOrderByWithRelationInput | EventLogOrderByWithRelationInput[]
    cursor?: EventLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventLogScalarFieldEnum | EventLogScalarFieldEnum[]
  }


  /**
   * Ministry without action
   */
  export type MinistryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ministry
     */
    select?: MinistrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MinistryInclude<ExtArgs> | null
  }



  /**
   * Model MinistryMember
   */

  export type AggregateMinistryMember = {
    _count: MinistryMemberCountAggregateOutputType | null
    _min: MinistryMemberMinAggregateOutputType | null
    _max: MinistryMemberMaxAggregateOutputType | null
  }

  export type MinistryMemberMinAggregateOutputType = {
    id: string | null
    ministryId: string | null
    userId: string | null
    role: string | null
    createdAt: Date | null
  }

  export type MinistryMemberMaxAggregateOutputType = {
    id: string | null
    ministryId: string | null
    userId: string | null
    role: string | null
    createdAt: Date | null
  }

  export type MinistryMemberCountAggregateOutputType = {
    id: number
    ministryId: number
    userId: number
    role: number
    createdAt: number
    _all: number
  }


  export type MinistryMemberMinAggregateInputType = {
    id?: true
    ministryId?: true
    userId?: true
    role?: true
    createdAt?: true
  }

  export type MinistryMemberMaxAggregateInputType = {
    id?: true
    ministryId?: true
    userId?: true
    role?: true
    createdAt?: true
  }

  export type MinistryMemberCountAggregateInputType = {
    id?: true
    ministryId?: true
    userId?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type MinistryMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MinistryMember to aggregate.
     */
    where?: MinistryMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MinistryMembers to fetch.
     */
    orderBy?: MinistryMemberOrderByWithRelationInput | MinistryMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MinistryMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MinistryMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MinistryMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MinistryMembers
    **/
    _count?: true | MinistryMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MinistryMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MinistryMemberMaxAggregateInputType
  }

  export type GetMinistryMemberAggregateType<T extends MinistryMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateMinistryMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMinistryMember[P]>
      : GetScalarType<T[P], AggregateMinistryMember[P]>
  }




  export type MinistryMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MinistryMemberWhereInput
    orderBy?: MinistryMemberOrderByWithAggregationInput | MinistryMemberOrderByWithAggregationInput[]
    by: MinistryMemberScalarFieldEnum[] | MinistryMemberScalarFieldEnum
    having?: MinistryMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MinistryMemberCountAggregateInputType | true
    _min?: MinistryMemberMinAggregateInputType
    _max?: MinistryMemberMaxAggregateInputType
  }

  export type MinistryMemberGroupByOutputType = {
    id: string
    ministryId: string
    userId: string
    role: string
    createdAt: Date
    _count: MinistryMemberCountAggregateOutputType | null
    _min: MinistryMemberMinAggregateOutputType | null
    _max: MinistryMemberMaxAggregateOutputType | null
  }

  type GetMinistryMemberGroupByPayload<T extends MinistryMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MinistryMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MinistryMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MinistryMemberGroupByOutputType[P]>
            : GetScalarType<T[P], MinistryMemberGroupByOutputType[P]>
        }
      >
    >


  export type MinistryMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ministryId?: boolean
    userId?: boolean
    role?: boolean
    createdAt?: boolean
    ministry?: boolean | MinistryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ministryMember"]>

  export type MinistryMemberSelectScalar = {
    id?: boolean
    ministryId?: boolean
    userId?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type MinistryMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ministry?: boolean | MinistryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $MinistryMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MinistryMember"
    objects: {
      ministry: Prisma.$MinistryPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ministryId: string
      userId: string
      role: string
      createdAt: Date
    }, ExtArgs["result"]["ministryMember"]>
    composites: {}
  }


  type MinistryMemberGetPayload<S extends boolean | null | undefined | MinistryMemberDefaultArgs> = $Result.GetResult<Prisma.$MinistryMemberPayload, S>

  type MinistryMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MinistryMemberFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MinistryMemberCountAggregateInputType | true
    }

  export interface MinistryMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MinistryMember'], meta: { name: 'MinistryMember' } }
    /**
     * Find zero or one MinistryMember that matches the filter.
     * @param {MinistryMemberFindUniqueArgs} args - Arguments to find a MinistryMember
     * @example
     * // Get one MinistryMember
     * const ministryMember = await prisma.ministryMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MinistryMemberFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MinistryMemberFindUniqueArgs<ExtArgs>>
    ): Prisma__MinistryMemberClient<$Result.GetResult<Prisma.$MinistryMemberPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one MinistryMember that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MinistryMemberFindUniqueOrThrowArgs} args - Arguments to find a MinistryMember
     * @example
     * // Get one MinistryMember
     * const ministryMember = await prisma.ministryMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MinistryMemberFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MinistryMemberFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MinistryMemberClient<$Result.GetResult<Prisma.$MinistryMemberPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first MinistryMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MinistryMemberFindFirstArgs} args - Arguments to find a MinistryMember
     * @example
     * // Get one MinistryMember
     * const ministryMember = await prisma.ministryMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MinistryMemberFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MinistryMemberFindFirstArgs<ExtArgs>>
    ): Prisma__MinistryMemberClient<$Result.GetResult<Prisma.$MinistryMemberPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first MinistryMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MinistryMemberFindFirstOrThrowArgs} args - Arguments to find a MinistryMember
     * @example
     * // Get one MinistryMember
     * const ministryMember = await prisma.ministryMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MinistryMemberFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MinistryMemberFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MinistryMemberClient<$Result.GetResult<Prisma.$MinistryMemberPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more MinistryMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MinistryMemberFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MinistryMembers
     * const ministryMembers = await prisma.ministryMember.findMany()
     * 
     * // Get first 10 MinistryMembers
     * const ministryMembers = await prisma.ministryMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ministryMemberWithIdOnly = await prisma.ministryMember.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MinistryMemberFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MinistryMemberFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MinistryMemberPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a MinistryMember.
     * @param {MinistryMemberCreateArgs} args - Arguments to create a MinistryMember.
     * @example
     * // Create one MinistryMember
     * const MinistryMember = await prisma.ministryMember.create({
     *   data: {
     *     // ... data to create a MinistryMember
     *   }
     * })
     * 
    **/
    create<T extends MinistryMemberCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MinistryMemberCreateArgs<ExtArgs>>
    ): Prisma__MinistryMemberClient<$Result.GetResult<Prisma.$MinistryMemberPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many MinistryMembers.
     *     @param {MinistryMemberCreateManyArgs} args - Arguments to create many MinistryMembers.
     *     @example
     *     // Create many MinistryMembers
     *     const ministryMember = await prisma.ministryMember.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MinistryMemberCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MinistryMemberCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MinistryMember.
     * @param {MinistryMemberDeleteArgs} args - Arguments to delete one MinistryMember.
     * @example
     * // Delete one MinistryMember
     * const MinistryMember = await prisma.ministryMember.delete({
     *   where: {
     *     // ... filter to delete one MinistryMember
     *   }
     * })
     * 
    **/
    delete<T extends MinistryMemberDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MinistryMemberDeleteArgs<ExtArgs>>
    ): Prisma__MinistryMemberClient<$Result.GetResult<Prisma.$MinistryMemberPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one MinistryMember.
     * @param {MinistryMemberUpdateArgs} args - Arguments to update one MinistryMember.
     * @example
     * // Update one MinistryMember
     * const ministryMember = await prisma.ministryMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MinistryMemberUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MinistryMemberUpdateArgs<ExtArgs>>
    ): Prisma__MinistryMemberClient<$Result.GetResult<Prisma.$MinistryMemberPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more MinistryMembers.
     * @param {MinistryMemberDeleteManyArgs} args - Arguments to filter MinistryMembers to delete.
     * @example
     * // Delete a few MinistryMembers
     * const { count } = await prisma.ministryMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MinistryMemberDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MinistryMemberDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MinistryMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MinistryMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MinistryMembers
     * const ministryMember = await prisma.ministryMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MinistryMemberUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MinistryMemberUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MinistryMember.
     * @param {MinistryMemberUpsertArgs} args - Arguments to update or create a MinistryMember.
     * @example
     * // Update or create a MinistryMember
     * const ministryMember = await prisma.ministryMember.upsert({
     *   create: {
     *     // ... data to create a MinistryMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MinistryMember we want to update
     *   }
     * })
    **/
    upsert<T extends MinistryMemberUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MinistryMemberUpsertArgs<ExtArgs>>
    ): Prisma__MinistryMemberClient<$Result.GetResult<Prisma.$MinistryMemberPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of MinistryMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MinistryMemberCountArgs} args - Arguments to filter MinistryMembers to count.
     * @example
     * // Count the number of MinistryMembers
     * const count = await prisma.ministryMember.count({
     *   where: {
     *     // ... the filter for the MinistryMembers we want to count
     *   }
     * })
    **/
    count<T extends MinistryMemberCountArgs>(
      args?: Subset<T, MinistryMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MinistryMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MinistryMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MinistryMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MinistryMemberAggregateArgs>(args: Subset<T, MinistryMemberAggregateArgs>): Prisma.PrismaPromise<GetMinistryMemberAggregateType<T>>

    /**
     * Group by MinistryMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MinistryMemberGroupByArgs} args - Group by arguments.
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
      T extends MinistryMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MinistryMemberGroupByArgs['orderBy'] }
        : { orderBy?: MinistryMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MinistryMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMinistryMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MinistryMember model
   */
  readonly fields: MinistryMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MinistryMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MinistryMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    ministry<T extends MinistryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MinistryDefaultArgs<ExtArgs>>): Prisma__MinistryClient<$Result.GetResult<Prisma.$MinistryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the MinistryMember model
   */ 
  interface MinistryMemberFieldRefs {
    readonly id: FieldRef<"MinistryMember", 'String'>
    readonly ministryId: FieldRef<"MinistryMember", 'String'>
    readonly userId: FieldRef<"MinistryMember", 'String'>
    readonly role: FieldRef<"MinistryMember", 'String'>
    readonly createdAt: FieldRef<"MinistryMember", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * MinistryMember findUnique
   */
  export type MinistryMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MinistryMember
     */
    select?: MinistryMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MinistryMemberInclude<ExtArgs> | null
    /**
     * Filter, which MinistryMember to fetch.
     */
    where: MinistryMemberWhereUniqueInput
  }


  /**
   * MinistryMember findUniqueOrThrow
   */
  export type MinistryMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MinistryMember
     */
    select?: MinistryMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MinistryMemberInclude<ExtArgs> | null
    /**
     * Filter, which MinistryMember to fetch.
     */
    where: MinistryMemberWhereUniqueInput
  }


  /**
   * MinistryMember findFirst
   */
  export type MinistryMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MinistryMember
     */
    select?: MinistryMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MinistryMemberInclude<ExtArgs> | null
    /**
     * Filter, which MinistryMember to fetch.
     */
    where?: MinistryMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MinistryMembers to fetch.
     */
    orderBy?: MinistryMemberOrderByWithRelationInput | MinistryMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MinistryMembers.
     */
    cursor?: MinistryMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MinistryMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MinistryMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MinistryMembers.
     */
    distinct?: MinistryMemberScalarFieldEnum | MinistryMemberScalarFieldEnum[]
  }


  /**
   * MinistryMember findFirstOrThrow
   */
  export type MinistryMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MinistryMember
     */
    select?: MinistryMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MinistryMemberInclude<ExtArgs> | null
    /**
     * Filter, which MinistryMember to fetch.
     */
    where?: MinistryMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MinistryMembers to fetch.
     */
    orderBy?: MinistryMemberOrderByWithRelationInput | MinistryMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MinistryMembers.
     */
    cursor?: MinistryMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MinistryMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MinistryMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MinistryMembers.
     */
    distinct?: MinistryMemberScalarFieldEnum | MinistryMemberScalarFieldEnum[]
  }


  /**
   * MinistryMember findMany
   */
  export type MinistryMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MinistryMember
     */
    select?: MinistryMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MinistryMemberInclude<ExtArgs> | null
    /**
     * Filter, which MinistryMembers to fetch.
     */
    where?: MinistryMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MinistryMembers to fetch.
     */
    orderBy?: MinistryMemberOrderByWithRelationInput | MinistryMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MinistryMembers.
     */
    cursor?: MinistryMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MinistryMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MinistryMembers.
     */
    skip?: number
    distinct?: MinistryMemberScalarFieldEnum | MinistryMemberScalarFieldEnum[]
  }


  /**
   * MinistryMember create
   */
  export type MinistryMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MinistryMember
     */
    select?: MinistryMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MinistryMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a MinistryMember.
     */
    data: XOR<MinistryMemberCreateInput, MinistryMemberUncheckedCreateInput>
  }


  /**
   * MinistryMember createMany
   */
  export type MinistryMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MinistryMembers.
     */
    data: MinistryMemberCreateManyInput | MinistryMemberCreateManyInput[]
  }


  /**
   * MinistryMember update
   */
  export type MinistryMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MinistryMember
     */
    select?: MinistryMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MinistryMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a MinistryMember.
     */
    data: XOR<MinistryMemberUpdateInput, MinistryMemberUncheckedUpdateInput>
    /**
     * Choose, which MinistryMember to update.
     */
    where: MinistryMemberWhereUniqueInput
  }


  /**
   * MinistryMember updateMany
   */
  export type MinistryMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MinistryMembers.
     */
    data: XOR<MinistryMemberUpdateManyMutationInput, MinistryMemberUncheckedUpdateManyInput>
    /**
     * Filter which MinistryMembers to update
     */
    where?: MinistryMemberWhereInput
  }


  /**
   * MinistryMember upsert
   */
  export type MinistryMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MinistryMember
     */
    select?: MinistryMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MinistryMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the MinistryMember to update in case it exists.
     */
    where: MinistryMemberWhereUniqueInput
    /**
     * In case the MinistryMember found by the `where` argument doesn't exist, create a new MinistryMember with this data.
     */
    create: XOR<MinistryMemberCreateInput, MinistryMemberUncheckedCreateInput>
    /**
     * In case the MinistryMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MinistryMemberUpdateInput, MinistryMemberUncheckedUpdateInput>
  }


  /**
   * MinistryMember delete
   */
  export type MinistryMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MinistryMember
     */
    select?: MinistryMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MinistryMemberInclude<ExtArgs> | null
    /**
     * Filter which MinistryMember to delete.
     */
    where: MinistryMemberWhereUniqueInput
  }


  /**
   * MinistryMember deleteMany
   */
  export type MinistryMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MinistryMembers to delete
     */
    where?: MinistryMemberWhereInput
  }


  /**
   * MinistryMember without action
   */
  export type MinistryMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MinistryMember
     */
    select?: MinistryMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MinistryMemberInclude<ExtArgs> | null
  }



  /**
   * Model Song
   */

  export type AggregateSong = {
    _count: SongCountAggregateOutputType | null
    _avg: SongAvgAggregateOutputType | null
    _sum: SongSumAggregateOutputType | null
    _min: SongMinAggregateOutputType | null
    _max: SongMaxAggregateOutputType | null
  }

  export type SongAvgAggregateOutputType = {
    bpm: number | null
  }

  export type SongSumAggregateOutputType = {
    bpm: number | null
  }

  export type SongMinAggregateOutputType = {
    id: string | null
    title: string | null
    artist: string | null
    liturgicalTags: string | null
    bpm: number | null
    key: string | null
    timeSignature: string | null
    language: string | null
    season: string | null
    parts: string | null
    createdAt: Date | null
  }

  export type SongMaxAggregateOutputType = {
    id: string | null
    title: string | null
    artist: string | null
    liturgicalTags: string | null
    bpm: number | null
    key: string | null
    timeSignature: string | null
    language: string | null
    season: string | null
    parts: string | null
    createdAt: Date | null
  }

  export type SongCountAggregateOutputType = {
    id: number
    title: number
    artist: number
    liturgicalTags: number
    bpm: number
    key: number
    timeSignature: number
    language: number
    season: number
    parts: number
    createdAt: number
    _all: number
  }


  export type SongAvgAggregateInputType = {
    bpm?: true
  }

  export type SongSumAggregateInputType = {
    bpm?: true
  }

  export type SongMinAggregateInputType = {
    id?: true
    title?: true
    artist?: true
    liturgicalTags?: true
    bpm?: true
    key?: true
    timeSignature?: true
    language?: true
    season?: true
    parts?: true
    createdAt?: true
  }

  export type SongMaxAggregateInputType = {
    id?: true
    title?: true
    artist?: true
    liturgicalTags?: true
    bpm?: true
    key?: true
    timeSignature?: true
    language?: true
    season?: true
    parts?: true
    createdAt?: true
  }

  export type SongCountAggregateInputType = {
    id?: true
    title?: true
    artist?: true
    liturgicalTags?: true
    bpm?: true
    key?: true
    timeSignature?: true
    language?: true
    season?: true
    parts?: true
    createdAt?: true
    _all?: true
  }

  export type SongAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Song to aggregate.
     */
    where?: SongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Songs
    **/
    _count?: true | SongCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SongAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SongSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SongMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SongMaxAggregateInputType
  }

  export type GetSongAggregateType<T extends SongAggregateArgs> = {
        [P in keyof T & keyof AggregateSong]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSong[P]>
      : GetScalarType<T[P], AggregateSong[P]>
  }




  export type SongGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongWhereInput
    orderBy?: SongOrderByWithAggregationInput | SongOrderByWithAggregationInput[]
    by: SongScalarFieldEnum[] | SongScalarFieldEnum
    having?: SongScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SongCountAggregateInputType | true
    _avg?: SongAvgAggregateInputType
    _sum?: SongSumAggregateInputType
    _min?: SongMinAggregateInputType
    _max?: SongMaxAggregateInputType
  }

  export type SongGroupByOutputType = {
    id: string
    title: string
    artist: string
    liturgicalTags: string
    bpm: number
    key: string
    timeSignature: string
    language: string
    season: string | null
    parts: string
    createdAt: Date
    _count: SongCountAggregateOutputType | null
    _avg: SongAvgAggregateOutputType | null
    _sum: SongSumAggregateOutputType | null
    _min: SongMinAggregateOutputType | null
    _max: SongMaxAggregateOutputType | null
  }

  type GetSongGroupByPayload<T extends SongGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SongGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SongGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SongGroupByOutputType[P]>
            : GetScalarType<T[P], SongGroupByOutputType[P]>
        }
      >
    >


  export type SongSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    artist?: boolean
    liturgicalTags?: boolean
    bpm?: boolean
    key?: boolean
    timeSignature?: boolean
    language?: boolean
    season?: boolean
    parts?: boolean
    createdAt?: boolean
    arrangements?: boolean | Song$arrangementsArgs<ExtArgs>
    _count?: boolean | SongCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["song"]>

  export type SongSelectScalar = {
    id?: boolean
    title?: boolean
    artist?: boolean
    liturgicalTags?: boolean
    bpm?: boolean
    key?: boolean
    timeSignature?: boolean
    language?: boolean
    season?: boolean
    parts?: boolean
    createdAt?: boolean
  }

  export type SongInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    arrangements?: boolean | Song$arrangementsArgs<ExtArgs>
    _count?: boolean | SongCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $SongPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Song"
    objects: {
      arrangements: Prisma.$ArrangementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      artist: string
      liturgicalTags: string
      bpm: number
      key: string
      timeSignature: string
      language: string
      season: string | null
      parts: string
      createdAt: Date
    }, ExtArgs["result"]["song"]>
    composites: {}
  }


  type SongGetPayload<S extends boolean | null | undefined | SongDefaultArgs> = $Result.GetResult<Prisma.$SongPayload, S>

  type SongCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SongFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SongCountAggregateInputType | true
    }

  export interface SongDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Song'], meta: { name: 'Song' } }
    /**
     * Find zero or one Song that matches the filter.
     * @param {SongFindUniqueArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SongFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SongFindUniqueArgs<ExtArgs>>
    ): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Song that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SongFindUniqueOrThrowArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SongFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SongFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Song that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongFindFirstArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SongFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SongFindFirstArgs<ExtArgs>>
    ): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Song that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongFindFirstOrThrowArgs} args - Arguments to find a Song
     * @example
     * // Get one Song
     * const song = await prisma.song.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SongFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SongFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Songs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Songs
     * const songs = await prisma.song.findMany()
     * 
     * // Get first 10 Songs
     * const songs = await prisma.song.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const songWithIdOnly = await prisma.song.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SongFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SongFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Song.
     * @param {SongCreateArgs} args - Arguments to create a Song.
     * @example
     * // Create one Song
     * const Song = await prisma.song.create({
     *   data: {
     *     // ... data to create a Song
     *   }
     * })
     * 
    **/
    create<T extends SongCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SongCreateArgs<ExtArgs>>
    ): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Songs.
     *     @param {SongCreateManyArgs} args - Arguments to create many Songs.
     *     @example
     *     // Create many Songs
     *     const song = await prisma.song.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SongCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SongCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Song.
     * @param {SongDeleteArgs} args - Arguments to delete one Song.
     * @example
     * // Delete one Song
     * const Song = await prisma.song.delete({
     *   where: {
     *     // ... filter to delete one Song
     *   }
     * })
     * 
    **/
    delete<T extends SongDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SongDeleteArgs<ExtArgs>>
    ): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Song.
     * @param {SongUpdateArgs} args - Arguments to update one Song.
     * @example
     * // Update one Song
     * const song = await prisma.song.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SongUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SongUpdateArgs<ExtArgs>>
    ): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Songs.
     * @param {SongDeleteManyArgs} args - Arguments to filter Songs to delete.
     * @example
     * // Delete a few Songs
     * const { count } = await prisma.song.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SongDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SongDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Songs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Songs
     * const song = await prisma.song.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SongUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SongUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Song.
     * @param {SongUpsertArgs} args - Arguments to update or create a Song.
     * @example
     * // Update or create a Song
     * const song = await prisma.song.upsert({
     *   create: {
     *     // ... data to create a Song
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Song we want to update
     *   }
     * })
    **/
    upsert<T extends SongUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SongUpsertArgs<ExtArgs>>
    ): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Songs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongCountArgs} args - Arguments to filter Songs to count.
     * @example
     * // Count the number of Songs
     * const count = await prisma.song.count({
     *   where: {
     *     // ... the filter for the Songs we want to count
     *   }
     * })
    **/
    count<T extends SongCountArgs>(
      args?: Subset<T, SongCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SongCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Song.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SongAggregateArgs>(args: Subset<T, SongAggregateArgs>): Prisma.PrismaPromise<GetSongAggregateType<T>>

    /**
     * Group by Song.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongGroupByArgs} args - Group by arguments.
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
      T extends SongGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SongGroupByArgs['orderBy'] }
        : { orderBy?: SongGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SongGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSongGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Song model
   */
  readonly fields: SongFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Song.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SongClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    arrangements<T extends Song$arrangementsArgs<ExtArgs> = {}>(args?: Subset<T, Song$arrangementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArrangementPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Song model
   */ 
  interface SongFieldRefs {
    readonly id: FieldRef<"Song", 'String'>
    readonly title: FieldRef<"Song", 'String'>
    readonly artist: FieldRef<"Song", 'String'>
    readonly liturgicalTags: FieldRef<"Song", 'String'>
    readonly bpm: FieldRef<"Song", 'Int'>
    readonly key: FieldRef<"Song", 'String'>
    readonly timeSignature: FieldRef<"Song", 'String'>
    readonly language: FieldRef<"Song", 'String'>
    readonly season: FieldRef<"Song", 'String'>
    readonly parts: FieldRef<"Song", 'String'>
    readonly createdAt: FieldRef<"Song", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Song findUnique
   */
  export type SongFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Song to fetch.
     */
    where: SongWhereUniqueInput
  }


  /**
   * Song findUniqueOrThrow
   */
  export type SongFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Song to fetch.
     */
    where: SongWhereUniqueInput
  }


  /**
   * Song findFirst
   */
  export type SongFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Song to fetch.
     */
    where?: SongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Songs.
     */
    cursor?: SongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Songs.
     */
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }


  /**
   * Song findFirstOrThrow
   */
  export type SongFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Song to fetch.
     */
    where?: SongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Songs.
     */
    cursor?: SongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Songs.
     */
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }


  /**
   * Song findMany
   */
  export type SongFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter, which Songs to fetch.
     */
    where?: SongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songs to fetch.
     */
    orderBy?: SongOrderByWithRelationInput | SongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Songs.
     */
    cursor?: SongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songs.
     */
    skip?: number
    distinct?: SongScalarFieldEnum | SongScalarFieldEnum[]
  }


  /**
   * Song create
   */
  export type SongCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * The data needed to create a Song.
     */
    data: XOR<SongCreateInput, SongUncheckedCreateInput>
  }


  /**
   * Song createMany
   */
  export type SongCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Songs.
     */
    data: SongCreateManyInput | SongCreateManyInput[]
  }


  /**
   * Song update
   */
  export type SongUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * The data needed to update a Song.
     */
    data: XOR<SongUpdateInput, SongUncheckedUpdateInput>
    /**
     * Choose, which Song to update.
     */
    where: SongWhereUniqueInput
  }


  /**
   * Song updateMany
   */
  export type SongUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Songs.
     */
    data: XOR<SongUpdateManyMutationInput, SongUncheckedUpdateManyInput>
    /**
     * Filter which Songs to update
     */
    where?: SongWhereInput
  }


  /**
   * Song upsert
   */
  export type SongUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * The filter to search for the Song to update in case it exists.
     */
    where: SongWhereUniqueInput
    /**
     * In case the Song found by the `where` argument doesn't exist, create a new Song with this data.
     */
    create: XOR<SongCreateInput, SongUncheckedCreateInput>
    /**
     * In case the Song was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SongUpdateInput, SongUncheckedUpdateInput>
  }


  /**
   * Song delete
   */
  export type SongDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
    /**
     * Filter which Song to delete.
     */
    where: SongWhereUniqueInput
  }


  /**
   * Song deleteMany
   */
  export type SongDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Songs to delete
     */
    where?: SongWhereInput
  }


  /**
   * Song.arrangements
   */
  export type Song$arrangementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arrangement
     */
    select?: ArrangementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArrangementInclude<ExtArgs> | null
    where?: ArrangementWhereInput
    orderBy?: ArrangementOrderByWithRelationInput | ArrangementOrderByWithRelationInput[]
    cursor?: ArrangementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArrangementScalarFieldEnum | ArrangementScalarFieldEnum[]
  }


  /**
   * Song without action
   */
  export type SongDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Song
     */
    select?: SongSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SongInclude<ExtArgs> | null
  }



  /**
   * Model Arrangement
   */

  export type AggregateArrangement = {
    _count: ArrangementCountAggregateOutputType | null
    _avg: ArrangementAvgAggregateOutputType | null
    _sum: ArrangementSumAggregateOutputType | null
    _min: ArrangementMinAggregateOutputType | null
    _max: ArrangementMaxAggregateOutputType | null
  }

  export type ArrangementAvgAggregateOutputType = {
    defaultBpm: number | null
  }

  export type ArrangementSumAggregateOutputType = {
    defaultBpm: number | null
  }

  export type ArrangementMinAggregateOutputType = {
    id: string | null
    songId: string | null
    name: string | null
    defaultKey: string | null
    defaultBpm: number | null
    structureJson: string | null
    stemsJson: string | null
    audioDemoUrl: string | null
    createdAt: Date | null
  }

  export type ArrangementMaxAggregateOutputType = {
    id: string | null
    songId: string | null
    name: string | null
    defaultKey: string | null
    defaultBpm: number | null
    structureJson: string | null
    stemsJson: string | null
    audioDemoUrl: string | null
    createdAt: Date | null
  }

  export type ArrangementCountAggregateOutputType = {
    id: number
    songId: number
    name: number
    defaultKey: number
    defaultBpm: number
    structureJson: number
    stemsJson: number
    audioDemoUrl: number
    createdAt: number
    _all: number
  }


  export type ArrangementAvgAggregateInputType = {
    defaultBpm?: true
  }

  export type ArrangementSumAggregateInputType = {
    defaultBpm?: true
  }

  export type ArrangementMinAggregateInputType = {
    id?: true
    songId?: true
    name?: true
    defaultKey?: true
    defaultBpm?: true
    structureJson?: true
    stemsJson?: true
    audioDemoUrl?: true
    createdAt?: true
  }

  export type ArrangementMaxAggregateInputType = {
    id?: true
    songId?: true
    name?: true
    defaultKey?: true
    defaultBpm?: true
    structureJson?: true
    stemsJson?: true
    audioDemoUrl?: true
    createdAt?: true
  }

  export type ArrangementCountAggregateInputType = {
    id?: true
    songId?: true
    name?: true
    defaultKey?: true
    defaultBpm?: true
    structureJson?: true
    stemsJson?: true
    audioDemoUrl?: true
    createdAt?: true
    _all?: true
  }

  export type ArrangementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Arrangement to aggregate.
     */
    where?: ArrangementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Arrangements to fetch.
     */
    orderBy?: ArrangementOrderByWithRelationInput | ArrangementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArrangementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Arrangements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Arrangements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Arrangements
    **/
    _count?: true | ArrangementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArrangementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArrangementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArrangementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArrangementMaxAggregateInputType
  }

  export type GetArrangementAggregateType<T extends ArrangementAggregateArgs> = {
        [P in keyof T & keyof AggregateArrangement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArrangement[P]>
      : GetScalarType<T[P], AggregateArrangement[P]>
  }




  export type ArrangementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArrangementWhereInput
    orderBy?: ArrangementOrderByWithAggregationInput | ArrangementOrderByWithAggregationInput[]
    by: ArrangementScalarFieldEnum[] | ArrangementScalarFieldEnum
    having?: ArrangementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArrangementCountAggregateInputType | true
    _avg?: ArrangementAvgAggregateInputType
    _sum?: ArrangementSumAggregateInputType
    _min?: ArrangementMinAggregateInputType
    _max?: ArrangementMaxAggregateInputType
  }

  export type ArrangementGroupByOutputType = {
    id: string
    songId: string
    name: string
    defaultKey: string
    defaultBpm: number
    structureJson: string
    stemsJson: string
    audioDemoUrl: string
    createdAt: Date
    _count: ArrangementCountAggregateOutputType | null
    _avg: ArrangementAvgAggregateOutputType | null
    _sum: ArrangementSumAggregateOutputType | null
    _min: ArrangementMinAggregateOutputType | null
    _max: ArrangementMaxAggregateOutputType | null
  }

  type GetArrangementGroupByPayload<T extends ArrangementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArrangementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArrangementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArrangementGroupByOutputType[P]>
            : GetScalarType<T[P], ArrangementGroupByOutputType[P]>
        }
      >
    >


  export type ArrangementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    songId?: boolean
    name?: boolean
    defaultKey?: boolean
    defaultBpm?: boolean
    structureJson?: boolean
    stemsJson?: boolean
    audioDemoUrl?: boolean
    createdAt?: boolean
    song?: boolean | SongDefaultArgs<ExtArgs>
    items?: boolean | Arrangement$itemsArgs<ExtArgs>
    _count?: boolean | ArrangementCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["arrangement"]>

  export type ArrangementSelectScalar = {
    id?: boolean
    songId?: boolean
    name?: boolean
    defaultKey?: boolean
    defaultBpm?: boolean
    structureJson?: boolean
    stemsJson?: boolean
    audioDemoUrl?: boolean
    createdAt?: boolean
  }

  export type ArrangementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    song?: boolean | SongDefaultArgs<ExtArgs>
    items?: boolean | Arrangement$itemsArgs<ExtArgs>
    _count?: boolean | ArrangementCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ArrangementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Arrangement"
    objects: {
      song: Prisma.$SongPayload<ExtArgs>
      items: Prisma.$SetlistItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      songId: string
      name: string
      defaultKey: string
      defaultBpm: number
      structureJson: string
      stemsJson: string
      audioDemoUrl: string
      createdAt: Date
    }, ExtArgs["result"]["arrangement"]>
    composites: {}
  }


  type ArrangementGetPayload<S extends boolean | null | undefined | ArrangementDefaultArgs> = $Result.GetResult<Prisma.$ArrangementPayload, S>

  type ArrangementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ArrangementFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ArrangementCountAggregateInputType | true
    }

  export interface ArrangementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Arrangement'], meta: { name: 'Arrangement' } }
    /**
     * Find zero or one Arrangement that matches the filter.
     * @param {ArrangementFindUniqueArgs} args - Arguments to find a Arrangement
     * @example
     * // Get one Arrangement
     * const arrangement = await prisma.arrangement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ArrangementFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ArrangementFindUniqueArgs<ExtArgs>>
    ): Prisma__ArrangementClient<$Result.GetResult<Prisma.$ArrangementPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Arrangement that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ArrangementFindUniqueOrThrowArgs} args - Arguments to find a Arrangement
     * @example
     * // Get one Arrangement
     * const arrangement = await prisma.arrangement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ArrangementFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ArrangementFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ArrangementClient<$Result.GetResult<Prisma.$ArrangementPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Arrangement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArrangementFindFirstArgs} args - Arguments to find a Arrangement
     * @example
     * // Get one Arrangement
     * const arrangement = await prisma.arrangement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ArrangementFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ArrangementFindFirstArgs<ExtArgs>>
    ): Prisma__ArrangementClient<$Result.GetResult<Prisma.$ArrangementPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Arrangement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArrangementFindFirstOrThrowArgs} args - Arguments to find a Arrangement
     * @example
     * // Get one Arrangement
     * const arrangement = await prisma.arrangement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ArrangementFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ArrangementFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ArrangementClient<$Result.GetResult<Prisma.$ArrangementPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Arrangements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArrangementFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Arrangements
     * const arrangements = await prisma.arrangement.findMany()
     * 
     * // Get first 10 Arrangements
     * const arrangements = await prisma.arrangement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const arrangementWithIdOnly = await prisma.arrangement.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ArrangementFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ArrangementFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArrangementPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Arrangement.
     * @param {ArrangementCreateArgs} args - Arguments to create a Arrangement.
     * @example
     * // Create one Arrangement
     * const Arrangement = await prisma.arrangement.create({
     *   data: {
     *     // ... data to create a Arrangement
     *   }
     * })
     * 
    **/
    create<T extends ArrangementCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ArrangementCreateArgs<ExtArgs>>
    ): Prisma__ArrangementClient<$Result.GetResult<Prisma.$ArrangementPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Arrangements.
     *     @param {ArrangementCreateManyArgs} args - Arguments to create many Arrangements.
     *     @example
     *     // Create many Arrangements
     *     const arrangement = await prisma.arrangement.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ArrangementCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ArrangementCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Arrangement.
     * @param {ArrangementDeleteArgs} args - Arguments to delete one Arrangement.
     * @example
     * // Delete one Arrangement
     * const Arrangement = await prisma.arrangement.delete({
     *   where: {
     *     // ... filter to delete one Arrangement
     *   }
     * })
     * 
    **/
    delete<T extends ArrangementDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ArrangementDeleteArgs<ExtArgs>>
    ): Prisma__ArrangementClient<$Result.GetResult<Prisma.$ArrangementPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Arrangement.
     * @param {ArrangementUpdateArgs} args - Arguments to update one Arrangement.
     * @example
     * // Update one Arrangement
     * const arrangement = await prisma.arrangement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ArrangementUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ArrangementUpdateArgs<ExtArgs>>
    ): Prisma__ArrangementClient<$Result.GetResult<Prisma.$ArrangementPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Arrangements.
     * @param {ArrangementDeleteManyArgs} args - Arguments to filter Arrangements to delete.
     * @example
     * // Delete a few Arrangements
     * const { count } = await prisma.arrangement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ArrangementDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ArrangementDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Arrangements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArrangementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Arrangements
     * const arrangement = await prisma.arrangement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ArrangementUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ArrangementUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Arrangement.
     * @param {ArrangementUpsertArgs} args - Arguments to update or create a Arrangement.
     * @example
     * // Update or create a Arrangement
     * const arrangement = await prisma.arrangement.upsert({
     *   create: {
     *     // ... data to create a Arrangement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Arrangement we want to update
     *   }
     * })
    **/
    upsert<T extends ArrangementUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ArrangementUpsertArgs<ExtArgs>>
    ): Prisma__ArrangementClient<$Result.GetResult<Prisma.$ArrangementPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Arrangements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArrangementCountArgs} args - Arguments to filter Arrangements to count.
     * @example
     * // Count the number of Arrangements
     * const count = await prisma.arrangement.count({
     *   where: {
     *     // ... the filter for the Arrangements we want to count
     *   }
     * })
    **/
    count<T extends ArrangementCountArgs>(
      args?: Subset<T, ArrangementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArrangementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Arrangement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArrangementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArrangementAggregateArgs>(args: Subset<T, ArrangementAggregateArgs>): Prisma.PrismaPromise<GetArrangementAggregateType<T>>

    /**
     * Group by Arrangement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArrangementGroupByArgs} args - Group by arguments.
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
      T extends ArrangementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArrangementGroupByArgs['orderBy'] }
        : { orderBy?: ArrangementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArrangementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArrangementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Arrangement model
   */
  readonly fields: ArrangementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Arrangement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArrangementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    song<T extends SongDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SongDefaultArgs<ExtArgs>>): Prisma__SongClient<$Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    items<T extends Arrangement$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Arrangement$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SetlistItemPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Arrangement model
   */ 
  interface ArrangementFieldRefs {
    readonly id: FieldRef<"Arrangement", 'String'>
    readonly songId: FieldRef<"Arrangement", 'String'>
    readonly name: FieldRef<"Arrangement", 'String'>
    readonly defaultKey: FieldRef<"Arrangement", 'String'>
    readonly defaultBpm: FieldRef<"Arrangement", 'Int'>
    readonly structureJson: FieldRef<"Arrangement", 'String'>
    readonly stemsJson: FieldRef<"Arrangement", 'String'>
    readonly audioDemoUrl: FieldRef<"Arrangement", 'String'>
    readonly createdAt: FieldRef<"Arrangement", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Arrangement findUnique
   */
  export type ArrangementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arrangement
     */
    select?: ArrangementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArrangementInclude<ExtArgs> | null
    /**
     * Filter, which Arrangement to fetch.
     */
    where: ArrangementWhereUniqueInput
  }


  /**
   * Arrangement findUniqueOrThrow
   */
  export type ArrangementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arrangement
     */
    select?: ArrangementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArrangementInclude<ExtArgs> | null
    /**
     * Filter, which Arrangement to fetch.
     */
    where: ArrangementWhereUniqueInput
  }


  /**
   * Arrangement findFirst
   */
  export type ArrangementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arrangement
     */
    select?: ArrangementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArrangementInclude<ExtArgs> | null
    /**
     * Filter, which Arrangement to fetch.
     */
    where?: ArrangementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Arrangements to fetch.
     */
    orderBy?: ArrangementOrderByWithRelationInput | ArrangementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Arrangements.
     */
    cursor?: ArrangementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Arrangements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Arrangements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Arrangements.
     */
    distinct?: ArrangementScalarFieldEnum | ArrangementScalarFieldEnum[]
  }


  /**
   * Arrangement findFirstOrThrow
   */
  export type ArrangementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arrangement
     */
    select?: ArrangementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArrangementInclude<ExtArgs> | null
    /**
     * Filter, which Arrangement to fetch.
     */
    where?: ArrangementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Arrangements to fetch.
     */
    orderBy?: ArrangementOrderByWithRelationInput | ArrangementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Arrangements.
     */
    cursor?: ArrangementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Arrangements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Arrangements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Arrangements.
     */
    distinct?: ArrangementScalarFieldEnum | ArrangementScalarFieldEnum[]
  }


  /**
   * Arrangement findMany
   */
  export type ArrangementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arrangement
     */
    select?: ArrangementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArrangementInclude<ExtArgs> | null
    /**
     * Filter, which Arrangements to fetch.
     */
    where?: ArrangementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Arrangements to fetch.
     */
    orderBy?: ArrangementOrderByWithRelationInput | ArrangementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Arrangements.
     */
    cursor?: ArrangementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Arrangements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Arrangements.
     */
    skip?: number
    distinct?: ArrangementScalarFieldEnum | ArrangementScalarFieldEnum[]
  }


  /**
   * Arrangement create
   */
  export type ArrangementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arrangement
     */
    select?: ArrangementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArrangementInclude<ExtArgs> | null
    /**
     * The data needed to create a Arrangement.
     */
    data: XOR<ArrangementCreateInput, ArrangementUncheckedCreateInput>
  }


  /**
   * Arrangement createMany
   */
  export type ArrangementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Arrangements.
     */
    data: ArrangementCreateManyInput | ArrangementCreateManyInput[]
  }


  /**
   * Arrangement update
   */
  export type ArrangementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arrangement
     */
    select?: ArrangementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArrangementInclude<ExtArgs> | null
    /**
     * The data needed to update a Arrangement.
     */
    data: XOR<ArrangementUpdateInput, ArrangementUncheckedUpdateInput>
    /**
     * Choose, which Arrangement to update.
     */
    where: ArrangementWhereUniqueInput
  }


  /**
   * Arrangement updateMany
   */
  export type ArrangementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Arrangements.
     */
    data: XOR<ArrangementUpdateManyMutationInput, ArrangementUncheckedUpdateManyInput>
    /**
     * Filter which Arrangements to update
     */
    where?: ArrangementWhereInput
  }


  /**
   * Arrangement upsert
   */
  export type ArrangementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arrangement
     */
    select?: ArrangementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArrangementInclude<ExtArgs> | null
    /**
     * The filter to search for the Arrangement to update in case it exists.
     */
    where: ArrangementWhereUniqueInput
    /**
     * In case the Arrangement found by the `where` argument doesn't exist, create a new Arrangement with this data.
     */
    create: XOR<ArrangementCreateInput, ArrangementUncheckedCreateInput>
    /**
     * In case the Arrangement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArrangementUpdateInput, ArrangementUncheckedUpdateInput>
  }


  /**
   * Arrangement delete
   */
  export type ArrangementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arrangement
     */
    select?: ArrangementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArrangementInclude<ExtArgs> | null
    /**
     * Filter which Arrangement to delete.
     */
    where: ArrangementWhereUniqueInput
  }


  /**
   * Arrangement deleteMany
   */
  export type ArrangementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Arrangements to delete
     */
    where?: ArrangementWhereInput
  }


  /**
   * Arrangement.items
   */
  export type Arrangement$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetlistItem
     */
    select?: SetlistItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SetlistItemInclude<ExtArgs> | null
    where?: SetlistItemWhereInput
    orderBy?: SetlistItemOrderByWithRelationInput | SetlistItemOrderByWithRelationInput[]
    cursor?: SetlistItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SetlistItemScalarFieldEnum | SetlistItemScalarFieldEnum[]
  }


  /**
   * Arrangement without action
   */
  export type ArrangementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arrangement
     */
    select?: ArrangementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArrangementInclude<ExtArgs> | null
  }



  /**
   * Model Setlist
   */

  export type AggregateSetlist = {
    _count: SetlistCountAggregateOutputType | null
    _min: SetlistMinAggregateOutputType | null
    _max: SetlistMaxAggregateOutputType | null
  }

  export type SetlistMinAggregateOutputType = {
    id: string | null
    ministryId: string | null
    name: string | null
    date: Date | null
    liturgyType: string | null
    season: string | null
    createdAt: Date | null
    createdById: string | null
  }

  export type SetlistMaxAggregateOutputType = {
    id: string | null
    ministryId: string | null
    name: string | null
    date: Date | null
    liturgyType: string | null
    season: string | null
    createdAt: Date | null
    createdById: string | null
  }

  export type SetlistCountAggregateOutputType = {
    id: number
    ministryId: number
    name: number
    date: number
    liturgyType: number
    season: number
    createdAt: number
    createdById: number
    _all: number
  }


  export type SetlistMinAggregateInputType = {
    id?: true
    ministryId?: true
    name?: true
    date?: true
    liturgyType?: true
    season?: true
    createdAt?: true
    createdById?: true
  }

  export type SetlistMaxAggregateInputType = {
    id?: true
    ministryId?: true
    name?: true
    date?: true
    liturgyType?: true
    season?: true
    createdAt?: true
    createdById?: true
  }

  export type SetlistCountAggregateInputType = {
    id?: true
    ministryId?: true
    name?: true
    date?: true
    liturgyType?: true
    season?: true
    createdAt?: true
    createdById?: true
    _all?: true
  }

  export type SetlistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Setlist to aggregate.
     */
    where?: SetlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Setlists to fetch.
     */
    orderBy?: SetlistOrderByWithRelationInput | SetlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SetlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Setlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Setlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Setlists
    **/
    _count?: true | SetlistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SetlistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SetlistMaxAggregateInputType
  }

  export type GetSetlistAggregateType<T extends SetlistAggregateArgs> = {
        [P in keyof T & keyof AggregateSetlist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSetlist[P]>
      : GetScalarType<T[P], AggregateSetlist[P]>
  }




  export type SetlistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SetlistWhereInput
    orderBy?: SetlistOrderByWithAggregationInput | SetlistOrderByWithAggregationInput[]
    by: SetlistScalarFieldEnum[] | SetlistScalarFieldEnum
    having?: SetlistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SetlistCountAggregateInputType | true
    _min?: SetlistMinAggregateInputType
    _max?: SetlistMaxAggregateInputType
  }

  export type SetlistGroupByOutputType = {
    id: string
    ministryId: string
    name: string
    date: Date | null
    liturgyType: string | null
    season: string | null
    createdAt: Date
    createdById: string | null
    _count: SetlistCountAggregateOutputType | null
    _min: SetlistMinAggregateOutputType | null
    _max: SetlistMaxAggregateOutputType | null
  }

  type GetSetlistGroupByPayload<T extends SetlistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SetlistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SetlistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SetlistGroupByOutputType[P]>
            : GetScalarType<T[P], SetlistGroupByOutputType[P]>
        }
      >
    >


  export type SetlistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ministryId?: boolean
    name?: boolean
    date?: boolean
    liturgyType?: boolean
    season?: boolean
    createdAt?: boolean
    createdById?: boolean
    ministry?: boolean | MinistryDefaultArgs<ExtArgs>
    createdBy?: boolean | Setlist$createdByArgs<ExtArgs>
    items?: boolean | Setlist$itemsArgs<ExtArgs>
    events?: boolean | Setlist$eventsArgs<ExtArgs>
    _count?: boolean | SetlistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["setlist"]>

  export type SetlistSelectScalar = {
    id?: boolean
    ministryId?: boolean
    name?: boolean
    date?: boolean
    liturgyType?: boolean
    season?: boolean
    createdAt?: boolean
    createdById?: boolean
  }

  export type SetlistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ministry?: boolean | MinistryDefaultArgs<ExtArgs>
    createdBy?: boolean | Setlist$createdByArgs<ExtArgs>
    items?: boolean | Setlist$itemsArgs<ExtArgs>
    events?: boolean | Setlist$eventsArgs<ExtArgs>
    _count?: boolean | SetlistCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $SetlistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Setlist"
    objects: {
      ministry: Prisma.$MinistryPayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs> | null
      items: Prisma.$SetlistItemPayload<ExtArgs>[]
      events: Prisma.$EventLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ministryId: string
      name: string
      date: Date | null
      liturgyType: string | null
      season: string | null
      createdAt: Date
      createdById: string | null
    }, ExtArgs["result"]["setlist"]>
    composites: {}
  }


  type SetlistGetPayload<S extends boolean | null | undefined | SetlistDefaultArgs> = $Result.GetResult<Prisma.$SetlistPayload, S>

  type SetlistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SetlistFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SetlistCountAggregateInputType | true
    }

  export interface SetlistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Setlist'], meta: { name: 'Setlist' } }
    /**
     * Find zero or one Setlist that matches the filter.
     * @param {SetlistFindUniqueArgs} args - Arguments to find a Setlist
     * @example
     * // Get one Setlist
     * const setlist = await prisma.setlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SetlistFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SetlistFindUniqueArgs<ExtArgs>>
    ): Prisma__SetlistClient<$Result.GetResult<Prisma.$SetlistPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Setlist that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SetlistFindUniqueOrThrowArgs} args - Arguments to find a Setlist
     * @example
     * // Get one Setlist
     * const setlist = await prisma.setlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SetlistFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SetlistFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SetlistClient<$Result.GetResult<Prisma.$SetlistPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Setlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetlistFindFirstArgs} args - Arguments to find a Setlist
     * @example
     * // Get one Setlist
     * const setlist = await prisma.setlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SetlistFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SetlistFindFirstArgs<ExtArgs>>
    ): Prisma__SetlistClient<$Result.GetResult<Prisma.$SetlistPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Setlist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetlistFindFirstOrThrowArgs} args - Arguments to find a Setlist
     * @example
     * // Get one Setlist
     * const setlist = await prisma.setlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SetlistFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SetlistFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SetlistClient<$Result.GetResult<Prisma.$SetlistPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Setlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetlistFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Setlists
     * const setlists = await prisma.setlist.findMany()
     * 
     * // Get first 10 Setlists
     * const setlists = await prisma.setlist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const setlistWithIdOnly = await prisma.setlist.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SetlistFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SetlistFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SetlistPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Setlist.
     * @param {SetlistCreateArgs} args - Arguments to create a Setlist.
     * @example
     * // Create one Setlist
     * const Setlist = await prisma.setlist.create({
     *   data: {
     *     // ... data to create a Setlist
     *   }
     * })
     * 
    **/
    create<T extends SetlistCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SetlistCreateArgs<ExtArgs>>
    ): Prisma__SetlistClient<$Result.GetResult<Prisma.$SetlistPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Setlists.
     *     @param {SetlistCreateManyArgs} args - Arguments to create many Setlists.
     *     @example
     *     // Create many Setlists
     *     const setlist = await prisma.setlist.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SetlistCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SetlistCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Setlist.
     * @param {SetlistDeleteArgs} args - Arguments to delete one Setlist.
     * @example
     * // Delete one Setlist
     * const Setlist = await prisma.setlist.delete({
     *   where: {
     *     // ... filter to delete one Setlist
     *   }
     * })
     * 
    **/
    delete<T extends SetlistDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SetlistDeleteArgs<ExtArgs>>
    ): Prisma__SetlistClient<$Result.GetResult<Prisma.$SetlistPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Setlist.
     * @param {SetlistUpdateArgs} args - Arguments to update one Setlist.
     * @example
     * // Update one Setlist
     * const setlist = await prisma.setlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SetlistUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SetlistUpdateArgs<ExtArgs>>
    ): Prisma__SetlistClient<$Result.GetResult<Prisma.$SetlistPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Setlists.
     * @param {SetlistDeleteManyArgs} args - Arguments to filter Setlists to delete.
     * @example
     * // Delete a few Setlists
     * const { count } = await prisma.setlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SetlistDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SetlistDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Setlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetlistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Setlists
     * const setlist = await prisma.setlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SetlistUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SetlistUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Setlist.
     * @param {SetlistUpsertArgs} args - Arguments to update or create a Setlist.
     * @example
     * // Update or create a Setlist
     * const setlist = await prisma.setlist.upsert({
     *   create: {
     *     // ... data to create a Setlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Setlist we want to update
     *   }
     * })
    **/
    upsert<T extends SetlistUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SetlistUpsertArgs<ExtArgs>>
    ): Prisma__SetlistClient<$Result.GetResult<Prisma.$SetlistPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Setlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetlistCountArgs} args - Arguments to filter Setlists to count.
     * @example
     * // Count the number of Setlists
     * const count = await prisma.setlist.count({
     *   where: {
     *     // ... the filter for the Setlists we want to count
     *   }
     * })
    **/
    count<T extends SetlistCountArgs>(
      args?: Subset<T, SetlistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SetlistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Setlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetlistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SetlistAggregateArgs>(args: Subset<T, SetlistAggregateArgs>): Prisma.PrismaPromise<GetSetlistAggregateType<T>>

    /**
     * Group by Setlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetlistGroupByArgs} args - Group by arguments.
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
      T extends SetlistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SetlistGroupByArgs['orderBy'] }
        : { orderBy?: SetlistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SetlistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSetlistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Setlist model
   */
  readonly fields: SetlistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Setlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SetlistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    ministry<T extends MinistryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MinistryDefaultArgs<ExtArgs>>): Prisma__MinistryClient<$Result.GetResult<Prisma.$MinistryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    createdBy<T extends Setlist$createdByArgs<ExtArgs> = {}>(args?: Subset<T, Setlist$createdByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    items<T extends Setlist$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Setlist$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SetlistItemPayload<ExtArgs>, T, 'findMany'> | Null>;

    events<T extends Setlist$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Setlist$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Setlist model
   */ 
  interface SetlistFieldRefs {
    readonly id: FieldRef<"Setlist", 'String'>
    readonly ministryId: FieldRef<"Setlist", 'String'>
    readonly name: FieldRef<"Setlist", 'String'>
    readonly date: FieldRef<"Setlist", 'DateTime'>
    readonly liturgyType: FieldRef<"Setlist", 'String'>
    readonly season: FieldRef<"Setlist", 'String'>
    readonly createdAt: FieldRef<"Setlist", 'DateTime'>
    readonly createdById: FieldRef<"Setlist", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Setlist findUnique
   */
  export type SetlistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setlist
     */
    select?: SetlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SetlistInclude<ExtArgs> | null
    /**
     * Filter, which Setlist to fetch.
     */
    where: SetlistWhereUniqueInput
  }


  /**
   * Setlist findUniqueOrThrow
   */
  export type SetlistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setlist
     */
    select?: SetlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SetlistInclude<ExtArgs> | null
    /**
     * Filter, which Setlist to fetch.
     */
    where: SetlistWhereUniqueInput
  }


  /**
   * Setlist findFirst
   */
  export type SetlistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setlist
     */
    select?: SetlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SetlistInclude<ExtArgs> | null
    /**
     * Filter, which Setlist to fetch.
     */
    where?: SetlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Setlists to fetch.
     */
    orderBy?: SetlistOrderByWithRelationInput | SetlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Setlists.
     */
    cursor?: SetlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Setlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Setlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Setlists.
     */
    distinct?: SetlistScalarFieldEnum | SetlistScalarFieldEnum[]
  }


  /**
   * Setlist findFirstOrThrow
   */
  export type SetlistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setlist
     */
    select?: SetlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SetlistInclude<ExtArgs> | null
    /**
     * Filter, which Setlist to fetch.
     */
    where?: SetlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Setlists to fetch.
     */
    orderBy?: SetlistOrderByWithRelationInput | SetlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Setlists.
     */
    cursor?: SetlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Setlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Setlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Setlists.
     */
    distinct?: SetlistScalarFieldEnum | SetlistScalarFieldEnum[]
  }


  /**
   * Setlist findMany
   */
  export type SetlistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setlist
     */
    select?: SetlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SetlistInclude<ExtArgs> | null
    /**
     * Filter, which Setlists to fetch.
     */
    where?: SetlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Setlists to fetch.
     */
    orderBy?: SetlistOrderByWithRelationInput | SetlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Setlists.
     */
    cursor?: SetlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Setlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Setlists.
     */
    skip?: number
    distinct?: SetlistScalarFieldEnum | SetlistScalarFieldEnum[]
  }


  /**
   * Setlist create
   */
  export type SetlistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setlist
     */
    select?: SetlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SetlistInclude<ExtArgs> | null
    /**
     * The data needed to create a Setlist.
     */
    data: XOR<SetlistCreateInput, SetlistUncheckedCreateInput>
  }


  /**
   * Setlist createMany
   */
  export type SetlistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Setlists.
     */
    data: SetlistCreateManyInput | SetlistCreateManyInput[]
  }


  /**
   * Setlist update
   */
  export type SetlistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setlist
     */
    select?: SetlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SetlistInclude<ExtArgs> | null
    /**
     * The data needed to update a Setlist.
     */
    data: XOR<SetlistUpdateInput, SetlistUncheckedUpdateInput>
    /**
     * Choose, which Setlist to update.
     */
    where: SetlistWhereUniqueInput
  }


  /**
   * Setlist updateMany
   */
  export type SetlistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Setlists.
     */
    data: XOR<SetlistUpdateManyMutationInput, SetlistUncheckedUpdateManyInput>
    /**
     * Filter which Setlists to update
     */
    where?: SetlistWhereInput
  }


  /**
   * Setlist upsert
   */
  export type SetlistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setlist
     */
    select?: SetlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SetlistInclude<ExtArgs> | null
    /**
     * The filter to search for the Setlist to update in case it exists.
     */
    where: SetlistWhereUniqueInput
    /**
     * In case the Setlist found by the `where` argument doesn't exist, create a new Setlist with this data.
     */
    create: XOR<SetlistCreateInput, SetlistUncheckedCreateInput>
    /**
     * In case the Setlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SetlistUpdateInput, SetlistUncheckedUpdateInput>
  }


  /**
   * Setlist delete
   */
  export type SetlistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setlist
     */
    select?: SetlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SetlistInclude<ExtArgs> | null
    /**
     * Filter which Setlist to delete.
     */
    where: SetlistWhereUniqueInput
  }


  /**
   * Setlist deleteMany
   */
  export type SetlistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Setlists to delete
     */
    where?: SetlistWhereInput
  }


  /**
   * Setlist.createdBy
   */
  export type Setlist$createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * Setlist.items
   */
  export type Setlist$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetlistItem
     */
    select?: SetlistItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SetlistItemInclude<ExtArgs> | null
    where?: SetlistItemWhereInput
    orderBy?: SetlistItemOrderByWithRelationInput | SetlistItemOrderByWithRelationInput[]
    cursor?: SetlistItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SetlistItemScalarFieldEnum | SetlistItemScalarFieldEnum[]
  }


  /**
   * Setlist.events
   */
  export type Setlist$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventLogInclude<ExtArgs> | null
    where?: EventLogWhereInput
    orderBy?: EventLogOrderByWithRelationInput | EventLogOrderByWithRelationInput[]
    cursor?: EventLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventLogScalarFieldEnum | EventLogScalarFieldEnum[]
  }


  /**
   * Setlist without action
   */
  export type SetlistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setlist
     */
    select?: SetlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SetlistInclude<ExtArgs> | null
  }



  /**
   * Model SetlistItem
   */

  export type AggregateSetlistItem = {
    _count: SetlistItemCountAggregateOutputType | null
    _avg: SetlistItemAvgAggregateOutputType | null
    _sum: SetlistItemSumAggregateOutputType | null
    _min: SetlistItemMinAggregateOutputType | null
    _max: SetlistItemMaxAggregateOutputType | null
  }

  export type SetlistItemAvgAggregateOutputType = {
    order: number | null
  }

  export type SetlistItemSumAggregateOutputType = {
    order: number | null
  }

  export type SetlistItemMinAggregateOutputType = {
    id: string | null
    setlistId: string | null
    order: number | null
    part: string | null
    arrangementId: string | null
    notes: string | null
    createdAt: Date | null
  }

  export type SetlistItemMaxAggregateOutputType = {
    id: string | null
    setlistId: string | null
    order: number | null
    part: string | null
    arrangementId: string | null
    notes: string | null
    createdAt: Date | null
  }

  export type SetlistItemCountAggregateOutputType = {
    id: number
    setlistId: number
    order: number
    part: number
    arrangementId: number
    notes: number
    createdAt: number
    _all: number
  }


  export type SetlistItemAvgAggregateInputType = {
    order?: true
  }

  export type SetlistItemSumAggregateInputType = {
    order?: true
  }

  export type SetlistItemMinAggregateInputType = {
    id?: true
    setlistId?: true
    order?: true
    part?: true
    arrangementId?: true
    notes?: true
    createdAt?: true
  }

  export type SetlistItemMaxAggregateInputType = {
    id?: true
    setlistId?: true
    order?: true
    part?: true
    arrangementId?: true
    notes?: true
    createdAt?: true
  }

  export type SetlistItemCountAggregateInputType = {
    id?: true
    setlistId?: true
    order?: true
    part?: true
    arrangementId?: true
    notes?: true
    createdAt?: true
    _all?: true
  }

  export type SetlistItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SetlistItem to aggregate.
     */
    where?: SetlistItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SetlistItems to fetch.
     */
    orderBy?: SetlistItemOrderByWithRelationInput | SetlistItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SetlistItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SetlistItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SetlistItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SetlistItems
    **/
    _count?: true | SetlistItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SetlistItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SetlistItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SetlistItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SetlistItemMaxAggregateInputType
  }

  export type GetSetlistItemAggregateType<T extends SetlistItemAggregateArgs> = {
        [P in keyof T & keyof AggregateSetlistItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSetlistItem[P]>
      : GetScalarType<T[P], AggregateSetlistItem[P]>
  }




  export type SetlistItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SetlistItemWhereInput
    orderBy?: SetlistItemOrderByWithAggregationInput | SetlistItemOrderByWithAggregationInput[]
    by: SetlistItemScalarFieldEnum[] | SetlistItemScalarFieldEnum
    having?: SetlistItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SetlistItemCountAggregateInputType | true
    _avg?: SetlistItemAvgAggregateInputType
    _sum?: SetlistItemSumAggregateInputType
    _min?: SetlistItemMinAggregateInputType
    _max?: SetlistItemMaxAggregateInputType
  }

  export type SetlistItemGroupByOutputType = {
    id: string
    setlistId: string
    order: number
    part: string
    arrangementId: string
    notes: string | null
    createdAt: Date
    _count: SetlistItemCountAggregateOutputType | null
    _avg: SetlistItemAvgAggregateOutputType | null
    _sum: SetlistItemSumAggregateOutputType | null
    _min: SetlistItemMinAggregateOutputType | null
    _max: SetlistItemMaxAggregateOutputType | null
  }

  type GetSetlistItemGroupByPayload<T extends SetlistItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SetlistItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SetlistItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SetlistItemGroupByOutputType[P]>
            : GetScalarType<T[P], SetlistItemGroupByOutputType[P]>
        }
      >
    >


  export type SetlistItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    setlistId?: boolean
    order?: boolean
    part?: boolean
    arrangementId?: boolean
    notes?: boolean
    createdAt?: boolean
    setlist?: boolean | SetlistDefaultArgs<ExtArgs>
    arrangement?: boolean | ArrangementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["setlistItem"]>

  export type SetlistItemSelectScalar = {
    id?: boolean
    setlistId?: boolean
    order?: boolean
    part?: boolean
    arrangementId?: boolean
    notes?: boolean
    createdAt?: boolean
  }

  export type SetlistItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    setlist?: boolean | SetlistDefaultArgs<ExtArgs>
    arrangement?: boolean | ArrangementDefaultArgs<ExtArgs>
  }


  export type $SetlistItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SetlistItem"
    objects: {
      setlist: Prisma.$SetlistPayload<ExtArgs>
      arrangement: Prisma.$ArrangementPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      setlistId: string
      order: number
      part: string
      arrangementId: string
      notes: string | null
      createdAt: Date
    }, ExtArgs["result"]["setlistItem"]>
    composites: {}
  }


  type SetlistItemGetPayload<S extends boolean | null | undefined | SetlistItemDefaultArgs> = $Result.GetResult<Prisma.$SetlistItemPayload, S>

  type SetlistItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SetlistItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SetlistItemCountAggregateInputType | true
    }

  export interface SetlistItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SetlistItem'], meta: { name: 'SetlistItem' } }
    /**
     * Find zero or one SetlistItem that matches the filter.
     * @param {SetlistItemFindUniqueArgs} args - Arguments to find a SetlistItem
     * @example
     * // Get one SetlistItem
     * const setlistItem = await prisma.setlistItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SetlistItemFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SetlistItemFindUniqueArgs<ExtArgs>>
    ): Prisma__SetlistItemClient<$Result.GetResult<Prisma.$SetlistItemPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SetlistItem that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SetlistItemFindUniqueOrThrowArgs} args - Arguments to find a SetlistItem
     * @example
     * // Get one SetlistItem
     * const setlistItem = await prisma.setlistItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SetlistItemFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SetlistItemFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SetlistItemClient<$Result.GetResult<Prisma.$SetlistItemPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SetlistItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetlistItemFindFirstArgs} args - Arguments to find a SetlistItem
     * @example
     * // Get one SetlistItem
     * const setlistItem = await prisma.setlistItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SetlistItemFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SetlistItemFindFirstArgs<ExtArgs>>
    ): Prisma__SetlistItemClient<$Result.GetResult<Prisma.$SetlistItemPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SetlistItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetlistItemFindFirstOrThrowArgs} args - Arguments to find a SetlistItem
     * @example
     * // Get one SetlistItem
     * const setlistItem = await prisma.setlistItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SetlistItemFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SetlistItemFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SetlistItemClient<$Result.GetResult<Prisma.$SetlistItemPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SetlistItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetlistItemFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SetlistItems
     * const setlistItems = await prisma.setlistItem.findMany()
     * 
     * // Get first 10 SetlistItems
     * const setlistItems = await prisma.setlistItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const setlistItemWithIdOnly = await prisma.setlistItem.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SetlistItemFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SetlistItemFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SetlistItemPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SetlistItem.
     * @param {SetlistItemCreateArgs} args - Arguments to create a SetlistItem.
     * @example
     * // Create one SetlistItem
     * const SetlistItem = await prisma.setlistItem.create({
     *   data: {
     *     // ... data to create a SetlistItem
     *   }
     * })
     * 
    **/
    create<T extends SetlistItemCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SetlistItemCreateArgs<ExtArgs>>
    ): Prisma__SetlistItemClient<$Result.GetResult<Prisma.$SetlistItemPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SetlistItems.
     *     @param {SetlistItemCreateManyArgs} args - Arguments to create many SetlistItems.
     *     @example
     *     // Create many SetlistItems
     *     const setlistItem = await prisma.setlistItem.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SetlistItemCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SetlistItemCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SetlistItem.
     * @param {SetlistItemDeleteArgs} args - Arguments to delete one SetlistItem.
     * @example
     * // Delete one SetlistItem
     * const SetlistItem = await prisma.setlistItem.delete({
     *   where: {
     *     // ... filter to delete one SetlistItem
     *   }
     * })
     * 
    **/
    delete<T extends SetlistItemDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SetlistItemDeleteArgs<ExtArgs>>
    ): Prisma__SetlistItemClient<$Result.GetResult<Prisma.$SetlistItemPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SetlistItem.
     * @param {SetlistItemUpdateArgs} args - Arguments to update one SetlistItem.
     * @example
     * // Update one SetlistItem
     * const setlistItem = await prisma.setlistItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SetlistItemUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SetlistItemUpdateArgs<ExtArgs>>
    ): Prisma__SetlistItemClient<$Result.GetResult<Prisma.$SetlistItemPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SetlistItems.
     * @param {SetlistItemDeleteManyArgs} args - Arguments to filter SetlistItems to delete.
     * @example
     * // Delete a few SetlistItems
     * const { count } = await prisma.setlistItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SetlistItemDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SetlistItemDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SetlistItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetlistItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SetlistItems
     * const setlistItem = await prisma.setlistItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SetlistItemUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SetlistItemUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SetlistItem.
     * @param {SetlistItemUpsertArgs} args - Arguments to update or create a SetlistItem.
     * @example
     * // Update or create a SetlistItem
     * const setlistItem = await prisma.setlistItem.upsert({
     *   create: {
     *     // ... data to create a SetlistItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SetlistItem we want to update
     *   }
     * })
    **/
    upsert<T extends SetlistItemUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SetlistItemUpsertArgs<ExtArgs>>
    ): Prisma__SetlistItemClient<$Result.GetResult<Prisma.$SetlistItemPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SetlistItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetlistItemCountArgs} args - Arguments to filter SetlistItems to count.
     * @example
     * // Count the number of SetlistItems
     * const count = await prisma.setlistItem.count({
     *   where: {
     *     // ... the filter for the SetlistItems we want to count
     *   }
     * })
    **/
    count<T extends SetlistItemCountArgs>(
      args?: Subset<T, SetlistItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SetlistItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SetlistItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetlistItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SetlistItemAggregateArgs>(args: Subset<T, SetlistItemAggregateArgs>): Prisma.PrismaPromise<GetSetlistItemAggregateType<T>>

    /**
     * Group by SetlistItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetlistItemGroupByArgs} args - Group by arguments.
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
      T extends SetlistItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SetlistItemGroupByArgs['orderBy'] }
        : { orderBy?: SetlistItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SetlistItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSetlistItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SetlistItem model
   */
  readonly fields: SetlistItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SetlistItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SetlistItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    setlist<T extends SetlistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SetlistDefaultArgs<ExtArgs>>): Prisma__SetlistClient<$Result.GetResult<Prisma.$SetlistPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    arrangement<T extends ArrangementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArrangementDefaultArgs<ExtArgs>>): Prisma__ArrangementClient<$Result.GetResult<Prisma.$ArrangementPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SetlistItem model
   */ 
  interface SetlistItemFieldRefs {
    readonly id: FieldRef<"SetlistItem", 'String'>
    readonly setlistId: FieldRef<"SetlistItem", 'String'>
    readonly order: FieldRef<"SetlistItem", 'Int'>
    readonly part: FieldRef<"SetlistItem", 'String'>
    readonly arrangementId: FieldRef<"SetlistItem", 'String'>
    readonly notes: FieldRef<"SetlistItem", 'String'>
    readonly createdAt: FieldRef<"SetlistItem", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * SetlistItem findUnique
   */
  export type SetlistItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetlistItem
     */
    select?: SetlistItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SetlistItemInclude<ExtArgs> | null
    /**
     * Filter, which SetlistItem to fetch.
     */
    where: SetlistItemWhereUniqueInput
  }


  /**
   * SetlistItem findUniqueOrThrow
   */
  export type SetlistItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetlistItem
     */
    select?: SetlistItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SetlistItemInclude<ExtArgs> | null
    /**
     * Filter, which SetlistItem to fetch.
     */
    where: SetlistItemWhereUniqueInput
  }


  /**
   * SetlistItem findFirst
   */
  export type SetlistItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetlistItem
     */
    select?: SetlistItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SetlistItemInclude<ExtArgs> | null
    /**
     * Filter, which SetlistItem to fetch.
     */
    where?: SetlistItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SetlistItems to fetch.
     */
    orderBy?: SetlistItemOrderByWithRelationInput | SetlistItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SetlistItems.
     */
    cursor?: SetlistItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SetlistItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SetlistItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SetlistItems.
     */
    distinct?: SetlistItemScalarFieldEnum | SetlistItemScalarFieldEnum[]
  }


  /**
   * SetlistItem findFirstOrThrow
   */
  export type SetlistItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetlistItem
     */
    select?: SetlistItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SetlistItemInclude<ExtArgs> | null
    /**
     * Filter, which SetlistItem to fetch.
     */
    where?: SetlistItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SetlistItems to fetch.
     */
    orderBy?: SetlistItemOrderByWithRelationInput | SetlistItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SetlistItems.
     */
    cursor?: SetlistItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SetlistItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SetlistItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SetlistItems.
     */
    distinct?: SetlistItemScalarFieldEnum | SetlistItemScalarFieldEnum[]
  }


  /**
   * SetlistItem findMany
   */
  export type SetlistItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetlistItem
     */
    select?: SetlistItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SetlistItemInclude<ExtArgs> | null
    /**
     * Filter, which SetlistItems to fetch.
     */
    where?: SetlistItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SetlistItems to fetch.
     */
    orderBy?: SetlistItemOrderByWithRelationInput | SetlistItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SetlistItems.
     */
    cursor?: SetlistItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SetlistItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SetlistItems.
     */
    skip?: number
    distinct?: SetlistItemScalarFieldEnum | SetlistItemScalarFieldEnum[]
  }


  /**
   * SetlistItem create
   */
  export type SetlistItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetlistItem
     */
    select?: SetlistItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SetlistItemInclude<ExtArgs> | null
    /**
     * The data needed to create a SetlistItem.
     */
    data: XOR<SetlistItemCreateInput, SetlistItemUncheckedCreateInput>
  }


  /**
   * SetlistItem createMany
   */
  export type SetlistItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SetlistItems.
     */
    data: SetlistItemCreateManyInput | SetlistItemCreateManyInput[]
  }


  /**
   * SetlistItem update
   */
  export type SetlistItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetlistItem
     */
    select?: SetlistItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SetlistItemInclude<ExtArgs> | null
    /**
     * The data needed to update a SetlistItem.
     */
    data: XOR<SetlistItemUpdateInput, SetlistItemUncheckedUpdateInput>
    /**
     * Choose, which SetlistItem to update.
     */
    where: SetlistItemWhereUniqueInput
  }


  /**
   * SetlistItem updateMany
   */
  export type SetlistItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SetlistItems.
     */
    data: XOR<SetlistItemUpdateManyMutationInput, SetlistItemUncheckedUpdateManyInput>
    /**
     * Filter which SetlistItems to update
     */
    where?: SetlistItemWhereInput
  }


  /**
   * SetlistItem upsert
   */
  export type SetlistItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetlistItem
     */
    select?: SetlistItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SetlistItemInclude<ExtArgs> | null
    /**
     * The filter to search for the SetlistItem to update in case it exists.
     */
    where: SetlistItemWhereUniqueInput
    /**
     * In case the SetlistItem found by the `where` argument doesn't exist, create a new SetlistItem with this data.
     */
    create: XOR<SetlistItemCreateInput, SetlistItemUncheckedCreateInput>
    /**
     * In case the SetlistItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SetlistItemUpdateInput, SetlistItemUncheckedUpdateInput>
  }


  /**
   * SetlistItem delete
   */
  export type SetlistItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetlistItem
     */
    select?: SetlistItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SetlistItemInclude<ExtArgs> | null
    /**
     * Filter which SetlistItem to delete.
     */
    where: SetlistItemWhereUniqueInput
  }


  /**
   * SetlistItem deleteMany
   */
  export type SetlistItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SetlistItems to delete
     */
    where?: SetlistItemWhereInput
  }


  /**
   * SetlistItem without action
   */
  export type SetlistItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetlistItem
     */
    select?: SetlistItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SetlistItemInclude<ExtArgs> | null
  }



  /**
   * Model EventLog
   */

  export type AggregateEventLog = {
    _count: EventLogCountAggregateOutputType | null
    _min: EventLogMinAggregateOutputType | null
    _max: EventLogMaxAggregateOutputType | null
  }

  export type EventLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    ministryId: string | null
    setlistId: string | null
    type: string | null
    payloadJson: string | null
    createdAt: Date | null
  }

  export type EventLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    ministryId: string | null
    setlistId: string | null
    type: string | null
    payloadJson: string | null
    createdAt: Date | null
  }

  export type EventLogCountAggregateOutputType = {
    id: number
    userId: number
    ministryId: number
    setlistId: number
    type: number
    payloadJson: number
    createdAt: number
    _all: number
  }


  export type EventLogMinAggregateInputType = {
    id?: true
    userId?: true
    ministryId?: true
    setlistId?: true
    type?: true
    payloadJson?: true
    createdAt?: true
  }

  export type EventLogMaxAggregateInputType = {
    id?: true
    userId?: true
    ministryId?: true
    setlistId?: true
    type?: true
    payloadJson?: true
    createdAt?: true
  }

  export type EventLogCountAggregateInputType = {
    id?: true
    userId?: true
    ministryId?: true
    setlistId?: true
    type?: true
    payloadJson?: true
    createdAt?: true
    _all?: true
  }

  export type EventLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventLog to aggregate.
     */
    where?: EventLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventLogs to fetch.
     */
    orderBy?: EventLogOrderByWithRelationInput | EventLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventLogs
    **/
    _count?: true | EventLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventLogMaxAggregateInputType
  }

  export type GetEventLogAggregateType<T extends EventLogAggregateArgs> = {
        [P in keyof T & keyof AggregateEventLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventLog[P]>
      : GetScalarType<T[P], AggregateEventLog[P]>
  }




  export type EventLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventLogWhereInput
    orderBy?: EventLogOrderByWithAggregationInput | EventLogOrderByWithAggregationInput[]
    by: EventLogScalarFieldEnum[] | EventLogScalarFieldEnum
    having?: EventLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventLogCountAggregateInputType | true
    _min?: EventLogMinAggregateInputType
    _max?: EventLogMaxAggregateInputType
  }

  export type EventLogGroupByOutputType = {
    id: string
    userId: string
    ministryId: string
    setlistId: string
    type: string
    payloadJson: string | null
    createdAt: Date
    _count: EventLogCountAggregateOutputType | null
    _min: EventLogMinAggregateOutputType | null
    _max: EventLogMaxAggregateOutputType | null
  }

  type GetEventLogGroupByPayload<T extends EventLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventLogGroupByOutputType[P]>
            : GetScalarType<T[P], EventLogGroupByOutputType[P]>
        }
      >
    >


  export type EventLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ministryId?: boolean
    setlistId?: boolean
    type?: boolean
    payloadJson?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    ministry?: boolean | MinistryDefaultArgs<ExtArgs>
    setlist?: boolean | SetlistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventLog"]>

  export type EventLogSelectScalar = {
    id?: boolean
    userId?: boolean
    ministryId?: boolean
    setlistId?: boolean
    type?: boolean
    payloadJson?: boolean
    createdAt?: boolean
  }

  export type EventLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    ministry?: boolean | MinistryDefaultArgs<ExtArgs>
    setlist?: boolean | SetlistDefaultArgs<ExtArgs>
  }


  export type $EventLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      ministry: Prisma.$MinistryPayload<ExtArgs>
      setlist: Prisma.$SetlistPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      ministryId: string
      setlistId: string
      type: string
      payloadJson: string | null
      createdAt: Date
    }, ExtArgs["result"]["eventLog"]>
    composites: {}
  }


  type EventLogGetPayload<S extends boolean | null | undefined | EventLogDefaultArgs> = $Result.GetResult<Prisma.$EventLogPayload, S>

  type EventLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EventLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EventLogCountAggregateInputType | true
    }

  export interface EventLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventLog'], meta: { name: 'EventLog' } }
    /**
     * Find zero or one EventLog that matches the filter.
     * @param {EventLogFindUniqueArgs} args - Arguments to find a EventLog
     * @example
     * // Get one EventLog
     * const eventLog = await prisma.eventLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EventLogFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EventLogFindUniqueArgs<ExtArgs>>
    ): Prisma__EventLogClient<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one EventLog that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EventLogFindUniqueOrThrowArgs} args - Arguments to find a EventLog
     * @example
     * // Get one EventLog
     * const eventLog = await prisma.eventLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EventLogFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EventLogFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EventLogClient<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first EventLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventLogFindFirstArgs} args - Arguments to find a EventLog
     * @example
     * // Get one EventLog
     * const eventLog = await prisma.eventLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EventLogFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EventLogFindFirstArgs<ExtArgs>>
    ): Prisma__EventLogClient<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first EventLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventLogFindFirstOrThrowArgs} args - Arguments to find a EventLog
     * @example
     * // Get one EventLog
     * const eventLog = await prisma.eventLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EventLogFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EventLogFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EventLogClient<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more EventLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventLogFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventLogs
     * const eventLogs = await prisma.eventLog.findMany()
     * 
     * // Get first 10 EventLogs
     * const eventLogs = await prisma.eventLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventLogWithIdOnly = await prisma.eventLog.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EventLogFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EventLogFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a EventLog.
     * @param {EventLogCreateArgs} args - Arguments to create a EventLog.
     * @example
     * // Create one EventLog
     * const EventLog = await prisma.eventLog.create({
     *   data: {
     *     // ... data to create a EventLog
     *   }
     * })
     * 
    **/
    create<T extends EventLogCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EventLogCreateArgs<ExtArgs>>
    ): Prisma__EventLogClient<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many EventLogs.
     *     @param {EventLogCreateManyArgs} args - Arguments to create many EventLogs.
     *     @example
     *     // Create many EventLogs
     *     const eventLog = await prisma.eventLog.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EventLogCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EventLogCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EventLog.
     * @param {EventLogDeleteArgs} args - Arguments to delete one EventLog.
     * @example
     * // Delete one EventLog
     * const EventLog = await prisma.eventLog.delete({
     *   where: {
     *     // ... filter to delete one EventLog
     *   }
     * })
     * 
    **/
    delete<T extends EventLogDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EventLogDeleteArgs<ExtArgs>>
    ): Prisma__EventLogClient<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one EventLog.
     * @param {EventLogUpdateArgs} args - Arguments to update one EventLog.
     * @example
     * // Update one EventLog
     * const eventLog = await prisma.eventLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EventLogUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EventLogUpdateArgs<ExtArgs>>
    ): Prisma__EventLogClient<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more EventLogs.
     * @param {EventLogDeleteManyArgs} args - Arguments to filter EventLogs to delete.
     * @example
     * // Delete a few EventLogs
     * const { count } = await prisma.eventLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EventLogDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EventLogDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventLogs
     * const eventLog = await prisma.eventLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EventLogUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EventLogUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EventLog.
     * @param {EventLogUpsertArgs} args - Arguments to update or create a EventLog.
     * @example
     * // Update or create a EventLog
     * const eventLog = await prisma.eventLog.upsert({
     *   create: {
     *     // ... data to create a EventLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventLog we want to update
     *   }
     * })
    **/
    upsert<T extends EventLogUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EventLogUpsertArgs<ExtArgs>>
    ): Prisma__EventLogClient<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of EventLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventLogCountArgs} args - Arguments to filter EventLogs to count.
     * @example
     * // Count the number of EventLogs
     * const count = await prisma.eventLog.count({
     *   where: {
     *     // ... the filter for the EventLogs we want to count
     *   }
     * })
    **/
    count<T extends EventLogCountArgs>(
      args?: Subset<T, EventLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventLogAggregateArgs>(args: Subset<T, EventLogAggregateArgs>): Prisma.PrismaPromise<GetEventLogAggregateType<T>>

    /**
     * Group by EventLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventLogGroupByArgs} args - Group by arguments.
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
      T extends EventLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventLogGroupByArgs['orderBy'] }
        : { orderBy?: EventLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventLog model
   */
  readonly fields: EventLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    ministry<T extends MinistryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MinistryDefaultArgs<ExtArgs>>): Prisma__MinistryClient<$Result.GetResult<Prisma.$MinistryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    setlist<T extends SetlistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SetlistDefaultArgs<ExtArgs>>): Prisma__SetlistClient<$Result.GetResult<Prisma.$SetlistPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the EventLog model
   */ 
  interface EventLogFieldRefs {
    readonly id: FieldRef<"EventLog", 'String'>
    readonly userId: FieldRef<"EventLog", 'String'>
    readonly ministryId: FieldRef<"EventLog", 'String'>
    readonly setlistId: FieldRef<"EventLog", 'String'>
    readonly type: FieldRef<"EventLog", 'String'>
    readonly payloadJson: FieldRef<"EventLog", 'String'>
    readonly createdAt: FieldRef<"EventLog", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * EventLog findUnique
   */
  export type EventLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventLogInclude<ExtArgs> | null
    /**
     * Filter, which EventLog to fetch.
     */
    where: EventLogWhereUniqueInput
  }


  /**
   * EventLog findUniqueOrThrow
   */
  export type EventLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventLogInclude<ExtArgs> | null
    /**
     * Filter, which EventLog to fetch.
     */
    where: EventLogWhereUniqueInput
  }


  /**
   * EventLog findFirst
   */
  export type EventLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventLogInclude<ExtArgs> | null
    /**
     * Filter, which EventLog to fetch.
     */
    where?: EventLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventLogs to fetch.
     */
    orderBy?: EventLogOrderByWithRelationInput | EventLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventLogs.
     */
    cursor?: EventLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventLogs.
     */
    distinct?: EventLogScalarFieldEnum | EventLogScalarFieldEnum[]
  }


  /**
   * EventLog findFirstOrThrow
   */
  export type EventLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventLogInclude<ExtArgs> | null
    /**
     * Filter, which EventLog to fetch.
     */
    where?: EventLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventLogs to fetch.
     */
    orderBy?: EventLogOrderByWithRelationInput | EventLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventLogs.
     */
    cursor?: EventLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventLogs.
     */
    distinct?: EventLogScalarFieldEnum | EventLogScalarFieldEnum[]
  }


  /**
   * EventLog findMany
   */
  export type EventLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventLogInclude<ExtArgs> | null
    /**
     * Filter, which EventLogs to fetch.
     */
    where?: EventLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventLogs to fetch.
     */
    orderBy?: EventLogOrderByWithRelationInput | EventLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventLogs.
     */
    cursor?: EventLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventLogs.
     */
    skip?: number
    distinct?: EventLogScalarFieldEnum | EventLogScalarFieldEnum[]
  }


  /**
   * EventLog create
   */
  export type EventLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventLogInclude<ExtArgs> | null
    /**
     * The data needed to create a EventLog.
     */
    data: XOR<EventLogCreateInput, EventLogUncheckedCreateInput>
  }


  /**
   * EventLog createMany
   */
  export type EventLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventLogs.
     */
    data: EventLogCreateManyInput | EventLogCreateManyInput[]
  }


  /**
   * EventLog update
   */
  export type EventLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventLogInclude<ExtArgs> | null
    /**
     * The data needed to update a EventLog.
     */
    data: XOR<EventLogUpdateInput, EventLogUncheckedUpdateInput>
    /**
     * Choose, which EventLog to update.
     */
    where: EventLogWhereUniqueInput
  }


  /**
   * EventLog updateMany
   */
  export type EventLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventLogs.
     */
    data: XOR<EventLogUpdateManyMutationInput, EventLogUncheckedUpdateManyInput>
    /**
     * Filter which EventLogs to update
     */
    where?: EventLogWhereInput
  }


  /**
   * EventLog upsert
   */
  export type EventLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventLogInclude<ExtArgs> | null
    /**
     * The filter to search for the EventLog to update in case it exists.
     */
    where: EventLogWhereUniqueInput
    /**
     * In case the EventLog found by the `where` argument doesn't exist, create a new EventLog with this data.
     */
    create: XOR<EventLogCreateInput, EventLogUncheckedCreateInput>
    /**
     * In case the EventLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventLogUpdateInput, EventLogUncheckedUpdateInput>
  }


  /**
   * EventLog delete
   */
  export type EventLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventLogInclude<ExtArgs> | null
    /**
     * Filter which EventLog to delete.
     */
    where: EventLogWhereUniqueInput
  }


  /**
   * EventLog deleteMany
   */
  export type EventLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventLogs to delete
     */
    where?: EventLogWhereInput
  }


  /**
   * EventLog without action
   */
  export type EventLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventLogInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MinistryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    ownerUserId: 'ownerUserId',
    createdAt: 'createdAt'
  };

  export type MinistryScalarFieldEnum = (typeof MinistryScalarFieldEnum)[keyof typeof MinistryScalarFieldEnum]


  export const MinistryMemberScalarFieldEnum: {
    id: 'id',
    ministryId: 'ministryId',
    userId: 'userId',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type MinistryMemberScalarFieldEnum = (typeof MinistryMemberScalarFieldEnum)[keyof typeof MinistryMemberScalarFieldEnum]


  export const SongScalarFieldEnum: {
    id: 'id',
    title: 'title',
    artist: 'artist',
    liturgicalTags: 'liturgicalTags',
    bpm: 'bpm',
    key: 'key',
    timeSignature: 'timeSignature',
    language: 'language',
    season: 'season',
    parts: 'parts',
    createdAt: 'createdAt'
  };

  export type SongScalarFieldEnum = (typeof SongScalarFieldEnum)[keyof typeof SongScalarFieldEnum]


  export const ArrangementScalarFieldEnum: {
    id: 'id',
    songId: 'songId',
    name: 'name',
    defaultKey: 'defaultKey',
    defaultBpm: 'defaultBpm',
    structureJson: 'structureJson',
    stemsJson: 'stemsJson',
    audioDemoUrl: 'audioDemoUrl',
    createdAt: 'createdAt'
  };

  export type ArrangementScalarFieldEnum = (typeof ArrangementScalarFieldEnum)[keyof typeof ArrangementScalarFieldEnum]


  export const SetlistScalarFieldEnum: {
    id: 'id',
    ministryId: 'ministryId',
    name: 'name',
    date: 'date',
    liturgyType: 'liturgyType',
    season: 'season',
    createdAt: 'createdAt',
    createdById: 'createdById'
  };

  export type SetlistScalarFieldEnum = (typeof SetlistScalarFieldEnum)[keyof typeof SetlistScalarFieldEnum]


  export const SetlistItemScalarFieldEnum: {
    id: 'id',
    setlistId: 'setlistId',
    order: 'order',
    part: 'part',
    arrangementId: 'arrangementId',
    notes: 'notes',
    createdAt: 'createdAt'
  };

  export type SetlistItemScalarFieldEnum = (typeof SetlistItemScalarFieldEnum)[keyof typeof SetlistItemScalarFieldEnum]


  export const EventLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    ministryId: 'ministryId',
    setlistId: 'setlistId',
    type: 'type',
    payloadJson: 'payloadJson',
    createdAt: 'createdAt'
  };

  export type EventLogScalarFieldEnum = (typeof EventLogScalarFieldEnum)[keyof typeof EventLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    ministries?: MinistryListRelationFilter
    memberships?: MinistryMemberListRelationFilter
    setlists?: SetlistListRelationFilter
    events?: EventLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    ministries?: MinistryOrderByRelationAggregateInput
    memberships?: MinistryMemberOrderByRelationAggregateInput
    setlists?: SetlistOrderByRelationAggregateInput
    events?: EventLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    ministries?: MinistryListRelationFilter
    memberships?: MinistryMemberListRelationFilter
    setlists?: SetlistListRelationFilter
    events?: EventLogListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type MinistryWhereInput = {
    AND?: MinistryWhereInput | MinistryWhereInput[]
    OR?: MinistryWhereInput[]
    NOT?: MinistryWhereInput | MinistryWhereInput[]
    id?: StringFilter<"Ministry"> | string
    name?: StringFilter<"Ministry"> | string
    ownerUserId?: StringFilter<"Ministry"> | string
    createdAt?: DateTimeFilter<"Ministry"> | Date | string
    owner?: XOR<UserRelationFilter, UserWhereInput>
    members?: MinistryMemberListRelationFilter
    setlists?: SetlistListRelationFilter
    events?: EventLogListRelationFilter
  }

  export type MinistryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    ownerUserId?: SortOrder
    createdAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    members?: MinistryMemberOrderByRelationAggregateInput
    setlists?: SetlistOrderByRelationAggregateInput
    events?: EventLogOrderByRelationAggregateInput
  }

  export type MinistryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MinistryWhereInput | MinistryWhereInput[]
    OR?: MinistryWhereInput[]
    NOT?: MinistryWhereInput | MinistryWhereInput[]
    name?: StringFilter<"Ministry"> | string
    ownerUserId?: StringFilter<"Ministry"> | string
    createdAt?: DateTimeFilter<"Ministry"> | Date | string
    owner?: XOR<UserRelationFilter, UserWhereInput>
    members?: MinistryMemberListRelationFilter
    setlists?: SetlistListRelationFilter
    events?: EventLogListRelationFilter
  }, "id">

  export type MinistryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    ownerUserId?: SortOrder
    createdAt?: SortOrder
    _count?: MinistryCountOrderByAggregateInput
    _max?: MinistryMaxOrderByAggregateInput
    _min?: MinistryMinOrderByAggregateInput
  }

  export type MinistryScalarWhereWithAggregatesInput = {
    AND?: MinistryScalarWhereWithAggregatesInput | MinistryScalarWhereWithAggregatesInput[]
    OR?: MinistryScalarWhereWithAggregatesInput[]
    NOT?: MinistryScalarWhereWithAggregatesInput | MinistryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ministry"> | string
    name?: StringWithAggregatesFilter<"Ministry"> | string
    ownerUserId?: StringWithAggregatesFilter<"Ministry"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Ministry"> | Date | string
  }

  export type MinistryMemberWhereInput = {
    AND?: MinistryMemberWhereInput | MinistryMemberWhereInput[]
    OR?: MinistryMemberWhereInput[]
    NOT?: MinistryMemberWhereInput | MinistryMemberWhereInput[]
    id?: StringFilter<"MinistryMember"> | string
    ministryId?: StringFilter<"MinistryMember"> | string
    userId?: StringFilter<"MinistryMember"> | string
    role?: StringFilter<"MinistryMember"> | string
    createdAt?: DateTimeFilter<"MinistryMember"> | Date | string
    ministry?: XOR<MinistryRelationFilter, MinistryWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type MinistryMemberOrderByWithRelationInput = {
    id?: SortOrder
    ministryId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    ministry?: MinistryOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type MinistryMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MinistryMemberWhereInput | MinistryMemberWhereInput[]
    OR?: MinistryMemberWhereInput[]
    NOT?: MinistryMemberWhereInput | MinistryMemberWhereInput[]
    ministryId?: StringFilter<"MinistryMember"> | string
    userId?: StringFilter<"MinistryMember"> | string
    role?: StringFilter<"MinistryMember"> | string
    createdAt?: DateTimeFilter<"MinistryMember"> | Date | string
    ministry?: XOR<MinistryRelationFilter, MinistryWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type MinistryMemberOrderByWithAggregationInput = {
    id?: SortOrder
    ministryId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: MinistryMemberCountOrderByAggregateInput
    _max?: MinistryMemberMaxOrderByAggregateInput
    _min?: MinistryMemberMinOrderByAggregateInput
  }

  export type MinistryMemberScalarWhereWithAggregatesInput = {
    AND?: MinistryMemberScalarWhereWithAggregatesInput | MinistryMemberScalarWhereWithAggregatesInput[]
    OR?: MinistryMemberScalarWhereWithAggregatesInput[]
    NOT?: MinistryMemberScalarWhereWithAggregatesInput | MinistryMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MinistryMember"> | string
    ministryId?: StringWithAggregatesFilter<"MinistryMember"> | string
    userId?: StringWithAggregatesFilter<"MinistryMember"> | string
    role?: StringWithAggregatesFilter<"MinistryMember"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MinistryMember"> | Date | string
  }

  export type SongWhereInput = {
    AND?: SongWhereInput | SongWhereInput[]
    OR?: SongWhereInput[]
    NOT?: SongWhereInput | SongWhereInput[]
    id?: StringFilter<"Song"> | string
    title?: StringFilter<"Song"> | string
    artist?: StringFilter<"Song"> | string
    liturgicalTags?: StringFilter<"Song"> | string
    bpm?: IntFilter<"Song"> | number
    key?: StringFilter<"Song"> | string
    timeSignature?: StringFilter<"Song"> | string
    language?: StringFilter<"Song"> | string
    season?: StringNullableFilter<"Song"> | string | null
    parts?: StringFilter<"Song"> | string
    createdAt?: DateTimeFilter<"Song"> | Date | string
    arrangements?: ArrangementListRelationFilter
  }

  export type SongOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    artist?: SortOrder
    liturgicalTags?: SortOrder
    bpm?: SortOrder
    key?: SortOrder
    timeSignature?: SortOrder
    language?: SortOrder
    season?: SortOrderInput | SortOrder
    parts?: SortOrder
    createdAt?: SortOrder
    arrangements?: ArrangementOrderByRelationAggregateInput
  }

  export type SongWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SongWhereInput | SongWhereInput[]
    OR?: SongWhereInput[]
    NOT?: SongWhereInput | SongWhereInput[]
    title?: StringFilter<"Song"> | string
    artist?: StringFilter<"Song"> | string
    liturgicalTags?: StringFilter<"Song"> | string
    bpm?: IntFilter<"Song"> | number
    key?: StringFilter<"Song"> | string
    timeSignature?: StringFilter<"Song"> | string
    language?: StringFilter<"Song"> | string
    season?: StringNullableFilter<"Song"> | string | null
    parts?: StringFilter<"Song"> | string
    createdAt?: DateTimeFilter<"Song"> | Date | string
    arrangements?: ArrangementListRelationFilter
  }, "id">

  export type SongOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    artist?: SortOrder
    liturgicalTags?: SortOrder
    bpm?: SortOrder
    key?: SortOrder
    timeSignature?: SortOrder
    language?: SortOrder
    season?: SortOrderInput | SortOrder
    parts?: SortOrder
    createdAt?: SortOrder
    _count?: SongCountOrderByAggregateInput
    _avg?: SongAvgOrderByAggregateInput
    _max?: SongMaxOrderByAggregateInput
    _min?: SongMinOrderByAggregateInput
    _sum?: SongSumOrderByAggregateInput
  }

  export type SongScalarWhereWithAggregatesInput = {
    AND?: SongScalarWhereWithAggregatesInput | SongScalarWhereWithAggregatesInput[]
    OR?: SongScalarWhereWithAggregatesInput[]
    NOT?: SongScalarWhereWithAggregatesInput | SongScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Song"> | string
    title?: StringWithAggregatesFilter<"Song"> | string
    artist?: StringWithAggregatesFilter<"Song"> | string
    liturgicalTags?: StringWithAggregatesFilter<"Song"> | string
    bpm?: IntWithAggregatesFilter<"Song"> | number
    key?: StringWithAggregatesFilter<"Song"> | string
    timeSignature?: StringWithAggregatesFilter<"Song"> | string
    language?: StringWithAggregatesFilter<"Song"> | string
    season?: StringNullableWithAggregatesFilter<"Song"> | string | null
    parts?: StringWithAggregatesFilter<"Song"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Song"> | Date | string
  }

  export type ArrangementWhereInput = {
    AND?: ArrangementWhereInput | ArrangementWhereInput[]
    OR?: ArrangementWhereInput[]
    NOT?: ArrangementWhereInput | ArrangementWhereInput[]
    id?: StringFilter<"Arrangement"> | string
    songId?: StringFilter<"Arrangement"> | string
    name?: StringFilter<"Arrangement"> | string
    defaultKey?: StringFilter<"Arrangement"> | string
    defaultBpm?: IntFilter<"Arrangement"> | number
    structureJson?: StringFilter<"Arrangement"> | string
    stemsJson?: StringFilter<"Arrangement"> | string
    audioDemoUrl?: StringFilter<"Arrangement"> | string
    createdAt?: DateTimeFilter<"Arrangement"> | Date | string
    song?: XOR<SongRelationFilter, SongWhereInput>
    items?: SetlistItemListRelationFilter
  }

  export type ArrangementOrderByWithRelationInput = {
    id?: SortOrder
    songId?: SortOrder
    name?: SortOrder
    defaultKey?: SortOrder
    defaultBpm?: SortOrder
    structureJson?: SortOrder
    stemsJson?: SortOrder
    audioDemoUrl?: SortOrder
    createdAt?: SortOrder
    song?: SongOrderByWithRelationInput
    items?: SetlistItemOrderByRelationAggregateInput
  }

  export type ArrangementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ArrangementWhereInput | ArrangementWhereInput[]
    OR?: ArrangementWhereInput[]
    NOT?: ArrangementWhereInput | ArrangementWhereInput[]
    songId?: StringFilter<"Arrangement"> | string
    name?: StringFilter<"Arrangement"> | string
    defaultKey?: StringFilter<"Arrangement"> | string
    defaultBpm?: IntFilter<"Arrangement"> | number
    structureJson?: StringFilter<"Arrangement"> | string
    stemsJson?: StringFilter<"Arrangement"> | string
    audioDemoUrl?: StringFilter<"Arrangement"> | string
    createdAt?: DateTimeFilter<"Arrangement"> | Date | string
    song?: XOR<SongRelationFilter, SongWhereInput>
    items?: SetlistItemListRelationFilter
  }, "id">

  export type ArrangementOrderByWithAggregationInput = {
    id?: SortOrder
    songId?: SortOrder
    name?: SortOrder
    defaultKey?: SortOrder
    defaultBpm?: SortOrder
    structureJson?: SortOrder
    stemsJson?: SortOrder
    audioDemoUrl?: SortOrder
    createdAt?: SortOrder
    _count?: ArrangementCountOrderByAggregateInput
    _avg?: ArrangementAvgOrderByAggregateInput
    _max?: ArrangementMaxOrderByAggregateInput
    _min?: ArrangementMinOrderByAggregateInput
    _sum?: ArrangementSumOrderByAggregateInput
  }

  export type ArrangementScalarWhereWithAggregatesInput = {
    AND?: ArrangementScalarWhereWithAggregatesInput | ArrangementScalarWhereWithAggregatesInput[]
    OR?: ArrangementScalarWhereWithAggregatesInput[]
    NOT?: ArrangementScalarWhereWithAggregatesInput | ArrangementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Arrangement"> | string
    songId?: StringWithAggregatesFilter<"Arrangement"> | string
    name?: StringWithAggregatesFilter<"Arrangement"> | string
    defaultKey?: StringWithAggregatesFilter<"Arrangement"> | string
    defaultBpm?: IntWithAggregatesFilter<"Arrangement"> | number
    structureJson?: StringWithAggregatesFilter<"Arrangement"> | string
    stemsJson?: StringWithAggregatesFilter<"Arrangement"> | string
    audioDemoUrl?: StringWithAggregatesFilter<"Arrangement"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Arrangement"> | Date | string
  }

  export type SetlistWhereInput = {
    AND?: SetlistWhereInput | SetlistWhereInput[]
    OR?: SetlistWhereInput[]
    NOT?: SetlistWhereInput | SetlistWhereInput[]
    id?: StringFilter<"Setlist"> | string
    ministryId?: StringFilter<"Setlist"> | string
    name?: StringFilter<"Setlist"> | string
    date?: DateTimeNullableFilter<"Setlist"> | Date | string | null
    liturgyType?: StringNullableFilter<"Setlist"> | string | null
    season?: StringNullableFilter<"Setlist"> | string | null
    createdAt?: DateTimeFilter<"Setlist"> | Date | string
    createdById?: StringNullableFilter<"Setlist"> | string | null
    ministry?: XOR<MinistryRelationFilter, MinistryWhereInput>
    createdBy?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    items?: SetlistItemListRelationFilter
    events?: EventLogListRelationFilter
  }

  export type SetlistOrderByWithRelationInput = {
    id?: SortOrder
    ministryId?: SortOrder
    name?: SortOrder
    date?: SortOrderInput | SortOrder
    liturgyType?: SortOrderInput | SortOrder
    season?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    createdById?: SortOrderInput | SortOrder
    ministry?: MinistryOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
    items?: SetlistItemOrderByRelationAggregateInput
    events?: EventLogOrderByRelationAggregateInput
  }

  export type SetlistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SetlistWhereInput | SetlistWhereInput[]
    OR?: SetlistWhereInput[]
    NOT?: SetlistWhereInput | SetlistWhereInput[]
    ministryId?: StringFilter<"Setlist"> | string
    name?: StringFilter<"Setlist"> | string
    date?: DateTimeNullableFilter<"Setlist"> | Date | string | null
    liturgyType?: StringNullableFilter<"Setlist"> | string | null
    season?: StringNullableFilter<"Setlist"> | string | null
    createdAt?: DateTimeFilter<"Setlist"> | Date | string
    createdById?: StringNullableFilter<"Setlist"> | string | null
    ministry?: XOR<MinistryRelationFilter, MinistryWhereInput>
    createdBy?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    items?: SetlistItemListRelationFilter
    events?: EventLogListRelationFilter
  }, "id">

  export type SetlistOrderByWithAggregationInput = {
    id?: SortOrder
    ministryId?: SortOrder
    name?: SortOrder
    date?: SortOrderInput | SortOrder
    liturgyType?: SortOrderInput | SortOrder
    season?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    createdById?: SortOrderInput | SortOrder
    _count?: SetlistCountOrderByAggregateInput
    _max?: SetlistMaxOrderByAggregateInput
    _min?: SetlistMinOrderByAggregateInput
  }

  export type SetlistScalarWhereWithAggregatesInput = {
    AND?: SetlistScalarWhereWithAggregatesInput | SetlistScalarWhereWithAggregatesInput[]
    OR?: SetlistScalarWhereWithAggregatesInput[]
    NOT?: SetlistScalarWhereWithAggregatesInput | SetlistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Setlist"> | string
    ministryId?: StringWithAggregatesFilter<"Setlist"> | string
    name?: StringWithAggregatesFilter<"Setlist"> | string
    date?: DateTimeNullableWithAggregatesFilter<"Setlist"> | Date | string | null
    liturgyType?: StringNullableWithAggregatesFilter<"Setlist"> | string | null
    season?: StringNullableWithAggregatesFilter<"Setlist"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Setlist"> | Date | string
    createdById?: StringNullableWithAggregatesFilter<"Setlist"> | string | null
  }

  export type SetlistItemWhereInput = {
    AND?: SetlistItemWhereInput | SetlistItemWhereInput[]
    OR?: SetlistItemWhereInput[]
    NOT?: SetlistItemWhereInput | SetlistItemWhereInput[]
    id?: StringFilter<"SetlistItem"> | string
    setlistId?: StringFilter<"SetlistItem"> | string
    order?: IntFilter<"SetlistItem"> | number
    part?: StringFilter<"SetlistItem"> | string
    arrangementId?: StringFilter<"SetlistItem"> | string
    notes?: StringNullableFilter<"SetlistItem"> | string | null
    createdAt?: DateTimeFilter<"SetlistItem"> | Date | string
    setlist?: XOR<SetlistRelationFilter, SetlistWhereInput>
    arrangement?: XOR<ArrangementRelationFilter, ArrangementWhereInput>
  }

  export type SetlistItemOrderByWithRelationInput = {
    id?: SortOrder
    setlistId?: SortOrder
    order?: SortOrder
    part?: SortOrder
    arrangementId?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    setlist?: SetlistOrderByWithRelationInput
    arrangement?: ArrangementOrderByWithRelationInput
  }

  export type SetlistItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SetlistItemWhereInput | SetlistItemWhereInput[]
    OR?: SetlistItemWhereInput[]
    NOT?: SetlistItemWhereInput | SetlistItemWhereInput[]
    setlistId?: StringFilter<"SetlistItem"> | string
    order?: IntFilter<"SetlistItem"> | number
    part?: StringFilter<"SetlistItem"> | string
    arrangementId?: StringFilter<"SetlistItem"> | string
    notes?: StringNullableFilter<"SetlistItem"> | string | null
    createdAt?: DateTimeFilter<"SetlistItem"> | Date | string
    setlist?: XOR<SetlistRelationFilter, SetlistWhereInput>
    arrangement?: XOR<ArrangementRelationFilter, ArrangementWhereInput>
  }, "id">

  export type SetlistItemOrderByWithAggregationInput = {
    id?: SortOrder
    setlistId?: SortOrder
    order?: SortOrder
    part?: SortOrder
    arrangementId?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SetlistItemCountOrderByAggregateInput
    _avg?: SetlistItemAvgOrderByAggregateInput
    _max?: SetlistItemMaxOrderByAggregateInput
    _min?: SetlistItemMinOrderByAggregateInput
    _sum?: SetlistItemSumOrderByAggregateInput
  }

  export type SetlistItemScalarWhereWithAggregatesInput = {
    AND?: SetlistItemScalarWhereWithAggregatesInput | SetlistItemScalarWhereWithAggregatesInput[]
    OR?: SetlistItemScalarWhereWithAggregatesInput[]
    NOT?: SetlistItemScalarWhereWithAggregatesInput | SetlistItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SetlistItem"> | string
    setlistId?: StringWithAggregatesFilter<"SetlistItem"> | string
    order?: IntWithAggregatesFilter<"SetlistItem"> | number
    part?: StringWithAggregatesFilter<"SetlistItem"> | string
    arrangementId?: StringWithAggregatesFilter<"SetlistItem"> | string
    notes?: StringNullableWithAggregatesFilter<"SetlistItem"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SetlistItem"> | Date | string
  }

  export type EventLogWhereInput = {
    AND?: EventLogWhereInput | EventLogWhereInput[]
    OR?: EventLogWhereInput[]
    NOT?: EventLogWhereInput | EventLogWhereInput[]
    id?: StringFilter<"EventLog"> | string
    userId?: StringFilter<"EventLog"> | string
    ministryId?: StringFilter<"EventLog"> | string
    setlistId?: StringFilter<"EventLog"> | string
    type?: StringFilter<"EventLog"> | string
    payloadJson?: StringNullableFilter<"EventLog"> | string | null
    createdAt?: DateTimeFilter<"EventLog"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    ministry?: XOR<MinistryRelationFilter, MinistryWhereInput>
    setlist?: XOR<SetlistRelationFilter, SetlistWhereInput>
  }

  export type EventLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    ministryId?: SortOrder
    setlistId?: SortOrder
    type?: SortOrder
    payloadJson?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    ministry?: MinistryOrderByWithRelationInput
    setlist?: SetlistOrderByWithRelationInput
  }

  export type EventLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventLogWhereInput | EventLogWhereInput[]
    OR?: EventLogWhereInput[]
    NOT?: EventLogWhereInput | EventLogWhereInput[]
    userId?: StringFilter<"EventLog"> | string
    ministryId?: StringFilter<"EventLog"> | string
    setlistId?: StringFilter<"EventLog"> | string
    type?: StringFilter<"EventLog"> | string
    payloadJson?: StringNullableFilter<"EventLog"> | string | null
    createdAt?: DateTimeFilter<"EventLog"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    ministry?: XOR<MinistryRelationFilter, MinistryWhereInput>
    setlist?: XOR<SetlistRelationFilter, SetlistWhereInput>
  }, "id">

  export type EventLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    ministryId?: SortOrder
    setlistId?: SortOrder
    type?: SortOrder
    payloadJson?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: EventLogCountOrderByAggregateInput
    _max?: EventLogMaxOrderByAggregateInput
    _min?: EventLogMinOrderByAggregateInput
  }

  export type EventLogScalarWhereWithAggregatesInput = {
    AND?: EventLogScalarWhereWithAggregatesInput | EventLogScalarWhereWithAggregatesInput[]
    OR?: EventLogScalarWhereWithAggregatesInput[]
    NOT?: EventLogScalarWhereWithAggregatesInput | EventLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EventLog"> | string
    userId?: StringWithAggregatesFilter<"EventLog"> | string
    ministryId?: StringWithAggregatesFilter<"EventLog"> | string
    setlistId?: StringWithAggregatesFilter<"EventLog"> | string
    type?: StringWithAggregatesFilter<"EventLog"> | string
    payloadJson?: StringNullableWithAggregatesFilter<"EventLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EventLog"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    createdAt?: Date | string
    ministries?: MinistryCreateNestedManyWithoutOwnerInput
    memberships?: MinistryMemberCreateNestedManyWithoutUserInput
    setlists?: SetlistCreateNestedManyWithoutCreatedByInput
    events?: EventLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    createdAt?: Date | string
    ministries?: MinistryUncheckedCreateNestedManyWithoutOwnerInput
    memberships?: MinistryMemberUncheckedCreateNestedManyWithoutUserInput
    setlists?: SetlistUncheckedCreateNestedManyWithoutCreatedByInput
    events?: EventLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ministries?: MinistryUpdateManyWithoutOwnerNestedInput
    memberships?: MinistryMemberUpdateManyWithoutUserNestedInput
    setlists?: SetlistUpdateManyWithoutCreatedByNestedInput
    events?: EventLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ministries?: MinistryUncheckedUpdateManyWithoutOwnerNestedInput
    memberships?: MinistryMemberUncheckedUpdateManyWithoutUserNestedInput
    setlists?: SetlistUncheckedUpdateManyWithoutCreatedByNestedInput
    events?: EventLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MinistryCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutMinistriesInput
    members?: MinistryMemberCreateNestedManyWithoutMinistryInput
    setlists?: SetlistCreateNestedManyWithoutMinistryInput
    events?: EventLogCreateNestedManyWithoutMinistryInput
  }

  export type MinistryUncheckedCreateInput = {
    id?: string
    name: string
    ownerUserId: string
    createdAt?: Date | string
    members?: MinistryMemberUncheckedCreateNestedManyWithoutMinistryInput
    setlists?: SetlistUncheckedCreateNestedManyWithoutMinistryInput
    events?: EventLogUncheckedCreateNestedManyWithoutMinistryInput
  }

  export type MinistryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutMinistriesNestedInput
    members?: MinistryMemberUpdateManyWithoutMinistryNestedInput
    setlists?: SetlistUpdateManyWithoutMinistryNestedInput
    events?: EventLogUpdateManyWithoutMinistryNestedInput
  }

  export type MinistryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: MinistryMemberUncheckedUpdateManyWithoutMinistryNestedInput
    setlists?: SetlistUncheckedUpdateManyWithoutMinistryNestedInput
    events?: EventLogUncheckedUpdateManyWithoutMinistryNestedInput
  }

  export type MinistryCreateManyInput = {
    id?: string
    name: string
    ownerUserId: string
    createdAt?: Date | string
  }

  export type MinistryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MinistryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MinistryMemberCreateInput = {
    id?: string
    role?: string
    createdAt?: Date | string
    ministry: MinistryCreateNestedOneWithoutMembersInput
    user: UserCreateNestedOneWithoutMembershipsInput
  }

  export type MinistryMemberUncheckedCreateInput = {
    id?: string
    ministryId: string
    userId: string
    role?: string
    createdAt?: Date | string
  }

  export type MinistryMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ministry?: MinistryUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type MinistryMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ministryId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MinistryMemberCreateManyInput = {
    id?: string
    ministryId: string
    userId: string
    role?: string
    createdAt?: Date | string
  }

  export type MinistryMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MinistryMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ministryId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SongCreateInput = {
    id?: string
    title: string
    artist: string
    liturgicalTags: string
    bpm: number
    key: string
    timeSignature: string
    language: string
    season?: string | null
    parts: string
    createdAt?: Date | string
    arrangements?: ArrangementCreateNestedManyWithoutSongInput
  }

  export type SongUncheckedCreateInput = {
    id?: string
    title: string
    artist: string
    liturgicalTags: string
    bpm: number
    key: string
    timeSignature: string
    language: string
    season?: string | null
    parts: string
    createdAt?: Date | string
    arrangements?: ArrangementUncheckedCreateNestedManyWithoutSongInput
  }

  export type SongUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    liturgicalTags?: StringFieldUpdateOperationsInput | string
    bpm?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    timeSignature?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    season?: NullableStringFieldUpdateOperationsInput | string | null
    parts?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    arrangements?: ArrangementUpdateManyWithoutSongNestedInput
  }

  export type SongUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    liturgicalTags?: StringFieldUpdateOperationsInput | string
    bpm?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    timeSignature?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    season?: NullableStringFieldUpdateOperationsInput | string | null
    parts?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    arrangements?: ArrangementUncheckedUpdateManyWithoutSongNestedInput
  }

  export type SongCreateManyInput = {
    id?: string
    title: string
    artist: string
    liturgicalTags: string
    bpm: number
    key: string
    timeSignature: string
    language: string
    season?: string | null
    parts: string
    createdAt?: Date | string
  }

  export type SongUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    liturgicalTags?: StringFieldUpdateOperationsInput | string
    bpm?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    timeSignature?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    season?: NullableStringFieldUpdateOperationsInput | string | null
    parts?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SongUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    liturgicalTags?: StringFieldUpdateOperationsInput | string
    bpm?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    timeSignature?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    season?: NullableStringFieldUpdateOperationsInput | string | null
    parts?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArrangementCreateInput = {
    id?: string
    name: string
    defaultKey: string
    defaultBpm: number
    structureJson: string
    stemsJson: string
    audioDemoUrl: string
    createdAt?: Date | string
    song: SongCreateNestedOneWithoutArrangementsInput
    items?: SetlistItemCreateNestedManyWithoutArrangementInput
  }

  export type ArrangementUncheckedCreateInput = {
    id?: string
    songId: string
    name: string
    defaultKey: string
    defaultBpm: number
    structureJson: string
    stemsJson: string
    audioDemoUrl: string
    createdAt?: Date | string
    items?: SetlistItemUncheckedCreateNestedManyWithoutArrangementInput
  }

  export type ArrangementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    defaultKey?: StringFieldUpdateOperationsInput | string
    defaultBpm?: IntFieldUpdateOperationsInput | number
    structureJson?: StringFieldUpdateOperationsInput | string
    stemsJson?: StringFieldUpdateOperationsInput | string
    audioDemoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    song?: SongUpdateOneRequiredWithoutArrangementsNestedInput
    items?: SetlistItemUpdateManyWithoutArrangementNestedInput
  }

  export type ArrangementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    songId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    defaultKey?: StringFieldUpdateOperationsInput | string
    defaultBpm?: IntFieldUpdateOperationsInput | number
    structureJson?: StringFieldUpdateOperationsInput | string
    stemsJson?: StringFieldUpdateOperationsInput | string
    audioDemoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: SetlistItemUncheckedUpdateManyWithoutArrangementNestedInput
  }

  export type ArrangementCreateManyInput = {
    id?: string
    songId: string
    name: string
    defaultKey: string
    defaultBpm: number
    structureJson: string
    stemsJson: string
    audioDemoUrl: string
    createdAt?: Date | string
  }

  export type ArrangementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    defaultKey?: StringFieldUpdateOperationsInput | string
    defaultBpm?: IntFieldUpdateOperationsInput | number
    structureJson?: StringFieldUpdateOperationsInput | string
    stemsJson?: StringFieldUpdateOperationsInput | string
    audioDemoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArrangementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    songId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    defaultKey?: StringFieldUpdateOperationsInput | string
    defaultBpm?: IntFieldUpdateOperationsInput | number
    structureJson?: StringFieldUpdateOperationsInput | string
    stemsJson?: StringFieldUpdateOperationsInput | string
    audioDemoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SetlistCreateInput = {
    id?: string
    name: string
    date?: Date | string | null
    liturgyType?: string | null
    season?: string | null
    createdAt?: Date | string
    ministry: MinistryCreateNestedOneWithoutSetlistsInput
    createdBy?: UserCreateNestedOneWithoutSetlistsInput
    items?: SetlistItemCreateNestedManyWithoutSetlistInput
    events?: EventLogCreateNestedManyWithoutSetlistInput
  }

  export type SetlistUncheckedCreateInput = {
    id?: string
    ministryId: string
    name: string
    date?: Date | string | null
    liturgyType?: string | null
    season?: string | null
    createdAt?: Date | string
    createdById?: string | null
    items?: SetlistItemUncheckedCreateNestedManyWithoutSetlistInput
    events?: EventLogUncheckedCreateNestedManyWithoutSetlistInput
  }

  export type SetlistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    liturgyType?: NullableStringFieldUpdateOperationsInput | string | null
    season?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ministry?: MinistryUpdateOneRequiredWithoutSetlistsNestedInput
    createdBy?: UserUpdateOneWithoutSetlistsNestedInput
    items?: SetlistItemUpdateManyWithoutSetlistNestedInput
    events?: EventLogUpdateManyWithoutSetlistNestedInput
  }

  export type SetlistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ministryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    liturgyType?: NullableStringFieldUpdateOperationsInput | string | null
    season?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    items?: SetlistItemUncheckedUpdateManyWithoutSetlistNestedInput
    events?: EventLogUncheckedUpdateManyWithoutSetlistNestedInput
  }

  export type SetlistCreateManyInput = {
    id?: string
    ministryId: string
    name: string
    date?: Date | string | null
    liturgyType?: string | null
    season?: string | null
    createdAt?: Date | string
    createdById?: string | null
  }

  export type SetlistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    liturgyType?: NullableStringFieldUpdateOperationsInput | string | null
    season?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SetlistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ministryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    liturgyType?: NullableStringFieldUpdateOperationsInput | string | null
    season?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SetlistItemCreateInput = {
    id?: string
    order: number
    part: string
    notes?: string | null
    createdAt?: Date | string
    setlist: SetlistCreateNestedOneWithoutItemsInput
    arrangement: ArrangementCreateNestedOneWithoutItemsInput
  }

  export type SetlistItemUncheckedCreateInput = {
    id?: string
    setlistId: string
    order: number
    part: string
    arrangementId: string
    notes?: string | null
    createdAt?: Date | string
  }

  export type SetlistItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    part?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    setlist?: SetlistUpdateOneRequiredWithoutItemsNestedInput
    arrangement?: ArrangementUpdateOneRequiredWithoutItemsNestedInput
  }

  export type SetlistItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    setlistId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    part?: StringFieldUpdateOperationsInput | string
    arrangementId?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SetlistItemCreateManyInput = {
    id?: string
    setlistId: string
    order: number
    part: string
    arrangementId: string
    notes?: string | null
    createdAt?: Date | string
  }

  export type SetlistItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    part?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SetlistItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    setlistId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    part?: StringFieldUpdateOperationsInput | string
    arrangementId?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventLogCreateInput = {
    id?: string
    type: string
    payloadJson?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutEventsInput
    ministry: MinistryCreateNestedOneWithoutEventsInput
    setlist: SetlistCreateNestedOneWithoutEventsInput
  }

  export type EventLogUncheckedCreateInput = {
    id?: string
    userId: string
    ministryId: string
    setlistId: string
    type: string
    payloadJson?: string | null
    createdAt?: Date | string
  }

  export type EventLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    payloadJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEventsNestedInput
    ministry?: MinistryUpdateOneRequiredWithoutEventsNestedInput
    setlist?: SetlistUpdateOneRequiredWithoutEventsNestedInput
  }

  export type EventLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ministryId?: StringFieldUpdateOperationsInput | string
    setlistId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    payloadJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventLogCreateManyInput = {
    id?: string
    userId: string
    ministryId: string
    setlistId: string
    type: string
    payloadJson?: string | null
    createdAt?: Date | string
  }

  export type EventLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    payloadJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ministryId?: StringFieldUpdateOperationsInput | string
    setlistId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    payloadJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MinistryListRelationFilter = {
    every?: MinistryWhereInput
    some?: MinistryWhereInput
    none?: MinistryWhereInput
  }

  export type MinistryMemberListRelationFilter = {
    every?: MinistryMemberWhereInput
    some?: MinistryMemberWhereInput
    none?: MinistryMemberWhereInput
  }

  export type SetlistListRelationFilter = {
    every?: SetlistWhereInput
    some?: SetlistWhereInput
    none?: SetlistWhereInput
  }

  export type EventLogListRelationFilter = {
    every?: EventLogWhereInput
    some?: EventLogWhereInput
    none?: EventLogWhereInput
  }

  export type MinistryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MinistryMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SetlistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MinistryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerUserId?: SortOrder
    createdAt?: SortOrder
  }

  export type MinistryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerUserId?: SortOrder
    createdAt?: SortOrder
  }

  export type MinistryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerUserId?: SortOrder
    createdAt?: SortOrder
  }

  export type MinistryRelationFilter = {
    is?: MinistryWhereInput
    isNot?: MinistryWhereInput
  }

  export type MinistryMemberCountOrderByAggregateInput = {
    id?: SortOrder
    ministryId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type MinistryMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    ministryId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type MinistryMemberMinOrderByAggregateInput = {
    id?: SortOrder
    ministryId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ArrangementListRelationFilter = {
    every?: ArrangementWhereInput
    some?: ArrangementWhereInput
    none?: ArrangementWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ArrangementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SongCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    artist?: SortOrder
    liturgicalTags?: SortOrder
    bpm?: SortOrder
    key?: SortOrder
    timeSignature?: SortOrder
    language?: SortOrder
    season?: SortOrder
    parts?: SortOrder
    createdAt?: SortOrder
  }

  export type SongAvgOrderByAggregateInput = {
    bpm?: SortOrder
  }

  export type SongMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    artist?: SortOrder
    liturgicalTags?: SortOrder
    bpm?: SortOrder
    key?: SortOrder
    timeSignature?: SortOrder
    language?: SortOrder
    season?: SortOrder
    parts?: SortOrder
    createdAt?: SortOrder
  }

  export type SongMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    artist?: SortOrder
    liturgicalTags?: SortOrder
    bpm?: SortOrder
    key?: SortOrder
    timeSignature?: SortOrder
    language?: SortOrder
    season?: SortOrder
    parts?: SortOrder
    createdAt?: SortOrder
  }

  export type SongSumOrderByAggregateInput = {
    bpm?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type SongRelationFilter = {
    is?: SongWhereInput
    isNot?: SongWhereInput
  }

  export type SetlistItemListRelationFilter = {
    every?: SetlistItemWhereInput
    some?: SetlistItemWhereInput
    none?: SetlistItemWhereInput
  }

  export type SetlistItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArrangementCountOrderByAggregateInput = {
    id?: SortOrder
    songId?: SortOrder
    name?: SortOrder
    defaultKey?: SortOrder
    defaultBpm?: SortOrder
    structureJson?: SortOrder
    stemsJson?: SortOrder
    audioDemoUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type ArrangementAvgOrderByAggregateInput = {
    defaultBpm?: SortOrder
  }

  export type ArrangementMaxOrderByAggregateInput = {
    id?: SortOrder
    songId?: SortOrder
    name?: SortOrder
    defaultKey?: SortOrder
    defaultBpm?: SortOrder
    structureJson?: SortOrder
    stemsJson?: SortOrder
    audioDemoUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type ArrangementMinOrderByAggregateInput = {
    id?: SortOrder
    songId?: SortOrder
    name?: SortOrder
    defaultKey?: SortOrder
    defaultBpm?: SortOrder
    structureJson?: SortOrder
    stemsJson?: SortOrder
    audioDemoUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type ArrangementSumOrderByAggregateInput = {
    defaultBpm?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SetlistCountOrderByAggregateInput = {
    id?: SortOrder
    ministryId?: SortOrder
    name?: SortOrder
    date?: SortOrder
    liturgyType?: SortOrder
    season?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
  }

  export type SetlistMaxOrderByAggregateInput = {
    id?: SortOrder
    ministryId?: SortOrder
    name?: SortOrder
    date?: SortOrder
    liturgyType?: SortOrder
    season?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
  }

  export type SetlistMinOrderByAggregateInput = {
    id?: SortOrder
    ministryId?: SortOrder
    name?: SortOrder
    date?: SortOrder
    liturgyType?: SortOrder
    season?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type SetlistRelationFilter = {
    is?: SetlistWhereInput
    isNot?: SetlistWhereInput
  }

  export type ArrangementRelationFilter = {
    is?: ArrangementWhereInput
    isNot?: ArrangementWhereInput
  }

  export type SetlistItemCountOrderByAggregateInput = {
    id?: SortOrder
    setlistId?: SortOrder
    order?: SortOrder
    part?: SortOrder
    arrangementId?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type SetlistItemAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type SetlistItemMaxOrderByAggregateInput = {
    id?: SortOrder
    setlistId?: SortOrder
    order?: SortOrder
    part?: SortOrder
    arrangementId?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type SetlistItemMinOrderByAggregateInput = {
    id?: SortOrder
    setlistId?: SortOrder
    order?: SortOrder
    part?: SortOrder
    arrangementId?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type SetlistItemSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type EventLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ministryId?: SortOrder
    setlistId?: SortOrder
    type?: SortOrder
    payloadJson?: SortOrder
    createdAt?: SortOrder
  }

  export type EventLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ministryId?: SortOrder
    setlistId?: SortOrder
    type?: SortOrder
    payloadJson?: SortOrder
    createdAt?: SortOrder
  }

  export type EventLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ministryId?: SortOrder
    setlistId?: SortOrder
    type?: SortOrder
    payloadJson?: SortOrder
    createdAt?: SortOrder
  }

  export type MinistryCreateNestedManyWithoutOwnerInput = {
    create?: XOR<MinistryCreateWithoutOwnerInput, MinistryUncheckedCreateWithoutOwnerInput> | MinistryCreateWithoutOwnerInput[] | MinistryUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: MinistryCreateOrConnectWithoutOwnerInput | MinistryCreateOrConnectWithoutOwnerInput[]
    createMany?: MinistryCreateManyOwnerInputEnvelope
    connect?: MinistryWhereUniqueInput | MinistryWhereUniqueInput[]
  }

  export type MinistryMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<MinistryMemberCreateWithoutUserInput, MinistryMemberUncheckedCreateWithoutUserInput> | MinistryMemberCreateWithoutUserInput[] | MinistryMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MinistryMemberCreateOrConnectWithoutUserInput | MinistryMemberCreateOrConnectWithoutUserInput[]
    createMany?: MinistryMemberCreateManyUserInputEnvelope
    connect?: MinistryMemberWhereUniqueInput | MinistryMemberWhereUniqueInput[]
  }

  export type SetlistCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<SetlistCreateWithoutCreatedByInput, SetlistUncheckedCreateWithoutCreatedByInput> | SetlistCreateWithoutCreatedByInput[] | SetlistUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: SetlistCreateOrConnectWithoutCreatedByInput | SetlistCreateOrConnectWithoutCreatedByInput[]
    createMany?: SetlistCreateManyCreatedByInputEnvelope
    connect?: SetlistWhereUniqueInput | SetlistWhereUniqueInput[]
  }

  export type EventLogCreateNestedManyWithoutUserInput = {
    create?: XOR<EventLogCreateWithoutUserInput, EventLogUncheckedCreateWithoutUserInput> | EventLogCreateWithoutUserInput[] | EventLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventLogCreateOrConnectWithoutUserInput | EventLogCreateOrConnectWithoutUserInput[]
    createMany?: EventLogCreateManyUserInputEnvelope
    connect?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
  }

  export type MinistryUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<MinistryCreateWithoutOwnerInput, MinistryUncheckedCreateWithoutOwnerInput> | MinistryCreateWithoutOwnerInput[] | MinistryUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: MinistryCreateOrConnectWithoutOwnerInput | MinistryCreateOrConnectWithoutOwnerInput[]
    createMany?: MinistryCreateManyOwnerInputEnvelope
    connect?: MinistryWhereUniqueInput | MinistryWhereUniqueInput[]
  }

  export type MinistryMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MinistryMemberCreateWithoutUserInput, MinistryMemberUncheckedCreateWithoutUserInput> | MinistryMemberCreateWithoutUserInput[] | MinistryMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MinistryMemberCreateOrConnectWithoutUserInput | MinistryMemberCreateOrConnectWithoutUserInput[]
    createMany?: MinistryMemberCreateManyUserInputEnvelope
    connect?: MinistryMemberWhereUniqueInput | MinistryMemberWhereUniqueInput[]
  }

  export type SetlistUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<SetlistCreateWithoutCreatedByInput, SetlistUncheckedCreateWithoutCreatedByInput> | SetlistCreateWithoutCreatedByInput[] | SetlistUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: SetlistCreateOrConnectWithoutCreatedByInput | SetlistCreateOrConnectWithoutCreatedByInput[]
    createMany?: SetlistCreateManyCreatedByInputEnvelope
    connect?: SetlistWhereUniqueInput | SetlistWhereUniqueInput[]
  }

  export type EventLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EventLogCreateWithoutUserInput, EventLogUncheckedCreateWithoutUserInput> | EventLogCreateWithoutUserInput[] | EventLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventLogCreateOrConnectWithoutUserInput | EventLogCreateOrConnectWithoutUserInput[]
    createMany?: EventLogCreateManyUserInputEnvelope
    connect?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MinistryUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<MinistryCreateWithoutOwnerInput, MinistryUncheckedCreateWithoutOwnerInput> | MinistryCreateWithoutOwnerInput[] | MinistryUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: MinistryCreateOrConnectWithoutOwnerInput | MinistryCreateOrConnectWithoutOwnerInput[]
    upsert?: MinistryUpsertWithWhereUniqueWithoutOwnerInput | MinistryUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: MinistryCreateManyOwnerInputEnvelope
    set?: MinistryWhereUniqueInput | MinistryWhereUniqueInput[]
    disconnect?: MinistryWhereUniqueInput | MinistryWhereUniqueInput[]
    delete?: MinistryWhereUniqueInput | MinistryWhereUniqueInput[]
    connect?: MinistryWhereUniqueInput | MinistryWhereUniqueInput[]
    update?: MinistryUpdateWithWhereUniqueWithoutOwnerInput | MinistryUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: MinistryUpdateManyWithWhereWithoutOwnerInput | MinistryUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: MinistryScalarWhereInput | MinistryScalarWhereInput[]
  }

  export type MinistryMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<MinistryMemberCreateWithoutUserInput, MinistryMemberUncheckedCreateWithoutUserInput> | MinistryMemberCreateWithoutUserInput[] | MinistryMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MinistryMemberCreateOrConnectWithoutUserInput | MinistryMemberCreateOrConnectWithoutUserInput[]
    upsert?: MinistryMemberUpsertWithWhereUniqueWithoutUserInput | MinistryMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MinistryMemberCreateManyUserInputEnvelope
    set?: MinistryMemberWhereUniqueInput | MinistryMemberWhereUniqueInput[]
    disconnect?: MinistryMemberWhereUniqueInput | MinistryMemberWhereUniqueInput[]
    delete?: MinistryMemberWhereUniqueInput | MinistryMemberWhereUniqueInput[]
    connect?: MinistryMemberWhereUniqueInput | MinistryMemberWhereUniqueInput[]
    update?: MinistryMemberUpdateWithWhereUniqueWithoutUserInput | MinistryMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MinistryMemberUpdateManyWithWhereWithoutUserInput | MinistryMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MinistryMemberScalarWhereInput | MinistryMemberScalarWhereInput[]
  }

  export type SetlistUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<SetlistCreateWithoutCreatedByInput, SetlistUncheckedCreateWithoutCreatedByInput> | SetlistCreateWithoutCreatedByInput[] | SetlistUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: SetlistCreateOrConnectWithoutCreatedByInput | SetlistCreateOrConnectWithoutCreatedByInput[]
    upsert?: SetlistUpsertWithWhereUniqueWithoutCreatedByInput | SetlistUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: SetlistCreateManyCreatedByInputEnvelope
    set?: SetlistWhereUniqueInput | SetlistWhereUniqueInput[]
    disconnect?: SetlistWhereUniqueInput | SetlistWhereUniqueInput[]
    delete?: SetlistWhereUniqueInput | SetlistWhereUniqueInput[]
    connect?: SetlistWhereUniqueInput | SetlistWhereUniqueInput[]
    update?: SetlistUpdateWithWhereUniqueWithoutCreatedByInput | SetlistUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: SetlistUpdateManyWithWhereWithoutCreatedByInput | SetlistUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: SetlistScalarWhereInput | SetlistScalarWhereInput[]
  }

  export type EventLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventLogCreateWithoutUserInput, EventLogUncheckedCreateWithoutUserInput> | EventLogCreateWithoutUserInput[] | EventLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventLogCreateOrConnectWithoutUserInput | EventLogCreateOrConnectWithoutUserInput[]
    upsert?: EventLogUpsertWithWhereUniqueWithoutUserInput | EventLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventLogCreateManyUserInputEnvelope
    set?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
    disconnect?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
    delete?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
    connect?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
    update?: EventLogUpdateWithWhereUniqueWithoutUserInput | EventLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventLogUpdateManyWithWhereWithoutUserInput | EventLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventLogScalarWhereInput | EventLogScalarWhereInput[]
  }

  export type MinistryUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<MinistryCreateWithoutOwnerInput, MinistryUncheckedCreateWithoutOwnerInput> | MinistryCreateWithoutOwnerInput[] | MinistryUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: MinistryCreateOrConnectWithoutOwnerInput | MinistryCreateOrConnectWithoutOwnerInput[]
    upsert?: MinistryUpsertWithWhereUniqueWithoutOwnerInput | MinistryUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: MinistryCreateManyOwnerInputEnvelope
    set?: MinistryWhereUniqueInput | MinistryWhereUniqueInput[]
    disconnect?: MinistryWhereUniqueInput | MinistryWhereUniqueInput[]
    delete?: MinistryWhereUniqueInput | MinistryWhereUniqueInput[]
    connect?: MinistryWhereUniqueInput | MinistryWhereUniqueInput[]
    update?: MinistryUpdateWithWhereUniqueWithoutOwnerInput | MinistryUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: MinistryUpdateManyWithWhereWithoutOwnerInput | MinistryUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: MinistryScalarWhereInput | MinistryScalarWhereInput[]
  }

  export type MinistryMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MinistryMemberCreateWithoutUserInput, MinistryMemberUncheckedCreateWithoutUserInput> | MinistryMemberCreateWithoutUserInput[] | MinistryMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MinistryMemberCreateOrConnectWithoutUserInput | MinistryMemberCreateOrConnectWithoutUserInput[]
    upsert?: MinistryMemberUpsertWithWhereUniqueWithoutUserInput | MinistryMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MinistryMemberCreateManyUserInputEnvelope
    set?: MinistryMemberWhereUniqueInput | MinistryMemberWhereUniqueInput[]
    disconnect?: MinistryMemberWhereUniqueInput | MinistryMemberWhereUniqueInput[]
    delete?: MinistryMemberWhereUniqueInput | MinistryMemberWhereUniqueInput[]
    connect?: MinistryMemberWhereUniqueInput | MinistryMemberWhereUniqueInput[]
    update?: MinistryMemberUpdateWithWhereUniqueWithoutUserInput | MinistryMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MinistryMemberUpdateManyWithWhereWithoutUserInput | MinistryMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MinistryMemberScalarWhereInput | MinistryMemberScalarWhereInput[]
  }

  export type SetlistUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<SetlistCreateWithoutCreatedByInput, SetlistUncheckedCreateWithoutCreatedByInput> | SetlistCreateWithoutCreatedByInput[] | SetlistUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: SetlistCreateOrConnectWithoutCreatedByInput | SetlistCreateOrConnectWithoutCreatedByInput[]
    upsert?: SetlistUpsertWithWhereUniqueWithoutCreatedByInput | SetlistUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: SetlistCreateManyCreatedByInputEnvelope
    set?: SetlistWhereUniqueInput | SetlistWhereUniqueInput[]
    disconnect?: SetlistWhereUniqueInput | SetlistWhereUniqueInput[]
    delete?: SetlistWhereUniqueInput | SetlistWhereUniqueInput[]
    connect?: SetlistWhereUniqueInput | SetlistWhereUniqueInput[]
    update?: SetlistUpdateWithWhereUniqueWithoutCreatedByInput | SetlistUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: SetlistUpdateManyWithWhereWithoutCreatedByInput | SetlistUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: SetlistScalarWhereInput | SetlistScalarWhereInput[]
  }

  export type EventLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventLogCreateWithoutUserInput, EventLogUncheckedCreateWithoutUserInput> | EventLogCreateWithoutUserInput[] | EventLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventLogCreateOrConnectWithoutUserInput | EventLogCreateOrConnectWithoutUserInput[]
    upsert?: EventLogUpsertWithWhereUniqueWithoutUserInput | EventLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventLogCreateManyUserInputEnvelope
    set?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
    disconnect?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
    delete?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
    connect?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
    update?: EventLogUpdateWithWhereUniqueWithoutUserInput | EventLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventLogUpdateManyWithWhereWithoutUserInput | EventLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventLogScalarWhereInput | EventLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMinistriesInput = {
    create?: XOR<UserCreateWithoutMinistriesInput, UserUncheckedCreateWithoutMinistriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMinistriesInput
    connect?: UserWhereUniqueInput
  }

  export type MinistryMemberCreateNestedManyWithoutMinistryInput = {
    create?: XOR<MinistryMemberCreateWithoutMinistryInput, MinistryMemberUncheckedCreateWithoutMinistryInput> | MinistryMemberCreateWithoutMinistryInput[] | MinistryMemberUncheckedCreateWithoutMinistryInput[]
    connectOrCreate?: MinistryMemberCreateOrConnectWithoutMinistryInput | MinistryMemberCreateOrConnectWithoutMinistryInput[]
    createMany?: MinistryMemberCreateManyMinistryInputEnvelope
    connect?: MinistryMemberWhereUniqueInput | MinistryMemberWhereUniqueInput[]
  }

  export type SetlistCreateNestedManyWithoutMinistryInput = {
    create?: XOR<SetlistCreateWithoutMinistryInput, SetlistUncheckedCreateWithoutMinistryInput> | SetlistCreateWithoutMinistryInput[] | SetlistUncheckedCreateWithoutMinistryInput[]
    connectOrCreate?: SetlistCreateOrConnectWithoutMinistryInput | SetlistCreateOrConnectWithoutMinistryInput[]
    createMany?: SetlistCreateManyMinistryInputEnvelope
    connect?: SetlistWhereUniqueInput | SetlistWhereUniqueInput[]
  }

  export type EventLogCreateNestedManyWithoutMinistryInput = {
    create?: XOR<EventLogCreateWithoutMinistryInput, EventLogUncheckedCreateWithoutMinistryInput> | EventLogCreateWithoutMinistryInput[] | EventLogUncheckedCreateWithoutMinistryInput[]
    connectOrCreate?: EventLogCreateOrConnectWithoutMinistryInput | EventLogCreateOrConnectWithoutMinistryInput[]
    createMany?: EventLogCreateManyMinistryInputEnvelope
    connect?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
  }

  export type MinistryMemberUncheckedCreateNestedManyWithoutMinistryInput = {
    create?: XOR<MinistryMemberCreateWithoutMinistryInput, MinistryMemberUncheckedCreateWithoutMinistryInput> | MinistryMemberCreateWithoutMinistryInput[] | MinistryMemberUncheckedCreateWithoutMinistryInput[]
    connectOrCreate?: MinistryMemberCreateOrConnectWithoutMinistryInput | MinistryMemberCreateOrConnectWithoutMinistryInput[]
    createMany?: MinistryMemberCreateManyMinistryInputEnvelope
    connect?: MinistryMemberWhereUniqueInput | MinistryMemberWhereUniqueInput[]
  }

  export type SetlistUncheckedCreateNestedManyWithoutMinistryInput = {
    create?: XOR<SetlistCreateWithoutMinistryInput, SetlistUncheckedCreateWithoutMinistryInput> | SetlistCreateWithoutMinistryInput[] | SetlistUncheckedCreateWithoutMinistryInput[]
    connectOrCreate?: SetlistCreateOrConnectWithoutMinistryInput | SetlistCreateOrConnectWithoutMinistryInput[]
    createMany?: SetlistCreateManyMinistryInputEnvelope
    connect?: SetlistWhereUniqueInput | SetlistWhereUniqueInput[]
  }

  export type EventLogUncheckedCreateNestedManyWithoutMinistryInput = {
    create?: XOR<EventLogCreateWithoutMinistryInput, EventLogUncheckedCreateWithoutMinistryInput> | EventLogCreateWithoutMinistryInput[] | EventLogUncheckedCreateWithoutMinistryInput[]
    connectOrCreate?: EventLogCreateOrConnectWithoutMinistryInput | EventLogCreateOrConnectWithoutMinistryInput[]
    createMany?: EventLogCreateManyMinistryInputEnvelope
    connect?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutMinistriesNestedInput = {
    create?: XOR<UserCreateWithoutMinistriesInput, UserUncheckedCreateWithoutMinistriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMinistriesInput
    upsert?: UserUpsertWithoutMinistriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMinistriesInput, UserUpdateWithoutMinistriesInput>, UserUncheckedUpdateWithoutMinistriesInput>
  }

  export type MinistryMemberUpdateManyWithoutMinistryNestedInput = {
    create?: XOR<MinistryMemberCreateWithoutMinistryInput, MinistryMemberUncheckedCreateWithoutMinistryInput> | MinistryMemberCreateWithoutMinistryInput[] | MinistryMemberUncheckedCreateWithoutMinistryInput[]
    connectOrCreate?: MinistryMemberCreateOrConnectWithoutMinistryInput | MinistryMemberCreateOrConnectWithoutMinistryInput[]
    upsert?: MinistryMemberUpsertWithWhereUniqueWithoutMinistryInput | MinistryMemberUpsertWithWhereUniqueWithoutMinistryInput[]
    createMany?: MinistryMemberCreateManyMinistryInputEnvelope
    set?: MinistryMemberWhereUniqueInput | MinistryMemberWhereUniqueInput[]
    disconnect?: MinistryMemberWhereUniqueInput | MinistryMemberWhereUniqueInput[]
    delete?: MinistryMemberWhereUniqueInput | MinistryMemberWhereUniqueInput[]
    connect?: MinistryMemberWhereUniqueInput | MinistryMemberWhereUniqueInput[]
    update?: MinistryMemberUpdateWithWhereUniqueWithoutMinistryInput | MinistryMemberUpdateWithWhereUniqueWithoutMinistryInput[]
    updateMany?: MinistryMemberUpdateManyWithWhereWithoutMinistryInput | MinistryMemberUpdateManyWithWhereWithoutMinistryInput[]
    deleteMany?: MinistryMemberScalarWhereInput | MinistryMemberScalarWhereInput[]
  }

  export type SetlistUpdateManyWithoutMinistryNestedInput = {
    create?: XOR<SetlistCreateWithoutMinistryInput, SetlistUncheckedCreateWithoutMinistryInput> | SetlistCreateWithoutMinistryInput[] | SetlistUncheckedCreateWithoutMinistryInput[]
    connectOrCreate?: SetlistCreateOrConnectWithoutMinistryInput | SetlistCreateOrConnectWithoutMinistryInput[]
    upsert?: SetlistUpsertWithWhereUniqueWithoutMinistryInput | SetlistUpsertWithWhereUniqueWithoutMinistryInput[]
    createMany?: SetlistCreateManyMinistryInputEnvelope
    set?: SetlistWhereUniqueInput | SetlistWhereUniqueInput[]
    disconnect?: SetlistWhereUniqueInput | SetlistWhereUniqueInput[]
    delete?: SetlistWhereUniqueInput | SetlistWhereUniqueInput[]
    connect?: SetlistWhereUniqueInput | SetlistWhereUniqueInput[]
    update?: SetlistUpdateWithWhereUniqueWithoutMinistryInput | SetlistUpdateWithWhereUniqueWithoutMinistryInput[]
    updateMany?: SetlistUpdateManyWithWhereWithoutMinistryInput | SetlistUpdateManyWithWhereWithoutMinistryInput[]
    deleteMany?: SetlistScalarWhereInput | SetlistScalarWhereInput[]
  }

  export type EventLogUpdateManyWithoutMinistryNestedInput = {
    create?: XOR<EventLogCreateWithoutMinistryInput, EventLogUncheckedCreateWithoutMinistryInput> | EventLogCreateWithoutMinistryInput[] | EventLogUncheckedCreateWithoutMinistryInput[]
    connectOrCreate?: EventLogCreateOrConnectWithoutMinistryInput | EventLogCreateOrConnectWithoutMinistryInput[]
    upsert?: EventLogUpsertWithWhereUniqueWithoutMinistryInput | EventLogUpsertWithWhereUniqueWithoutMinistryInput[]
    createMany?: EventLogCreateManyMinistryInputEnvelope
    set?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
    disconnect?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
    delete?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
    connect?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
    update?: EventLogUpdateWithWhereUniqueWithoutMinistryInput | EventLogUpdateWithWhereUniqueWithoutMinistryInput[]
    updateMany?: EventLogUpdateManyWithWhereWithoutMinistryInput | EventLogUpdateManyWithWhereWithoutMinistryInput[]
    deleteMany?: EventLogScalarWhereInput | EventLogScalarWhereInput[]
  }

  export type MinistryMemberUncheckedUpdateManyWithoutMinistryNestedInput = {
    create?: XOR<MinistryMemberCreateWithoutMinistryInput, MinistryMemberUncheckedCreateWithoutMinistryInput> | MinistryMemberCreateWithoutMinistryInput[] | MinistryMemberUncheckedCreateWithoutMinistryInput[]
    connectOrCreate?: MinistryMemberCreateOrConnectWithoutMinistryInput | MinistryMemberCreateOrConnectWithoutMinistryInput[]
    upsert?: MinistryMemberUpsertWithWhereUniqueWithoutMinistryInput | MinistryMemberUpsertWithWhereUniqueWithoutMinistryInput[]
    createMany?: MinistryMemberCreateManyMinistryInputEnvelope
    set?: MinistryMemberWhereUniqueInput | MinistryMemberWhereUniqueInput[]
    disconnect?: MinistryMemberWhereUniqueInput | MinistryMemberWhereUniqueInput[]
    delete?: MinistryMemberWhereUniqueInput | MinistryMemberWhereUniqueInput[]
    connect?: MinistryMemberWhereUniqueInput | MinistryMemberWhereUniqueInput[]
    update?: MinistryMemberUpdateWithWhereUniqueWithoutMinistryInput | MinistryMemberUpdateWithWhereUniqueWithoutMinistryInput[]
    updateMany?: MinistryMemberUpdateManyWithWhereWithoutMinistryInput | MinistryMemberUpdateManyWithWhereWithoutMinistryInput[]
    deleteMany?: MinistryMemberScalarWhereInput | MinistryMemberScalarWhereInput[]
  }

  export type SetlistUncheckedUpdateManyWithoutMinistryNestedInput = {
    create?: XOR<SetlistCreateWithoutMinistryInput, SetlistUncheckedCreateWithoutMinistryInput> | SetlistCreateWithoutMinistryInput[] | SetlistUncheckedCreateWithoutMinistryInput[]
    connectOrCreate?: SetlistCreateOrConnectWithoutMinistryInput | SetlistCreateOrConnectWithoutMinistryInput[]
    upsert?: SetlistUpsertWithWhereUniqueWithoutMinistryInput | SetlistUpsertWithWhereUniqueWithoutMinistryInput[]
    createMany?: SetlistCreateManyMinistryInputEnvelope
    set?: SetlistWhereUniqueInput | SetlistWhereUniqueInput[]
    disconnect?: SetlistWhereUniqueInput | SetlistWhereUniqueInput[]
    delete?: SetlistWhereUniqueInput | SetlistWhereUniqueInput[]
    connect?: SetlistWhereUniqueInput | SetlistWhereUniqueInput[]
    update?: SetlistUpdateWithWhereUniqueWithoutMinistryInput | SetlistUpdateWithWhereUniqueWithoutMinistryInput[]
    updateMany?: SetlistUpdateManyWithWhereWithoutMinistryInput | SetlistUpdateManyWithWhereWithoutMinistryInput[]
    deleteMany?: SetlistScalarWhereInput | SetlistScalarWhereInput[]
  }

  export type EventLogUncheckedUpdateManyWithoutMinistryNestedInput = {
    create?: XOR<EventLogCreateWithoutMinistryInput, EventLogUncheckedCreateWithoutMinistryInput> | EventLogCreateWithoutMinistryInput[] | EventLogUncheckedCreateWithoutMinistryInput[]
    connectOrCreate?: EventLogCreateOrConnectWithoutMinistryInput | EventLogCreateOrConnectWithoutMinistryInput[]
    upsert?: EventLogUpsertWithWhereUniqueWithoutMinistryInput | EventLogUpsertWithWhereUniqueWithoutMinistryInput[]
    createMany?: EventLogCreateManyMinistryInputEnvelope
    set?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
    disconnect?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
    delete?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
    connect?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
    update?: EventLogUpdateWithWhereUniqueWithoutMinistryInput | EventLogUpdateWithWhereUniqueWithoutMinistryInput[]
    updateMany?: EventLogUpdateManyWithWhereWithoutMinistryInput | EventLogUpdateManyWithWhereWithoutMinistryInput[]
    deleteMany?: EventLogScalarWhereInput | EventLogScalarWhereInput[]
  }

  export type MinistryCreateNestedOneWithoutMembersInput = {
    create?: XOR<MinistryCreateWithoutMembersInput, MinistryUncheckedCreateWithoutMembersInput>
    connectOrCreate?: MinistryCreateOrConnectWithoutMembersInput
    connect?: MinistryWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMembershipsInput = {
    create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
    connect?: UserWhereUniqueInput
  }

  export type MinistryUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<MinistryCreateWithoutMembersInput, MinistryUncheckedCreateWithoutMembersInput>
    connectOrCreate?: MinistryCreateOrConnectWithoutMembersInput
    upsert?: MinistryUpsertWithoutMembersInput
    connect?: MinistryWhereUniqueInput
    update?: XOR<XOR<MinistryUpdateToOneWithWhereWithoutMembersInput, MinistryUpdateWithoutMembersInput>, MinistryUncheckedUpdateWithoutMembersInput>
  }

  export type UserUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
    upsert?: UserUpsertWithoutMembershipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMembershipsInput, UserUpdateWithoutMembershipsInput>, UserUncheckedUpdateWithoutMembershipsInput>
  }

  export type ArrangementCreateNestedManyWithoutSongInput = {
    create?: XOR<ArrangementCreateWithoutSongInput, ArrangementUncheckedCreateWithoutSongInput> | ArrangementCreateWithoutSongInput[] | ArrangementUncheckedCreateWithoutSongInput[]
    connectOrCreate?: ArrangementCreateOrConnectWithoutSongInput | ArrangementCreateOrConnectWithoutSongInput[]
    createMany?: ArrangementCreateManySongInputEnvelope
    connect?: ArrangementWhereUniqueInput | ArrangementWhereUniqueInput[]
  }

  export type ArrangementUncheckedCreateNestedManyWithoutSongInput = {
    create?: XOR<ArrangementCreateWithoutSongInput, ArrangementUncheckedCreateWithoutSongInput> | ArrangementCreateWithoutSongInput[] | ArrangementUncheckedCreateWithoutSongInput[]
    connectOrCreate?: ArrangementCreateOrConnectWithoutSongInput | ArrangementCreateOrConnectWithoutSongInput[]
    createMany?: ArrangementCreateManySongInputEnvelope
    connect?: ArrangementWhereUniqueInput | ArrangementWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ArrangementUpdateManyWithoutSongNestedInput = {
    create?: XOR<ArrangementCreateWithoutSongInput, ArrangementUncheckedCreateWithoutSongInput> | ArrangementCreateWithoutSongInput[] | ArrangementUncheckedCreateWithoutSongInput[]
    connectOrCreate?: ArrangementCreateOrConnectWithoutSongInput | ArrangementCreateOrConnectWithoutSongInput[]
    upsert?: ArrangementUpsertWithWhereUniqueWithoutSongInput | ArrangementUpsertWithWhereUniqueWithoutSongInput[]
    createMany?: ArrangementCreateManySongInputEnvelope
    set?: ArrangementWhereUniqueInput | ArrangementWhereUniqueInput[]
    disconnect?: ArrangementWhereUniqueInput | ArrangementWhereUniqueInput[]
    delete?: ArrangementWhereUniqueInput | ArrangementWhereUniqueInput[]
    connect?: ArrangementWhereUniqueInput | ArrangementWhereUniqueInput[]
    update?: ArrangementUpdateWithWhereUniqueWithoutSongInput | ArrangementUpdateWithWhereUniqueWithoutSongInput[]
    updateMany?: ArrangementUpdateManyWithWhereWithoutSongInput | ArrangementUpdateManyWithWhereWithoutSongInput[]
    deleteMany?: ArrangementScalarWhereInput | ArrangementScalarWhereInput[]
  }

  export type ArrangementUncheckedUpdateManyWithoutSongNestedInput = {
    create?: XOR<ArrangementCreateWithoutSongInput, ArrangementUncheckedCreateWithoutSongInput> | ArrangementCreateWithoutSongInput[] | ArrangementUncheckedCreateWithoutSongInput[]
    connectOrCreate?: ArrangementCreateOrConnectWithoutSongInput | ArrangementCreateOrConnectWithoutSongInput[]
    upsert?: ArrangementUpsertWithWhereUniqueWithoutSongInput | ArrangementUpsertWithWhereUniqueWithoutSongInput[]
    createMany?: ArrangementCreateManySongInputEnvelope
    set?: ArrangementWhereUniqueInput | ArrangementWhereUniqueInput[]
    disconnect?: ArrangementWhereUniqueInput | ArrangementWhereUniqueInput[]
    delete?: ArrangementWhereUniqueInput | ArrangementWhereUniqueInput[]
    connect?: ArrangementWhereUniqueInput | ArrangementWhereUniqueInput[]
    update?: ArrangementUpdateWithWhereUniqueWithoutSongInput | ArrangementUpdateWithWhereUniqueWithoutSongInput[]
    updateMany?: ArrangementUpdateManyWithWhereWithoutSongInput | ArrangementUpdateManyWithWhereWithoutSongInput[]
    deleteMany?: ArrangementScalarWhereInput | ArrangementScalarWhereInput[]
  }

  export type SongCreateNestedOneWithoutArrangementsInput = {
    create?: XOR<SongCreateWithoutArrangementsInput, SongUncheckedCreateWithoutArrangementsInput>
    connectOrCreate?: SongCreateOrConnectWithoutArrangementsInput
    connect?: SongWhereUniqueInput
  }

  export type SetlistItemCreateNestedManyWithoutArrangementInput = {
    create?: XOR<SetlistItemCreateWithoutArrangementInput, SetlistItemUncheckedCreateWithoutArrangementInput> | SetlistItemCreateWithoutArrangementInput[] | SetlistItemUncheckedCreateWithoutArrangementInput[]
    connectOrCreate?: SetlistItemCreateOrConnectWithoutArrangementInput | SetlistItemCreateOrConnectWithoutArrangementInput[]
    createMany?: SetlistItemCreateManyArrangementInputEnvelope
    connect?: SetlistItemWhereUniqueInput | SetlistItemWhereUniqueInput[]
  }

  export type SetlistItemUncheckedCreateNestedManyWithoutArrangementInput = {
    create?: XOR<SetlistItemCreateWithoutArrangementInput, SetlistItemUncheckedCreateWithoutArrangementInput> | SetlistItemCreateWithoutArrangementInput[] | SetlistItemUncheckedCreateWithoutArrangementInput[]
    connectOrCreate?: SetlistItemCreateOrConnectWithoutArrangementInput | SetlistItemCreateOrConnectWithoutArrangementInput[]
    createMany?: SetlistItemCreateManyArrangementInputEnvelope
    connect?: SetlistItemWhereUniqueInput | SetlistItemWhereUniqueInput[]
  }

  export type SongUpdateOneRequiredWithoutArrangementsNestedInput = {
    create?: XOR<SongCreateWithoutArrangementsInput, SongUncheckedCreateWithoutArrangementsInput>
    connectOrCreate?: SongCreateOrConnectWithoutArrangementsInput
    upsert?: SongUpsertWithoutArrangementsInput
    connect?: SongWhereUniqueInput
    update?: XOR<XOR<SongUpdateToOneWithWhereWithoutArrangementsInput, SongUpdateWithoutArrangementsInput>, SongUncheckedUpdateWithoutArrangementsInput>
  }

  export type SetlistItemUpdateManyWithoutArrangementNestedInput = {
    create?: XOR<SetlistItemCreateWithoutArrangementInput, SetlistItemUncheckedCreateWithoutArrangementInput> | SetlistItemCreateWithoutArrangementInput[] | SetlistItemUncheckedCreateWithoutArrangementInput[]
    connectOrCreate?: SetlistItemCreateOrConnectWithoutArrangementInput | SetlistItemCreateOrConnectWithoutArrangementInput[]
    upsert?: SetlistItemUpsertWithWhereUniqueWithoutArrangementInput | SetlistItemUpsertWithWhereUniqueWithoutArrangementInput[]
    createMany?: SetlistItemCreateManyArrangementInputEnvelope
    set?: SetlistItemWhereUniqueInput | SetlistItemWhereUniqueInput[]
    disconnect?: SetlistItemWhereUniqueInput | SetlistItemWhereUniqueInput[]
    delete?: SetlistItemWhereUniqueInput | SetlistItemWhereUniqueInput[]
    connect?: SetlistItemWhereUniqueInput | SetlistItemWhereUniqueInput[]
    update?: SetlistItemUpdateWithWhereUniqueWithoutArrangementInput | SetlistItemUpdateWithWhereUniqueWithoutArrangementInput[]
    updateMany?: SetlistItemUpdateManyWithWhereWithoutArrangementInput | SetlistItemUpdateManyWithWhereWithoutArrangementInput[]
    deleteMany?: SetlistItemScalarWhereInput | SetlistItemScalarWhereInput[]
  }

  export type SetlistItemUncheckedUpdateManyWithoutArrangementNestedInput = {
    create?: XOR<SetlistItemCreateWithoutArrangementInput, SetlistItemUncheckedCreateWithoutArrangementInput> | SetlistItemCreateWithoutArrangementInput[] | SetlistItemUncheckedCreateWithoutArrangementInput[]
    connectOrCreate?: SetlistItemCreateOrConnectWithoutArrangementInput | SetlistItemCreateOrConnectWithoutArrangementInput[]
    upsert?: SetlistItemUpsertWithWhereUniqueWithoutArrangementInput | SetlistItemUpsertWithWhereUniqueWithoutArrangementInput[]
    createMany?: SetlistItemCreateManyArrangementInputEnvelope
    set?: SetlistItemWhereUniqueInput | SetlistItemWhereUniqueInput[]
    disconnect?: SetlistItemWhereUniqueInput | SetlistItemWhereUniqueInput[]
    delete?: SetlistItemWhereUniqueInput | SetlistItemWhereUniqueInput[]
    connect?: SetlistItemWhereUniqueInput | SetlistItemWhereUniqueInput[]
    update?: SetlistItemUpdateWithWhereUniqueWithoutArrangementInput | SetlistItemUpdateWithWhereUniqueWithoutArrangementInput[]
    updateMany?: SetlistItemUpdateManyWithWhereWithoutArrangementInput | SetlistItemUpdateManyWithWhereWithoutArrangementInput[]
    deleteMany?: SetlistItemScalarWhereInput | SetlistItemScalarWhereInput[]
  }

  export type MinistryCreateNestedOneWithoutSetlistsInput = {
    create?: XOR<MinistryCreateWithoutSetlistsInput, MinistryUncheckedCreateWithoutSetlistsInput>
    connectOrCreate?: MinistryCreateOrConnectWithoutSetlistsInput
    connect?: MinistryWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSetlistsInput = {
    create?: XOR<UserCreateWithoutSetlistsInput, UserUncheckedCreateWithoutSetlistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSetlistsInput
    connect?: UserWhereUniqueInput
  }

  export type SetlistItemCreateNestedManyWithoutSetlistInput = {
    create?: XOR<SetlistItemCreateWithoutSetlistInput, SetlistItemUncheckedCreateWithoutSetlistInput> | SetlistItemCreateWithoutSetlistInput[] | SetlistItemUncheckedCreateWithoutSetlistInput[]
    connectOrCreate?: SetlistItemCreateOrConnectWithoutSetlistInput | SetlistItemCreateOrConnectWithoutSetlistInput[]
    createMany?: SetlistItemCreateManySetlistInputEnvelope
    connect?: SetlistItemWhereUniqueInput | SetlistItemWhereUniqueInput[]
  }

  export type EventLogCreateNestedManyWithoutSetlistInput = {
    create?: XOR<EventLogCreateWithoutSetlistInput, EventLogUncheckedCreateWithoutSetlistInput> | EventLogCreateWithoutSetlistInput[] | EventLogUncheckedCreateWithoutSetlistInput[]
    connectOrCreate?: EventLogCreateOrConnectWithoutSetlistInput | EventLogCreateOrConnectWithoutSetlistInput[]
    createMany?: EventLogCreateManySetlistInputEnvelope
    connect?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
  }

  export type SetlistItemUncheckedCreateNestedManyWithoutSetlistInput = {
    create?: XOR<SetlistItemCreateWithoutSetlistInput, SetlistItemUncheckedCreateWithoutSetlistInput> | SetlistItemCreateWithoutSetlistInput[] | SetlistItemUncheckedCreateWithoutSetlistInput[]
    connectOrCreate?: SetlistItemCreateOrConnectWithoutSetlistInput | SetlistItemCreateOrConnectWithoutSetlistInput[]
    createMany?: SetlistItemCreateManySetlistInputEnvelope
    connect?: SetlistItemWhereUniqueInput | SetlistItemWhereUniqueInput[]
  }

  export type EventLogUncheckedCreateNestedManyWithoutSetlistInput = {
    create?: XOR<EventLogCreateWithoutSetlistInput, EventLogUncheckedCreateWithoutSetlistInput> | EventLogCreateWithoutSetlistInput[] | EventLogUncheckedCreateWithoutSetlistInput[]
    connectOrCreate?: EventLogCreateOrConnectWithoutSetlistInput | EventLogCreateOrConnectWithoutSetlistInput[]
    createMany?: EventLogCreateManySetlistInputEnvelope
    connect?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type MinistryUpdateOneRequiredWithoutSetlistsNestedInput = {
    create?: XOR<MinistryCreateWithoutSetlistsInput, MinistryUncheckedCreateWithoutSetlistsInput>
    connectOrCreate?: MinistryCreateOrConnectWithoutSetlistsInput
    upsert?: MinistryUpsertWithoutSetlistsInput
    connect?: MinistryWhereUniqueInput
    update?: XOR<XOR<MinistryUpdateToOneWithWhereWithoutSetlistsInput, MinistryUpdateWithoutSetlistsInput>, MinistryUncheckedUpdateWithoutSetlistsInput>
  }

  export type UserUpdateOneWithoutSetlistsNestedInput = {
    create?: XOR<UserCreateWithoutSetlistsInput, UserUncheckedCreateWithoutSetlistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSetlistsInput
    upsert?: UserUpsertWithoutSetlistsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSetlistsInput, UserUpdateWithoutSetlistsInput>, UserUncheckedUpdateWithoutSetlistsInput>
  }

  export type SetlistItemUpdateManyWithoutSetlistNestedInput = {
    create?: XOR<SetlistItemCreateWithoutSetlistInput, SetlistItemUncheckedCreateWithoutSetlistInput> | SetlistItemCreateWithoutSetlistInput[] | SetlistItemUncheckedCreateWithoutSetlistInput[]
    connectOrCreate?: SetlistItemCreateOrConnectWithoutSetlistInput | SetlistItemCreateOrConnectWithoutSetlistInput[]
    upsert?: SetlistItemUpsertWithWhereUniqueWithoutSetlistInput | SetlistItemUpsertWithWhereUniqueWithoutSetlistInput[]
    createMany?: SetlistItemCreateManySetlistInputEnvelope
    set?: SetlistItemWhereUniqueInput | SetlistItemWhereUniqueInput[]
    disconnect?: SetlistItemWhereUniqueInput | SetlistItemWhereUniqueInput[]
    delete?: SetlistItemWhereUniqueInput | SetlistItemWhereUniqueInput[]
    connect?: SetlistItemWhereUniqueInput | SetlistItemWhereUniqueInput[]
    update?: SetlistItemUpdateWithWhereUniqueWithoutSetlistInput | SetlistItemUpdateWithWhereUniqueWithoutSetlistInput[]
    updateMany?: SetlistItemUpdateManyWithWhereWithoutSetlistInput | SetlistItemUpdateManyWithWhereWithoutSetlistInput[]
    deleteMany?: SetlistItemScalarWhereInput | SetlistItemScalarWhereInput[]
  }

  export type EventLogUpdateManyWithoutSetlistNestedInput = {
    create?: XOR<EventLogCreateWithoutSetlistInput, EventLogUncheckedCreateWithoutSetlistInput> | EventLogCreateWithoutSetlistInput[] | EventLogUncheckedCreateWithoutSetlistInput[]
    connectOrCreate?: EventLogCreateOrConnectWithoutSetlistInput | EventLogCreateOrConnectWithoutSetlistInput[]
    upsert?: EventLogUpsertWithWhereUniqueWithoutSetlistInput | EventLogUpsertWithWhereUniqueWithoutSetlistInput[]
    createMany?: EventLogCreateManySetlistInputEnvelope
    set?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
    disconnect?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
    delete?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
    connect?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
    update?: EventLogUpdateWithWhereUniqueWithoutSetlistInput | EventLogUpdateWithWhereUniqueWithoutSetlistInput[]
    updateMany?: EventLogUpdateManyWithWhereWithoutSetlistInput | EventLogUpdateManyWithWhereWithoutSetlistInput[]
    deleteMany?: EventLogScalarWhereInput | EventLogScalarWhereInput[]
  }

  export type SetlistItemUncheckedUpdateManyWithoutSetlistNestedInput = {
    create?: XOR<SetlistItemCreateWithoutSetlistInput, SetlistItemUncheckedCreateWithoutSetlistInput> | SetlistItemCreateWithoutSetlistInput[] | SetlistItemUncheckedCreateWithoutSetlistInput[]
    connectOrCreate?: SetlistItemCreateOrConnectWithoutSetlistInput | SetlistItemCreateOrConnectWithoutSetlistInput[]
    upsert?: SetlistItemUpsertWithWhereUniqueWithoutSetlistInput | SetlistItemUpsertWithWhereUniqueWithoutSetlistInput[]
    createMany?: SetlistItemCreateManySetlistInputEnvelope
    set?: SetlistItemWhereUniqueInput | SetlistItemWhereUniqueInput[]
    disconnect?: SetlistItemWhereUniqueInput | SetlistItemWhereUniqueInput[]
    delete?: SetlistItemWhereUniqueInput | SetlistItemWhereUniqueInput[]
    connect?: SetlistItemWhereUniqueInput | SetlistItemWhereUniqueInput[]
    update?: SetlistItemUpdateWithWhereUniqueWithoutSetlistInput | SetlistItemUpdateWithWhereUniqueWithoutSetlistInput[]
    updateMany?: SetlistItemUpdateManyWithWhereWithoutSetlistInput | SetlistItemUpdateManyWithWhereWithoutSetlistInput[]
    deleteMany?: SetlistItemScalarWhereInput | SetlistItemScalarWhereInput[]
  }

  export type EventLogUncheckedUpdateManyWithoutSetlistNestedInput = {
    create?: XOR<EventLogCreateWithoutSetlistInput, EventLogUncheckedCreateWithoutSetlistInput> | EventLogCreateWithoutSetlistInput[] | EventLogUncheckedCreateWithoutSetlistInput[]
    connectOrCreate?: EventLogCreateOrConnectWithoutSetlistInput | EventLogCreateOrConnectWithoutSetlistInput[]
    upsert?: EventLogUpsertWithWhereUniqueWithoutSetlistInput | EventLogUpsertWithWhereUniqueWithoutSetlistInput[]
    createMany?: EventLogCreateManySetlistInputEnvelope
    set?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
    disconnect?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
    delete?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
    connect?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
    update?: EventLogUpdateWithWhereUniqueWithoutSetlistInput | EventLogUpdateWithWhereUniqueWithoutSetlistInput[]
    updateMany?: EventLogUpdateManyWithWhereWithoutSetlistInput | EventLogUpdateManyWithWhereWithoutSetlistInput[]
    deleteMany?: EventLogScalarWhereInput | EventLogScalarWhereInput[]
  }

  export type SetlistCreateNestedOneWithoutItemsInput = {
    create?: XOR<SetlistCreateWithoutItemsInput, SetlistUncheckedCreateWithoutItemsInput>
    connectOrCreate?: SetlistCreateOrConnectWithoutItemsInput
    connect?: SetlistWhereUniqueInput
  }

  export type ArrangementCreateNestedOneWithoutItemsInput = {
    create?: XOR<ArrangementCreateWithoutItemsInput, ArrangementUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ArrangementCreateOrConnectWithoutItemsInput
    connect?: ArrangementWhereUniqueInput
  }

  export type SetlistUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<SetlistCreateWithoutItemsInput, SetlistUncheckedCreateWithoutItemsInput>
    connectOrCreate?: SetlistCreateOrConnectWithoutItemsInput
    upsert?: SetlistUpsertWithoutItemsInput
    connect?: SetlistWhereUniqueInput
    update?: XOR<XOR<SetlistUpdateToOneWithWhereWithoutItemsInput, SetlistUpdateWithoutItemsInput>, SetlistUncheckedUpdateWithoutItemsInput>
  }

  export type ArrangementUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<ArrangementCreateWithoutItemsInput, ArrangementUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ArrangementCreateOrConnectWithoutItemsInput
    upsert?: ArrangementUpsertWithoutItemsInput
    connect?: ArrangementWhereUniqueInput
    update?: XOR<XOR<ArrangementUpdateToOneWithWhereWithoutItemsInput, ArrangementUpdateWithoutItemsInput>, ArrangementUncheckedUpdateWithoutItemsInput>
  }

  export type UserCreateNestedOneWithoutEventsInput = {
    create?: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventsInput
    connect?: UserWhereUniqueInput
  }

  export type MinistryCreateNestedOneWithoutEventsInput = {
    create?: XOR<MinistryCreateWithoutEventsInput, MinistryUncheckedCreateWithoutEventsInput>
    connectOrCreate?: MinistryCreateOrConnectWithoutEventsInput
    connect?: MinistryWhereUniqueInput
  }

  export type SetlistCreateNestedOneWithoutEventsInput = {
    create?: XOR<SetlistCreateWithoutEventsInput, SetlistUncheckedCreateWithoutEventsInput>
    connectOrCreate?: SetlistCreateOrConnectWithoutEventsInput
    connect?: SetlistWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventsInput
    upsert?: UserUpsertWithoutEventsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEventsInput, UserUpdateWithoutEventsInput>, UserUncheckedUpdateWithoutEventsInput>
  }

  export type MinistryUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<MinistryCreateWithoutEventsInput, MinistryUncheckedCreateWithoutEventsInput>
    connectOrCreate?: MinistryCreateOrConnectWithoutEventsInput
    upsert?: MinistryUpsertWithoutEventsInput
    connect?: MinistryWhereUniqueInput
    update?: XOR<XOR<MinistryUpdateToOneWithWhereWithoutEventsInput, MinistryUpdateWithoutEventsInput>, MinistryUncheckedUpdateWithoutEventsInput>
  }

  export type SetlistUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<SetlistCreateWithoutEventsInput, SetlistUncheckedCreateWithoutEventsInput>
    connectOrCreate?: SetlistCreateOrConnectWithoutEventsInput
    upsert?: SetlistUpsertWithoutEventsInput
    connect?: SetlistWhereUniqueInput
    update?: XOR<XOR<SetlistUpdateToOneWithWhereWithoutEventsInput, SetlistUpdateWithoutEventsInput>, SetlistUncheckedUpdateWithoutEventsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type MinistryCreateWithoutOwnerInput = {
    id?: string
    name: string
    createdAt?: Date | string
    members?: MinistryMemberCreateNestedManyWithoutMinistryInput
    setlists?: SetlistCreateNestedManyWithoutMinistryInput
    events?: EventLogCreateNestedManyWithoutMinistryInput
  }

  export type MinistryUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    createdAt?: Date | string
    members?: MinistryMemberUncheckedCreateNestedManyWithoutMinistryInput
    setlists?: SetlistUncheckedCreateNestedManyWithoutMinistryInput
    events?: EventLogUncheckedCreateNestedManyWithoutMinistryInput
  }

  export type MinistryCreateOrConnectWithoutOwnerInput = {
    where: MinistryWhereUniqueInput
    create: XOR<MinistryCreateWithoutOwnerInput, MinistryUncheckedCreateWithoutOwnerInput>
  }

  export type MinistryCreateManyOwnerInputEnvelope = {
    data: MinistryCreateManyOwnerInput | MinistryCreateManyOwnerInput[]
  }

  export type MinistryMemberCreateWithoutUserInput = {
    id?: string
    role?: string
    createdAt?: Date | string
    ministry: MinistryCreateNestedOneWithoutMembersInput
  }

  export type MinistryMemberUncheckedCreateWithoutUserInput = {
    id?: string
    ministryId: string
    role?: string
    createdAt?: Date | string
  }

  export type MinistryMemberCreateOrConnectWithoutUserInput = {
    where: MinistryMemberWhereUniqueInput
    create: XOR<MinistryMemberCreateWithoutUserInput, MinistryMemberUncheckedCreateWithoutUserInput>
  }

  export type MinistryMemberCreateManyUserInputEnvelope = {
    data: MinistryMemberCreateManyUserInput | MinistryMemberCreateManyUserInput[]
  }

  export type SetlistCreateWithoutCreatedByInput = {
    id?: string
    name: string
    date?: Date | string | null
    liturgyType?: string | null
    season?: string | null
    createdAt?: Date | string
    ministry: MinistryCreateNestedOneWithoutSetlistsInput
    items?: SetlistItemCreateNestedManyWithoutSetlistInput
    events?: EventLogCreateNestedManyWithoutSetlistInput
  }

  export type SetlistUncheckedCreateWithoutCreatedByInput = {
    id?: string
    ministryId: string
    name: string
    date?: Date | string | null
    liturgyType?: string | null
    season?: string | null
    createdAt?: Date | string
    items?: SetlistItemUncheckedCreateNestedManyWithoutSetlistInput
    events?: EventLogUncheckedCreateNestedManyWithoutSetlistInput
  }

  export type SetlistCreateOrConnectWithoutCreatedByInput = {
    where: SetlistWhereUniqueInput
    create: XOR<SetlistCreateWithoutCreatedByInput, SetlistUncheckedCreateWithoutCreatedByInput>
  }

  export type SetlistCreateManyCreatedByInputEnvelope = {
    data: SetlistCreateManyCreatedByInput | SetlistCreateManyCreatedByInput[]
  }

  export type EventLogCreateWithoutUserInput = {
    id?: string
    type: string
    payloadJson?: string | null
    createdAt?: Date | string
    ministry: MinistryCreateNestedOneWithoutEventsInput
    setlist: SetlistCreateNestedOneWithoutEventsInput
  }

  export type EventLogUncheckedCreateWithoutUserInput = {
    id?: string
    ministryId: string
    setlistId: string
    type: string
    payloadJson?: string | null
    createdAt?: Date | string
  }

  export type EventLogCreateOrConnectWithoutUserInput = {
    where: EventLogWhereUniqueInput
    create: XOR<EventLogCreateWithoutUserInput, EventLogUncheckedCreateWithoutUserInput>
  }

  export type EventLogCreateManyUserInputEnvelope = {
    data: EventLogCreateManyUserInput | EventLogCreateManyUserInput[]
  }

  export type MinistryUpsertWithWhereUniqueWithoutOwnerInput = {
    where: MinistryWhereUniqueInput
    update: XOR<MinistryUpdateWithoutOwnerInput, MinistryUncheckedUpdateWithoutOwnerInput>
    create: XOR<MinistryCreateWithoutOwnerInput, MinistryUncheckedCreateWithoutOwnerInput>
  }

  export type MinistryUpdateWithWhereUniqueWithoutOwnerInput = {
    where: MinistryWhereUniqueInput
    data: XOR<MinistryUpdateWithoutOwnerInput, MinistryUncheckedUpdateWithoutOwnerInput>
  }

  export type MinistryUpdateManyWithWhereWithoutOwnerInput = {
    where: MinistryScalarWhereInput
    data: XOR<MinistryUpdateManyMutationInput, MinistryUncheckedUpdateManyWithoutOwnerInput>
  }

  export type MinistryScalarWhereInput = {
    AND?: MinistryScalarWhereInput | MinistryScalarWhereInput[]
    OR?: MinistryScalarWhereInput[]
    NOT?: MinistryScalarWhereInput | MinistryScalarWhereInput[]
    id?: StringFilter<"Ministry"> | string
    name?: StringFilter<"Ministry"> | string
    ownerUserId?: StringFilter<"Ministry"> | string
    createdAt?: DateTimeFilter<"Ministry"> | Date | string
  }

  export type MinistryMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: MinistryMemberWhereUniqueInput
    update: XOR<MinistryMemberUpdateWithoutUserInput, MinistryMemberUncheckedUpdateWithoutUserInput>
    create: XOR<MinistryMemberCreateWithoutUserInput, MinistryMemberUncheckedCreateWithoutUserInput>
  }

  export type MinistryMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: MinistryMemberWhereUniqueInput
    data: XOR<MinistryMemberUpdateWithoutUserInput, MinistryMemberUncheckedUpdateWithoutUserInput>
  }

  export type MinistryMemberUpdateManyWithWhereWithoutUserInput = {
    where: MinistryMemberScalarWhereInput
    data: XOR<MinistryMemberUpdateManyMutationInput, MinistryMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type MinistryMemberScalarWhereInput = {
    AND?: MinistryMemberScalarWhereInput | MinistryMemberScalarWhereInput[]
    OR?: MinistryMemberScalarWhereInput[]
    NOT?: MinistryMemberScalarWhereInput | MinistryMemberScalarWhereInput[]
    id?: StringFilter<"MinistryMember"> | string
    ministryId?: StringFilter<"MinistryMember"> | string
    userId?: StringFilter<"MinistryMember"> | string
    role?: StringFilter<"MinistryMember"> | string
    createdAt?: DateTimeFilter<"MinistryMember"> | Date | string
  }

  export type SetlistUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: SetlistWhereUniqueInput
    update: XOR<SetlistUpdateWithoutCreatedByInput, SetlistUncheckedUpdateWithoutCreatedByInput>
    create: XOR<SetlistCreateWithoutCreatedByInput, SetlistUncheckedCreateWithoutCreatedByInput>
  }

  export type SetlistUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: SetlistWhereUniqueInput
    data: XOR<SetlistUpdateWithoutCreatedByInput, SetlistUncheckedUpdateWithoutCreatedByInput>
  }

  export type SetlistUpdateManyWithWhereWithoutCreatedByInput = {
    where: SetlistScalarWhereInput
    data: XOR<SetlistUpdateManyMutationInput, SetlistUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type SetlistScalarWhereInput = {
    AND?: SetlistScalarWhereInput | SetlistScalarWhereInput[]
    OR?: SetlistScalarWhereInput[]
    NOT?: SetlistScalarWhereInput | SetlistScalarWhereInput[]
    id?: StringFilter<"Setlist"> | string
    ministryId?: StringFilter<"Setlist"> | string
    name?: StringFilter<"Setlist"> | string
    date?: DateTimeNullableFilter<"Setlist"> | Date | string | null
    liturgyType?: StringNullableFilter<"Setlist"> | string | null
    season?: StringNullableFilter<"Setlist"> | string | null
    createdAt?: DateTimeFilter<"Setlist"> | Date | string
    createdById?: StringNullableFilter<"Setlist"> | string | null
  }

  export type EventLogUpsertWithWhereUniqueWithoutUserInput = {
    where: EventLogWhereUniqueInput
    update: XOR<EventLogUpdateWithoutUserInput, EventLogUncheckedUpdateWithoutUserInput>
    create: XOR<EventLogCreateWithoutUserInput, EventLogUncheckedCreateWithoutUserInput>
  }

  export type EventLogUpdateWithWhereUniqueWithoutUserInput = {
    where: EventLogWhereUniqueInput
    data: XOR<EventLogUpdateWithoutUserInput, EventLogUncheckedUpdateWithoutUserInput>
  }

  export type EventLogUpdateManyWithWhereWithoutUserInput = {
    where: EventLogScalarWhereInput
    data: XOR<EventLogUpdateManyMutationInput, EventLogUncheckedUpdateManyWithoutUserInput>
  }

  export type EventLogScalarWhereInput = {
    AND?: EventLogScalarWhereInput | EventLogScalarWhereInput[]
    OR?: EventLogScalarWhereInput[]
    NOT?: EventLogScalarWhereInput | EventLogScalarWhereInput[]
    id?: StringFilter<"EventLog"> | string
    userId?: StringFilter<"EventLog"> | string
    ministryId?: StringFilter<"EventLog"> | string
    setlistId?: StringFilter<"EventLog"> | string
    type?: StringFilter<"EventLog"> | string
    payloadJson?: StringNullableFilter<"EventLog"> | string | null
    createdAt?: DateTimeFilter<"EventLog"> | Date | string
  }

  export type UserCreateWithoutMinistriesInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    createdAt?: Date | string
    memberships?: MinistryMemberCreateNestedManyWithoutUserInput
    setlists?: SetlistCreateNestedManyWithoutCreatedByInput
    events?: EventLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMinistriesInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    createdAt?: Date | string
    memberships?: MinistryMemberUncheckedCreateNestedManyWithoutUserInput
    setlists?: SetlistUncheckedCreateNestedManyWithoutCreatedByInput
    events?: EventLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMinistriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMinistriesInput, UserUncheckedCreateWithoutMinistriesInput>
  }

  export type MinistryMemberCreateWithoutMinistryInput = {
    id?: string
    role?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutMembershipsInput
  }

  export type MinistryMemberUncheckedCreateWithoutMinistryInput = {
    id?: string
    userId: string
    role?: string
    createdAt?: Date | string
  }

  export type MinistryMemberCreateOrConnectWithoutMinistryInput = {
    where: MinistryMemberWhereUniqueInput
    create: XOR<MinistryMemberCreateWithoutMinistryInput, MinistryMemberUncheckedCreateWithoutMinistryInput>
  }

  export type MinistryMemberCreateManyMinistryInputEnvelope = {
    data: MinistryMemberCreateManyMinistryInput | MinistryMemberCreateManyMinistryInput[]
  }

  export type SetlistCreateWithoutMinistryInput = {
    id?: string
    name: string
    date?: Date | string | null
    liturgyType?: string | null
    season?: string | null
    createdAt?: Date | string
    createdBy?: UserCreateNestedOneWithoutSetlistsInput
    items?: SetlistItemCreateNestedManyWithoutSetlistInput
    events?: EventLogCreateNestedManyWithoutSetlistInput
  }

  export type SetlistUncheckedCreateWithoutMinistryInput = {
    id?: string
    name: string
    date?: Date | string | null
    liturgyType?: string | null
    season?: string | null
    createdAt?: Date | string
    createdById?: string | null
    items?: SetlistItemUncheckedCreateNestedManyWithoutSetlistInput
    events?: EventLogUncheckedCreateNestedManyWithoutSetlistInput
  }

  export type SetlistCreateOrConnectWithoutMinistryInput = {
    where: SetlistWhereUniqueInput
    create: XOR<SetlistCreateWithoutMinistryInput, SetlistUncheckedCreateWithoutMinistryInput>
  }

  export type SetlistCreateManyMinistryInputEnvelope = {
    data: SetlistCreateManyMinistryInput | SetlistCreateManyMinistryInput[]
  }

  export type EventLogCreateWithoutMinistryInput = {
    id?: string
    type: string
    payloadJson?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutEventsInput
    setlist: SetlistCreateNestedOneWithoutEventsInput
  }

  export type EventLogUncheckedCreateWithoutMinistryInput = {
    id?: string
    userId: string
    setlistId: string
    type: string
    payloadJson?: string | null
    createdAt?: Date | string
  }

  export type EventLogCreateOrConnectWithoutMinistryInput = {
    where: EventLogWhereUniqueInput
    create: XOR<EventLogCreateWithoutMinistryInput, EventLogUncheckedCreateWithoutMinistryInput>
  }

  export type EventLogCreateManyMinistryInputEnvelope = {
    data: EventLogCreateManyMinistryInput | EventLogCreateManyMinistryInput[]
  }

  export type UserUpsertWithoutMinistriesInput = {
    update: XOR<UserUpdateWithoutMinistriesInput, UserUncheckedUpdateWithoutMinistriesInput>
    create: XOR<UserCreateWithoutMinistriesInput, UserUncheckedCreateWithoutMinistriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMinistriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMinistriesInput, UserUncheckedUpdateWithoutMinistriesInput>
  }

  export type UserUpdateWithoutMinistriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MinistryMemberUpdateManyWithoutUserNestedInput
    setlists?: SetlistUpdateManyWithoutCreatedByNestedInput
    events?: EventLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMinistriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MinistryMemberUncheckedUpdateManyWithoutUserNestedInput
    setlists?: SetlistUncheckedUpdateManyWithoutCreatedByNestedInput
    events?: EventLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MinistryMemberUpsertWithWhereUniqueWithoutMinistryInput = {
    where: MinistryMemberWhereUniqueInput
    update: XOR<MinistryMemberUpdateWithoutMinistryInput, MinistryMemberUncheckedUpdateWithoutMinistryInput>
    create: XOR<MinistryMemberCreateWithoutMinistryInput, MinistryMemberUncheckedCreateWithoutMinistryInput>
  }

  export type MinistryMemberUpdateWithWhereUniqueWithoutMinistryInput = {
    where: MinistryMemberWhereUniqueInput
    data: XOR<MinistryMemberUpdateWithoutMinistryInput, MinistryMemberUncheckedUpdateWithoutMinistryInput>
  }

  export type MinistryMemberUpdateManyWithWhereWithoutMinistryInput = {
    where: MinistryMemberScalarWhereInput
    data: XOR<MinistryMemberUpdateManyMutationInput, MinistryMemberUncheckedUpdateManyWithoutMinistryInput>
  }

  export type SetlistUpsertWithWhereUniqueWithoutMinistryInput = {
    where: SetlistWhereUniqueInput
    update: XOR<SetlistUpdateWithoutMinistryInput, SetlistUncheckedUpdateWithoutMinistryInput>
    create: XOR<SetlistCreateWithoutMinistryInput, SetlistUncheckedCreateWithoutMinistryInput>
  }

  export type SetlistUpdateWithWhereUniqueWithoutMinistryInput = {
    where: SetlistWhereUniqueInput
    data: XOR<SetlistUpdateWithoutMinistryInput, SetlistUncheckedUpdateWithoutMinistryInput>
  }

  export type SetlistUpdateManyWithWhereWithoutMinistryInput = {
    where: SetlistScalarWhereInput
    data: XOR<SetlistUpdateManyMutationInput, SetlistUncheckedUpdateManyWithoutMinistryInput>
  }

  export type EventLogUpsertWithWhereUniqueWithoutMinistryInput = {
    where: EventLogWhereUniqueInput
    update: XOR<EventLogUpdateWithoutMinistryInput, EventLogUncheckedUpdateWithoutMinistryInput>
    create: XOR<EventLogCreateWithoutMinistryInput, EventLogUncheckedCreateWithoutMinistryInput>
  }

  export type EventLogUpdateWithWhereUniqueWithoutMinistryInput = {
    where: EventLogWhereUniqueInput
    data: XOR<EventLogUpdateWithoutMinistryInput, EventLogUncheckedUpdateWithoutMinistryInput>
  }

  export type EventLogUpdateManyWithWhereWithoutMinistryInput = {
    where: EventLogScalarWhereInput
    data: XOR<EventLogUpdateManyMutationInput, EventLogUncheckedUpdateManyWithoutMinistryInput>
  }

  export type MinistryCreateWithoutMembersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutMinistriesInput
    setlists?: SetlistCreateNestedManyWithoutMinistryInput
    events?: EventLogCreateNestedManyWithoutMinistryInput
  }

  export type MinistryUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    ownerUserId: string
    createdAt?: Date | string
    setlists?: SetlistUncheckedCreateNestedManyWithoutMinistryInput
    events?: EventLogUncheckedCreateNestedManyWithoutMinistryInput
  }

  export type MinistryCreateOrConnectWithoutMembersInput = {
    where: MinistryWhereUniqueInput
    create: XOR<MinistryCreateWithoutMembersInput, MinistryUncheckedCreateWithoutMembersInput>
  }

  export type UserCreateWithoutMembershipsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    createdAt?: Date | string
    ministries?: MinistryCreateNestedManyWithoutOwnerInput
    setlists?: SetlistCreateNestedManyWithoutCreatedByInput
    events?: EventLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMembershipsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    createdAt?: Date | string
    ministries?: MinistryUncheckedCreateNestedManyWithoutOwnerInput
    setlists?: SetlistUncheckedCreateNestedManyWithoutCreatedByInput
    events?: EventLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMembershipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
  }

  export type MinistryUpsertWithoutMembersInput = {
    update: XOR<MinistryUpdateWithoutMembersInput, MinistryUncheckedUpdateWithoutMembersInput>
    create: XOR<MinistryCreateWithoutMembersInput, MinistryUncheckedCreateWithoutMembersInput>
    where?: MinistryWhereInput
  }

  export type MinistryUpdateToOneWithWhereWithoutMembersInput = {
    where?: MinistryWhereInput
    data: XOR<MinistryUpdateWithoutMembersInput, MinistryUncheckedUpdateWithoutMembersInput>
  }

  export type MinistryUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutMinistriesNestedInput
    setlists?: SetlistUpdateManyWithoutMinistryNestedInput
    events?: EventLogUpdateManyWithoutMinistryNestedInput
  }

  export type MinistryUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    setlists?: SetlistUncheckedUpdateManyWithoutMinistryNestedInput
    events?: EventLogUncheckedUpdateManyWithoutMinistryNestedInput
  }

  export type UserUpsertWithoutMembershipsInput = {
    update: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
    create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
  }

  export type UserUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ministries?: MinistryUpdateManyWithoutOwnerNestedInput
    setlists?: SetlistUpdateManyWithoutCreatedByNestedInput
    events?: EventLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ministries?: MinistryUncheckedUpdateManyWithoutOwnerNestedInput
    setlists?: SetlistUncheckedUpdateManyWithoutCreatedByNestedInput
    events?: EventLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ArrangementCreateWithoutSongInput = {
    id?: string
    name: string
    defaultKey: string
    defaultBpm: number
    structureJson: string
    stemsJson: string
    audioDemoUrl: string
    createdAt?: Date | string
    items?: SetlistItemCreateNestedManyWithoutArrangementInput
  }

  export type ArrangementUncheckedCreateWithoutSongInput = {
    id?: string
    name: string
    defaultKey: string
    defaultBpm: number
    structureJson: string
    stemsJson: string
    audioDemoUrl: string
    createdAt?: Date | string
    items?: SetlistItemUncheckedCreateNestedManyWithoutArrangementInput
  }

  export type ArrangementCreateOrConnectWithoutSongInput = {
    where: ArrangementWhereUniqueInput
    create: XOR<ArrangementCreateWithoutSongInput, ArrangementUncheckedCreateWithoutSongInput>
  }

  export type ArrangementCreateManySongInputEnvelope = {
    data: ArrangementCreateManySongInput | ArrangementCreateManySongInput[]
  }

  export type ArrangementUpsertWithWhereUniqueWithoutSongInput = {
    where: ArrangementWhereUniqueInput
    update: XOR<ArrangementUpdateWithoutSongInput, ArrangementUncheckedUpdateWithoutSongInput>
    create: XOR<ArrangementCreateWithoutSongInput, ArrangementUncheckedCreateWithoutSongInput>
  }

  export type ArrangementUpdateWithWhereUniqueWithoutSongInput = {
    where: ArrangementWhereUniqueInput
    data: XOR<ArrangementUpdateWithoutSongInput, ArrangementUncheckedUpdateWithoutSongInput>
  }

  export type ArrangementUpdateManyWithWhereWithoutSongInput = {
    where: ArrangementScalarWhereInput
    data: XOR<ArrangementUpdateManyMutationInput, ArrangementUncheckedUpdateManyWithoutSongInput>
  }

  export type ArrangementScalarWhereInput = {
    AND?: ArrangementScalarWhereInput | ArrangementScalarWhereInput[]
    OR?: ArrangementScalarWhereInput[]
    NOT?: ArrangementScalarWhereInput | ArrangementScalarWhereInput[]
    id?: StringFilter<"Arrangement"> | string
    songId?: StringFilter<"Arrangement"> | string
    name?: StringFilter<"Arrangement"> | string
    defaultKey?: StringFilter<"Arrangement"> | string
    defaultBpm?: IntFilter<"Arrangement"> | number
    structureJson?: StringFilter<"Arrangement"> | string
    stemsJson?: StringFilter<"Arrangement"> | string
    audioDemoUrl?: StringFilter<"Arrangement"> | string
    createdAt?: DateTimeFilter<"Arrangement"> | Date | string
  }

  export type SongCreateWithoutArrangementsInput = {
    id?: string
    title: string
    artist: string
    liturgicalTags: string
    bpm: number
    key: string
    timeSignature: string
    language: string
    season?: string | null
    parts: string
    createdAt?: Date | string
  }

  export type SongUncheckedCreateWithoutArrangementsInput = {
    id?: string
    title: string
    artist: string
    liturgicalTags: string
    bpm: number
    key: string
    timeSignature: string
    language: string
    season?: string | null
    parts: string
    createdAt?: Date | string
  }

  export type SongCreateOrConnectWithoutArrangementsInput = {
    where: SongWhereUniqueInput
    create: XOR<SongCreateWithoutArrangementsInput, SongUncheckedCreateWithoutArrangementsInput>
  }

  export type SetlistItemCreateWithoutArrangementInput = {
    id?: string
    order: number
    part: string
    notes?: string | null
    createdAt?: Date | string
    setlist: SetlistCreateNestedOneWithoutItemsInput
  }

  export type SetlistItemUncheckedCreateWithoutArrangementInput = {
    id?: string
    setlistId: string
    order: number
    part: string
    notes?: string | null
    createdAt?: Date | string
  }

  export type SetlistItemCreateOrConnectWithoutArrangementInput = {
    where: SetlistItemWhereUniqueInput
    create: XOR<SetlistItemCreateWithoutArrangementInput, SetlistItemUncheckedCreateWithoutArrangementInput>
  }

  export type SetlistItemCreateManyArrangementInputEnvelope = {
    data: SetlistItemCreateManyArrangementInput | SetlistItemCreateManyArrangementInput[]
  }

  export type SongUpsertWithoutArrangementsInput = {
    update: XOR<SongUpdateWithoutArrangementsInput, SongUncheckedUpdateWithoutArrangementsInput>
    create: XOR<SongCreateWithoutArrangementsInput, SongUncheckedCreateWithoutArrangementsInput>
    where?: SongWhereInput
  }

  export type SongUpdateToOneWithWhereWithoutArrangementsInput = {
    where?: SongWhereInput
    data: XOR<SongUpdateWithoutArrangementsInput, SongUncheckedUpdateWithoutArrangementsInput>
  }

  export type SongUpdateWithoutArrangementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    liturgicalTags?: StringFieldUpdateOperationsInput | string
    bpm?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    timeSignature?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    season?: NullableStringFieldUpdateOperationsInput | string | null
    parts?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SongUncheckedUpdateWithoutArrangementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    liturgicalTags?: StringFieldUpdateOperationsInput | string
    bpm?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    timeSignature?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    season?: NullableStringFieldUpdateOperationsInput | string | null
    parts?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SetlistItemUpsertWithWhereUniqueWithoutArrangementInput = {
    where: SetlistItemWhereUniqueInput
    update: XOR<SetlistItemUpdateWithoutArrangementInput, SetlistItemUncheckedUpdateWithoutArrangementInput>
    create: XOR<SetlistItemCreateWithoutArrangementInput, SetlistItemUncheckedCreateWithoutArrangementInput>
  }

  export type SetlistItemUpdateWithWhereUniqueWithoutArrangementInput = {
    where: SetlistItemWhereUniqueInput
    data: XOR<SetlistItemUpdateWithoutArrangementInput, SetlistItemUncheckedUpdateWithoutArrangementInput>
  }

  export type SetlistItemUpdateManyWithWhereWithoutArrangementInput = {
    where: SetlistItemScalarWhereInput
    data: XOR<SetlistItemUpdateManyMutationInput, SetlistItemUncheckedUpdateManyWithoutArrangementInput>
  }

  export type SetlistItemScalarWhereInput = {
    AND?: SetlistItemScalarWhereInput | SetlistItemScalarWhereInput[]
    OR?: SetlistItemScalarWhereInput[]
    NOT?: SetlistItemScalarWhereInput | SetlistItemScalarWhereInput[]
    id?: StringFilter<"SetlistItem"> | string
    setlistId?: StringFilter<"SetlistItem"> | string
    order?: IntFilter<"SetlistItem"> | number
    part?: StringFilter<"SetlistItem"> | string
    arrangementId?: StringFilter<"SetlistItem"> | string
    notes?: StringNullableFilter<"SetlistItem"> | string | null
    createdAt?: DateTimeFilter<"SetlistItem"> | Date | string
  }

  export type MinistryCreateWithoutSetlistsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutMinistriesInput
    members?: MinistryMemberCreateNestedManyWithoutMinistryInput
    events?: EventLogCreateNestedManyWithoutMinistryInput
  }

  export type MinistryUncheckedCreateWithoutSetlistsInput = {
    id?: string
    name: string
    ownerUserId: string
    createdAt?: Date | string
    members?: MinistryMemberUncheckedCreateNestedManyWithoutMinistryInput
    events?: EventLogUncheckedCreateNestedManyWithoutMinistryInput
  }

  export type MinistryCreateOrConnectWithoutSetlistsInput = {
    where: MinistryWhereUniqueInput
    create: XOR<MinistryCreateWithoutSetlistsInput, MinistryUncheckedCreateWithoutSetlistsInput>
  }

  export type UserCreateWithoutSetlistsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    createdAt?: Date | string
    ministries?: MinistryCreateNestedManyWithoutOwnerInput
    memberships?: MinistryMemberCreateNestedManyWithoutUserInput
    events?: EventLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSetlistsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    createdAt?: Date | string
    ministries?: MinistryUncheckedCreateNestedManyWithoutOwnerInput
    memberships?: MinistryMemberUncheckedCreateNestedManyWithoutUserInput
    events?: EventLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSetlistsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSetlistsInput, UserUncheckedCreateWithoutSetlistsInput>
  }

  export type SetlistItemCreateWithoutSetlistInput = {
    id?: string
    order: number
    part: string
    notes?: string | null
    createdAt?: Date | string
    arrangement: ArrangementCreateNestedOneWithoutItemsInput
  }

  export type SetlistItemUncheckedCreateWithoutSetlistInput = {
    id?: string
    order: number
    part: string
    arrangementId: string
    notes?: string | null
    createdAt?: Date | string
  }

  export type SetlistItemCreateOrConnectWithoutSetlistInput = {
    where: SetlistItemWhereUniqueInput
    create: XOR<SetlistItemCreateWithoutSetlistInput, SetlistItemUncheckedCreateWithoutSetlistInput>
  }

  export type SetlistItemCreateManySetlistInputEnvelope = {
    data: SetlistItemCreateManySetlistInput | SetlistItemCreateManySetlistInput[]
  }

  export type EventLogCreateWithoutSetlistInput = {
    id?: string
    type: string
    payloadJson?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutEventsInput
    ministry: MinistryCreateNestedOneWithoutEventsInput
  }

  export type EventLogUncheckedCreateWithoutSetlistInput = {
    id?: string
    userId: string
    ministryId: string
    type: string
    payloadJson?: string | null
    createdAt?: Date | string
  }

  export type EventLogCreateOrConnectWithoutSetlistInput = {
    where: EventLogWhereUniqueInput
    create: XOR<EventLogCreateWithoutSetlistInput, EventLogUncheckedCreateWithoutSetlistInput>
  }

  export type EventLogCreateManySetlistInputEnvelope = {
    data: EventLogCreateManySetlistInput | EventLogCreateManySetlistInput[]
  }

  export type MinistryUpsertWithoutSetlistsInput = {
    update: XOR<MinistryUpdateWithoutSetlistsInput, MinistryUncheckedUpdateWithoutSetlistsInput>
    create: XOR<MinistryCreateWithoutSetlistsInput, MinistryUncheckedCreateWithoutSetlistsInput>
    where?: MinistryWhereInput
  }

  export type MinistryUpdateToOneWithWhereWithoutSetlistsInput = {
    where?: MinistryWhereInput
    data: XOR<MinistryUpdateWithoutSetlistsInput, MinistryUncheckedUpdateWithoutSetlistsInput>
  }

  export type MinistryUpdateWithoutSetlistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutMinistriesNestedInput
    members?: MinistryMemberUpdateManyWithoutMinistryNestedInput
    events?: EventLogUpdateManyWithoutMinistryNestedInput
  }

  export type MinistryUncheckedUpdateWithoutSetlistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: MinistryMemberUncheckedUpdateManyWithoutMinistryNestedInput
    events?: EventLogUncheckedUpdateManyWithoutMinistryNestedInput
  }

  export type UserUpsertWithoutSetlistsInput = {
    update: XOR<UserUpdateWithoutSetlistsInput, UserUncheckedUpdateWithoutSetlistsInput>
    create: XOR<UserCreateWithoutSetlistsInput, UserUncheckedCreateWithoutSetlistsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSetlistsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSetlistsInput, UserUncheckedUpdateWithoutSetlistsInput>
  }

  export type UserUpdateWithoutSetlistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ministries?: MinistryUpdateManyWithoutOwnerNestedInput
    memberships?: MinistryMemberUpdateManyWithoutUserNestedInput
    events?: EventLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSetlistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ministries?: MinistryUncheckedUpdateManyWithoutOwnerNestedInput
    memberships?: MinistryMemberUncheckedUpdateManyWithoutUserNestedInput
    events?: EventLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SetlistItemUpsertWithWhereUniqueWithoutSetlistInput = {
    where: SetlistItemWhereUniqueInput
    update: XOR<SetlistItemUpdateWithoutSetlistInput, SetlistItemUncheckedUpdateWithoutSetlistInput>
    create: XOR<SetlistItemCreateWithoutSetlistInput, SetlistItemUncheckedCreateWithoutSetlistInput>
  }

  export type SetlistItemUpdateWithWhereUniqueWithoutSetlistInput = {
    where: SetlistItemWhereUniqueInput
    data: XOR<SetlistItemUpdateWithoutSetlistInput, SetlistItemUncheckedUpdateWithoutSetlistInput>
  }

  export type SetlistItemUpdateManyWithWhereWithoutSetlistInput = {
    where: SetlistItemScalarWhereInput
    data: XOR<SetlistItemUpdateManyMutationInput, SetlistItemUncheckedUpdateManyWithoutSetlistInput>
  }

  export type EventLogUpsertWithWhereUniqueWithoutSetlistInput = {
    where: EventLogWhereUniqueInput
    update: XOR<EventLogUpdateWithoutSetlistInput, EventLogUncheckedUpdateWithoutSetlistInput>
    create: XOR<EventLogCreateWithoutSetlistInput, EventLogUncheckedCreateWithoutSetlistInput>
  }

  export type EventLogUpdateWithWhereUniqueWithoutSetlistInput = {
    where: EventLogWhereUniqueInput
    data: XOR<EventLogUpdateWithoutSetlistInput, EventLogUncheckedUpdateWithoutSetlistInput>
  }

  export type EventLogUpdateManyWithWhereWithoutSetlistInput = {
    where: EventLogScalarWhereInput
    data: XOR<EventLogUpdateManyMutationInput, EventLogUncheckedUpdateManyWithoutSetlistInput>
  }

  export type SetlistCreateWithoutItemsInput = {
    id?: string
    name: string
    date?: Date | string | null
    liturgyType?: string | null
    season?: string | null
    createdAt?: Date | string
    ministry: MinistryCreateNestedOneWithoutSetlistsInput
    createdBy?: UserCreateNestedOneWithoutSetlistsInput
    events?: EventLogCreateNestedManyWithoutSetlistInput
  }

  export type SetlistUncheckedCreateWithoutItemsInput = {
    id?: string
    ministryId: string
    name: string
    date?: Date | string | null
    liturgyType?: string | null
    season?: string | null
    createdAt?: Date | string
    createdById?: string | null
    events?: EventLogUncheckedCreateNestedManyWithoutSetlistInput
  }

  export type SetlistCreateOrConnectWithoutItemsInput = {
    where: SetlistWhereUniqueInput
    create: XOR<SetlistCreateWithoutItemsInput, SetlistUncheckedCreateWithoutItemsInput>
  }

  export type ArrangementCreateWithoutItemsInput = {
    id?: string
    name: string
    defaultKey: string
    defaultBpm: number
    structureJson: string
    stemsJson: string
    audioDemoUrl: string
    createdAt?: Date | string
    song: SongCreateNestedOneWithoutArrangementsInput
  }

  export type ArrangementUncheckedCreateWithoutItemsInput = {
    id?: string
    songId: string
    name: string
    defaultKey: string
    defaultBpm: number
    structureJson: string
    stemsJson: string
    audioDemoUrl: string
    createdAt?: Date | string
  }

  export type ArrangementCreateOrConnectWithoutItemsInput = {
    where: ArrangementWhereUniqueInput
    create: XOR<ArrangementCreateWithoutItemsInput, ArrangementUncheckedCreateWithoutItemsInput>
  }

  export type SetlistUpsertWithoutItemsInput = {
    update: XOR<SetlistUpdateWithoutItemsInput, SetlistUncheckedUpdateWithoutItemsInput>
    create: XOR<SetlistCreateWithoutItemsInput, SetlistUncheckedCreateWithoutItemsInput>
    where?: SetlistWhereInput
  }

  export type SetlistUpdateToOneWithWhereWithoutItemsInput = {
    where?: SetlistWhereInput
    data: XOR<SetlistUpdateWithoutItemsInput, SetlistUncheckedUpdateWithoutItemsInput>
  }

  export type SetlistUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    liturgyType?: NullableStringFieldUpdateOperationsInput | string | null
    season?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ministry?: MinistryUpdateOneRequiredWithoutSetlistsNestedInput
    createdBy?: UserUpdateOneWithoutSetlistsNestedInput
    events?: EventLogUpdateManyWithoutSetlistNestedInput
  }

  export type SetlistUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ministryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    liturgyType?: NullableStringFieldUpdateOperationsInput | string | null
    season?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    events?: EventLogUncheckedUpdateManyWithoutSetlistNestedInput
  }

  export type ArrangementUpsertWithoutItemsInput = {
    update: XOR<ArrangementUpdateWithoutItemsInput, ArrangementUncheckedUpdateWithoutItemsInput>
    create: XOR<ArrangementCreateWithoutItemsInput, ArrangementUncheckedCreateWithoutItemsInput>
    where?: ArrangementWhereInput
  }

  export type ArrangementUpdateToOneWithWhereWithoutItemsInput = {
    where?: ArrangementWhereInput
    data: XOR<ArrangementUpdateWithoutItemsInput, ArrangementUncheckedUpdateWithoutItemsInput>
  }

  export type ArrangementUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    defaultKey?: StringFieldUpdateOperationsInput | string
    defaultBpm?: IntFieldUpdateOperationsInput | number
    structureJson?: StringFieldUpdateOperationsInput | string
    stemsJson?: StringFieldUpdateOperationsInput | string
    audioDemoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    song?: SongUpdateOneRequiredWithoutArrangementsNestedInput
  }

  export type ArrangementUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    songId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    defaultKey?: StringFieldUpdateOperationsInput | string
    defaultBpm?: IntFieldUpdateOperationsInput | number
    structureJson?: StringFieldUpdateOperationsInput | string
    stemsJson?: StringFieldUpdateOperationsInput | string
    audioDemoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutEventsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    createdAt?: Date | string
    ministries?: MinistryCreateNestedManyWithoutOwnerInput
    memberships?: MinistryMemberCreateNestedManyWithoutUserInput
    setlists?: SetlistCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutEventsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    createdAt?: Date | string
    ministries?: MinistryUncheckedCreateNestedManyWithoutOwnerInput
    memberships?: MinistryMemberUncheckedCreateNestedManyWithoutUserInput
    setlists?: SetlistUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
  }

  export type MinistryCreateWithoutEventsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutMinistriesInput
    members?: MinistryMemberCreateNestedManyWithoutMinistryInput
    setlists?: SetlistCreateNestedManyWithoutMinistryInput
  }

  export type MinistryUncheckedCreateWithoutEventsInput = {
    id?: string
    name: string
    ownerUserId: string
    createdAt?: Date | string
    members?: MinistryMemberUncheckedCreateNestedManyWithoutMinistryInput
    setlists?: SetlistUncheckedCreateNestedManyWithoutMinistryInput
  }

  export type MinistryCreateOrConnectWithoutEventsInput = {
    where: MinistryWhereUniqueInput
    create: XOR<MinistryCreateWithoutEventsInput, MinistryUncheckedCreateWithoutEventsInput>
  }

  export type SetlistCreateWithoutEventsInput = {
    id?: string
    name: string
    date?: Date | string | null
    liturgyType?: string | null
    season?: string | null
    createdAt?: Date | string
    ministry: MinistryCreateNestedOneWithoutSetlistsInput
    createdBy?: UserCreateNestedOneWithoutSetlistsInput
    items?: SetlistItemCreateNestedManyWithoutSetlistInput
  }

  export type SetlistUncheckedCreateWithoutEventsInput = {
    id?: string
    ministryId: string
    name: string
    date?: Date | string | null
    liturgyType?: string | null
    season?: string | null
    createdAt?: Date | string
    createdById?: string | null
    items?: SetlistItemUncheckedCreateNestedManyWithoutSetlistInput
  }

  export type SetlistCreateOrConnectWithoutEventsInput = {
    where: SetlistWhereUniqueInput
    create: XOR<SetlistCreateWithoutEventsInput, SetlistUncheckedCreateWithoutEventsInput>
  }

  export type UserUpsertWithoutEventsInput = {
    update: XOR<UserUpdateWithoutEventsInput, UserUncheckedUpdateWithoutEventsInput>
    create: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEventsInput, UserUncheckedUpdateWithoutEventsInput>
  }

  export type UserUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ministries?: MinistryUpdateManyWithoutOwnerNestedInput
    memberships?: MinistryMemberUpdateManyWithoutUserNestedInput
    setlists?: SetlistUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ministries?: MinistryUncheckedUpdateManyWithoutOwnerNestedInput
    memberships?: MinistryMemberUncheckedUpdateManyWithoutUserNestedInput
    setlists?: SetlistUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type MinistryUpsertWithoutEventsInput = {
    update: XOR<MinistryUpdateWithoutEventsInput, MinistryUncheckedUpdateWithoutEventsInput>
    create: XOR<MinistryCreateWithoutEventsInput, MinistryUncheckedCreateWithoutEventsInput>
    where?: MinistryWhereInput
  }

  export type MinistryUpdateToOneWithWhereWithoutEventsInput = {
    where?: MinistryWhereInput
    data: XOR<MinistryUpdateWithoutEventsInput, MinistryUncheckedUpdateWithoutEventsInput>
  }

  export type MinistryUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutMinistriesNestedInput
    members?: MinistryMemberUpdateManyWithoutMinistryNestedInput
    setlists?: SetlistUpdateManyWithoutMinistryNestedInput
  }

  export type MinistryUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: MinistryMemberUncheckedUpdateManyWithoutMinistryNestedInput
    setlists?: SetlistUncheckedUpdateManyWithoutMinistryNestedInput
  }

  export type SetlistUpsertWithoutEventsInput = {
    update: XOR<SetlistUpdateWithoutEventsInput, SetlistUncheckedUpdateWithoutEventsInput>
    create: XOR<SetlistCreateWithoutEventsInput, SetlistUncheckedCreateWithoutEventsInput>
    where?: SetlistWhereInput
  }

  export type SetlistUpdateToOneWithWhereWithoutEventsInput = {
    where?: SetlistWhereInput
    data: XOR<SetlistUpdateWithoutEventsInput, SetlistUncheckedUpdateWithoutEventsInput>
  }

  export type SetlistUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    liturgyType?: NullableStringFieldUpdateOperationsInput | string | null
    season?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ministry?: MinistryUpdateOneRequiredWithoutSetlistsNestedInput
    createdBy?: UserUpdateOneWithoutSetlistsNestedInput
    items?: SetlistItemUpdateManyWithoutSetlistNestedInput
  }

  export type SetlistUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ministryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    liturgyType?: NullableStringFieldUpdateOperationsInput | string | null
    season?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    items?: SetlistItemUncheckedUpdateManyWithoutSetlistNestedInput
  }

  export type MinistryCreateManyOwnerInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type MinistryMemberCreateManyUserInput = {
    id?: string
    ministryId: string
    role?: string
    createdAt?: Date | string
  }

  export type SetlistCreateManyCreatedByInput = {
    id?: string
    ministryId: string
    name: string
    date?: Date | string | null
    liturgyType?: string | null
    season?: string | null
    createdAt?: Date | string
  }

  export type EventLogCreateManyUserInput = {
    id?: string
    ministryId: string
    setlistId: string
    type: string
    payloadJson?: string | null
    createdAt?: Date | string
  }

  export type MinistryUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: MinistryMemberUpdateManyWithoutMinistryNestedInput
    setlists?: SetlistUpdateManyWithoutMinistryNestedInput
    events?: EventLogUpdateManyWithoutMinistryNestedInput
  }

  export type MinistryUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: MinistryMemberUncheckedUpdateManyWithoutMinistryNestedInput
    setlists?: SetlistUncheckedUpdateManyWithoutMinistryNestedInput
    events?: EventLogUncheckedUpdateManyWithoutMinistryNestedInput
  }

  export type MinistryUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MinistryMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ministry?: MinistryUpdateOneRequiredWithoutMembersNestedInput
  }

  export type MinistryMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ministryId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MinistryMemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ministryId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SetlistUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    liturgyType?: NullableStringFieldUpdateOperationsInput | string | null
    season?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ministry?: MinistryUpdateOneRequiredWithoutSetlistsNestedInput
    items?: SetlistItemUpdateManyWithoutSetlistNestedInput
    events?: EventLogUpdateManyWithoutSetlistNestedInput
  }

  export type SetlistUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    ministryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    liturgyType?: NullableStringFieldUpdateOperationsInput | string | null
    season?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: SetlistItemUncheckedUpdateManyWithoutSetlistNestedInput
    events?: EventLogUncheckedUpdateManyWithoutSetlistNestedInput
  }

  export type SetlistUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    ministryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    liturgyType?: NullableStringFieldUpdateOperationsInput | string | null
    season?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    payloadJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ministry?: MinistryUpdateOneRequiredWithoutEventsNestedInput
    setlist?: SetlistUpdateOneRequiredWithoutEventsNestedInput
  }

  export type EventLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ministryId?: StringFieldUpdateOperationsInput | string
    setlistId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    payloadJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ministryId?: StringFieldUpdateOperationsInput | string
    setlistId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    payloadJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MinistryMemberCreateManyMinistryInput = {
    id?: string
    userId: string
    role?: string
    createdAt?: Date | string
  }

  export type SetlistCreateManyMinistryInput = {
    id?: string
    name: string
    date?: Date | string | null
    liturgyType?: string | null
    season?: string | null
    createdAt?: Date | string
    createdById?: string | null
  }

  export type EventLogCreateManyMinistryInput = {
    id?: string
    userId: string
    setlistId: string
    type: string
    payloadJson?: string | null
    createdAt?: Date | string
  }

  export type MinistryMemberUpdateWithoutMinistryInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type MinistryMemberUncheckedUpdateWithoutMinistryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MinistryMemberUncheckedUpdateManyWithoutMinistryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SetlistUpdateWithoutMinistryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    liturgyType?: NullableStringFieldUpdateOperationsInput | string | null
    season?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneWithoutSetlistsNestedInput
    items?: SetlistItemUpdateManyWithoutSetlistNestedInput
    events?: EventLogUpdateManyWithoutSetlistNestedInput
  }

  export type SetlistUncheckedUpdateWithoutMinistryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    liturgyType?: NullableStringFieldUpdateOperationsInput | string | null
    season?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    items?: SetlistItemUncheckedUpdateManyWithoutSetlistNestedInput
    events?: EventLogUncheckedUpdateManyWithoutSetlistNestedInput
  }

  export type SetlistUncheckedUpdateManyWithoutMinistryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    liturgyType?: NullableStringFieldUpdateOperationsInput | string | null
    season?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventLogUpdateWithoutMinistryInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    payloadJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEventsNestedInput
    setlist?: SetlistUpdateOneRequiredWithoutEventsNestedInput
  }

  export type EventLogUncheckedUpdateWithoutMinistryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    setlistId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    payloadJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventLogUncheckedUpdateManyWithoutMinistryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    setlistId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    payloadJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArrangementCreateManySongInput = {
    id?: string
    name: string
    defaultKey: string
    defaultBpm: number
    structureJson: string
    stemsJson: string
    audioDemoUrl: string
    createdAt?: Date | string
  }

  export type ArrangementUpdateWithoutSongInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    defaultKey?: StringFieldUpdateOperationsInput | string
    defaultBpm?: IntFieldUpdateOperationsInput | number
    structureJson?: StringFieldUpdateOperationsInput | string
    stemsJson?: StringFieldUpdateOperationsInput | string
    audioDemoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: SetlistItemUpdateManyWithoutArrangementNestedInput
  }

  export type ArrangementUncheckedUpdateWithoutSongInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    defaultKey?: StringFieldUpdateOperationsInput | string
    defaultBpm?: IntFieldUpdateOperationsInput | number
    structureJson?: StringFieldUpdateOperationsInput | string
    stemsJson?: StringFieldUpdateOperationsInput | string
    audioDemoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: SetlistItemUncheckedUpdateManyWithoutArrangementNestedInput
  }

  export type ArrangementUncheckedUpdateManyWithoutSongInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    defaultKey?: StringFieldUpdateOperationsInput | string
    defaultBpm?: IntFieldUpdateOperationsInput | number
    structureJson?: StringFieldUpdateOperationsInput | string
    stemsJson?: StringFieldUpdateOperationsInput | string
    audioDemoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SetlistItemCreateManyArrangementInput = {
    id?: string
    setlistId: string
    order: number
    part: string
    notes?: string | null
    createdAt?: Date | string
  }

  export type SetlistItemUpdateWithoutArrangementInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    part?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    setlist?: SetlistUpdateOneRequiredWithoutItemsNestedInput
  }

  export type SetlistItemUncheckedUpdateWithoutArrangementInput = {
    id?: StringFieldUpdateOperationsInput | string
    setlistId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    part?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SetlistItemUncheckedUpdateManyWithoutArrangementInput = {
    id?: StringFieldUpdateOperationsInput | string
    setlistId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    part?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SetlistItemCreateManySetlistInput = {
    id?: string
    order: number
    part: string
    arrangementId: string
    notes?: string | null
    createdAt?: Date | string
  }

  export type EventLogCreateManySetlistInput = {
    id?: string
    userId: string
    ministryId: string
    type: string
    payloadJson?: string | null
    createdAt?: Date | string
  }

  export type SetlistItemUpdateWithoutSetlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    part?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    arrangement?: ArrangementUpdateOneRequiredWithoutItemsNestedInput
  }

  export type SetlistItemUncheckedUpdateWithoutSetlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    part?: StringFieldUpdateOperationsInput | string
    arrangementId?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SetlistItemUncheckedUpdateManyWithoutSetlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    part?: StringFieldUpdateOperationsInput | string
    arrangementId?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventLogUpdateWithoutSetlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    payloadJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEventsNestedInput
    ministry?: MinistryUpdateOneRequiredWithoutEventsNestedInput
  }

  export type EventLogUncheckedUpdateWithoutSetlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ministryId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    payloadJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventLogUncheckedUpdateManyWithoutSetlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ministryId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    payloadJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MinistryCountOutputTypeDefaultArgs instead
     */
    export type MinistryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MinistryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SongCountOutputTypeDefaultArgs instead
     */
    export type SongCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SongCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ArrangementCountOutputTypeDefaultArgs instead
     */
    export type ArrangementCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ArrangementCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SetlistCountOutputTypeDefaultArgs instead
     */
    export type SetlistCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SetlistCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MinistryDefaultArgs instead
     */
    export type MinistryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MinistryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MinistryMemberDefaultArgs instead
     */
    export type MinistryMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MinistryMemberDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SongDefaultArgs instead
     */
    export type SongArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SongDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ArrangementDefaultArgs instead
     */
    export type ArrangementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ArrangementDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SetlistDefaultArgs instead
     */
    export type SetlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SetlistDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SetlistItemDefaultArgs instead
     */
    export type SetlistItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SetlistItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EventLogDefaultArgs instead
     */
    export type EventLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EventLogDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}