
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
 * Model Section
 * 
 */
export type Section = $Result.DefaultSelection<Prisma.$SectionPayload>
/**
 * Model System
 * 
 */
export type System = $Result.DefaultSelection<Prisma.$SystemPayload>
/**
 * Model Interaction
 * 
 */
export type Interaction = $Result.DefaultSelection<Prisma.$InteractionPayload>
/**
 * Model EventTemplate
 * 
 */
export type EventTemplate = $Result.DefaultSelection<Prisma.$EventTemplatePayload>
/**
 * Model Malfunction
 * 
 */
export type Malfunction = $Result.DefaultSelection<Prisma.$MalfunctionPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const MalfunctionStatus: {
  NOT_STARTED: 'NOT_STARTED',
  FINISHED: 'FINISHED',
  IN_PROGRESS: 'IN_PROGRESS'
};

export type MalfunctionStatus = (typeof MalfunctionStatus)[keyof typeof MalfunctionStatus]


export const EventCause: {
  SABOTAGE: 'SABOTAGE',
  ACCIDENT: 'ACCIDENT'
};

export type EventCause = (typeof EventCause)[keyof typeof EventCause]


export const UserStatus: {
  ALIVE: 'ALIVE',
  GHOST: 'GHOST',
  INACTIVE: 'INACTIVE'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const Fraction: {
  ALLIANCE: 'ALLIANCE',
  REBELS: 'REBELS',
  CULT: 'CULT'
};

export type Fraction = (typeof Fraction)[keyof typeof Fraction]


export const Skills: {
  NAVIGATION: 'NAVIGATION',
  MILITARY: 'MILITARY',
  ENGINEERING: 'ENGINEERING',
  BUREAUCRACY: 'BUREAUCRACY',
  SERVICE: 'SERVICE'
};

export type Skills = (typeof Skills)[keyof typeof Skills]


export const InteractionType: {
  POSITIVE: 'POSITIVE',
  NEGATIVE: 'NEGATIVE',
  GHOST: 'GHOST',
  CULT: 'CULT',
  SUPPORT: 'SUPPORT'
};

export type InteractionType = (typeof InteractionType)[keyof typeof InteractionType]


export const SectionCode: {
  NAVIGATION: 'NAVIGATION',
  INGENEER: 'INGENEER',
  MILITARY: 'MILITARY',
  ARCHIVE: 'ARCHIVE',
  CULINAR: 'CULINAR'
};

export type SectionCode = (typeof SectionCode)[keyof typeof SectionCode]

}

export type MalfunctionStatus = $Enums.MalfunctionStatus

export const MalfunctionStatus: typeof $Enums.MalfunctionStatus

export type EventCause = $Enums.EventCause

export const EventCause: typeof $Enums.EventCause

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type Fraction = $Enums.Fraction

export const Fraction: typeof $Enums.Fraction

export type Skills = $Enums.Skills

export const Skills: typeof $Enums.Skills

export type InteractionType = $Enums.InteractionType

export const InteractionType: typeof $Enums.InteractionType

export type SectionCode = $Enums.SectionCode

export const SectionCode: typeof $Enums.SectionCode

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
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

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
   * `prisma.section`: Exposes CRUD operations for the **Section** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sections
    * const sections = await prisma.section.findMany()
    * ```
    */
  get section(): Prisma.SectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.system`: Exposes CRUD operations for the **System** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Systems
    * const systems = await prisma.system.findMany()
    * ```
    */
  get system(): Prisma.SystemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.interaction`: Exposes CRUD operations for the **Interaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Interactions
    * const interactions = await prisma.interaction.findMany()
    * ```
    */
  get interaction(): Prisma.InteractionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventTemplate`: Exposes CRUD operations for the **EventTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventTemplates
    * const eventTemplates = await prisma.eventTemplate.findMany()
    * ```
    */
  get eventTemplate(): Prisma.EventTemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.malfunction`: Exposes CRUD operations for the **Malfunction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Malfunctions
    * const malfunctions = await prisma.malfunction.findMany()
    * ```
    */
  get malfunction(): Prisma.MalfunctionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Section: 'Section',
    System: 'System',
    Interaction: 'Interaction',
    EventTemplate: 'EventTemplate',
    Malfunction: 'Malfunction',
    Event: 'Event'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "section" | "system" | "interaction" | "eventTemplate" | "malfunction" | "event"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Section: {
        payload: Prisma.$SectionPayload<ExtArgs>
        fields: Prisma.SectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          findFirst: {
            args: Prisma.SectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          findMany: {
            args: Prisma.SectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>[]
          }
          create: {
            args: Prisma.SectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          createMany: {
            args: Prisma.SectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>[]
          }
          delete: {
            args: Prisma.SectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          update: {
            args: Prisma.SectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          deleteMany: {
            args: Prisma.SectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>[]
          }
          upsert: {
            args: Prisma.SectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          aggregate: {
            args: Prisma.SectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSection>
          }
          groupBy: {
            args: Prisma.SectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SectionCountArgs<ExtArgs>
            result: $Utils.Optional<SectionCountAggregateOutputType> | number
          }
        }
      }
      System: {
        payload: Prisma.$SystemPayload<ExtArgs>
        fields: Prisma.SystemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemPayload>
          }
          findFirst: {
            args: Prisma.SystemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemPayload>
          }
          findMany: {
            args: Prisma.SystemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemPayload>[]
          }
          create: {
            args: Prisma.SystemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemPayload>
          }
          createMany: {
            args: Prisma.SystemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SystemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemPayload>[]
          }
          delete: {
            args: Prisma.SystemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemPayload>
          }
          update: {
            args: Prisma.SystemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemPayload>
          }
          deleteMany: {
            args: Prisma.SystemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SystemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SystemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemPayload>[]
          }
          upsert: {
            args: Prisma.SystemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemPayload>
          }
          aggregate: {
            args: Prisma.SystemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSystem>
          }
          groupBy: {
            args: Prisma.SystemGroupByArgs<ExtArgs>
            result: $Utils.Optional<SystemGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemCountArgs<ExtArgs>
            result: $Utils.Optional<SystemCountAggregateOutputType> | number
          }
        }
      }
      Interaction: {
        payload: Prisma.$InteractionPayload<ExtArgs>
        fields: Prisma.InteractionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InteractionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InteractionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>
          }
          findFirst: {
            args: Prisma.InteractionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InteractionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>
          }
          findMany: {
            args: Prisma.InteractionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>[]
          }
          create: {
            args: Prisma.InteractionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>
          }
          createMany: {
            args: Prisma.InteractionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InteractionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>[]
          }
          delete: {
            args: Prisma.InteractionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>
          }
          update: {
            args: Prisma.InteractionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>
          }
          deleteMany: {
            args: Prisma.InteractionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InteractionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InteractionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>[]
          }
          upsert: {
            args: Prisma.InteractionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InteractionPayload>
          }
          aggregate: {
            args: Prisma.InteractionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInteraction>
          }
          groupBy: {
            args: Prisma.InteractionGroupByArgs<ExtArgs>
            result: $Utils.Optional<InteractionGroupByOutputType>[]
          }
          count: {
            args: Prisma.InteractionCountArgs<ExtArgs>
            result: $Utils.Optional<InteractionCountAggregateOutputType> | number
          }
        }
      }
      EventTemplate: {
        payload: Prisma.$EventTemplatePayload<ExtArgs>
        fields: Prisma.EventTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTemplatePayload>
          }
          findFirst: {
            args: Prisma.EventTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTemplatePayload>
          }
          findMany: {
            args: Prisma.EventTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTemplatePayload>[]
          }
          create: {
            args: Prisma.EventTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTemplatePayload>
          }
          createMany: {
            args: Prisma.EventTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventTemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTemplatePayload>[]
          }
          delete: {
            args: Prisma.EventTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTemplatePayload>
          }
          update: {
            args: Prisma.EventTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTemplatePayload>
          }
          deleteMany: {
            args: Prisma.EventTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventTemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTemplatePayload>[]
          }
          upsert: {
            args: Prisma.EventTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTemplatePayload>
          }
          aggregate: {
            args: Prisma.EventTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventTemplate>
          }
          groupBy: {
            args: Prisma.EventTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<EventTemplateCountAggregateOutputType> | number
          }
        }
      }
      Malfunction: {
        payload: Prisma.$MalfunctionPayload<ExtArgs>
        fields: Prisma.MalfunctionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MalfunctionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MalfunctionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MalfunctionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MalfunctionPayload>
          }
          findFirst: {
            args: Prisma.MalfunctionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MalfunctionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MalfunctionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MalfunctionPayload>
          }
          findMany: {
            args: Prisma.MalfunctionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MalfunctionPayload>[]
          }
          create: {
            args: Prisma.MalfunctionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MalfunctionPayload>
          }
          createMany: {
            args: Prisma.MalfunctionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MalfunctionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MalfunctionPayload>[]
          }
          delete: {
            args: Prisma.MalfunctionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MalfunctionPayload>
          }
          update: {
            args: Prisma.MalfunctionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MalfunctionPayload>
          }
          deleteMany: {
            args: Prisma.MalfunctionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MalfunctionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MalfunctionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MalfunctionPayload>[]
          }
          upsert: {
            args: Prisma.MalfunctionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MalfunctionPayload>
          }
          aggregate: {
            args: Prisma.MalfunctionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMalfunction>
          }
          groupBy: {
            args: Prisma.MalfunctionGroupByArgs<ExtArgs>
            result: $Utils.Optional<MalfunctionGroupByOutputType>[]
          }
          count: {
            args: Prisma.MalfunctionCountArgs<ExtArgs>
            result: $Utils.Optional<MalfunctionCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    section?: SectionOmit
    system?: SystemOmit
    interaction?: InteractionOmit
    eventTemplate?: EventTemplateOmit
    malfunction?: MalfunctionOmit
    event?: EventOmit
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
    finished_interactions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    finished_interactions?: boolean | UserCountOutputTypeCountFinished_interactionsArgs
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
  export type UserCountOutputTypeCountFinished_interactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MalfunctionWhereInput
  }


  /**
   * Count Type SectionCountOutputType
   */

  export type SectionCountOutputType = {
    systems: number
  }

  export type SectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    systems?: boolean | SectionCountOutputTypeCountSystemsArgs
  }

  // Custom InputTypes
  /**
   * SectionCountOutputType without action
   */
  export type SectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionCountOutputType
     */
    select?: SectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SectionCountOutputType without action
   */
  export type SectionCountOutputTypeCountSystemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemWhereInput
  }


  /**
   * Count Type SystemCountOutputType
   */

  export type SystemCountOutputType = {
    interactions: number
    malfunctions: number
  }

  export type SystemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interactions?: boolean | SystemCountOutputTypeCountInteractionsArgs
    malfunctions?: boolean | SystemCountOutputTypeCountMalfunctionsArgs
  }

  // Custom InputTypes
  /**
   * SystemCountOutputType without action
   */
  export type SystemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemCountOutputType
     */
    select?: SystemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SystemCountOutputType without action
   */
  export type SystemCountOutputTypeCountInteractionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InteractionWhereInput
  }

  /**
   * SystemCountOutputType without action
   */
  export type SystemCountOutputTypeCountMalfunctionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MalfunctionWhereInput
  }


  /**
   * Count Type InteractionCountOutputType
   */

  export type InteractionCountOutputType = {
    possible_events: number
    required_interactions: number
  }

  export type InteractionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    possible_events?: boolean | InteractionCountOutputTypeCountPossible_eventsArgs
    required_interactions?: boolean | InteractionCountOutputTypeCountRequired_interactionsArgs
  }

  // Custom InputTypes
  /**
   * InteractionCountOutputType without action
   */
  export type InteractionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InteractionCountOutputType
     */
    select?: InteractionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InteractionCountOutputType without action
   */
  export type InteractionCountOutputTypeCountPossible_eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventTemplateWhereInput
  }

  /**
   * InteractionCountOutputType without action
   */
  export type InteractionCountOutputTypeCountRequired_interactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MalfunctionWhereInput
  }


  /**
   * Count Type EventTemplateCountOutputType
   */

  export type EventTemplateCountOutputType = {
    allowed_interactions: number
    event_template: number
  }

  export type EventTemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    allowed_interactions?: boolean | EventTemplateCountOutputTypeCountAllowed_interactionsArgs
    event_template?: boolean | EventTemplateCountOutputTypeCountEvent_templateArgs
  }

  // Custom InputTypes
  /**
   * EventTemplateCountOutputType without action
   */
  export type EventTemplateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTemplateCountOutputType
     */
    select?: EventTemplateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventTemplateCountOutputType without action
   */
  export type EventTemplateCountOutputTypeCountAllowed_interactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InteractionWhereInput
  }

  /**
   * EventTemplateCountOutputType without action
   */
  export type EventTemplateCountOutputTypeCountEvent_templateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    required_interactions: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    required_interactions?: boolean | EventCountOutputTypeCountRequired_interactionsArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountRequired_interactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MalfunctionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    navigation_skill: number | null
    military_skill: number | null
    engineering_skill: number | null
    bureaucracy_skill: number | null
    service_skill: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    navigation_skill: number | null
    military_skill: number | null
    engineering_skill: number | null
    bureaucracy_skill: number | null
    service_skill: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    profession: string | null
    fraction: $Enums.Fraction | null
    navigation_skill: number | null
    military_skill: number | null
    engineering_skill: number | null
    bureaucracy_skill: number | null
    service_skill: number | null
    status: $Enums.UserStatus | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    profession: string | null
    fraction: $Enums.Fraction | null
    navigation_skill: number | null
    military_skill: number | null
    engineering_skill: number | null
    bureaucracy_skill: number | null
    service_skill: number | null
    status: $Enums.UserStatus | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    profession: number
    fraction: number
    navigation_skill: number
    military_skill: number
    engineering_skill: number
    bureaucracy_skill: number
    service_skill: number
    status: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    navigation_skill?: true
    military_skill?: true
    engineering_skill?: true
    bureaucracy_skill?: true
    service_skill?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    navigation_skill?: true
    military_skill?: true
    engineering_skill?: true
    bureaucracy_skill?: true
    service_skill?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    profession?: true
    fraction?: true
    navigation_skill?: true
    military_skill?: true
    engineering_skill?: true
    bureaucracy_skill?: true
    service_skill?: true
    status?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    profession?: true
    fraction?: true
    navigation_skill?: true
    military_skill?: true
    engineering_skill?: true
    bureaucracy_skill?: true
    service_skill?: true
    status?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    profession?: true
    fraction?: true
    navigation_skill?: true
    military_skill?: true
    engineering_skill?: true
    bureaucracy_skill?: true
    service_skill?: true
    status?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    profession: string
    fraction: $Enums.Fraction
    navigation_skill: number
    military_skill: number
    engineering_skill: number
    bureaucracy_skill: number
    service_skill: number
    status: $Enums.UserStatus
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    name?: boolean
    profession?: boolean
    fraction?: boolean
    navigation_skill?: boolean
    military_skill?: boolean
    engineering_skill?: boolean
    bureaucracy_skill?: boolean
    service_skill?: boolean
    status?: boolean
    finished_interactions?: boolean | User$finished_interactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    profession?: boolean
    fraction?: boolean
    navigation_skill?: boolean
    military_skill?: boolean
    engineering_skill?: boolean
    bureaucracy_skill?: boolean
    service_skill?: boolean
    status?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    profession?: boolean
    fraction?: boolean
    navigation_skill?: boolean
    military_skill?: boolean
    engineering_skill?: boolean
    bureaucracy_skill?: boolean
    service_skill?: boolean
    status?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    profession?: boolean
    fraction?: boolean
    navigation_skill?: boolean
    military_skill?: boolean
    engineering_skill?: boolean
    bureaucracy_skill?: boolean
    service_skill?: boolean
    status?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "profession" | "fraction" | "navigation_skill" | "military_skill" | "engineering_skill" | "bureaucracy_skill" | "service_skill" | "status", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    finished_interactions?: boolean | User$finished_interactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      finished_interactions: Prisma.$MalfunctionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      profession: string
      fraction: $Enums.Fraction
      navigation_skill: number
      military_skill: number
      engineering_skill: number
      bureaucracy_skill: number
      service_skill: number
      status: $Enums.UserStatus
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    finished_interactions<T extends User$finished_interactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$finished_interactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MalfunctionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly profession: FieldRef<"User", 'String'>
    readonly fraction: FieldRef<"User", 'Fraction'>
    readonly navigation_skill: FieldRef<"User", 'Int'>
    readonly military_skill: FieldRef<"User", 'Int'>
    readonly engineering_skill: FieldRef<"User", 'Int'>
    readonly bureaucracy_skill: FieldRef<"User", 'Int'>
    readonly service_skill: FieldRef<"User", 'Int'>
    readonly status: FieldRef<"User", 'UserStatus'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.finished_interactions
   */
  export type User$finished_interactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Malfunction
     */
    select?: MalfunctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Malfunction
     */
    omit?: MalfunctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MalfunctionInclude<ExtArgs> | null
    where?: MalfunctionWhereInput
    orderBy?: MalfunctionOrderByWithRelationInput | MalfunctionOrderByWithRelationInput[]
    cursor?: MalfunctionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MalfunctionScalarFieldEnum | MalfunctionScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Section
   */

  export type AggregateSection = {
    _count: SectionCountAggregateOutputType | null
    _avg: SectionAvgAggregateOutputType | null
    _sum: SectionSumAggregateOutputType | null
    _min: SectionMinAggregateOutputType | null
    _max: SectionMaxAggregateOutputType | null
  }

  export type SectionAvgAggregateOutputType = {
    id: number | null
  }

  export type SectionSumAggregateOutputType = {
    id: number | null
  }

  export type SectionMinAggregateOutputType = {
    id: number | null
    code: $Enums.SectionCode | null
    name: string | null
    description: string | null
    skill: $Enums.Skills | null
  }

  export type SectionMaxAggregateOutputType = {
    id: number | null
    code: $Enums.SectionCode | null
    name: string | null
    description: string | null
    skill: $Enums.Skills | null
  }

  export type SectionCountAggregateOutputType = {
    id: number
    code: number
    name: number
    description: number
    skill: number
    _all: number
  }


  export type SectionAvgAggregateInputType = {
    id?: true
  }

  export type SectionSumAggregateInputType = {
    id?: true
  }

  export type SectionMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    description?: true
    skill?: true
  }

  export type SectionMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    description?: true
    skill?: true
  }

  export type SectionCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    description?: true
    skill?: true
    _all?: true
  }

  export type SectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Section to aggregate.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sections
    **/
    _count?: true | SectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SectionMaxAggregateInputType
  }

  export type GetSectionAggregateType<T extends SectionAggregateArgs> = {
        [P in keyof T & keyof AggregateSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSection[P]>
      : GetScalarType<T[P], AggregateSection[P]>
  }




  export type SectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionWhereInput
    orderBy?: SectionOrderByWithAggregationInput | SectionOrderByWithAggregationInput[]
    by: SectionScalarFieldEnum[] | SectionScalarFieldEnum
    having?: SectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SectionCountAggregateInputType | true
    _avg?: SectionAvgAggregateInputType
    _sum?: SectionSumAggregateInputType
    _min?: SectionMinAggregateInputType
    _max?: SectionMaxAggregateInputType
  }

  export type SectionGroupByOutputType = {
    id: number
    code: $Enums.SectionCode
    name: string
    description: string
    skill: $Enums.Skills
    _count: SectionCountAggregateOutputType | null
    _avg: SectionAvgAggregateOutputType | null
    _sum: SectionSumAggregateOutputType | null
    _min: SectionMinAggregateOutputType | null
    _max: SectionMaxAggregateOutputType | null
  }

  type GetSectionGroupByPayload<T extends SectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SectionGroupByOutputType[P]>
            : GetScalarType<T[P], SectionGroupByOutputType[P]>
        }
      >
    >


  export type SectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    skill?: boolean
    systems?: boolean | Section$systemsArgs<ExtArgs>
    _count?: boolean | SectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["section"]>

  export type SectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    skill?: boolean
  }, ExtArgs["result"]["section"]>

  export type SectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    skill?: boolean
  }, ExtArgs["result"]["section"]>

  export type SectionSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    skill?: boolean
  }

  export type SectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "description" | "skill", ExtArgs["result"]["section"]>
  export type SectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    systems?: boolean | Section$systemsArgs<ExtArgs>
    _count?: boolean | SectionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Section"
    objects: {
      systems: Prisma.$SystemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: $Enums.SectionCode
      name: string
      description: string
      skill: $Enums.Skills
    }, ExtArgs["result"]["section"]>
    composites: {}
  }

  type SectionGetPayload<S extends boolean | null | undefined | SectionDefaultArgs> = $Result.GetResult<Prisma.$SectionPayload, S>

  type SectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SectionCountAggregateInputType | true
    }

  export interface SectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Section'], meta: { name: 'Section' } }
    /**
     * Find zero or one Section that matches the filter.
     * @param {SectionFindUniqueArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SectionFindUniqueArgs>(args: SelectSubset<T, SectionFindUniqueArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Section that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SectionFindUniqueOrThrowArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SectionFindUniqueOrThrowArgs>(args: SelectSubset<T, SectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Section that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindFirstArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SectionFindFirstArgs>(args?: SelectSubset<T, SectionFindFirstArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Section that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindFirstOrThrowArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SectionFindFirstOrThrowArgs>(args?: SelectSubset<T, SectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sections
     * const sections = await prisma.section.findMany()
     * 
     * // Get first 10 Sections
     * const sections = await prisma.section.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sectionWithIdOnly = await prisma.section.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SectionFindManyArgs>(args?: SelectSubset<T, SectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Section.
     * @param {SectionCreateArgs} args - Arguments to create a Section.
     * @example
     * // Create one Section
     * const Section = await prisma.section.create({
     *   data: {
     *     // ... data to create a Section
     *   }
     * })
     * 
     */
    create<T extends SectionCreateArgs>(args: SelectSubset<T, SectionCreateArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sections.
     * @param {SectionCreateManyArgs} args - Arguments to create many Sections.
     * @example
     * // Create many Sections
     * const section = await prisma.section.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SectionCreateManyArgs>(args?: SelectSubset<T, SectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sections and returns the data saved in the database.
     * @param {SectionCreateManyAndReturnArgs} args - Arguments to create many Sections.
     * @example
     * // Create many Sections
     * const section = await prisma.section.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sections and only return the `id`
     * const sectionWithIdOnly = await prisma.section.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SectionCreateManyAndReturnArgs>(args?: SelectSubset<T, SectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Section.
     * @param {SectionDeleteArgs} args - Arguments to delete one Section.
     * @example
     * // Delete one Section
     * const Section = await prisma.section.delete({
     *   where: {
     *     // ... filter to delete one Section
     *   }
     * })
     * 
     */
    delete<T extends SectionDeleteArgs>(args: SelectSubset<T, SectionDeleteArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Section.
     * @param {SectionUpdateArgs} args - Arguments to update one Section.
     * @example
     * // Update one Section
     * const section = await prisma.section.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SectionUpdateArgs>(args: SelectSubset<T, SectionUpdateArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sections.
     * @param {SectionDeleteManyArgs} args - Arguments to filter Sections to delete.
     * @example
     * // Delete a few Sections
     * const { count } = await prisma.section.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SectionDeleteManyArgs>(args?: SelectSubset<T, SectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sections
     * const section = await prisma.section.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SectionUpdateManyArgs>(args: SelectSubset<T, SectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sections and returns the data updated in the database.
     * @param {SectionUpdateManyAndReturnArgs} args - Arguments to update many Sections.
     * @example
     * // Update many Sections
     * const section = await prisma.section.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sections and only return the `id`
     * const sectionWithIdOnly = await prisma.section.updateManyAndReturn({
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
    updateManyAndReturn<T extends SectionUpdateManyAndReturnArgs>(args: SelectSubset<T, SectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Section.
     * @param {SectionUpsertArgs} args - Arguments to update or create a Section.
     * @example
     * // Update or create a Section
     * const section = await prisma.section.upsert({
     *   create: {
     *     // ... data to create a Section
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Section we want to update
     *   }
     * })
     */
    upsert<T extends SectionUpsertArgs>(args: SelectSubset<T, SectionUpsertArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionCountArgs} args - Arguments to filter Sections to count.
     * @example
     * // Count the number of Sections
     * const count = await prisma.section.count({
     *   where: {
     *     // ... the filter for the Sections we want to count
     *   }
     * })
    **/
    count<T extends SectionCountArgs>(
      args?: Subset<T, SectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Section.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SectionAggregateArgs>(args: Subset<T, SectionAggregateArgs>): Prisma.PrismaPromise<GetSectionAggregateType<T>>

    /**
     * Group by Section.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionGroupByArgs} args - Group by arguments.
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
      T extends SectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SectionGroupByArgs['orderBy'] }
        : { orderBy?: SectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Section model
   */
  readonly fields: SectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Section.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    systems<T extends Section$systemsArgs<ExtArgs> = {}>(args?: Subset<T, Section$systemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Section model
   */
  interface SectionFieldRefs {
    readonly id: FieldRef<"Section", 'Int'>
    readonly code: FieldRef<"Section", 'SectionCode'>
    readonly name: FieldRef<"Section", 'String'>
    readonly description: FieldRef<"Section", 'String'>
    readonly skill: FieldRef<"Section", 'Skills'>
  }
    

  // Custom InputTypes
  /**
   * Section findUnique
   */
  export type SectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section findUniqueOrThrow
   */
  export type SectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section findFirst
   */
  export type SectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sections.
     */
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section findFirstOrThrow
   */
  export type SectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sections.
     */
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section findMany
   */
  export type SectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Sections to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section create
   */
  export type SectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Section.
     */
    data: XOR<SectionCreateInput, SectionUncheckedCreateInput>
  }

  /**
   * Section createMany
   */
  export type SectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sections.
     */
    data: SectionCreateManyInput | SectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Section createManyAndReturn
   */
  export type SectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * The data used to create many Sections.
     */
    data: SectionCreateManyInput | SectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Section update
   */
  export type SectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Section.
     */
    data: XOR<SectionUpdateInput, SectionUncheckedUpdateInput>
    /**
     * Choose, which Section to update.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section updateMany
   */
  export type SectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sections.
     */
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyInput>
    /**
     * Filter which Sections to update
     */
    where?: SectionWhereInput
    /**
     * Limit how many Sections to update.
     */
    limit?: number
  }

  /**
   * Section updateManyAndReturn
   */
  export type SectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * The data used to update Sections.
     */
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyInput>
    /**
     * Filter which Sections to update
     */
    where?: SectionWhereInput
    /**
     * Limit how many Sections to update.
     */
    limit?: number
  }

  /**
   * Section upsert
   */
  export type SectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Section to update in case it exists.
     */
    where: SectionWhereUniqueInput
    /**
     * In case the Section found by the `where` argument doesn't exist, create a new Section with this data.
     */
    create: XOR<SectionCreateInput, SectionUncheckedCreateInput>
    /**
     * In case the Section was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SectionUpdateInput, SectionUncheckedUpdateInput>
  }

  /**
   * Section delete
   */
  export type SectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter which Section to delete.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section deleteMany
   */
  export type SectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sections to delete
     */
    where?: SectionWhereInput
    /**
     * Limit how many Sections to delete.
     */
    limit?: number
  }

  /**
   * Section.systems
   */
  export type Section$systemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the System
     */
    select?: SystemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the System
     */
    omit?: SystemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemInclude<ExtArgs> | null
    where?: SystemWhereInput
    orderBy?: SystemOrderByWithRelationInput | SystemOrderByWithRelationInput[]
    cursor?: SystemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SystemScalarFieldEnum | SystemScalarFieldEnum[]
  }

  /**
   * Section without action
   */
  export type SectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
  }


  /**
   * Model System
   */

  export type AggregateSystem = {
    _count: SystemCountAggregateOutputType | null
    _avg: SystemAvgAggregateOutputType | null
    _sum: SystemSumAggregateOutputType | null
    _min: SystemMinAggregateOutputType | null
    _max: SystemMaxAggregateOutputType | null
  }

  export type SystemAvgAggregateOutputType = {
    id: number | null
    durability: number | null
  }

  export type SystemSumAggregateOutputType = {
    id: number | null
    durability: number | null
  }

  export type SystemMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    durability: number | null
    section_code: $Enums.SectionCode | null
  }

  export type SystemMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    durability: number | null
    section_code: $Enums.SectionCode | null
  }

  export type SystemCountAggregateOutputType = {
    id: number
    name: number
    description: number
    durability: number
    section_code: number
    _all: number
  }


  export type SystemAvgAggregateInputType = {
    id?: true
    durability?: true
  }

  export type SystemSumAggregateInputType = {
    id?: true
    durability?: true
  }

  export type SystemMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    durability?: true
    section_code?: true
  }

  export type SystemMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    durability?: true
    section_code?: true
  }

  export type SystemCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    durability?: true
    section_code?: true
    _all?: true
  }

  export type SystemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which System to aggregate.
     */
    where?: SystemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Systems to fetch.
     */
    orderBy?: SystemOrderByWithRelationInput | SystemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Systems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Systems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Systems
    **/
    _count?: true | SystemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SystemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SystemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemMaxAggregateInputType
  }

  export type GetSystemAggregateType<T extends SystemAggregateArgs> = {
        [P in keyof T & keyof AggregateSystem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystem[P]>
      : GetScalarType<T[P], AggregateSystem[P]>
  }




  export type SystemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemWhereInput
    orderBy?: SystemOrderByWithAggregationInput | SystemOrderByWithAggregationInput[]
    by: SystemScalarFieldEnum[] | SystemScalarFieldEnum
    having?: SystemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemCountAggregateInputType | true
    _avg?: SystemAvgAggregateInputType
    _sum?: SystemSumAggregateInputType
    _min?: SystemMinAggregateInputType
    _max?: SystemMaxAggregateInputType
  }

  export type SystemGroupByOutputType = {
    id: number
    name: string
    description: string
    durability: number
    section_code: $Enums.SectionCode
    _count: SystemCountAggregateOutputType | null
    _avg: SystemAvgAggregateOutputType | null
    _sum: SystemSumAggregateOutputType | null
    _min: SystemMinAggregateOutputType | null
    _max: SystemMaxAggregateOutputType | null
  }

  type GetSystemGroupByPayload<T extends SystemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemGroupByOutputType[P]>
            : GetScalarType<T[P], SystemGroupByOutputType[P]>
        }
      >
    >


  export type SystemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    durability?: boolean
    section_code?: boolean
    section?: boolean | SectionDefaultArgs<ExtArgs>
    interactions?: boolean | System$interactionsArgs<ExtArgs>
    malfunctions?: boolean | System$malfunctionsArgs<ExtArgs>
    _count?: boolean | SystemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["system"]>

  export type SystemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    durability?: boolean
    section_code?: boolean
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["system"]>

  export type SystemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    durability?: boolean
    section_code?: boolean
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["system"]>

  export type SystemSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    durability?: boolean
    section_code?: boolean
  }

  export type SystemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "durability" | "section_code", ExtArgs["result"]["system"]>
  export type SystemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | SectionDefaultArgs<ExtArgs>
    interactions?: boolean | System$interactionsArgs<ExtArgs>
    malfunctions?: boolean | System$malfunctionsArgs<ExtArgs>
    _count?: boolean | SystemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SystemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }
  export type SystemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }

  export type $SystemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "System"
    objects: {
      section: Prisma.$SectionPayload<ExtArgs>
      interactions: Prisma.$InteractionPayload<ExtArgs>[]
      malfunctions: Prisma.$MalfunctionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      durability: number
      section_code: $Enums.SectionCode
    }, ExtArgs["result"]["system"]>
    composites: {}
  }

  type SystemGetPayload<S extends boolean | null | undefined | SystemDefaultArgs> = $Result.GetResult<Prisma.$SystemPayload, S>

  type SystemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SystemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SystemCountAggregateInputType | true
    }

  export interface SystemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['System'], meta: { name: 'System' } }
    /**
     * Find zero or one System that matches the filter.
     * @param {SystemFindUniqueArgs} args - Arguments to find a System
     * @example
     * // Get one System
     * const system = await prisma.system.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SystemFindUniqueArgs>(args: SelectSubset<T, SystemFindUniqueArgs<ExtArgs>>): Prisma__SystemClient<$Result.GetResult<Prisma.$SystemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one System that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SystemFindUniqueOrThrowArgs} args - Arguments to find a System
     * @example
     * // Get one System
     * const system = await prisma.system.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SystemFindUniqueOrThrowArgs>(args: SelectSubset<T, SystemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SystemClient<$Result.GetResult<Prisma.$SystemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first System that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemFindFirstArgs} args - Arguments to find a System
     * @example
     * // Get one System
     * const system = await prisma.system.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SystemFindFirstArgs>(args?: SelectSubset<T, SystemFindFirstArgs<ExtArgs>>): Prisma__SystemClient<$Result.GetResult<Prisma.$SystemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first System that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemFindFirstOrThrowArgs} args - Arguments to find a System
     * @example
     * // Get one System
     * const system = await prisma.system.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SystemFindFirstOrThrowArgs>(args?: SelectSubset<T, SystemFindFirstOrThrowArgs<ExtArgs>>): Prisma__SystemClient<$Result.GetResult<Prisma.$SystemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Systems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Systems
     * const systems = await prisma.system.findMany()
     * 
     * // Get first 10 Systems
     * const systems = await prisma.system.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const systemWithIdOnly = await prisma.system.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SystemFindManyArgs>(args?: SelectSubset<T, SystemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a System.
     * @param {SystemCreateArgs} args - Arguments to create a System.
     * @example
     * // Create one System
     * const System = await prisma.system.create({
     *   data: {
     *     // ... data to create a System
     *   }
     * })
     * 
     */
    create<T extends SystemCreateArgs>(args: SelectSubset<T, SystemCreateArgs<ExtArgs>>): Prisma__SystemClient<$Result.GetResult<Prisma.$SystemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Systems.
     * @param {SystemCreateManyArgs} args - Arguments to create many Systems.
     * @example
     * // Create many Systems
     * const system = await prisma.system.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SystemCreateManyArgs>(args?: SelectSubset<T, SystemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Systems and returns the data saved in the database.
     * @param {SystemCreateManyAndReturnArgs} args - Arguments to create many Systems.
     * @example
     * // Create many Systems
     * const system = await prisma.system.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Systems and only return the `id`
     * const systemWithIdOnly = await prisma.system.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SystemCreateManyAndReturnArgs>(args?: SelectSubset<T, SystemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a System.
     * @param {SystemDeleteArgs} args - Arguments to delete one System.
     * @example
     * // Delete one System
     * const System = await prisma.system.delete({
     *   where: {
     *     // ... filter to delete one System
     *   }
     * })
     * 
     */
    delete<T extends SystemDeleteArgs>(args: SelectSubset<T, SystemDeleteArgs<ExtArgs>>): Prisma__SystemClient<$Result.GetResult<Prisma.$SystemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one System.
     * @param {SystemUpdateArgs} args - Arguments to update one System.
     * @example
     * // Update one System
     * const system = await prisma.system.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SystemUpdateArgs>(args: SelectSubset<T, SystemUpdateArgs<ExtArgs>>): Prisma__SystemClient<$Result.GetResult<Prisma.$SystemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Systems.
     * @param {SystemDeleteManyArgs} args - Arguments to filter Systems to delete.
     * @example
     * // Delete a few Systems
     * const { count } = await prisma.system.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SystemDeleteManyArgs>(args?: SelectSubset<T, SystemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Systems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Systems
     * const system = await prisma.system.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SystemUpdateManyArgs>(args: SelectSubset<T, SystemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Systems and returns the data updated in the database.
     * @param {SystemUpdateManyAndReturnArgs} args - Arguments to update many Systems.
     * @example
     * // Update many Systems
     * const system = await prisma.system.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Systems and only return the `id`
     * const systemWithIdOnly = await prisma.system.updateManyAndReturn({
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
    updateManyAndReturn<T extends SystemUpdateManyAndReturnArgs>(args: SelectSubset<T, SystemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one System.
     * @param {SystemUpsertArgs} args - Arguments to update or create a System.
     * @example
     * // Update or create a System
     * const system = await prisma.system.upsert({
     *   create: {
     *     // ... data to create a System
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the System we want to update
     *   }
     * })
     */
    upsert<T extends SystemUpsertArgs>(args: SelectSubset<T, SystemUpsertArgs<ExtArgs>>): Prisma__SystemClient<$Result.GetResult<Prisma.$SystemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Systems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemCountArgs} args - Arguments to filter Systems to count.
     * @example
     * // Count the number of Systems
     * const count = await prisma.system.count({
     *   where: {
     *     // ... the filter for the Systems we want to count
     *   }
     * })
    **/
    count<T extends SystemCountArgs>(
      args?: Subset<T, SystemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a System.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SystemAggregateArgs>(args: Subset<T, SystemAggregateArgs>): Prisma.PrismaPromise<GetSystemAggregateType<T>>

    /**
     * Group by System.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemGroupByArgs} args - Group by arguments.
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
      T extends SystemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemGroupByArgs['orderBy'] }
        : { orderBy?: SystemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SystemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the System model
   */
  readonly fields: SystemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for System.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    section<T extends SectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SectionDefaultArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    interactions<T extends System$interactionsArgs<ExtArgs> = {}>(args?: Subset<T, System$interactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    malfunctions<T extends System$malfunctionsArgs<ExtArgs> = {}>(args?: Subset<T, System$malfunctionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MalfunctionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the System model
   */
  interface SystemFieldRefs {
    readonly id: FieldRef<"System", 'Int'>
    readonly name: FieldRef<"System", 'String'>
    readonly description: FieldRef<"System", 'String'>
    readonly durability: FieldRef<"System", 'Int'>
    readonly section_code: FieldRef<"System", 'SectionCode'>
  }
    

  // Custom InputTypes
  /**
   * System findUnique
   */
  export type SystemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the System
     */
    select?: SystemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the System
     */
    omit?: SystemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemInclude<ExtArgs> | null
    /**
     * Filter, which System to fetch.
     */
    where: SystemWhereUniqueInput
  }

  /**
   * System findUniqueOrThrow
   */
  export type SystemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the System
     */
    select?: SystemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the System
     */
    omit?: SystemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemInclude<ExtArgs> | null
    /**
     * Filter, which System to fetch.
     */
    where: SystemWhereUniqueInput
  }

  /**
   * System findFirst
   */
  export type SystemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the System
     */
    select?: SystemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the System
     */
    omit?: SystemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemInclude<ExtArgs> | null
    /**
     * Filter, which System to fetch.
     */
    where?: SystemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Systems to fetch.
     */
    orderBy?: SystemOrderByWithRelationInput | SystemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Systems.
     */
    cursor?: SystemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Systems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Systems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Systems.
     */
    distinct?: SystemScalarFieldEnum | SystemScalarFieldEnum[]
  }

  /**
   * System findFirstOrThrow
   */
  export type SystemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the System
     */
    select?: SystemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the System
     */
    omit?: SystemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemInclude<ExtArgs> | null
    /**
     * Filter, which System to fetch.
     */
    where?: SystemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Systems to fetch.
     */
    orderBy?: SystemOrderByWithRelationInput | SystemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Systems.
     */
    cursor?: SystemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Systems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Systems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Systems.
     */
    distinct?: SystemScalarFieldEnum | SystemScalarFieldEnum[]
  }

  /**
   * System findMany
   */
  export type SystemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the System
     */
    select?: SystemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the System
     */
    omit?: SystemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemInclude<ExtArgs> | null
    /**
     * Filter, which Systems to fetch.
     */
    where?: SystemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Systems to fetch.
     */
    orderBy?: SystemOrderByWithRelationInput | SystemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Systems.
     */
    cursor?: SystemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Systems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Systems.
     */
    skip?: number
    distinct?: SystemScalarFieldEnum | SystemScalarFieldEnum[]
  }

  /**
   * System create
   */
  export type SystemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the System
     */
    select?: SystemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the System
     */
    omit?: SystemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemInclude<ExtArgs> | null
    /**
     * The data needed to create a System.
     */
    data: XOR<SystemCreateInput, SystemUncheckedCreateInput>
  }

  /**
   * System createMany
   */
  export type SystemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Systems.
     */
    data: SystemCreateManyInput | SystemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * System createManyAndReturn
   */
  export type SystemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the System
     */
    select?: SystemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the System
     */
    omit?: SystemOmit<ExtArgs> | null
    /**
     * The data used to create many Systems.
     */
    data: SystemCreateManyInput | SystemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * System update
   */
  export type SystemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the System
     */
    select?: SystemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the System
     */
    omit?: SystemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemInclude<ExtArgs> | null
    /**
     * The data needed to update a System.
     */
    data: XOR<SystemUpdateInput, SystemUncheckedUpdateInput>
    /**
     * Choose, which System to update.
     */
    where: SystemWhereUniqueInput
  }

  /**
   * System updateMany
   */
  export type SystemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Systems.
     */
    data: XOR<SystemUpdateManyMutationInput, SystemUncheckedUpdateManyInput>
    /**
     * Filter which Systems to update
     */
    where?: SystemWhereInput
    /**
     * Limit how many Systems to update.
     */
    limit?: number
  }

  /**
   * System updateManyAndReturn
   */
  export type SystemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the System
     */
    select?: SystemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the System
     */
    omit?: SystemOmit<ExtArgs> | null
    /**
     * The data used to update Systems.
     */
    data: XOR<SystemUpdateManyMutationInput, SystemUncheckedUpdateManyInput>
    /**
     * Filter which Systems to update
     */
    where?: SystemWhereInput
    /**
     * Limit how many Systems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * System upsert
   */
  export type SystemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the System
     */
    select?: SystemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the System
     */
    omit?: SystemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemInclude<ExtArgs> | null
    /**
     * The filter to search for the System to update in case it exists.
     */
    where: SystemWhereUniqueInput
    /**
     * In case the System found by the `where` argument doesn't exist, create a new System with this data.
     */
    create: XOR<SystemCreateInput, SystemUncheckedCreateInput>
    /**
     * In case the System was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemUpdateInput, SystemUncheckedUpdateInput>
  }

  /**
   * System delete
   */
  export type SystemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the System
     */
    select?: SystemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the System
     */
    omit?: SystemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemInclude<ExtArgs> | null
    /**
     * Filter which System to delete.
     */
    where: SystemWhereUniqueInput
  }

  /**
   * System deleteMany
   */
  export type SystemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Systems to delete
     */
    where?: SystemWhereInput
    /**
     * Limit how many Systems to delete.
     */
    limit?: number
  }

  /**
   * System.interactions
   */
  export type System$interactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    where?: InteractionWhereInput
    orderBy?: InteractionOrderByWithRelationInput | InteractionOrderByWithRelationInput[]
    cursor?: InteractionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InteractionScalarFieldEnum | InteractionScalarFieldEnum[]
  }

  /**
   * System.malfunctions
   */
  export type System$malfunctionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Malfunction
     */
    select?: MalfunctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Malfunction
     */
    omit?: MalfunctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MalfunctionInclude<ExtArgs> | null
    where?: MalfunctionWhereInput
    orderBy?: MalfunctionOrderByWithRelationInput | MalfunctionOrderByWithRelationInput[]
    cursor?: MalfunctionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MalfunctionScalarFieldEnum | MalfunctionScalarFieldEnum[]
  }

  /**
   * System without action
   */
  export type SystemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the System
     */
    select?: SystemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the System
     */
    omit?: SystemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemInclude<ExtArgs> | null
  }


  /**
   * Model Interaction
   */

  export type AggregateInteraction = {
    _count: InteractionCountAggregateOutputType | null
    _avg: InteractionAvgAggregateOutputType | null
    _sum: InteractionSumAggregateOutputType | null
    _min: InteractionMinAggregateOutputType | null
    _max: InteractionMaxAggregateOutputType | null
  }

  export type InteractionAvgAggregateOutputType = {
    id: number | null
    system_id: number | null
  }

  export type InteractionSumAggregateOutputType = {
    id: number | null
    system_id: number | null
  }

  export type InteractionMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    skill: $Enums.Skills | null
    type: $Enums.InteractionType | null
    malfunction: string | null
    system_id: number | null
  }

  export type InteractionMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    skill: $Enums.Skills | null
    type: $Enums.InteractionType | null
    malfunction: string | null
    system_id: number | null
  }

  export type InteractionCountAggregateOutputType = {
    id: number
    name: number
    description: number
    skill: number
    type: number
    malfunction: number
    system_id: number
    _all: number
  }


  export type InteractionAvgAggregateInputType = {
    id?: true
    system_id?: true
  }

  export type InteractionSumAggregateInputType = {
    id?: true
    system_id?: true
  }

  export type InteractionMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    skill?: true
    type?: true
    malfunction?: true
    system_id?: true
  }

  export type InteractionMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    skill?: true
    type?: true
    malfunction?: true
    system_id?: true
  }

  export type InteractionCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    skill?: true
    type?: true
    malfunction?: true
    system_id?: true
    _all?: true
  }

  export type InteractionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Interaction to aggregate.
     */
    where?: InteractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interactions to fetch.
     */
    orderBy?: InteractionOrderByWithRelationInput | InteractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InteractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Interactions
    **/
    _count?: true | InteractionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InteractionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InteractionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InteractionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InteractionMaxAggregateInputType
  }

  export type GetInteractionAggregateType<T extends InteractionAggregateArgs> = {
        [P in keyof T & keyof AggregateInteraction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInteraction[P]>
      : GetScalarType<T[P], AggregateInteraction[P]>
  }




  export type InteractionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InteractionWhereInput
    orderBy?: InteractionOrderByWithAggregationInput | InteractionOrderByWithAggregationInput[]
    by: InteractionScalarFieldEnum[] | InteractionScalarFieldEnum
    having?: InteractionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InteractionCountAggregateInputType | true
    _avg?: InteractionAvgAggregateInputType
    _sum?: InteractionSumAggregateInputType
    _min?: InteractionMinAggregateInputType
    _max?: InteractionMaxAggregateInputType
  }

  export type InteractionGroupByOutputType = {
    id: number
    name: string
    description: string
    skill: $Enums.Skills | null
    type: $Enums.InteractionType
    malfunction: string
    system_id: number
    _count: InteractionCountAggregateOutputType | null
    _avg: InteractionAvgAggregateOutputType | null
    _sum: InteractionSumAggregateOutputType | null
    _min: InteractionMinAggregateOutputType | null
    _max: InteractionMaxAggregateOutputType | null
  }

  type GetInteractionGroupByPayload<T extends InteractionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InteractionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InteractionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InteractionGroupByOutputType[P]>
            : GetScalarType<T[P], InteractionGroupByOutputType[P]>
        }
      >
    >


  export type InteractionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    skill?: boolean
    type?: boolean
    malfunction?: boolean
    system_id?: boolean
    system?: boolean | SystemDefaultArgs<ExtArgs>
    possible_events?: boolean | Interaction$possible_eventsArgs<ExtArgs>
    required_interactions?: boolean | Interaction$required_interactionsArgs<ExtArgs>
    _count?: boolean | InteractionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interaction"]>

  export type InteractionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    skill?: boolean
    type?: boolean
    malfunction?: boolean
    system_id?: boolean
    system?: boolean | SystemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interaction"]>

  export type InteractionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    skill?: boolean
    type?: boolean
    malfunction?: boolean
    system_id?: boolean
    system?: boolean | SystemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interaction"]>

  export type InteractionSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    skill?: boolean
    type?: boolean
    malfunction?: boolean
    system_id?: boolean
  }

  export type InteractionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "skill" | "type" | "malfunction" | "system_id", ExtArgs["result"]["interaction"]>
  export type InteractionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    system?: boolean | SystemDefaultArgs<ExtArgs>
    possible_events?: boolean | Interaction$possible_eventsArgs<ExtArgs>
    required_interactions?: boolean | Interaction$required_interactionsArgs<ExtArgs>
    _count?: boolean | InteractionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InteractionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    system?: boolean | SystemDefaultArgs<ExtArgs>
  }
  export type InteractionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    system?: boolean | SystemDefaultArgs<ExtArgs>
  }

  export type $InteractionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Interaction"
    objects: {
      system: Prisma.$SystemPayload<ExtArgs>
      possible_events: Prisma.$EventTemplatePayload<ExtArgs>[]
      required_interactions: Prisma.$MalfunctionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      skill: $Enums.Skills | null
      type: $Enums.InteractionType
      malfunction: string
      system_id: number
    }, ExtArgs["result"]["interaction"]>
    composites: {}
  }

  type InteractionGetPayload<S extends boolean | null | undefined | InteractionDefaultArgs> = $Result.GetResult<Prisma.$InteractionPayload, S>

  type InteractionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InteractionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InteractionCountAggregateInputType | true
    }

  export interface InteractionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Interaction'], meta: { name: 'Interaction' } }
    /**
     * Find zero or one Interaction that matches the filter.
     * @param {InteractionFindUniqueArgs} args - Arguments to find a Interaction
     * @example
     * // Get one Interaction
     * const interaction = await prisma.interaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InteractionFindUniqueArgs>(args: SelectSubset<T, InteractionFindUniqueArgs<ExtArgs>>): Prisma__InteractionClient<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Interaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InteractionFindUniqueOrThrowArgs} args - Arguments to find a Interaction
     * @example
     * // Get one Interaction
     * const interaction = await prisma.interaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InteractionFindUniqueOrThrowArgs>(args: SelectSubset<T, InteractionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InteractionClient<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Interaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractionFindFirstArgs} args - Arguments to find a Interaction
     * @example
     * // Get one Interaction
     * const interaction = await prisma.interaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InteractionFindFirstArgs>(args?: SelectSubset<T, InteractionFindFirstArgs<ExtArgs>>): Prisma__InteractionClient<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Interaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractionFindFirstOrThrowArgs} args - Arguments to find a Interaction
     * @example
     * // Get one Interaction
     * const interaction = await prisma.interaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InteractionFindFirstOrThrowArgs>(args?: SelectSubset<T, InteractionFindFirstOrThrowArgs<ExtArgs>>): Prisma__InteractionClient<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Interactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Interactions
     * const interactions = await prisma.interaction.findMany()
     * 
     * // Get first 10 Interactions
     * const interactions = await prisma.interaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const interactionWithIdOnly = await prisma.interaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InteractionFindManyArgs>(args?: SelectSubset<T, InteractionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Interaction.
     * @param {InteractionCreateArgs} args - Arguments to create a Interaction.
     * @example
     * // Create one Interaction
     * const Interaction = await prisma.interaction.create({
     *   data: {
     *     // ... data to create a Interaction
     *   }
     * })
     * 
     */
    create<T extends InteractionCreateArgs>(args: SelectSubset<T, InteractionCreateArgs<ExtArgs>>): Prisma__InteractionClient<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Interactions.
     * @param {InteractionCreateManyArgs} args - Arguments to create many Interactions.
     * @example
     * // Create many Interactions
     * const interaction = await prisma.interaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InteractionCreateManyArgs>(args?: SelectSubset<T, InteractionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Interactions and returns the data saved in the database.
     * @param {InteractionCreateManyAndReturnArgs} args - Arguments to create many Interactions.
     * @example
     * // Create many Interactions
     * const interaction = await prisma.interaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Interactions and only return the `id`
     * const interactionWithIdOnly = await prisma.interaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InteractionCreateManyAndReturnArgs>(args?: SelectSubset<T, InteractionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Interaction.
     * @param {InteractionDeleteArgs} args - Arguments to delete one Interaction.
     * @example
     * // Delete one Interaction
     * const Interaction = await prisma.interaction.delete({
     *   where: {
     *     // ... filter to delete one Interaction
     *   }
     * })
     * 
     */
    delete<T extends InteractionDeleteArgs>(args: SelectSubset<T, InteractionDeleteArgs<ExtArgs>>): Prisma__InteractionClient<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Interaction.
     * @param {InteractionUpdateArgs} args - Arguments to update one Interaction.
     * @example
     * // Update one Interaction
     * const interaction = await prisma.interaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InteractionUpdateArgs>(args: SelectSubset<T, InteractionUpdateArgs<ExtArgs>>): Prisma__InteractionClient<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Interactions.
     * @param {InteractionDeleteManyArgs} args - Arguments to filter Interactions to delete.
     * @example
     * // Delete a few Interactions
     * const { count } = await prisma.interaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InteractionDeleteManyArgs>(args?: SelectSubset<T, InteractionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Interactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Interactions
     * const interaction = await prisma.interaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InteractionUpdateManyArgs>(args: SelectSubset<T, InteractionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Interactions and returns the data updated in the database.
     * @param {InteractionUpdateManyAndReturnArgs} args - Arguments to update many Interactions.
     * @example
     * // Update many Interactions
     * const interaction = await prisma.interaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Interactions and only return the `id`
     * const interactionWithIdOnly = await prisma.interaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends InteractionUpdateManyAndReturnArgs>(args: SelectSubset<T, InteractionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Interaction.
     * @param {InteractionUpsertArgs} args - Arguments to update or create a Interaction.
     * @example
     * // Update or create a Interaction
     * const interaction = await prisma.interaction.upsert({
     *   create: {
     *     // ... data to create a Interaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Interaction we want to update
     *   }
     * })
     */
    upsert<T extends InteractionUpsertArgs>(args: SelectSubset<T, InteractionUpsertArgs<ExtArgs>>): Prisma__InteractionClient<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Interactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractionCountArgs} args - Arguments to filter Interactions to count.
     * @example
     * // Count the number of Interactions
     * const count = await prisma.interaction.count({
     *   where: {
     *     // ... the filter for the Interactions we want to count
     *   }
     * })
    **/
    count<T extends InteractionCountArgs>(
      args?: Subset<T, InteractionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InteractionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Interaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InteractionAggregateArgs>(args: Subset<T, InteractionAggregateArgs>): Prisma.PrismaPromise<GetInteractionAggregateType<T>>

    /**
     * Group by Interaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractionGroupByArgs} args - Group by arguments.
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
      T extends InteractionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InteractionGroupByArgs['orderBy'] }
        : { orderBy?: InteractionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InteractionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInteractionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Interaction model
   */
  readonly fields: InteractionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Interaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InteractionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    system<T extends SystemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SystemDefaultArgs<ExtArgs>>): Prisma__SystemClient<$Result.GetResult<Prisma.$SystemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    possible_events<T extends Interaction$possible_eventsArgs<ExtArgs> = {}>(args?: Subset<T, Interaction$possible_eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    required_interactions<T extends Interaction$required_interactionsArgs<ExtArgs> = {}>(args?: Subset<T, Interaction$required_interactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MalfunctionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Interaction model
   */
  interface InteractionFieldRefs {
    readonly id: FieldRef<"Interaction", 'Int'>
    readonly name: FieldRef<"Interaction", 'String'>
    readonly description: FieldRef<"Interaction", 'String'>
    readonly skill: FieldRef<"Interaction", 'Skills'>
    readonly type: FieldRef<"Interaction", 'InteractionType'>
    readonly malfunction: FieldRef<"Interaction", 'String'>
    readonly system_id: FieldRef<"Interaction", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Interaction findUnique
   */
  export type InteractionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    /**
     * Filter, which Interaction to fetch.
     */
    where: InteractionWhereUniqueInput
  }

  /**
   * Interaction findUniqueOrThrow
   */
  export type InteractionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    /**
     * Filter, which Interaction to fetch.
     */
    where: InteractionWhereUniqueInput
  }

  /**
   * Interaction findFirst
   */
  export type InteractionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    /**
     * Filter, which Interaction to fetch.
     */
    where?: InteractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interactions to fetch.
     */
    orderBy?: InteractionOrderByWithRelationInput | InteractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Interactions.
     */
    cursor?: InteractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Interactions.
     */
    distinct?: InteractionScalarFieldEnum | InteractionScalarFieldEnum[]
  }

  /**
   * Interaction findFirstOrThrow
   */
  export type InteractionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    /**
     * Filter, which Interaction to fetch.
     */
    where?: InteractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interactions to fetch.
     */
    orderBy?: InteractionOrderByWithRelationInput | InteractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Interactions.
     */
    cursor?: InteractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Interactions.
     */
    distinct?: InteractionScalarFieldEnum | InteractionScalarFieldEnum[]
  }

  /**
   * Interaction findMany
   */
  export type InteractionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    /**
     * Filter, which Interactions to fetch.
     */
    where?: InteractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interactions to fetch.
     */
    orderBy?: InteractionOrderByWithRelationInput | InteractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Interactions.
     */
    cursor?: InteractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interactions.
     */
    skip?: number
    distinct?: InteractionScalarFieldEnum | InteractionScalarFieldEnum[]
  }

  /**
   * Interaction create
   */
  export type InteractionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    /**
     * The data needed to create a Interaction.
     */
    data: XOR<InteractionCreateInput, InteractionUncheckedCreateInput>
  }

  /**
   * Interaction createMany
   */
  export type InteractionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Interactions.
     */
    data: InteractionCreateManyInput | InteractionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Interaction createManyAndReturn
   */
  export type InteractionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * The data used to create many Interactions.
     */
    data: InteractionCreateManyInput | InteractionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Interaction update
   */
  export type InteractionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    /**
     * The data needed to update a Interaction.
     */
    data: XOR<InteractionUpdateInput, InteractionUncheckedUpdateInput>
    /**
     * Choose, which Interaction to update.
     */
    where: InteractionWhereUniqueInput
  }

  /**
   * Interaction updateMany
   */
  export type InteractionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Interactions.
     */
    data: XOR<InteractionUpdateManyMutationInput, InteractionUncheckedUpdateManyInput>
    /**
     * Filter which Interactions to update
     */
    where?: InteractionWhereInput
    /**
     * Limit how many Interactions to update.
     */
    limit?: number
  }

  /**
   * Interaction updateManyAndReturn
   */
  export type InteractionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * The data used to update Interactions.
     */
    data: XOR<InteractionUpdateManyMutationInput, InteractionUncheckedUpdateManyInput>
    /**
     * Filter which Interactions to update
     */
    where?: InteractionWhereInput
    /**
     * Limit how many Interactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Interaction upsert
   */
  export type InteractionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    /**
     * The filter to search for the Interaction to update in case it exists.
     */
    where: InteractionWhereUniqueInput
    /**
     * In case the Interaction found by the `where` argument doesn't exist, create a new Interaction with this data.
     */
    create: XOR<InteractionCreateInput, InteractionUncheckedCreateInput>
    /**
     * In case the Interaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InteractionUpdateInput, InteractionUncheckedUpdateInput>
  }

  /**
   * Interaction delete
   */
  export type InteractionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    /**
     * Filter which Interaction to delete.
     */
    where: InteractionWhereUniqueInput
  }

  /**
   * Interaction deleteMany
   */
  export type InteractionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Interactions to delete
     */
    where?: InteractionWhereInput
    /**
     * Limit how many Interactions to delete.
     */
    limit?: number
  }

  /**
   * Interaction.possible_events
   */
  export type Interaction$possible_eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTemplate
     */
    select?: EventTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTemplate
     */
    omit?: EventTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTemplateInclude<ExtArgs> | null
    where?: EventTemplateWhereInput
    orderBy?: EventTemplateOrderByWithRelationInput | EventTemplateOrderByWithRelationInput[]
    cursor?: EventTemplateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventTemplateScalarFieldEnum | EventTemplateScalarFieldEnum[]
  }

  /**
   * Interaction.required_interactions
   */
  export type Interaction$required_interactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Malfunction
     */
    select?: MalfunctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Malfunction
     */
    omit?: MalfunctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MalfunctionInclude<ExtArgs> | null
    where?: MalfunctionWhereInput
    orderBy?: MalfunctionOrderByWithRelationInput | MalfunctionOrderByWithRelationInput[]
    cursor?: MalfunctionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MalfunctionScalarFieldEnum | MalfunctionScalarFieldEnum[]
  }

  /**
   * Interaction without action
   */
  export type InteractionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
  }


  /**
   * Model EventTemplate
   */

  export type AggregateEventTemplate = {
    _count: EventTemplateCountAggregateOutputType | null
    _avg: EventTemplateAvgAggregateOutputType | null
    _sum: EventTemplateSumAggregateOutputType | null
    _min: EventTemplateMinAggregateOutputType | null
    _max: EventTemplateMaxAggregateOutputType | null
  }

  export type EventTemplateAvgAggregateOutputType = {
    id: number | null
  }

  export type EventTemplateSumAggregateOutputType = {
    id: number | null
  }

  export type EventTemplateMinAggregateOutputType = {
    id: number | null
    name: string | null
    cause: $Enums.EventCause | null
  }

  export type EventTemplateMaxAggregateOutputType = {
    id: number | null
    name: string | null
    cause: $Enums.EventCause | null
  }

  export type EventTemplateCountAggregateOutputType = {
    id: number
    name: number
    cause: number
    _all: number
  }


  export type EventTemplateAvgAggregateInputType = {
    id?: true
  }

  export type EventTemplateSumAggregateInputType = {
    id?: true
  }

  export type EventTemplateMinAggregateInputType = {
    id?: true
    name?: true
    cause?: true
  }

  export type EventTemplateMaxAggregateInputType = {
    id?: true
    name?: true
    cause?: true
  }

  export type EventTemplateCountAggregateInputType = {
    id?: true
    name?: true
    cause?: true
    _all?: true
  }

  export type EventTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventTemplate to aggregate.
     */
    where?: EventTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTemplates to fetch.
     */
    orderBy?: EventTemplateOrderByWithRelationInput | EventTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventTemplates
    **/
    _count?: true | EventTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventTemplateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventTemplateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventTemplateMaxAggregateInputType
  }

  export type GetEventTemplateAggregateType<T extends EventTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateEventTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventTemplate[P]>
      : GetScalarType<T[P], AggregateEventTemplate[P]>
  }




  export type EventTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventTemplateWhereInput
    orderBy?: EventTemplateOrderByWithAggregationInput | EventTemplateOrderByWithAggregationInput[]
    by: EventTemplateScalarFieldEnum[] | EventTemplateScalarFieldEnum
    having?: EventTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventTemplateCountAggregateInputType | true
    _avg?: EventTemplateAvgAggregateInputType
    _sum?: EventTemplateSumAggregateInputType
    _min?: EventTemplateMinAggregateInputType
    _max?: EventTemplateMaxAggregateInputType
  }

  export type EventTemplateGroupByOutputType = {
    id: number
    name: string
    cause: $Enums.EventCause
    _count: EventTemplateCountAggregateOutputType | null
    _avg: EventTemplateAvgAggregateOutputType | null
    _sum: EventTemplateSumAggregateOutputType | null
    _min: EventTemplateMinAggregateOutputType | null
    _max: EventTemplateMaxAggregateOutputType | null
  }

  type GetEventTemplateGroupByPayload<T extends EventTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], EventTemplateGroupByOutputType[P]>
        }
      >
    >


  export type EventTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cause?: boolean
    allowed_interactions?: boolean | EventTemplate$allowed_interactionsArgs<ExtArgs>
    event_template?: boolean | EventTemplate$event_templateArgs<ExtArgs>
    _count?: boolean | EventTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventTemplate"]>

  export type EventTemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cause?: boolean
  }, ExtArgs["result"]["eventTemplate"]>

  export type EventTemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cause?: boolean
  }, ExtArgs["result"]["eventTemplate"]>

  export type EventTemplateSelectScalar = {
    id?: boolean
    name?: boolean
    cause?: boolean
  }

  export type EventTemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "cause", ExtArgs["result"]["eventTemplate"]>
  export type EventTemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    allowed_interactions?: boolean | EventTemplate$allowed_interactionsArgs<ExtArgs>
    event_template?: boolean | EventTemplate$event_templateArgs<ExtArgs>
    _count?: boolean | EventTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventTemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EventTemplateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EventTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventTemplate"
    objects: {
      allowed_interactions: Prisma.$InteractionPayload<ExtArgs>[]
      event_template: Prisma.$EventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      cause: $Enums.EventCause
    }, ExtArgs["result"]["eventTemplate"]>
    composites: {}
  }

  type EventTemplateGetPayload<S extends boolean | null | undefined | EventTemplateDefaultArgs> = $Result.GetResult<Prisma.$EventTemplatePayload, S>

  type EventTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventTemplateCountAggregateInputType | true
    }

  export interface EventTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventTemplate'], meta: { name: 'EventTemplate' } }
    /**
     * Find zero or one EventTemplate that matches the filter.
     * @param {EventTemplateFindUniqueArgs} args - Arguments to find a EventTemplate
     * @example
     * // Get one EventTemplate
     * const eventTemplate = await prisma.eventTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventTemplateFindUniqueArgs>(args: SelectSubset<T, EventTemplateFindUniqueArgs<ExtArgs>>): Prisma__EventTemplateClient<$Result.GetResult<Prisma.$EventTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventTemplateFindUniqueOrThrowArgs} args - Arguments to find a EventTemplate
     * @example
     * // Get one EventTemplate
     * const eventTemplate = await prisma.eventTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, EventTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventTemplateClient<$Result.GetResult<Prisma.$EventTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTemplateFindFirstArgs} args - Arguments to find a EventTemplate
     * @example
     * // Get one EventTemplate
     * const eventTemplate = await prisma.eventTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventTemplateFindFirstArgs>(args?: SelectSubset<T, EventTemplateFindFirstArgs<ExtArgs>>): Prisma__EventTemplateClient<$Result.GetResult<Prisma.$EventTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTemplateFindFirstOrThrowArgs} args - Arguments to find a EventTemplate
     * @example
     * // Get one EventTemplate
     * const eventTemplate = await prisma.eventTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, EventTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventTemplateClient<$Result.GetResult<Prisma.$EventTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventTemplates
     * const eventTemplates = await prisma.eventTemplate.findMany()
     * 
     * // Get first 10 EventTemplates
     * const eventTemplates = await prisma.eventTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventTemplateWithIdOnly = await prisma.eventTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventTemplateFindManyArgs>(args?: SelectSubset<T, EventTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventTemplate.
     * @param {EventTemplateCreateArgs} args - Arguments to create a EventTemplate.
     * @example
     * // Create one EventTemplate
     * const EventTemplate = await prisma.eventTemplate.create({
     *   data: {
     *     // ... data to create a EventTemplate
     *   }
     * })
     * 
     */
    create<T extends EventTemplateCreateArgs>(args: SelectSubset<T, EventTemplateCreateArgs<ExtArgs>>): Prisma__EventTemplateClient<$Result.GetResult<Prisma.$EventTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventTemplates.
     * @param {EventTemplateCreateManyArgs} args - Arguments to create many EventTemplates.
     * @example
     * // Create many EventTemplates
     * const eventTemplate = await prisma.eventTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventTemplateCreateManyArgs>(args?: SelectSubset<T, EventTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventTemplates and returns the data saved in the database.
     * @param {EventTemplateCreateManyAndReturnArgs} args - Arguments to create many EventTemplates.
     * @example
     * // Create many EventTemplates
     * const eventTemplate = await prisma.eventTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventTemplates and only return the `id`
     * const eventTemplateWithIdOnly = await prisma.eventTemplate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventTemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, EventTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventTemplate.
     * @param {EventTemplateDeleteArgs} args - Arguments to delete one EventTemplate.
     * @example
     * // Delete one EventTemplate
     * const EventTemplate = await prisma.eventTemplate.delete({
     *   where: {
     *     // ... filter to delete one EventTemplate
     *   }
     * })
     * 
     */
    delete<T extends EventTemplateDeleteArgs>(args: SelectSubset<T, EventTemplateDeleteArgs<ExtArgs>>): Prisma__EventTemplateClient<$Result.GetResult<Prisma.$EventTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventTemplate.
     * @param {EventTemplateUpdateArgs} args - Arguments to update one EventTemplate.
     * @example
     * // Update one EventTemplate
     * const eventTemplate = await prisma.eventTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventTemplateUpdateArgs>(args: SelectSubset<T, EventTemplateUpdateArgs<ExtArgs>>): Prisma__EventTemplateClient<$Result.GetResult<Prisma.$EventTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventTemplates.
     * @param {EventTemplateDeleteManyArgs} args - Arguments to filter EventTemplates to delete.
     * @example
     * // Delete a few EventTemplates
     * const { count } = await prisma.eventTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventTemplateDeleteManyArgs>(args?: SelectSubset<T, EventTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventTemplates
     * const eventTemplate = await prisma.eventTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventTemplateUpdateManyArgs>(args: SelectSubset<T, EventTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventTemplates and returns the data updated in the database.
     * @param {EventTemplateUpdateManyAndReturnArgs} args - Arguments to update many EventTemplates.
     * @example
     * // Update many EventTemplates
     * const eventTemplate = await prisma.eventTemplate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventTemplates and only return the `id`
     * const eventTemplateWithIdOnly = await prisma.eventTemplate.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventTemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, EventTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventTemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventTemplate.
     * @param {EventTemplateUpsertArgs} args - Arguments to update or create a EventTemplate.
     * @example
     * // Update or create a EventTemplate
     * const eventTemplate = await prisma.eventTemplate.upsert({
     *   create: {
     *     // ... data to create a EventTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventTemplate we want to update
     *   }
     * })
     */
    upsert<T extends EventTemplateUpsertArgs>(args: SelectSubset<T, EventTemplateUpsertArgs<ExtArgs>>): Prisma__EventTemplateClient<$Result.GetResult<Prisma.$EventTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTemplateCountArgs} args - Arguments to filter EventTemplates to count.
     * @example
     * // Count the number of EventTemplates
     * const count = await prisma.eventTemplate.count({
     *   where: {
     *     // ... the filter for the EventTemplates we want to count
     *   }
     * })
    **/
    count<T extends EventTemplateCountArgs>(
      args?: Subset<T, EventTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventTemplateAggregateArgs>(args: Subset<T, EventTemplateAggregateArgs>): Prisma.PrismaPromise<GetEventTemplateAggregateType<T>>

    /**
     * Group by EventTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTemplateGroupByArgs} args - Group by arguments.
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
      T extends EventTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventTemplateGroupByArgs['orderBy'] }
        : { orderBy?: EventTemplateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventTemplate model
   */
  readonly fields: EventTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    allowed_interactions<T extends EventTemplate$allowed_interactionsArgs<ExtArgs> = {}>(args?: Subset<T, EventTemplate$allowed_interactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    event_template<T extends EventTemplate$event_templateArgs<ExtArgs> = {}>(args?: Subset<T, EventTemplate$event_templateArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EventTemplate model
   */
  interface EventTemplateFieldRefs {
    readonly id: FieldRef<"EventTemplate", 'Int'>
    readonly name: FieldRef<"EventTemplate", 'String'>
    readonly cause: FieldRef<"EventTemplate", 'EventCause'>
  }
    

  // Custom InputTypes
  /**
   * EventTemplate findUnique
   */
  export type EventTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTemplate
     */
    select?: EventTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTemplate
     */
    omit?: EventTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTemplateInclude<ExtArgs> | null
    /**
     * Filter, which EventTemplate to fetch.
     */
    where: EventTemplateWhereUniqueInput
  }

  /**
   * EventTemplate findUniqueOrThrow
   */
  export type EventTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTemplate
     */
    select?: EventTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTemplate
     */
    omit?: EventTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTemplateInclude<ExtArgs> | null
    /**
     * Filter, which EventTemplate to fetch.
     */
    where: EventTemplateWhereUniqueInput
  }

  /**
   * EventTemplate findFirst
   */
  export type EventTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTemplate
     */
    select?: EventTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTemplate
     */
    omit?: EventTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTemplateInclude<ExtArgs> | null
    /**
     * Filter, which EventTemplate to fetch.
     */
    where?: EventTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTemplates to fetch.
     */
    orderBy?: EventTemplateOrderByWithRelationInput | EventTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventTemplates.
     */
    cursor?: EventTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventTemplates.
     */
    distinct?: EventTemplateScalarFieldEnum | EventTemplateScalarFieldEnum[]
  }

  /**
   * EventTemplate findFirstOrThrow
   */
  export type EventTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTemplate
     */
    select?: EventTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTemplate
     */
    omit?: EventTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTemplateInclude<ExtArgs> | null
    /**
     * Filter, which EventTemplate to fetch.
     */
    where?: EventTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTemplates to fetch.
     */
    orderBy?: EventTemplateOrderByWithRelationInput | EventTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventTemplates.
     */
    cursor?: EventTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventTemplates.
     */
    distinct?: EventTemplateScalarFieldEnum | EventTemplateScalarFieldEnum[]
  }

  /**
   * EventTemplate findMany
   */
  export type EventTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTemplate
     */
    select?: EventTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTemplate
     */
    omit?: EventTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTemplateInclude<ExtArgs> | null
    /**
     * Filter, which EventTemplates to fetch.
     */
    where?: EventTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTemplates to fetch.
     */
    orderBy?: EventTemplateOrderByWithRelationInput | EventTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventTemplates.
     */
    cursor?: EventTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTemplates.
     */
    skip?: number
    distinct?: EventTemplateScalarFieldEnum | EventTemplateScalarFieldEnum[]
  }

  /**
   * EventTemplate create
   */
  export type EventTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTemplate
     */
    select?: EventTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTemplate
     */
    omit?: EventTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a EventTemplate.
     */
    data: XOR<EventTemplateCreateInput, EventTemplateUncheckedCreateInput>
  }

  /**
   * EventTemplate createMany
   */
  export type EventTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventTemplates.
     */
    data: EventTemplateCreateManyInput | EventTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventTemplate createManyAndReturn
   */
  export type EventTemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTemplate
     */
    select?: EventTemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventTemplate
     */
    omit?: EventTemplateOmit<ExtArgs> | null
    /**
     * The data used to create many EventTemplates.
     */
    data: EventTemplateCreateManyInput | EventTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventTemplate update
   */
  export type EventTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTemplate
     */
    select?: EventTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTemplate
     */
    omit?: EventTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a EventTemplate.
     */
    data: XOR<EventTemplateUpdateInput, EventTemplateUncheckedUpdateInput>
    /**
     * Choose, which EventTemplate to update.
     */
    where: EventTemplateWhereUniqueInput
  }

  /**
   * EventTemplate updateMany
   */
  export type EventTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventTemplates.
     */
    data: XOR<EventTemplateUpdateManyMutationInput, EventTemplateUncheckedUpdateManyInput>
    /**
     * Filter which EventTemplates to update
     */
    where?: EventTemplateWhereInput
    /**
     * Limit how many EventTemplates to update.
     */
    limit?: number
  }

  /**
   * EventTemplate updateManyAndReturn
   */
  export type EventTemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTemplate
     */
    select?: EventTemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventTemplate
     */
    omit?: EventTemplateOmit<ExtArgs> | null
    /**
     * The data used to update EventTemplates.
     */
    data: XOR<EventTemplateUpdateManyMutationInput, EventTemplateUncheckedUpdateManyInput>
    /**
     * Filter which EventTemplates to update
     */
    where?: EventTemplateWhereInput
    /**
     * Limit how many EventTemplates to update.
     */
    limit?: number
  }

  /**
   * EventTemplate upsert
   */
  export type EventTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTemplate
     */
    select?: EventTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTemplate
     */
    omit?: EventTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the EventTemplate to update in case it exists.
     */
    where: EventTemplateWhereUniqueInput
    /**
     * In case the EventTemplate found by the `where` argument doesn't exist, create a new EventTemplate with this data.
     */
    create: XOR<EventTemplateCreateInput, EventTemplateUncheckedCreateInput>
    /**
     * In case the EventTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventTemplateUpdateInput, EventTemplateUncheckedUpdateInput>
  }

  /**
   * EventTemplate delete
   */
  export type EventTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTemplate
     */
    select?: EventTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTemplate
     */
    omit?: EventTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTemplateInclude<ExtArgs> | null
    /**
     * Filter which EventTemplate to delete.
     */
    where: EventTemplateWhereUniqueInput
  }

  /**
   * EventTemplate deleteMany
   */
  export type EventTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventTemplates to delete
     */
    where?: EventTemplateWhereInput
    /**
     * Limit how many EventTemplates to delete.
     */
    limit?: number
  }

  /**
   * EventTemplate.allowed_interactions
   */
  export type EventTemplate$allowed_interactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interaction
     */
    select?: InteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interaction
     */
    omit?: InteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionInclude<ExtArgs> | null
    where?: InteractionWhereInput
    orderBy?: InteractionOrderByWithRelationInput | InteractionOrderByWithRelationInput[]
    cursor?: InteractionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InteractionScalarFieldEnum | InteractionScalarFieldEnum[]
  }

  /**
   * EventTemplate.event_template
   */
  export type EventTemplate$event_templateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * EventTemplate without action
   */
  export type EventTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTemplate
     */
    select?: EventTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTemplate
     */
    omit?: EventTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTemplateInclude<ExtArgs> | null
  }


  /**
   * Model Malfunction
   */

  export type AggregateMalfunction = {
    _count: MalfunctionCountAggregateOutputType | null
    _avg: MalfunctionAvgAggregateOutputType | null
    _sum: MalfunctionSumAggregateOutputType | null
    _min: MalfunctionMinAggregateOutputType | null
    _max: MalfunctionMaxAggregateOutputType | null
  }

  export type MalfunctionAvgAggregateOutputType = {
    id: number | null
    event_id: number | null
    interaction_id: number | null
    user_id: number | null
    system_id: number | null
  }

  export type MalfunctionSumAggregateOutputType = {
    id: number | null
    event_id: number | null
    interaction_id: number | null
    user_id: number | null
    system_id: number | null
  }

  export type MalfunctionMinAggregateOutputType = {
    id: number | null
    event_id: number | null
    interaction_id: number | null
    user_id: number | null
    status: $Enums.MalfunctionStatus | null
    started_at: Date | null
    last_updated: Date | null
    system_id: number | null
  }

  export type MalfunctionMaxAggregateOutputType = {
    id: number | null
    event_id: number | null
    interaction_id: number | null
    user_id: number | null
    status: $Enums.MalfunctionStatus | null
    started_at: Date | null
    last_updated: Date | null
    system_id: number | null
  }

  export type MalfunctionCountAggregateOutputType = {
    id: number
    event_id: number
    interaction_id: number
    user_id: number
    status: number
    started_at: number
    last_updated: number
    system_id: number
    _all: number
  }


  export type MalfunctionAvgAggregateInputType = {
    id?: true
    event_id?: true
    interaction_id?: true
    user_id?: true
    system_id?: true
  }

  export type MalfunctionSumAggregateInputType = {
    id?: true
    event_id?: true
    interaction_id?: true
    user_id?: true
    system_id?: true
  }

  export type MalfunctionMinAggregateInputType = {
    id?: true
    event_id?: true
    interaction_id?: true
    user_id?: true
    status?: true
    started_at?: true
    last_updated?: true
    system_id?: true
  }

  export type MalfunctionMaxAggregateInputType = {
    id?: true
    event_id?: true
    interaction_id?: true
    user_id?: true
    status?: true
    started_at?: true
    last_updated?: true
    system_id?: true
  }

  export type MalfunctionCountAggregateInputType = {
    id?: true
    event_id?: true
    interaction_id?: true
    user_id?: true
    status?: true
    started_at?: true
    last_updated?: true
    system_id?: true
    _all?: true
  }

  export type MalfunctionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Malfunction to aggregate.
     */
    where?: MalfunctionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Malfunctions to fetch.
     */
    orderBy?: MalfunctionOrderByWithRelationInput | MalfunctionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MalfunctionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Malfunctions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Malfunctions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Malfunctions
    **/
    _count?: true | MalfunctionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MalfunctionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MalfunctionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MalfunctionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MalfunctionMaxAggregateInputType
  }

  export type GetMalfunctionAggregateType<T extends MalfunctionAggregateArgs> = {
        [P in keyof T & keyof AggregateMalfunction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMalfunction[P]>
      : GetScalarType<T[P], AggregateMalfunction[P]>
  }




  export type MalfunctionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MalfunctionWhereInput
    orderBy?: MalfunctionOrderByWithAggregationInput | MalfunctionOrderByWithAggregationInput[]
    by: MalfunctionScalarFieldEnum[] | MalfunctionScalarFieldEnum
    having?: MalfunctionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MalfunctionCountAggregateInputType | true
    _avg?: MalfunctionAvgAggregateInputType
    _sum?: MalfunctionSumAggregateInputType
    _min?: MalfunctionMinAggregateInputType
    _max?: MalfunctionMaxAggregateInputType
  }

  export type MalfunctionGroupByOutputType = {
    id: number
    event_id: number
    interaction_id: number
    user_id: number
    status: $Enums.MalfunctionStatus
    started_at: Date
    last_updated: Date
    system_id: number
    _count: MalfunctionCountAggregateOutputType | null
    _avg: MalfunctionAvgAggregateOutputType | null
    _sum: MalfunctionSumAggregateOutputType | null
    _min: MalfunctionMinAggregateOutputType | null
    _max: MalfunctionMaxAggregateOutputType | null
  }

  type GetMalfunctionGroupByPayload<T extends MalfunctionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MalfunctionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MalfunctionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MalfunctionGroupByOutputType[P]>
            : GetScalarType<T[P], MalfunctionGroupByOutputType[P]>
        }
      >
    >


  export type MalfunctionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    interaction_id?: boolean
    user_id?: boolean
    status?: boolean
    started_at?: boolean
    last_updated?: boolean
    system_id?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    interaction?: boolean | InteractionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    system?: boolean | SystemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["malfunction"]>

  export type MalfunctionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    interaction_id?: boolean
    user_id?: boolean
    status?: boolean
    started_at?: boolean
    last_updated?: boolean
    system_id?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    interaction?: boolean | InteractionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    system?: boolean | SystemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["malfunction"]>

  export type MalfunctionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    interaction_id?: boolean
    user_id?: boolean
    status?: boolean
    started_at?: boolean
    last_updated?: boolean
    system_id?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    interaction?: boolean | InteractionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    system?: boolean | SystemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["malfunction"]>

  export type MalfunctionSelectScalar = {
    id?: boolean
    event_id?: boolean
    interaction_id?: boolean
    user_id?: boolean
    status?: boolean
    started_at?: boolean
    last_updated?: boolean
    system_id?: boolean
  }

  export type MalfunctionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "event_id" | "interaction_id" | "user_id" | "status" | "started_at" | "last_updated" | "system_id", ExtArgs["result"]["malfunction"]>
  export type MalfunctionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    interaction?: boolean | InteractionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    system?: boolean | SystemDefaultArgs<ExtArgs>
  }
  export type MalfunctionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    interaction?: boolean | InteractionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    system?: boolean | SystemDefaultArgs<ExtArgs>
  }
  export type MalfunctionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    interaction?: boolean | InteractionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    system?: boolean | SystemDefaultArgs<ExtArgs>
  }

  export type $MalfunctionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Malfunction"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      interaction: Prisma.$InteractionPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      system: Prisma.$SystemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      event_id: number
      interaction_id: number
      user_id: number
      status: $Enums.MalfunctionStatus
      started_at: Date
      last_updated: Date
      system_id: number
    }, ExtArgs["result"]["malfunction"]>
    composites: {}
  }

  type MalfunctionGetPayload<S extends boolean | null | undefined | MalfunctionDefaultArgs> = $Result.GetResult<Prisma.$MalfunctionPayload, S>

  type MalfunctionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MalfunctionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MalfunctionCountAggregateInputType | true
    }

  export interface MalfunctionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Malfunction'], meta: { name: 'Malfunction' } }
    /**
     * Find zero or one Malfunction that matches the filter.
     * @param {MalfunctionFindUniqueArgs} args - Arguments to find a Malfunction
     * @example
     * // Get one Malfunction
     * const malfunction = await prisma.malfunction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MalfunctionFindUniqueArgs>(args: SelectSubset<T, MalfunctionFindUniqueArgs<ExtArgs>>): Prisma__MalfunctionClient<$Result.GetResult<Prisma.$MalfunctionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Malfunction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MalfunctionFindUniqueOrThrowArgs} args - Arguments to find a Malfunction
     * @example
     * // Get one Malfunction
     * const malfunction = await prisma.malfunction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MalfunctionFindUniqueOrThrowArgs>(args: SelectSubset<T, MalfunctionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MalfunctionClient<$Result.GetResult<Prisma.$MalfunctionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Malfunction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MalfunctionFindFirstArgs} args - Arguments to find a Malfunction
     * @example
     * // Get one Malfunction
     * const malfunction = await prisma.malfunction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MalfunctionFindFirstArgs>(args?: SelectSubset<T, MalfunctionFindFirstArgs<ExtArgs>>): Prisma__MalfunctionClient<$Result.GetResult<Prisma.$MalfunctionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Malfunction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MalfunctionFindFirstOrThrowArgs} args - Arguments to find a Malfunction
     * @example
     * // Get one Malfunction
     * const malfunction = await prisma.malfunction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MalfunctionFindFirstOrThrowArgs>(args?: SelectSubset<T, MalfunctionFindFirstOrThrowArgs<ExtArgs>>): Prisma__MalfunctionClient<$Result.GetResult<Prisma.$MalfunctionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Malfunctions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MalfunctionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Malfunctions
     * const malfunctions = await prisma.malfunction.findMany()
     * 
     * // Get first 10 Malfunctions
     * const malfunctions = await prisma.malfunction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const malfunctionWithIdOnly = await prisma.malfunction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MalfunctionFindManyArgs>(args?: SelectSubset<T, MalfunctionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MalfunctionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Malfunction.
     * @param {MalfunctionCreateArgs} args - Arguments to create a Malfunction.
     * @example
     * // Create one Malfunction
     * const Malfunction = await prisma.malfunction.create({
     *   data: {
     *     // ... data to create a Malfunction
     *   }
     * })
     * 
     */
    create<T extends MalfunctionCreateArgs>(args: SelectSubset<T, MalfunctionCreateArgs<ExtArgs>>): Prisma__MalfunctionClient<$Result.GetResult<Prisma.$MalfunctionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Malfunctions.
     * @param {MalfunctionCreateManyArgs} args - Arguments to create many Malfunctions.
     * @example
     * // Create many Malfunctions
     * const malfunction = await prisma.malfunction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MalfunctionCreateManyArgs>(args?: SelectSubset<T, MalfunctionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Malfunctions and returns the data saved in the database.
     * @param {MalfunctionCreateManyAndReturnArgs} args - Arguments to create many Malfunctions.
     * @example
     * // Create many Malfunctions
     * const malfunction = await prisma.malfunction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Malfunctions and only return the `id`
     * const malfunctionWithIdOnly = await prisma.malfunction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MalfunctionCreateManyAndReturnArgs>(args?: SelectSubset<T, MalfunctionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MalfunctionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Malfunction.
     * @param {MalfunctionDeleteArgs} args - Arguments to delete one Malfunction.
     * @example
     * // Delete one Malfunction
     * const Malfunction = await prisma.malfunction.delete({
     *   where: {
     *     // ... filter to delete one Malfunction
     *   }
     * })
     * 
     */
    delete<T extends MalfunctionDeleteArgs>(args: SelectSubset<T, MalfunctionDeleteArgs<ExtArgs>>): Prisma__MalfunctionClient<$Result.GetResult<Prisma.$MalfunctionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Malfunction.
     * @param {MalfunctionUpdateArgs} args - Arguments to update one Malfunction.
     * @example
     * // Update one Malfunction
     * const malfunction = await prisma.malfunction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MalfunctionUpdateArgs>(args: SelectSubset<T, MalfunctionUpdateArgs<ExtArgs>>): Prisma__MalfunctionClient<$Result.GetResult<Prisma.$MalfunctionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Malfunctions.
     * @param {MalfunctionDeleteManyArgs} args - Arguments to filter Malfunctions to delete.
     * @example
     * // Delete a few Malfunctions
     * const { count } = await prisma.malfunction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MalfunctionDeleteManyArgs>(args?: SelectSubset<T, MalfunctionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Malfunctions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MalfunctionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Malfunctions
     * const malfunction = await prisma.malfunction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MalfunctionUpdateManyArgs>(args: SelectSubset<T, MalfunctionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Malfunctions and returns the data updated in the database.
     * @param {MalfunctionUpdateManyAndReturnArgs} args - Arguments to update many Malfunctions.
     * @example
     * // Update many Malfunctions
     * const malfunction = await prisma.malfunction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Malfunctions and only return the `id`
     * const malfunctionWithIdOnly = await prisma.malfunction.updateManyAndReturn({
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
    updateManyAndReturn<T extends MalfunctionUpdateManyAndReturnArgs>(args: SelectSubset<T, MalfunctionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MalfunctionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Malfunction.
     * @param {MalfunctionUpsertArgs} args - Arguments to update or create a Malfunction.
     * @example
     * // Update or create a Malfunction
     * const malfunction = await prisma.malfunction.upsert({
     *   create: {
     *     // ... data to create a Malfunction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Malfunction we want to update
     *   }
     * })
     */
    upsert<T extends MalfunctionUpsertArgs>(args: SelectSubset<T, MalfunctionUpsertArgs<ExtArgs>>): Prisma__MalfunctionClient<$Result.GetResult<Prisma.$MalfunctionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Malfunctions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MalfunctionCountArgs} args - Arguments to filter Malfunctions to count.
     * @example
     * // Count the number of Malfunctions
     * const count = await prisma.malfunction.count({
     *   where: {
     *     // ... the filter for the Malfunctions we want to count
     *   }
     * })
    **/
    count<T extends MalfunctionCountArgs>(
      args?: Subset<T, MalfunctionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MalfunctionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Malfunction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MalfunctionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MalfunctionAggregateArgs>(args: Subset<T, MalfunctionAggregateArgs>): Prisma.PrismaPromise<GetMalfunctionAggregateType<T>>

    /**
     * Group by Malfunction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MalfunctionGroupByArgs} args - Group by arguments.
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
      T extends MalfunctionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MalfunctionGroupByArgs['orderBy'] }
        : { orderBy?: MalfunctionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MalfunctionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMalfunctionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Malfunction model
   */
  readonly fields: MalfunctionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Malfunction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MalfunctionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    interaction<T extends InteractionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InteractionDefaultArgs<ExtArgs>>): Prisma__InteractionClient<$Result.GetResult<Prisma.$InteractionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    system<T extends SystemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SystemDefaultArgs<ExtArgs>>): Prisma__SystemClient<$Result.GetResult<Prisma.$SystemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Malfunction model
   */
  interface MalfunctionFieldRefs {
    readonly id: FieldRef<"Malfunction", 'Int'>
    readonly event_id: FieldRef<"Malfunction", 'Int'>
    readonly interaction_id: FieldRef<"Malfunction", 'Int'>
    readonly user_id: FieldRef<"Malfunction", 'Int'>
    readonly status: FieldRef<"Malfunction", 'MalfunctionStatus'>
    readonly started_at: FieldRef<"Malfunction", 'DateTime'>
    readonly last_updated: FieldRef<"Malfunction", 'DateTime'>
    readonly system_id: FieldRef<"Malfunction", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Malfunction findUnique
   */
  export type MalfunctionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Malfunction
     */
    select?: MalfunctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Malfunction
     */
    omit?: MalfunctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MalfunctionInclude<ExtArgs> | null
    /**
     * Filter, which Malfunction to fetch.
     */
    where: MalfunctionWhereUniqueInput
  }

  /**
   * Malfunction findUniqueOrThrow
   */
  export type MalfunctionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Malfunction
     */
    select?: MalfunctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Malfunction
     */
    omit?: MalfunctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MalfunctionInclude<ExtArgs> | null
    /**
     * Filter, which Malfunction to fetch.
     */
    where: MalfunctionWhereUniqueInput
  }

  /**
   * Malfunction findFirst
   */
  export type MalfunctionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Malfunction
     */
    select?: MalfunctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Malfunction
     */
    omit?: MalfunctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MalfunctionInclude<ExtArgs> | null
    /**
     * Filter, which Malfunction to fetch.
     */
    where?: MalfunctionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Malfunctions to fetch.
     */
    orderBy?: MalfunctionOrderByWithRelationInput | MalfunctionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Malfunctions.
     */
    cursor?: MalfunctionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Malfunctions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Malfunctions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Malfunctions.
     */
    distinct?: MalfunctionScalarFieldEnum | MalfunctionScalarFieldEnum[]
  }

  /**
   * Malfunction findFirstOrThrow
   */
  export type MalfunctionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Malfunction
     */
    select?: MalfunctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Malfunction
     */
    omit?: MalfunctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MalfunctionInclude<ExtArgs> | null
    /**
     * Filter, which Malfunction to fetch.
     */
    where?: MalfunctionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Malfunctions to fetch.
     */
    orderBy?: MalfunctionOrderByWithRelationInput | MalfunctionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Malfunctions.
     */
    cursor?: MalfunctionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Malfunctions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Malfunctions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Malfunctions.
     */
    distinct?: MalfunctionScalarFieldEnum | MalfunctionScalarFieldEnum[]
  }

  /**
   * Malfunction findMany
   */
  export type MalfunctionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Malfunction
     */
    select?: MalfunctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Malfunction
     */
    omit?: MalfunctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MalfunctionInclude<ExtArgs> | null
    /**
     * Filter, which Malfunctions to fetch.
     */
    where?: MalfunctionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Malfunctions to fetch.
     */
    orderBy?: MalfunctionOrderByWithRelationInput | MalfunctionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Malfunctions.
     */
    cursor?: MalfunctionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Malfunctions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Malfunctions.
     */
    skip?: number
    distinct?: MalfunctionScalarFieldEnum | MalfunctionScalarFieldEnum[]
  }

  /**
   * Malfunction create
   */
  export type MalfunctionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Malfunction
     */
    select?: MalfunctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Malfunction
     */
    omit?: MalfunctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MalfunctionInclude<ExtArgs> | null
    /**
     * The data needed to create a Malfunction.
     */
    data: XOR<MalfunctionCreateInput, MalfunctionUncheckedCreateInput>
  }

  /**
   * Malfunction createMany
   */
  export type MalfunctionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Malfunctions.
     */
    data: MalfunctionCreateManyInput | MalfunctionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Malfunction createManyAndReturn
   */
  export type MalfunctionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Malfunction
     */
    select?: MalfunctionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Malfunction
     */
    omit?: MalfunctionOmit<ExtArgs> | null
    /**
     * The data used to create many Malfunctions.
     */
    data: MalfunctionCreateManyInput | MalfunctionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MalfunctionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Malfunction update
   */
  export type MalfunctionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Malfunction
     */
    select?: MalfunctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Malfunction
     */
    omit?: MalfunctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MalfunctionInclude<ExtArgs> | null
    /**
     * The data needed to update a Malfunction.
     */
    data: XOR<MalfunctionUpdateInput, MalfunctionUncheckedUpdateInput>
    /**
     * Choose, which Malfunction to update.
     */
    where: MalfunctionWhereUniqueInput
  }

  /**
   * Malfunction updateMany
   */
  export type MalfunctionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Malfunctions.
     */
    data: XOR<MalfunctionUpdateManyMutationInput, MalfunctionUncheckedUpdateManyInput>
    /**
     * Filter which Malfunctions to update
     */
    where?: MalfunctionWhereInput
    /**
     * Limit how many Malfunctions to update.
     */
    limit?: number
  }

  /**
   * Malfunction updateManyAndReturn
   */
  export type MalfunctionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Malfunction
     */
    select?: MalfunctionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Malfunction
     */
    omit?: MalfunctionOmit<ExtArgs> | null
    /**
     * The data used to update Malfunctions.
     */
    data: XOR<MalfunctionUpdateManyMutationInput, MalfunctionUncheckedUpdateManyInput>
    /**
     * Filter which Malfunctions to update
     */
    where?: MalfunctionWhereInput
    /**
     * Limit how many Malfunctions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MalfunctionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Malfunction upsert
   */
  export type MalfunctionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Malfunction
     */
    select?: MalfunctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Malfunction
     */
    omit?: MalfunctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MalfunctionInclude<ExtArgs> | null
    /**
     * The filter to search for the Malfunction to update in case it exists.
     */
    where: MalfunctionWhereUniqueInput
    /**
     * In case the Malfunction found by the `where` argument doesn't exist, create a new Malfunction with this data.
     */
    create: XOR<MalfunctionCreateInput, MalfunctionUncheckedCreateInput>
    /**
     * In case the Malfunction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MalfunctionUpdateInput, MalfunctionUncheckedUpdateInput>
  }

  /**
   * Malfunction delete
   */
  export type MalfunctionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Malfunction
     */
    select?: MalfunctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Malfunction
     */
    omit?: MalfunctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MalfunctionInclude<ExtArgs> | null
    /**
     * Filter which Malfunction to delete.
     */
    where: MalfunctionWhereUniqueInput
  }

  /**
   * Malfunction deleteMany
   */
  export type MalfunctionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Malfunctions to delete
     */
    where?: MalfunctionWhereInput
    /**
     * Limit how many Malfunctions to delete.
     */
    limit?: number
  }

  /**
   * Malfunction without action
   */
  export type MalfunctionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Malfunction
     */
    select?: MalfunctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Malfunction
     */
    omit?: MalfunctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MalfunctionInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    id: number | null
    event_template_id: number | null
  }

  export type EventSumAggregateOutputType = {
    id: number | null
    event_template_id: number | null
  }

  export type EventMinAggregateOutputType = {
    id: number | null
    event_template_id: number | null
    started_at: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: number | null
    event_template_id: number | null
    started_at: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    event_template_id: number
    started_at: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    id?: true
    event_template_id?: true
  }

  export type EventSumAggregateInputType = {
    id?: true
    event_template_id?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    event_template_id?: true
    started_at?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    event_template_id?: true
    started_at?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    event_template_id?: true
    started_at?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: number
    event_template_id: number
    started_at: Date
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_template_id?: boolean
    started_at?: boolean
    event_template?: boolean | EventTemplateDefaultArgs<ExtArgs>
    required_interactions?: boolean | Event$required_interactionsArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_template_id?: boolean
    started_at?: boolean
    event_template?: boolean | EventTemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_template_id?: boolean
    started_at?: boolean
    event_template?: boolean | EventTemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    event_template_id?: boolean
    started_at?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "event_template_id" | "started_at", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event_template?: boolean | EventTemplateDefaultArgs<ExtArgs>
    required_interactions?: boolean | Event$required_interactionsArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event_template?: boolean | EventTemplateDefaultArgs<ExtArgs>
  }
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event_template?: boolean | EventTemplateDefaultArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      event_template: Prisma.$EventTemplatePayload<ExtArgs>
      required_interactions: Prisma.$MalfunctionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      event_template_id: number
      started_at: Date
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event_template<T extends EventTemplateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventTemplateDefaultArgs<ExtArgs>>): Prisma__EventTemplateClient<$Result.GetResult<Prisma.$EventTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    required_interactions<T extends Event$required_interactionsArgs<ExtArgs> = {}>(args?: Subset<T, Event$required_interactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MalfunctionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'Int'>
    readonly event_template_id: FieldRef<"Event", 'Int'>
    readonly started_at: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.required_interactions
   */
  export type Event$required_interactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Malfunction
     */
    select?: MalfunctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Malfunction
     */
    omit?: MalfunctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MalfunctionInclude<ExtArgs> | null
    where?: MalfunctionWhereInput
    orderBy?: MalfunctionOrderByWithRelationInput | MalfunctionOrderByWithRelationInput[]
    cursor?: MalfunctionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MalfunctionScalarFieldEnum | MalfunctionScalarFieldEnum[]
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    profession: 'profession',
    fraction: 'fraction',
    navigation_skill: 'navigation_skill',
    military_skill: 'military_skill',
    engineering_skill: 'engineering_skill',
    bureaucracy_skill: 'bureaucracy_skill',
    service_skill: 'service_skill',
    status: 'status'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SectionScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    description: 'description',
    skill: 'skill'
  };

  export type SectionScalarFieldEnum = (typeof SectionScalarFieldEnum)[keyof typeof SectionScalarFieldEnum]


  export const SystemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    durability: 'durability',
    section_code: 'section_code'
  };

  export type SystemScalarFieldEnum = (typeof SystemScalarFieldEnum)[keyof typeof SystemScalarFieldEnum]


  export const InteractionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    skill: 'skill',
    type: 'type',
    malfunction: 'malfunction',
    system_id: 'system_id'
  };

  export type InteractionScalarFieldEnum = (typeof InteractionScalarFieldEnum)[keyof typeof InteractionScalarFieldEnum]


  export const EventTemplateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    cause: 'cause'
  };

  export type EventTemplateScalarFieldEnum = (typeof EventTemplateScalarFieldEnum)[keyof typeof EventTemplateScalarFieldEnum]


  export const MalfunctionScalarFieldEnum: {
    id: 'id',
    event_id: 'event_id',
    interaction_id: 'interaction_id',
    user_id: 'user_id',
    status: 'status',
    started_at: 'started_at',
    last_updated: 'last_updated',
    system_id: 'system_id'
  };

  export type MalfunctionScalarFieldEnum = (typeof MalfunctionScalarFieldEnum)[keyof typeof MalfunctionScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    event_template_id: 'event_template_id',
    started_at: 'started_at'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Fraction'
   */
  export type EnumFractionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Fraction'>
    


  /**
   * Reference to a field of type 'Fraction[]'
   */
  export type ListEnumFractionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Fraction[]'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'SectionCode'
   */
  export type EnumSectionCodeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SectionCode'>
    


  /**
   * Reference to a field of type 'SectionCode[]'
   */
  export type ListEnumSectionCodeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SectionCode[]'>
    


  /**
   * Reference to a field of type 'Skills'
   */
  export type EnumSkillsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Skills'>
    


  /**
   * Reference to a field of type 'Skills[]'
   */
  export type ListEnumSkillsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Skills[]'>
    


  /**
   * Reference to a field of type 'InteractionType'
   */
  export type EnumInteractionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InteractionType'>
    


  /**
   * Reference to a field of type 'InteractionType[]'
   */
  export type ListEnumInteractionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InteractionType[]'>
    


  /**
   * Reference to a field of type 'EventCause'
   */
  export type EnumEventCauseFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventCause'>
    


  /**
   * Reference to a field of type 'EventCause[]'
   */
  export type ListEnumEventCauseFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventCause[]'>
    


  /**
   * Reference to a field of type 'MalfunctionStatus'
   */
  export type EnumMalfunctionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MalfunctionStatus'>
    


  /**
   * Reference to a field of type 'MalfunctionStatus[]'
   */
  export type ListEnumMalfunctionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MalfunctionStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    profession?: StringFilter<"User"> | string
    fraction?: EnumFractionFilter<"User"> | $Enums.Fraction
    navigation_skill?: IntFilter<"User"> | number
    military_skill?: IntFilter<"User"> | number
    engineering_skill?: IntFilter<"User"> | number
    bureaucracy_skill?: IntFilter<"User"> | number
    service_skill?: IntFilter<"User"> | number
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    finished_interactions?: MalfunctionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    profession?: SortOrder
    fraction?: SortOrder
    navigation_skill?: SortOrder
    military_skill?: SortOrder
    engineering_skill?: SortOrder
    bureaucracy_skill?: SortOrder
    service_skill?: SortOrder
    status?: SortOrder
    finished_interactions?: MalfunctionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    profession?: StringFilter<"User"> | string
    fraction?: EnumFractionFilter<"User"> | $Enums.Fraction
    navigation_skill?: IntFilter<"User"> | number
    military_skill?: IntFilter<"User"> | number
    engineering_skill?: IntFilter<"User"> | number
    bureaucracy_skill?: IntFilter<"User"> | number
    service_skill?: IntFilter<"User"> | number
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    finished_interactions?: MalfunctionListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    profession?: SortOrder
    fraction?: SortOrder
    navigation_skill?: SortOrder
    military_skill?: SortOrder
    engineering_skill?: SortOrder
    bureaucracy_skill?: SortOrder
    service_skill?: SortOrder
    status?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    profession?: StringWithAggregatesFilter<"User"> | string
    fraction?: EnumFractionWithAggregatesFilter<"User"> | $Enums.Fraction
    navigation_skill?: IntWithAggregatesFilter<"User"> | number
    military_skill?: IntWithAggregatesFilter<"User"> | number
    engineering_skill?: IntWithAggregatesFilter<"User"> | number
    bureaucracy_skill?: IntWithAggregatesFilter<"User"> | number
    service_skill?: IntWithAggregatesFilter<"User"> | number
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
  }

  export type SectionWhereInput = {
    AND?: SectionWhereInput | SectionWhereInput[]
    OR?: SectionWhereInput[]
    NOT?: SectionWhereInput | SectionWhereInput[]
    id?: IntFilter<"Section"> | number
    code?: EnumSectionCodeFilter<"Section"> | $Enums.SectionCode
    name?: StringFilter<"Section"> | string
    description?: StringFilter<"Section"> | string
    skill?: EnumSkillsFilter<"Section"> | $Enums.Skills
    systems?: SystemListRelationFilter
  }

  export type SectionOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    skill?: SortOrder
    systems?: SystemOrderByRelationAggregateInput
  }

  export type SectionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: $Enums.SectionCode
    AND?: SectionWhereInput | SectionWhereInput[]
    OR?: SectionWhereInput[]
    NOT?: SectionWhereInput | SectionWhereInput[]
    name?: StringFilter<"Section"> | string
    description?: StringFilter<"Section"> | string
    skill?: EnumSkillsFilter<"Section"> | $Enums.Skills
    systems?: SystemListRelationFilter
  }, "id" | "code">

  export type SectionOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    skill?: SortOrder
    _count?: SectionCountOrderByAggregateInput
    _avg?: SectionAvgOrderByAggregateInput
    _max?: SectionMaxOrderByAggregateInput
    _min?: SectionMinOrderByAggregateInput
    _sum?: SectionSumOrderByAggregateInput
  }

  export type SectionScalarWhereWithAggregatesInput = {
    AND?: SectionScalarWhereWithAggregatesInput | SectionScalarWhereWithAggregatesInput[]
    OR?: SectionScalarWhereWithAggregatesInput[]
    NOT?: SectionScalarWhereWithAggregatesInput | SectionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Section"> | number
    code?: EnumSectionCodeWithAggregatesFilter<"Section"> | $Enums.SectionCode
    name?: StringWithAggregatesFilter<"Section"> | string
    description?: StringWithAggregatesFilter<"Section"> | string
    skill?: EnumSkillsWithAggregatesFilter<"Section"> | $Enums.Skills
  }

  export type SystemWhereInput = {
    AND?: SystemWhereInput | SystemWhereInput[]
    OR?: SystemWhereInput[]
    NOT?: SystemWhereInput | SystemWhereInput[]
    id?: IntFilter<"System"> | number
    name?: StringFilter<"System"> | string
    description?: StringFilter<"System"> | string
    durability?: IntFilter<"System"> | number
    section_code?: EnumSectionCodeFilter<"System"> | $Enums.SectionCode
    section?: XOR<SectionScalarRelationFilter, SectionWhereInput>
    interactions?: InteractionListRelationFilter
    malfunctions?: MalfunctionListRelationFilter
  }

  export type SystemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    durability?: SortOrder
    section_code?: SortOrder
    section?: SectionOrderByWithRelationInput
    interactions?: InteractionOrderByRelationAggregateInput
    malfunctions?: MalfunctionOrderByRelationAggregateInput
  }

  export type SystemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SystemWhereInput | SystemWhereInput[]
    OR?: SystemWhereInput[]
    NOT?: SystemWhereInput | SystemWhereInput[]
    name?: StringFilter<"System"> | string
    description?: StringFilter<"System"> | string
    durability?: IntFilter<"System"> | number
    section_code?: EnumSectionCodeFilter<"System"> | $Enums.SectionCode
    section?: XOR<SectionScalarRelationFilter, SectionWhereInput>
    interactions?: InteractionListRelationFilter
    malfunctions?: MalfunctionListRelationFilter
  }, "id">

  export type SystemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    durability?: SortOrder
    section_code?: SortOrder
    _count?: SystemCountOrderByAggregateInput
    _avg?: SystemAvgOrderByAggregateInput
    _max?: SystemMaxOrderByAggregateInput
    _min?: SystemMinOrderByAggregateInput
    _sum?: SystemSumOrderByAggregateInput
  }

  export type SystemScalarWhereWithAggregatesInput = {
    AND?: SystemScalarWhereWithAggregatesInput | SystemScalarWhereWithAggregatesInput[]
    OR?: SystemScalarWhereWithAggregatesInput[]
    NOT?: SystemScalarWhereWithAggregatesInput | SystemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"System"> | number
    name?: StringWithAggregatesFilter<"System"> | string
    description?: StringWithAggregatesFilter<"System"> | string
    durability?: IntWithAggregatesFilter<"System"> | number
    section_code?: EnumSectionCodeWithAggregatesFilter<"System"> | $Enums.SectionCode
  }

  export type InteractionWhereInput = {
    AND?: InteractionWhereInput | InteractionWhereInput[]
    OR?: InteractionWhereInput[]
    NOT?: InteractionWhereInput | InteractionWhereInput[]
    id?: IntFilter<"Interaction"> | number
    name?: StringFilter<"Interaction"> | string
    description?: StringFilter<"Interaction"> | string
    skill?: EnumSkillsNullableFilter<"Interaction"> | $Enums.Skills | null
    type?: EnumInteractionTypeFilter<"Interaction"> | $Enums.InteractionType
    malfunction?: StringFilter<"Interaction"> | string
    system_id?: IntFilter<"Interaction"> | number
    system?: XOR<SystemScalarRelationFilter, SystemWhereInput>
    possible_events?: EventTemplateListRelationFilter
    required_interactions?: MalfunctionListRelationFilter
  }

  export type InteractionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    skill?: SortOrderInput | SortOrder
    type?: SortOrder
    malfunction?: SortOrder
    system_id?: SortOrder
    system?: SystemOrderByWithRelationInput
    possible_events?: EventTemplateOrderByRelationAggregateInput
    required_interactions?: MalfunctionOrderByRelationAggregateInput
  }

  export type InteractionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InteractionWhereInput | InteractionWhereInput[]
    OR?: InteractionWhereInput[]
    NOT?: InteractionWhereInput | InteractionWhereInput[]
    name?: StringFilter<"Interaction"> | string
    description?: StringFilter<"Interaction"> | string
    skill?: EnumSkillsNullableFilter<"Interaction"> | $Enums.Skills | null
    type?: EnumInteractionTypeFilter<"Interaction"> | $Enums.InteractionType
    malfunction?: StringFilter<"Interaction"> | string
    system_id?: IntFilter<"Interaction"> | number
    system?: XOR<SystemScalarRelationFilter, SystemWhereInput>
    possible_events?: EventTemplateListRelationFilter
    required_interactions?: MalfunctionListRelationFilter
  }, "id">

  export type InteractionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    skill?: SortOrderInput | SortOrder
    type?: SortOrder
    malfunction?: SortOrder
    system_id?: SortOrder
    _count?: InteractionCountOrderByAggregateInput
    _avg?: InteractionAvgOrderByAggregateInput
    _max?: InteractionMaxOrderByAggregateInput
    _min?: InteractionMinOrderByAggregateInput
    _sum?: InteractionSumOrderByAggregateInput
  }

  export type InteractionScalarWhereWithAggregatesInput = {
    AND?: InteractionScalarWhereWithAggregatesInput | InteractionScalarWhereWithAggregatesInput[]
    OR?: InteractionScalarWhereWithAggregatesInput[]
    NOT?: InteractionScalarWhereWithAggregatesInput | InteractionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Interaction"> | number
    name?: StringWithAggregatesFilter<"Interaction"> | string
    description?: StringWithAggregatesFilter<"Interaction"> | string
    skill?: EnumSkillsNullableWithAggregatesFilter<"Interaction"> | $Enums.Skills | null
    type?: EnumInteractionTypeWithAggregatesFilter<"Interaction"> | $Enums.InteractionType
    malfunction?: StringWithAggregatesFilter<"Interaction"> | string
    system_id?: IntWithAggregatesFilter<"Interaction"> | number
  }

  export type EventTemplateWhereInput = {
    AND?: EventTemplateWhereInput | EventTemplateWhereInput[]
    OR?: EventTemplateWhereInput[]
    NOT?: EventTemplateWhereInput | EventTemplateWhereInput[]
    id?: IntFilter<"EventTemplate"> | number
    name?: StringFilter<"EventTemplate"> | string
    cause?: EnumEventCauseFilter<"EventTemplate"> | $Enums.EventCause
    allowed_interactions?: InteractionListRelationFilter
    event_template?: EventListRelationFilter
  }

  export type EventTemplateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    cause?: SortOrder
    allowed_interactions?: InteractionOrderByRelationAggregateInput
    event_template?: EventOrderByRelationAggregateInput
  }

  export type EventTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EventTemplateWhereInput | EventTemplateWhereInput[]
    OR?: EventTemplateWhereInput[]
    NOT?: EventTemplateWhereInput | EventTemplateWhereInput[]
    name?: StringFilter<"EventTemplate"> | string
    cause?: EnumEventCauseFilter<"EventTemplate"> | $Enums.EventCause
    allowed_interactions?: InteractionListRelationFilter
    event_template?: EventListRelationFilter
  }, "id">

  export type EventTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    cause?: SortOrder
    _count?: EventTemplateCountOrderByAggregateInput
    _avg?: EventTemplateAvgOrderByAggregateInput
    _max?: EventTemplateMaxOrderByAggregateInput
    _min?: EventTemplateMinOrderByAggregateInput
    _sum?: EventTemplateSumOrderByAggregateInput
  }

  export type EventTemplateScalarWhereWithAggregatesInput = {
    AND?: EventTemplateScalarWhereWithAggregatesInput | EventTemplateScalarWhereWithAggregatesInput[]
    OR?: EventTemplateScalarWhereWithAggregatesInput[]
    NOT?: EventTemplateScalarWhereWithAggregatesInput | EventTemplateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EventTemplate"> | number
    name?: StringWithAggregatesFilter<"EventTemplate"> | string
    cause?: EnumEventCauseWithAggregatesFilter<"EventTemplate"> | $Enums.EventCause
  }

  export type MalfunctionWhereInput = {
    AND?: MalfunctionWhereInput | MalfunctionWhereInput[]
    OR?: MalfunctionWhereInput[]
    NOT?: MalfunctionWhereInput | MalfunctionWhereInput[]
    id?: IntFilter<"Malfunction"> | number
    event_id?: IntFilter<"Malfunction"> | number
    interaction_id?: IntFilter<"Malfunction"> | number
    user_id?: IntFilter<"Malfunction"> | number
    status?: EnumMalfunctionStatusFilter<"Malfunction"> | $Enums.MalfunctionStatus
    started_at?: DateTimeFilter<"Malfunction"> | Date | string
    last_updated?: DateTimeFilter<"Malfunction"> | Date | string
    system_id?: IntFilter<"Malfunction"> | number
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    interaction?: XOR<InteractionScalarRelationFilter, InteractionWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    system?: XOR<SystemScalarRelationFilter, SystemWhereInput>
  }

  export type MalfunctionOrderByWithRelationInput = {
    id?: SortOrder
    event_id?: SortOrder
    interaction_id?: SortOrder
    user_id?: SortOrder
    status?: SortOrder
    started_at?: SortOrder
    last_updated?: SortOrder
    system_id?: SortOrder
    event?: EventOrderByWithRelationInput
    interaction?: InteractionOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    system?: SystemOrderByWithRelationInput
  }

  export type MalfunctionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MalfunctionWhereInput | MalfunctionWhereInput[]
    OR?: MalfunctionWhereInput[]
    NOT?: MalfunctionWhereInput | MalfunctionWhereInput[]
    event_id?: IntFilter<"Malfunction"> | number
    interaction_id?: IntFilter<"Malfunction"> | number
    user_id?: IntFilter<"Malfunction"> | number
    status?: EnumMalfunctionStatusFilter<"Malfunction"> | $Enums.MalfunctionStatus
    started_at?: DateTimeFilter<"Malfunction"> | Date | string
    last_updated?: DateTimeFilter<"Malfunction"> | Date | string
    system_id?: IntFilter<"Malfunction"> | number
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    interaction?: XOR<InteractionScalarRelationFilter, InteractionWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    system?: XOR<SystemScalarRelationFilter, SystemWhereInput>
  }, "id">

  export type MalfunctionOrderByWithAggregationInput = {
    id?: SortOrder
    event_id?: SortOrder
    interaction_id?: SortOrder
    user_id?: SortOrder
    status?: SortOrder
    started_at?: SortOrder
    last_updated?: SortOrder
    system_id?: SortOrder
    _count?: MalfunctionCountOrderByAggregateInput
    _avg?: MalfunctionAvgOrderByAggregateInput
    _max?: MalfunctionMaxOrderByAggregateInput
    _min?: MalfunctionMinOrderByAggregateInput
    _sum?: MalfunctionSumOrderByAggregateInput
  }

  export type MalfunctionScalarWhereWithAggregatesInput = {
    AND?: MalfunctionScalarWhereWithAggregatesInput | MalfunctionScalarWhereWithAggregatesInput[]
    OR?: MalfunctionScalarWhereWithAggregatesInput[]
    NOT?: MalfunctionScalarWhereWithAggregatesInput | MalfunctionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Malfunction"> | number
    event_id?: IntWithAggregatesFilter<"Malfunction"> | number
    interaction_id?: IntWithAggregatesFilter<"Malfunction"> | number
    user_id?: IntWithAggregatesFilter<"Malfunction"> | number
    status?: EnumMalfunctionStatusWithAggregatesFilter<"Malfunction"> | $Enums.MalfunctionStatus
    started_at?: DateTimeWithAggregatesFilter<"Malfunction"> | Date | string
    last_updated?: DateTimeWithAggregatesFilter<"Malfunction"> | Date | string
    system_id?: IntWithAggregatesFilter<"Malfunction"> | number
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: IntFilter<"Event"> | number
    event_template_id?: IntFilter<"Event"> | number
    started_at?: DateTimeFilter<"Event"> | Date | string
    event_template?: XOR<EventTemplateScalarRelationFilter, EventTemplateWhereInput>
    required_interactions?: MalfunctionListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    event_template_id?: SortOrder
    started_at?: SortOrder
    event_template?: EventTemplateOrderByWithRelationInput
    required_interactions?: MalfunctionOrderByRelationAggregateInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    event_template_id?: IntFilter<"Event"> | number
    started_at?: DateTimeFilter<"Event"> | Date | string
    event_template?: XOR<EventTemplateScalarRelationFilter, EventTemplateWhereInput>
    required_interactions?: MalfunctionListRelationFilter
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    event_template_id?: SortOrder
    started_at?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Event"> | number
    event_template_id?: IntWithAggregatesFilter<"Event"> | number
    started_at?: DateTimeWithAggregatesFilter<"Event"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    profession: string
    fraction: $Enums.Fraction
    navigation_skill: number
    military_skill: number
    engineering_skill: number
    bureaucracy_skill: number
    service_skill: number
    status?: $Enums.UserStatus
    finished_interactions?: MalfunctionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    profession: string
    fraction: $Enums.Fraction
    navigation_skill: number
    military_skill: number
    engineering_skill: number
    bureaucracy_skill: number
    service_skill: number
    status?: $Enums.UserStatus
    finished_interactions?: MalfunctionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    fraction?: EnumFractionFieldUpdateOperationsInput | $Enums.Fraction
    navigation_skill?: IntFieldUpdateOperationsInput | number
    military_skill?: IntFieldUpdateOperationsInput | number
    engineering_skill?: IntFieldUpdateOperationsInput | number
    bureaucracy_skill?: IntFieldUpdateOperationsInput | number
    service_skill?: IntFieldUpdateOperationsInput | number
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    finished_interactions?: MalfunctionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    fraction?: EnumFractionFieldUpdateOperationsInput | $Enums.Fraction
    navigation_skill?: IntFieldUpdateOperationsInput | number
    military_skill?: IntFieldUpdateOperationsInput | number
    engineering_skill?: IntFieldUpdateOperationsInput | number
    bureaucracy_skill?: IntFieldUpdateOperationsInput | number
    service_skill?: IntFieldUpdateOperationsInput | number
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    finished_interactions?: MalfunctionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    profession: string
    fraction: $Enums.Fraction
    navigation_skill: number
    military_skill: number
    engineering_skill: number
    bureaucracy_skill: number
    service_skill: number
    status?: $Enums.UserStatus
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    fraction?: EnumFractionFieldUpdateOperationsInput | $Enums.Fraction
    navigation_skill?: IntFieldUpdateOperationsInput | number
    military_skill?: IntFieldUpdateOperationsInput | number
    engineering_skill?: IntFieldUpdateOperationsInput | number
    bureaucracy_skill?: IntFieldUpdateOperationsInput | number
    service_skill?: IntFieldUpdateOperationsInput | number
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    fraction?: EnumFractionFieldUpdateOperationsInput | $Enums.Fraction
    navigation_skill?: IntFieldUpdateOperationsInput | number
    military_skill?: IntFieldUpdateOperationsInput | number
    engineering_skill?: IntFieldUpdateOperationsInput | number
    bureaucracy_skill?: IntFieldUpdateOperationsInput | number
    service_skill?: IntFieldUpdateOperationsInput | number
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
  }

  export type SectionCreateInput = {
    code: $Enums.SectionCode
    name: string
    description: string
    skill: $Enums.Skills
    systems?: SystemCreateNestedManyWithoutSectionInput
  }

  export type SectionUncheckedCreateInput = {
    id?: number
    code: $Enums.SectionCode
    name: string
    description: string
    skill: $Enums.Skills
    systems?: SystemUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionUpdateInput = {
    code?: EnumSectionCodeFieldUpdateOperationsInput | $Enums.SectionCode
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    skill?: EnumSkillsFieldUpdateOperationsInput | $Enums.Skills
    systems?: SystemUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: EnumSectionCodeFieldUpdateOperationsInput | $Enums.SectionCode
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    skill?: EnumSkillsFieldUpdateOperationsInput | $Enums.Skills
    systems?: SystemUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type SectionCreateManyInput = {
    id?: number
    code: $Enums.SectionCode
    name: string
    description: string
    skill: $Enums.Skills
  }

  export type SectionUpdateManyMutationInput = {
    code?: EnumSectionCodeFieldUpdateOperationsInput | $Enums.SectionCode
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    skill?: EnumSkillsFieldUpdateOperationsInput | $Enums.Skills
  }

  export type SectionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: EnumSectionCodeFieldUpdateOperationsInput | $Enums.SectionCode
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    skill?: EnumSkillsFieldUpdateOperationsInput | $Enums.Skills
  }

  export type SystemCreateInput = {
    name: string
    description: string
    durability?: number
    section: SectionCreateNestedOneWithoutSystemsInput
    interactions?: InteractionCreateNestedManyWithoutSystemInput
    malfunctions?: MalfunctionCreateNestedManyWithoutSystemInput
  }

  export type SystemUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    durability?: number
    section_code: $Enums.SectionCode
    interactions?: InteractionUncheckedCreateNestedManyWithoutSystemInput
    malfunctions?: MalfunctionUncheckedCreateNestedManyWithoutSystemInput
  }

  export type SystemUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    durability?: IntFieldUpdateOperationsInput | number
    section?: SectionUpdateOneRequiredWithoutSystemsNestedInput
    interactions?: InteractionUpdateManyWithoutSystemNestedInput
    malfunctions?: MalfunctionUpdateManyWithoutSystemNestedInput
  }

  export type SystemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    durability?: IntFieldUpdateOperationsInput | number
    section_code?: EnumSectionCodeFieldUpdateOperationsInput | $Enums.SectionCode
    interactions?: InteractionUncheckedUpdateManyWithoutSystemNestedInput
    malfunctions?: MalfunctionUncheckedUpdateManyWithoutSystemNestedInput
  }

  export type SystemCreateManyInput = {
    id?: number
    name: string
    description: string
    durability?: number
    section_code: $Enums.SectionCode
  }

  export type SystemUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    durability?: IntFieldUpdateOperationsInput | number
  }

  export type SystemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    durability?: IntFieldUpdateOperationsInput | number
    section_code?: EnumSectionCodeFieldUpdateOperationsInput | $Enums.SectionCode
  }

  export type InteractionCreateInput = {
    name: string
    description: string
    skill?: $Enums.Skills | null
    type: $Enums.InteractionType
    malfunction: string
    system: SystemCreateNestedOneWithoutInteractionsInput
    possible_events?: EventTemplateCreateNestedManyWithoutAllowed_interactionsInput
    required_interactions?: MalfunctionCreateNestedManyWithoutInteractionInput
  }

  export type InteractionUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    skill?: $Enums.Skills | null
    type: $Enums.InteractionType
    malfunction: string
    system_id: number
    possible_events?: EventTemplateUncheckedCreateNestedManyWithoutAllowed_interactionsInput
    required_interactions?: MalfunctionUncheckedCreateNestedManyWithoutInteractionInput
  }

  export type InteractionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    skill?: NullableEnumSkillsFieldUpdateOperationsInput | $Enums.Skills | null
    type?: EnumInteractionTypeFieldUpdateOperationsInput | $Enums.InteractionType
    malfunction?: StringFieldUpdateOperationsInput | string
    system?: SystemUpdateOneRequiredWithoutInteractionsNestedInput
    possible_events?: EventTemplateUpdateManyWithoutAllowed_interactionsNestedInput
    required_interactions?: MalfunctionUpdateManyWithoutInteractionNestedInput
  }

  export type InteractionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    skill?: NullableEnumSkillsFieldUpdateOperationsInput | $Enums.Skills | null
    type?: EnumInteractionTypeFieldUpdateOperationsInput | $Enums.InteractionType
    malfunction?: StringFieldUpdateOperationsInput | string
    system_id?: IntFieldUpdateOperationsInput | number
    possible_events?: EventTemplateUncheckedUpdateManyWithoutAllowed_interactionsNestedInput
    required_interactions?: MalfunctionUncheckedUpdateManyWithoutInteractionNestedInput
  }

  export type InteractionCreateManyInput = {
    id?: number
    name: string
    description: string
    skill?: $Enums.Skills | null
    type: $Enums.InteractionType
    malfunction: string
    system_id: number
  }

  export type InteractionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    skill?: NullableEnumSkillsFieldUpdateOperationsInput | $Enums.Skills | null
    type?: EnumInteractionTypeFieldUpdateOperationsInput | $Enums.InteractionType
    malfunction?: StringFieldUpdateOperationsInput | string
  }

  export type InteractionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    skill?: NullableEnumSkillsFieldUpdateOperationsInput | $Enums.Skills | null
    type?: EnumInteractionTypeFieldUpdateOperationsInput | $Enums.InteractionType
    malfunction?: StringFieldUpdateOperationsInput | string
    system_id?: IntFieldUpdateOperationsInput | number
  }

  export type EventTemplateCreateInput = {
    name: string
    cause: $Enums.EventCause
    allowed_interactions?: InteractionCreateNestedManyWithoutPossible_eventsInput
    event_template?: EventCreateNestedManyWithoutEvent_templateInput
  }

  export type EventTemplateUncheckedCreateInput = {
    id?: number
    name: string
    cause: $Enums.EventCause
    allowed_interactions?: InteractionUncheckedCreateNestedManyWithoutPossible_eventsInput
    event_template?: EventUncheckedCreateNestedManyWithoutEvent_templateInput
  }

  export type EventTemplateUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    cause?: EnumEventCauseFieldUpdateOperationsInput | $Enums.EventCause
    allowed_interactions?: InteractionUpdateManyWithoutPossible_eventsNestedInput
    event_template?: EventUpdateManyWithoutEvent_templateNestedInput
  }

  export type EventTemplateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cause?: EnumEventCauseFieldUpdateOperationsInput | $Enums.EventCause
    allowed_interactions?: InteractionUncheckedUpdateManyWithoutPossible_eventsNestedInput
    event_template?: EventUncheckedUpdateManyWithoutEvent_templateNestedInput
  }

  export type EventTemplateCreateManyInput = {
    id?: number
    name: string
    cause: $Enums.EventCause
  }

  export type EventTemplateUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    cause?: EnumEventCauseFieldUpdateOperationsInput | $Enums.EventCause
  }

  export type EventTemplateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cause?: EnumEventCauseFieldUpdateOperationsInput | $Enums.EventCause
  }

  export type MalfunctionCreateInput = {
    status?: $Enums.MalfunctionStatus
    started_at?: Date | string
    last_updated?: Date | string
    event: EventCreateNestedOneWithoutRequired_interactionsInput
    interaction: InteractionCreateNestedOneWithoutRequired_interactionsInput
    user: UserCreateNestedOneWithoutFinished_interactionsInput
    system: SystemCreateNestedOneWithoutMalfunctionsInput
  }

  export type MalfunctionUncheckedCreateInput = {
    id?: number
    event_id: number
    interaction_id: number
    user_id: number
    status?: $Enums.MalfunctionStatus
    started_at?: Date | string
    last_updated?: Date | string
    system_id: number
  }

  export type MalfunctionUpdateInput = {
    status?: EnumMalfunctionStatusFieldUpdateOperationsInput | $Enums.MalfunctionStatus
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutRequired_interactionsNestedInput
    interaction?: InteractionUpdateOneRequiredWithoutRequired_interactionsNestedInput
    user?: UserUpdateOneRequiredWithoutFinished_interactionsNestedInput
    system?: SystemUpdateOneRequiredWithoutMalfunctionsNestedInput
  }

  export type MalfunctionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    interaction_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    status?: EnumMalfunctionStatusFieldUpdateOperationsInput | $Enums.MalfunctionStatus
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    system_id?: IntFieldUpdateOperationsInput | number
  }

  export type MalfunctionCreateManyInput = {
    id?: number
    event_id: number
    interaction_id: number
    user_id: number
    status?: $Enums.MalfunctionStatus
    started_at?: Date | string
    last_updated?: Date | string
    system_id: number
  }

  export type MalfunctionUpdateManyMutationInput = {
    status?: EnumMalfunctionStatusFieldUpdateOperationsInput | $Enums.MalfunctionStatus
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MalfunctionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    interaction_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    status?: EnumMalfunctionStatusFieldUpdateOperationsInput | $Enums.MalfunctionStatus
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    system_id?: IntFieldUpdateOperationsInput | number
  }

  export type EventCreateInput = {
    started_at?: Date | string
    event_template: EventTemplateCreateNestedOneWithoutEvent_templateInput
    required_interactions?: MalfunctionCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: number
    event_template_id: number
    started_at?: Date | string
    required_interactions?: MalfunctionUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event_template?: EventTemplateUpdateOneRequiredWithoutEvent_templateNestedInput
    required_interactions?: MalfunctionUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_template_id?: IntFieldUpdateOperationsInput | number
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    required_interactions?: MalfunctionUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: number
    event_template_id: number
    started_at?: Date | string
  }

  export type EventUpdateManyMutationInput = {
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_template_id?: IntFieldUpdateOperationsInput | number
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumFractionFilter<$PrismaModel = never> = {
    equals?: $Enums.Fraction | EnumFractionFieldRefInput<$PrismaModel>
    in?: $Enums.Fraction[] | ListEnumFractionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Fraction[] | ListEnumFractionFieldRefInput<$PrismaModel>
    not?: NestedEnumFractionFilter<$PrismaModel> | $Enums.Fraction
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type MalfunctionListRelationFilter = {
    every?: MalfunctionWhereInput
    some?: MalfunctionWhereInput
    none?: MalfunctionWhereInput
  }

  export type MalfunctionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    profession?: SortOrder
    fraction?: SortOrder
    navigation_skill?: SortOrder
    military_skill?: SortOrder
    engineering_skill?: SortOrder
    bureaucracy_skill?: SortOrder
    service_skill?: SortOrder
    status?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    navigation_skill?: SortOrder
    military_skill?: SortOrder
    engineering_skill?: SortOrder
    bureaucracy_skill?: SortOrder
    service_skill?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    profession?: SortOrder
    fraction?: SortOrder
    navigation_skill?: SortOrder
    military_skill?: SortOrder
    engineering_skill?: SortOrder
    bureaucracy_skill?: SortOrder
    service_skill?: SortOrder
    status?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    profession?: SortOrder
    fraction?: SortOrder
    navigation_skill?: SortOrder
    military_skill?: SortOrder
    engineering_skill?: SortOrder
    bureaucracy_skill?: SortOrder
    service_skill?: SortOrder
    status?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    navigation_skill?: SortOrder
    military_skill?: SortOrder
    engineering_skill?: SortOrder
    bureaucracy_skill?: SortOrder
    service_skill?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumFractionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Fraction | EnumFractionFieldRefInput<$PrismaModel>
    in?: $Enums.Fraction[] | ListEnumFractionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Fraction[] | ListEnumFractionFieldRefInput<$PrismaModel>
    not?: NestedEnumFractionWithAggregatesFilter<$PrismaModel> | $Enums.Fraction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFractionFilter<$PrismaModel>
    _max?: NestedEnumFractionFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type EnumSectionCodeFilter<$PrismaModel = never> = {
    equals?: $Enums.SectionCode | EnumSectionCodeFieldRefInput<$PrismaModel>
    in?: $Enums.SectionCode[] | ListEnumSectionCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SectionCode[] | ListEnumSectionCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumSectionCodeFilter<$PrismaModel> | $Enums.SectionCode
  }

  export type EnumSkillsFilter<$PrismaModel = never> = {
    equals?: $Enums.Skills | EnumSkillsFieldRefInput<$PrismaModel>
    in?: $Enums.Skills[] | ListEnumSkillsFieldRefInput<$PrismaModel>
    notIn?: $Enums.Skills[] | ListEnumSkillsFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillsFilter<$PrismaModel> | $Enums.Skills
  }

  export type SystemListRelationFilter = {
    every?: SystemWhereInput
    some?: SystemWhereInput
    none?: SystemWhereInput
  }

  export type SystemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SectionCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    skill?: SortOrder
  }

  export type SectionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SectionMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    skill?: SortOrder
  }

  export type SectionMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    skill?: SortOrder
  }

  export type SectionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumSectionCodeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SectionCode | EnumSectionCodeFieldRefInput<$PrismaModel>
    in?: $Enums.SectionCode[] | ListEnumSectionCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SectionCode[] | ListEnumSectionCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumSectionCodeWithAggregatesFilter<$PrismaModel> | $Enums.SectionCode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSectionCodeFilter<$PrismaModel>
    _max?: NestedEnumSectionCodeFilter<$PrismaModel>
  }

  export type EnumSkillsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Skills | EnumSkillsFieldRefInput<$PrismaModel>
    in?: $Enums.Skills[] | ListEnumSkillsFieldRefInput<$PrismaModel>
    notIn?: $Enums.Skills[] | ListEnumSkillsFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillsWithAggregatesFilter<$PrismaModel> | $Enums.Skills
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSkillsFilter<$PrismaModel>
    _max?: NestedEnumSkillsFilter<$PrismaModel>
  }

  export type SectionScalarRelationFilter = {
    is?: SectionWhereInput
    isNot?: SectionWhereInput
  }

  export type InteractionListRelationFilter = {
    every?: InteractionWhereInput
    some?: InteractionWhereInput
    none?: InteractionWhereInput
  }

  export type InteractionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SystemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    durability?: SortOrder
    section_code?: SortOrder
  }

  export type SystemAvgOrderByAggregateInput = {
    id?: SortOrder
    durability?: SortOrder
  }

  export type SystemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    durability?: SortOrder
    section_code?: SortOrder
  }

  export type SystemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    durability?: SortOrder
    section_code?: SortOrder
  }

  export type SystemSumOrderByAggregateInput = {
    id?: SortOrder
    durability?: SortOrder
  }

  export type EnumSkillsNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Skills | EnumSkillsFieldRefInput<$PrismaModel> | null
    in?: $Enums.Skills[] | ListEnumSkillsFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Skills[] | ListEnumSkillsFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSkillsNullableFilter<$PrismaModel> | $Enums.Skills | null
  }

  export type EnumInteractionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.InteractionType | EnumInteractionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InteractionType[] | ListEnumInteractionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InteractionType[] | ListEnumInteractionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInteractionTypeFilter<$PrismaModel> | $Enums.InteractionType
  }

  export type SystemScalarRelationFilter = {
    is?: SystemWhereInput
    isNot?: SystemWhereInput
  }

  export type EventTemplateListRelationFilter = {
    every?: EventTemplateWhereInput
    some?: EventTemplateWhereInput
    none?: EventTemplateWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EventTemplateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InteractionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    skill?: SortOrder
    type?: SortOrder
    malfunction?: SortOrder
    system_id?: SortOrder
  }

  export type InteractionAvgOrderByAggregateInput = {
    id?: SortOrder
    system_id?: SortOrder
  }

  export type InteractionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    skill?: SortOrder
    type?: SortOrder
    malfunction?: SortOrder
    system_id?: SortOrder
  }

  export type InteractionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    skill?: SortOrder
    type?: SortOrder
    malfunction?: SortOrder
    system_id?: SortOrder
  }

  export type InteractionSumOrderByAggregateInput = {
    id?: SortOrder
    system_id?: SortOrder
  }

  export type EnumSkillsNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Skills | EnumSkillsFieldRefInput<$PrismaModel> | null
    in?: $Enums.Skills[] | ListEnumSkillsFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Skills[] | ListEnumSkillsFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSkillsNullableWithAggregatesFilter<$PrismaModel> | $Enums.Skills | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSkillsNullableFilter<$PrismaModel>
    _max?: NestedEnumSkillsNullableFilter<$PrismaModel>
  }

  export type EnumInteractionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InteractionType | EnumInteractionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InteractionType[] | ListEnumInteractionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InteractionType[] | ListEnumInteractionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInteractionTypeWithAggregatesFilter<$PrismaModel> | $Enums.InteractionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInteractionTypeFilter<$PrismaModel>
    _max?: NestedEnumInteractionTypeFilter<$PrismaModel>
  }

  export type EnumEventCauseFilter<$PrismaModel = never> = {
    equals?: $Enums.EventCause | EnumEventCauseFieldRefInput<$PrismaModel>
    in?: $Enums.EventCause[] | ListEnumEventCauseFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventCause[] | ListEnumEventCauseFieldRefInput<$PrismaModel>
    not?: NestedEnumEventCauseFilter<$PrismaModel> | $Enums.EventCause
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cause?: SortOrder
  }

  export type EventTemplateAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EventTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cause?: SortOrder
  }

  export type EventTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cause?: SortOrder
  }

  export type EventTemplateSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumEventCauseWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventCause | EnumEventCauseFieldRefInput<$PrismaModel>
    in?: $Enums.EventCause[] | ListEnumEventCauseFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventCause[] | ListEnumEventCauseFieldRefInput<$PrismaModel>
    not?: NestedEnumEventCauseWithAggregatesFilter<$PrismaModel> | $Enums.EventCause
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventCauseFilter<$PrismaModel>
    _max?: NestedEnumEventCauseFilter<$PrismaModel>
  }

  export type EnumMalfunctionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MalfunctionStatus | EnumMalfunctionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MalfunctionStatus[] | ListEnumMalfunctionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MalfunctionStatus[] | ListEnumMalfunctionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMalfunctionStatusFilter<$PrismaModel> | $Enums.MalfunctionStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EventScalarRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type InteractionScalarRelationFilter = {
    is?: InteractionWhereInput
    isNot?: InteractionWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MalfunctionCountOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    interaction_id?: SortOrder
    user_id?: SortOrder
    status?: SortOrder
    started_at?: SortOrder
    last_updated?: SortOrder
    system_id?: SortOrder
  }

  export type MalfunctionAvgOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    interaction_id?: SortOrder
    user_id?: SortOrder
    system_id?: SortOrder
  }

  export type MalfunctionMaxOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    interaction_id?: SortOrder
    user_id?: SortOrder
    status?: SortOrder
    started_at?: SortOrder
    last_updated?: SortOrder
    system_id?: SortOrder
  }

  export type MalfunctionMinOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    interaction_id?: SortOrder
    user_id?: SortOrder
    status?: SortOrder
    started_at?: SortOrder
    last_updated?: SortOrder
    system_id?: SortOrder
  }

  export type MalfunctionSumOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    interaction_id?: SortOrder
    user_id?: SortOrder
    system_id?: SortOrder
  }

  export type EnumMalfunctionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MalfunctionStatus | EnumMalfunctionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MalfunctionStatus[] | ListEnumMalfunctionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MalfunctionStatus[] | ListEnumMalfunctionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMalfunctionStatusWithAggregatesFilter<$PrismaModel> | $Enums.MalfunctionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMalfunctionStatusFilter<$PrismaModel>
    _max?: NestedEnumMalfunctionStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EventTemplateScalarRelationFilter = {
    is?: EventTemplateWhereInput
    isNot?: EventTemplateWhereInput
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    event_template_id?: SortOrder
    started_at?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    id?: SortOrder
    event_template_id?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    event_template_id?: SortOrder
    started_at?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    event_template_id?: SortOrder
    started_at?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    id?: SortOrder
    event_template_id?: SortOrder
  }

  export type MalfunctionCreateNestedManyWithoutUserInput = {
    create?: XOR<MalfunctionCreateWithoutUserInput, MalfunctionUncheckedCreateWithoutUserInput> | MalfunctionCreateWithoutUserInput[] | MalfunctionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MalfunctionCreateOrConnectWithoutUserInput | MalfunctionCreateOrConnectWithoutUserInput[]
    createMany?: MalfunctionCreateManyUserInputEnvelope
    connect?: MalfunctionWhereUniqueInput | MalfunctionWhereUniqueInput[]
  }

  export type MalfunctionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MalfunctionCreateWithoutUserInput, MalfunctionUncheckedCreateWithoutUserInput> | MalfunctionCreateWithoutUserInput[] | MalfunctionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MalfunctionCreateOrConnectWithoutUserInput | MalfunctionCreateOrConnectWithoutUserInput[]
    createMany?: MalfunctionCreateManyUserInputEnvelope
    connect?: MalfunctionWhereUniqueInput | MalfunctionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumFractionFieldUpdateOperationsInput = {
    set?: $Enums.Fraction
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type MalfunctionUpdateManyWithoutUserNestedInput = {
    create?: XOR<MalfunctionCreateWithoutUserInput, MalfunctionUncheckedCreateWithoutUserInput> | MalfunctionCreateWithoutUserInput[] | MalfunctionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MalfunctionCreateOrConnectWithoutUserInput | MalfunctionCreateOrConnectWithoutUserInput[]
    upsert?: MalfunctionUpsertWithWhereUniqueWithoutUserInput | MalfunctionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MalfunctionCreateManyUserInputEnvelope
    set?: MalfunctionWhereUniqueInput | MalfunctionWhereUniqueInput[]
    disconnect?: MalfunctionWhereUniqueInput | MalfunctionWhereUniqueInput[]
    delete?: MalfunctionWhereUniqueInput | MalfunctionWhereUniqueInput[]
    connect?: MalfunctionWhereUniqueInput | MalfunctionWhereUniqueInput[]
    update?: MalfunctionUpdateWithWhereUniqueWithoutUserInput | MalfunctionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MalfunctionUpdateManyWithWhereWithoutUserInput | MalfunctionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MalfunctionScalarWhereInput | MalfunctionScalarWhereInput[]
  }

  export type MalfunctionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MalfunctionCreateWithoutUserInput, MalfunctionUncheckedCreateWithoutUserInput> | MalfunctionCreateWithoutUserInput[] | MalfunctionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MalfunctionCreateOrConnectWithoutUserInput | MalfunctionCreateOrConnectWithoutUserInput[]
    upsert?: MalfunctionUpsertWithWhereUniqueWithoutUserInput | MalfunctionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MalfunctionCreateManyUserInputEnvelope
    set?: MalfunctionWhereUniqueInput | MalfunctionWhereUniqueInput[]
    disconnect?: MalfunctionWhereUniqueInput | MalfunctionWhereUniqueInput[]
    delete?: MalfunctionWhereUniqueInput | MalfunctionWhereUniqueInput[]
    connect?: MalfunctionWhereUniqueInput | MalfunctionWhereUniqueInput[]
    update?: MalfunctionUpdateWithWhereUniqueWithoutUserInput | MalfunctionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MalfunctionUpdateManyWithWhereWithoutUserInput | MalfunctionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MalfunctionScalarWhereInput | MalfunctionScalarWhereInput[]
  }

  export type SystemCreateNestedManyWithoutSectionInput = {
    create?: XOR<SystemCreateWithoutSectionInput, SystemUncheckedCreateWithoutSectionInput> | SystemCreateWithoutSectionInput[] | SystemUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: SystemCreateOrConnectWithoutSectionInput | SystemCreateOrConnectWithoutSectionInput[]
    createMany?: SystemCreateManySectionInputEnvelope
    connect?: SystemWhereUniqueInput | SystemWhereUniqueInput[]
  }

  export type SystemUncheckedCreateNestedManyWithoutSectionInput = {
    create?: XOR<SystemCreateWithoutSectionInput, SystemUncheckedCreateWithoutSectionInput> | SystemCreateWithoutSectionInput[] | SystemUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: SystemCreateOrConnectWithoutSectionInput | SystemCreateOrConnectWithoutSectionInput[]
    createMany?: SystemCreateManySectionInputEnvelope
    connect?: SystemWhereUniqueInput | SystemWhereUniqueInput[]
  }

  export type EnumSectionCodeFieldUpdateOperationsInput = {
    set?: $Enums.SectionCode
  }

  export type EnumSkillsFieldUpdateOperationsInput = {
    set?: $Enums.Skills
  }

  export type SystemUpdateManyWithoutSectionNestedInput = {
    create?: XOR<SystemCreateWithoutSectionInput, SystemUncheckedCreateWithoutSectionInput> | SystemCreateWithoutSectionInput[] | SystemUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: SystemCreateOrConnectWithoutSectionInput | SystemCreateOrConnectWithoutSectionInput[]
    upsert?: SystemUpsertWithWhereUniqueWithoutSectionInput | SystemUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: SystemCreateManySectionInputEnvelope
    set?: SystemWhereUniqueInput | SystemWhereUniqueInput[]
    disconnect?: SystemWhereUniqueInput | SystemWhereUniqueInput[]
    delete?: SystemWhereUniqueInput | SystemWhereUniqueInput[]
    connect?: SystemWhereUniqueInput | SystemWhereUniqueInput[]
    update?: SystemUpdateWithWhereUniqueWithoutSectionInput | SystemUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: SystemUpdateManyWithWhereWithoutSectionInput | SystemUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: SystemScalarWhereInput | SystemScalarWhereInput[]
  }

  export type SystemUncheckedUpdateManyWithoutSectionNestedInput = {
    create?: XOR<SystemCreateWithoutSectionInput, SystemUncheckedCreateWithoutSectionInput> | SystemCreateWithoutSectionInput[] | SystemUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: SystemCreateOrConnectWithoutSectionInput | SystemCreateOrConnectWithoutSectionInput[]
    upsert?: SystemUpsertWithWhereUniqueWithoutSectionInput | SystemUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: SystemCreateManySectionInputEnvelope
    set?: SystemWhereUniqueInput | SystemWhereUniqueInput[]
    disconnect?: SystemWhereUniqueInput | SystemWhereUniqueInput[]
    delete?: SystemWhereUniqueInput | SystemWhereUniqueInput[]
    connect?: SystemWhereUniqueInput | SystemWhereUniqueInput[]
    update?: SystemUpdateWithWhereUniqueWithoutSectionInput | SystemUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: SystemUpdateManyWithWhereWithoutSectionInput | SystemUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: SystemScalarWhereInput | SystemScalarWhereInput[]
  }

  export type SectionCreateNestedOneWithoutSystemsInput = {
    create?: XOR<SectionCreateWithoutSystemsInput, SectionUncheckedCreateWithoutSystemsInput>
    connectOrCreate?: SectionCreateOrConnectWithoutSystemsInput
    connect?: SectionWhereUniqueInput
  }

  export type InteractionCreateNestedManyWithoutSystemInput = {
    create?: XOR<InteractionCreateWithoutSystemInput, InteractionUncheckedCreateWithoutSystemInput> | InteractionCreateWithoutSystemInput[] | InteractionUncheckedCreateWithoutSystemInput[]
    connectOrCreate?: InteractionCreateOrConnectWithoutSystemInput | InteractionCreateOrConnectWithoutSystemInput[]
    createMany?: InteractionCreateManySystemInputEnvelope
    connect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
  }

  export type MalfunctionCreateNestedManyWithoutSystemInput = {
    create?: XOR<MalfunctionCreateWithoutSystemInput, MalfunctionUncheckedCreateWithoutSystemInput> | MalfunctionCreateWithoutSystemInput[] | MalfunctionUncheckedCreateWithoutSystemInput[]
    connectOrCreate?: MalfunctionCreateOrConnectWithoutSystemInput | MalfunctionCreateOrConnectWithoutSystemInput[]
    createMany?: MalfunctionCreateManySystemInputEnvelope
    connect?: MalfunctionWhereUniqueInput | MalfunctionWhereUniqueInput[]
  }

  export type InteractionUncheckedCreateNestedManyWithoutSystemInput = {
    create?: XOR<InteractionCreateWithoutSystemInput, InteractionUncheckedCreateWithoutSystemInput> | InteractionCreateWithoutSystemInput[] | InteractionUncheckedCreateWithoutSystemInput[]
    connectOrCreate?: InteractionCreateOrConnectWithoutSystemInput | InteractionCreateOrConnectWithoutSystemInput[]
    createMany?: InteractionCreateManySystemInputEnvelope
    connect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
  }

  export type MalfunctionUncheckedCreateNestedManyWithoutSystemInput = {
    create?: XOR<MalfunctionCreateWithoutSystemInput, MalfunctionUncheckedCreateWithoutSystemInput> | MalfunctionCreateWithoutSystemInput[] | MalfunctionUncheckedCreateWithoutSystemInput[]
    connectOrCreate?: MalfunctionCreateOrConnectWithoutSystemInput | MalfunctionCreateOrConnectWithoutSystemInput[]
    createMany?: MalfunctionCreateManySystemInputEnvelope
    connect?: MalfunctionWhereUniqueInput | MalfunctionWhereUniqueInput[]
  }

  export type SectionUpdateOneRequiredWithoutSystemsNestedInput = {
    create?: XOR<SectionCreateWithoutSystemsInput, SectionUncheckedCreateWithoutSystemsInput>
    connectOrCreate?: SectionCreateOrConnectWithoutSystemsInput
    upsert?: SectionUpsertWithoutSystemsInput
    connect?: SectionWhereUniqueInput
    update?: XOR<XOR<SectionUpdateToOneWithWhereWithoutSystemsInput, SectionUpdateWithoutSystemsInput>, SectionUncheckedUpdateWithoutSystemsInput>
  }

  export type InteractionUpdateManyWithoutSystemNestedInput = {
    create?: XOR<InteractionCreateWithoutSystemInput, InteractionUncheckedCreateWithoutSystemInput> | InteractionCreateWithoutSystemInput[] | InteractionUncheckedCreateWithoutSystemInput[]
    connectOrCreate?: InteractionCreateOrConnectWithoutSystemInput | InteractionCreateOrConnectWithoutSystemInput[]
    upsert?: InteractionUpsertWithWhereUniqueWithoutSystemInput | InteractionUpsertWithWhereUniqueWithoutSystemInput[]
    createMany?: InteractionCreateManySystemInputEnvelope
    set?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    disconnect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    delete?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    connect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    update?: InteractionUpdateWithWhereUniqueWithoutSystemInput | InteractionUpdateWithWhereUniqueWithoutSystemInput[]
    updateMany?: InteractionUpdateManyWithWhereWithoutSystemInput | InteractionUpdateManyWithWhereWithoutSystemInput[]
    deleteMany?: InteractionScalarWhereInput | InteractionScalarWhereInput[]
  }

  export type MalfunctionUpdateManyWithoutSystemNestedInput = {
    create?: XOR<MalfunctionCreateWithoutSystemInput, MalfunctionUncheckedCreateWithoutSystemInput> | MalfunctionCreateWithoutSystemInput[] | MalfunctionUncheckedCreateWithoutSystemInput[]
    connectOrCreate?: MalfunctionCreateOrConnectWithoutSystemInput | MalfunctionCreateOrConnectWithoutSystemInput[]
    upsert?: MalfunctionUpsertWithWhereUniqueWithoutSystemInput | MalfunctionUpsertWithWhereUniqueWithoutSystemInput[]
    createMany?: MalfunctionCreateManySystemInputEnvelope
    set?: MalfunctionWhereUniqueInput | MalfunctionWhereUniqueInput[]
    disconnect?: MalfunctionWhereUniqueInput | MalfunctionWhereUniqueInput[]
    delete?: MalfunctionWhereUniqueInput | MalfunctionWhereUniqueInput[]
    connect?: MalfunctionWhereUniqueInput | MalfunctionWhereUniqueInput[]
    update?: MalfunctionUpdateWithWhereUniqueWithoutSystemInput | MalfunctionUpdateWithWhereUniqueWithoutSystemInput[]
    updateMany?: MalfunctionUpdateManyWithWhereWithoutSystemInput | MalfunctionUpdateManyWithWhereWithoutSystemInput[]
    deleteMany?: MalfunctionScalarWhereInput | MalfunctionScalarWhereInput[]
  }

  export type InteractionUncheckedUpdateManyWithoutSystemNestedInput = {
    create?: XOR<InteractionCreateWithoutSystemInput, InteractionUncheckedCreateWithoutSystemInput> | InteractionCreateWithoutSystemInput[] | InteractionUncheckedCreateWithoutSystemInput[]
    connectOrCreate?: InteractionCreateOrConnectWithoutSystemInput | InteractionCreateOrConnectWithoutSystemInput[]
    upsert?: InteractionUpsertWithWhereUniqueWithoutSystemInput | InteractionUpsertWithWhereUniqueWithoutSystemInput[]
    createMany?: InteractionCreateManySystemInputEnvelope
    set?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    disconnect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    delete?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    connect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    update?: InteractionUpdateWithWhereUniqueWithoutSystemInput | InteractionUpdateWithWhereUniqueWithoutSystemInput[]
    updateMany?: InteractionUpdateManyWithWhereWithoutSystemInput | InteractionUpdateManyWithWhereWithoutSystemInput[]
    deleteMany?: InteractionScalarWhereInput | InteractionScalarWhereInput[]
  }

  export type MalfunctionUncheckedUpdateManyWithoutSystemNestedInput = {
    create?: XOR<MalfunctionCreateWithoutSystemInput, MalfunctionUncheckedCreateWithoutSystemInput> | MalfunctionCreateWithoutSystemInput[] | MalfunctionUncheckedCreateWithoutSystemInput[]
    connectOrCreate?: MalfunctionCreateOrConnectWithoutSystemInput | MalfunctionCreateOrConnectWithoutSystemInput[]
    upsert?: MalfunctionUpsertWithWhereUniqueWithoutSystemInput | MalfunctionUpsertWithWhereUniqueWithoutSystemInput[]
    createMany?: MalfunctionCreateManySystemInputEnvelope
    set?: MalfunctionWhereUniqueInput | MalfunctionWhereUniqueInput[]
    disconnect?: MalfunctionWhereUniqueInput | MalfunctionWhereUniqueInput[]
    delete?: MalfunctionWhereUniqueInput | MalfunctionWhereUniqueInput[]
    connect?: MalfunctionWhereUniqueInput | MalfunctionWhereUniqueInput[]
    update?: MalfunctionUpdateWithWhereUniqueWithoutSystemInput | MalfunctionUpdateWithWhereUniqueWithoutSystemInput[]
    updateMany?: MalfunctionUpdateManyWithWhereWithoutSystemInput | MalfunctionUpdateManyWithWhereWithoutSystemInput[]
    deleteMany?: MalfunctionScalarWhereInput | MalfunctionScalarWhereInput[]
  }

  export type SystemCreateNestedOneWithoutInteractionsInput = {
    create?: XOR<SystemCreateWithoutInteractionsInput, SystemUncheckedCreateWithoutInteractionsInput>
    connectOrCreate?: SystemCreateOrConnectWithoutInteractionsInput
    connect?: SystemWhereUniqueInput
  }

  export type EventTemplateCreateNestedManyWithoutAllowed_interactionsInput = {
    create?: XOR<EventTemplateCreateWithoutAllowed_interactionsInput, EventTemplateUncheckedCreateWithoutAllowed_interactionsInput> | EventTemplateCreateWithoutAllowed_interactionsInput[] | EventTemplateUncheckedCreateWithoutAllowed_interactionsInput[]
    connectOrCreate?: EventTemplateCreateOrConnectWithoutAllowed_interactionsInput | EventTemplateCreateOrConnectWithoutAllowed_interactionsInput[]
    connect?: EventTemplateWhereUniqueInput | EventTemplateWhereUniqueInput[]
  }

  export type MalfunctionCreateNestedManyWithoutInteractionInput = {
    create?: XOR<MalfunctionCreateWithoutInteractionInput, MalfunctionUncheckedCreateWithoutInteractionInput> | MalfunctionCreateWithoutInteractionInput[] | MalfunctionUncheckedCreateWithoutInteractionInput[]
    connectOrCreate?: MalfunctionCreateOrConnectWithoutInteractionInput | MalfunctionCreateOrConnectWithoutInteractionInput[]
    createMany?: MalfunctionCreateManyInteractionInputEnvelope
    connect?: MalfunctionWhereUniqueInput | MalfunctionWhereUniqueInput[]
  }

  export type EventTemplateUncheckedCreateNestedManyWithoutAllowed_interactionsInput = {
    create?: XOR<EventTemplateCreateWithoutAllowed_interactionsInput, EventTemplateUncheckedCreateWithoutAllowed_interactionsInput> | EventTemplateCreateWithoutAllowed_interactionsInput[] | EventTemplateUncheckedCreateWithoutAllowed_interactionsInput[]
    connectOrCreate?: EventTemplateCreateOrConnectWithoutAllowed_interactionsInput | EventTemplateCreateOrConnectWithoutAllowed_interactionsInput[]
    connect?: EventTemplateWhereUniqueInput | EventTemplateWhereUniqueInput[]
  }

  export type MalfunctionUncheckedCreateNestedManyWithoutInteractionInput = {
    create?: XOR<MalfunctionCreateWithoutInteractionInput, MalfunctionUncheckedCreateWithoutInteractionInput> | MalfunctionCreateWithoutInteractionInput[] | MalfunctionUncheckedCreateWithoutInteractionInput[]
    connectOrCreate?: MalfunctionCreateOrConnectWithoutInteractionInput | MalfunctionCreateOrConnectWithoutInteractionInput[]
    createMany?: MalfunctionCreateManyInteractionInputEnvelope
    connect?: MalfunctionWhereUniqueInput | MalfunctionWhereUniqueInput[]
  }

  export type NullableEnumSkillsFieldUpdateOperationsInput = {
    set?: $Enums.Skills | null
  }

  export type EnumInteractionTypeFieldUpdateOperationsInput = {
    set?: $Enums.InteractionType
  }

  export type SystemUpdateOneRequiredWithoutInteractionsNestedInput = {
    create?: XOR<SystemCreateWithoutInteractionsInput, SystemUncheckedCreateWithoutInteractionsInput>
    connectOrCreate?: SystemCreateOrConnectWithoutInteractionsInput
    upsert?: SystemUpsertWithoutInteractionsInput
    connect?: SystemWhereUniqueInput
    update?: XOR<XOR<SystemUpdateToOneWithWhereWithoutInteractionsInput, SystemUpdateWithoutInteractionsInput>, SystemUncheckedUpdateWithoutInteractionsInput>
  }

  export type EventTemplateUpdateManyWithoutAllowed_interactionsNestedInput = {
    create?: XOR<EventTemplateCreateWithoutAllowed_interactionsInput, EventTemplateUncheckedCreateWithoutAllowed_interactionsInput> | EventTemplateCreateWithoutAllowed_interactionsInput[] | EventTemplateUncheckedCreateWithoutAllowed_interactionsInput[]
    connectOrCreate?: EventTemplateCreateOrConnectWithoutAllowed_interactionsInput | EventTemplateCreateOrConnectWithoutAllowed_interactionsInput[]
    upsert?: EventTemplateUpsertWithWhereUniqueWithoutAllowed_interactionsInput | EventTemplateUpsertWithWhereUniqueWithoutAllowed_interactionsInput[]
    set?: EventTemplateWhereUniqueInput | EventTemplateWhereUniqueInput[]
    disconnect?: EventTemplateWhereUniqueInput | EventTemplateWhereUniqueInput[]
    delete?: EventTemplateWhereUniqueInput | EventTemplateWhereUniqueInput[]
    connect?: EventTemplateWhereUniqueInput | EventTemplateWhereUniqueInput[]
    update?: EventTemplateUpdateWithWhereUniqueWithoutAllowed_interactionsInput | EventTemplateUpdateWithWhereUniqueWithoutAllowed_interactionsInput[]
    updateMany?: EventTemplateUpdateManyWithWhereWithoutAllowed_interactionsInput | EventTemplateUpdateManyWithWhereWithoutAllowed_interactionsInput[]
    deleteMany?: EventTemplateScalarWhereInput | EventTemplateScalarWhereInput[]
  }

  export type MalfunctionUpdateManyWithoutInteractionNestedInput = {
    create?: XOR<MalfunctionCreateWithoutInteractionInput, MalfunctionUncheckedCreateWithoutInteractionInput> | MalfunctionCreateWithoutInteractionInput[] | MalfunctionUncheckedCreateWithoutInteractionInput[]
    connectOrCreate?: MalfunctionCreateOrConnectWithoutInteractionInput | MalfunctionCreateOrConnectWithoutInteractionInput[]
    upsert?: MalfunctionUpsertWithWhereUniqueWithoutInteractionInput | MalfunctionUpsertWithWhereUniqueWithoutInteractionInput[]
    createMany?: MalfunctionCreateManyInteractionInputEnvelope
    set?: MalfunctionWhereUniqueInput | MalfunctionWhereUniqueInput[]
    disconnect?: MalfunctionWhereUniqueInput | MalfunctionWhereUniqueInput[]
    delete?: MalfunctionWhereUniqueInput | MalfunctionWhereUniqueInput[]
    connect?: MalfunctionWhereUniqueInput | MalfunctionWhereUniqueInput[]
    update?: MalfunctionUpdateWithWhereUniqueWithoutInteractionInput | MalfunctionUpdateWithWhereUniqueWithoutInteractionInput[]
    updateMany?: MalfunctionUpdateManyWithWhereWithoutInteractionInput | MalfunctionUpdateManyWithWhereWithoutInteractionInput[]
    deleteMany?: MalfunctionScalarWhereInput | MalfunctionScalarWhereInput[]
  }

  export type EventTemplateUncheckedUpdateManyWithoutAllowed_interactionsNestedInput = {
    create?: XOR<EventTemplateCreateWithoutAllowed_interactionsInput, EventTemplateUncheckedCreateWithoutAllowed_interactionsInput> | EventTemplateCreateWithoutAllowed_interactionsInput[] | EventTemplateUncheckedCreateWithoutAllowed_interactionsInput[]
    connectOrCreate?: EventTemplateCreateOrConnectWithoutAllowed_interactionsInput | EventTemplateCreateOrConnectWithoutAllowed_interactionsInput[]
    upsert?: EventTemplateUpsertWithWhereUniqueWithoutAllowed_interactionsInput | EventTemplateUpsertWithWhereUniqueWithoutAllowed_interactionsInput[]
    set?: EventTemplateWhereUniqueInput | EventTemplateWhereUniqueInput[]
    disconnect?: EventTemplateWhereUniqueInput | EventTemplateWhereUniqueInput[]
    delete?: EventTemplateWhereUniqueInput | EventTemplateWhereUniqueInput[]
    connect?: EventTemplateWhereUniqueInput | EventTemplateWhereUniqueInput[]
    update?: EventTemplateUpdateWithWhereUniqueWithoutAllowed_interactionsInput | EventTemplateUpdateWithWhereUniqueWithoutAllowed_interactionsInput[]
    updateMany?: EventTemplateUpdateManyWithWhereWithoutAllowed_interactionsInput | EventTemplateUpdateManyWithWhereWithoutAllowed_interactionsInput[]
    deleteMany?: EventTemplateScalarWhereInput | EventTemplateScalarWhereInput[]
  }

  export type MalfunctionUncheckedUpdateManyWithoutInteractionNestedInput = {
    create?: XOR<MalfunctionCreateWithoutInteractionInput, MalfunctionUncheckedCreateWithoutInteractionInput> | MalfunctionCreateWithoutInteractionInput[] | MalfunctionUncheckedCreateWithoutInteractionInput[]
    connectOrCreate?: MalfunctionCreateOrConnectWithoutInteractionInput | MalfunctionCreateOrConnectWithoutInteractionInput[]
    upsert?: MalfunctionUpsertWithWhereUniqueWithoutInteractionInput | MalfunctionUpsertWithWhereUniqueWithoutInteractionInput[]
    createMany?: MalfunctionCreateManyInteractionInputEnvelope
    set?: MalfunctionWhereUniqueInput | MalfunctionWhereUniqueInput[]
    disconnect?: MalfunctionWhereUniqueInput | MalfunctionWhereUniqueInput[]
    delete?: MalfunctionWhereUniqueInput | MalfunctionWhereUniqueInput[]
    connect?: MalfunctionWhereUniqueInput | MalfunctionWhereUniqueInput[]
    update?: MalfunctionUpdateWithWhereUniqueWithoutInteractionInput | MalfunctionUpdateWithWhereUniqueWithoutInteractionInput[]
    updateMany?: MalfunctionUpdateManyWithWhereWithoutInteractionInput | MalfunctionUpdateManyWithWhereWithoutInteractionInput[]
    deleteMany?: MalfunctionScalarWhereInput | MalfunctionScalarWhereInput[]
  }

  export type InteractionCreateNestedManyWithoutPossible_eventsInput = {
    create?: XOR<InteractionCreateWithoutPossible_eventsInput, InteractionUncheckedCreateWithoutPossible_eventsInput> | InteractionCreateWithoutPossible_eventsInput[] | InteractionUncheckedCreateWithoutPossible_eventsInput[]
    connectOrCreate?: InteractionCreateOrConnectWithoutPossible_eventsInput | InteractionCreateOrConnectWithoutPossible_eventsInput[]
    connect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
  }

  export type EventCreateNestedManyWithoutEvent_templateInput = {
    create?: XOR<EventCreateWithoutEvent_templateInput, EventUncheckedCreateWithoutEvent_templateInput> | EventCreateWithoutEvent_templateInput[] | EventUncheckedCreateWithoutEvent_templateInput[]
    connectOrCreate?: EventCreateOrConnectWithoutEvent_templateInput | EventCreateOrConnectWithoutEvent_templateInput[]
    createMany?: EventCreateManyEvent_templateInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type InteractionUncheckedCreateNestedManyWithoutPossible_eventsInput = {
    create?: XOR<InteractionCreateWithoutPossible_eventsInput, InteractionUncheckedCreateWithoutPossible_eventsInput> | InteractionCreateWithoutPossible_eventsInput[] | InteractionUncheckedCreateWithoutPossible_eventsInput[]
    connectOrCreate?: InteractionCreateOrConnectWithoutPossible_eventsInput | InteractionCreateOrConnectWithoutPossible_eventsInput[]
    connect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutEvent_templateInput = {
    create?: XOR<EventCreateWithoutEvent_templateInput, EventUncheckedCreateWithoutEvent_templateInput> | EventCreateWithoutEvent_templateInput[] | EventUncheckedCreateWithoutEvent_templateInput[]
    connectOrCreate?: EventCreateOrConnectWithoutEvent_templateInput | EventCreateOrConnectWithoutEvent_templateInput[]
    createMany?: EventCreateManyEvent_templateInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EnumEventCauseFieldUpdateOperationsInput = {
    set?: $Enums.EventCause
  }

  export type InteractionUpdateManyWithoutPossible_eventsNestedInput = {
    create?: XOR<InteractionCreateWithoutPossible_eventsInput, InteractionUncheckedCreateWithoutPossible_eventsInput> | InteractionCreateWithoutPossible_eventsInput[] | InteractionUncheckedCreateWithoutPossible_eventsInput[]
    connectOrCreate?: InteractionCreateOrConnectWithoutPossible_eventsInput | InteractionCreateOrConnectWithoutPossible_eventsInput[]
    upsert?: InteractionUpsertWithWhereUniqueWithoutPossible_eventsInput | InteractionUpsertWithWhereUniqueWithoutPossible_eventsInput[]
    set?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    disconnect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    delete?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    connect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    update?: InteractionUpdateWithWhereUniqueWithoutPossible_eventsInput | InteractionUpdateWithWhereUniqueWithoutPossible_eventsInput[]
    updateMany?: InteractionUpdateManyWithWhereWithoutPossible_eventsInput | InteractionUpdateManyWithWhereWithoutPossible_eventsInput[]
    deleteMany?: InteractionScalarWhereInput | InteractionScalarWhereInput[]
  }

  export type EventUpdateManyWithoutEvent_templateNestedInput = {
    create?: XOR<EventCreateWithoutEvent_templateInput, EventUncheckedCreateWithoutEvent_templateInput> | EventCreateWithoutEvent_templateInput[] | EventUncheckedCreateWithoutEvent_templateInput[]
    connectOrCreate?: EventCreateOrConnectWithoutEvent_templateInput | EventCreateOrConnectWithoutEvent_templateInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutEvent_templateInput | EventUpsertWithWhereUniqueWithoutEvent_templateInput[]
    createMany?: EventCreateManyEvent_templateInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutEvent_templateInput | EventUpdateWithWhereUniqueWithoutEvent_templateInput[]
    updateMany?: EventUpdateManyWithWhereWithoutEvent_templateInput | EventUpdateManyWithWhereWithoutEvent_templateInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type InteractionUncheckedUpdateManyWithoutPossible_eventsNestedInput = {
    create?: XOR<InteractionCreateWithoutPossible_eventsInput, InteractionUncheckedCreateWithoutPossible_eventsInput> | InteractionCreateWithoutPossible_eventsInput[] | InteractionUncheckedCreateWithoutPossible_eventsInput[]
    connectOrCreate?: InteractionCreateOrConnectWithoutPossible_eventsInput | InteractionCreateOrConnectWithoutPossible_eventsInput[]
    upsert?: InteractionUpsertWithWhereUniqueWithoutPossible_eventsInput | InteractionUpsertWithWhereUniqueWithoutPossible_eventsInput[]
    set?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    disconnect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    delete?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    connect?: InteractionWhereUniqueInput | InteractionWhereUniqueInput[]
    update?: InteractionUpdateWithWhereUniqueWithoutPossible_eventsInput | InteractionUpdateWithWhereUniqueWithoutPossible_eventsInput[]
    updateMany?: InteractionUpdateManyWithWhereWithoutPossible_eventsInput | InteractionUpdateManyWithWhereWithoutPossible_eventsInput[]
    deleteMany?: InteractionScalarWhereInput | InteractionScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutEvent_templateNestedInput = {
    create?: XOR<EventCreateWithoutEvent_templateInput, EventUncheckedCreateWithoutEvent_templateInput> | EventCreateWithoutEvent_templateInput[] | EventUncheckedCreateWithoutEvent_templateInput[]
    connectOrCreate?: EventCreateOrConnectWithoutEvent_templateInput | EventCreateOrConnectWithoutEvent_templateInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutEvent_templateInput | EventUpsertWithWhereUniqueWithoutEvent_templateInput[]
    createMany?: EventCreateManyEvent_templateInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutEvent_templateInput | EventUpdateWithWhereUniqueWithoutEvent_templateInput[]
    updateMany?: EventUpdateManyWithWhereWithoutEvent_templateInput | EventUpdateManyWithWhereWithoutEvent_templateInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutRequired_interactionsInput = {
    create?: XOR<EventCreateWithoutRequired_interactionsInput, EventUncheckedCreateWithoutRequired_interactionsInput>
    connectOrCreate?: EventCreateOrConnectWithoutRequired_interactionsInput
    connect?: EventWhereUniqueInput
  }

  export type InteractionCreateNestedOneWithoutRequired_interactionsInput = {
    create?: XOR<InteractionCreateWithoutRequired_interactionsInput, InteractionUncheckedCreateWithoutRequired_interactionsInput>
    connectOrCreate?: InteractionCreateOrConnectWithoutRequired_interactionsInput
    connect?: InteractionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFinished_interactionsInput = {
    create?: XOR<UserCreateWithoutFinished_interactionsInput, UserUncheckedCreateWithoutFinished_interactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFinished_interactionsInput
    connect?: UserWhereUniqueInput
  }

  export type SystemCreateNestedOneWithoutMalfunctionsInput = {
    create?: XOR<SystemCreateWithoutMalfunctionsInput, SystemUncheckedCreateWithoutMalfunctionsInput>
    connectOrCreate?: SystemCreateOrConnectWithoutMalfunctionsInput
    connect?: SystemWhereUniqueInput
  }

  export type EnumMalfunctionStatusFieldUpdateOperationsInput = {
    set?: $Enums.MalfunctionStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EventUpdateOneRequiredWithoutRequired_interactionsNestedInput = {
    create?: XOR<EventCreateWithoutRequired_interactionsInput, EventUncheckedCreateWithoutRequired_interactionsInput>
    connectOrCreate?: EventCreateOrConnectWithoutRequired_interactionsInput
    upsert?: EventUpsertWithoutRequired_interactionsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutRequired_interactionsInput, EventUpdateWithoutRequired_interactionsInput>, EventUncheckedUpdateWithoutRequired_interactionsInput>
  }

  export type InteractionUpdateOneRequiredWithoutRequired_interactionsNestedInput = {
    create?: XOR<InteractionCreateWithoutRequired_interactionsInput, InteractionUncheckedCreateWithoutRequired_interactionsInput>
    connectOrCreate?: InteractionCreateOrConnectWithoutRequired_interactionsInput
    upsert?: InteractionUpsertWithoutRequired_interactionsInput
    connect?: InteractionWhereUniqueInput
    update?: XOR<XOR<InteractionUpdateToOneWithWhereWithoutRequired_interactionsInput, InteractionUpdateWithoutRequired_interactionsInput>, InteractionUncheckedUpdateWithoutRequired_interactionsInput>
  }

  export type UserUpdateOneRequiredWithoutFinished_interactionsNestedInput = {
    create?: XOR<UserCreateWithoutFinished_interactionsInput, UserUncheckedCreateWithoutFinished_interactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFinished_interactionsInput
    upsert?: UserUpsertWithoutFinished_interactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFinished_interactionsInput, UserUpdateWithoutFinished_interactionsInput>, UserUncheckedUpdateWithoutFinished_interactionsInput>
  }

  export type SystemUpdateOneRequiredWithoutMalfunctionsNestedInput = {
    create?: XOR<SystemCreateWithoutMalfunctionsInput, SystemUncheckedCreateWithoutMalfunctionsInput>
    connectOrCreate?: SystemCreateOrConnectWithoutMalfunctionsInput
    upsert?: SystemUpsertWithoutMalfunctionsInput
    connect?: SystemWhereUniqueInput
    update?: XOR<XOR<SystemUpdateToOneWithWhereWithoutMalfunctionsInput, SystemUpdateWithoutMalfunctionsInput>, SystemUncheckedUpdateWithoutMalfunctionsInput>
  }

  export type EventTemplateCreateNestedOneWithoutEvent_templateInput = {
    create?: XOR<EventTemplateCreateWithoutEvent_templateInput, EventTemplateUncheckedCreateWithoutEvent_templateInput>
    connectOrCreate?: EventTemplateCreateOrConnectWithoutEvent_templateInput
    connect?: EventTemplateWhereUniqueInput
  }

  export type MalfunctionCreateNestedManyWithoutEventInput = {
    create?: XOR<MalfunctionCreateWithoutEventInput, MalfunctionUncheckedCreateWithoutEventInput> | MalfunctionCreateWithoutEventInput[] | MalfunctionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: MalfunctionCreateOrConnectWithoutEventInput | MalfunctionCreateOrConnectWithoutEventInput[]
    createMany?: MalfunctionCreateManyEventInputEnvelope
    connect?: MalfunctionWhereUniqueInput | MalfunctionWhereUniqueInput[]
  }

  export type MalfunctionUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<MalfunctionCreateWithoutEventInput, MalfunctionUncheckedCreateWithoutEventInput> | MalfunctionCreateWithoutEventInput[] | MalfunctionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: MalfunctionCreateOrConnectWithoutEventInput | MalfunctionCreateOrConnectWithoutEventInput[]
    createMany?: MalfunctionCreateManyEventInputEnvelope
    connect?: MalfunctionWhereUniqueInput | MalfunctionWhereUniqueInput[]
  }

  export type EventTemplateUpdateOneRequiredWithoutEvent_templateNestedInput = {
    create?: XOR<EventTemplateCreateWithoutEvent_templateInput, EventTemplateUncheckedCreateWithoutEvent_templateInput>
    connectOrCreate?: EventTemplateCreateOrConnectWithoutEvent_templateInput
    upsert?: EventTemplateUpsertWithoutEvent_templateInput
    connect?: EventTemplateWhereUniqueInput
    update?: XOR<XOR<EventTemplateUpdateToOneWithWhereWithoutEvent_templateInput, EventTemplateUpdateWithoutEvent_templateInput>, EventTemplateUncheckedUpdateWithoutEvent_templateInput>
  }

  export type MalfunctionUpdateManyWithoutEventNestedInput = {
    create?: XOR<MalfunctionCreateWithoutEventInput, MalfunctionUncheckedCreateWithoutEventInput> | MalfunctionCreateWithoutEventInput[] | MalfunctionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: MalfunctionCreateOrConnectWithoutEventInput | MalfunctionCreateOrConnectWithoutEventInput[]
    upsert?: MalfunctionUpsertWithWhereUniqueWithoutEventInput | MalfunctionUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: MalfunctionCreateManyEventInputEnvelope
    set?: MalfunctionWhereUniqueInput | MalfunctionWhereUniqueInput[]
    disconnect?: MalfunctionWhereUniqueInput | MalfunctionWhereUniqueInput[]
    delete?: MalfunctionWhereUniqueInput | MalfunctionWhereUniqueInput[]
    connect?: MalfunctionWhereUniqueInput | MalfunctionWhereUniqueInput[]
    update?: MalfunctionUpdateWithWhereUniqueWithoutEventInput | MalfunctionUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: MalfunctionUpdateManyWithWhereWithoutEventInput | MalfunctionUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: MalfunctionScalarWhereInput | MalfunctionScalarWhereInput[]
  }

  export type MalfunctionUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<MalfunctionCreateWithoutEventInput, MalfunctionUncheckedCreateWithoutEventInput> | MalfunctionCreateWithoutEventInput[] | MalfunctionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: MalfunctionCreateOrConnectWithoutEventInput | MalfunctionCreateOrConnectWithoutEventInput[]
    upsert?: MalfunctionUpsertWithWhereUniqueWithoutEventInput | MalfunctionUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: MalfunctionCreateManyEventInputEnvelope
    set?: MalfunctionWhereUniqueInput | MalfunctionWhereUniqueInput[]
    disconnect?: MalfunctionWhereUniqueInput | MalfunctionWhereUniqueInput[]
    delete?: MalfunctionWhereUniqueInput | MalfunctionWhereUniqueInput[]
    connect?: MalfunctionWhereUniqueInput | MalfunctionWhereUniqueInput[]
    update?: MalfunctionUpdateWithWhereUniqueWithoutEventInput | MalfunctionUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: MalfunctionUpdateManyWithWhereWithoutEventInput | MalfunctionUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: MalfunctionScalarWhereInput | MalfunctionScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumFractionFilter<$PrismaModel = never> = {
    equals?: $Enums.Fraction | EnumFractionFieldRefInput<$PrismaModel>
    in?: $Enums.Fraction[] | ListEnumFractionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Fraction[] | ListEnumFractionFieldRefInput<$PrismaModel>
    not?: NestedEnumFractionFilter<$PrismaModel> | $Enums.Fraction
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedEnumFractionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Fraction | EnumFractionFieldRefInput<$PrismaModel>
    in?: $Enums.Fraction[] | ListEnumFractionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Fraction[] | ListEnumFractionFieldRefInput<$PrismaModel>
    not?: NestedEnumFractionWithAggregatesFilter<$PrismaModel> | $Enums.Fraction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFractionFilter<$PrismaModel>
    _max?: NestedEnumFractionFilter<$PrismaModel>
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type NestedEnumSectionCodeFilter<$PrismaModel = never> = {
    equals?: $Enums.SectionCode | EnumSectionCodeFieldRefInput<$PrismaModel>
    in?: $Enums.SectionCode[] | ListEnumSectionCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SectionCode[] | ListEnumSectionCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumSectionCodeFilter<$PrismaModel> | $Enums.SectionCode
  }

  export type NestedEnumSkillsFilter<$PrismaModel = never> = {
    equals?: $Enums.Skills | EnumSkillsFieldRefInput<$PrismaModel>
    in?: $Enums.Skills[] | ListEnumSkillsFieldRefInput<$PrismaModel>
    notIn?: $Enums.Skills[] | ListEnumSkillsFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillsFilter<$PrismaModel> | $Enums.Skills
  }

  export type NestedEnumSectionCodeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SectionCode | EnumSectionCodeFieldRefInput<$PrismaModel>
    in?: $Enums.SectionCode[] | ListEnumSectionCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SectionCode[] | ListEnumSectionCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumSectionCodeWithAggregatesFilter<$PrismaModel> | $Enums.SectionCode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSectionCodeFilter<$PrismaModel>
    _max?: NestedEnumSectionCodeFilter<$PrismaModel>
  }

  export type NestedEnumSkillsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Skills | EnumSkillsFieldRefInput<$PrismaModel>
    in?: $Enums.Skills[] | ListEnumSkillsFieldRefInput<$PrismaModel>
    notIn?: $Enums.Skills[] | ListEnumSkillsFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillsWithAggregatesFilter<$PrismaModel> | $Enums.Skills
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSkillsFilter<$PrismaModel>
    _max?: NestedEnumSkillsFilter<$PrismaModel>
  }

  export type NestedEnumSkillsNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Skills | EnumSkillsFieldRefInput<$PrismaModel> | null
    in?: $Enums.Skills[] | ListEnumSkillsFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Skills[] | ListEnumSkillsFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSkillsNullableFilter<$PrismaModel> | $Enums.Skills | null
  }

  export type NestedEnumInteractionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.InteractionType | EnumInteractionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InteractionType[] | ListEnumInteractionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InteractionType[] | ListEnumInteractionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInteractionTypeFilter<$PrismaModel> | $Enums.InteractionType
  }

  export type NestedEnumSkillsNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Skills | EnumSkillsFieldRefInput<$PrismaModel> | null
    in?: $Enums.Skills[] | ListEnumSkillsFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Skills[] | ListEnumSkillsFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSkillsNullableWithAggregatesFilter<$PrismaModel> | $Enums.Skills | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSkillsNullableFilter<$PrismaModel>
    _max?: NestedEnumSkillsNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumInteractionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InteractionType | EnumInteractionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InteractionType[] | ListEnumInteractionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InteractionType[] | ListEnumInteractionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInteractionTypeWithAggregatesFilter<$PrismaModel> | $Enums.InteractionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInteractionTypeFilter<$PrismaModel>
    _max?: NestedEnumInteractionTypeFilter<$PrismaModel>
  }

  export type NestedEnumEventCauseFilter<$PrismaModel = never> = {
    equals?: $Enums.EventCause | EnumEventCauseFieldRefInput<$PrismaModel>
    in?: $Enums.EventCause[] | ListEnumEventCauseFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventCause[] | ListEnumEventCauseFieldRefInput<$PrismaModel>
    not?: NestedEnumEventCauseFilter<$PrismaModel> | $Enums.EventCause
  }

  export type NestedEnumEventCauseWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventCause | EnumEventCauseFieldRefInput<$PrismaModel>
    in?: $Enums.EventCause[] | ListEnumEventCauseFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventCause[] | ListEnumEventCauseFieldRefInput<$PrismaModel>
    not?: NestedEnumEventCauseWithAggregatesFilter<$PrismaModel> | $Enums.EventCause
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventCauseFilter<$PrismaModel>
    _max?: NestedEnumEventCauseFilter<$PrismaModel>
  }

  export type NestedEnumMalfunctionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MalfunctionStatus | EnumMalfunctionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MalfunctionStatus[] | ListEnumMalfunctionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MalfunctionStatus[] | ListEnumMalfunctionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMalfunctionStatusFilter<$PrismaModel> | $Enums.MalfunctionStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumMalfunctionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MalfunctionStatus | EnumMalfunctionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MalfunctionStatus[] | ListEnumMalfunctionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MalfunctionStatus[] | ListEnumMalfunctionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMalfunctionStatusWithAggregatesFilter<$PrismaModel> | $Enums.MalfunctionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMalfunctionStatusFilter<$PrismaModel>
    _max?: NestedEnumMalfunctionStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type MalfunctionCreateWithoutUserInput = {
    status?: $Enums.MalfunctionStatus
    started_at?: Date | string
    last_updated?: Date | string
    event: EventCreateNestedOneWithoutRequired_interactionsInput
    interaction: InteractionCreateNestedOneWithoutRequired_interactionsInput
    system: SystemCreateNestedOneWithoutMalfunctionsInput
  }

  export type MalfunctionUncheckedCreateWithoutUserInput = {
    id?: number
    event_id: number
    interaction_id: number
    status?: $Enums.MalfunctionStatus
    started_at?: Date | string
    last_updated?: Date | string
    system_id: number
  }

  export type MalfunctionCreateOrConnectWithoutUserInput = {
    where: MalfunctionWhereUniqueInput
    create: XOR<MalfunctionCreateWithoutUserInput, MalfunctionUncheckedCreateWithoutUserInput>
  }

  export type MalfunctionCreateManyUserInputEnvelope = {
    data: MalfunctionCreateManyUserInput | MalfunctionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MalfunctionUpsertWithWhereUniqueWithoutUserInput = {
    where: MalfunctionWhereUniqueInput
    update: XOR<MalfunctionUpdateWithoutUserInput, MalfunctionUncheckedUpdateWithoutUserInput>
    create: XOR<MalfunctionCreateWithoutUserInput, MalfunctionUncheckedCreateWithoutUserInput>
  }

  export type MalfunctionUpdateWithWhereUniqueWithoutUserInput = {
    where: MalfunctionWhereUniqueInput
    data: XOR<MalfunctionUpdateWithoutUserInput, MalfunctionUncheckedUpdateWithoutUserInput>
  }

  export type MalfunctionUpdateManyWithWhereWithoutUserInput = {
    where: MalfunctionScalarWhereInput
    data: XOR<MalfunctionUpdateManyMutationInput, MalfunctionUncheckedUpdateManyWithoutUserInput>
  }

  export type MalfunctionScalarWhereInput = {
    AND?: MalfunctionScalarWhereInput | MalfunctionScalarWhereInput[]
    OR?: MalfunctionScalarWhereInput[]
    NOT?: MalfunctionScalarWhereInput | MalfunctionScalarWhereInput[]
    id?: IntFilter<"Malfunction"> | number
    event_id?: IntFilter<"Malfunction"> | number
    interaction_id?: IntFilter<"Malfunction"> | number
    user_id?: IntFilter<"Malfunction"> | number
    status?: EnumMalfunctionStatusFilter<"Malfunction"> | $Enums.MalfunctionStatus
    started_at?: DateTimeFilter<"Malfunction"> | Date | string
    last_updated?: DateTimeFilter<"Malfunction"> | Date | string
    system_id?: IntFilter<"Malfunction"> | number
  }

  export type SystemCreateWithoutSectionInput = {
    name: string
    description: string
    durability?: number
    interactions?: InteractionCreateNestedManyWithoutSystemInput
    malfunctions?: MalfunctionCreateNestedManyWithoutSystemInput
  }

  export type SystemUncheckedCreateWithoutSectionInput = {
    id?: number
    name: string
    description: string
    durability?: number
    interactions?: InteractionUncheckedCreateNestedManyWithoutSystemInput
    malfunctions?: MalfunctionUncheckedCreateNestedManyWithoutSystemInput
  }

  export type SystemCreateOrConnectWithoutSectionInput = {
    where: SystemWhereUniqueInput
    create: XOR<SystemCreateWithoutSectionInput, SystemUncheckedCreateWithoutSectionInput>
  }

  export type SystemCreateManySectionInputEnvelope = {
    data: SystemCreateManySectionInput | SystemCreateManySectionInput[]
    skipDuplicates?: boolean
  }

  export type SystemUpsertWithWhereUniqueWithoutSectionInput = {
    where: SystemWhereUniqueInput
    update: XOR<SystemUpdateWithoutSectionInput, SystemUncheckedUpdateWithoutSectionInput>
    create: XOR<SystemCreateWithoutSectionInput, SystemUncheckedCreateWithoutSectionInput>
  }

  export type SystemUpdateWithWhereUniqueWithoutSectionInput = {
    where: SystemWhereUniqueInput
    data: XOR<SystemUpdateWithoutSectionInput, SystemUncheckedUpdateWithoutSectionInput>
  }

  export type SystemUpdateManyWithWhereWithoutSectionInput = {
    where: SystemScalarWhereInput
    data: XOR<SystemUpdateManyMutationInput, SystemUncheckedUpdateManyWithoutSectionInput>
  }

  export type SystemScalarWhereInput = {
    AND?: SystemScalarWhereInput | SystemScalarWhereInput[]
    OR?: SystemScalarWhereInput[]
    NOT?: SystemScalarWhereInput | SystemScalarWhereInput[]
    id?: IntFilter<"System"> | number
    name?: StringFilter<"System"> | string
    description?: StringFilter<"System"> | string
    durability?: IntFilter<"System"> | number
    section_code?: EnumSectionCodeFilter<"System"> | $Enums.SectionCode
  }

  export type SectionCreateWithoutSystemsInput = {
    code: $Enums.SectionCode
    name: string
    description: string
    skill: $Enums.Skills
  }

  export type SectionUncheckedCreateWithoutSystemsInput = {
    id?: number
    code: $Enums.SectionCode
    name: string
    description: string
    skill: $Enums.Skills
  }

  export type SectionCreateOrConnectWithoutSystemsInput = {
    where: SectionWhereUniqueInput
    create: XOR<SectionCreateWithoutSystemsInput, SectionUncheckedCreateWithoutSystemsInput>
  }

  export type InteractionCreateWithoutSystemInput = {
    name: string
    description: string
    skill?: $Enums.Skills | null
    type: $Enums.InteractionType
    malfunction: string
    possible_events?: EventTemplateCreateNestedManyWithoutAllowed_interactionsInput
    required_interactions?: MalfunctionCreateNestedManyWithoutInteractionInput
  }

  export type InteractionUncheckedCreateWithoutSystemInput = {
    id?: number
    name: string
    description: string
    skill?: $Enums.Skills | null
    type: $Enums.InteractionType
    malfunction: string
    possible_events?: EventTemplateUncheckedCreateNestedManyWithoutAllowed_interactionsInput
    required_interactions?: MalfunctionUncheckedCreateNestedManyWithoutInteractionInput
  }

  export type InteractionCreateOrConnectWithoutSystemInput = {
    where: InteractionWhereUniqueInput
    create: XOR<InteractionCreateWithoutSystemInput, InteractionUncheckedCreateWithoutSystemInput>
  }

  export type InteractionCreateManySystemInputEnvelope = {
    data: InteractionCreateManySystemInput | InteractionCreateManySystemInput[]
    skipDuplicates?: boolean
  }

  export type MalfunctionCreateWithoutSystemInput = {
    status?: $Enums.MalfunctionStatus
    started_at?: Date | string
    last_updated?: Date | string
    event: EventCreateNestedOneWithoutRequired_interactionsInput
    interaction: InteractionCreateNestedOneWithoutRequired_interactionsInput
    user: UserCreateNestedOneWithoutFinished_interactionsInput
  }

  export type MalfunctionUncheckedCreateWithoutSystemInput = {
    id?: number
    event_id: number
    interaction_id: number
    user_id: number
    status?: $Enums.MalfunctionStatus
    started_at?: Date | string
    last_updated?: Date | string
  }

  export type MalfunctionCreateOrConnectWithoutSystemInput = {
    where: MalfunctionWhereUniqueInput
    create: XOR<MalfunctionCreateWithoutSystemInput, MalfunctionUncheckedCreateWithoutSystemInput>
  }

  export type MalfunctionCreateManySystemInputEnvelope = {
    data: MalfunctionCreateManySystemInput | MalfunctionCreateManySystemInput[]
    skipDuplicates?: boolean
  }

  export type SectionUpsertWithoutSystemsInput = {
    update: XOR<SectionUpdateWithoutSystemsInput, SectionUncheckedUpdateWithoutSystemsInput>
    create: XOR<SectionCreateWithoutSystemsInput, SectionUncheckedCreateWithoutSystemsInput>
    where?: SectionWhereInput
  }

  export type SectionUpdateToOneWithWhereWithoutSystemsInput = {
    where?: SectionWhereInput
    data: XOR<SectionUpdateWithoutSystemsInput, SectionUncheckedUpdateWithoutSystemsInput>
  }

  export type SectionUpdateWithoutSystemsInput = {
    code?: EnumSectionCodeFieldUpdateOperationsInput | $Enums.SectionCode
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    skill?: EnumSkillsFieldUpdateOperationsInput | $Enums.Skills
  }

  export type SectionUncheckedUpdateWithoutSystemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: EnumSectionCodeFieldUpdateOperationsInput | $Enums.SectionCode
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    skill?: EnumSkillsFieldUpdateOperationsInput | $Enums.Skills
  }

  export type InteractionUpsertWithWhereUniqueWithoutSystemInput = {
    where: InteractionWhereUniqueInput
    update: XOR<InteractionUpdateWithoutSystemInput, InteractionUncheckedUpdateWithoutSystemInput>
    create: XOR<InteractionCreateWithoutSystemInput, InteractionUncheckedCreateWithoutSystemInput>
  }

  export type InteractionUpdateWithWhereUniqueWithoutSystemInput = {
    where: InteractionWhereUniqueInput
    data: XOR<InteractionUpdateWithoutSystemInput, InteractionUncheckedUpdateWithoutSystemInput>
  }

  export type InteractionUpdateManyWithWhereWithoutSystemInput = {
    where: InteractionScalarWhereInput
    data: XOR<InteractionUpdateManyMutationInput, InteractionUncheckedUpdateManyWithoutSystemInput>
  }

  export type InteractionScalarWhereInput = {
    AND?: InteractionScalarWhereInput | InteractionScalarWhereInput[]
    OR?: InteractionScalarWhereInput[]
    NOT?: InteractionScalarWhereInput | InteractionScalarWhereInput[]
    id?: IntFilter<"Interaction"> | number
    name?: StringFilter<"Interaction"> | string
    description?: StringFilter<"Interaction"> | string
    skill?: EnumSkillsNullableFilter<"Interaction"> | $Enums.Skills | null
    type?: EnumInteractionTypeFilter<"Interaction"> | $Enums.InteractionType
    malfunction?: StringFilter<"Interaction"> | string
    system_id?: IntFilter<"Interaction"> | number
  }

  export type MalfunctionUpsertWithWhereUniqueWithoutSystemInput = {
    where: MalfunctionWhereUniqueInput
    update: XOR<MalfunctionUpdateWithoutSystemInput, MalfunctionUncheckedUpdateWithoutSystemInput>
    create: XOR<MalfunctionCreateWithoutSystemInput, MalfunctionUncheckedCreateWithoutSystemInput>
  }

  export type MalfunctionUpdateWithWhereUniqueWithoutSystemInput = {
    where: MalfunctionWhereUniqueInput
    data: XOR<MalfunctionUpdateWithoutSystemInput, MalfunctionUncheckedUpdateWithoutSystemInput>
  }

  export type MalfunctionUpdateManyWithWhereWithoutSystemInput = {
    where: MalfunctionScalarWhereInput
    data: XOR<MalfunctionUpdateManyMutationInput, MalfunctionUncheckedUpdateManyWithoutSystemInput>
  }

  export type SystemCreateWithoutInteractionsInput = {
    name: string
    description: string
    durability?: number
    section: SectionCreateNestedOneWithoutSystemsInput
    malfunctions?: MalfunctionCreateNestedManyWithoutSystemInput
  }

  export type SystemUncheckedCreateWithoutInteractionsInput = {
    id?: number
    name: string
    description: string
    durability?: number
    section_code: $Enums.SectionCode
    malfunctions?: MalfunctionUncheckedCreateNestedManyWithoutSystemInput
  }

  export type SystemCreateOrConnectWithoutInteractionsInput = {
    where: SystemWhereUniqueInput
    create: XOR<SystemCreateWithoutInteractionsInput, SystemUncheckedCreateWithoutInteractionsInput>
  }

  export type EventTemplateCreateWithoutAllowed_interactionsInput = {
    name: string
    cause: $Enums.EventCause
    event_template?: EventCreateNestedManyWithoutEvent_templateInput
  }

  export type EventTemplateUncheckedCreateWithoutAllowed_interactionsInput = {
    id?: number
    name: string
    cause: $Enums.EventCause
    event_template?: EventUncheckedCreateNestedManyWithoutEvent_templateInput
  }

  export type EventTemplateCreateOrConnectWithoutAllowed_interactionsInput = {
    where: EventTemplateWhereUniqueInput
    create: XOR<EventTemplateCreateWithoutAllowed_interactionsInput, EventTemplateUncheckedCreateWithoutAllowed_interactionsInput>
  }

  export type MalfunctionCreateWithoutInteractionInput = {
    status?: $Enums.MalfunctionStatus
    started_at?: Date | string
    last_updated?: Date | string
    event: EventCreateNestedOneWithoutRequired_interactionsInput
    user: UserCreateNestedOneWithoutFinished_interactionsInput
    system: SystemCreateNestedOneWithoutMalfunctionsInput
  }

  export type MalfunctionUncheckedCreateWithoutInteractionInput = {
    id?: number
    event_id: number
    user_id: number
    status?: $Enums.MalfunctionStatus
    started_at?: Date | string
    last_updated?: Date | string
    system_id: number
  }

  export type MalfunctionCreateOrConnectWithoutInteractionInput = {
    where: MalfunctionWhereUniqueInput
    create: XOR<MalfunctionCreateWithoutInteractionInput, MalfunctionUncheckedCreateWithoutInteractionInput>
  }

  export type MalfunctionCreateManyInteractionInputEnvelope = {
    data: MalfunctionCreateManyInteractionInput | MalfunctionCreateManyInteractionInput[]
    skipDuplicates?: boolean
  }

  export type SystemUpsertWithoutInteractionsInput = {
    update: XOR<SystemUpdateWithoutInteractionsInput, SystemUncheckedUpdateWithoutInteractionsInput>
    create: XOR<SystemCreateWithoutInteractionsInput, SystemUncheckedCreateWithoutInteractionsInput>
    where?: SystemWhereInput
  }

  export type SystemUpdateToOneWithWhereWithoutInteractionsInput = {
    where?: SystemWhereInput
    data: XOR<SystemUpdateWithoutInteractionsInput, SystemUncheckedUpdateWithoutInteractionsInput>
  }

  export type SystemUpdateWithoutInteractionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    durability?: IntFieldUpdateOperationsInput | number
    section?: SectionUpdateOneRequiredWithoutSystemsNestedInput
    malfunctions?: MalfunctionUpdateManyWithoutSystemNestedInput
  }

  export type SystemUncheckedUpdateWithoutInteractionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    durability?: IntFieldUpdateOperationsInput | number
    section_code?: EnumSectionCodeFieldUpdateOperationsInput | $Enums.SectionCode
    malfunctions?: MalfunctionUncheckedUpdateManyWithoutSystemNestedInput
  }

  export type EventTemplateUpsertWithWhereUniqueWithoutAllowed_interactionsInput = {
    where: EventTemplateWhereUniqueInput
    update: XOR<EventTemplateUpdateWithoutAllowed_interactionsInput, EventTemplateUncheckedUpdateWithoutAllowed_interactionsInput>
    create: XOR<EventTemplateCreateWithoutAllowed_interactionsInput, EventTemplateUncheckedCreateWithoutAllowed_interactionsInput>
  }

  export type EventTemplateUpdateWithWhereUniqueWithoutAllowed_interactionsInput = {
    where: EventTemplateWhereUniqueInput
    data: XOR<EventTemplateUpdateWithoutAllowed_interactionsInput, EventTemplateUncheckedUpdateWithoutAllowed_interactionsInput>
  }

  export type EventTemplateUpdateManyWithWhereWithoutAllowed_interactionsInput = {
    where: EventTemplateScalarWhereInput
    data: XOR<EventTemplateUpdateManyMutationInput, EventTemplateUncheckedUpdateManyWithoutAllowed_interactionsInput>
  }

  export type EventTemplateScalarWhereInput = {
    AND?: EventTemplateScalarWhereInput | EventTemplateScalarWhereInput[]
    OR?: EventTemplateScalarWhereInput[]
    NOT?: EventTemplateScalarWhereInput | EventTemplateScalarWhereInput[]
    id?: IntFilter<"EventTemplate"> | number
    name?: StringFilter<"EventTemplate"> | string
    cause?: EnumEventCauseFilter<"EventTemplate"> | $Enums.EventCause
  }

  export type MalfunctionUpsertWithWhereUniqueWithoutInteractionInput = {
    where: MalfunctionWhereUniqueInput
    update: XOR<MalfunctionUpdateWithoutInteractionInput, MalfunctionUncheckedUpdateWithoutInteractionInput>
    create: XOR<MalfunctionCreateWithoutInteractionInput, MalfunctionUncheckedCreateWithoutInteractionInput>
  }

  export type MalfunctionUpdateWithWhereUniqueWithoutInteractionInput = {
    where: MalfunctionWhereUniqueInput
    data: XOR<MalfunctionUpdateWithoutInteractionInput, MalfunctionUncheckedUpdateWithoutInteractionInput>
  }

  export type MalfunctionUpdateManyWithWhereWithoutInteractionInput = {
    where: MalfunctionScalarWhereInput
    data: XOR<MalfunctionUpdateManyMutationInput, MalfunctionUncheckedUpdateManyWithoutInteractionInput>
  }

  export type InteractionCreateWithoutPossible_eventsInput = {
    name: string
    description: string
    skill?: $Enums.Skills | null
    type: $Enums.InteractionType
    malfunction: string
    system: SystemCreateNestedOneWithoutInteractionsInput
    required_interactions?: MalfunctionCreateNestedManyWithoutInteractionInput
  }

  export type InteractionUncheckedCreateWithoutPossible_eventsInput = {
    id?: number
    name: string
    description: string
    skill?: $Enums.Skills | null
    type: $Enums.InteractionType
    malfunction: string
    system_id: number
    required_interactions?: MalfunctionUncheckedCreateNestedManyWithoutInteractionInput
  }

  export type InteractionCreateOrConnectWithoutPossible_eventsInput = {
    where: InteractionWhereUniqueInput
    create: XOR<InteractionCreateWithoutPossible_eventsInput, InteractionUncheckedCreateWithoutPossible_eventsInput>
  }

  export type EventCreateWithoutEvent_templateInput = {
    started_at?: Date | string
    required_interactions?: MalfunctionCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutEvent_templateInput = {
    id?: number
    started_at?: Date | string
    required_interactions?: MalfunctionUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutEvent_templateInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutEvent_templateInput, EventUncheckedCreateWithoutEvent_templateInput>
  }

  export type EventCreateManyEvent_templateInputEnvelope = {
    data: EventCreateManyEvent_templateInput | EventCreateManyEvent_templateInput[]
    skipDuplicates?: boolean
  }

  export type InteractionUpsertWithWhereUniqueWithoutPossible_eventsInput = {
    where: InteractionWhereUniqueInput
    update: XOR<InteractionUpdateWithoutPossible_eventsInput, InteractionUncheckedUpdateWithoutPossible_eventsInput>
    create: XOR<InteractionCreateWithoutPossible_eventsInput, InteractionUncheckedCreateWithoutPossible_eventsInput>
  }

  export type InteractionUpdateWithWhereUniqueWithoutPossible_eventsInput = {
    where: InteractionWhereUniqueInput
    data: XOR<InteractionUpdateWithoutPossible_eventsInput, InteractionUncheckedUpdateWithoutPossible_eventsInput>
  }

  export type InteractionUpdateManyWithWhereWithoutPossible_eventsInput = {
    where: InteractionScalarWhereInput
    data: XOR<InteractionUpdateManyMutationInput, InteractionUncheckedUpdateManyWithoutPossible_eventsInput>
  }

  export type EventUpsertWithWhereUniqueWithoutEvent_templateInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutEvent_templateInput, EventUncheckedUpdateWithoutEvent_templateInput>
    create: XOR<EventCreateWithoutEvent_templateInput, EventUncheckedCreateWithoutEvent_templateInput>
  }

  export type EventUpdateWithWhereUniqueWithoutEvent_templateInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutEvent_templateInput, EventUncheckedUpdateWithoutEvent_templateInput>
  }

  export type EventUpdateManyWithWhereWithoutEvent_templateInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutEvent_templateInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: IntFilter<"Event"> | number
    event_template_id?: IntFilter<"Event"> | number
    started_at?: DateTimeFilter<"Event"> | Date | string
  }

  export type EventCreateWithoutRequired_interactionsInput = {
    started_at?: Date | string
    event_template: EventTemplateCreateNestedOneWithoutEvent_templateInput
  }

  export type EventUncheckedCreateWithoutRequired_interactionsInput = {
    id?: number
    event_template_id: number
    started_at?: Date | string
  }

  export type EventCreateOrConnectWithoutRequired_interactionsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutRequired_interactionsInput, EventUncheckedCreateWithoutRequired_interactionsInput>
  }

  export type InteractionCreateWithoutRequired_interactionsInput = {
    name: string
    description: string
    skill?: $Enums.Skills | null
    type: $Enums.InteractionType
    malfunction: string
    system: SystemCreateNestedOneWithoutInteractionsInput
    possible_events?: EventTemplateCreateNestedManyWithoutAllowed_interactionsInput
  }

  export type InteractionUncheckedCreateWithoutRequired_interactionsInput = {
    id?: number
    name: string
    description: string
    skill?: $Enums.Skills | null
    type: $Enums.InteractionType
    malfunction: string
    system_id: number
    possible_events?: EventTemplateUncheckedCreateNestedManyWithoutAllowed_interactionsInput
  }

  export type InteractionCreateOrConnectWithoutRequired_interactionsInput = {
    where: InteractionWhereUniqueInput
    create: XOR<InteractionCreateWithoutRequired_interactionsInput, InteractionUncheckedCreateWithoutRequired_interactionsInput>
  }

  export type UserCreateWithoutFinished_interactionsInput = {
    name: string
    profession: string
    fraction: $Enums.Fraction
    navigation_skill: number
    military_skill: number
    engineering_skill: number
    bureaucracy_skill: number
    service_skill: number
    status?: $Enums.UserStatus
  }

  export type UserUncheckedCreateWithoutFinished_interactionsInput = {
    id?: number
    name: string
    profession: string
    fraction: $Enums.Fraction
    navigation_skill: number
    military_skill: number
    engineering_skill: number
    bureaucracy_skill: number
    service_skill: number
    status?: $Enums.UserStatus
  }

  export type UserCreateOrConnectWithoutFinished_interactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFinished_interactionsInput, UserUncheckedCreateWithoutFinished_interactionsInput>
  }

  export type SystemCreateWithoutMalfunctionsInput = {
    name: string
    description: string
    durability?: number
    section: SectionCreateNestedOneWithoutSystemsInput
    interactions?: InteractionCreateNestedManyWithoutSystemInput
  }

  export type SystemUncheckedCreateWithoutMalfunctionsInput = {
    id?: number
    name: string
    description: string
    durability?: number
    section_code: $Enums.SectionCode
    interactions?: InteractionUncheckedCreateNestedManyWithoutSystemInput
  }

  export type SystemCreateOrConnectWithoutMalfunctionsInput = {
    where: SystemWhereUniqueInput
    create: XOR<SystemCreateWithoutMalfunctionsInput, SystemUncheckedCreateWithoutMalfunctionsInput>
  }

  export type EventUpsertWithoutRequired_interactionsInput = {
    update: XOR<EventUpdateWithoutRequired_interactionsInput, EventUncheckedUpdateWithoutRequired_interactionsInput>
    create: XOR<EventCreateWithoutRequired_interactionsInput, EventUncheckedCreateWithoutRequired_interactionsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutRequired_interactionsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutRequired_interactionsInput, EventUncheckedUpdateWithoutRequired_interactionsInput>
  }

  export type EventUpdateWithoutRequired_interactionsInput = {
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event_template?: EventTemplateUpdateOneRequiredWithoutEvent_templateNestedInput
  }

  export type EventUncheckedUpdateWithoutRequired_interactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_template_id?: IntFieldUpdateOperationsInput | number
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InteractionUpsertWithoutRequired_interactionsInput = {
    update: XOR<InteractionUpdateWithoutRequired_interactionsInput, InteractionUncheckedUpdateWithoutRequired_interactionsInput>
    create: XOR<InteractionCreateWithoutRequired_interactionsInput, InteractionUncheckedCreateWithoutRequired_interactionsInput>
    where?: InteractionWhereInput
  }

  export type InteractionUpdateToOneWithWhereWithoutRequired_interactionsInput = {
    where?: InteractionWhereInput
    data: XOR<InteractionUpdateWithoutRequired_interactionsInput, InteractionUncheckedUpdateWithoutRequired_interactionsInput>
  }

  export type InteractionUpdateWithoutRequired_interactionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    skill?: NullableEnumSkillsFieldUpdateOperationsInput | $Enums.Skills | null
    type?: EnumInteractionTypeFieldUpdateOperationsInput | $Enums.InteractionType
    malfunction?: StringFieldUpdateOperationsInput | string
    system?: SystemUpdateOneRequiredWithoutInteractionsNestedInput
    possible_events?: EventTemplateUpdateManyWithoutAllowed_interactionsNestedInput
  }

  export type InteractionUncheckedUpdateWithoutRequired_interactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    skill?: NullableEnumSkillsFieldUpdateOperationsInput | $Enums.Skills | null
    type?: EnumInteractionTypeFieldUpdateOperationsInput | $Enums.InteractionType
    malfunction?: StringFieldUpdateOperationsInput | string
    system_id?: IntFieldUpdateOperationsInput | number
    possible_events?: EventTemplateUncheckedUpdateManyWithoutAllowed_interactionsNestedInput
  }

  export type UserUpsertWithoutFinished_interactionsInput = {
    update: XOR<UserUpdateWithoutFinished_interactionsInput, UserUncheckedUpdateWithoutFinished_interactionsInput>
    create: XOR<UserCreateWithoutFinished_interactionsInput, UserUncheckedCreateWithoutFinished_interactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFinished_interactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFinished_interactionsInput, UserUncheckedUpdateWithoutFinished_interactionsInput>
  }

  export type UserUpdateWithoutFinished_interactionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    fraction?: EnumFractionFieldUpdateOperationsInput | $Enums.Fraction
    navigation_skill?: IntFieldUpdateOperationsInput | number
    military_skill?: IntFieldUpdateOperationsInput | number
    engineering_skill?: IntFieldUpdateOperationsInput | number
    bureaucracy_skill?: IntFieldUpdateOperationsInput | number
    service_skill?: IntFieldUpdateOperationsInput | number
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
  }

  export type UserUncheckedUpdateWithoutFinished_interactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    profession?: StringFieldUpdateOperationsInput | string
    fraction?: EnumFractionFieldUpdateOperationsInput | $Enums.Fraction
    navigation_skill?: IntFieldUpdateOperationsInput | number
    military_skill?: IntFieldUpdateOperationsInput | number
    engineering_skill?: IntFieldUpdateOperationsInput | number
    bureaucracy_skill?: IntFieldUpdateOperationsInput | number
    service_skill?: IntFieldUpdateOperationsInput | number
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
  }

  export type SystemUpsertWithoutMalfunctionsInput = {
    update: XOR<SystemUpdateWithoutMalfunctionsInput, SystemUncheckedUpdateWithoutMalfunctionsInput>
    create: XOR<SystemCreateWithoutMalfunctionsInput, SystemUncheckedCreateWithoutMalfunctionsInput>
    where?: SystemWhereInput
  }

  export type SystemUpdateToOneWithWhereWithoutMalfunctionsInput = {
    where?: SystemWhereInput
    data: XOR<SystemUpdateWithoutMalfunctionsInput, SystemUncheckedUpdateWithoutMalfunctionsInput>
  }

  export type SystemUpdateWithoutMalfunctionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    durability?: IntFieldUpdateOperationsInput | number
    section?: SectionUpdateOneRequiredWithoutSystemsNestedInput
    interactions?: InteractionUpdateManyWithoutSystemNestedInput
  }

  export type SystemUncheckedUpdateWithoutMalfunctionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    durability?: IntFieldUpdateOperationsInput | number
    section_code?: EnumSectionCodeFieldUpdateOperationsInput | $Enums.SectionCode
    interactions?: InteractionUncheckedUpdateManyWithoutSystemNestedInput
  }

  export type EventTemplateCreateWithoutEvent_templateInput = {
    name: string
    cause: $Enums.EventCause
    allowed_interactions?: InteractionCreateNestedManyWithoutPossible_eventsInput
  }

  export type EventTemplateUncheckedCreateWithoutEvent_templateInput = {
    id?: number
    name: string
    cause: $Enums.EventCause
    allowed_interactions?: InteractionUncheckedCreateNestedManyWithoutPossible_eventsInput
  }

  export type EventTemplateCreateOrConnectWithoutEvent_templateInput = {
    where: EventTemplateWhereUniqueInput
    create: XOR<EventTemplateCreateWithoutEvent_templateInput, EventTemplateUncheckedCreateWithoutEvent_templateInput>
  }

  export type MalfunctionCreateWithoutEventInput = {
    status?: $Enums.MalfunctionStatus
    started_at?: Date | string
    last_updated?: Date | string
    interaction: InteractionCreateNestedOneWithoutRequired_interactionsInput
    user: UserCreateNestedOneWithoutFinished_interactionsInput
    system: SystemCreateNestedOneWithoutMalfunctionsInput
  }

  export type MalfunctionUncheckedCreateWithoutEventInput = {
    id?: number
    interaction_id: number
    user_id: number
    status?: $Enums.MalfunctionStatus
    started_at?: Date | string
    last_updated?: Date | string
    system_id: number
  }

  export type MalfunctionCreateOrConnectWithoutEventInput = {
    where: MalfunctionWhereUniqueInput
    create: XOR<MalfunctionCreateWithoutEventInput, MalfunctionUncheckedCreateWithoutEventInput>
  }

  export type MalfunctionCreateManyEventInputEnvelope = {
    data: MalfunctionCreateManyEventInput | MalfunctionCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type EventTemplateUpsertWithoutEvent_templateInput = {
    update: XOR<EventTemplateUpdateWithoutEvent_templateInput, EventTemplateUncheckedUpdateWithoutEvent_templateInput>
    create: XOR<EventTemplateCreateWithoutEvent_templateInput, EventTemplateUncheckedCreateWithoutEvent_templateInput>
    where?: EventTemplateWhereInput
  }

  export type EventTemplateUpdateToOneWithWhereWithoutEvent_templateInput = {
    where?: EventTemplateWhereInput
    data: XOR<EventTemplateUpdateWithoutEvent_templateInput, EventTemplateUncheckedUpdateWithoutEvent_templateInput>
  }

  export type EventTemplateUpdateWithoutEvent_templateInput = {
    name?: StringFieldUpdateOperationsInput | string
    cause?: EnumEventCauseFieldUpdateOperationsInput | $Enums.EventCause
    allowed_interactions?: InteractionUpdateManyWithoutPossible_eventsNestedInput
  }

  export type EventTemplateUncheckedUpdateWithoutEvent_templateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cause?: EnumEventCauseFieldUpdateOperationsInput | $Enums.EventCause
    allowed_interactions?: InteractionUncheckedUpdateManyWithoutPossible_eventsNestedInput
  }

  export type MalfunctionUpsertWithWhereUniqueWithoutEventInput = {
    where: MalfunctionWhereUniqueInput
    update: XOR<MalfunctionUpdateWithoutEventInput, MalfunctionUncheckedUpdateWithoutEventInput>
    create: XOR<MalfunctionCreateWithoutEventInput, MalfunctionUncheckedCreateWithoutEventInput>
  }

  export type MalfunctionUpdateWithWhereUniqueWithoutEventInput = {
    where: MalfunctionWhereUniqueInput
    data: XOR<MalfunctionUpdateWithoutEventInput, MalfunctionUncheckedUpdateWithoutEventInput>
  }

  export type MalfunctionUpdateManyWithWhereWithoutEventInput = {
    where: MalfunctionScalarWhereInput
    data: XOR<MalfunctionUpdateManyMutationInput, MalfunctionUncheckedUpdateManyWithoutEventInput>
  }

  export type MalfunctionCreateManyUserInput = {
    id?: number
    event_id: number
    interaction_id: number
    status?: $Enums.MalfunctionStatus
    started_at?: Date | string
    last_updated?: Date | string
    system_id: number
  }

  export type MalfunctionUpdateWithoutUserInput = {
    status?: EnumMalfunctionStatusFieldUpdateOperationsInput | $Enums.MalfunctionStatus
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutRequired_interactionsNestedInput
    interaction?: InteractionUpdateOneRequiredWithoutRequired_interactionsNestedInput
    system?: SystemUpdateOneRequiredWithoutMalfunctionsNestedInput
  }

  export type MalfunctionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    interaction_id?: IntFieldUpdateOperationsInput | number
    status?: EnumMalfunctionStatusFieldUpdateOperationsInput | $Enums.MalfunctionStatus
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    system_id?: IntFieldUpdateOperationsInput | number
  }

  export type MalfunctionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    interaction_id?: IntFieldUpdateOperationsInput | number
    status?: EnumMalfunctionStatusFieldUpdateOperationsInput | $Enums.MalfunctionStatus
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    system_id?: IntFieldUpdateOperationsInput | number
  }

  export type SystemCreateManySectionInput = {
    id?: number
    name: string
    description: string
    durability?: number
  }

  export type SystemUpdateWithoutSectionInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    durability?: IntFieldUpdateOperationsInput | number
    interactions?: InteractionUpdateManyWithoutSystemNestedInput
    malfunctions?: MalfunctionUpdateManyWithoutSystemNestedInput
  }

  export type SystemUncheckedUpdateWithoutSectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    durability?: IntFieldUpdateOperationsInput | number
    interactions?: InteractionUncheckedUpdateManyWithoutSystemNestedInput
    malfunctions?: MalfunctionUncheckedUpdateManyWithoutSystemNestedInput
  }

  export type SystemUncheckedUpdateManyWithoutSectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    durability?: IntFieldUpdateOperationsInput | number
  }

  export type InteractionCreateManySystemInput = {
    id?: number
    name: string
    description: string
    skill?: $Enums.Skills | null
    type: $Enums.InteractionType
    malfunction: string
  }

  export type MalfunctionCreateManySystemInput = {
    id?: number
    event_id: number
    interaction_id: number
    user_id: number
    status?: $Enums.MalfunctionStatus
    started_at?: Date | string
    last_updated?: Date | string
  }

  export type InteractionUpdateWithoutSystemInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    skill?: NullableEnumSkillsFieldUpdateOperationsInput | $Enums.Skills | null
    type?: EnumInteractionTypeFieldUpdateOperationsInput | $Enums.InteractionType
    malfunction?: StringFieldUpdateOperationsInput | string
    possible_events?: EventTemplateUpdateManyWithoutAllowed_interactionsNestedInput
    required_interactions?: MalfunctionUpdateManyWithoutInteractionNestedInput
  }

  export type InteractionUncheckedUpdateWithoutSystemInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    skill?: NullableEnumSkillsFieldUpdateOperationsInput | $Enums.Skills | null
    type?: EnumInteractionTypeFieldUpdateOperationsInput | $Enums.InteractionType
    malfunction?: StringFieldUpdateOperationsInput | string
    possible_events?: EventTemplateUncheckedUpdateManyWithoutAllowed_interactionsNestedInput
    required_interactions?: MalfunctionUncheckedUpdateManyWithoutInteractionNestedInput
  }

  export type InteractionUncheckedUpdateManyWithoutSystemInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    skill?: NullableEnumSkillsFieldUpdateOperationsInput | $Enums.Skills | null
    type?: EnumInteractionTypeFieldUpdateOperationsInput | $Enums.InteractionType
    malfunction?: StringFieldUpdateOperationsInput | string
  }

  export type MalfunctionUpdateWithoutSystemInput = {
    status?: EnumMalfunctionStatusFieldUpdateOperationsInput | $Enums.MalfunctionStatus
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutRequired_interactionsNestedInput
    interaction?: InteractionUpdateOneRequiredWithoutRequired_interactionsNestedInput
    user?: UserUpdateOneRequiredWithoutFinished_interactionsNestedInput
  }

  export type MalfunctionUncheckedUpdateWithoutSystemInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    interaction_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    status?: EnumMalfunctionStatusFieldUpdateOperationsInput | $Enums.MalfunctionStatus
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MalfunctionUncheckedUpdateManyWithoutSystemInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    interaction_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    status?: EnumMalfunctionStatusFieldUpdateOperationsInput | $Enums.MalfunctionStatus
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MalfunctionCreateManyInteractionInput = {
    id?: number
    event_id: number
    user_id: number
    status?: $Enums.MalfunctionStatus
    started_at?: Date | string
    last_updated?: Date | string
    system_id: number
  }

  export type EventTemplateUpdateWithoutAllowed_interactionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    cause?: EnumEventCauseFieldUpdateOperationsInput | $Enums.EventCause
    event_template?: EventUpdateManyWithoutEvent_templateNestedInput
  }

  export type EventTemplateUncheckedUpdateWithoutAllowed_interactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cause?: EnumEventCauseFieldUpdateOperationsInput | $Enums.EventCause
    event_template?: EventUncheckedUpdateManyWithoutEvent_templateNestedInput
  }

  export type EventTemplateUncheckedUpdateManyWithoutAllowed_interactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cause?: EnumEventCauseFieldUpdateOperationsInput | $Enums.EventCause
  }

  export type MalfunctionUpdateWithoutInteractionInput = {
    status?: EnumMalfunctionStatusFieldUpdateOperationsInput | $Enums.MalfunctionStatus
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutRequired_interactionsNestedInput
    user?: UserUpdateOneRequiredWithoutFinished_interactionsNestedInput
    system?: SystemUpdateOneRequiredWithoutMalfunctionsNestedInput
  }

  export type MalfunctionUncheckedUpdateWithoutInteractionInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    status?: EnumMalfunctionStatusFieldUpdateOperationsInput | $Enums.MalfunctionStatus
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    system_id?: IntFieldUpdateOperationsInput | number
  }

  export type MalfunctionUncheckedUpdateManyWithoutInteractionInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    status?: EnumMalfunctionStatusFieldUpdateOperationsInput | $Enums.MalfunctionStatus
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    system_id?: IntFieldUpdateOperationsInput | number
  }

  export type EventCreateManyEvent_templateInput = {
    id?: number
    started_at?: Date | string
  }

  export type InteractionUpdateWithoutPossible_eventsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    skill?: NullableEnumSkillsFieldUpdateOperationsInput | $Enums.Skills | null
    type?: EnumInteractionTypeFieldUpdateOperationsInput | $Enums.InteractionType
    malfunction?: StringFieldUpdateOperationsInput | string
    system?: SystemUpdateOneRequiredWithoutInteractionsNestedInput
    required_interactions?: MalfunctionUpdateManyWithoutInteractionNestedInput
  }

  export type InteractionUncheckedUpdateWithoutPossible_eventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    skill?: NullableEnumSkillsFieldUpdateOperationsInput | $Enums.Skills | null
    type?: EnumInteractionTypeFieldUpdateOperationsInput | $Enums.InteractionType
    malfunction?: StringFieldUpdateOperationsInput | string
    system_id?: IntFieldUpdateOperationsInput | number
    required_interactions?: MalfunctionUncheckedUpdateManyWithoutInteractionNestedInput
  }

  export type InteractionUncheckedUpdateManyWithoutPossible_eventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    skill?: NullableEnumSkillsFieldUpdateOperationsInput | $Enums.Skills | null
    type?: EnumInteractionTypeFieldUpdateOperationsInput | $Enums.InteractionType
    malfunction?: StringFieldUpdateOperationsInput | string
    system_id?: IntFieldUpdateOperationsInput | number
  }

  export type EventUpdateWithoutEvent_templateInput = {
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    required_interactions?: MalfunctionUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutEvent_templateInput = {
    id?: IntFieldUpdateOperationsInput | number
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    required_interactions?: MalfunctionUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutEvent_templateInput = {
    id?: IntFieldUpdateOperationsInput | number
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MalfunctionCreateManyEventInput = {
    id?: number
    interaction_id: number
    user_id: number
    status?: $Enums.MalfunctionStatus
    started_at?: Date | string
    last_updated?: Date | string
    system_id: number
  }

  export type MalfunctionUpdateWithoutEventInput = {
    status?: EnumMalfunctionStatusFieldUpdateOperationsInput | $Enums.MalfunctionStatus
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    interaction?: InteractionUpdateOneRequiredWithoutRequired_interactionsNestedInput
    user?: UserUpdateOneRequiredWithoutFinished_interactionsNestedInput
    system?: SystemUpdateOneRequiredWithoutMalfunctionsNestedInput
  }

  export type MalfunctionUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    interaction_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    status?: EnumMalfunctionStatusFieldUpdateOperationsInput | $Enums.MalfunctionStatus
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    system_id?: IntFieldUpdateOperationsInput | number
  }

  export type MalfunctionUncheckedUpdateManyWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    interaction_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    status?: EnumMalfunctionStatusFieldUpdateOperationsInput | $Enums.MalfunctionStatus
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    system_id?: IntFieldUpdateOperationsInput | number
  }



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