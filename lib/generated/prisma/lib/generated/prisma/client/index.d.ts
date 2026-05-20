
/**
 * Client
**/

import * as runtime from './runtime/client.js';
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
 * Model Story
 * 
 */
export type Story = $Result.DefaultSelection<Prisma.$StoryPayload>
/**
 * Model StorySection
 * 
 */
export type StorySection = $Result.DefaultSelection<Prisma.$StorySectionPayload>
/**
 * Model Exercise
 * 
 */
export type Exercise = $Result.DefaultSelection<Prisma.$ExercisePayload>
/**
 * Model ExerciseOption
 * 
 */
export type ExerciseOption = $Result.DefaultSelection<Prisma.$ExerciseOptionPayload>
/**
 * Model Grammar
 * 
 */
export type Grammar = $Result.DefaultSelection<Prisma.$GrammarPayload>
/**
 * Model GrammarSection
 * 
 */
export type GrammarSection = $Result.DefaultSelection<Prisma.$GrammarSectionPayload>
/**
 * Model Example
 * 
 */
export type Example = $Result.DefaultSelection<Prisma.$ExamplePayload>
/**
 * Model DailyUsage
 * 
 */
export type DailyUsage = $Result.DefaultSelection<Prisma.$DailyUsagePayload>
/**
 * Model DailyUsageVocab
 * 
 */
export type DailyUsageVocab = $Result.DefaultSelection<Prisma.$DailyUsageVocabPayload>
/**
 * Model GrammarRule
 * 
 */
export type GrammarRule = $Result.DefaultSelection<Prisma.$GrammarRulePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

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
   * `prisma.story`: Exposes CRUD operations for the **Story** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stories
    * const stories = await prisma.story.findMany()
    * ```
    */
  get story(): Prisma.StoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.storySection`: Exposes CRUD operations for the **StorySection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StorySections
    * const storySections = await prisma.storySection.findMany()
    * ```
    */
  get storySection(): Prisma.StorySectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exercise`: Exposes CRUD operations for the **Exercise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exercises
    * const exercises = await prisma.exercise.findMany()
    * ```
    */
  get exercise(): Prisma.ExerciseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exerciseOption`: Exposes CRUD operations for the **ExerciseOption** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExerciseOptions
    * const exerciseOptions = await prisma.exerciseOption.findMany()
    * ```
    */
  get exerciseOption(): Prisma.ExerciseOptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.grammar`: Exposes CRUD operations for the **Grammar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Grammars
    * const grammars = await prisma.grammar.findMany()
    * ```
    */
  get grammar(): Prisma.GrammarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.grammarSection`: Exposes CRUD operations for the **GrammarSection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GrammarSections
    * const grammarSections = await prisma.grammarSection.findMany()
    * ```
    */
  get grammarSection(): Prisma.GrammarSectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.example`: Exposes CRUD operations for the **Example** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Examples
    * const examples = await prisma.example.findMany()
    * ```
    */
  get example(): Prisma.ExampleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dailyUsage`: Exposes CRUD operations for the **DailyUsage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyUsages
    * const dailyUsages = await prisma.dailyUsage.findMany()
    * ```
    */
  get dailyUsage(): Prisma.DailyUsageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dailyUsageVocab`: Exposes CRUD operations for the **DailyUsageVocab** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyUsageVocabs
    * const dailyUsageVocabs = await prisma.dailyUsageVocab.findMany()
    * ```
    */
  get dailyUsageVocab(): Prisma.DailyUsageVocabDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.grammarRule`: Exposes CRUD operations for the **GrammarRule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GrammarRules
    * const grammarRules = await prisma.grammarRule.findMany()
    * ```
    */
  get grammarRule(): Prisma.GrammarRuleDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Story: 'Story',
    StorySection: 'StorySection',
    Exercise: 'Exercise',
    ExerciseOption: 'ExerciseOption',
    Grammar: 'Grammar',
    GrammarSection: 'GrammarSection',
    Example: 'Example',
    DailyUsage: 'DailyUsage',
    DailyUsageVocab: 'DailyUsageVocab',
    GrammarRule: 'GrammarRule'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "story" | "storySection" | "exercise" | "exerciseOption" | "grammar" | "grammarSection" | "example" | "dailyUsage" | "dailyUsageVocab" | "grammarRule"
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
      Story: {
        payload: Prisma.$StoryPayload<ExtArgs>
        fields: Prisma.StoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>
          }
          findFirst: {
            args: Prisma.StoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>
          }
          findMany: {
            args: Prisma.StoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>[]
          }
          create: {
            args: Prisma.StoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>
          }
          createMany: {
            args: Prisma.StoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>[]
          }
          delete: {
            args: Prisma.StoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>
          }
          update: {
            args: Prisma.StoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>
          }
          deleteMany: {
            args: Prisma.StoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>[]
          }
          upsert: {
            args: Prisma.StoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>
          }
          aggregate: {
            args: Prisma.StoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStory>
          }
          groupBy: {
            args: Prisma.StoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoryCountArgs<ExtArgs>
            result: $Utils.Optional<StoryCountAggregateOutputType> | number
          }
        }
      }
      StorySection: {
        payload: Prisma.$StorySectionPayload<ExtArgs>
        fields: Prisma.StorySectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StorySectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorySectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StorySectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorySectionPayload>
          }
          findFirst: {
            args: Prisma.StorySectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorySectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StorySectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorySectionPayload>
          }
          findMany: {
            args: Prisma.StorySectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorySectionPayload>[]
          }
          create: {
            args: Prisma.StorySectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorySectionPayload>
          }
          createMany: {
            args: Prisma.StorySectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StorySectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorySectionPayload>[]
          }
          delete: {
            args: Prisma.StorySectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorySectionPayload>
          }
          update: {
            args: Prisma.StorySectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorySectionPayload>
          }
          deleteMany: {
            args: Prisma.StorySectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StorySectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StorySectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorySectionPayload>[]
          }
          upsert: {
            args: Prisma.StorySectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorySectionPayload>
          }
          aggregate: {
            args: Prisma.StorySectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStorySection>
          }
          groupBy: {
            args: Prisma.StorySectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<StorySectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.StorySectionCountArgs<ExtArgs>
            result: $Utils.Optional<StorySectionCountAggregateOutputType> | number
          }
        }
      }
      Exercise: {
        payload: Prisma.$ExercisePayload<ExtArgs>
        fields: Prisma.ExerciseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExerciseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExerciseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          findFirst: {
            args: Prisma.ExerciseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExerciseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          findMany: {
            args: Prisma.ExerciseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          create: {
            args: Prisma.ExerciseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          createMany: {
            args: Prisma.ExerciseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExerciseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          delete: {
            args: Prisma.ExerciseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          update: {
            args: Prisma.ExerciseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          deleteMany: {
            args: Prisma.ExerciseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExerciseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExerciseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          upsert: {
            args: Prisma.ExerciseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          aggregate: {
            args: Prisma.ExerciseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExercise>
          }
          groupBy: {
            args: Prisma.ExerciseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExerciseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExerciseCountArgs<ExtArgs>
            result: $Utils.Optional<ExerciseCountAggregateOutputType> | number
          }
        }
      }
      ExerciseOption: {
        payload: Prisma.$ExerciseOptionPayload<ExtArgs>
        fields: Prisma.ExerciseOptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExerciseOptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseOptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExerciseOptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseOptionPayload>
          }
          findFirst: {
            args: Prisma.ExerciseOptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseOptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExerciseOptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseOptionPayload>
          }
          findMany: {
            args: Prisma.ExerciseOptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseOptionPayload>[]
          }
          create: {
            args: Prisma.ExerciseOptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseOptionPayload>
          }
          createMany: {
            args: Prisma.ExerciseOptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExerciseOptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseOptionPayload>[]
          }
          delete: {
            args: Prisma.ExerciseOptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseOptionPayload>
          }
          update: {
            args: Prisma.ExerciseOptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseOptionPayload>
          }
          deleteMany: {
            args: Prisma.ExerciseOptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExerciseOptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExerciseOptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseOptionPayload>[]
          }
          upsert: {
            args: Prisma.ExerciseOptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseOptionPayload>
          }
          aggregate: {
            args: Prisma.ExerciseOptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExerciseOption>
          }
          groupBy: {
            args: Prisma.ExerciseOptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExerciseOptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExerciseOptionCountArgs<ExtArgs>
            result: $Utils.Optional<ExerciseOptionCountAggregateOutputType> | number
          }
        }
      }
      Grammar: {
        payload: Prisma.$GrammarPayload<ExtArgs>
        fields: Prisma.GrammarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GrammarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GrammarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarPayload>
          }
          findFirst: {
            args: Prisma.GrammarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GrammarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarPayload>
          }
          findMany: {
            args: Prisma.GrammarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarPayload>[]
          }
          create: {
            args: Prisma.GrammarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarPayload>
          }
          createMany: {
            args: Prisma.GrammarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GrammarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarPayload>[]
          }
          delete: {
            args: Prisma.GrammarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarPayload>
          }
          update: {
            args: Prisma.GrammarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarPayload>
          }
          deleteMany: {
            args: Prisma.GrammarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GrammarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GrammarUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarPayload>[]
          }
          upsert: {
            args: Prisma.GrammarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarPayload>
          }
          aggregate: {
            args: Prisma.GrammarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGrammar>
          }
          groupBy: {
            args: Prisma.GrammarGroupByArgs<ExtArgs>
            result: $Utils.Optional<GrammarGroupByOutputType>[]
          }
          count: {
            args: Prisma.GrammarCountArgs<ExtArgs>
            result: $Utils.Optional<GrammarCountAggregateOutputType> | number
          }
        }
      }
      GrammarSection: {
        payload: Prisma.$GrammarSectionPayload<ExtArgs>
        fields: Prisma.GrammarSectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GrammarSectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarSectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GrammarSectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarSectionPayload>
          }
          findFirst: {
            args: Prisma.GrammarSectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarSectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GrammarSectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarSectionPayload>
          }
          findMany: {
            args: Prisma.GrammarSectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarSectionPayload>[]
          }
          create: {
            args: Prisma.GrammarSectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarSectionPayload>
          }
          createMany: {
            args: Prisma.GrammarSectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GrammarSectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarSectionPayload>[]
          }
          delete: {
            args: Prisma.GrammarSectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarSectionPayload>
          }
          update: {
            args: Prisma.GrammarSectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarSectionPayload>
          }
          deleteMany: {
            args: Prisma.GrammarSectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GrammarSectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GrammarSectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarSectionPayload>[]
          }
          upsert: {
            args: Prisma.GrammarSectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarSectionPayload>
          }
          aggregate: {
            args: Prisma.GrammarSectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGrammarSection>
          }
          groupBy: {
            args: Prisma.GrammarSectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<GrammarSectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.GrammarSectionCountArgs<ExtArgs>
            result: $Utils.Optional<GrammarSectionCountAggregateOutputType> | number
          }
        }
      }
      Example: {
        payload: Prisma.$ExamplePayload<ExtArgs>
        fields: Prisma.ExampleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExampleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamplePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExampleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamplePayload>
          }
          findFirst: {
            args: Prisma.ExampleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamplePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExampleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamplePayload>
          }
          findMany: {
            args: Prisma.ExampleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamplePayload>[]
          }
          create: {
            args: Prisma.ExampleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamplePayload>
          }
          createMany: {
            args: Prisma.ExampleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExampleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamplePayload>[]
          }
          delete: {
            args: Prisma.ExampleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamplePayload>
          }
          update: {
            args: Prisma.ExampleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamplePayload>
          }
          deleteMany: {
            args: Prisma.ExampleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExampleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExampleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamplePayload>[]
          }
          upsert: {
            args: Prisma.ExampleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamplePayload>
          }
          aggregate: {
            args: Prisma.ExampleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExample>
          }
          groupBy: {
            args: Prisma.ExampleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExampleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExampleCountArgs<ExtArgs>
            result: $Utils.Optional<ExampleCountAggregateOutputType> | number
          }
        }
      }
      DailyUsage: {
        payload: Prisma.$DailyUsagePayload<ExtArgs>
        fields: Prisma.DailyUsageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyUsageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyUsagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyUsageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyUsagePayload>
          }
          findFirst: {
            args: Prisma.DailyUsageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyUsagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyUsageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyUsagePayload>
          }
          findMany: {
            args: Prisma.DailyUsageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyUsagePayload>[]
          }
          create: {
            args: Prisma.DailyUsageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyUsagePayload>
          }
          createMany: {
            args: Prisma.DailyUsageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyUsageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyUsagePayload>[]
          }
          delete: {
            args: Prisma.DailyUsageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyUsagePayload>
          }
          update: {
            args: Prisma.DailyUsageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyUsagePayload>
          }
          deleteMany: {
            args: Prisma.DailyUsageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyUsageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DailyUsageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyUsagePayload>[]
          }
          upsert: {
            args: Prisma.DailyUsageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyUsagePayload>
          }
          aggregate: {
            args: Prisma.DailyUsageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyUsage>
          }
          groupBy: {
            args: Prisma.DailyUsageGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyUsageGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyUsageCountArgs<ExtArgs>
            result: $Utils.Optional<DailyUsageCountAggregateOutputType> | number
          }
        }
      }
      DailyUsageVocab: {
        payload: Prisma.$DailyUsageVocabPayload<ExtArgs>
        fields: Prisma.DailyUsageVocabFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyUsageVocabFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyUsageVocabPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyUsageVocabFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyUsageVocabPayload>
          }
          findFirst: {
            args: Prisma.DailyUsageVocabFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyUsageVocabPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyUsageVocabFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyUsageVocabPayload>
          }
          findMany: {
            args: Prisma.DailyUsageVocabFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyUsageVocabPayload>[]
          }
          create: {
            args: Prisma.DailyUsageVocabCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyUsageVocabPayload>
          }
          createMany: {
            args: Prisma.DailyUsageVocabCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyUsageVocabCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyUsageVocabPayload>[]
          }
          delete: {
            args: Prisma.DailyUsageVocabDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyUsageVocabPayload>
          }
          update: {
            args: Prisma.DailyUsageVocabUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyUsageVocabPayload>
          }
          deleteMany: {
            args: Prisma.DailyUsageVocabDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyUsageVocabUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DailyUsageVocabUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyUsageVocabPayload>[]
          }
          upsert: {
            args: Prisma.DailyUsageVocabUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyUsageVocabPayload>
          }
          aggregate: {
            args: Prisma.DailyUsageVocabAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyUsageVocab>
          }
          groupBy: {
            args: Prisma.DailyUsageVocabGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyUsageVocabGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyUsageVocabCountArgs<ExtArgs>
            result: $Utils.Optional<DailyUsageVocabCountAggregateOutputType> | number
          }
        }
      }
      GrammarRule: {
        payload: Prisma.$GrammarRulePayload<ExtArgs>
        fields: Prisma.GrammarRuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GrammarRuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarRulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GrammarRuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarRulePayload>
          }
          findFirst: {
            args: Prisma.GrammarRuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarRulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GrammarRuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarRulePayload>
          }
          findMany: {
            args: Prisma.GrammarRuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarRulePayload>[]
          }
          create: {
            args: Prisma.GrammarRuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarRulePayload>
          }
          createMany: {
            args: Prisma.GrammarRuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GrammarRuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarRulePayload>[]
          }
          delete: {
            args: Prisma.GrammarRuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarRulePayload>
          }
          update: {
            args: Prisma.GrammarRuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarRulePayload>
          }
          deleteMany: {
            args: Prisma.GrammarRuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GrammarRuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GrammarRuleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarRulePayload>[]
          }
          upsert: {
            args: Prisma.GrammarRuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarRulePayload>
          }
          aggregate: {
            args: Prisma.GrammarRuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGrammarRule>
          }
          groupBy: {
            args: Prisma.GrammarRuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<GrammarRuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.GrammarRuleCountArgs<ExtArgs>
            result: $Utils.Optional<GrammarRuleCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    story?: StoryOmit
    storySection?: StorySectionOmit
    exercise?: ExerciseOmit
    exerciseOption?: ExerciseOptionOmit
    grammar?: GrammarOmit
    grammarSection?: GrammarSectionOmit
    example?: ExampleOmit
    dailyUsage?: DailyUsageOmit
    dailyUsageVocab?: DailyUsageVocabOmit
    grammarRule?: GrammarRuleOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type StoryCountOutputType
   */

  export type StoryCountOutputType = {
    sections: number
  }

  export type StoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sections?: boolean | StoryCountOutputTypeCountSectionsArgs
  }

  // Custom InputTypes
  /**
   * StoryCountOutputType without action
   */
  export type StoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryCountOutputType
     */
    select?: StoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StoryCountOutputType without action
   */
  export type StoryCountOutputTypeCountSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StorySectionWhereInput
  }


  /**
   * Count Type StorySectionCountOutputType
   */

  export type StorySectionCountOutputType = {
    exercises: number
  }

  export type StorySectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercises?: boolean | StorySectionCountOutputTypeCountExercisesArgs
  }

  // Custom InputTypes
  /**
   * StorySectionCountOutputType without action
   */
  export type StorySectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorySectionCountOutputType
     */
    select?: StorySectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StorySectionCountOutputType without action
   */
  export type StorySectionCountOutputTypeCountExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseWhereInput
  }


  /**
   * Count Type ExerciseCountOutputType
   */

  export type ExerciseCountOutputType = {
    options: number
  }

  export type ExerciseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    options?: boolean | ExerciseCountOutputTypeCountOptionsArgs
  }

  // Custom InputTypes
  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseCountOutputType
     */
    select?: ExerciseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeCountOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseOptionWhereInput
  }


  /**
   * Count Type GrammarCountOutputType
   */

  export type GrammarCountOutputType = {
    sections: number
    rules: number
  }

  export type GrammarCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sections?: boolean | GrammarCountOutputTypeCountSectionsArgs
    rules?: boolean | GrammarCountOutputTypeCountRulesArgs
  }

  // Custom InputTypes
  /**
   * GrammarCountOutputType without action
   */
  export type GrammarCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarCountOutputType
     */
    select?: GrammarCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GrammarCountOutputType without action
   */
  export type GrammarCountOutputTypeCountSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GrammarSectionWhereInput
  }

  /**
   * GrammarCountOutputType without action
   */
  export type GrammarCountOutputTypeCountRulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GrammarRuleWhereInput
  }


  /**
   * Count Type GrammarSectionCountOutputType
   */

  export type GrammarSectionCountOutputType = {
    examples: number
  }

  export type GrammarSectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    examples?: boolean | GrammarSectionCountOutputTypeCountExamplesArgs
  }

  // Custom InputTypes
  /**
   * GrammarSectionCountOutputType without action
   */
  export type GrammarSectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarSectionCountOutputType
     */
    select?: GrammarSectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GrammarSectionCountOutputType without action
   */
  export type GrammarSectionCountOutputTypeCountExamplesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExampleWhereInput
  }


  /**
   * Count Type DailyUsageCountOutputType
   */

  export type DailyUsageCountOutputType = {
    vocabs: number
  }

  export type DailyUsageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vocabs?: boolean | DailyUsageCountOutputTypeCountVocabsArgs
  }

  // Custom InputTypes
  /**
   * DailyUsageCountOutputType without action
   */
  export type DailyUsageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyUsageCountOutputType
     */
    select?: DailyUsageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DailyUsageCountOutputType without action
   */
  export type DailyUsageCountOutputTypeCountVocabsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyUsageVocabWhereInput
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
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
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
    email: string
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
    email?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
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
    readonly email: FieldRef<"User", 'String'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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
  }


  /**
   * Model Story
   */

  export type AggregateStory = {
    _count: StoryCountAggregateOutputType | null
    _avg: StoryAvgAggregateOutputType | null
    _sum: StorySumAggregateOutputType | null
    _min: StoryMinAggregateOutputType | null
    _max: StoryMaxAggregateOutputType | null
  }

  export type StoryAvgAggregateOutputType = {
    id: number | null
  }

  export type StorySumAggregateOutputType = {
    id: number | null
  }

  export type StoryMinAggregateOutputType = {
    id: number | null
    language: string | null
    file: string | null
  }

  export type StoryMaxAggregateOutputType = {
    id: number | null
    language: string | null
    file: string | null
  }

  export type StoryCountAggregateOutputType = {
    id: number
    language: number
    file: number
    data: number
    _all: number
  }


  export type StoryAvgAggregateInputType = {
    id?: true
  }

  export type StorySumAggregateInputType = {
    id?: true
  }

  export type StoryMinAggregateInputType = {
    id?: true
    language?: true
    file?: true
  }

  export type StoryMaxAggregateInputType = {
    id?: true
    language?: true
    file?: true
  }

  export type StoryCountAggregateInputType = {
    id?: true
    language?: true
    file?: true
    data?: true
    _all?: true
  }

  export type StoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Story to aggregate.
     */
    where?: StoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stories to fetch.
     */
    orderBy?: StoryOrderByWithRelationInput | StoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stories
    **/
    _count?: true | StoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoryMaxAggregateInputType
  }

  export type GetStoryAggregateType<T extends StoryAggregateArgs> = {
        [P in keyof T & keyof AggregateStory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStory[P]>
      : GetScalarType<T[P], AggregateStory[P]>
  }




  export type StoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoryWhereInput
    orderBy?: StoryOrderByWithAggregationInput | StoryOrderByWithAggregationInput[]
    by: StoryScalarFieldEnum[] | StoryScalarFieldEnum
    having?: StoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoryCountAggregateInputType | true
    _avg?: StoryAvgAggregateInputType
    _sum?: StorySumAggregateInputType
    _min?: StoryMinAggregateInputType
    _max?: StoryMaxAggregateInputType
  }

  export type StoryGroupByOutputType = {
    id: number
    language: string | null
    file: string | null
    data: JsonValue | null
    _count: StoryCountAggregateOutputType | null
    _avg: StoryAvgAggregateOutputType | null
    _sum: StorySumAggregateOutputType | null
    _min: StoryMinAggregateOutputType | null
    _max: StoryMaxAggregateOutputType | null
  }

  type GetStoryGroupByPayload<T extends StoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoryGroupByOutputType[P]>
            : GetScalarType<T[P], StoryGroupByOutputType[P]>
        }
      >
    >


  export type StorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    language?: boolean
    file?: boolean
    data?: boolean
    sections?: boolean | Story$sectionsArgs<ExtArgs>
    _count?: boolean | StoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["story"]>

  export type StorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    language?: boolean
    file?: boolean
    data?: boolean
  }, ExtArgs["result"]["story"]>

  export type StorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    language?: boolean
    file?: boolean
    data?: boolean
  }, ExtArgs["result"]["story"]>

  export type StorySelectScalar = {
    id?: boolean
    language?: boolean
    file?: boolean
    data?: boolean
  }

  export type StoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "language" | "file" | "data", ExtArgs["result"]["story"]>
  export type StoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sections?: boolean | Story$sectionsArgs<ExtArgs>
    _count?: boolean | StoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Story"
    objects: {
      sections: Prisma.$StorySectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      language: string | null
      file: string | null
      data: Prisma.JsonValue | null
    }, ExtArgs["result"]["story"]>
    composites: {}
  }

  type StoryGetPayload<S extends boolean | null | undefined | StoryDefaultArgs> = $Result.GetResult<Prisma.$StoryPayload, S>

  type StoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoryCountAggregateInputType | true
    }

  export interface StoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Story'], meta: { name: 'Story' } }
    /**
     * Find zero or one Story that matches the filter.
     * @param {StoryFindUniqueArgs} args - Arguments to find a Story
     * @example
     * // Get one Story
     * const story = await prisma.story.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoryFindUniqueArgs>(args: SelectSubset<T, StoryFindUniqueArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Story that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StoryFindUniqueOrThrowArgs} args - Arguments to find a Story
     * @example
     * // Get one Story
     * const story = await prisma.story.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoryFindUniqueOrThrowArgs>(args: SelectSubset<T, StoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Story that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryFindFirstArgs} args - Arguments to find a Story
     * @example
     * // Get one Story
     * const story = await prisma.story.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoryFindFirstArgs>(args?: SelectSubset<T, StoryFindFirstArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Story that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryFindFirstOrThrowArgs} args - Arguments to find a Story
     * @example
     * // Get one Story
     * const story = await prisma.story.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoryFindFirstOrThrowArgs>(args?: SelectSubset<T, StoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stories
     * const stories = await prisma.story.findMany()
     * 
     * // Get first 10 Stories
     * const stories = await prisma.story.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storyWithIdOnly = await prisma.story.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoryFindManyArgs>(args?: SelectSubset<T, StoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Story.
     * @param {StoryCreateArgs} args - Arguments to create a Story.
     * @example
     * // Create one Story
     * const Story = await prisma.story.create({
     *   data: {
     *     // ... data to create a Story
     *   }
     * })
     * 
     */
    create<T extends StoryCreateArgs>(args: SelectSubset<T, StoryCreateArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stories.
     * @param {StoryCreateManyArgs} args - Arguments to create many Stories.
     * @example
     * // Create many Stories
     * const story = await prisma.story.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoryCreateManyArgs>(args?: SelectSubset<T, StoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stories and returns the data saved in the database.
     * @param {StoryCreateManyAndReturnArgs} args - Arguments to create many Stories.
     * @example
     * // Create many Stories
     * const story = await prisma.story.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stories and only return the `id`
     * const storyWithIdOnly = await prisma.story.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StoryCreateManyAndReturnArgs>(args?: SelectSubset<T, StoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Story.
     * @param {StoryDeleteArgs} args - Arguments to delete one Story.
     * @example
     * // Delete one Story
     * const Story = await prisma.story.delete({
     *   where: {
     *     // ... filter to delete one Story
     *   }
     * })
     * 
     */
    delete<T extends StoryDeleteArgs>(args: SelectSubset<T, StoryDeleteArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Story.
     * @param {StoryUpdateArgs} args - Arguments to update one Story.
     * @example
     * // Update one Story
     * const story = await prisma.story.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoryUpdateArgs>(args: SelectSubset<T, StoryUpdateArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stories.
     * @param {StoryDeleteManyArgs} args - Arguments to filter Stories to delete.
     * @example
     * // Delete a few Stories
     * const { count } = await prisma.story.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoryDeleteManyArgs>(args?: SelectSubset<T, StoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stories
     * const story = await prisma.story.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoryUpdateManyArgs>(args: SelectSubset<T, StoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stories and returns the data updated in the database.
     * @param {StoryUpdateManyAndReturnArgs} args - Arguments to update many Stories.
     * @example
     * // Update many Stories
     * const story = await prisma.story.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stories and only return the `id`
     * const storyWithIdOnly = await prisma.story.updateManyAndReturn({
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
    updateManyAndReturn<T extends StoryUpdateManyAndReturnArgs>(args: SelectSubset<T, StoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Story.
     * @param {StoryUpsertArgs} args - Arguments to update or create a Story.
     * @example
     * // Update or create a Story
     * const story = await prisma.story.upsert({
     *   create: {
     *     // ... data to create a Story
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Story we want to update
     *   }
     * })
     */
    upsert<T extends StoryUpsertArgs>(args: SelectSubset<T, StoryUpsertArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryCountArgs} args - Arguments to filter Stories to count.
     * @example
     * // Count the number of Stories
     * const count = await prisma.story.count({
     *   where: {
     *     // ... the filter for the Stories we want to count
     *   }
     * })
    **/
    count<T extends StoryCountArgs>(
      args?: Subset<T, StoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Story.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StoryAggregateArgs>(args: Subset<T, StoryAggregateArgs>): Prisma.PrismaPromise<GetStoryAggregateType<T>>

    /**
     * Group by Story.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryGroupByArgs} args - Group by arguments.
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
      T extends StoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoryGroupByArgs['orderBy'] }
        : { orderBy?: StoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Story model
   */
  readonly fields: StoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Story.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sections<T extends Story$sectionsArgs<ExtArgs> = {}>(args?: Subset<T, Story$sectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorySectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Story model
   */
  interface StoryFieldRefs {
    readonly id: FieldRef<"Story", 'Int'>
    readonly language: FieldRef<"Story", 'String'>
    readonly file: FieldRef<"Story", 'String'>
    readonly data: FieldRef<"Story", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Story findUnique
   */
  export type StoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * Filter, which Story to fetch.
     */
    where: StoryWhereUniqueInput
  }

  /**
   * Story findUniqueOrThrow
   */
  export type StoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * Filter, which Story to fetch.
     */
    where: StoryWhereUniqueInput
  }

  /**
   * Story findFirst
   */
  export type StoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * Filter, which Story to fetch.
     */
    where?: StoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stories to fetch.
     */
    orderBy?: StoryOrderByWithRelationInput | StoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stories.
     */
    cursor?: StoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stories.
     */
    distinct?: StoryScalarFieldEnum | StoryScalarFieldEnum[]
  }

  /**
   * Story findFirstOrThrow
   */
  export type StoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * Filter, which Story to fetch.
     */
    where?: StoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stories to fetch.
     */
    orderBy?: StoryOrderByWithRelationInput | StoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stories.
     */
    cursor?: StoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stories.
     */
    distinct?: StoryScalarFieldEnum | StoryScalarFieldEnum[]
  }

  /**
   * Story findMany
   */
  export type StoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * Filter, which Stories to fetch.
     */
    where?: StoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stories to fetch.
     */
    orderBy?: StoryOrderByWithRelationInput | StoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stories.
     */
    cursor?: StoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stories.
     */
    distinct?: StoryScalarFieldEnum | StoryScalarFieldEnum[]
  }

  /**
   * Story create
   */
  export type StoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Story.
     */
    data?: XOR<StoryCreateInput, StoryUncheckedCreateInput>
  }

  /**
   * Story createMany
   */
  export type StoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stories.
     */
    data: StoryCreateManyInput | StoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Story createManyAndReturn
   */
  export type StoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * The data used to create many Stories.
     */
    data: StoryCreateManyInput | StoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Story update
   */
  export type StoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Story.
     */
    data: XOR<StoryUpdateInput, StoryUncheckedUpdateInput>
    /**
     * Choose, which Story to update.
     */
    where: StoryWhereUniqueInput
  }

  /**
   * Story updateMany
   */
  export type StoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stories.
     */
    data: XOR<StoryUpdateManyMutationInput, StoryUncheckedUpdateManyInput>
    /**
     * Filter which Stories to update
     */
    where?: StoryWhereInput
    /**
     * Limit how many Stories to update.
     */
    limit?: number
  }

  /**
   * Story updateManyAndReturn
   */
  export type StoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * The data used to update Stories.
     */
    data: XOR<StoryUpdateManyMutationInput, StoryUncheckedUpdateManyInput>
    /**
     * Filter which Stories to update
     */
    where?: StoryWhereInput
    /**
     * Limit how many Stories to update.
     */
    limit?: number
  }

  /**
   * Story upsert
   */
  export type StoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Story to update in case it exists.
     */
    where: StoryWhereUniqueInput
    /**
     * In case the Story found by the `where` argument doesn't exist, create a new Story with this data.
     */
    create: XOR<StoryCreateInput, StoryUncheckedCreateInput>
    /**
     * In case the Story was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoryUpdateInput, StoryUncheckedUpdateInput>
  }

  /**
   * Story delete
   */
  export type StoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * Filter which Story to delete.
     */
    where: StoryWhereUniqueInput
  }

  /**
   * Story deleteMany
   */
  export type StoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stories to delete
     */
    where?: StoryWhereInput
    /**
     * Limit how many Stories to delete.
     */
    limit?: number
  }

  /**
   * Story.sections
   */
  export type Story$sectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorySection
     */
    select?: StorySectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorySection
     */
    omit?: StorySectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorySectionInclude<ExtArgs> | null
    where?: StorySectionWhereInput
    orderBy?: StorySectionOrderByWithRelationInput | StorySectionOrderByWithRelationInput[]
    cursor?: StorySectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StorySectionScalarFieldEnum | StorySectionScalarFieldEnum[]
  }

  /**
   * Story without action
   */
  export type StoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
  }


  /**
   * Model StorySection
   */

  export type AggregateStorySection = {
    _count: StorySectionCountAggregateOutputType | null
    _avg: StorySectionAvgAggregateOutputType | null
    _sum: StorySectionSumAggregateOutputType | null
    _min: StorySectionMinAggregateOutputType | null
    _max: StorySectionMaxAggregateOutputType | null
  }

  export type StorySectionAvgAggregateOutputType = {
    id: number | null
    storyId: number | null
    order: number | null
  }

  export type StorySectionSumAggregateOutputType = {
    id: number | null
    storyId: number | null
    order: number | null
  }

  export type StorySectionMinAggregateOutputType = {
    id: number | null
    storyId: number | null
    sectionKey: string | null
    order: number | null
    title: string | null
    content: string | null
  }

  export type StorySectionMaxAggregateOutputType = {
    id: number | null
    storyId: number | null
    sectionKey: string | null
    order: number | null
    title: string | null
    content: string | null
  }

  export type StorySectionCountAggregateOutputType = {
    id: number
    storyId: number
    sectionKey: number
    order: number
    title: number
    content: number
    _all: number
  }


  export type StorySectionAvgAggregateInputType = {
    id?: true
    storyId?: true
    order?: true
  }

  export type StorySectionSumAggregateInputType = {
    id?: true
    storyId?: true
    order?: true
  }

  export type StorySectionMinAggregateInputType = {
    id?: true
    storyId?: true
    sectionKey?: true
    order?: true
    title?: true
    content?: true
  }

  export type StorySectionMaxAggregateInputType = {
    id?: true
    storyId?: true
    sectionKey?: true
    order?: true
    title?: true
    content?: true
  }

  export type StorySectionCountAggregateInputType = {
    id?: true
    storyId?: true
    sectionKey?: true
    order?: true
    title?: true
    content?: true
    _all?: true
  }

  export type StorySectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StorySection to aggregate.
     */
    where?: StorySectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StorySections to fetch.
     */
    orderBy?: StorySectionOrderByWithRelationInput | StorySectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StorySectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StorySections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StorySections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StorySections
    **/
    _count?: true | StorySectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StorySectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StorySectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StorySectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StorySectionMaxAggregateInputType
  }

  export type GetStorySectionAggregateType<T extends StorySectionAggregateArgs> = {
        [P in keyof T & keyof AggregateStorySection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStorySection[P]>
      : GetScalarType<T[P], AggregateStorySection[P]>
  }




  export type StorySectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StorySectionWhereInput
    orderBy?: StorySectionOrderByWithAggregationInput | StorySectionOrderByWithAggregationInput[]
    by: StorySectionScalarFieldEnum[] | StorySectionScalarFieldEnum
    having?: StorySectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StorySectionCountAggregateInputType | true
    _avg?: StorySectionAvgAggregateInputType
    _sum?: StorySectionSumAggregateInputType
    _min?: StorySectionMinAggregateInputType
    _max?: StorySectionMaxAggregateInputType
  }

  export type StorySectionGroupByOutputType = {
    id: number
    storyId: number
    sectionKey: string | null
    order: number | null
    title: string | null
    content: string | null
    _count: StorySectionCountAggregateOutputType | null
    _avg: StorySectionAvgAggregateOutputType | null
    _sum: StorySectionSumAggregateOutputType | null
    _min: StorySectionMinAggregateOutputType | null
    _max: StorySectionMaxAggregateOutputType | null
  }

  type GetStorySectionGroupByPayload<T extends StorySectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StorySectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StorySectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StorySectionGroupByOutputType[P]>
            : GetScalarType<T[P], StorySectionGroupByOutputType[P]>
        }
      >
    >


  export type StorySectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storyId?: boolean
    sectionKey?: boolean
    order?: boolean
    title?: boolean
    content?: boolean
    story?: boolean | StoryDefaultArgs<ExtArgs>
    exercises?: boolean | StorySection$exercisesArgs<ExtArgs>
    _count?: boolean | StorySectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storySection"]>

  export type StorySectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storyId?: boolean
    sectionKey?: boolean
    order?: boolean
    title?: boolean
    content?: boolean
    story?: boolean | StoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storySection"]>

  export type StorySectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storyId?: boolean
    sectionKey?: boolean
    order?: boolean
    title?: boolean
    content?: boolean
    story?: boolean | StoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storySection"]>

  export type StorySectionSelectScalar = {
    id?: boolean
    storyId?: boolean
    sectionKey?: boolean
    order?: boolean
    title?: boolean
    content?: boolean
  }

  export type StorySectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "storyId" | "sectionKey" | "order" | "title" | "content", ExtArgs["result"]["storySection"]>
  export type StorySectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    story?: boolean | StoryDefaultArgs<ExtArgs>
    exercises?: boolean | StorySection$exercisesArgs<ExtArgs>
    _count?: boolean | StorySectionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StorySectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    story?: boolean | StoryDefaultArgs<ExtArgs>
  }
  export type StorySectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    story?: boolean | StoryDefaultArgs<ExtArgs>
  }

  export type $StorySectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StorySection"
    objects: {
      story: Prisma.$StoryPayload<ExtArgs>
      exercises: Prisma.$ExercisePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      storyId: number
      sectionKey: string | null
      order: number | null
      title: string | null
      content: string | null
    }, ExtArgs["result"]["storySection"]>
    composites: {}
  }

  type StorySectionGetPayload<S extends boolean | null | undefined | StorySectionDefaultArgs> = $Result.GetResult<Prisma.$StorySectionPayload, S>

  type StorySectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StorySectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StorySectionCountAggregateInputType | true
    }

  export interface StorySectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StorySection'], meta: { name: 'StorySection' } }
    /**
     * Find zero or one StorySection that matches the filter.
     * @param {StorySectionFindUniqueArgs} args - Arguments to find a StorySection
     * @example
     * // Get one StorySection
     * const storySection = await prisma.storySection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StorySectionFindUniqueArgs>(args: SelectSubset<T, StorySectionFindUniqueArgs<ExtArgs>>): Prisma__StorySectionClient<$Result.GetResult<Prisma.$StorySectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StorySection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StorySectionFindUniqueOrThrowArgs} args - Arguments to find a StorySection
     * @example
     * // Get one StorySection
     * const storySection = await prisma.storySection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StorySectionFindUniqueOrThrowArgs>(args: SelectSubset<T, StorySectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StorySectionClient<$Result.GetResult<Prisma.$StorySectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StorySection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorySectionFindFirstArgs} args - Arguments to find a StorySection
     * @example
     * // Get one StorySection
     * const storySection = await prisma.storySection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StorySectionFindFirstArgs>(args?: SelectSubset<T, StorySectionFindFirstArgs<ExtArgs>>): Prisma__StorySectionClient<$Result.GetResult<Prisma.$StorySectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StorySection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorySectionFindFirstOrThrowArgs} args - Arguments to find a StorySection
     * @example
     * // Get one StorySection
     * const storySection = await prisma.storySection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StorySectionFindFirstOrThrowArgs>(args?: SelectSubset<T, StorySectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__StorySectionClient<$Result.GetResult<Prisma.$StorySectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StorySections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorySectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StorySections
     * const storySections = await prisma.storySection.findMany()
     * 
     * // Get first 10 StorySections
     * const storySections = await prisma.storySection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storySectionWithIdOnly = await prisma.storySection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StorySectionFindManyArgs>(args?: SelectSubset<T, StorySectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorySectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StorySection.
     * @param {StorySectionCreateArgs} args - Arguments to create a StorySection.
     * @example
     * // Create one StorySection
     * const StorySection = await prisma.storySection.create({
     *   data: {
     *     // ... data to create a StorySection
     *   }
     * })
     * 
     */
    create<T extends StorySectionCreateArgs>(args: SelectSubset<T, StorySectionCreateArgs<ExtArgs>>): Prisma__StorySectionClient<$Result.GetResult<Prisma.$StorySectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StorySections.
     * @param {StorySectionCreateManyArgs} args - Arguments to create many StorySections.
     * @example
     * // Create many StorySections
     * const storySection = await prisma.storySection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StorySectionCreateManyArgs>(args?: SelectSubset<T, StorySectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StorySections and returns the data saved in the database.
     * @param {StorySectionCreateManyAndReturnArgs} args - Arguments to create many StorySections.
     * @example
     * // Create many StorySections
     * const storySection = await prisma.storySection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StorySections and only return the `id`
     * const storySectionWithIdOnly = await prisma.storySection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StorySectionCreateManyAndReturnArgs>(args?: SelectSubset<T, StorySectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorySectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StorySection.
     * @param {StorySectionDeleteArgs} args - Arguments to delete one StorySection.
     * @example
     * // Delete one StorySection
     * const StorySection = await prisma.storySection.delete({
     *   where: {
     *     // ... filter to delete one StorySection
     *   }
     * })
     * 
     */
    delete<T extends StorySectionDeleteArgs>(args: SelectSubset<T, StorySectionDeleteArgs<ExtArgs>>): Prisma__StorySectionClient<$Result.GetResult<Prisma.$StorySectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StorySection.
     * @param {StorySectionUpdateArgs} args - Arguments to update one StorySection.
     * @example
     * // Update one StorySection
     * const storySection = await prisma.storySection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StorySectionUpdateArgs>(args: SelectSubset<T, StorySectionUpdateArgs<ExtArgs>>): Prisma__StorySectionClient<$Result.GetResult<Prisma.$StorySectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StorySections.
     * @param {StorySectionDeleteManyArgs} args - Arguments to filter StorySections to delete.
     * @example
     * // Delete a few StorySections
     * const { count } = await prisma.storySection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StorySectionDeleteManyArgs>(args?: SelectSubset<T, StorySectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StorySections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorySectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StorySections
     * const storySection = await prisma.storySection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StorySectionUpdateManyArgs>(args: SelectSubset<T, StorySectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StorySections and returns the data updated in the database.
     * @param {StorySectionUpdateManyAndReturnArgs} args - Arguments to update many StorySections.
     * @example
     * // Update many StorySections
     * const storySection = await prisma.storySection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StorySections and only return the `id`
     * const storySectionWithIdOnly = await prisma.storySection.updateManyAndReturn({
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
    updateManyAndReturn<T extends StorySectionUpdateManyAndReturnArgs>(args: SelectSubset<T, StorySectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorySectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StorySection.
     * @param {StorySectionUpsertArgs} args - Arguments to update or create a StorySection.
     * @example
     * // Update or create a StorySection
     * const storySection = await prisma.storySection.upsert({
     *   create: {
     *     // ... data to create a StorySection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StorySection we want to update
     *   }
     * })
     */
    upsert<T extends StorySectionUpsertArgs>(args: SelectSubset<T, StorySectionUpsertArgs<ExtArgs>>): Prisma__StorySectionClient<$Result.GetResult<Prisma.$StorySectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StorySections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorySectionCountArgs} args - Arguments to filter StorySections to count.
     * @example
     * // Count the number of StorySections
     * const count = await prisma.storySection.count({
     *   where: {
     *     // ... the filter for the StorySections we want to count
     *   }
     * })
    **/
    count<T extends StorySectionCountArgs>(
      args?: Subset<T, StorySectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StorySectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StorySection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorySectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StorySectionAggregateArgs>(args: Subset<T, StorySectionAggregateArgs>): Prisma.PrismaPromise<GetStorySectionAggregateType<T>>

    /**
     * Group by StorySection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorySectionGroupByArgs} args - Group by arguments.
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
      T extends StorySectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StorySectionGroupByArgs['orderBy'] }
        : { orderBy?: StorySectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StorySectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStorySectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StorySection model
   */
  readonly fields: StorySectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StorySection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StorySectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    story<T extends StoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoryDefaultArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    exercises<T extends StorySection$exercisesArgs<ExtArgs> = {}>(args?: Subset<T, StorySection$exercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the StorySection model
   */
  interface StorySectionFieldRefs {
    readonly id: FieldRef<"StorySection", 'Int'>
    readonly storyId: FieldRef<"StorySection", 'Int'>
    readonly sectionKey: FieldRef<"StorySection", 'String'>
    readonly order: FieldRef<"StorySection", 'Int'>
    readonly title: FieldRef<"StorySection", 'String'>
    readonly content: FieldRef<"StorySection", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StorySection findUnique
   */
  export type StorySectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorySection
     */
    select?: StorySectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorySection
     */
    omit?: StorySectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorySectionInclude<ExtArgs> | null
    /**
     * Filter, which StorySection to fetch.
     */
    where: StorySectionWhereUniqueInput
  }

  /**
   * StorySection findUniqueOrThrow
   */
  export type StorySectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorySection
     */
    select?: StorySectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorySection
     */
    omit?: StorySectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorySectionInclude<ExtArgs> | null
    /**
     * Filter, which StorySection to fetch.
     */
    where: StorySectionWhereUniqueInput
  }

  /**
   * StorySection findFirst
   */
  export type StorySectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorySection
     */
    select?: StorySectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorySection
     */
    omit?: StorySectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorySectionInclude<ExtArgs> | null
    /**
     * Filter, which StorySection to fetch.
     */
    where?: StorySectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StorySections to fetch.
     */
    orderBy?: StorySectionOrderByWithRelationInput | StorySectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StorySections.
     */
    cursor?: StorySectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StorySections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StorySections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StorySections.
     */
    distinct?: StorySectionScalarFieldEnum | StorySectionScalarFieldEnum[]
  }

  /**
   * StorySection findFirstOrThrow
   */
  export type StorySectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorySection
     */
    select?: StorySectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorySection
     */
    omit?: StorySectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorySectionInclude<ExtArgs> | null
    /**
     * Filter, which StorySection to fetch.
     */
    where?: StorySectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StorySections to fetch.
     */
    orderBy?: StorySectionOrderByWithRelationInput | StorySectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StorySections.
     */
    cursor?: StorySectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StorySections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StorySections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StorySections.
     */
    distinct?: StorySectionScalarFieldEnum | StorySectionScalarFieldEnum[]
  }

  /**
   * StorySection findMany
   */
  export type StorySectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorySection
     */
    select?: StorySectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorySection
     */
    omit?: StorySectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorySectionInclude<ExtArgs> | null
    /**
     * Filter, which StorySections to fetch.
     */
    where?: StorySectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StorySections to fetch.
     */
    orderBy?: StorySectionOrderByWithRelationInput | StorySectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StorySections.
     */
    cursor?: StorySectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StorySections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StorySections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StorySections.
     */
    distinct?: StorySectionScalarFieldEnum | StorySectionScalarFieldEnum[]
  }

  /**
   * StorySection create
   */
  export type StorySectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorySection
     */
    select?: StorySectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorySection
     */
    omit?: StorySectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorySectionInclude<ExtArgs> | null
    /**
     * The data needed to create a StorySection.
     */
    data: XOR<StorySectionCreateInput, StorySectionUncheckedCreateInput>
  }

  /**
   * StorySection createMany
   */
  export type StorySectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StorySections.
     */
    data: StorySectionCreateManyInput | StorySectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StorySection createManyAndReturn
   */
  export type StorySectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorySection
     */
    select?: StorySectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StorySection
     */
    omit?: StorySectionOmit<ExtArgs> | null
    /**
     * The data used to create many StorySections.
     */
    data: StorySectionCreateManyInput | StorySectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorySectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StorySection update
   */
  export type StorySectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorySection
     */
    select?: StorySectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorySection
     */
    omit?: StorySectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorySectionInclude<ExtArgs> | null
    /**
     * The data needed to update a StorySection.
     */
    data: XOR<StorySectionUpdateInput, StorySectionUncheckedUpdateInput>
    /**
     * Choose, which StorySection to update.
     */
    where: StorySectionWhereUniqueInput
  }

  /**
   * StorySection updateMany
   */
  export type StorySectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StorySections.
     */
    data: XOR<StorySectionUpdateManyMutationInput, StorySectionUncheckedUpdateManyInput>
    /**
     * Filter which StorySections to update
     */
    where?: StorySectionWhereInput
    /**
     * Limit how many StorySections to update.
     */
    limit?: number
  }

  /**
   * StorySection updateManyAndReturn
   */
  export type StorySectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorySection
     */
    select?: StorySectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StorySection
     */
    omit?: StorySectionOmit<ExtArgs> | null
    /**
     * The data used to update StorySections.
     */
    data: XOR<StorySectionUpdateManyMutationInput, StorySectionUncheckedUpdateManyInput>
    /**
     * Filter which StorySections to update
     */
    where?: StorySectionWhereInput
    /**
     * Limit how many StorySections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorySectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StorySection upsert
   */
  export type StorySectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorySection
     */
    select?: StorySectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorySection
     */
    omit?: StorySectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorySectionInclude<ExtArgs> | null
    /**
     * The filter to search for the StorySection to update in case it exists.
     */
    where: StorySectionWhereUniqueInput
    /**
     * In case the StorySection found by the `where` argument doesn't exist, create a new StorySection with this data.
     */
    create: XOR<StorySectionCreateInput, StorySectionUncheckedCreateInput>
    /**
     * In case the StorySection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StorySectionUpdateInput, StorySectionUncheckedUpdateInput>
  }

  /**
   * StorySection delete
   */
  export type StorySectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorySection
     */
    select?: StorySectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorySection
     */
    omit?: StorySectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorySectionInclude<ExtArgs> | null
    /**
     * Filter which StorySection to delete.
     */
    where: StorySectionWhereUniqueInput
  }

  /**
   * StorySection deleteMany
   */
  export type StorySectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StorySections to delete
     */
    where?: StorySectionWhereInput
    /**
     * Limit how many StorySections to delete.
     */
    limit?: number
  }

  /**
   * StorySection.exercises
   */
  export type StorySection$exercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    where?: ExerciseWhereInput
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    cursor?: ExerciseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * StorySection without action
   */
  export type StorySectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorySection
     */
    select?: StorySectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorySection
     */
    omit?: StorySectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorySectionInclude<ExtArgs> | null
  }


  /**
   * Model Exercise
   */

  export type AggregateExercise = {
    _count: ExerciseCountAggregateOutputType | null
    _avg: ExerciseAvgAggregateOutputType | null
    _sum: ExerciseSumAggregateOutputType | null
    _min: ExerciseMinAggregateOutputType | null
    _max: ExerciseMaxAggregateOutputType | null
  }

  export type ExerciseAvgAggregateOutputType = {
    id: number | null
    sectionId: number | null
    exerciseIdx: number | null
  }

  export type ExerciseSumAggregateOutputType = {
    id: number | null
    sectionId: number | null
    exerciseIdx: number | null
  }

  export type ExerciseMinAggregateOutputType = {
    id: number | null
    sectionId: number | null
    exerciseIdx: number | null
    question: string | null
    answer: string | null
    correctAnswer: string | null
  }

  export type ExerciseMaxAggregateOutputType = {
    id: number | null
    sectionId: number | null
    exerciseIdx: number | null
    question: string | null
    answer: string | null
    correctAnswer: string | null
  }

  export type ExerciseCountAggregateOutputType = {
    id: number
    sectionId: number
    exerciseIdx: number
    question: number
    answer: number
    correctAnswer: number
    _all: number
  }


  export type ExerciseAvgAggregateInputType = {
    id?: true
    sectionId?: true
    exerciseIdx?: true
  }

  export type ExerciseSumAggregateInputType = {
    id?: true
    sectionId?: true
    exerciseIdx?: true
  }

  export type ExerciseMinAggregateInputType = {
    id?: true
    sectionId?: true
    exerciseIdx?: true
    question?: true
    answer?: true
    correctAnswer?: true
  }

  export type ExerciseMaxAggregateInputType = {
    id?: true
    sectionId?: true
    exerciseIdx?: true
    question?: true
    answer?: true
    correctAnswer?: true
  }

  export type ExerciseCountAggregateInputType = {
    id?: true
    sectionId?: true
    exerciseIdx?: true
    question?: true
    answer?: true
    correctAnswer?: true
    _all?: true
  }

  export type ExerciseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exercise to aggregate.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exercises
    **/
    _count?: true | ExerciseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExerciseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExerciseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExerciseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExerciseMaxAggregateInputType
  }

  export type GetExerciseAggregateType<T extends ExerciseAggregateArgs> = {
        [P in keyof T & keyof AggregateExercise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExercise[P]>
      : GetScalarType<T[P], AggregateExercise[P]>
  }




  export type ExerciseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseWhereInput
    orderBy?: ExerciseOrderByWithAggregationInput | ExerciseOrderByWithAggregationInput[]
    by: ExerciseScalarFieldEnum[] | ExerciseScalarFieldEnum
    having?: ExerciseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExerciseCountAggregateInputType | true
    _avg?: ExerciseAvgAggregateInputType
    _sum?: ExerciseSumAggregateInputType
    _min?: ExerciseMinAggregateInputType
    _max?: ExerciseMaxAggregateInputType
  }

  export type ExerciseGroupByOutputType = {
    id: number
    sectionId: number
    exerciseIdx: number | null
    question: string | null
    answer: string | null
    correctAnswer: string | null
    _count: ExerciseCountAggregateOutputType | null
    _avg: ExerciseAvgAggregateOutputType | null
    _sum: ExerciseSumAggregateOutputType | null
    _min: ExerciseMinAggregateOutputType | null
    _max: ExerciseMaxAggregateOutputType | null
  }

  type GetExerciseGroupByPayload<T extends ExerciseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExerciseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExerciseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExerciseGroupByOutputType[P]>
            : GetScalarType<T[P], ExerciseGroupByOutputType[P]>
        }
      >
    >


  export type ExerciseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sectionId?: boolean
    exerciseIdx?: boolean
    question?: boolean
    answer?: boolean
    correctAnswer?: boolean
    section?: boolean | StorySectionDefaultArgs<ExtArgs>
    options?: boolean | Exercise$optionsArgs<ExtArgs>
    _count?: boolean | ExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sectionId?: boolean
    exerciseIdx?: boolean
    question?: boolean
    answer?: boolean
    correctAnswer?: boolean
    section?: boolean | StorySectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sectionId?: boolean
    exerciseIdx?: boolean
    question?: boolean
    answer?: boolean
    correctAnswer?: boolean
    section?: boolean | StorySectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectScalar = {
    id?: boolean
    sectionId?: boolean
    exerciseIdx?: boolean
    question?: boolean
    answer?: boolean
    correctAnswer?: boolean
  }

  export type ExerciseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sectionId" | "exerciseIdx" | "question" | "answer" | "correctAnswer", ExtArgs["result"]["exercise"]>
  export type ExerciseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | StorySectionDefaultArgs<ExtArgs>
    options?: boolean | Exercise$optionsArgs<ExtArgs>
    _count?: boolean | ExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExerciseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | StorySectionDefaultArgs<ExtArgs>
  }
  export type ExerciseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | StorySectionDefaultArgs<ExtArgs>
  }

  export type $ExercisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Exercise"
    objects: {
      section: Prisma.$StorySectionPayload<ExtArgs>
      options: Prisma.$ExerciseOptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sectionId: number
      exerciseIdx: number | null
      question: string | null
      answer: string | null
      correctAnswer: string | null
    }, ExtArgs["result"]["exercise"]>
    composites: {}
  }

  type ExerciseGetPayload<S extends boolean | null | undefined | ExerciseDefaultArgs> = $Result.GetResult<Prisma.$ExercisePayload, S>

  type ExerciseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExerciseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExerciseCountAggregateInputType | true
    }

  export interface ExerciseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Exercise'], meta: { name: 'Exercise' } }
    /**
     * Find zero or one Exercise that matches the filter.
     * @param {ExerciseFindUniqueArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExerciseFindUniqueArgs>(args: SelectSubset<T, ExerciseFindUniqueArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Exercise that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExerciseFindUniqueOrThrowArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExerciseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExerciseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindFirstArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExerciseFindFirstArgs>(args?: SelectSubset<T, ExerciseFindFirstArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindFirstOrThrowArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExerciseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExerciseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exercises
     * const exercises = await prisma.exercise.findMany()
     * 
     * // Get first 10 Exercises
     * const exercises = await prisma.exercise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exerciseWithIdOnly = await prisma.exercise.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExerciseFindManyArgs>(args?: SelectSubset<T, ExerciseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Exercise.
     * @param {ExerciseCreateArgs} args - Arguments to create a Exercise.
     * @example
     * // Create one Exercise
     * const Exercise = await prisma.exercise.create({
     *   data: {
     *     // ... data to create a Exercise
     *   }
     * })
     * 
     */
    create<T extends ExerciseCreateArgs>(args: SelectSubset<T, ExerciseCreateArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Exercises.
     * @param {ExerciseCreateManyArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercise = await prisma.exercise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExerciseCreateManyArgs>(args?: SelectSubset<T, ExerciseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Exercises and returns the data saved in the database.
     * @param {ExerciseCreateManyAndReturnArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercise = await prisma.exercise.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Exercises and only return the `id`
     * const exerciseWithIdOnly = await prisma.exercise.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExerciseCreateManyAndReturnArgs>(args?: SelectSubset<T, ExerciseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Exercise.
     * @param {ExerciseDeleteArgs} args - Arguments to delete one Exercise.
     * @example
     * // Delete one Exercise
     * const Exercise = await prisma.exercise.delete({
     *   where: {
     *     // ... filter to delete one Exercise
     *   }
     * })
     * 
     */
    delete<T extends ExerciseDeleteArgs>(args: SelectSubset<T, ExerciseDeleteArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Exercise.
     * @param {ExerciseUpdateArgs} args - Arguments to update one Exercise.
     * @example
     * // Update one Exercise
     * const exercise = await prisma.exercise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExerciseUpdateArgs>(args: SelectSubset<T, ExerciseUpdateArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Exercises.
     * @param {ExerciseDeleteManyArgs} args - Arguments to filter Exercises to delete.
     * @example
     * // Delete a few Exercises
     * const { count } = await prisma.exercise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExerciseDeleteManyArgs>(args?: SelectSubset<T, ExerciseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exercises
     * const exercise = await prisma.exercise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExerciseUpdateManyArgs>(args: SelectSubset<T, ExerciseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises and returns the data updated in the database.
     * @param {ExerciseUpdateManyAndReturnArgs} args - Arguments to update many Exercises.
     * @example
     * // Update many Exercises
     * const exercise = await prisma.exercise.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Exercises and only return the `id`
     * const exerciseWithIdOnly = await prisma.exercise.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExerciseUpdateManyAndReturnArgs>(args: SelectSubset<T, ExerciseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Exercise.
     * @param {ExerciseUpsertArgs} args - Arguments to update or create a Exercise.
     * @example
     * // Update or create a Exercise
     * const exercise = await prisma.exercise.upsert({
     *   create: {
     *     // ... data to create a Exercise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exercise we want to update
     *   }
     * })
     */
    upsert<T extends ExerciseUpsertArgs>(args: SelectSubset<T, ExerciseUpsertArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseCountArgs} args - Arguments to filter Exercises to count.
     * @example
     * // Count the number of Exercises
     * const count = await prisma.exercise.count({
     *   where: {
     *     // ... the filter for the Exercises we want to count
     *   }
     * })
    **/
    count<T extends ExerciseCountArgs>(
      args?: Subset<T, ExerciseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExerciseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExerciseAggregateArgs>(args: Subset<T, ExerciseAggregateArgs>): Prisma.PrismaPromise<GetExerciseAggregateType<T>>

    /**
     * Group by Exercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseGroupByArgs} args - Group by arguments.
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
      T extends ExerciseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExerciseGroupByArgs['orderBy'] }
        : { orderBy?: ExerciseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExerciseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExerciseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Exercise model
   */
  readonly fields: ExerciseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Exercise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExerciseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    section<T extends StorySectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StorySectionDefaultArgs<ExtArgs>>): Prisma__StorySectionClient<$Result.GetResult<Prisma.$StorySectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    options<T extends Exercise$optionsArgs<ExtArgs> = {}>(args?: Subset<T, Exercise$optionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExerciseOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Exercise model
   */
  interface ExerciseFieldRefs {
    readonly id: FieldRef<"Exercise", 'Int'>
    readonly sectionId: FieldRef<"Exercise", 'Int'>
    readonly exerciseIdx: FieldRef<"Exercise", 'Int'>
    readonly question: FieldRef<"Exercise", 'String'>
    readonly answer: FieldRef<"Exercise", 'String'>
    readonly correctAnswer: FieldRef<"Exercise", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Exercise findUnique
   */
  export type ExerciseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise findUniqueOrThrow
   */
  export type ExerciseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise findFirst
   */
  export type ExerciseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises.
     */
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise findFirstOrThrow
   */
  export type ExerciseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises.
     */
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise findMany
   */
  export type ExerciseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercises to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises.
     */
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise create
   */
  export type ExerciseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The data needed to create a Exercise.
     */
    data: XOR<ExerciseCreateInput, ExerciseUncheckedCreateInput>
  }

  /**
   * Exercise createMany
   */
  export type ExerciseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Exercises.
     */
    data: ExerciseCreateManyInput | ExerciseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Exercise createManyAndReturn
   */
  export type ExerciseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * The data used to create many Exercises.
     */
    data: ExerciseCreateManyInput | ExerciseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Exercise update
   */
  export type ExerciseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The data needed to update a Exercise.
     */
    data: XOR<ExerciseUpdateInput, ExerciseUncheckedUpdateInput>
    /**
     * Choose, which Exercise to update.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise updateMany
   */
  export type ExerciseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Exercises.
     */
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyInput>
    /**
     * Filter which Exercises to update
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to update.
     */
    limit?: number
  }

  /**
   * Exercise updateManyAndReturn
   */
  export type ExerciseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * The data used to update Exercises.
     */
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyInput>
    /**
     * Filter which Exercises to update
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Exercise upsert
   */
  export type ExerciseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The filter to search for the Exercise to update in case it exists.
     */
    where: ExerciseWhereUniqueInput
    /**
     * In case the Exercise found by the `where` argument doesn't exist, create a new Exercise with this data.
     */
    create: XOR<ExerciseCreateInput, ExerciseUncheckedCreateInput>
    /**
     * In case the Exercise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExerciseUpdateInput, ExerciseUncheckedUpdateInput>
  }

  /**
   * Exercise delete
   */
  export type ExerciseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter which Exercise to delete.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise deleteMany
   */
  export type ExerciseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exercises to delete
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to delete.
     */
    limit?: number
  }

  /**
   * Exercise.options
   */
  export type Exercise$optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseOption
     */
    select?: ExerciseOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseOption
     */
    omit?: ExerciseOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseOptionInclude<ExtArgs> | null
    where?: ExerciseOptionWhereInput
    orderBy?: ExerciseOptionOrderByWithRelationInput | ExerciseOptionOrderByWithRelationInput[]
    cursor?: ExerciseOptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExerciseOptionScalarFieldEnum | ExerciseOptionScalarFieldEnum[]
  }

  /**
   * Exercise without action
   */
  export type ExerciseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
  }


  /**
   * Model ExerciseOption
   */

  export type AggregateExerciseOption = {
    _count: ExerciseOptionCountAggregateOutputType | null
    _avg: ExerciseOptionAvgAggregateOutputType | null
    _sum: ExerciseOptionSumAggregateOutputType | null
    _min: ExerciseOptionMinAggregateOutputType | null
    _max: ExerciseOptionMaxAggregateOutputType | null
  }

  export type ExerciseOptionAvgAggregateOutputType = {
    id: number | null
    exerciseId: number | null
    idx: number | null
  }

  export type ExerciseOptionSumAggregateOutputType = {
    id: number | null
    exerciseId: number | null
    idx: number | null
  }

  export type ExerciseOptionMinAggregateOutputType = {
    id: number | null
    exerciseId: number | null
    idx: number | null
    text: string | null
  }

  export type ExerciseOptionMaxAggregateOutputType = {
    id: number | null
    exerciseId: number | null
    idx: number | null
    text: string | null
  }

  export type ExerciseOptionCountAggregateOutputType = {
    id: number
    exerciseId: number
    idx: number
    text: number
    _all: number
  }


  export type ExerciseOptionAvgAggregateInputType = {
    id?: true
    exerciseId?: true
    idx?: true
  }

  export type ExerciseOptionSumAggregateInputType = {
    id?: true
    exerciseId?: true
    idx?: true
  }

  export type ExerciseOptionMinAggregateInputType = {
    id?: true
    exerciseId?: true
    idx?: true
    text?: true
  }

  export type ExerciseOptionMaxAggregateInputType = {
    id?: true
    exerciseId?: true
    idx?: true
    text?: true
  }

  export type ExerciseOptionCountAggregateInputType = {
    id?: true
    exerciseId?: true
    idx?: true
    text?: true
    _all?: true
  }

  export type ExerciseOptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExerciseOption to aggregate.
     */
    where?: ExerciseOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseOptions to fetch.
     */
    orderBy?: ExerciseOptionOrderByWithRelationInput | ExerciseOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExerciseOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExerciseOptions
    **/
    _count?: true | ExerciseOptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExerciseOptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExerciseOptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExerciseOptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExerciseOptionMaxAggregateInputType
  }

  export type GetExerciseOptionAggregateType<T extends ExerciseOptionAggregateArgs> = {
        [P in keyof T & keyof AggregateExerciseOption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExerciseOption[P]>
      : GetScalarType<T[P], AggregateExerciseOption[P]>
  }




  export type ExerciseOptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseOptionWhereInput
    orderBy?: ExerciseOptionOrderByWithAggregationInput | ExerciseOptionOrderByWithAggregationInput[]
    by: ExerciseOptionScalarFieldEnum[] | ExerciseOptionScalarFieldEnum
    having?: ExerciseOptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExerciseOptionCountAggregateInputType | true
    _avg?: ExerciseOptionAvgAggregateInputType
    _sum?: ExerciseOptionSumAggregateInputType
    _min?: ExerciseOptionMinAggregateInputType
    _max?: ExerciseOptionMaxAggregateInputType
  }

  export type ExerciseOptionGroupByOutputType = {
    id: number
    exerciseId: number
    idx: number | null
    text: string | null
    _count: ExerciseOptionCountAggregateOutputType | null
    _avg: ExerciseOptionAvgAggregateOutputType | null
    _sum: ExerciseOptionSumAggregateOutputType | null
    _min: ExerciseOptionMinAggregateOutputType | null
    _max: ExerciseOptionMaxAggregateOutputType | null
  }

  type GetExerciseOptionGroupByPayload<T extends ExerciseOptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExerciseOptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExerciseOptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExerciseOptionGroupByOutputType[P]>
            : GetScalarType<T[P], ExerciseOptionGroupByOutputType[P]>
        }
      >
    >


  export type ExerciseOptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    exerciseId?: boolean
    idx?: boolean
    text?: boolean
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exerciseOption"]>

  export type ExerciseOptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    exerciseId?: boolean
    idx?: boolean
    text?: boolean
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exerciseOption"]>

  export type ExerciseOptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    exerciseId?: boolean
    idx?: boolean
    text?: boolean
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exerciseOption"]>

  export type ExerciseOptionSelectScalar = {
    id?: boolean
    exerciseId?: boolean
    idx?: boolean
    text?: boolean
  }

  export type ExerciseOptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "exerciseId" | "idx" | "text", ExtArgs["result"]["exerciseOption"]>
  export type ExerciseOptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }
  export type ExerciseOptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }
  export type ExerciseOptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }

  export type $ExerciseOptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExerciseOption"
    objects: {
      exercise: Prisma.$ExercisePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      exerciseId: number
      idx: number | null
      text: string | null
    }, ExtArgs["result"]["exerciseOption"]>
    composites: {}
  }

  type ExerciseOptionGetPayload<S extends boolean | null | undefined | ExerciseOptionDefaultArgs> = $Result.GetResult<Prisma.$ExerciseOptionPayload, S>

  type ExerciseOptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExerciseOptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExerciseOptionCountAggregateInputType | true
    }

  export interface ExerciseOptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExerciseOption'], meta: { name: 'ExerciseOption' } }
    /**
     * Find zero or one ExerciseOption that matches the filter.
     * @param {ExerciseOptionFindUniqueArgs} args - Arguments to find a ExerciseOption
     * @example
     * // Get one ExerciseOption
     * const exerciseOption = await prisma.exerciseOption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExerciseOptionFindUniqueArgs>(args: SelectSubset<T, ExerciseOptionFindUniqueArgs<ExtArgs>>): Prisma__ExerciseOptionClient<$Result.GetResult<Prisma.$ExerciseOptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExerciseOption that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExerciseOptionFindUniqueOrThrowArgs} args - Arguments to find a ExerciseOption
     * @example
     * // Get one ExerciseOption
     * const exerciseOption = await prisma.exerciseOption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExerciseOptionFindUniqueOrThrowArgs>(args: SelectSubset<T, ExerciseOptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExerciseOptionClient<$Result.GetResult<Prisma.$ExerciseOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExerciseOption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseOptionFindFirstArgs} args - Arguments to find a ExerciseOption
     * @example
     * // Get one ExerciseOption
     * const exerciseOption = await prisma.exerciseOption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExerciseOptionFindFirstArgs>(args?: SelectSubset<T, ExerciseOptionFindFirstArgs<ExtArgs>>): Prisma__ExerciseOptionClient<$Result.GetResult<Prisma.$ExerciseOptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExerciseOption that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseOptionFindFirstOrThrowArgs} args - Arguments to find a ExerciseOption
     * @example
     * // Get one ExerciseOption
     * const exerciseOption = await prisma.exerciseOption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExerciseOptionFindFirstOrThrowArgs>(args?: SelectSubset<T, ExerciseOptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExerciseOptionClient<$Result.GetResult<Prisma.$ExerciseOptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExerciseOptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseOptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExerciseOptions
     * const exerciseOptions = await prisma.exerciseOption.findMany()
     * 
     * // Get first 10 ExerciseOptions
     * const exerciseOptions = await prisma.exerciseOption.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exerciseOptionWithIdOnly = await prisma.exerciseOption.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExerciseOptionFindManyArgs>(args?: SelectSubset<T, ExerciseOptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExerciseOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExerciseOption.
     * @param {ExerciseOptionCreateArgs} args - Arguments to create a ExerciseOption.
     * @example
     * // Create one ExerciseOption
     * const ExerciseOption = await prisma.exerciseOption.create({
     *   data: {
     *     // ... data to create a ExerciseOption
     *   }
     * })
     * 
     */
    create<T extends ExerciseOptionCreateArgs>(args: SelectSubset<T, ExerciseOptionCreateArgs<ExtArgs>>): Prisma__ExerciseOptionClient<$Result.GetResult<Prisma.$ExerciseOptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExerciseOptions.
     * @param {ExerciseOptionCreateManyArgs} args - Arguments to create many ExerciseOptions.
     * @example
     * // Create many ExerciseOptions
     * const exerciseOption = await prisma.exerciseOption.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExerciseOptionCreateManyArgs>(args?: SelectSubset<T, ExerciseOptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExerciseOptions and returns the data saved in the database.
     * @param {ExerciseOptionCreateManyAndReturnArgs} args - Arguments to create many ExerciseOptions.
     * @example
     * // Create many ExerciseOptions
     * const exerciseOption = await prisma.exerciseOption.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExerciseOptions and only return the `id`
     * const exerciseOptionWithIdOnly = await prisma.exerciseOption.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExerciseOptionCreateManyAndReturnArgs>(args?: SelectSubset<T, ExerciseOptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExerciseOptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExerciseOption.
     * @param {ExerciseOptionDeleteArgs} args - Arguments to delete one ExerciseOption.
     * @example
     * // Delete one ExerciseOption
     * const ExerciseOption = await prisma.exerciseOption.delete({
     *   where: {
     *     // ... filter to delete one ExerciseOption
     *   }
     * })
     * 
     */
    delete<T extends ExerciseOptionDeleteArgs>(args: SelectSubset<T, ExerciseOptionDeleteArgs<ExtArgs>>): Prisma__ExerciseOptionClient<$Result.GetResult<Prisma.$ExerciseOptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExerciseOption.
     * @param {ExerciseOptionUpdateArgs} args - Arguments to update one ExerciseOption.
     * @example
     * // Update one ExerciseOption
     * const exerciseOption = await prisma.exerciseOption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExerciseOptionUpdateArgs>(args: SelectSubset<T, ExerciseOptionUpdateArgs<ExtArgs>>): Prisma__ExerciseOptionClient<$Result.GetResult<Prisma.$ExerciseOptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExerciseOptions.
     * @param {ExerciseOptionDeleteManyArgs} args - Arguments to filter ExerciseOptions to delete.
     * @example
     * // Delete a few ExerciseOptions
     * const { count } = await prisma.exerciseOption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExerciseOptionDeleteManyArgs>(args?: SelectSubset<T, ExerciseOptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExerciseOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseOptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExerciseOptions
     * const exerciseOption = await prisma.exerciseOption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExerciseOptionUpdateManyArgs>(args: SelectSubset<T, ExerciseOptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExerciseOptions and returns the data updated in the database.
     * @param {ExerciseOptionUpdateManyAndReturnArgs} args - Arguments to update many ExerciseOptions.
     * @example
     * // Update many ExerciseOptions
     * const exerciseOption = await prisma.exerciseOption.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExerciseOptions and only return the `id`
     * const exerciseOptionWithIdOnly = await prisma.exerciseOption.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExerciseOptionUpdateManyAndReturnArgs>(args: SelectSubset<T, ExerciseOptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExerciseOptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExerciseOption.
     * @param {ExerciseOptionUpsertArgs} args - Arguments to update or create a ExerciseOption.
     * @example
     * // Update or create a ExerciseOption
     * const exerciseOption = await prisma.exerciseOption.upsert({
     *   create: {
     *     // ... data to create a ExerciseOption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExerciseOption we want to update
     *   }
     * })
     */
    upsert<T extends ExerciseOptionUpsertArgs>(args: SelectSubset<T, ExerciseOptionUpsertArgs<ExtArgs>>): Prisma__ExerciseOptionClient<$Result.GetResult<Prisma.$ExerciseOptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExerciseOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseOptionCountArgs} args - Arguments to filter ExerciseOptions to count.
     * @example
     * // Count the number of ExerciseOptions
     * const count = await prisma.exerciseOption.count({
     *   where: {
     *     // ... the filter for the ExerciseOptions we want to count
     *   }
     * })
    **/
    count<T extends ExerciseOptionCountArgs>(
      args?: Subset<T, ExerciseOptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExerciseOptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExerciseOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseOptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExerciseOptionAggregateArgs>(args: Subset<T, ExerciseOptionAggregateArgs>): Prisma.PrismaPromise<GetExerciseOptionAggregateType<T>>

    /**
     * Group by ExerciseOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseOptionGroupByArgs} args - Group by arguments.
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
      T extends ExerciseOptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExerciseOptionGroupByArgs['orderBy'] }
        : { orderBy?: ExerciseOptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExerciseOptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExerciseOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExerciseOption model
   */
  readonly fields: ExerciseOptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExerciseOption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExerciseOptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exercise<T extends ExerciseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExerciseDefaultArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ExerciseOption model
   */
  interface ExerciseOptionFieldRefs {
    readonly id: FieldRef<"ExerciseOption", 'Int'>
    readonly exerciseId: FieldRef<"ExerciseOption", 'Int'>
    readonly idx: FieldRef<"ExerciseOption", 'Int'>
    readonly text: FieldRef<"ExerciseOption", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ExerciseOption findUnique
   */
  export type ExerciseOptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseOption
     */
    select?: ExerciseOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseOption
     */
    omit?: ExerciseOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseOptionInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseOption to fetch.
     */
    where: ExerciseOptionWhereUniqueInput
  }

  /**
   * ExerciseOption findUniqueOrThrow
   */
  export type ExerciseOptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseOption
     */
    select?: ExerciseOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseOption
     */
    omit?: ExerciseOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseOptionInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseOption to fetch.
     */
    where: ExerciseOptionWhereUniqueInput
  }

  /**
   * ExerciseOption findFirst
   */
  export type ExerciseOptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseOption
     */
    select?: ExerciseOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseOption
     */
    omit?: ExerciseOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseOptionInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseOption to fetch.
     */
    where?: ExerciseOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseOptions to fetch.
     */
    orderBy?: ExerciseOptionOrderByWithRelationInput | ExerciseOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExerciseOptions.
     */
    cursor?: ExerciseOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExerciseOptions.
     */
    distinct?: ExerciseOptionScalarFieldEnum | ExerciseOptionScalarFieldEnum[]
  }

  /**
   * ExerciseOption findFirstOrThrow
   */
  export type ExerciseOptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseOption
     */
    select?: ExerciseOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseOption
     */
    omit?: ExerciseOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseOptionInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseOption to fetch.
     */
    where?: ExerciseOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseOptions to fetch.
     */
    orderBy?: ExerciseOptionOrderByWithRelationInput | ExerciseOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExerciseOptions.
     */
    cursor?: ExerciseOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExerciseOptions.
     */
    distinct?: ExerciseOptionScalarFieldEnum | ExerciseOptionScalarFieldEnum[]
  }

  /**
   * ExerciseOption findMany
   */
  export type ExerciseOptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseOption
     */
    select?: ExerciseOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseOption
     */
    omit?: ExerciseOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseOptionInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseOptions to fetch.
     */
    where?: ExerciseOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseOptions to fetch.
     */
    orderBy?: ExerciseOptionOrderByWithRelationInput | ExerciseOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExerciseOptions.
     */
    cursor?: ExerciseOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExerciseOptions.
     */
    distinct?: ExerciseOptionScalarFieldEnum | ExerciseOptionScalarFieldEnum[]
  }

  /**
   * ExerciseOption create
   */
  export type ExerciseOptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseOption
     */
    select?: ExerciseOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseOption
     */
    omit?: ExerciseOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseOptionInclude<ExtArgs> | null
    /**
     * The data needed to create a ExerciseOption.
     */
    data: XOR<ExerciseOptionCreateInput, ExerciseOptionUncheckedCreateInput>
  }

  /**
   * ExerciseOption createMany
   */
  export type ExerciseOptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExerciseOptions.
     */
    data: ExerciseOptionCreateManyInput | ExerciseOptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExerciseOption createManyAndReturn
   */
  export type ExerciseOptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseOption
     */
    select?: ExerciseOptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseOption
     */
    omit?: ExerciseOptionOmit<ExtArgs> | null
    /**
     * The data used to create many ExerciseOptions.
     */
    data: ExerciseOptionCreateManyInput | ExerciseOptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseOptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExerciseOption update
   */
  export type ExerciseOptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseOption
     */
    select?: ExerciseOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseOption
     */
    omit?: ExerciseOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseOptionInclude<ExtArgs> | null
    /**
     * The data needed to update a ExerciseOption.
     */
    data: XOR<ExerciseOptionUpdateInput, ExerciseOptionUncheckedUpdateInput>
    /**
     * Choose, which ExerciseOption to update.
     */
    where: ExerciseOptionWhereUniqueInput
  }

  /**
   * ExerciseOption updateMany
   */
  export type ExerciseOptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExerciseOptions.
     */
    data: XOR<ExerciseOptionUpdateManyMutationInput, ExerciseOptionUncheckedUpdateManyInput>
    /**
     * Filter which ExerciseOptions to update
     */
    where?: ExerciseOptionWhereInput
    /**
     * Limit how many ExerciseOptions to update.
     */
    limit?: number
  }

  /**
   * ExerciseOption updateManyAndReturn
   */
  export type ExerciseOptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseOption
     */
    select?: ExerciseOptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseOption
     */
    omit?: ExerciseOptionOmit<ExtArgs> | null
    /**
     * The data used to update ExerciseOptions.
     */
    data: XOR<ExerciseOptionUpdateManyMutationInput, ExerciseOptionUncheckedUpdateManyInput>
    /**
     * Filter which ExerciseOptions to update
     */
    where?: ExerciseOptionWhereInput
    /**
     * Limit how many ExerciseOptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseOptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExerciseOption upsert
   */
  export type ExerciseOptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseOption
     */
    select?: ExerciseOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseOption
     */
    omit?: ExerciseOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseOptionInclude<ExtArgs> | null
    /**
     * The filter to search for the ExerciseOption to update in case it exists.
     */
    where: ExerciseOptionWhereUniqueInput
    /**
     * In case the ExerciseOption found by the `where` argument doesn't exist, create a new ExerciseOption with this data.
     */
    create: XOR<ExerciseOptionCreateInput, ExerciseOptionUncheckedCreateInput>
    /**
     * In case the ExerciseOption was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExerciseOptionUpdateInput, ExerciseOptionUncheckedUpdateInput>
  }

  /**
   * ExerciseOption delete
   */
  export type ExerciseOptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseOption
     */
    select?: ExerciseOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseOption
     */
    omit?: ExerciseOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseOptionInclude<ExtArgs> | null
    /**
     * Filter which ExerciseOption to delete.
     */
    where: ExerciseOptionWhereUniqueInput
  }

  /**
   * ExerciseOption deleteMany
   */
  export type ExerciseOptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExerciseOptions to delete
     */
    where?: ExerciseOptionWhereInput
    /**
     * Limit how many ExerciseOptions to delete.
     */
    limit?: number
  }

  /**
   * ExerciseOption without action
   */
  export type ExerciseOptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseOption
     */
    select?: ExerciseOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseOption
     */
    omit?: ExerciseOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseOptionInclude<ExtArgs> | null
  }


  /**
   * Model Grammar
   */

  export type AggregateGrammar = {
    _count: GrammarCountAggregateOutputType | null
    _avg: GrammarAvgAggregateOutputType | null
    _sum: GrammarSumAggregateOutputType | null
    _min: GrammarMinAggregateOutputType | null
    _max: GrammarMaxAggregateOutputType | null
  }

  export type GrammarAvgAggregateOutputType = {
    id: number | null
  }

  export type GrammarSumAggregateOutputType = {
    id: number | null
  }

  export type GrammarMinAggregateOutputType = {
    id: number | null
    language: string | null
    file: string | null
  }

  export type GrammarMaxAggregateOutputType = {
    id: number | null
    language: string | null
    file: string | null
  }

  export type GrammarCountAggregateOutputType = {
    id: number
    language: number
    file: number
    data: number
    _all: number
  }


  export type GrammarAvgAggregateInputType = {
    id?: true
  }

  export type GrammarSumAggregateInputType = {
    id?: true
  }

  export type GrammarMinAggregateInputType = {
    id?: true
    language?: true
    file?: true
  }

  export type GrammarMaxAggregateInputType = {
    id?: true
    language?: true
    file?: true
  }

  export type GrammarCountAggregateInputType = {
    id?: true
    language?: true
    file?: true
    data?: true
    _all?: true
  }

  export type GrammarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Grammar to aggregate.
     */
    where?: GrammarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grammars to fetch.
     */
    orderBy?: GrammarOrderByWithRelationInput | GrammarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GrammarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grammars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grammars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Grammars
    **/
    _count?: true | GrammarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GrammarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GrammarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GrammarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GrammarMaxAggregateInputType
  }

  export type GetGrammarAggregateType<T extends GrammarAggregateArgs> = {
        [P in keyof T & keyof AggregateGrammar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGrammar[P]>
      : GetScalarType<T[P], AggregateGrammar[P]>
  }




  export type GrammarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GrammarWhereInput
    orderBy?: GrammarOrderByWithAggregationInput | GrammarOrderByWithAggregationInput[]
    by: GrammarScalarFieldEnum[] | GrammarScalarFieldEnum
    having?: GrammarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GrammarCountAggregateInputType | true
    _avg?: GrammarAvgAggregateInputType
    _sum?: GrammarSumAggregateInputType
    _min?: GrammarMinAggregateInputType
    _max?: GrammarMaxAggregateInputType
  }

  export type GrammarGroupByOutputType = {
    id: number
    language: string | null
    file: string | null
    data: JsonValue | null
    _count: GrammarCountAggregateOutputType | null
    _avg: GrammarAvgAggregateOutputType | null
    _sum: GrammarSumAggregateOutputType | null
    _min: GrammarMinAggregateOutputType | null
    _max: GrammarMaxAggregateOutputType | null
  }

  type GetGrammarGroupByPayload<T extends GrammarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GrammarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GrammarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GrammarGroupByOutputType[P]>
            : GetScalarType<T[P], GrammarGroupByOutputType[P]>
        }
      >
    >


  export type GrammarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    language?: boolean
    file?: boolean
    data?: boolean
    sections?: boolean | Grammar$sectionsArgs<ExtArgs>
    rules?: boolean | Grammar$rulesArgs<ExtArgs>
    _count?: boolean | GrammarCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grammar"]>

  export type GrammarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    language?: boolean
    file?: boolean
    data?: boolean
  }, ExtArgs["result"]["grammar"]>

  export type GrammarSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    language?: boolean
    file?: boolean
    data?: boolean
  }, ExtArgs["result"]["grammar"]>

  export type GrammarSelectScalar = {
    id?: boolean
    language?: boolean
    file?: boolean
    data?: boolean
  }

  export type GrammarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "language" | "file" | "data", ExtArgs["result"]["grammar"]>
  export type GrammarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sections?: boolean | Grammar$sectionsArgs<ExtArgs>
    rules?: boolean | Grammar$rulesArgs<ExtArgs>
    _count?: boolean | GrammarCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GrammarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GrammarIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GrammarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Grammar"
    objects: {
      sections: Prisma.$GrammarSectionPayload<ExtArgs>[]
      rules: Prisma.$GrammarRulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      language: string | null
      file: string | null
      data: Prisma.JsonValue | null
    }, ExtArgs["result"]["grammar"]>
    composites: {}
  }

  type GrammarGetPayload<S extends boolean | null | undefined | GrammarDefaultArgs> = $Result.GetResult<Prisma.$GrammarPayload, S>

  type GrammarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GrammarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GrammarCountAggregateInputType | true
    }

  export interface GrammarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Grammar'], meta: { name: 'Grammar' } }
    /**
     * Find zero or one Grammar that matches the filter.
     * @param {GrammarFindUniqueArgs} args - Arguments to find a Grammar
     * @example
     * // Get one Grammar
     * const grammar = await prisma.grammar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GrammarFindUniqueArgs>(args: SelectSubset<T, GrammarFindUniqueArgs<ExtArgs>>): Prisma__GrammarClient<$Result.GetResult<Prisma.$GrammarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Grammar that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GrammarFindUniqueOrThrowArgs} args - Arguments to find a Grammar
     * @example
     * // Get one Grammar
     * const grammar = await prisma.grammar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GrammarFindUniqueOrThrowArgs>(args: SelectSubset<T, GrammarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GrammarClient<$Result.GetResult<Prisma.$GrammarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Grammar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarFindFirstArgs} args - Arguments to find a Grammar
     * @example
     * // Get one Grammar
     * const grammar = await prisma.grammar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GrammarFindFirstArgs>(args?: SelectSubset<T, GrammarFindFirstArgs<ExtArgs>>): Prisma__GrammarClient<$Result.GetResult<Prisma.$GrammarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Grammar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarFindFirstOrThrowArgs} args - Arguments to find a Grammar
     * @example
     * // Get one Grammar
     * const grammar = await prisma.grammar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GrammarFindFirstOrThrowArgs>(args?: SelectSubset<T, GrammarFindFirstOrThrowArgs<ExtArgs>>): Prisma__GrammarClient<$Result.GetResult<Prisma.$GrammarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Grammars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Grammars
     * const grammars = await prisma.grammar.findMany()
     * 
     * // Get first 10 Grammars
     * const grammars = await prisma.grammar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const grammarWithIdOnly = await prisma.grammar.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GrammarFindManyArgs>(args?: SelectSubset<T, GrammarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrammarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Grammar.
     * @param {GrammarCreateArgs} args - Arguments to create a Grammar.
     * @example
     * // Create one Grammar
     * const Grammar = await prisma.grammar.create({
     *   data: {
     *     // ... data to create a Grammar
     *   }
     * })
     * 
     */
    create<T extends GrammarCreateArgs>(args: SelectSubset<T, GrammarCreateArgs<ExtArgs>>): Prisma__GrammarClient<$Result.GetResult<Prisma.$GrammarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Grammars.
     * @param {GrammarCreateManyArgs} args - Arguments to create many Grammars.
     * @example
     * // Create many Grammars
     * const grammar = await prisma.grammar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GrammarCreateManyArgs>(args?: SelectSubset<T, GrammarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Grammars and returns the data saved in the database.
     * @param {GrammarCreateManyAndReturnArgs} args - Arguments to create many Grammars.
     * @example
     * // Create many Grammars
     * const grammar = await prisma.grammar.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Grammars and only return the `id`
     * const grammarWithIdOnly = await prisma.grammar.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GrammarCreateManyAndReturnArgs>(args?: SelectSubset<T, GrammarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrammarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Grammar.
     * @param {GrammarDeleteArgs} args - Arguments to delete one Grammar.
     * @example
     * // Delete one Grammar
     * const Grammar = await prisma.grammar.delete({
     *   where: {
     *     // ... filter to delete one Grammar
     *   }
     * })
     * 
     */
    delete<T extends GrammarDeleteArgs>(args: SelectSubset<T, GrammarDeleteArgs<ExtArgs>>): Prisma__GrammarClient<$Result.GetResult<Prisma.$GrammarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Grammar.
     * @param {GrammarUpdateArgs} args - Arguments to update one Grammar.
     * @example
     * // Update one Grammar
     * const grammar = await prisma.grammar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GrammarUpdateArgs>(args: SelectSubset<T, GrammarUpdateArgs<ExtArgs>>): Prisma__GrammarClient<$Result.GetResult<Prisma.$GrammarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Grammars.
     * @param {GrammarDeleteManyArgs} args - Arguments to filter Grammars to delete.
     * @example
     * // Delete a few Grammars
     * const { count } = await prisma.grammar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GrammarDeleteManyArgs>(args?: SelectSubset<T, GrammarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Grammars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Grammars
     * const grammar = await prisma.grammar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GrammarUpdateManyArgs>(args: SelectSubset<T, GrammarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Grammars and returns the data updated in the database.
     * @param {GrammarUpdateManyAndReturnArgs} args - Arguments to update many Grammars.
     * @example
     * // Update many Grammars
     * const grammar = await prisma.grammar.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Grammars and only return the `id`
     * const grammarWithIdOnly = await prisma.grammar.updateManyAndReturn({
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
    updateManyAndReturn<T extends GrammarUpdateManyAndReturnArgs>(args: SelectSubset<T, GrammarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrammarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Grammar.
     * @param {GrammarUpsertArgs} args - Arguments to update or create a Grammar.
     * @example
     * // Update or create a Grammar
     * const grammar = await prisma.grammar.upsert({
     *   create: {
     *     // ... data to create a Grammar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Grammar we want to update
     *   }
     * })
     */
    upsert<T extends GrammarUpsertArgs>(args: SelectSubset<T, GrammarUpsertArgs<ExtArgs>>): Prisma__GrammarClient<$Result.GetResult<Prisma.$GrammarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Grammars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarCountArgs} args - Arguments to filter Grammars to count.
     * @example
     * // Count the number of Grammars
     * const count = await prisma.grammar.count({
     *   where: {
     *     // ... the filter for the Grammars we want to count
     *   }
     * })
    **/
    count<T extends GrammarCountArgs>(
      args?: Subset<T, GrammarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GrammarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Grammar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GrammarAggregateArgs>(args: Subset<T, GrammarAggregateArgs>): Prisma.PrismaPromise<GetGrammarAggregateType<T>>

    /**
     * Group by Grammar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarGroupByArgs} args - Group by arguments.
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
      T extends GrammarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GrammarGroupByArgs['orderBy'] }
        : { orderBy?: GrammarGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GrammarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGrammarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Grammar model
   */
  readonly fields: GrammarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Grammar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GrammarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sections<T extends Grammar$sectionsArgs<ExtArgs> = {}>(args?: Subset<T, Grammar$sectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrammarSectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rules<T extends Grammar$rulesArgs<ExtArgs> = {}>(args?: Subset<T, Grammar$rulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrammarRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Grammar model
   */
  interface GrammarFieldRefs {
    readonly id: FieldRef<"Grammar", 'Int'>
    readonly language: FieldRef<"Grammar", 'String'>
    readonly file: FieldRef<"Grammar", 'String'>
    readonly data: FieldRef<"Grammar", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Grammar findUnique
   */
  export type GrammarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grammar
     */
    select?: GrammarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grammar
     */
    omit?: GrammarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarInclude<ExtArgs> | null
    /**
     * Filter, which Grammar to fetch.
     */
    where: GrammarWhereUniqueInput
  }

  /**
   * Grammar findUniqueOrThrow
   */
  export type GrammarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grammar
     */
    select?: GrammarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grammar
     */
    omit?: GrammarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarInclude<ExtArgs> | null
    /**
     * Filter, which Grammar to fetch.
     */
    where: GrammarWhereUniqueInput
  }

  /**
   * Grammar findFirst
   */
  export type GrammarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grammar
     */
    select?: GrammarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grammar
     */
    omit?: GrammarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarInclude<ExtArgs> | null
    /**
     * Filter, which Grammar to fetch.
     */
    where?: GrammarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grammars to fetch.
     */
    orderBy?: GrammarOrderByWithRelationInput | GrammarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Grammars.
     */
    cursor?: GrammarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grammars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grammars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Grammars.
     */
    distinct?: GrammarScalarFieldEnum | GrammarScalarFieldEnum[]
  }

  /**
   * Grammar findFirstOrThrow
   */
  export type GrammarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grammar
     */
    select?: GrammarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grammar
     */
    omit?: GrammarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarInclude<ExtArgs> | null
    /**
     * Filter, which Grammar to fetch.
     */
    where?: GrammarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grammars to fetch.
     */
    orderBy?: GrammarOrderByWithRelationInput | GrammarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Grammars.
     */
    cursor?: GrammarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grammars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grammars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Grammars.
     */
    distinct?: GrammarScalarFieldEnum | GrammarScalarFieldEnum[]
  }

  /**
   * Grammar findMany
   */
  export type GrammarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grammar
     */
    select?: GrammarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grammar
     */
    omit?: GrammarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarInclude<ExtArgs> | null
    /**
     * Filter, which Grammars to fetch.
     */
    where?: GrammarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grammars to fetch.
     */
    orderBy?: GrammarOrderByWithRelationInput | GrammarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Grammars.
     */
    cursor?: GrammarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grammars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grammars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Grammars.
     */
    distinct?: GrammarScalarFieldEnum | GrammarScalarFieldEnum[]
  }

  /**
   * Grammar create
   */
  export type GrammarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grammar
     */
    select?: GrammarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grammar
     */
    omit?: GrammarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarInclude<ExtArgs> | null
    /**
     * The data needed to create a Grammar.
     */
    data?: XOR<GrammarCreateInput, GrammarUncheckedCreateInput>
  }

  /**
   * Grammar createMany
   */
  export type GrammarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Grammars.
     */
    data: GrammarCreateManyInput | GrammarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Grammar createManyAndReturn
   */
  export type GrammarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grammar
     */
    select?: GrammarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Grammar
     */
    omit?: GrammarOmit<ExtArgs> | null
    /**
     * The data used to create many Grammars.
     */
    data: GrammarCreateManyInput | GrammarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Grammar update
   */
  export type GrammarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grammar
     */
    select?: GrammarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grammar
     */
    omit?: GrammarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarInclude<ExtArgs> | null
    /**
     * The data needed to update a Grammar.
     */
    data: XOR<GrammarUpdateInput, GrammarUncheckedUpdateInput>
    /**
     * Choose, which Grammar to update.
     */
    where: GrammarWhereUniqueInput
  }

  /**
   * Grammar updateMany
   */
  export type GrammarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Grammars.
     */
    data: XOR<GrammarUpdateManyMutationInput, GrammarUncheckedUpdateManyInput>
    /**
     * Filter which Grammars to update
     */
    where?: GrammarWhereInput
    /**
     * Limit how many Grammars to update.
     */
    limit?: number
  }

  /**
   * Grammar updateManyAndReturn
   */
  export type GrammarUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grammar
     */
    select?: GrammarSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Grammar
     */
    omit?: GrammarOmit<ExtArgs> | null
    /**
     * The data used to update Grammars.
     */
    data: XOR<GrammarUpdateManyMutationInput, GrammarUncheckedUpdateManyInput>
    /**
     * Filter which Grammars to update
     */
    where?: GrammarWhereInput
    /**
     * Limit how many Grammars to update.
     */
    limit?: number
  }

  /**
   * Grammar upsert
   */
  export type GrammarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grammar
     */
    select?: GrammarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grammar
     */
    omit?: GrammarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarInclude<ExtArgs> | null
    /**
     * The filter to search for the Grammar to update in case it exists.
     */
    where: GrammarWhereUniqueInput
    /**
     * In case the Grammar found by the `where` argument doesn't exist, create a new Grammar with this data.
     */
    create: XOR<GrammarCreateInput, GrammarUncheckedCreateInput>
    /**
     * In case the Grammar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GrammarUpdateInput, GrammarUncheckedUpdateInput>
  }

  /**
   * Grammar delete
   */
  export type GrammarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grammar
     */
    select?: GrammarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grammar
     */
    omit?: GrammarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarInclude<ExtArgs> | null
    /**
     * Filter which Grammar to delete.
     */
    where: GrammarWhereUniqueInput
  }

  /**
   * Grammar deleteMany
   */
  export type GrammarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Grammars to delete
     */
    where?: GrammarWhereInput
    /**
     * Limit how many Grammars to delete.
     */
    limit?: number
  }

  /**
   * Grammar.sections
   */
  export type Grammar$sectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarSection
     */
    select?: GrammarSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarSection
     */
    omit?: GrammarSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarSectionInclude<ExtArgs> | null
    where?: GrammarSectionWhereInput
    orderBy?: GrammarSectionOrderByWithRelationInput | GrammarSectionOrderByWithRelationInput[]
    cursor?: GrammarSectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GrammarSectionScalarFieldEnum | GrammarSectionScalarFieldEnum[]
  }

  /**
   * Grammar.rules
   */
  export type Grammar$rulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarRule
     */
    select?: GrammarRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarRule
     */
    omit?: GrammarRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarRuleInclude<ExtArgs> | null
    where?: GrammarRuleWhereInput
    orderBy?: GrammarRuleOrderByWithRelationInput | GrammarRuleOrderByWithRelationInput[]
    cursor?: GrammarRuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GrammarRuleScalarFieldEnum | GrammarRuleScalarFieldEnum[]
  }

  /**
   * Grammar without action
   */
  export type GrammarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grammar
     */
    select?: GrammarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grammar
     */
    omit?: GrammarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarInclude<ExtArgs> | null
  }


  /**
   * Model GrammarSection
   */

  export type AggregateGrammarSection = {
    _count: GrammarSectionCountAggregateOutputType | null
    _avg: GrammarSectionAvgAggregateOutputType | null
    _sum: GrammarSectionSumAggregateOutputType | null
    _min: GrammarSectionMinAggregateOutputType | null
    _max: GrammarSectionMaxAggregateOutputType | null
  }

  export type GrammarSectionAvgAggregateOutputType = {
    id: number | null
    grammarId: number | null
    order: number | null
  }

  export type GrammarSectionSumAggregateOutputType = {
    id: number | null
    grammarId: number | null
    order: number | null
  }

  export type GrammarSectionMinAggregateOutputType = {
    id: number | null
    grammarId: number | null
    sectionKey: string | null
    order: number | null
    title: string | null
    description: string | null
  }

  export type GrammarSectionMaxAggregateOutputType = {
    id: number | null
    grammarId: number | null
    sectionKey: string | null
    order: number | null
    title: string | null
    description: string | null
  }

  export type GrammarSectionCountAggregateOutputType = {
    id: number
    grammarId: number
    sectionKey: number
    order: number
    title: number
    description: number
    _all: number
  }


  export type GrammarSectionAvgAggregateInputType = {
    id?: true
    grammarId?: true
    order?: true
  }

  export type GrammarSectionSumAggregateInputType = {
    id?: true
    grammarId?: true
    order?: true
  }

  export type GrammarSectionMinAggregateInputType = {
    id?: true
    grammarId?: true
    sectionKey?: true
    order?: true
    title?: true
    description?: true
  }

  export type GrammarSectionMaxAggregateInputType = {
    id?: true
    grammarId?: true
    sectionKey?: true
    order?: true
    title?: true
    description?: true
  }

  export type GrammarSectionCountAggregateInputType = {
    id?: true
    grammarId?: true
    sectionKey?: true
    order?: true
    title?: true
    description?: true
    _all?: true
  }

  export type GrammarSectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GrammarSection to aggregate.
     */
    where?: GrammarSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GrammarSections to fetch.
     */
    orderBy?: GrammarSectionOrderByWithRelationInput | GrammarSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GrammarSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GrammarSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GrammarSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GrammarSections
    **/
    _count?: true | GrammarSectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GrammarSectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GrammarSectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GrammarSectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GrammarSectionMaxAggregateInputType
  }

  export type GetGrammarSectionAggregateType<T extends GrammarSectionAggregateArgs> = {
        [P in keyof T & keyof AggregateGrammarSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGrammarSection[P]>
      : GetScalarType<T[P], AggregateGrammarSection[P]>
  }




  export type GrammarSectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GrammarSectionWhereInput
    orderBy?: GrammarSectionOrderByWithAggregationInput | GrammarSectionOrderByWithAggregationInput[]
    by: GrammarSectionScalarFieldEnum[] | GrammarSectionScalarFieldEnum
    having?: GrammarSectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GrammarSectionCountAggregateInputType | true
    _avg?: GrammarSectionAvgAggregateInputType
    _sum?: GrammarSectionSumAggregateInputType
    _min?: GrammarSectionMinAggregateInputType
    _max?: GrammarSectionMaxAggregateInputType
  }

  export type GrammarSectionGroupByOutputType = {
    id: number
    grammarId: number
    sectionKey: string | null
    order: number | null
    title: string | null
    description: string | null
    _count: GrammarSectionCountAggregateOutputType | null
    _avg: GrammarSectionAvgAggregateOutputType | null
    _sum: GrammarSectionSumAggregateOutputType | null
    _min: GrammarSectionMinAggregateOutputType | null
    _max: GrammarSectionMaxAggregateOutputType | null
  }

  type GetGrammarSectionGroupByPayload<T extends GrammarSectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GrammarSectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GrammarSectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GrammarSectionGroupByOutputType[P]>
            : GetScalarType<T[P], GrammarSectionGroupByOutputType[P]>
        }
      >
    >


  export type GrammarSectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    grammarId?: boolean
    sectionKey?: boolean
    order?: boolean
    title?: boolean
    description?: boolean
    grammar?: boolean | GrammarDefaultArgs<ExtArgs>
    examples?: boolean | GrammarSection$examplesArgs<ExtArgs>
    _count?: boolean | GrammarSectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grammarSection"]>

  export type GrammarSectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    grammarId?: boolean
    sectionKey?: boolean
    order?: boolean
    title?: boolean
    description?: boolean
    grammar?: boolean | GrammarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grammarSection"]>

  export type GrammarSectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    grammarId?: boolean
    sectionKey?: boolean
    order?: boolean
    title?: boolean
    description?: boolean
    grammar?: boolean | GrammarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grammarSection"]>

  export type GrammarSectionSelectScalar = {
    id?: boolean
    grammarId?: boolean
    sectionKey?: boolean
    order?: boolean
    title?: boolean
    description?: boolean
  }

  export type GrammarSectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "grammarId" | "sectionKey" | "order" | "title" | "description", ExtArgs["result"]["grammarSection"]>
  export type GrammarSectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grammar?: boolean | GrammarDefaultArgs<ExtArgs>
    examples?: boolean | GrammarSection$examplesArgs<ExtArgs>
    _count?: boolean | GrammarSectionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GrammarSectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grammar?: boolean | GrammarDefaultArgs<ExtArgs>
  }
  export type GrammarSectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grammar?: boolean | GrammarDefaultArgs<ExtArgs>
  }

  export type $GrammarSectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GrammarSection"
    objects: {
      grammar: Prisma.$GrammarPayload<ExtArgs>
      examples: Prisma.$ExamplePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      grammarId: number
      sectionKey: string | null
      order: number | null
      title: string | null
      description: string | null
    }, ExtArgs["result"]["grammarSection"]>
    composites: {}
  }

  type GrammarSectionGetPayload<S extends boolean | null | undefined | GrammarSectionDefaultArgs> = $Result.GetResult<Prisma.$GrammarSectionPayload, S>

  type GrammarSectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GrammarSectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GrammarSectionCountAggregateInputType | true
    }

  export interface GrammarSectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GrammarSection'], meta: { name: 'GrammarSection' } }
    /**
     * Find zero or one GrammarSection that matches the filter.
     * @param {GrammarSectionFindUniqueArgs} args - Arguments to find a GrammarSection
     * @example
     * // Get one GrammarSection
     * const grammarSection = await prisma.grammarSection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GrammarSectionFindUniqueArgs>(args: SelectSubset<T, GrammarSectionFindUniqueArgs<ExtArgs>>): Prisma__GrammarSectionClient<$Result.GetResult<Prisma.$GrammarSectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GrammarSection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GrammarSectionFindUniqueOrThrowArgs} args - Arguments to find a GrammarSection
     * @example
     * // Get one GrammarSection
     * const grammarSection = await prisma.grammarSection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GrammarSectionFindUniqueOrThrowArgs>(args: SelectSubset<T, GrammarSectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GrammarSectionClient<$Result.GetResult<Prisma.$GrammarSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GrammarSection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarSectionFindFirstArgs} args - Arguments to find a GrammarSection
     * @example
     * // Get one GrammarSection
     * const grammarSection = await prisma.grammarSection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GrammarSectionFindFirstArgs>(args?: SelectSubset<T, GrammarSectionFindFirstArgs<ExtArgs>>): Prisma__GrammarSectionClient<$Result.GetResult<Prisma.$GrammarSectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GrammarSection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarSectionFindFirstOrThrowArgs} args - Arguments to find a GrammarSection
     * @example
     * // Get one GrammarSection
     * const grammarSection = await prisma.grammarSection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GrammarSectionFindFirstOrThrowArgs>(args?: SelectSubset<T, GrammarSectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__GrammarSectionClient<$Result.GetResult<Prisma.$GrammarSectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GrammarSections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarSectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GrammarSections
     * const grammarSections = await prisma.grammarSection.findMany()
     * 
     * // Get first 10 GrammarSections
     * const grammarSections = await prisma.grammarSection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const grammarSectionWithIdOnly = await prisma.grammarSection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GrammarSectionFindManyArgs>(args?: SelectSubset<T, GrammarSectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrammarSectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GrammarSection.
     * @param {GrammarSectionCreateArgs} args - Arguments to create a GrammarSection.
     * @example
     * // Create one GrammarSection
     * const GrammarSection = await prisma.grammarSection.create({
     *   data: {
     *     // ... data to create a GrammarSection
     *   }
     * })
     * 
     */
    create<T extends GrammarSectionCreateArgs>(args: SelectSubset<T, GrammarSectionCreateArgs<ExtArgs>>): Prisma__GrammarSectionClient<$Result.GetResult<Prisma.$GrammarSectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GrammarSections.
     * @param {GrammarSectionCreateManyArgs} args - Arguments to create many GrammarSections.
     * @example
     * // Create many GrammarSections
     * const grammarSection = await prisma.grammarSection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GrammarSectionCreateManyArgs>(args?: SelectSubset<T, GrammarSectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GrammarSections and returns the data saved in the database.
     * @param {GrammarSectionCreateManyAndReturnArgs} args - Arguments to create many GrammarSections.
     * @example
     * // Create many GrammarSections
     * const grammarSection = await prisma.grammarSection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GrammarSections and only return the `id`
     * const grammarSectionWithIdOnly = await prisma.grammarSection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GrammarSectionCreateManyAndReturnArgs>(args?: SelectSubset<T, GrammarSectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrammarSectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GrammarSection.
     * @param {GrammarSectionDeleteArgs} args - Arguments to delete one GrammarSection.
     * @example
     * // Delete one GrammarSection
     * const GrammarSection = await prisma.grammarSection.delete({
     *   where: {
     *     // ... filter to delete one GrammarSection
     *   }
     * })
     * 
     */
    delete<T extends GrammarSectionDeleteArgs>(args: SelectSubset<T, GrammarSectionDeleteArgs<ExtArgs>>): Prisma__GrammarSectionClient<$Result.GetResult<Prisma.$GrammarSectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GrammarSection.
     * @param {GrammarSectionUpdateArgs} args - Arguments to update one GrammarSection.
     * @example
     * // Update one GrammarSection
     * const grammarSection = await prisma.grammarSection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GrammarSectionUpdateArgs>(args: SelectSubset<T, GrammarSectionUpdateArgs<ExtArgs>>): Prisma__GrammarSectionClient<$Result.GetResult<Prisma.$GrammarSectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GrammarSections.
     * @param {GrammarSectionDeleteManyArgs} args - Arguments to filter GrammarSections to delete.
     * @example
     * // Delete a few GrammarSections
     * const { count } = await prisma.grammarSection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GrammarSectionDeleteManyArgs>(args?: SelectSubset<T, GrammarSectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GrammarSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarSectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GrammarSections
     * const grammarSection = await prisma.grammarSection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GrammarSectionUpdateManyArgs>(args: SelectSubset<T, GrammarSectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GrammarSections and returns the data updated in the database.
     * @param {GrammarSectionUpdateManyAndReturnArgs} args - Arguments to update many GrammarSections.
     * @example
     * // Update many GrammarSections
     * const grammarSection = await prisma.grammarSection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GrammarSections and only return the `id`
     * const grammarSectionWithIdOnly = await prisma.grammarSection.updateManyAndReturn({
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
    updateManyAndReturn<T extends GrammarSectionUpdateManyAndReturnArgs>(args: SelectSubset<T, GrammarSectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrammarSectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GrammarSection.
     * @param {GrammarSectionUpsertArgs} args - Arguments to update or create a GrammarSection.
     * @example
     * // Update or create a GrammarSection
     * const grammarSection = await prisma.grammarSection.upsert({
     *   create: {
     *     // ... data to create a GrammarSection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GrammarSection we want to update
     *   }
     * })
     */
    upsert<T extends GrammarSectionUpsertArgs>(args: SelectSubset<T, GrammarSectionUpsertArgs<ExtArgs>>): Prisma__GrammarSectionClient<$Result.GetResult<Prisma.$GrammarSectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GrammarSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarSectionCountArgs} args - Arguments to filter GrammarSections to count.
     * @example
     * // Count the number of GrammarSections
     * const count = await prisma.grammarSection.count({
     *   where: {
     *     // ... the filter for the GrammarSections we want to count
     *   }
     * })
    **/
    count<T extends GrammarSectionCountArgs>(
      args?: Subset<T, GrammarSectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GrammarSectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GrammarSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarSectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GrammarSectionAggregateArgs>(args: Subset<T, GrammarSectionAggregateArgs>): Prisma.PrismaPromise<GetGrammarSectionAggregateType<T>>

    /**
     * Group by GrammarSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarSectionGroupByArgs} args - Group by arguments.
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
      T extends GrammarSectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GrammarSectionGroupByArgs['orderBy'] }
        : { orderBy?: GrammarSectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GrammarSectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGrammarSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GrammarSection model
   */
  readonly fields: GrammarSectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GrammarSection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GrammarSectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    grammar<T extends GrammarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GrammarDefaultArgs<ExtArgs>>): Prisma__GrammarClient<$Result.GetResult<Prisma.$GrammarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    examples<T extends GrammarSection$examplesArgs<ExtArgs> = {}>(args?: Subset<T, GrammarSection$examplesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamplePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the GrammarSection model
   */
  interface GrammarSectionFieldRefs {
    readonly id: FieldRef<"GrammarSection", 'Int'>
    readonly grammarId: FieldRef<"GrammarSection", 'Int'>
    readonly sectionKey: FieldRef<"GrammarSection", 'String'>
    readonly order: FieldRef<"GrammarSection", 'Int'>
    readonly title: FieldRef<"GrammarSection", 'String'>
    readonly description: FieldRef<"GrammarSection", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GrammarSection findUnique
   */
  export type GrammarSectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarSection
     */
    select?: GrammarSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarSection
     */
    omit?: GrammarSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarSectionInclude<ExtArgs> | null
    /**
     * Filter, which GrammarSection to fetch.
     */
    where: GrammarSectionWhereUniqueInput
  }

  /**
   * GrammarSection findUniqueOrThrow
   */
  export type GrammarSectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarSection
     */
    select?: GrammarSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarSection
     */
    omit?: GrammarSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarSectionInclude<ExtArgs> | null
    /**
     * Filter, which GrammarSection to fetch.
     */
    where: GrammarSectionWhereUniqueInput
  }

  /**
   * GrammarSection findFirst
   */
  export type GrammarSectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarSection
     */
    select?: GrammarSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarSection
     */
    omit?: GrammarSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarSectionInclude<ExtArgs> | null
    /**
     * Filter, which GrammarSection to fetch.
     */
    where?: GrammarSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GrammarSections to fetch.
     */
    orderBy?: GrammarSectionOrderByWithRelationInput | GrammarSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GrammarSections.
     */
    cursor?: GrammarSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GrammarSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GrammarSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GrammarSections.
     */
    distinct?: GrammarSectionScalarFieldEnum | GrammarSectionScalarFieldEnum[]
  }

  /**
   * GrammarSection findFirstOrThrow
   */
  export type GrammarSectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarSection
     */
    select?: GrammarSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarSection
     */
    omit?: GrammarSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarSectionInclude<ExtArgs> | null
    /**
     * Filter, which GrammarSection to fetch.
     */
    where?: GrammarSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GrammarSections to fetch.
     */
    orderBy?: GrammarSectionOrderByWithRelationInput | GrammarSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GrammarSections.
     */
    cursor?: GrammarSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GrammarSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GrammarSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GrammarSections.
     */
    distinct?: GrammarSectionScalarFieldEnum | GrammarSectionScalarFieldEnum[]
  }

  /**
   * GrammarSection findMany
   */
  export type GrammarSectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarSection
     */
    select?: GrammarSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarSection
     */
    omit?: GrammarSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarSectionInclude<ExtArgs> | null
    /**
     * Filter, which GrammarSections to fetch.
     */
    where?: GrammarSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GrammarSections to fetch.
     */
    orderBy?: GrammarSectionOrderByWithRelationInput | GrammarSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GrammarSections.
     */
    cursor?: GrammarSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GrammarSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GrammarSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GrammarSections.
     */
    distinct?: GrammarSectionScalarFieldEnum | GrammarSectionScalarFieldEnum[]
  }

  /**
   * GrammarSection create
   */
  export type GrammarSectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarSection
     */
    select?: GrammarSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarSection
     */
    omit?: GrammarSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarSectionInclude<ExtArgs> | null
    /**
     * The data needed to create a GrammarSection.
     */
    data: XOR<GrammarSectionCreateInput, GrammarSectionUncheckedCreateInput>
  }

  /**
   * GrammarSection createMany
   */
  export type GrammarSectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GrammarSections.
     */
    data: GrammarSectionCreateManyInput | GrammarSectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GrammarSection createManyAndReturn
   */
  export type GrammarSectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarSection
     */
    select?: GrammarSectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarSection
     */
    omit?: GrammarSectionOmit<ExtArgs> | null
    /**
     * The data used to create many GrammarSections.
     */
    data: GrammarSectionCreateManyInput | GrammarSectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarSectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GrammarSection update
   */
  export type GrammarSectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarSection
     */
    select?: GrammarSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarSection
     */
    omit?: GrammarSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarSectionInclude<ExtArgs> | null
    /**
     * The data needed to update a GrammarSection.
     */
    data: XOR<GrammarSectionUpdateInput, GrammarSectionUncheckedUpdateInput>
    /**
     * Choose, which GrammarSection to update.
     */
    where: GrammarSectionWhereUniqueInput
  }

  /**
   * GrammarSection updateMany
   */
  export type GrammarSectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GrammarSections.
     */
    data: XOR<GrammarSectionUpdateManyMutationInput, GrammarSectionUncheckedUpdateManyInput>
    /**
     * Filter which GrammarSections to update
     */
    where?: GrammarSectionWhereInput
    /**
     * Limit how many GrammarSections to update.
     */
    limit?: number
  }

  /**
   * GrammarSection updateManyAndReturn
   */
  export type GrammarSectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarSection
     */
    select?: GrammarSectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarSection
     */
    omit?: GrammarSectionOmit<ExtArgs> | null
    /**
     * The data used to update GrammarSections.
     */
    data: XOR<GrammarSectionUpdateManyMutationInput, GrammarSectionUncheckedUpdateManyInput>
    /**
     * Filter which GrammarSections to update
     */
    where?: GrammarSectionWhereInput
    /**
     * Limit how many GrammarSections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarSectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GrammarSection upsert
   */
  export type GrammarSectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarSection
     */
    select?: GrammarSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarSection
     */
    omit?: GrammarSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarSectionInclude<ExtArgs> | null
    /**
     * The filter to search for the GrammarSection to update in case it exists.
     */
    where: GrammarSectionWhereUniqueInput
    /**
     * In case the GrammarSection found by the `where` argument doesn't exist, create a new GrammarSection with this data.
     */
    create: XOR<GrammarSectionCreateInput, GrammarSectionUncheckedCreateInput>
    /**
     * In case the GrammarSection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GrammarSectionUpdateInput, GrammarSectionUncheckedUpdateInput>
  }

  /**
   * GrammarSection delete
   */
  export type GrammarSectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarSection
     */
    select?: GrammarSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarSection
     */
    omit?: GrammarSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarSectionInclude<ExtArgs> | null
    /**
     * Filter which GrammarSection to delete.
     */
    where: GrammarSectionWhereUniqueInput
  }

  /**
   * GrammarSection deleteMany
   */
  export type GrammarSectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GrammarSections to delete
     */
    where?: GrammarSectionWhereInput
    /**
     * Limit how many GrammarSections to delete.
     */
    limit?: number
  }

  /**
   * GrammarSection.examples
   */
  export type GrammarSection$examplesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Example
     */
    select?: ExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Example
     */
    omit?: ExampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExampleInclude<ExtArgs> | null
    where?: ExampleWhereInput
    orderBy?: ExampleOrderByWithRelationInput | ExampleOrderByWithRelationInput[]
    cursor?: ExampleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExampleScalarFieldEnum | ExampleScalarFieldEnum[]
  }

  /**
   * GrammarSection without action
   */
  export type GrammarSectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarSection
     */
    select?: GrammarSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarSection
     */
    omit?: GrammarSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarSectionInclude<ExtArgs> | null
  }


  /**
   * Model Example
   */

  export type AggregateExample = {
    _count: ExampleCountAggregateOutputType | null
    _avg: ExampleAvgAggregateOutputType | null
    _sum: ExampleSumAggregateOutputType | null
    _min: ExampleMinAggregateOutputType | null
    _max: ExampleMaxAggregateOutputType | null
  }

  export type ExampleAvgAggregateOutputType = {
    id: number | null
    sectionId: number | null
    rowIndex: number | null
  }

  export type ExampleSumAggregateOutputType = {
    id: number | null
    sectionId: number | null
    rowIndex: number | null
  }

  export type ExampleMinAggregateOutputType = {
    id: number | null
    sectionId: number | null
    rowIndex: number | null
    german: string | null
    english: string | null
    myanmar: string | null
    japanese: string | null
    korean: string | null
    thai: string | null
    vietnamese: string | null
  }

  export type ExampleMaxAggregateOutputType = {
    id: number | null
    sectionId: number | null
    rowIndex: number | null
    german: string | null
    english: string | null
    myanmar: string | null
    japanese: string | null
    korean: string | null
    thai: string | null
    vietnamese: string | null
  }

  export type ExampleCountAggregateOutputType = {
    id: number
    sectionId: number
    rowIndex: number
    german: number
    english: number
    myanmar: number
    japanese: number
    korean: number
    thai: number
    vietnamese: number
    _all: number
  }


  export type ExampleAvgAggregateInputType = {
    id?: true
    sectionId?: true
    rowIndex?: true
  }

  export type ExampleSumAggregateInputType = {
    id?: true
    sectionId?: true
    rowIndex?: true
  }

  export type ExampleMinAggregateInputType = {
    id?: true
    sectionId?: true
    rowIndex?: true
    german?: true
    english?: true
    myanmar?: true
    japanese?: true
    korean?: true
    thai?: true
    vietnamese?: true
  }

  export type ExampleMaxAggregateInputType = {
    id?: true
    sectionId?: true
    rowIndex?: true
    german?: true
    english?: true
    myanmar?: true
    japanese?: true
    korean?: true
    thai?: true
    vietnamese?: true
  }

  export type ExampleCountAggregateInputType = {
    id?: true
    sectionId?: true
    rowIndex?: true
    german?: true
    english?: true
    myanmar?: true
    japanese?: true
    korean?: true
    thai?: true
    vietnamese?: true
    _all?: true
  }

  export type ExampleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Example to aggregate.
     */
    where?: ExampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Examples to fetch.
     */
    orderBy?: ExampleOrderByWithRelationInput | ExampleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Examples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Examples.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Examples
    **/
    _count?: true | ExampleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExampleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExampleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExampleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExampleMaxAggregateInputType
  }

  export type GetExampleAggregateType<T extends ExampleAggregateArgs> = {
        [P in keyof T & keyof AggregateExample]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExample[P]>
      : GetScalarType<T[P], AggregateExample[P]>
  }




  export type ExampleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExampleWhereInput
    orderBy?: ExampleOrderByWithAggregationInput | ExampleOrderByWithAggregationInput[]
    by: ExampleScalarFieldEnum[] | ExampleScalarFieldEnum
    having?: ExampleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExampleCountAggregateInputType | true
    _avg?: ExampleAvgAggregateInputType
    _sum?: ExampleSumAggregateInputType
    _min?: ExampleMinAggregateInputType
    _max?: ExampleMaxAggregateInputType
  }

  export type ExampleGroupByOutputType = {
    id: number
    sectionId: number
    rowIndex: number | null
    german: string | null
    english: string | null
    myanmar: string | null
    japanese: string | null
    korean: string | null
    thai: string | null
    vietnamese: string | null
    _count: ExampleCountAggregateOutputType | null
    _avg: ExampleAvgAggregateOutputType | null
    _sum: ExampleSumAggregateOutputType | null
    _min: ExampleMinAggregateOutputType | null
    _max: ExampleMaxAggregateOutputType | null
  }

  type GetExampleGroupByPayload<T extends ExampleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExampleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExampleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExampleGroupByOutputType[P]>
            : GetScalarType<T[P], ExampleGroupByOutputType[P]>
        }
      >
    >


  export type ExampleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sectionId?: boolean
    rowIndex?: boolean
    german?: boolean
    english?: boolean
    myanmar?: boolean
    japanese?: boolean
    korean?: boolean
    thai?: boolean
    vietnamese?: boolean
    section?: boolean | GrammarSectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["example"]>

  export type ExampleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sectionId?: boolean
    rowIndex?: boolean
    german?: boolean
    english?: boolean
    myanmar?: boolean
    japanese?: boolean
    korean?: boolean
    thai?: boolean
    vietnamese?: boolean
    section?: boolean | GrammarSectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["example"]>

  export type ExampleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sectionId?: boolean
    rowIndex?: boolean
    german?: boolean
    english?: boolean
    myanmar?: boolean
    japanese?: boolean
    korean?: boolean
    thai?: boolean
    vietnamese?: boolean
    section?: boolean | GrammarSectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["example"]>

  export type ExampleSelectScalar = {
    id?: boolean
    sectionId?: boolean
    rowIndex?: boolean
    german?: boolean
    english?: boolean
    myanmar?: boolean
    japanese?: boolean
    korean?: boolean
    thai?: boolean
    vietnamese?: boolean
  }

  export type ExampleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sectionId" | "rowIndex" | "german" | "english" | "myanmar" | "japanese" | "korean" | "thai" | "vietnamese", ExtArgs["result"]["example"]>
  export type ExampleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | GrammarSectionDefaultArgs<ExtArgs>
  }
  export type ExampleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | GrammarSectionDefaultArgs<ExtArgs>
  }
  export type ExampleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | GrammarSectionDefaultArgs<ExtArgs>
  }

  export type $ExamplePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Example"
    objects: {
      section: Prisma.$GrammarSectionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sectionId: number
      rowIndex: number | null
      german: string | null
      english: string | null
      myanmar: string | null
      japanese: string | null
      korean: string | null
      thai: string | null
      vietnamese: string | null
    }, ExtArgs["result"]["example"]>
    composites: {}
  }

  type ExampleGetPayload<S extends boolean | null | undefined | ExampleDefaultArgs> = $Result.GetResult<Prisma.$ExamplePayload, S>

  type ExampleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExampleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExampleCountAggregateInputType | true
    }

  export interface ExampleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Example'], meta: { name: 'Example' } }
    /**
     * Find zero or one Example that matches the filter.
     * @param {ExampleFindUniqueArgs} args - Arguments to find a Example
     * @example
     * // Get one Example
     * const example = await prisma.example.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExampleFindUniqueArgs>(args: SelectSubset<T, ExampleFindUniqueArgs<ExtArgs>>): Prisma__ExampleClient<$Result.GetResult<Prisma.$ExamplePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Example that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExampleFindUniqueOrThrowArgs} args - Arguments to find a Example
     * @example
     * // Get one Example
     * const example = await prisma.example.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExampleFindUniqueOrThrowArgs>(args: SelectSubset<T, ExampleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExampleClient<$Result.GetResult<Prisma.$ExamplePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Example that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExampleFindFirstArgs} args - Arguments to find a Example
     * @example
     * // Get one Example
     * const example = await prisma.example.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExampleFindFirstArgs>(args?: SelectSubset<T, ExampleFindFirstArgs<ExtArgs>>): Prisma__ExampleClient<$Result.GetResult<Prisma.$ExamplePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Example that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExampleFindFirstOrThrowArgs} args - Arguments to find a Example
     * @example
     * // Get one Example
     * const example = await prisma.example.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExampleFindFirstOrThrowArgs>(args?: SelectSubset<T, ExampleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExampleClient<$Result.GetResult<Prisma.$ExamplePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Examples that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExampleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Examples
     * const examples = await prisma.example.findMany()
     * 
     * // Get first 10 Examples
     * const examples = await prisma.example.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exampleWithIdOnly = await prisma.example.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExampleFindManyArgs>(args?: SelectSubset<T, ExampleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamplePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Example.
     * @param {ExampleCreateArgs} args - Arguments to create a Example.
     * @example
     * // Create one Example
     * const Example = await prisma.example.create({
     *   data: {
     *     // ... data to create a Example
     *   }
     * })
     * 
     */
    create<T extends ExampleCreateArgs>(args: SelectSubset<T, ExampleCreateArgs<ExtArgs>>): Prisma__ExampleClient<$Result.GetResult<Prisma.$ExamplePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Examples.
     * @param {ExampleCreateManyArgs} args - Arguments to create many Examples.
     * @example
     * // Create many Examples
     * const example = await prisma.example.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExampleCreateManyArgs>(args?: SelectSubset<T, ExampleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Examples and returns the data saved in the database.
     * @param {ExampleCreateManyAndReturnArgs} args - Arguments to create many Examples.
     * @example
     * // Create many Examples
     * const example = await prisma.example.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Examples and only return the `id`
     * const exampleWithIdOnly = await prisma.example.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExampleCreateManyAndReturnArgs>(args?: SelectSubset<T, ExampleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamplePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Example.
     * @param {ExampleDeleteArgs} args - Arguments to delete one Example.
     * @example
     * // Delete one Example
     * const Example = await prisma.example.delete({
     *   where: {
     *     // ... filter to delete one Example
     *   }
     * })
     * 
     */
    delete<T extends ExampleDeleteArgs>(args: SelectSubset<T, ExampleDeleteArgs<ExtArgs>>): Prisma__ExampleClient<$Result.GetResult<Prisma.$ExamplePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Example.
     * @param {ExampleUpdateArgs} args - Arguments to update one Example.
     * @example
     * // Update one Example
     * const example = await prisma.example.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExampleUpdateArgs>(args: SelectSubset<T, ExampleUpdateArgs<ExtArgs>>): Prisma__ExampleClient<$Result.GetResult<Prisma.$ExamplePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Examples.
     * @param {ExampleDeleteManyArgs} args - Arguments to filter Examples to delete.
     * @example
     * // Delete a few Examples
     * const { count } = await prisma.example.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExampleDeleteManyArgs>(args?: SelectSubset<T, ExampleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Examples.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExampleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Examples
     * const example = await prisma.example.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExampleUpdateManyArgs>(args: SelectSubset<T, ExampleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Examples and returns the data updated in the database.
     * @param {ExampleUpdateManyAndReturnArgs} args - Arguments to update many Examples.
     * @example
     * // Update many Examples
     * const example = await prisma.example.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Examples and only return the `id`
     * const exampleWithIdOnly = await prisma.example.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExampleUpdateManyAndReturnArgs>(args: SelectSubset<T, ExampleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamplePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Example.
     * @param {ExampleUpsertArgs} args - Arguments to update or create a Example.
     * @example
     * // Update or create a Example
     * const example = await prisma.example.upsert({
     *   create: {
     *     // ... data to create a Example
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Example we want to update
     *   }
     * })
     */
    upsert<T extends ExampleUpsertArgs>(args: SelectSubset<T, ExampleUpsertArgs<ExtArgs>>): Prisma__ExampleClient<$Result.GetResult<Prisma.$ExamplePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Examples.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExampleCountArgs} args - Arguments to filter Examples to count.
     * @example
     * // Count the number of Examples
     * const count = await prisma.example.count({
     *   where: {
     *     // ... the filter for the Examples we want to count
     *   }
     * })
    **/
    count<T extends ExampleCountArgs>(
      args?: Subset<T, ExampleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExampleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Example.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExampleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExampleAggregateArgs>(args: Subset<T, ExampleAggregateArgs>): Prisma.PrismaPromise<GetExampleAggregateType<T>>

    /**
     * Group by Example.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExampleGroupByArgs} args - Group by arguments.
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
      T extends ExampleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExampleGroupByArgs['orderBy'] }
        : { orderBy?: ExampleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExampleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExampleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Example model
   */
  readonly fields: ExampleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Example.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExampleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    section<T extends GrammarSectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GrammarSectionDefaultArgs<ExtArgs>>): Prisma__GrammarSectionClient<$Result.GetResult<Prisma.$GrammarSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Example model
   */
  interface ExampleFieldRefs {
    readonly id: FieldRef<"Example", 'Int'>
    readonly sectionId: FieldRef<"Example", 'Int'>
    readonly rowIndex: FieldRef<"Example", 'Int'>
    readonly german: FieldRef<"Example", 'String'>
    readonly english: FieldRef<"Example", 'String'>
    readonly myanmar: FieldRef<"Example", 'String'>
    readonly japanese: FieldRef<"Example", 'String'>
    readonly korean: FieldRef<"Example", 'String'>
    readonly thai: FieldRef<"Example", 'String'>
    readonly vietnamese: FieldRef<"Example", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Example findUnique
   */
  export type ExampleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Example
     */
    select?: ExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Example
     */
    omit?: ExampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExampleInclude<ExtArgs> | null
    /**
     * Filter, which Example to fetch.
     */
    where: ExampleWhereUniqueInput
  }

  /**
   * Example findUniqueOrThrow
   */
  export type ExampleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Example
     */
    select?: ExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Example
     */
    omit?: ExampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExampleInclude<ExtArgs> | null
    /**
     * Filter, which Example to fetch.
     */
    where: ExampleWhereUniqueInput
  }

  /**
   * Example findFirst
   */
  export type ExampleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Example
     */
    select?: ExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Example
     */
    omit?: ExampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExampleInclude<ExtArgs> | null
    /**
     * Filter, which Example to fetch.
     */
    where?: ExampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Examples to fetch.
     */
    orderBy?: ExampleOrderByWithRelationInput | ExampleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Examples.
     */
    cursor?: ExampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Examples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Examples.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Examples.
     */
    distinct?: ExampleScalarFieldEnum | ExampleScalarFieldEnum[]
  }

  /**
   * Example findFirstOrThrow
   */
  export type ExampleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Example
     */
    select?: ExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Example
     */
    omit?: ExampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExampleInclude<ExtArgs> | null
    /**
     * Filter, which Example to fetch.
     */
    where?: ExampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Examples to fetch.
     */
    orderBy?: ExampleOrderByWithRelationInput | ExampleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Examples.
     */
    cursor?: ExampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Examples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Examples.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Examples.
     */
    distinct?: ExampleScalarFieldEnum | ExampleScalarFieldEnum[]
  }

  /**
   * Example findMany
   */
  export type ExampleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Example
     */
    select?: ExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Example
     */
    omit?: ExampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExampleInclude<ExtArgs> | null
    /**
     * Filter, which Examples to fetch.
     */
    where?: ExampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Examples to fetch.
     */
    orderBy?: ExampleOrderByWithRelationInput | ExampleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Examples.
     */
    cursor?: ExampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Examples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Examples.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Examples.
     */
    distinct?: ExampleScalarFieldEnum | ExampleScalarFieldEnum[]
  }

  /**
   * Example create
   */
  export type ExampleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Example
     */
    select?: ExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Example
     */
    omit?: ExampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExampleInclude<ExtArgs> | null
    /**
     * The data needed to create a Example.
     */
    data: XOR<ExampleCreateInput, ExampleUncheckedCreateInput>
  }

  /**
   * Example createMany
   */
  export type ExampleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Examples.
     */
    data: ExampleCreateManyInput | ExampleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Example createManyAndReturn
   */
  export type ExampleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Example
     */
    select?: ExampleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Example
     */
    omit?: ExampleOmit<ExtArgs> | null
    /**
     * The data used to create many Examples.
     */
    data: ExampleCreateManyInput | ExampleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExampleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Example update
   */
  export type ExampleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Example
     */
    select?: ExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Example
     */
    omit?: ExampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExampleInclude<ExtArgs> | null
    /**
     * The data needed to update a Example.
     */
    data: XOR<ExampleUpdateInput, ExampleUncheckedUpdateInput>
    /**
     * Choose, which Example to update.
     */
    where: ExampleWhereUniqueInput
  }

  /**
   * Example updateMany
   */
  export type ExampleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Examples.
     */
    data: XOR<ExampleUpdateManyMutationInput, ExampleUncheckedUpdateManyInput>
    /**
     * Filter which Examples to update
     */
    where?: ExampleWhereInput
    /**
     * Limit how many Examples to update.
     */
    limit?: number
  }

  /**
   * Example updateManyAndReturn
   */
  export type ExampleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Example
     */
    select?: ExampleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Example
     */
    omit?: ExampleOmit<ExtArgs> | null
    /**
     * The data used to update Examples.
     */
    data: XOR<ExampleUpdateManyMutationInput, ExampleUncheckedUpdateManyInput>
    /**
     * Filter which Examples to update
     */
    where?: ExampleWhereInput
    /**
     * Limit how many Examples to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExampleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Example upsert
   */
  export type ExampleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Example
     */
    select?: ExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Example
     */
    omit?: ExampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExampleInclude<ExtArgs> | null
    /**
     * The filter to search for the Example to update in case it exists.
     */
    where: ExampleWhereUniqueInput
    /**
     * In case the Example found by the `where` argument doesn't exist, create a new Example with this data.
     */
    create: XOR<ExampleCreateInput, ExampleUncheckedCreateInput>
    /**
     * In case the Example was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExampleUpdateInput, ExampleUncheckedUpdateInput>
  }

  /**
   * Example delete
   */
  export type ExampleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Example
     */
    select?: ExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Example
     */
    omit?: ExampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExampleInclude<ExtArgs> | null
    /**
     * Filter which Example to delete.
     */
    where: ExampleWhereUniqueInput
  }

  /**
   * Example deleteMany
   */
  export type ExampleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Examples to delete
     */
    where?: ExampleWhereInput
    /**
     * Limit how many Examples to delete.
     */
    limit?: number
  }

  /**
   * Example without action
   */
  export type ExampleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Example
     */
    select?: ExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Example
     */
    omit?: ExampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExampleInclude<ExtArgs> | null
  }


  /**
   * Model DailyUsage
   */

  export type AggregateDailyUsage = {
    _count: DailyUsageCountAggregateOutputType | null
    _avg: DailyUsageAvgAggregateOutputType | null
    _sum: DailyUsageSumAggregateOutputType | null
    _min: DailyUsageMinAggregateOutputType | null
    _max: DailyUsageMaxAggregateOutputType | null
  }

  export type DailyUsageAvgAggregateOutputType = {
    id: number | null
  }

  export type DailyUsageSumAggregateOutputType = {
    id: number | null
  }

  export type DailyUsageMinAggregateOutputType = {
    id: number | null
    file: string | null
  }

  export type DailyUsageMaxAggregateOutputType = {
    id: number | null
    file: string | null
  }

  export type DailyUsageCountAggregateOutputType = {
    id: number
    file: number
    data: number
    _all: number
  }


  export type DailyUsageAvgAggregateInputType = {
    id?: true
  }

  export type DailyUsageSumAggregateInputType = {
    id?: true
  }

  export type DailyUsageMinAggregateInputType = {
    id?: true
    file?: true
  }

  export type DailyUsageMaxAggregateInputType = {
    id?: true
    file?: true
  }

  export type DailyUsageCountAggregateInputType = {
    id?: true
    file?: true
    data?: true
    _all?: true
  }

  export type DailyUsageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyUsage to aggregate.
     */
    where?: DailyUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyUsages to fetch.
     */
    orderBy?: DailyUsageOrderByWithRelationInput | DailyUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyUsages
    **/
    _count?: true | DailyUsageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailyUsageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailyUsageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyUsageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyUsageMaxAggregateInputType
  }

  export type GetDailyUsageAggregateType<T extends DailyUsageAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyUsage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyUsage[P]>
      : GetScalarType<T[P], AggregateDailyUsage[P]>
  }




  export type DailyUsageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyUsageWhereInput
    orderBy?: DailyUsageOrderByWithAggregationInput | DailyUsageOrderByWithAggregationInput[]
    by: DailyUsageScalarFieldEnum[] | DailyUsageScalarFieldEnum
    having?: DailyUsageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyUsageCountAggregateInputType | true
    _avg?: DailyUsageAvgAggregateInputType
    _sum?: DailyUsageSumAggregateInputType
    _min?: DailyUsageMinAggregateInputType
    _max?: DailyUsageMaxAggregateInputType
  }

  export type DailyUsageGroupByOutputType = {
    id: number
    file: string | null
    data: JsonValue | null
    _count: DailyUsageCountAggregateOutputType | null
    _avg: DailyUsageAvgAggregateOutputType | null
    _sum: DailyUsageSumAggregateOutputType | null
    _min: DailyUsageMinAggregateOutputType | null
    _max: DailyUsageMaxAggregateOutputType | null
  }

  type GetDailyUsageGroupByPayload<T extends DailyUsageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyUsageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyUsageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyUsageGroupByOutputType[P]>
            : GetScalarType<T[P], DailyUsageGroupByOutputType[P]>
        }
      >
    >


  export type DailyUsageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    file?: boolean
    data?: boolean
    vocabs?: boolean | DailyUsage$vocabsArgs<ExtArgs>
    _count?: boolean | DailyUsageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyUsage"]>

  export type DailyUsageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    file?: boolean
    data?: boolean
  }, ExtArgs["result"]["dailyUsage"]>

  export type DailyUsageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    file?: boolean
    data?: boolean
  }, ExtArgs["result"]["dailyUsage"]>

  export type DailyUsageSelectScalar = {
    id?: boolean
    file?: boolean
    data?: boolean
  }

  export type DailyUsageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "file" | "data", ExtArgs["result"]["dailyUsage"]>
  export type DailyUsageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vocabs?: boolean | DailyUsage$vocabsArgs<ExtArgs>
    _count?: boolean | DailyUsageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DailyUsageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DailyUsageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DailyUsagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyUsage"
    objects: {
      vocabs: Prisma.$DailyUsageVocabPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      file: string | null
      data: Prisma.JsonValue | null
    }, ExtArgs["result"]["dailyUsage"]>
    composites: {}
  }

  type DailyUsageGetPayload<S extends boolean | null | undefined | DailyUsageDefaultArgs> = $Result.GetResult<Prisma.$DailyUsagePayload, S>

  type DailyUsageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DailyUsageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailyUsageCountAggregateInputType | true
    }

  export interface DailyUsageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyUsage'], meta: { name: 'DailyUsage' } }
    /**
     * Find zero or one DailyUsage that matches the filter.
     * @param {DailyUsageFindUniqueArgs} args - Arguments to find a DailyUsage
     * @example
     * // Get one DailyUsage
     * const dailyUsage = await prisma.dailyUsage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyUsageFindUniqueArgs>(args: SelectSubset<T, DailyUsageFindUniqueArgs<ExtArgs>>): Prisma__DailyUsageClient<$Result.GetResult<Prisma.$DailyUsagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DailyUsage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyUsageFindUniqueOrThrowArgs} args - Arguments to find a DailyUsage
     * @example
     * // Get one DailyUsage
     * const dailyUsage = await prisma.dailyUsage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyUsageFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyUsageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyUsageClient<$Result.GetResult<Prisma.$DailyUsagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyUsage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyUsageFindFirstArgs} args - Arguments to find a DailyUsage
     * @example
     * // Get one DailyUsage
     * const dailyUsage = await prisma.dailyUsage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyUsageFindFirstArgs>(args?: SelectSubset<T, DailyUsageFindFirstArgs<ExtArgs>>): Prisma__DailyUsageClient<$Result.GetResult<Prisma.$DailyUsagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyUsage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyUsageFindFirstOrThrowArgs} args - Arguments to find a DailyUsage
     * @example
     * // Get one DailyUsage
     * const dailyUsage = await prisma.dailyUsage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyUsageFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyUsageFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyUsageClient<$Result.GetResult<Prisma.$DailyUsagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyUsages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyUsageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyUsages
     * const dailyUsages = await prisma.dailyUsage.findMany()
     * 
     * // Get first 10 DailyUsages
     * const dailyUsages = await prisma.dailyUsage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyUsageWithIdOnly = await prisma.dailyUsage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyUsageFindManyArgs>(args?: SelectSubset<T, DailyUsageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyUsagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DailyUsage.
     * @param {DailyUsageCreateArgs} args - Arguments to create a DailyUsage.
     * @example
     * // Create one DailyUsage
     * const DailyUsage = await prisma.dailyUsage.create({
     *   data: {
     *     // ... data to create a DailyUsage
     *   }
     * })
     * 
     */
    create<T extends DailyUsageCreateArgs>(args: SelectSubset<T, DailyUsageCreateArgs<ExtArgs>>): Prisma__DailyUsageClient<$Result.GetResult<Prisma.$DailyUsagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DailyUsages.
     * @param {DailyUsageCreateManyArgs} args - Arguments to create many DailyUsages.
     * @example
     * // Create many DailyUsages
     * const dailyUsage = await prisma.dailyUsage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyUsageCreateManyArgs>(args?: SelectSubset<T, DailyUsageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailyUsages and returns the data saved in the database.
     * @param {DailyUsageCreateManyAndReturnArgs} args - Arguments to create many DailyUsages.
     * @example
     * // Create many DailyUsages
     * const dailyUsage = await prisma.dailyUsage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailyUsages and only return the `id`
     * const dailyUsageWithIdOnly = await prisma.dailyUsage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailyUsageCreateManyAndReturnArgs>(args?: SelectSubset<T, DailyUsageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyUsagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DailyUsage.
     * @param {DailyUsageDeleteArgs} args - Arguments to delete one DailyUsage.
     * @example
     * // Delete one DailyUsage
     * const DailyUsage = await prisma.dailyUsage.delete({
     *   where: {
     *     // ... filter to delete one DailyUsage
     *   }
     * })
     * 
     */
    delete<T extends DailyUsageDeleteArgs>(args: SelectSubset<T, DailyUsageDeleteArgs<ExtArgs>>): Prisma__DailyUsageClient<$Result.GetResult<Prisma.$DailyUsagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DailyUsage.
     * @param {DailyUsageUpdateArgs} args - Arguments to update one DailyUsage.
     * @example
     * // Update one DailyUsage
     * const dailyUsage = await prisma.dailyUsage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyUsageUpdateArgs>(args: SelectSubset<T, DailyUsageUpdateArgs<ExtArgs>>): Prisma__DailyUsageClient<$Result.GetResult<Prisma.$DailyUsagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DailyUsages.
     * @param {DailyUsageDeleteManyArgs} args - Arguments to filter DailyUsages to delete.
     * @example
     * // Delete a few DailyUsages
     * const { count } = await prisma.dailyUsage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyUsageDeleteManyArgs>(args?: SelectSubset<T, DailyUsageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyUsageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyUsages
     * const dailyUsage = await prisma.dailyUsage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyUsageUpdateManyArgs>(args: SelectSubset<T, DailyUsageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyUsages and returns the data updated in the database.
     * @param {DailyUsageUpdateManyAndReturnArgs} args - Arguments to update many DailyUsages.
     * @example
     * // Update many DailyUsages
     * const dailyUsage = await prisma.dailyUsage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DailyUsages and only return the `id`
     * const dailyUsageWithIdOnly = await prisma.dailyUsage.updateManyAndReturn({
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
    updateManyAndReturn<T extends DailyUsageUpdateManyAndReturnArgs>(args: SelectSubset<T, DailyUsageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyUsagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DailyUsage.
     * @param {DailyUsageUpsertArgs} args - Arguments to update or create a DailyUsage.
     * @example
     * // Update or create a DailyUsage
     * const dailyUsage = await prisma.dailyUsage.upsert({
     *   create: {
     *     // ... data to create a DailyUsage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyUsage we want to update
     *   }
     * })
     */
    upsert<T extends DailyUsageUpsertArgs>(args: SelectSubset<T, DailyUsageUpsertArgs<ExtArgs>>): Prisma__DailyUsageClient<$Result.GetResult<Prisma.$DailyUsagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DailyUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyUsageCountArgs} args - Arguments to filter DailyUsages to count.
     * @example
     * // Count the number of DailyUsages
     * const count = await prisma.dailyUsage.count({
     *   where: {
     *     // ... the filter for the DailyUsages we want to count
     *   }
     * })
    **/
    count<T extends DailyUsageCountArgs>(
      args?: Subset<T, DailyUsageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyUsageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyUsageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DailyUsageAggregateArgs>(args: Subset<T, DailyUsageAggregateArgs>): Prisma.PrismaPromise<GetDailyUsageAggregateType<T>>

    /**
     * Group by DailyUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyUsageGroupByArgs} args - Group by arguments.
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
      T extends DailyUsageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyUsageGroupByArgs['orderBy'] }
        : { orderBy?: DailyUsageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DailyUsageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyUsageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyUsage model
   */
  readonly fields: DailyUsageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyUsage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyUsageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vocabs<T extends DailyUsage$vocabsArgs<ExtArgs> = {}>(args?: Subset<T, DailyUsage$vocabsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyUsageVocabPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DailyUsage model
   */
  interface DailyUsageFieldRefs {
    readonly id: FieldRef<"DailyUsage", 'Int'>
    readonly file: FieldRef<"DailyUsage", 'String'>
    readonly data: FieldRef<"DailyUsage", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * DailyUsage findUnique
   */
  export type DailyUsageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyUsage
     */
    select?: DailyUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyUsage
     */
    omit?: DailyUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyUsageInclude<ExtArgs> | null
    /**
     * Filter, which DailyUsage to fetch.
     */
    where: DailyUsageWhereUniqueInput
  }

  /**
   * DailyUsage findUniqueOrThrow
   */
  export type DailyUsageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyUsage
     */
    select?: DailyUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyUsage
     */
    omit?: DailyUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyUsageInclude<ExtArgs> | null
    /**
     * Filter, which DailyUsage to fetch.
     */
    where: DailyUsageWhereUniqueInput
  }

  /**
   * DailyUsage findFirst
   */
  export type DailyUsageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyUsage
     */
    select?: DailyUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyUsage
     */
    omit?: DailyUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyUsageInclude<ExtArgs> | null
    /**
     * Filter, which DailyUsage to fetch.
     */
    where?: DailyUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyUsages to fetch.
     */
    orderBy?: DailyUsageOrderByWithRelationInput | DailyUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyUsages.
     */
    cursor?: DailyUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyUsages.
     */
    distinct?: DailyUsageScalarFieldEnum | DailyUsageScalarFieldEnum[]
  }

  /**
   * DailyUsage findFirstOrThrow
   */
  export type DailyUsageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyUsage
     */
    select?: DailyUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyUsage
     */
    omit?: DailyUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyUsageInclude<ExtArgs> | null
    /**
     * Filter, which DailyUsage to fetch.
     */
    where?: DailyUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyUsages to fetch.
     */
    orderBy?: DailyUsageOrderByWithRelationInput | DailyUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyUsages.
     */
    cursor?: DailyUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyUsages.
     */
    distinct?: DailyUsageScalarFieldEnum | DailyUsageScalarFieldEnum[]
  }

  /**
   * DailyUsage findMany
   */
  export type DailyUsageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyUsage
     */
    select?: DailyUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyUsage
     */
    omit?: DailyUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyUsageInclude<ExtArgs> | null
    /**
     * Filter, which DailyUsages to fetch.
     */
    where?: DailyUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyUsages to fetch.
     */
    orderBy?: DailyUsageOrderByWithRelationInput | DailyUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyUsages.
     */
    cursor?: DailyUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyUsages.
     */
    distinct?: DailyUsageScalarFieldEnum | DailyUsageScalarFieldEnum[]
  }

  /**
   * DailyUsage create
   */
  export type DailyUsageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyUsage
     */
    select?: DailyUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyUsage
     */
    omit?: DailyUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyUsageInclude<ExtArgs> | null
    /**
     * The data needed to create a DailyUsage.
     */
    data?: XOR<DailyUsageCreateInput, DailyUsageUncheckedCreateInput>
  }

  /**
   * DailyUsage createMany
   */
  export type DailyUsageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyUsages.
     */
    data: DailyUsageCreateManyInput | DailyUsageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyUsage createManyAndReturn
   */
  export type DailyUsageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyUsage
     */
    select?: DailyUsageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyUsage
     */
    omit?: DailyUsageOmit<ExtArgs> | null
    /**
     * The data used to create many DailyUsages.
     */
    data: DailyUsageCreateManyInput | DailyUsageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyUsage update
   */
  export type DailyUsageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyUsage
     */
    select?: DailyUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyUsage
     */
    omit?: DailyUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyUsageInclude<ExtArgs> | null
    /**
     * The data needed to update a DailyUsage.
     */
    data: XOR<DailyUsageUpdateInput, DailyUsageUncheckedUpdateInput>
    /**
     * Choose, which DailyUsage to update.
     */
    where: DailyUsageWhereUniqueInput
  }

  /**
   * DailyUsage updateMany
   */
  export type DailyUsageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyUsages.
     */
    data: XOR<DailyUsageUpdateManyMutationInput, DailyUsageUncheckedUpdateManyInput>
    /**
     * Filter which DailyUsages to update
     */
    where?: DailyUsageWhereInput
    /**
     * Limit how many DailyUsages to update.
     */
    limit?: number
  }

  /**
   * DailyUsage updateManyAndReturn
   */
  export type DailyUsageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyUsage
     */
    select?: DailyUsageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyUsage
     */
    omit?: DailyUsageOmit<ExtArgs> | null
    /**
     * The data used to update DailyUsages.
     */
    data: XOR<DailyUsageUpdateManyMutationInput, DailyUsageUncheckedUpdateManyInput>
    /**
     * Filter which DailyUsages to update
     */
    where?: DailyUsageWhereInput
    /**
     * Limit how many DailyUsages to update.
     */
    limit?: number
  }

  /**
   * DailyUsage upsert
   */
  export type DailyUsageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyUsage
     */
    select?: DailyUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyUsage
     */
    omit?: DailyUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyUsageInclude<ExtArgs> | null
    /**
     * The filter to search for the DailyUsage to update in case it exists.
     */
    where: DailyUsageWhereUniqueInput
    /**
     * In case the DailyUsage found by the `where` argument doesn't exist, create a new DailyUsage with this data.
     */
    create: XOR<DailyUsageCreateInput, DailyUsageUncheckedCreateInput>
    /**
     * In case the DailyUsage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyUsageUpdateInput, DailyUsageUncheckedUpdateInput>
  }

  /**
   * DailyUsage delete
   */
  export type DailyUsageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyUsage
     */
    select?: DailyUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyUsage
     */
    omit?: DailyUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyUsageInclude<ExtArgs> | null
    /**
     * Filter which DailyUsage to delete.
     */
    where: DailyUsageWhereUniqueInput
  }

  /**
   * DailyUsage deleteMany
   */
  export type DailyUsageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyUsages to delete
     */
    where?: DailyUsageWhereInput
    /**
     * Limit how many DailyUsages to delete.
     */
    limit?: number
  }

  /**
   * DailyUsage.vocabs
   */
  export type DailyUsage$vocabsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyUsageVocab
     */
    select?: DailyUsageVocabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyUsageVocab
     */
    omit?: DailyUsageVocabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyUsageVocabInclude<ExtArgs> | null
    where?: DailyUsageVocabWhereInput
    orderBy?: DailyUsageVocabOrderByWithRelationInput | DailyUsageVocabOrderByWithRelationInput[]
    cursor?: DailyUsageVocabWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyUsageVocabScalarFieldEnum | DailyUsageVocabScalarFieldEnum[]
  }

  /**
   * DailyUsage without action
   */
  export type DailyUsageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyUsage
     */
    select?: DailyUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyUsage
     */
    omit?: DailyUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyUsageInclude<ExtArgs> | null
  }


  /**
   * Model DailyUsageVocab
   */

  export type AggregateDailyUsageVocab = {
    _count: DailyUsageVocabCountAggregateOutputType | null
    _avg: DailyUsageVocabAvgAggregateOutputType | null
    _sum: DailyUsageVocabSumAggregateOutputType | null
    _min: DailyUsageVocabMinAggregateOutputType | null
    _max: DailyUsageVocabMaxAggregateOutputType | null
  }

  export type DailyUsageVocabAvgAggregateOutputType = {
    id: number | null
    dailyUsageId: number | null
  }

  export type DailyUsageVocabSumAggregateOutputType = {
    id: number | null
    dailyUsageId: number | null
  }

  export type DailyUsageVocabMinAggregateOutputType = {
    id: number | null
    dailyUsageId: number | null
    german: string | null
    english: string | null
    myanmar: string | null
    japanese: string | null
    korean: string | null
    thai: string | null
    vietnamese: string | null
  }

  export type DailyUsageVocabMaxAggregateOutputType = {
    id: number | null
    dailyUsageId: number | null
    german: string | null
    english: string | null
    myanmar: string | null
    japanese: string | null
    korean: string | null
    thai: string | null
    vietnamese: string | null
  }

  export type DailyUsageVocabCountAggregateOutputType = {
    id: number
    dailyUsageId: number
    german: number
    english: number
    myanmar: number
    japanese: number
    korean: number
    thai: number
    vietnamese: number
    _all: number
  }


  export type DailyUsageVocabAvgAggregateInputType = {
    id?: true
    dailyUsageId?: true
  }

  export type DailyUsageVocabSumAggregateInputType = {
    id?: true
    dailyUsageId?: true
  }

  export type DailyUsageVocabMinAggregateInputType = {
    id?: true
    dailyUsageId?: true
    german?: true
    english?: true
    myanmar?: true
    japanese?: true
    korean?: true
    thai?: true
    vietnamese?: true
  }

  export type DailyUsageVocabMaxAggregateInputType = {
    id?: true
    dailyUsageId?: true
    german?: true
    english?: true
    myanmar?: true
    japanese?: true
    korean?: true
    thai?: true
    vietnamese?: true
  }

  export type DailyUsageVocabCountAggregateInputType = {
    id?: true
    dailyUsageId?: true
    german?: true
    english?: true
    myanmar?: true
    japanese?: true
    korean?: true
    thai?: true
    vietnamese?: true
    _all?: true
  }

  export type DailyUsageVocabAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyUsageVocab to aggregate.
     */
    where?: DailyUsageVocabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyUsageVocabs to fetch.
     */
    orderBy?: DailyUsageVocabOrderByWithRelationInput | DailyUsageVocabOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyUsageVocabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyUsageVocabs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyUsageVocabs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyUsageVocabs
    **/
    _count?: true | DailyUsageVocabCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailyUsageVocabAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailyUsageVocabSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyUsageVocabMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyUsageVocabMaxAggregateInputType
  }

  export type GetDailyUsageVocabAggregateType<T extends DailyUsageVocabAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyUsageVocab]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyUsageVocab[P]>
      : GetScalarType<T[P], AggregateDailyUsageVocab[P]>
  }




  export type DailyUsageVocabGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyUsageVocabWhereInput
    orderBy?: DailyUsageVocabOrderByWithAggregationInput | DailyUsageVocabOrderByWithAggregationInput[]
    by: DailyUsageVocabScalarFieldEnum[] | DailyUsageVocabScalarFieldEnum
    having?: DailyUsageVocabScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyUsageVocabCountAggregateInputType | true
    _avg?: DailyUsageVocabAvgAggregateInputType
    _sum?: DailyUsageVocabSumAggregateInputType
    _min?: DailyUsageVocabMinAggregateInputType
    _max?: DailyUsageVocabMaxAggregateInputType
  }

  export type DailyUsageVocabGroupByOutputType = {
    id: number
    dailyUsageId: number
    german: string | null
    english: string | null
    myanmar: string | null
    japanese: string | null
    korean: string | null
    thai: string | null
    vietnamese: string | null
    _count: DailyUsageVocabCountAggregateOutputType | null
    _avg: DailyUsageVocabAvgAggregateOutputType | null
    _sum: DailyUsageVocabSumAggregateOutputType | null
    _min: DailyUsageVocabMinAggregateOutputType | null
    _max: DailyUsageVocabMaxAggregateOutputType | null
  }

  type GetDailyUsageVocabGroupByPayload<T extends DailyUsageVocabGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyUsageVocabGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyUsageVocabGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyUsageVocabGroupByOutputType[P]>
            : GetScalarType<T[P], DailyUsageVocabGroupByOutputType[P]>
        }
      >
    >


  export type DailyUsageVocabSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dailyUsageId?: boolean
    german?: boolean
    english?: boolean
    myanmar?: boolean
    japanese?: boolean
    korean?: boolean
    thai?: boolean
    vietnamese?: boolean
    dailyUsage?: boolean | DailyUsageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyUsageVocab"]>

  export type DailyUsageVocabSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dailyUsageId?: boolean
    german?: boolean
    english?: boolean
    myanmar?: boolean
    japanese?: boolean
    korean?: boolean
    thai?: boolean
    vietnamese?: boolean
    dailyUsage?: boolean | DailyUsageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyUsageVocab"]>

  export type DailyUsageVocabSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dailyUsageId?: boolean
    german?: boolean
    english?: boolean
    myanmar?: boolean
    japanese?: boolean
    korean?: boolean
    thai?: boolean
    vietnamese?: boolean
    dailyUsage?: boolean | DailyUsageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyUsageVocab"]>

  export type DailyUsageVocabSelectScalar = {
    id?: boolean
    dailyUsageId?: boolean
    german?: boolean
    english?: boolean
    myanmar?: boolean
    japanese?: boolean
    korean?: boolean
    thai?: boolean
    vietnamese?: boolean
  }

  export type DailyUsageVocabOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dailyUsageId" | "german" | "english" | "myanmar" | "japanese" | "korean" | "thai" | "vietnamese", ExtArgs["result"]["dailyUsageVocab"]>
  export type DailyUsageVocabInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyUsage?: boolean | DailyUsageDefaultArgs<ExtArgs>
  }
  export type DailyUsageVocabIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyUsage?: boolean | DailyUsageDefaultArgs<ExtArgs>
  }
  export type DailyUsageVocabIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyUsage?: boolean | DailyUsageDefaultArgs<ExtArgs>
  }

  export type $DailyUsageVocabPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyUsageVocab"
    objects: {
      dailyUsage: Prisma.$DailyUsagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dailyUsageId: number
      german: string | null
      english: string | null
      myanmar: string | null
      japanese: string | null
      korean: string | null
      thai: string | null
      vietnamese: string | null
    }, ExtArgs["result"]["dailyUsageVocab"]>
    composites: {}
  }

  type DailyUsageVocabGetPayload<S extends boolean | null | undefined | DailyUsageVocabDefaultArgs> = $Result.GetResult<Prisma.$DailyUsageVocabPayload, S>

  type DailyUsageVocabCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DailyUsageVocabFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailyUsageVocabCountAggregateInputType | true
    }

  export interface DailyUsageVocabDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyUsageVocab'], meta: { name: 'DailyUsageVocab' } }
    /**
     * Find zero or one DailyUsageVocab that matches the filter.
     * @param {DailyUsageVocabFindUniqueArgs} args - Arguments to find a DailyUsageVocab
     * @example
     * // Get one DailyUsageVocab
     * const dailyUsageVocab = await prisma.dailyUsageVocab.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyUsageVocabFindUniqueArgs>(args: SelectSubset<T, DailyUsageVocabFindUniqueArgs<ExtArgs>>): Prisma__DailyUsageVocabClient<$Result.GetResult<Prisma.$DailyUsageVocabPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DailyUsageVocab that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyUsageVocabFindUniqueOrThrowArgs} args - Arguments to find a DailyUsageVocab
     * @example
     * // Get one DailyUsageVocab
     * const dailyUsageVocab = await prisma.dailyUsageVocab.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyUsageVocabFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyUsageVocabFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyUsageVocabClient<$Result.GetResult<Prisma.$DailyUsageVocabPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyUsageVocab that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyUsageVocabFindFirstArgs} args - Arguments to find a DailyUsageVocab
     * @example
     * // Get one DailyUsageVocab
     * const dailyUsageVocab = await prisma.dailyUsageVocab.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyUsageVocabFindFirstArgs>(args?: SelectSubset<T, DailyUsageVocabFindFirstArgs<ExtArgs>>): Prisma__DailyUsageVocabClient<$Result.GetResult<Prisma.$DailyUsageVocabPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyUsageVocab that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyUsageVocabFindFirstOrThrowArgs} args - Arguments to find a DailyUsageVocab
     * @example
     * // Get one DailyUsageVocab
     * const dailyUsageVocab = await prisma.dailyUsageVocab.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyUsageVocabFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyUsageVocabFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyUsageVocabClient<$Result.GetResult<Prisma.$DailyUsageVocabPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyUsageVocabs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyUsageVocabFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyUsageVocabs
     * const dailyUsageVocabs = await prisma.dailyUsageVocab.findMany()
     * 
     * // Get first 10 DailyUsageVocabs
     * const dailyUsageVocabs = await prisma.dailyUsageVocab.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyUsageVocabWithIdOnly = await prisma.dailyUsageVocab.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyUsageVocabFindManyArgs>(args?: SelectSubset<T, DailyUsageVocabFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyUsageVocabPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DailyUsageVocab.
     * @param {DailyUsageVocabCreateArgs} args - Arguments to create a DailyUsageVocab.
     * @example
     * // Create one DailyUsageVocab
     * const DailyUsageVocab = await prisma.dailyUsageVocab.create({
     *   data: {
     *     // ... data to create a DailyUsageVocab
     *   }
     * })
     * 
     */
    create<T extends DailyUsageVocabCreateArgs>(args: SelectSubset<T, DailyUsageVocabCreateArgs<ExtArgs>>): Prisma__DailyUsageVocabClient<$Result.GetResult<Prisma.$DailyUsageVocabPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DailyUsageVocabs.
     * @param {DailyUsageVocabCreateManyArgs} args - Arguments to create many DailyUsageVocabs.
     * @example
     * // Create many DailyUsageVocabs
     * const dailyUsageVocab = await prisma.dailyUsageVocab.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyUsageVocabCreateManyArgs>(args?: SelectSubset<T, DailyUsageVocabCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailyUsageVocabs and returns the data saved in the database.
     * @param {DailyUsageVocabCreateManyAndReturnArgs} args - Arguments to create many DailyUsageVocabs.
     * @example
     * // Create many DailyUsageVocabs
     * const dailyUsageVocab = await prisma.dailyUsageVocab.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailyUsageVocabs and only return the `id`
     * const dailyUsageVocabWithIdOnly = await prisma.dailyUsageVocab.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailyUsageVocabCreateManyAndReturnArgs>(args?: SelectSubset<T, DailyUsageVocabCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyUsageVocabPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DailyUsageVocab.
     * @param {DailyUsageVocabDeleteArgs} args - Arguments to delete one DailyUsageVocab.
     * @example
     * // Delete one DailyUsageVocab
     * const DailyUsageVocab = await prisma.dailyUsageVocab.delete({
     *   where: {
     *     // ... filter to delete one DailyUsageVocab
     *   }
     * })
     * 
     */
    delete<T extends DailyUsageVocabDeleteArgs>(args: SelectSubset<T, DailyUsageVocabDeleteArgs<ExtArgs>>): Prisma__DailyUsageVocabClient<$Result.GetResult<Prisma.$DailyUsageVocabPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DailyUsageVocab.
     * @param {DailyUsageVocabUpdateArgs} args - Arguments to update one DailyUsageVocab.
     * @example
     * // Update one DailyUsageVocab
     * const dailyUsageVocab = await prisma.dailyUsageVocab.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyUsageVocabUpdateArgs>(args: SelectSubset<T, DailyUsageVocabUpdateArgs<ExtArgs>>): Prisma__DailyUsageVocabClient<$Result.GetResult<Prisma.$DailyUsageVocabPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DailyUsageVocabs.
     * @param {DailyUsageVocabDeleteManyArgs} args - Arguments to filter DailyUsageVocabs to delete.
     * @example
     * // Delete a few DailyUsageVocabs
     * const { count } = await prisma.dailyUsageVocab.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyUsageVocabDeleteManyArgs>(args?: SelectSubset<T, DailyUsageVocabDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyUsageVocabs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyUsageVocabUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyUsageVocabs
     * const dailyUsageVocab = await prisma.dailyUsageVocab.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyUsageVocabUpdateManyArgs>(args: SelectSubset<T, DailyUsageVocabUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyUsageVocabs and returns the data updated in the database.
     * @param {DailyUsageVocabUpdateManyAndReturnArgs} args - Arguments to update many DailyUsageVocabs.
     * @example
     * // Update many DailyUsageVocabs
     * const dailyUsageVocab = await prisma.dailyUsageVocab.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DailyUsageVocabs and only return the `id`
     * const dailyUsageVocabWithIdOnly = await prisma.dailyUsageVocab.updateManyAndReturn({
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
    updateManyAndReturn<T extends DailyUsageVocabUpdateManyAndReturnArgs>(args: SelectSubset<T, DailyUsageVocabUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyUsageVocabPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DailyUsageVocab.
     * @param {DailyUsageVocabUpsertArgs} args - Arguments to update or create a DailyUsageVocab.
     * @example
     * // Update or create a DailyUsageVocab
     * const dailyUsageVocab = await prisma.dailyUsageVocab.upsert({
     *   create: {
     *     // ... data to create a DailyUsageVocab
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyUsageVocab we want to update
     *   }
     * })
     */
    upsert<T extends DailyUsageVocabUpsertArgs>(args: SelectSubset<T, DailyUsageVocabUpsertArgs<ExtArgs>>): Prisma__DailyUsageVocabClient<$Result.GetResult<Prisma.$DailyUsageVocabPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DailyUsageVocabs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyUsageVocabCountArgs} args - Arguments to filter DailyUsageVocabs to count.
     * @example
     * // Count the number of DailyUsageVocabs
     * const count = await prisma.dailyUsageVocab.count({
     *   where: {
     *     // ... the filter for the DailyUsageVocabs we want to count
     *   }
     * })
    **/
    count<T extends DailyUsageVocabCountArgs>(
      args?: Subset<T, DailyUsageVocabCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyUsageVocabCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyUsageVocab.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyUsageVocabAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DailyUsageVocabAggregateArgs>(args: Subset<T, DailyUsageVocabAggregateArgs>): Prisma.PrismaPromise<GetDailyUsageVocabAggregateType<T>>

    /**
     * Group by DailyUsageVocab.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyUsageVocabGroupByArgs} args - Group by arguments.
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
      T extends DailyUsageVocabGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyUsageVocabGroupByArgs['orderBy'] }
        : { orderBy?: DailyUsageVocabGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DailyUsageVocabGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyUsageVocabGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyUsageVocab model
   */
  readonly fields: DailyUsageVocabFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyUsageVocab.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyUsageVocabClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dailyUsage<T extends DailyUsageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DailyUsageDefaultArgs<ExtArgs>>): Prisma__DailyUsageClient<$Result.GetResult<Prisma.$DailyUsagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DailyUsageVocab model
   */
  interface DailyUsageVocabFieldRefs {
    readonly id: FieldRef<"DailyUsageVocab", 'Int'>
    readonly dailyUsageId: FieldRef<"DailyUsageVocab", 'Int'>
    readonly german: FieldRef<"DailyUsageVocab", 'String'>
    readonly english: FieldRef<"DailyUsageVocab", 'String'>
    readonly myanmar: FieldRef<"DailyUsageVocab", 'String'>
    readonly japanese: FieldRef<"DailyUsageVocab", 'String'>
    readonly korean: FieldRef<"DailyUsageVocab", 'String'>
    readonly thai: FieldRef<"DailyUsageVocab", 'String'>
    readonly vietnamese: FieldRef<"DailyUsageVocab", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DailyUsageVocab findUnique
   */
  export type DailyUsageVocabFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyUsageVocab
     */
    select?: DailyUsageVocabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyUsageVocab
     */
    omit?: DailyUsageVocabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyUsageVocabInclude<ExtArgs> | null
    /**
     * Filter, which DailyUsageVocab to fetch.
     */
    where: DailyUsageVocabWhereUniqueInput
  }

  /**
   * DailyUsageVocab findUniqueOrThrow
   */
  export type DailyUsageVocabFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyUsageVocab
     */
    select?: DailyUsageVocabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyUsageVocab
     */
    omit?: DailyUsageVocabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyUsageVocabInclude<ExtArgs> | null
    /**
     * Filter, which DailyUsageVocab to fetch.
     */
    where: DailyUsageVocabWhereUniqueInput
  }

  /**
   * DailyUsageVocab findFirst
   */
  export type DailyUsageVocabFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyUsageVocab
     */
    select?: DailyUsageVocabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyUsageVocab
     */
    omit?: DailyUsageVocabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyUsageVocabInclude<ExtArgs> | null
    /**
     * Filter, which DailyUsageVocab to fetch.
     */
    where?: DailyUsageVocabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyUsageVocabs to fetch.
     */
    orderBy?: DailyUsageVocabOrderByWithRelationInput | DailyUsageVocabOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyUsageVocabs.
     */
    cursor?: DailyUsageVocabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyUsageVocabs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyUsageVocabs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyUsageVocabs.
     */
    distinct?: DailyUsageVocabScalarFieldEnum | DailyUsageVocabScalarFieldEnum[]
  }

  /**
   * DailyUsageVocab findFirstOrThrow
   */
  export type DailyUsageVocabFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyUsageVocab
     */
    select?: DailyUsageVocabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyUsageVocab
     */
    omit?: DailyUsageVocabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyUsageVocabInclude<ExtArgs> | null
    /**
     * Filter, which DailyUsageVocab to fetch.
     */
    where?: DailyUsageVocabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyUsageVocabs to fetch.
     */
    orderBy?: DailyUsageVocabOrderByWithRelationInput | DailyUsageVocabOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyUsageVocabs.
     */
    cursor?: DailyUsageVocabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyUsageVocabs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyUsageVocabs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyUsageVocabs.
     */
    distinct?: DailyUsageVocabScalarFieldEnum | DailyUsageVocabScalarFieldEnum[]
  }

  /**
   * DailyUsageVocab findMany
   */
  export type DailyUsageVocabFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyUsageVocab
     */
    select?: DailyUsageVocabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyUsageVocab
     */
    omit?: DailyUsageVocabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyUsageVocabInclude<ExtArgs> | null
    /**
     * Filter, which DailyUsageVocabs to fetch.
     */
    where?: DailyUsageVocabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyUsageVocabs to fetch.
     */
    orderBy?: DailyUsageVocabOrderByWithRelationInput | DailyUsageVocabOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyUsageVocabs.
     */
    cursor?: DailyUsageVocabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyUsageVocabs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyUsageVocabs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyUsageVocabs.
     */
    distinct?: DailyUsageVocabScalarFieldEnum | DailyUsageVocabScalarFieldEnum[]
  }

  /**
   * DailyUsageVocab create
   */
  export type DailyUsageVocabCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyUsageVocab
     */
    select?: DailyUsageVocabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyUsageVocab
     */
    omit?: DailyUsageVocabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyUsageVocabInclude<ExtArgs> | null
    /**
     * The data needed to create a DailyUsageVocab.
     */
    data: XOR<DailyUsageVocabCreateInput, DailyUsageVocabUncheckedCreateInput>
  }

  /**
   * DailyUsageVocab createMany
   */
  export type DailyUsageVocabCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyUsageVocabs.
     */
    data: DailyUsageVocabCreateManyInput | DailyUsageVocabCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyUsageVocab createManyAndReturn
   */
  export type DailyUsageVocabCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyUsageVocab
     */
    select?: DailyUsageVocabSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyUsageVocab
     */
    omit?: DailyUsageVocabOmit<ExtArgs> | null
    /**
     * The data used to create many DailyUsageVocabs.
     */
    data: DailyUsageVocabCreateManyInput | DailyUsageVocabCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyUsageVocabIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyUsageVocab update
   */
  export type DailyUsageVocabUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyUsageVocab
     */
    select?: DailyUsageVocabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyUsageVocab
     */
    omit?: DailyUsageVocabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyUsageVocabInclude<ExtArgs> | null
    /**
     * The data needed to update a DailyUsageVocab.
     */
    data: XOR<DailyUsageVocabUpdateInput, DailyUsageVocabUncheckedUpdateInput>
    /**
     * Choose, which DailyUsageVocab to update.
     */
    where: DailyUsageVocabWhereUniqueInput
  }

  /**
   * DailyUsageVocab updateMany
   */
  export type DailyUsageVocabUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyUsageVocabs.
     */
    data: XOR<DailyUsageVocabUpdateManyMutationInput, DailyUsageVocabUncheckedUpdateManyInput>
    /**
     * Filter which DailyUsageVocabs to update
     */
    where?: DailyUsageVocabWhereInput
    /**
     * Limit how many DailyUsageVocabs to update.
     */
    limit?: number
  }

  /**
   * DailyUsageVocab updateManyAndReturn
   */
  export type DailyUsageVocabUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyUsageVocab
     */
    select?: DailyUsageVocabSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyUsageVocab
     */
    omit?: DailyUsageVocabOmit<ExtArgs> | null
    /**
     * The data used to update DailyUsageVocabs.
     */
    data: XOR<DailyUsageVocabUpdateManyMutationInput, DailyUsageVocabUncheckedUpdateManyInput>
    /**
     * Filter which DailyUsageVocabs to update
     */
    where?: DailyUsageVocabWhereInput
    /**
     * Limit how many DailyUsageVocabs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyUsageVocabIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyUsageVocab upsert
   */
  export type DailyUsageVocabUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyUsageVocab
     */
    select?: DailyUsageVocabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyUsageVocab
     */
    omit?: DailyUsageVocabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyUsageVocabInclude<ExtArgs> | null
    /**
     * The filter to search for the DailyUsageVocab to update in case it exists.
     */
    where: DailyUsageVocabWhereUniqueInput
    /**
     * In case the DailyUsageVocab found by the `where` argument doesn't exist, create a new DailyUsageVocab with this data.
     */
    create: XOR<DailyUsageVocabCreateInput, DailyUsageVocabUncheckedCreateInput>
    /**
     * In case the DailyUsageVocab was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyUsageVocabUpdateInput, DailyUsageVocabUncheckedUpdateInput>
  }

  /**
   * DailyUsageVocab delete
   */
  export type DailyUsageVocabDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyUsageVocab
     */
    select?: DailyUsageVocabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyUsageVocab
     */
    omit?: DailyUsageVocabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyUsageVocabInclude<ExtArgs> | null
    /**
     * Filter which DailyUsageVocab to delete.
     */
    where: DailyUsageVocabWhereUniqueInput
  }

  /**
   * DailyUsageVocab deleteMany
   */
  export type DailyUsageVocabDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyUsageVocabs to delete
     */
    where?: DailyUsageVocabWhereInput
    /**
     * Limit how many DailyUsageVocabs to delete.
     */
    limit?: number
  }

  /**
   * DailyUsageVocab without action
   */
  export type DailyUsageVocabDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyUsageVocab
     */
    select?: DailyUsageVocabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyUsageVocab
     */
    omit?: DailyUsageVocabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyUsageVocabInclude<ExtArgs> | null
  }


  /**
   * Model GrammarRule
   */

  export type AggregateGrammarRule = {
    _count: GrammarRuleCountAggregateOutputType | null
    _avg: GrammarRuleAvgAggregateOutputType | null
    _sum: GrammarRuleSumAggregateOutputType | null
    _min: GrammarRuleMinAggregateOutputType | null
    _max: GrammarRuleMaxAggregateOutputType | null
  }

  export type GrammarRuleAvgAggregateOutputType = {
    id: number | null
    grammarId: number | null
  }

  export type GrammarRuleSumAggregateOutputType = {
    id: number | null
    grammarId: number | null
  }

  export type GrammarRuleMinAggregateOutputType = {
    id: number | null
    grammarId: number | null
    ruleKey: string | null
    description: string | null
  }

  export type GrammarRuleMaxAggregateOutputType = {
    id: number | null
    grammarId: number | null
    ruleKey: string | null
    description: string | null
  }

  export type GrammarRuleCountAggregateOutputType = {
    id: number
    grammarId: number
    ruleKey: number
    description: number
    _all: number
  }


  export type GrammarRuleAvgAggregateInputType = {
    id?: true
    grammarId?: true
  }

  export type GrammarRuleSumAggregateInputType = {
    id?: true
    grammarId?: true
  }

  export type GrammarRuleMinAggregateInputType = {
    id?: true
    grammarId?: true
    ruleKey?: true
    description?: true
  }

  export type GrammarRuleMaxAggregateInputType = {
    id?: true
    grammarId?: true
    ruleKey?: true
    description?: true
  }

  export type GrammarRuleCountAggregateInputType = {
    id?: true
    grammarId?: true
    ruleKey?: true
    description?: true
    _all?: true
  }

  export type GrammarRuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GrammarRule to aggregate.
     */
    where?: GrammarRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GrammarRules to fetch.
     */
    orderBy?: GrammarRuleOrderByWithRelationInput | GrammarRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GrammarRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GrammarRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GrammarRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GrammarRules
    **/
    _count?: true | GrammarRuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GrammarRuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GrammarRuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GrammarRuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GrammarRuleMaxAggregateInputType
  }

  export type GetGrammarRuleAggregateType<T extends GrammarRuleAggregateArgs> = {
        [P in keyof T & keyof AggregateGrammarRule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGrammarRule[P]>
      : GetScalarType<T[P], AggregateGrammarRule[P]>
  }




  export type GrammarRuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GrammarRuleWhereInput
    orderBy?: GrammarRuleOrderByWithAggregationInput | GrammarRuleOrderByWithAggregationInput[]
    by: GrammarRuleScalarFieldEnum[] | GrammarRuleScalarFieldEnum
    having?: GrammarRuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GrammarRuleCountAggregateInputType | true
    _avg?: GrammarRuleAvgAggregateInputType
    _sum?: GrammarRuleSumAggregateInputType
    _min?: GrammarRuleMinAggregateInputType
    _max?: GrammarRuleMaxAggregateInputType
  }

  export type GrammarRuleGroupByOutputType = {
    id: number
    grammarId: number
    ruleKey: string | null
    description: string | null
    _count: GrammarRuleCountAggregateOutputType | null
    _avg: GrammarRuleAvgAggregateOutputType | null
    _sum: GrammarRuleSumAggregateOutputType | null
    _min: GrammarRuleMinAggregateOutputType | null
    _max: GrammarRuleMaxAggregateOutputType | null
  }

  type GetGrammarRuleGroupByPayload<T extends GrammarRuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GrammarRuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GrammarRuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GrammarRuleGroupByOutputType[P]>
            : GetScalarType<T[P], GrammarRuleGroupByOutputType[P]>
        }
      >
    >


  export type GrammarRuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    grammarId?: boolean
    ruleKey?: boolean
    description?: boolean
    grammar?: boolean | GrammarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grammarRule"]>

  export type GrammarRuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    grammarId?: boolean
    ruleKey?: boolean
    description?: boolean
    grammar?: boolean | GrammarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grammarRule"]>

  export type GrammarRuleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    grammarId?: boolean
    ruleKey?: boolean
    description?: boolean
    grammar?: boolean | GrammarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grammarRule"]>

  export type GrammarRuleSelectScalar = {
    id?: boolean
    grammarId?: boolean
    ruleKey?: boolean
    description?: boolean
  }

  export type GrammarRuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "grammarId" | "ruleKey" | "description", ExtArgs["result"]["grammarRule"]>
  export type GrammarRuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grammar?: boolean | GrammarDefaultArgs<ExtArgs>
  }
  export type GrammarRuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grammar?: boolean | GrammarDefaultArgs<ExtArgs>
  }
  export type GrammarRuleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grammar?: boolean | GrammarDefaultArgs<ExtArgs>
  }

  export type $GrammarRulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GrammarRule"
    objects: {
      grammar: Prisma.$GrammarPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      grammarId: number
      ruleKey: string | null
      description: string | null
    }, ExtArgs["result"]["grammarRule"]>
    composites: {}
  }

  type GrammarRuleGetPayload<S extends boolean | null | undefined | GrammarRuleDefaultArgs> = $Result.GetResult<Prisma.$GrammarRulePayload, S>

  type GrammarRuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GrammarRuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GrammarRuleCountAggregateInputType | true
    }

  export interface GrammarRuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GrammarRule'], meta: { name: 'GrammarRule' } }
    /**
     * Find zero or one GrammarRule that matches the filter.
     * @param {GrammarRuleFindUniqueArgs} args - Arguments to find a GrammarRule
     * @example
     * // Get one GrammarRule
     * const grammarRule = await prisma.grammarRule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GrammarRuleFindUniqueArgs>(args: SelectSubset<T, GrammarRuleFindUniqueArgs<ExtArgs>>): Prisma__GrammarRuleClient<$Result.GetResult<Prisma.$GrammarRulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GrammarRule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GrammarRuleFindUniqueOrThrowArgs} args - Arguments to find a GrammarRule
     * @example
     * // Get one GrammarRule
     * const grammarRule = await prisma.grammarRule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GrammarRuleFindUniqueOrThrowArgs>(args: SelectSubset<T, GrammarRuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GrammarRuleClient<$Result.GetResult<Prisma.$GrammarRulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GrammarRule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarRuleFindFirstArgs} args - Arguments to find a GrammarRule
     * @example
     * // Get one GrammarRule
     * const grammarRule = await prisma.grammarRule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GrammarRuleFindFirstArgs>(args?: SelectSubset<T, GrammarRuleFindFirstArgs<ExtArgs>>): Prisma__GrammarRuleClient<$Result.GetResult<Prisma.$GrammarRulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GrammarRule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarRuleFindFirstOrThrowArgs} args - Arguments to find a GrammarRule
     * @example
     * // Get one GrammarRule
     * const grammarRule = await prisma.grammarRule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GrammarRuleFindFirstOrThrowArgs>(args?: SelectSubset<T, GrammarRuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__GrammarRuleClient<$Result.GetResult<Prisma.$GrammarRulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GrammarRules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarRuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GrammarRules
     * const grammarRules = await prisma.grammarRule.findMany()
     * 
     * // Get first 10 GrammarRules
     * const grammarRules = await prisma.grammarRule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const grammarRuleWithIdOnly = await prisma.grammarRule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GrammarRuleFindManyArgs>(args?: SelectSubset<T, GrammarRuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrammarRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GrammarRule.
     * @param {GrammarRuleCreateArgs} args - Arguments to create a GrammarRule.
     * @example
     * // Create one GrammarRule
     * const GrammarRule = await prisma.grammarRule.create({
     *   data: {
     *     // ... data to create a GrammarRule
     *   }
     * })
     * 
     */
    create<T extends GrammarRuleCreateArgs>(args: SelectSubset<T, GrammarRuleCreateArgs<ExtArgs>>): Prisma__GrammarRuleClient<$Result.GetResult<Prisma.$GrammarRulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GrammarRules.
     * @param {GrammarRuleCreateManyArgs} args - Arguments to create many GrammarRules.
     * @example
     * // Create many GrammarRules
     * const grammarRule = await prisma.grammarRule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GrammarRuleCreateManyArgs>(args?: SelectSubset<T, GrammarRuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GrammarRules and returns the data saved in the database.
     * @param {GrammarRuleCreateManyAndReturnArgs} args - Arguments to create many GrammarRules.
     * @example
     * // Create many GrammarRules
     * const grammarRule = await prisma.grammarRule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GrammarRules and only return the `id`
     * const grammarRuleWithIdOnly = await prisma.grammarRule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GrammarRuleCreateManyAndReturnArgs>(args?: SelectSubset<T, GrammarRuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrammarRulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GrammarRule.
     * @param {GrammarRuleDeleteArgs} args - Arguments to delete one GrammarRule.
     * @example
     * // Delete one GrammarRule
     * const GrammarRule = await prisma.grammarRule.delete({
     *   where: {
     *     // ... filter to delete one GrammarRule
     *   }
     * })
     * 
     */
    delete<T extends GrammarRuleDeleteArgs>(args: SelectSubset<T, GrammarRuleDeleteArgs<ExtArgs>>): Prisma__GrammarRuleClient<$Result.GetResult<Prisma.$GrammarRulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GrammarRule.
     * @param {GrammarRuleUpdateArgs} args - Arguments to update one GrammarRule.
     * @example
     * // Update one GrammarRule
     * const grammarRule = await prisma.grammarRule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GrammarRuleUpdateArgs>(args: SelectSubset<T, GrammarRuleUpdateArgs<ExtArgs>>): Prisma__GrammarRuleClient<$Result.GetResult<Prisma.$GrammarRulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GrammarRules.
     * @param {GrammarRuleDeleteManyArgs} args - Arguments to filter GrammarRules to delete.
     * @example
     * // Delete a few GrammarRules
     * const { count } = await prisma.grammarRule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GrammarRuleDeleteManyArgs>(args?: SelectSubset<T, GrammarRuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GrammarRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarRuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GrammarRules
     * const grammarRule = await prisma.grammarRule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GrammarRuleUpdateManyArgs>(args: SelectSubset<T, GrammarRuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GrammarRules and returns the data updated in the database.
     * @param {GrammarRuleUpdateManyAndReturnArgs} args - Arguments to update many GrammarRules.
     * @example
     * // Update many GrammarRules
     * const grammarRule = await prisma.grammarRule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GrammarRules and only return the `id`
     * const grammarRuleWithIdOnly = await prisma.grammarRule.updateManyAndReturn({
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
    updateManyAndReturn<T extends GrammarRuleUpdateManyAndReturnArgs>(args: SelectSubset<T, GrammarRuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrammarRulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GrammarRule.
     * @param {GrammarRuleUpsertArgs} args - Arguments to update or create a GrammarRule.
     * @example
     * // Update or create a GrammarRule
     * const grammarRule = await prisma.grammarRule.upsert({
     *   create: {
     *     // ... data to create a GrammarRule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GrammarRule we want to update
     *   }
     * })
     */
    upsert<T extends GrammarRuleUpsertArgs>(args: SelectSubset<T, GrammarRuleUpsertArgs<ExtArgs>>): Prisma__GrammarRuleClient<$Result.GetResult<Prisma.$GrammarRulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GrammarRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarRuleCountArgs} args - Arguments to filter GrammarRules to count.
     * @example
     * // Count the number of GrammarRules
     * const count = await prisma.grammarRule.count({
     *   where: {
     *     // ... the filter for the GrammarRules we want to count
     *   }
     * })
    **/
    count<T extends GrammarRuleCountArgs>(
      args?: Subset<T, GrammarRuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GrammarRuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GrammarRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarRuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GrammarRuleAggregateArgs>(args: Subset<T, GrammarRuleAggregateArgs>): Prisma.PrismaPromise<GetGrammarRuleAggregateType<T>>

    /**
     * Group by GrammarRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarRuleGroupByArgs} args - Group by arguments.
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
      T extends GrammarRuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GrammarRuleGroupByArgs['orderBy'] }
        : { orderBy?: GrammarRuleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GrammarRuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGrammarRuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GrammarRule model
   */
  readonly fields: GrammarRuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GrammarRule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GrammarRuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    grammar<T extends GrammarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GrammarDefaultArgs<ExtArgs>>): Prisma__GrammarClient<$Result.GetResult<Prisma.$GrammarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GrammarRule model
   */
  interface GrammarRuleFieldRefs {
    readonly id: FieldRef<"GrammarRule", 'Int'>
    readonly grammarId: FieldRef<"GrammarRule", 'Int'>
    readonly ruleKey: FieldRef<"GrammarRule", 'String'>
    readonly description: FieldRef<"GrammarRule", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GrammarRule findUnique
   */
  export type GrammarRuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarRule
     */
    select?: GrammarRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarRule
     */
    omit?: GrammarRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarRuleInclude<ExtArgs> | null
    /**
     * Filter, which GrammarRule to fetch.
     */
    where: GrammarRuleWhereUniqueInput
  }

  /**
   * GrammarRule findUniqueOrThrow
   */
  export type GrammarRuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarRule
     */
    select?: GrammarRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarRule
     */
    omit?: GrammarRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarRuleInclude<ExtArgs> | null
    /**
     * Filter, which GrammarRule to fetch.
     */
    where: GrammarRuleWhereUniqueInput
  }

  /**
   * GrammarRule findFirst
   */
  export type GrammarRuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarRule
     */
    select?: GrammarRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarRule
     */
    omit?: GrammarRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarRuleInclude<ExtArgs> | null
    /**
     * Filter, which GrammarRule to fetch.
     */
    where?: GrammarRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GrammarRules to fetch.
     */
    orderBy?: GrammarRuleOrderByWithRelationInput | GrammarRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GrammarRules.
     */
    cursor?: GrammarRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GrammarRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GrammarRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GrammarRules.
     */
    distinct?: GrammarRuleScalarFieldEnum | GrammarRuleScalarFieldEnum[]
  }

  /**
   * GrammarRule findFirstOrThrow
   */
  export type GrammarRuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarRule
     */
    select?: GrammarRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarRule
     */
    omit?: GrammarRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarRuleInclude<ExtArgs> | null
    /**
     * Filter, which GrammarRule to fetch.
     */
    where?: GrammarRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GrammarRules to fetch.
     */
    orderBy?: GrammarRuleOrderByWithRelationInput | GrammarRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GrammarRules.
     */
    cursor?: GrammarRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GrammarRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GrammarRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GrammarRules.
     */
    distinct?: GrammarRuleScalarFieldEnum | GrammarRuleScalarFieldEnum[]
  }

  /**
   * GrammarRule findMany
   */
  export type GrammarRuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarRule
     */
    select?: GrammarRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarRule
     */
    omit?: GrammarRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarRuleInclude<ExtArgs> | null
    /**
     * Filter, which GrammarRules to fetch.
     */
    where?: GrammarRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GrammarRules to fetch.
     */
    orderBy?: GrammarRuleOrderByWithRelationInput | GrammarRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GrammarRules.
     */
    cursor?: GrammarRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GrammarRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GrammarRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GrammarRules.
     */
    distinct?: GrammarRuleScalarFieldEnum | GrammarRuleScalarFieldEnum[]
  }

  /**
   * GrammarRule create
   */
  export type GrammarRuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarRule
     */
    select?: GrammarRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarRule
     */
    omit?: GrammarRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarRuleInclude<ExtArgs> | null
    /**
     * The data needed to create a GrammarRule.
     */
    data: XOR<GrammarRuleCreateInput, GrammarRuleUncheckedCreateInput>
  }

  /**
   * GrammarRule createMany
   */
  export type GrammarRuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GrammarRules.
     */
    data: GrammarRuleCreateManyInput | GrammarRuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GrammarRule createManyAndReturn
   */
  export type GrammarRuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarRule
     */
    select?: GrammarRuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarRule
     */
    omit?: GrammarRuleOmit<ExtArgs> | null
    /**
     * The data used to create many GrammarRules.
     */
    data: GrammarRuleCreateManyInput | GrammarRuleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarRuleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GrammarRule update
   */
  export type GrammarRuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarRule
     */
    select?: GrammarRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarRule
     */
    omit?: GrammarRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarRuleInclude<ExtArgs> | null
    /**
     * The data needed to update a GrammarRule.
     */
    data: XOR<GrammarRuleUpdateInput, GrammarRuleUncheckedUpdateInput>
    /**
     * Choose, which GrammarRule to update.
     */
    where: GrammarRuleWhereUniqueInput
  }

  /**
   * GrammarRule updateMany
   */
  export type GrammarRuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GrammarRules.
     */
    data: XOR<GrammarRuleUpdateManyMutationInput, GrammarRuleUncheckedUpdateManyInput>
    /**
     * Filter which GrammarRules to update
     */
    where?: GrammarRuleWhereInput
    /**
     * Limit how many GrammarRules to update.
     */
    limit?: number
  }

  /**
   * GrammarRule updateManyAndReturn
   */
  export type GrammarRuleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarRule
     */
    select?: GrammarRuleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarRule
     */
    omit?: GrammarRuleOmit<ExtArgs> | null
    /**
     * The data used to update GrammarRules.
     */
    data: XOR<GrammarRuleUpdateManyMutationInput, GrammarRuleUncheckedUpdateManyInput>
    /**
     * Filter which GrammarRules to update
     */
    where?: GrammarRuleWhereInput
    /**
     * Limit how many GrammarRules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarRuleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GrammarRule upsert
   */
  export type GrammarRuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarRule
     */
    select?: GrammarRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarRule
     */
    omit?: GrammarRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarRuleInclude<ExtArgs> | null
    /**
     * The filter to search for the GrammarRule to update in case it exists.
     */
    where: GrammarRuleWhereUniqueInput
    /**
     * In case the GrammarRule found by the `where` argument doesn't exist, create a new GrammarRule with this data.
     */
    create: XOR<GrammarRuleCreateInput, GrammarRuleUncheckedCreateInput>
    /**
     * In case the GrammarRule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GrammarRuleUpdateInput, GrammarRuleUncheckedUpdateInput>
  }

  /**
   * GrammarRule delete
   */
  export type GrammarRuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarRule
     */
    select?: GrammarRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarRule
     */
    omit?: GrammarRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarRuleInclude<ExtArgs> | null
    /**
     * Filter which GrammarRule to delete.
     */
    where: GrammarRuleWhereUniqueInput
  }

  /**
   * GrammarRule deleteMany
   */
  export type GrammarRuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GrammarRules to delete
     */
    where?: GrammarRuleWhereInput
    /**
     * Limit how many GrammarRules to delete.
     */
    limit?: number
  }

  /**
   * GrammarRule without action
   */
  export type GrammarRuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarRule
     */
    select?: GrammarRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarRule
     */
    omit?: GrammarRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarRuleInclude<ExtArgs> | null
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
    email: 'email'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StoryScalarFieldEnum: {
    id: 'id',
    language: 'language',
    file: 'file',
    data: 'data'
  };

  export type StoryScalarFieldEnum = (typeof StoryScalarFieldEnum)[keyof typeof StoryScalarFieldEnum]


  export const StorySectionScalarFieldEnum: {
    id: 'id',
    storyId: 'storyId',
    sectionKey: 'sectionKey',
    order: 'order',
    title: 'title',
    content: 'content'
  };

  export type StorySectionScalarFieldEnum = (typeof StorySectionScalarFieldEnum)[keyof typeof StorySectionScalarFieldEnum]


  export const ExerciseScalarFieldEnum: {
    id: 'id',
    sectionId: 'sectionId',
    exerciseIdx: 'exerciseIdx',
    question: 'question',
    answer: 'answer',
    correctAnswer: 'correctAnswer'
  };

  export type ExerciseScalarFieldEnum = (typeof ExerciseScalarFieldEnum)[keyof typeof ExerciseScalarFieldEnum]


  export const ExerciseOptionScalarFieldEnum: {
    id: 'id',
    exerciseId: 'exerciseId',
    idx: 'idx',
    text: 'text'
  };

  export type ExerciseOptionScalarFieldEnum = (typeof ExerciseOptionScalarFieldEnum)[keyof typeof ExerciseOptionScalarFieldEnum]


  export const GrammarScalarFieldEnum: {
    id: 'id',
    language: 'language',
    file: 'file',
    data: 'data'
  };

  export type GrammarScalarFieldEnum = (typeof GrammarScalarFieldEnum)[keyof typeof GrammarScalarFieldEnum]


  export const GrammarSectionScalarFieldEnum: {
    id: 'id',
    grammarId: 'grammarId',
    sectionKey: 'sectionKey',
    order: 'order',
    title: 'title',
    description: 'description'
  };

  export type GrammarSectionScalarFieldEnum = (typeof GrammarSectionScalarFieldEnum)[keyof typeof GrammarSectionScalarFieldEnum]


  export const ExampleScalarFieldEnum: {
    id: 'id',
    sectionId: 'sectionId',
    rowIndex: 'rowIndex',
    german: 'german',
    english: 'english',
    myanmar: 'myanmar',
    japanese: 'japanese',
    korean: 'korean',
    thai: 'thai',
    vietnamese: 'vietnamese'
  };

  export type ExampleScalarFieldEnum = (typeof ExampleScalarFieldEnum)[keyof typeof ExampleScalarFieldEnum]


  export const DailyUsageScalarFieldEnum: {
    id: 'id',
    file: 'file',
    data: 'data'
  };

  export type DailyUsageScalarFieldEnum = (typeof DailyUsageScalarFieldEnum)[keyof typeof DailyUsageScalarFieldEnum]


  export const DailyUsageVocabScalarFieldEnum: {
    id: 'id',
    dailyUsageId: 'dailyUsageId',
    german: 'german',
    english: 'english',
    myanmar: 'myanmar',
    japanese: 'japanese',
    korean: 'korean',
    thai: 'thai',
    vietnamese: 'vietnamese'
  };

  export type DailyUsageVocabScalarFieldEnum = (typeof DailyUsageVocabScalarFieldEnum)[keyof typeof DailyUsageVocabScalarFieldEnum]


  export const GrammarRuleScalarFieldEnum: {
    id: 'id',
    grammarId: 'grammarId',
    ruleKey: 'ruleKey',
    description: 'description'
  };

  export type GrammarRuleScalarFieldEnum = (typeof GrammarRuleScalarFieldEnum)[keyof typeof GrammarRuleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


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
    email?: StringFilter<"User"> | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
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
    email?: StringWithAggregatesFilter<"User"> | string
  }

  export type StoryWhereInput = {
    AND?: StoryWhereInput | StoryWhereInput[]
    OR?: StoryWhereInput[]
    NOT?: StoryWhereInput | StoryWhereInput[]
    id?: IntFilter<"Story"> | number
    language?: StringNullableFilter<"Story"> | string | null
    file?: StringNullableFilter<"Story"> | string | null
    data?: JsonNullableFilter<"Story">
    sections?: StorySectionListRelationFilter
  }

  export type StoryOrderByWithRelationInput = {
    id?: SortOrder
    language?: SortOrderInput | SortOrder
    file?: SortOrderInput | SortOrder
    data?: SortOrderInput | SortOrder
    sections?: StorySectionOrderByRelationAggregateInput
  }

  export type StoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StoryWhereInput | StoryWhereInput[]
    OR?: StoryWhereInput[]
    NOT?: StoryWhereInput | StoryWhereInput[]
    language?: StringNullableFilter<"Story"> | string | null
    file?: StringNullableFilter<"Story"> | string | null
    data?: JsonNullableFilter<"Story">
    sections?: StorySectionListRelationFilter
  }, "id">

  export type StoryOrderByWithAggregationInput = {
    id?: SortOrder
    language?: SortOrderInput | SortOrder
    file?: SortOrderInput | SortOrder
    data?: SortOrderInput | SortOrder
    _count?: StoryCountOrderByAggregateInput
    _avg?: StoryAvgOrderByAggregateInput
    _max?: StoryMaxOrderByAggregateInput
    _min?: StoryMinOrderByAggregateInput
    _sum?: StorySumOrderByAggregateInput
  }

  export type StoryScalarWhereWithAggregatesInput = {
    AND?: StoryScalarWhereWithAggregatesInput | StoryScalarWhereWithAggregatesInput[]
    OR?: StoryScalarWhereWithAggregatesInput[]
    NOT?: StoryScalarWhereWithAggregatesInput | StoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Story"> | number
    language?: StringNullableWithAggregatesFilter<"Story"> | string | null
    file?: StringNullableWithAggregatesFilter<"Story"> | string | null
    data?: JsonNullableWithAggregatesFilter<"Story">
  }

  export type StorySectionWhereInput = {
    AND?: StorySectionWhereInput | StorySectionWhereInput[]
    OR?: StorySectionWhereInput[]
    NOT?: StorySectionWhereInput | StorySectionWhereInput[]
    id?: IntFilter<"StorySection"> | number
    storyId?: IntFilter<"StorySection"> | number
    sectionKey?: StringNullableFilter<"StorySection"> | string | null
    order?: IntNullableFilter<"StorySection"> | number | null
    title?: StringNullableFilter<"StorySection"> | string | null
    content?: StringNullableFilter<"StorySection"> | string | null
    story?: XOR<StoryScalarRelationFilter, StoryWhereInput>
    exercises?: ExerciseListRelationFilter
  }

  export type StorySectionOrderByWithRelationInput = {
    id?: SortOrder
    storyId?: SortOrder
    sectionKey?: SortOrderInput | SortOrder
    order?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    story?: StoryOrderByWithRelationInput
    exercises?: ExerciseOrderByRelationAggregateInput
  }

  export type StorySectionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StorySectionWhereInput | StorySectionWhereInput[]
    OR?: StorySectionWhereInput[]
    NOT?: StorySectionWhereInput | StorySectionWhereInput[]
    storyId?: IntFilter<"StorySection"> | number
    sectionKey?: StringNullableFilter<"StorySection"> | string | null
    order?: IntNullableFilter<"StorySection"> | number | null
    title?: StringNullableFilter<"StorySection"> | string | null
    content?: StringNullableFilter<"StorySection"> | string | null
    story?: XOR<StoryScalarRelationFilter, StoryWhereInput>
    exercises?: ExerciseListRelationFilter
  }, "id">

  export type StorySectionOrderByWithAggregationInput = {
    id?: SortOrder
    storyId?: SortOrder
    sectionKey?: SortOrderInput | SortOrder
    order?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    _count?: StorySectionCountOrderByAggregateInput
    _avg?: StorySectionAvgOrderByAggregateInput
    _max?: StorySectionMaxOrderByAggregateInput
    _min?: StorySectionMinOrderByAggregateInput
    _sum?: StorySectionSumOrderByAggregateInput
  }

  export type StorySectionScalarWhereWithAggregatesInput = {
    AND?: StorySectionScalarWhereWithAggregatesInput | StorySectionScalarWhereWithAggregatesInput[]
    OR?: StorySectionScalarWhereWithAggregatesInput[]
    NOT?: StorySectionScalarWhereWithAggregatesInput | StorySectionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StorySection"> | number
    storyId?: IntWithAggregatesFilter<"StorySection"> | number
    sectionKey?: StringNullableWithAggregatesFilter<"StorySection"> | string | null
    order?: IntNullableWithAggregatesFilter<"StorySection"> | number | null
    title?: StringNullableWithAggregatesFilter<"StorySection"> | string | null
    content?: StringNullableWithAggregatesFilter<"StorySection"> | string | null
  }

  export type ExerciseWhereInput = {
    AND?: ExerciseWhereInput | ExerciseWhereInput[]
    OR?: ExerciseWhereInput[]
    NOT?: ExerciseWhereInput | ExerciseWhereInput[]
    id?: IntFilter<"Exercise"> | number
    sectionId?: IntFilter<"Exercise"> | number
    exerciseIdx?: IntNullableFilter<"Exercise"> | number | null
    question?: StringNullableFilter<"Exercise"> | string | null
    answer?: StringNullableFilter<"Exercise"> | string | null
    correctAnswer?: StringNullableFilter<"Exercise"> | string | null
    section?: XOR<StorySectionScalarRelationFilter, StorySectionWhereInput>
    options?: ExerciseOptionListRelationFilter
  }

  export type ExerciseOrderByWithRelationInput = {
    id?: SortOrder
    sectionId?: SortOrder
    exerciseIdx?: SortOrderInput | SortOrder
    question?: SortOrderInput | SortOrder
    answer?: SortOrderInput | SortOrder
    correctAnswer?: SortOrderInput | SortOrder
    section?: StorySectionOrderByWithRelationInput
    options?: ExerciseOptionOrderByRelationAggregateInput
  }

  export type ExerciseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExerciseWhereInput | ExerciseWhereInput[]
    OR?: ExerciseWhereInput[]
    NOT?: ExerciseWhereInput | ExerciseWhereInput[]
    sectionId?: IntFilter<"Exercise"> | number
    exerciseIdx?: IntNullableFilter<"Exercise"> | number | null
    question?: StringNullableFilter<"Exercise"> | string | null
    answer?: StringNullableFilter<"Exercise"> | string | null
    correctAnswer?: StringNullableFilter<"Exercise"> | string | null
    section?: XOR<StorySectionScalarRelationFilter, StorySectionWhereInput>
    options?: ExerciseOptionListRelationFilter
  }, "id">

  export type ExerciseOrderByWithAggregationInput = {
    id?: SortOrder
    sectionId?: SortOrder
    exerciseIdx?: SortOrderInput | SortOrder
    question?: SortOrderInput | SortOrder
    answer?: SortOrderInput | SortOrder
    correctAnswer?: SortOrderInput | SortOrder
    _count?: ExerciseCountOrderByAggregateInput
    _avg?: ExerciseAvgOrderByAggregateInput
    _max?: ExerciseMaxOrderByAggregateInput
    _min?: ExerciseMinOrderByAggregateInput
    _sum?: ExerciseSumOrderByAggregateInput
  }

  export type ExerciseScalarWhereWithAggregatesInput = {
    AND?: ExerciseScalarWhereWithAggregatesInput | ExerciseScalarWhereWithAggregatesInput[]
    OR?: ExerciseScalarWhereWithAggregatesInput[]
    NOT?: ExerciseScalarWhereWithAggregatesInput | ExerciseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Exercise"> | number
    sectionId?: IntWithAggregatesFilter<"Exercise"> | number
    exerciseIdx?: IntNullableWithAggregatesFilter<"Exercise"> | number | null
    question?: StringNullableWithAggregatesFilter<"Exercise"> | string | null
    answer?: StringNullableWithAggregatesFilter<"Exercise"> | string | null
    correctAnswer?: StringNullableWithAggregatesFilter<"Exercise"> | string | null
  }

  export type ExerciseOptionWhereInput = {
    AND?: ExerciseOptionWhereInput | ExerciseOptionWhereInput[]
    OR?: ExerciseOptionWhereInput[]
    NOT?: ExerciseOptionWhereInput | ExerciseOptionWhereInput[]
    id?: IntFilter<"ExerciseOption"> | number
    exerciseId?: IntFilter<"ExerciseOption"> | number
    idx?: IntNullableFilter<"ExerciseOption"> | number | null
    text?: StringNullableFilter<"ExerciseOption"> | string | null
    exercise?: XOR<ExerciseScalarRelationFilter, ExerciseWhereInput>
  }

  export type ExerciseOptionOrderByWithRelationInput = {
    id?: SortOrder
    exerciseId?: SortOrder
    idx?: SortOrderInput | SortOrder
    text?: SortOrderInput | SortOrder
    exercise?: ExerciseOrderByWithRelationInput
  }

  export type ExerciseOptionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExerciseOptionWhereInput | ExerciseOptionWhereInput[]
    OR?: ExerciseOptionWhereInput[]
    NOT?: ExerciseOptionWhereInput | ExerciseOptionWhereInput[]
    exerciseId?: IntFilter<"ExerciseOption"> | number
    idx?: IntNullableFilter<"ExerciseOption"> | number | null
    text?: StringNullableFilter<"ExerciseOption"> | string | null
    exercise?: XOR<ExerciseScalarRelationFilter, ExerciseWhereInput>
  }, "id">

  export type ExerciseOptionOrderByWithAggregationInput = {
    id?: SortOrder
    exerciseId?: SortOrder
    idx?: SortOrderInput | SortOrder
    text?: SortOrderInput | SortOrder
    _count?: ExerciseOptionCountOrderByAggregateInput
    _avg?: ExerciseOptionAvgOrderByAggregateInput
    _max?: ExerciseOptionMaxOrderByAggregateInput
    _min?: ExerciseOptionMinOrderByAggregateInput
    _sum?: ExerciseOptionSumOrderByAggregateInput
  }

  export type ExerciseOptionScalarWhereWithAggregatesInput = {
    AND?: ExerciseOptionScalarWhereWithAggregatesInput | ExerciseOptionScalarWhereWithAggregatesInput[]
    OR?: ExerciseOptionScalarWhereWithAggregatesInput[]
    NOT?: ExerciseOptionScalarWhereWithAggregatesInput | ExerciseOptionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ExerciseOption"> | number
    exerciseId?: IntWithAggregatesFilter<"ExerciseOption"> | number
    idx?: IntNullableWithAggregatesFilter<"ExerciseOption"> | number | null
    text?: StringNullableWithAggregatesFilter<"ExerciseOption"> | string | null
  }

  export type GrammarWhereInput = {
    AND?: GrammarWhereInput | GrammarWhereInput[]
    OR?: GrammarWhereInput[]
    NOT?: GrammarWhereInput | GrammarWhereInput[]
    id?: IntFilter<"Grammar"> | number
    language?: StringNullableFilter<"Grammar"> | string | null
    file?: StringNullableFilter<"Grammar"> | string | null
    data?: JsonNullableFilter<"Grammar">
    sections?: GrammarSectionListRelationFilter
    rules?: GrammarRuleListRelationFilter
  }

  export type GrammarOrderByWithRelationInput = {
    id?: SortOrder
    language?: SortOrderInput | SortOrder
    file?: SortOrderInput | SortOrder
    data?: SortOrderInput | SortOrder
    sections?: GrammarSectionOrderByRelationAggregateInput
    rules?: GrammarRuleOrderByRelationAggregateInput
  }

  export type GrammarWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GrammarWhereInput | GrammarWhereInput[]
    OR?: GrammarWhereInput[]
    NOT?: GrammarWhereInput | GrammarWhereInput[]
    language?: StringNullableFilter<"Grammar"> | string | null
    file?: StringNullableFilter<"Grammar"> | string | null
    data?: JsonNullableFilter<"Grammar">
    sections?: GrammarSectionListRelationFilter
    rules?: GrammarRuleListRelationFilter
  }, "id">

  export type GrammarOrderByWithAggregationInput = {
    id?: SortOrder
    language?: SortOrderInput | SortOrder
    file?: SortOrderInput | SortOrder
    data?: SortOrderInput | SortOrder
    _count?: GrammarCountOrderByAggregateInput
    _avg?: GrammarAvgOrderByAggregateInput
    _max?: GrammarMaxOrderByAggregateInput
    _min?: GrammarMinOrderByAggregateInput
    _sum?: GrammarSumOrderByAggregateInput
  }

  export type GrammarScalarWhereWithAggregatesInput = {
    AND?: GrammarScalarWhereWithAggregatesInput | GrammarScalarWhereWithAggregatesInput[]
    OR?: GrammarScalarWhereWithAggregatesInput[]
    NOT?: GrammarScalarWhereWithAggregatesInput | GrammarScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Grammar"> | number
    language?: StringNullableWithAggregatesFilter<"Grammar"> | string | null
    file?: StringNullableWithAggregatesFilter<"Grammar"> | string | null
    data?: JsonNullableWithAggregatesFilter<"Grammar">
  }

  export type GrammarSectionWhereInput = {
    AND?: GrammarSectionWhereInput | GrammarSectionWhereInput[]
    OR?: GrammarSectionWhereInput[]
    NOT?: GrammarSectionWhereInput | GrammarSectionWhereInput[]
    id?: IntFilter<"GrammarSection"> | number
    grammarId?: IntFilter<"GrammarSection"> | number
    sectionKey?: StringNullableFilter<"GrammarSection"> | string | null
    order?: IntNullableFilter<"GrammarSection"> | number | null
    title?: StringNullableFilter<"GrammarSection"> | string | null
    description?: StringNullableFilter<"GrammarSection"> | string | null
    grammar?: XOR<GrammarScalarRelationFilter, GrammarWhereInput>
    examples?: ExampleListRelationFilter
  }

  export type GrammarSectionOrderByWithRelationInput = {
    id?: SortOrder
    grammarId?: SortOrder
    sectionKey?: SortOrderInput | SortOrder
    order?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    grammar?: GrammarOrderByWithRelationInput
    examples?: ExampleOrderByRelationAggregateInput
  }

  export type GrammarSectionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GrammarSectionWhereInput | GrammarSectionWhereInput[]
    OR?: GrammarSectionWhereInput[]
    NOT?: GrammarSectionWhereInput | GrammarSectionWhereInput[]
    grammarId?: IntFilter<"GrammarSection"> | number
    sectionKey?: StringNullableFilter<"GrammarSection"> | string | null
    order?: IntNullableFilter<"GrammarSection"> | number | null
    title?: StringNullableFilter<"GrammarSection"> | string | null
    description?: StringNullableFilter<"GrammarSection"> | string | null
    grammar?: XOR<GrammarScalarRelationFilter, GrammarWhereInput>
    examples?: ExampleListRelationFilter
  }, "id">

  export type GrammarSectionOrderByWithAggregationInput = {
    id?: SortOrder
    grammarId?: SortOrder
    sectionKey?: SortOrderInput | SortOrder
    order?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    _count?: GrammarSectionCountOrderByAggregateInput
    _avg?: GrammarSectionAvgOrderByAggregateInput
    _max?: GrammarSectionMaxOrderByAggregateInput
    _min?: GrammarSectionMinOrderByAggregateInput
    _sum?: GrammarSectionSumOrderByAggregateInput
  }

  export type GrammarSectionScalarWhereWithAggregatesInput = {
    AND?: GrammarSectionScalarWhereWithAggregatesInput | GrammarSectionScalarWhereWithAggregatesInput[]
    OR?: GrammarSectionScalarWhereWithAggregatesInput[]
    NOT?: GrammarSectionScalarWhereWithAggregatesInput | GrammarSectionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GrammarSection"> | number
    grammarId?: IntWithAggregatesFilter<"GrammarSection"> | number
    sectionKey?: StringNullableWithAggregatesFilter<"GrammarSection"> | string | null
    order?: IntNullableWithAggregatesFilter<"GrammarSection"> | number | null
    title?: StringNullableWithAggregatesFilter<"GrammarSection"> | string | null
    description?: StringNullableWithAggregatesFilter<"GrammarSection"> | string | null
  }

  export type ExampleWhereInput = {
    AND?: ExampleWhereInput | ExampleWhereInput[]
    OR?: ExampleWhereInput[]
    NOT?: ExampleWhereInput | ExampleWhereInput[]
    id?: IntFilter<"Example"> | number
    sectionId?: IntFilter<"Example"> | number
    rowIndex?: IntNullableFilter<"Example"> | number | null
    german?: StringNullableFilter<"Example"> | string | null
    english?: StringNullableFilter<"Example"> | string | null
    myanmar?: StringNullableFilter<"Example"> | string | null
    japanese?: StringNullableFilter<"Example"> | string | null
    korean?: StringNullableFilter<"Example"> | string | null
    thai?: StringNullableFilter<"Example"> | string | null
    vietnamese?: StringNullableFilter<"Example"> | string | null
    section?: XOR<GrammarSectionScalarRelationFilter, GrammarSectionWhereInput>
  }

  export type ExampleOrderByWithRelationInput = {
    id?: SortOrder
    sectionId?: SortOrder
    rowIndex?: SortOrderInput | SortOrder
    german?: SortOrderInput | SortOrder
    english?: SortOrderInput | SortOrder
    myanmar?: SortOrderInput | SortOrder
    japanese?: SortOrderInput | SortOrder
    korean?: SortOrderInput | SortOrder
    thai?: SortOrderInput | SortOrder
    vietnamese?: SortOrderInput | SortOrder
    section?: GrammarSectionOrderByWithRelationInput
  }

  export type ExampleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExampleWhereInput | ExampleWhereInput[]
    OR?: ExampleWhereInput[]
    NOT?: ExampleWhereInput | ExampleWhereInput[]
    sectionId?: IntFilter<"Example"> | number
    rowIndex?: IntNullableFilter<"Example"> | number | null
    german?: StringNullableFilter<"Example"> | string | null
    english?: StringNullableFilter<"Example"> | string | null
    myanmar?: StringNullableFilter<"Example"> | string | null
    japanese?: StringNullableFilter<"Example"> | string | null
    korean?: StringNullableFilter<"Example"> | string | null
    thai?: StringNullableFilter<"Example"> | string | null
    vietnamese?: StringNullableFilter<"Example"> | string | null
    section?: XOR<GrammarSectionScalarRelationFilter, GrammarSectionWhereInput>
  }, "id">

  export type ExampleOrderByWithAggregationInput = {
    id?: SortOrder
    sectionId?: SortOrder
    rowIndex?: SortOrderInput | SortOrder
    german?: SortOrderInput | SortOrder
    english?: SortOrderInput | SortOrder
    myanmar?: SortOrderInput | SortOrder
    japanese?: SortOrderInput | SortOrder
    korean?: SortOrderInput | SortOrder
    thai?: SortOrderInput | SortOrder
    vietnamese?: SortOrderInput | SortOrder
    _count?: ExampleCountOrderByAggregateInput
    _avg?: ExampleAvgOrderByAggregateInput
    _max?: ExampleMaxOrderByAggregateInput
    _min?: ExampleMinOrderByAggregateInput
    _sum?: ExampleSumOrderByAggregateInput
  }

  export type ExampleScalarWhereWithAggregatesInput = {
    AND?: ExampleScalarWhereWithAggregatesInput | ExampleScalarWhereWithAggregatesInput[]
    OR?: ExampleScalarWhereWithAggregatesInput[]
    NOT?: ExampleScalarWhereWithAggregatesInput | ExampleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Example"> | number
    sectionId?: IntWithAggregatesFilter<"Example"> | number
    rowIndex?: IntNullableWithAggregatesFilter<"Example"> | number | null
    german?: StringNullableWithAggregatesFilter<"Example"> | string | null
    english?: StringNullableWithAggregatesFilter<"Example"> | string | null
    myanmar?: StringNullableWithAggregatesFilter<"Example"> | string | null
    japanese?: StringNullableWithAggregatesFilter<"Example"> | string | null
    korean?: StringNullableWithAggregatesFilter<"Example"> | string | null
    thai?: StringNullableWithAggregatesFilter<"Example"> | string | null
    vietnamese?: StringNullableWithAggregatesFilter<"Example"> | string | null
  }

  export type DailyUsageWhereInput = {
    AND?: DailyUsageWhereInput | DailyUsageWhereInput[]
    OR?: DailyUsageWhereInput[]
    NOT?: DailyUsageWhereInput | DailyUsageWhereInput[]
    id?: IntFilter<"DailyUsage"> | number
    file?: StringNullableFilter<"DailyUsage"> | string | null
    data?: JsonNullableFilter<"DailyUsage">
    vocabs?: DailyUsageVocabListRelationFilter
  }

  export type DailyUsageOrderByWithRelationInput = {
    id?: SortOrder
    file?: SortOrderInput | SortOrder
    data?: SortOrderInput | SortOrder
    vocabs?: DailyUsageVocabOrderByRelationAggregateInput
  }

  export type DailyUsageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DailyUsageWhereInput | DailyUsageWhereInput[]
    OR?: DailyUsageWhereInput[]
    NOT?: DailyUsageWhereInput | DailyUsageWhereInput[]
    file?: StringNullableFilter<"DailyUsage"> | string | null
    data?: JsonNullableFilter<"DailyUsage">
    vocabs?: DailyUsageVocabListRelationFilter
  }, "id">

  export type DailyUsageOrderByWithAggregationInput = {
    id?: SortOrder
    file?: SortOrderInput | SortOrder
    data?: SortOrderInput | SortOrder
    _count?: DailyUsageCountOrderByAggregateInput
    _avg?: DailyUsageAvgOrderByAggregateInput
    _max?: DailyUsageMaxOrderByAggregateInput
    _min?: DailyUsageMinOrderByAggregateInput
    _sum?: DailyUsageSumOrderByAggregateInput
  }

  export type DailyUsageScalarWhereWithAggregatesInput = {
    AND?: DailyUsageScalarWhereWithAggregatesInput | DailyUsageScalarWhereWithAggregatesInput[]
    OR?: DailyUsageScalarWhereWithAggregatesInput[]
    NOT?: DailyUsageScalarWhereWithAggregatesInput | DailyUsageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DailyUsage"> | number
    file?: StringNullableWithAggregatesFilter<"DailyUsage"> | string | null
    data?: JsonNullableWithAggregatesFilter<"DailyUsage">
  }

  export type DailyUsageVocabWhereInput = {
    AND?: DailyUsageVocabWhereInput | DailyUsageVocabWhereInput[]
    OR?: DailyUsageVocabWhereInput[]
    NOT?: DailyUsageVocabWhereInput | DailyUsageVocabWhereInput[]
    id?: IntFilter<"DailyUsageVocab"> | number
    dailyUsageId?: IntFilter<"DailyUsageVocab"> | number
    german?: StringNullableFilter<"DailyUsageVocab"> | string | null
    english?: StringNullableFilter<"DailyUsageVocab"> | string | null
    myanmar?: StringNullableFilter<"DailyUsageVocab"> | string | null
    japanese?: StringNullableFilter<"DailyUsageVocab"> | string | null
    korean?: StringNullableFilter<"DailyUsageVocab"> | string | null
    thai?: StringNullableFilter<"DailyUsageVocab"> | string | null
    vietnamese?: StringNullableFilter<"DailyUsageVocab"> | string | null
    dailyUsage?: XOR<DailyUsageScalarRelationFilter, DailyUsageWhereInput>
  }

  export type DailyUsageVocabOrderByWithRelationInput = {
    id?: SortOrder
    dailyUsageId?: SortOrder
    german?: SortOrderInput | SortOrder
    english?: SortOrderInput | SortOrder
    myanmar?: SortOrderInput | SortOrder
    japanese?: SortOrderInput | SortOrder
    korean?: SortOrderInput | SortOrder
    thai?: SortOrderInput | SortOrder
    vietnamese?: SortOrderInput | SortOrder
    dailyUsage?: DailyUsageOrderByWithRelationInput
  }

  export type DailyUsageVocabWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DailyUsageVocabWhereInput | DailyUsageVocabWhereInput[]
    OR?: DailyUsageVocabWhereInput[]
    NOT?: DailyUsageVocabWhereInput | DailyUsageVocabWhereInput[]
    dailyUsageId?: IntFilter<"DailyUsageVocab"> | number
    german?: StringNullableFilter<"DailyUsageVocab"> | string | null
    english?: StringNullableFilter<"DailyUsageVocab"> | string | null
    myanmar?: StringNullableFilter<"DailyUsageVocab"> | string | null
    japanese?: StringNullableFilter<"DailyUsageVocab"> | string | null
    korean?: StringNullableFilter<"DailyUsageVocab"> | string | null
    thai?: StringNullableFilter<"DailyUsageVocab"> | string | null
    vietnamese?: StringNullableFilter<"DailyUsageVocab"> | string | null
    dailyUsage?: XOR<DailyUsageScalarRelationFilter, DailyUsageWhereInput>
  }, "id">

  export type DailyUsageVocabOrderByWithAggregationInput = {
    id?: SortOrder
    dailyUsageId?: SortOrder
    german?: SortOrderInput | SortOrder
    english?: SortOrderInput | SortOrder
    myanmar?: SortOrderInput | SortOrder
    japanese?: SortOrderInput | SortOrder
    korean?: SortOrderInput | SortOrder
    thai?: SortOrderInput | SortOrder
    vietnamese?: SortOrderInput | SortOrder
    _count?: DailyUsageVocabCountOrderByAggregateInput
    _avg?: DailyUsageVocabAvgOrderByAggregateInput
    _max?: DailyUsageVocabMaxOrderByAggregateInput
    _min?: DailyUsageVocabMinOrderByAggregateInput
    _sum?: DailyUsageVocabSumOrderByAggregateInput
  }

  export type DailyUsageVocabScalarWhereWithAggregatesInput = {
    AND?: DailyUsageVocabScalarWhereWithAggregatesInput | DailyUsageVocabScalarWhereWithAggregatesInput[]
    OR?: DailyUsageVocabScalarWhereWithAggregatesInput[]
    NOT?: DailyUsageVocabScalarWhereWithAggregatesInput | DailyUsageVocabScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DailyUsageVocab"> | number
    dailyUsageId?: IntWithAggregatesFilter<"DailyUsageVocab"> | number
    german?: StringNullableWithAggregatesFilter<"DailyUsageVocab"> | string | null
    english?: StringNullableWithAggregatesFilter<"DailyUsageVocab"> | string | null
    myanmar?: StringNullableWithAggregatesFilter<"DailyUsageVocab"> | string | null
    japanese?: StringNullableWithAggregatesFilter<"DailyUsageVocab"> | string | null
    korean?: StringNullableWithAggregatesFilter<"DailyUsageVocab"> | string | null
    thai?: StringNullableWithAggregatesFilter<"DailyUsageVocab"> | string | null
    vietnamese?: StringNullableWithAggregatesFilter<"DailyUsageVocab"> | string | null
  }

  export type GrammarRuleWhereInput = {
    AND?: GrammarRuleWhereInput | GrammarRuleWhereInput[]
    OR?: GrammarRuleWhereInput[]
    NOT?: GrammarRuleWhereInput | GrammarRuleWhereInput[]
    id?: IntFilter<"GrammarRule"> | number
    grammarId?: IntFilter<"GrammarRule"> | number
    ruleKey?: StringNullableFilter<"GrammarRule"> | string | null
    description?: StringNullableFilter<"GrammarRule"> | string | null
    grammar?: XOR<GrammarScalarRelationFilter, GrammarWhereInput>
  }

  export type GrammarRuleOrderByWithRelationInput = {
    id?: SortOrder
    grammarId?: SortOrder
    ruleKey?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    grammar?: GrammarOrderByWithRelationInput
  }

  export type GrammarRuleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GrammarRuleWhereInput | GrammarRuleWhereInput[]
    OR?: GrammarRuleWhereInput[]
    NOT?: GrammarRuleWhereInput | GrammarRuleWhereInput[]
    grammarId?: IntFilter<"GrammarRule"> | number
    ruleKey?: StringNullableFilter<"GrammarRule"> | string | null
    description?: StringNullableFilter<"GrammarRule"> | string | null
    grammar?: XOR<GrammarScalarRelationFilter, GrammarWhereInput>
  }, "id">

  export type GrammarRuleOrderByWithAggregationInput = {
    id?: SortOrder
    grammarId?: SortOrder
    ruleKey?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    _count?: GrammarRuleCountOrderByAggregateInput
    _avg?: GrammarRuleAvgOrderByAggregateInput
    _max?: GrammarRuleMaxOrderByAggregateInput
    _min?: GrammarRuleMinOrderByAggregateInput
    _sum?: GrammarRuleSumOrderByAggregateInput
  }

  export type GrammarRuleScalarWhereWithAggregatesInput = {
    AND?: GrammarRuleScalarWhereWithAggregatesInput | GrammarRuleScalarWhereWithAggregatesInput[]
    OR?: GrammarRuleScalarWhereWithAggregatesInput[]
    NOT?: GrammarRuleScalarWhereWithAggregatesInput | GrammarRuleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GrammarRule"> | number
    grammarId?: IntWithAggregatesFilter<"GrammarRule"> | number
    ruleKey?: StringNullableWithAggregatesFilter<"GrammarRule"> | string | null
    description?: StringNullableWithAggregatesFilter<"GrammarRule"> | string | null
  }

  export type UserCreateInput = {
    name: string
    email: string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type StoryCreateInput = {
    language?: string | null
    file?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    sections?: StorySectionCreateNestedManyWithoutStoryInput
  }

  export type StoryUncheckedCreateInput = {
    id?: number
    language?: string | null
    file?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    sections?: StorySectionUncheckedCreateNestedManyWithoutStoryInput
  }

  export type StoryUpdateInput = {
    language?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    sections?: StorySectionUpdateManyWithoutStoryNestedInput
  }

  export type StoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    language?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    sections?: StorySectionUncheckedUpdateManyWithoutStoryNestedInput
  }

  export type StoryCreateManyInput = {
    id?: number
    language?: string | null
    file?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type StoryUpdateManyMutationInput = {
    language?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type StoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    language?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type StorySectionCreateInput = {
    sectionKey?: string | null
    order?: number | null
    title?: string | null
    content?: string | null
    story: StoryCreateNestedOneWithoutSectionsInput
    exercises?: ExerciseCreateNestedManyWithoutSectionInput
  }

  export type StorySectionUncheckedCreateInput = {
    id?: number
    storyId: number
    sectionKey?: string | null
    order?: number | null
    title?: string | null
    content?: string | null
    exercises?: ExerciseUncheckedCreateNestedManyWithoutSectionInput
  }

  export type StorySectionUpdateInput = {
    sectionKey?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    story?: StoryUpdateOneRequiredWithoutSectionsNestedInput
    exercises?: ExerciseUpdateManyWithoutSectionNestedInput
  }

  export type StorySectionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    storyId?: IntFieldUpdateOperationsInput | number
    sectionKey?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    exercises?: ExerciseUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type StorySectionCreateManyInput = {
    id?: number
    storyId: number
    sectionKey?: string | null
    order?: number | null
    title?: string | null
    content?: string | null
  }

  export type StorySectionUpdateManyMutationInput = {
    sectionKey?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StorySectionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    storyId?: IntFieldUpdateOperationsInput | number
    sectionKey?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExerciseCreateInput = {
    exerciseIdx?: number | null
    question?: string | null
    answer?: string | null
    correctAnswer?: string | null
    section: StorySectionCreateNestedOneWithoutExercisesInput
    options?: ExerciseOptionCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUncheckedCreateInput = {
    id?: number
    sectionId: number
    exerciseIdx?: number | null
    question?: string | null
    answer?: string | null
    correctAnswer?: string | null
    options?: ExerciseOptionUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUpdateInput = {
    exerciseIdx?: NullableIntFieldUpdateOperationsInput | number | null
    question?: NullableStringFieldUpdateOperationsInput | string | null
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    section?: StorySectionUpdateOneRequiredWithoutExercisesNestedInput
    options?: ExerciseOptionUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sectionId?: IntFieldUpdateOperationsInput | number
    exerciseIdx?: NullableIntFieldUpdateOperationsInput | number | null
    question?: NullableStringFieldUpdateOperationsInput | string | null
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    options?: ExerciseOptionUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseCreateManyInput = {
    id?: number
    sectionId: number
    exerciseIdx?: number | null
    question?: string | null
    answer?: string | null
    correctAnswer?: string | null
  }

  export type ExerciseUpdateManyMutationInput = {
    exerciseIdx?: NullableIntFieldUpdateOperationsInput | number | null
    question?: NullableStringFieldUpdateOperationsInput | string | null
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswer?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExerciseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sectionId?: IntFieldUpdateOperationsInput | number
    exerciseIdx?: NullableIntFieldUpdateOperationsInput | number | null
    question?: NullableStringFieldUpdateOperationsInput | string | null
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswer?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExerciseOptionCreateInput = {
    idx?: number | null
    text?: string | null
    exercise: ExerciseCreateNestedOneWithoutOptionsInput
  }

  export type ExerciseOptionUncheckedCreateInput = {
    id?: number
    exerciseId: number
    idx?: number | null
    text?: string | null
  }

  export type ExerciseOptionUpdateInput = {
    idx?: NullableIntFieldUpdateOperationsInput | number | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    exercise?: ExerciseUpdateOneRequiredWithoutOptionsNestedInput
  }

  export type ExerciseOptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    exerciseId?: IntFieldUpdateOperationsInput | number
    idx?: NullableIntFieldUpdateOperationsInput | number | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExerciseOptionCreateManyInput = {
    id?: number
    exerciseId: number
    idx?: number | null
    text?: string | null
  }

  export type ExerciseOptionUpdateManyMutationInput = {
    idx?: NullableIntFieldUpdateOperationsInput | number | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExerciseOptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    exerciseId?: IntFieldUpdateOperationsInput | number
    idx?: NullableIntFieldUpdateOperationsInput | number | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GrammarCreateInput = {
    language?: string | null
    file?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    sections?: GrammarSectionCreateNestedManyWithoutGrammarInput
    rules?: GrammarRuleCreateNestedManyWithoutGrammarInput
  }

  export type GrammarUncheckedCreateInput = {
    id?: number
    language?: string | null
    file?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    sections?: GrammarSectionUncheckedCreateNestedManyWithoutGrammarInput
    rules?: GrammarRuleUncheckedCreateNestedManyWithoutGrammarInput
  }

  export type GrammarUpdateInput = {
    language?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    sections?: GrammarSectionUpdateManyWithoutGrammarNestedInput
    rules?: GrammarRuleUpdateManyWithoutGrammarNestedInput
  }

  export type GrammarUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    language?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    sections?: GrammarSectionUncheckedUpdateManyWithoutGrammarNestedInput
    rules?: GrammarRuleUncheckedUpdateManyWithoutGrammarNestedInput
  }

  export type GrammarCreateManyInput = {
    id?: number
    language?: string | null
    file?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type GrammarUpdateManyMutationInput = {
    language?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type GrammarUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    language?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type GrammarSectionCreateInput = {
    sectionKey?: string | null
    order?: number | null
    title?: string | null
    description?: string | null
    grammar: GrammarCreateNestedOneWithoutSectionsInput
    examples?: ExampleCreateNestedManyWithoutSectionInput
  }

  export type GrammarSectionUncheckedCreateInput = {
    id?: number
    grammarId: number
    sectionKey?: string | null
    order?: number | null
    title?: string | null
    description?: string | null
    examples?: ExampleUncheckedCreateNestedManyWithoutSectionInput
  }

  export type GrammarSectionUpdateInput = {
    sectionKey?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    grammar?: GrammarUpdateOneRequiredWithoutSectionsNestedInput
    examples?: ExampleUpdateManyWithoutSectionNestedInput
  }

  export type GrammarSectionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    grammarId?: IntFieldUpdateOperationsInput | number
    sectionKey?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    examples?: ExampleUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type GrammarSectionCreateManyInput = {
    id?: number
    grammarId: number
    sectionKey?: string | null
    order?: number | null
    title?: string | null
    description?: string | null
  }

  export type GrammarSectionUpdateManyMutationInput = {
    sectionKey?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GrammarSectionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    grammarId?: IntFieldUpdateOperationsInput | number
    sectionKey?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExampleCreateInput = {
    rowIndex?: number | null
    german?: string | null
    english?: string | null
    myanmar?: string | null
    japanese?: string | null
    korean?: string | null
    thai?: string | null
    vietnamese?: string | null
    section: GrammarSectionCreateNestedOneWithoutExamplesInput
  }

  export type ExampleUncheckedCreateInput = {
    id?: number
    sectionId: number
    rowIndex?: number | null
    german?: string | null
    english?: string | null
    myanmar?: string | null
    japanese?: string | null
    korean?: string | null
    thai?: string | null
    vietnamese?: string | null
  }

  export type ExampleUpdateInput = {
    rowIndex?: NullableIntFieldUpdateOperationsInput | number | null
    german?: NullableStringFieldUpdateOperationsInput | string | null
    english?: NullableStringFieldUpdateOperationsInput | string | null
    myanmar?: NullableStringFieldUpdateOperationsInput | string | null
    japanese?: NullableStringFieldUpdateOperationsInput | string | null
    korean?: NullableStringFieldUpdateOperationsInput | string | null
    thai?: NullableStringFieldUpdateOperationsInput | string | null
    vietnamese?: NullableStringFieldUpdateOperationsInput | string | null
    section?: GrammarSectionUpdateOneRequiredWithoutExamplesNestedInput
  }

  export type ExampleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sectionId?: IntFieldUpdateOperationsInput | number
    rowIndex?: NullableIntFieldUpdateOperationsInput | number | null
    german?: NullableStringFieldUpdateOperationsInput | string | null
    english?: NullableStringFieldUpdateOperationsInput | string | null
    myanmar?: NullableStringFieldUpdateOperationsInput | string | null
    japanese?: NullableStringFieldUpdateOperationsInput | string | null
    korean?: NullableStringFieldUpdateOperationsInput | string | null
    thai?: NullableStringFieldUpdateOperationsInput | string | null
    vietnamese?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExampleCreateManyInput = {
    id?: number
    sectionId: number
    rowIndex?: number | null
    german?: string | null
    english?: string | null
    myanmar?: string | null
    japanese?: string | null
    korean?: string | null
    thai?: string | null
    vietnamese?: string | null
  }

  export type ExampleUpdateManyMutationInput = {
    rowIndex?: NullableIntFieldUpdateOperationsInput | number | null
    german?: NullableStringFieldUpdateOperationsInput | string | null
    english?: NullableStringFieldUpdateOperationsInput | string | null
    myanmar?: NullableStringFieldUpdateOperationsInput | string | null
    japanese?: NullableStringFieldUpdateOperationsInput | string | null
    korean?: NullableStringFieldUpdateOperationsInput | string | null
    thai?: NullableStringFieldUpdateOperationsInput | string | null
    vietnamese?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExampleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sectionId?: IntFieldUpdateOperationsInput | number
    rowIndex?: NullableIntFieldUpdateOperationsInput | number | null
    german?: NullableStringFieldUpdateOperationsInput | string | null
    english?: NullableStringFieldUpdateOperationsInput | string | null
    myanmar?: NullableStringFieldUpdateOperationsInput | string | null
    japanese?: NullableStringFieldUpdateOperationsInput | string | null
    korean?: NullableStringFieldUpdateOperationsInput | string | null
    thai?: NullableStringFieldUpdateOperationsInput | string | null
    vietnamese?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DailyUsageCreateInput = {
    file?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    vocabs?: DailyUsageVocabCreateNestedManyWithoutDailyUsageInput
  }

  export type DailyUsageUncheckedCreateInput = {
    id?: number
    file?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    vocabs?: DailyUsageVocabUncheckedCreateNestedManyWithoutDailyUsageInput
  }

  export type DailyUsageUpdateInput = {
    file?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    vocabs?: DailyUsageVocabUpdateManyWithoutDailyUsageNestedInput
  }

  export type DailyUsageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    file?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    vocabs?: DailyUsageVocabUncheckedUpdateManyWithoutDailyUsageNestedInput
  }

  export type DailyUsageCreateManyInput = {
    id?: number
    file?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DailyUsageUpdateManyMutationInput = {
    file?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DailyUsageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    file?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DailyUsageVocabCreateInput = {
    german?: string | null
    english?: string | null
    myanmar?: string | null
    japanese?: string | null
    korean?: string | null
    thai?: string | null
    vietnamese?: string | null
    dailyUsage: DailyUsageCreateNestedOneWithoutVocabsInput
  }

  export type DailyUsageVocabUncheckedCreateInput = {
    id?: number
    dailyUsageId: number
    german?: string | null
    english?: string | null
    myanmar?: string | null
    japanese?: string | null
    korean?: string | null
    thai?: string | null
    vietnamese?: string | null
  }

  export type DailyUsageVocabUpdateInput = {
    german?: NullableStringFieldUpdateOperationsInput | string | null
    english?: NullableStringFieldUpdateOperationsInput | string | null
    myanmar?: NullableStringFieldUpdateOperationsInput | string | null
    japanese?: NullableStringFieldUpdateOperationsInput | string | null
    korean?: NullableStringFieldUpdateOperationsInput | string | null
    thai?: NullableStringFieldUpdateOperationsInput | string | null
    vietnamese?: NullableStringFieldUpdateOperationsInput | string | null
    dailyUsage?: DailyUsageUpdateOneRequiredWithoutVocabsNestedInput
  }

  export type DailyUsageVocabUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dailyUsageId?: IntFieldUpdateOperationsInput | number
    german?: NullableStringFieldUpdateOperationsInput | string | null
    english?: NullableStringFieldUpdateOperationsInput | string | null
    myanmar?: NullableStringFieldUpdateOperationsInput | string | null
    japanese?: NullableStringFieldUpdateOperationsInput | string | null
    korean?: NullableStringFieldUpdateOperationsInput | string | null
    thai?: NullableStringFieldUpdateOperationsInput | string | null
    vietnamese?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DailyUsageVocabCreateManyInput = {
    id?: number
    dailyUsageId: number
    german?: string | null
    english?: string | null
    myanmar?: string | null
    japanese?: string | null
    korean?: string | null
    thai?: string | null
    vietnamese?: string | null
  }

  export type DailyUsageVocabUpdateManyMutationInput = {
    german?: NullableStringFieldUpdateOperationsInput | string | null
    english?: NullableStringFieldUpdateOperationsInput | string | null
    myanmar?: NullableStringFieldUpdateOperationsInput | string | null
    japanese?: NullableStringFieldUpdateOperationsInput | string | null
    korean?: NullableStringFieldUpdateOperationsInput | string | null
    thai?: NullableStringFieldUpdateOperationsInput | string | null
    vietnamese?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DailyUsageVocabUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dailyUsageId?: IntFieldUpdateOperationsInput | number
    german?: NullableStringFieldUpdateOperationsInput | string | null
    english?: NullableStringFieldUpdateOperationsInput | string | null
    myanmar?: NullableStringFieldUpdateOperationsInput | string | null
    japanese?: NullableStringFieldUpdateOperationsInput | string | null
    korean?: NullableStringFieldUpdateOperationsInput | string | null
    thai?: NullableStringFieldUpdateOperationsInput | string | null
    vietnamese?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GrammarRuleCreateInput = {
    ruleKey?: string | null
    description?: string | null
    grammar: GrammarCreateNestedOneWithoutRulesInput
  }

  export type GrammarRuleUncheckedCreateInput = {
    id?: number
    grammarId: number
    ruleKey?: string | null
    description?: string | null
  }

  export type GrammarRuleUpdateInput = {
    ruleKey?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    grammar?: GrammarUpdateOneRequiredWithoutRulesNestedInput
  }

  export type GrammarRuleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    grammarId?: IntFieldUpdateOperationsInput | number
    ruleKey?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GrammarRuleCreateManyInput = {
    id?: number
    grammarId: number
    ruleKey?: string | null
    description?: string | null
  }

  export type GrammarRuleUpdateManyMutationInput = {
    ruleKey?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GrammarRuleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    grammarId?: IntFieldUpdateOperationsInput | number
    ruleKey?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type StorySectionListRelationFilter = {
    every?: StorySectionWhereInput
    some?: StorySectionWhereInput
    none?: StorySectionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type StorySectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StoryCountOrderByAggregateInput = {
    id?: SortOrder
    language?: SortOrder
    file?: SortOrder
    data?: SortOrder
  }

  export type StoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StoryMaxOrderByAggregateInput = {
    id?: SortOrder
    language?: SortOrder
    file?: SortOrder
  }

  export type StoryMinOrderByAggregateInput = {
    id?: SortOrder
    language?: SortOrder
    file?: SortOrder
  }

  export type StorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StoryScalarRelationFilter = {
    is?: StoryWhereInput
    isNot?: StoryWhereInput
  }

  export type ExerciseListRelationFilter = {
    every?: ExerciseWhereInput
    some?: ExerciseWhereInput
    none?: ExerciseWhereInput
  }

  export type ExerciseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StorySectionCountOrderByAggregateInput = {
    id?: SortOrder
    storyId?: SortOrder
    sectionKey?: SortOrder
    order?: SortOrder
    title?: SortOrder
    content?: SortOrder
  }

  export type StorySectionAvgOrderByAggregateInput = {
    id?: SortOrder
    storyId?: SortOrder
    order?: SortOrder
  }

  export type StorySectionMaxOrderByAggregateInput = {
    id?: SortOrder
    storyId?: SortOrder
    sectionKey?: SortOrder
    order?: SortOrder
    title?: SortOrder
    content?: SortOrder
  }

  export type StorySectionMinOrderByAggregateInput = {
    id?: SortOrder
    storyId?: SortOrder
    sectionKey?: SortOrder
    order?: SortOrder
    title?: SortOrder
    content?: SortOrder
  }

  export type StorySectionSumOrderByAggregateInput = {
    id?: SortOrder
    storyId?: SortOrder
    order?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StorySectionScalarRelationFilter = {
    is?: StorySectionWhereInput
    isNot?: StorySectionWhereInput
  }

  export type ExerciseOptionListRelationFilter = {
    every?: ExerciseOptionWhereInput
    some?: ExerciseOptionWhereInput
    none?: ExerciseOptionWhereInput
  }

  export type ExerciseOptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExerciseCountOrderByAggregateInput = {
    id?: SortOrder
    sectionId?: SortOrder
    exerciseIdx?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    correctAnswer?: SortOrder
  }

  export type ExerciseAvgOrderByAggregateInput = {
    id?: SortOrder
    sectionId?: SortOrder
    exerciseIdx?: SortOrder
  }

  export type ExerciseMaxOrderByAggregateInput = {
    id?: SortOrder
    sectionId?: SortOrder
    exerciseIdx?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    correctAnswer?: SortOrder
  }

  export type ExerciseMinOrderByAggregateInput = {
    id?: SortOrder
    sectionId?: SortOrder
    exerciseIdx?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    correctAnswer?: SortOrder
  }

  export type ExerciseSumOrderByAggregateInput = {
    id?: SortOrder
    sectionId?: SortOrder
    exerciseIdx?: SortOrder
  }

  export type ExerciseScalarRelationFilter = {
    is?: ExerciseWhereInput
    isNot?: ExerciseWhereInput
  }

  export type ExerciseOptionCountOrderByAggregateInput = {
    id?: SortOrder
    exerciseId?: SortOrder
    idx?: SortOrder
    text?: SortOrder
  }

  export type ExerciseOptionAvgOrderByAggregateInput = {
    id?: SortOrder
    exerciseId?: SortOrder
    idx?: SortOrder
  }

  export type ExerciseOptionMaxOrderByAggregateInput = {
    id?: SortOrder
    exerciseId?: SortOrder
    idx?: SortOrder
    text?: SortOrder
  }

  export type ExerciseOptionMinOrderByAggregateInput = {
    id?: SortOrder
    exerciseId?: SortOrder
    idx?: SortOrder
    text?: SortOrder
  }

  export type ExerciseOptionSumOrderByAggregateInput = {
    id?: SortOrder
    exerciseId?: SortOrder
    idx?: SortOrder
  }

  export type GrammarSectionListRelationFilter = {
    every?: GrammarSectionWhereInput
    some?: GrammarSectionWhereInput
    none?: GrammarSectionWhereInput
  }

  export type GrammarRuleListRelationFilter = {
    every?: GrammarRuleWhereInput
    some?: GrammarRuleWhereInput
    none?: GrammarRuleWhereInput
  }

  export type GrammarSectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GrammarRuleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GrammarCountOrderByAggregateInput = {
    id?: SortOrder
    language?: SortOrder
    file?: SortOrder
    data?: SortOrder
  }

  export type GrammarAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GrammarMaxOrderByAggregateInput = {
    id?: SortOrder
    language?: SortOrder
    file?: SortOrder
  }

  export type GrammarMinOrderByAggregateInput = {
    id?: SortOrder
    language?: SortOrder
    file?: SortOrder
  }

  export type GrammarSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GrammarScalarRelationFilter = {
    is?: GrammarWhereInput
    isNot?: GrammarWhereInput
  }

  export type ExampleListRelationFilter = {
    every?: ExampleWhereInput
    some?: ExampleWhereInput
    none?: ExampleWhereInput
  }

  export type ExampleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GrammarSectionCountOrderByAggregateInput = {
    id?: SortOrder
    grammarId?: SortOrder
    sectionKey?: SortOrder
    order?: SortOrder
    title?: SortOrder
    description?: SortOrder
  }

  export type GrammarSectionAvgOrderByAggregateInput = {
    id?: SortOrder
    grammarId?: SortOrder
    order?: SortOrder
  }

  export type GrammarSectionMaxOrderByAggregateInput = {
    id?: SortOrder
    grammarId?: SortOrder
    sectionKey?: SortOrder
    order?: SortOrder
    title?: SortOrder
    description?: SortOrder
  }

  export type GrammarSectionMinOrderByAggregateInput = {
    id?: SortOrder
    grammarId?: SortOrder
    sectionKey?: SortOrder
    order?: SortOrder
    title?: SortOrder
    description?: SortOrder
  }

  export type GrammarSectionSumOrderByAggregateInput = {
    id?: SortOrder
    grammarId?: SortOrder
    order?: SortOrder
  }

  export type GrammarSectionScalarRelationFilter = {
    is?: GrammarSectionWhereInput
    isNot?: GrammarSectionWhereInput
  }

  export type ExampleCountOrderByAggregateInput = {
    id?: SortOrder
    sectionId?: SortOrder
    rowIndex?: SortOrder
    german?: SortOrder
    english?: SortOrder
    myanmar?: SortOrder
    japanese?: SortOrder
    korean?: SortOrder
    thai?: SortOrder
    vietnamese?: SortOrder
  }

  export type ExampleAvgOrderByAggregateInput = {
    id?: SortOrder
    sectionId?: SortOrder
    rowIndex?: SortOrder
  }

  export type ExampleMaxOrderByAggregateInput = {
    id?: SortOrder
    sectionId?: SortOrder
    rowIndex?: SortOrder
    german?: SortOrder
    english?: SortOrder
    myanmar?: SortOrder
    japanese?: SortOrder
    korean?: SortOrder
    thai?: SortOrder
    vietnamese?: SortOrder
  }

  export type ExampleMinOrderByAggregateInput = {
    id?: SortOrder
    sectionId?: SortOrder
    rowIndex?: SortOrder
    german?: SortOrder
    english?: SortOrder
    myanmar?: SortOrder
    japanese?: SortOrder
    korean?: SortOrder
    thai?: SortOrder
    vietnamese?: SortOrder
  }

  export type ExampleSumOrderByAggregateInput = {
    id?: SortOrder
    sectionId?: SortOrder
    rowIndex?: SortOrder
  }

  export type DailyUsageVocabListRelationFilter = {
    every?: DailyUsageVocabWhereInput
    some?: DailyUsageVocabWhereInput
    none?: DailyUsageVocabWhereInput
  }

  export type DailyUsageVocabOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DailyUsageCountOrderByAggregateInput = {
    id?: SortOrder
    file?: SortOrder
    data?: SortOrder
  }

  export type DailyUsageAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DailyUsageMaxOrderByAggregateInput = {
    id?: SortOrder
    file?: SortOrder
  }

  export type DailyUsageMinOrderByAggregateInput = {
    id?: SortOrder
    file?: SortOrder
  }

  export type DailyUsageSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DailyUsageScalarRelationFilter = {
    is?: DailyUsageWhereInput
    isNot?: DailyUsageWhereInput
  }

  export type DailyUsageVocabCountOrderByAggregateInput = {
    id?: SortOrder
    dailyUsageId?: SortOrder
    german?: SortOrder
    english?: SortOrder
    myanmar?: SortOrder
    japanese?: SortOrder
    korean?: SortOrder
    thai?: SortOrder
    vietnamese?: SortOrder
  }

  export type DailyUsageVocabAvgOrderByAggregateInput = {
    id?: SortOrder
    dailyUsageId?: SortOrder
  }

  export type DailyUsageVocabMaxOrderByAggregateInput = {
    id?: SortOrder
    dailyUsageId?: SortOrder
    german?: SortOrder
    english?: SortOrder
    myanmar?: SortOrder
    japanese?: SortOrder
    korean?: SortOrder
    thai?: SortOrder
    vietnamese?: SortOrder
  }

  export type DailyUsageVocabMinOrderByAggregateInput = {
    id?: SortOrder
    dailyUsageId?: SortOrder
    german?: SortOrder
    english?: SortOrder
    myanmar?: SortOrder
    japanese?: SortOrder
    korean?: SortOrder
    thai?: SortOrder
    vietnamese?: SortOrder
  }

  export type DailyUsageVocabSumOrderByAggregateInput = {
    id?: SortOrder
    dailyUsageId?: SortOrder
  }

  export type GrammarRuleCountOrderByAggregateInput = {
    id?: SortOrder
    grammarId?: SortOrder
    ruleKey?: SortOrder
    description?: SortOrder
  }

  export type GrammarRuleAvgOrderByAggregateInput = {
    id?: SortOrder
    grammarId?: SortOrder
  }

  export type GrammarRuleMaxOrderByAggregateInput = {
    id?: SortOrder
    grammarId?: SortOrder
    ruleKey?: SortOrder
    description?: SortOrder
  }

  export type GrammarRuleMinOrderByAggregateInput = {
    id?: SortOrder
    grammarId?: SortOrder
    ruleKey?: SortOrder
    description?: SortOrder
  }

  export type GrammarRuleSumOrderByAggregateInput = {
    id?: SortOrder
    grammarId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StorySectionCreateNestedManyWithoutStoryInput = {
    create?: XOR<StorySectionCreateWithoutStoryInput, StorySectionUncheckedCreateWithoutStoryInput> | StorySectionCreateWithoutStoryInput[] | StorySectionUncheckedCreateWithoutStoryInput[]
    connectOrCreate?: StorySectionCreateOrConnectWithoutStoryInput | StorySectionCreateOrConnectWithoutStoryInput[]
    createMany?: StorySectionCreateManyStoryInputEnvelope
    connect?: StorySectionWhereUniqueInput | StorySectionWhereUniqueInput[]
  }

  export type StorySectionUncheckedCreateNestedManyWithoutStoryInput = {
    create?: XOR<StorySectionCreateWithoutStoryInput, StorySectionUncheckedCreateWithoutStoryInput> | StorySectionCreateWithoutStoryInput[] | StorySectionUncheckedCreateWithoutStoryInput[]
    connectOrCreate?: StorySectionCreateOrConnectWithoutStoryInput | StorySectionCreateOrConnectWithoutStoryInput[]
    createMany?: StorySectionCreateManyStoryInputEnvelope
    connect?: StorySectionWhereUniqueInput | StorySectionWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StorySectionUpdateManyWithoutStoryNestedInput = {
    create?: XOR<StorySectionCreateWithoutStoryInput, StorySectionUncheckedCreateWithoutStoryInput> | StorySectionCreateWithoutStoryInput[] | StorySectionUncheckedCreateWithoutStoryInput[]
    connectOrCreate?: StorySectionCreateOrConnectWithoutStoryInput | StorySectionCreateOrConnectWithoutStoryInput[]
    upsert?: StorySectionUpsertWithWhereUniqueWithoutStoryInput | StorySectionUpsertWithWhereUniqueWithoutStoryInput[]
    createMany?: StorySectionCreateManyStoryInputEnvelope
    set?: StorySectionWhereUniqueInput | StorySectionWhereUniqueInput[]
    disconnect?: StorySectionWhereUniqueInput | StorySectionWhereUniqueInput[]
    delete?: StorySectionWhereUniqueInput | StorySectionWhereUniqueInput[]
    connect?: StorySectionWhereUniqueInput | StorySectionWhereUniqueInput[]
    update?: StorySectionUpdateWithWhereUniqueWithoutStoryInput | StorySectionUpdateWithWhereUniqueWithoutStoryInput[]
    updateMany?: StorySectionUpdateManyWithWhereWithoutStoryInput | StorySectionUpdateManyWithWhereWithoutStoryInput[]
    deleteMany?: StorySectionScalarWhereInput | StorySectionScalarWhereInput[]
  }

  export type StorySectionUncheckedUpdateManyWithoutStoryNestedInput = {
    create?: XOR<StorySectionCreateWithoutStoryInput, StorySectionUncheckedCreateWithoutStoryInput> | StorySectionCreateWithoutStoryInput[] | StorySectionUncheckedCreateWithoutStoryInput[]
    connectOrCreate?: StorySectionCreateOrConnectWithoutStoryInput | StorySectionCreateOrConnectWithoutStoryInput[]
    upsert?: StorySectionUpsertWithWhereUniqueWithoutStoryInput | StorySectionUpsertWithWhereUniqueWithoutStoryInput[]
    createMany?: StorySectionCreateManyStoryInputEnvelope
    set?: StorySectionWhereUniqueInput | StorySectionWhereUniqueInput[]
    disconnect?: StorySectionWhereUniqueInput | StorySectionWhereUniqueInput[]
    delete?: StorySectionWhereUniqueInput | StorySectionWhereUniqueInput[]
    connect?: StorySectionWhereUniqueInput | StorySectionWhereUniqueInput[]
    update?: StorySectionUpdateWithWhereUniqueWithoutStoryInput | StorySectionUpdateWithWhereUniqueWithoutStoryInput[]
    updateMany?: StorySectionUpdateManyWithWhereWithoutStoryInput | StorySectionUpdateManyWithWhereWithoutStoryInput[]
    deleteMany?: StorySectionScalarWhereInput | StorySectionScalarWhereInput[]
  }

  export type StoryCreateNestedOneWithoutSectionsInput = {
    create?: XOR<StoryCreateWithoutSectionsInput, StoryUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: StoryCreateOrConnectWithoutSectionsInput
    connect?: StoryWhereUniqueInput
  }

  export type ExerciseCreateNestedManyWithoutSectionInput = {
    create?: XOR<ExerciseCreateWithoutSectionInput, ExerciseUncheckedCreateWithoutSectionInput> | ExerciseCreateWithoutSectionInput[] | ExerciseUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutSectionInput | ExerciseCreateOrConnectWithoutSectionInput[]
    createMany?: ExerciseCreateManySectionInputEnvelope
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
  }

  export type ExerciseUncheckedCreateNestedManyWithoutSectionInput = {
    create?: XOR<ExerciseCreateWithoutSectionInput, ExerciseUncheckedCreateWithoutSectionInput> | ExerciseCreateWithoutSectionInput[] | ExerciseUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutSectionInput | ExerciseCreateOrConnectWithoutSectionInput[]
    createMany?: ExerciseCreateManySectionInputEnvelope
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StoryUpdateOneRequiredWithoutSectionsNestedInput = {
    create?: XOR<StoryCreateWithoutSectionsInput, StoryUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: StoryCreateOrConnectWithoutSectionsInput
    upsert?: StoryUpsertWithoutSectionsInput
    connect?: StoryWhereUniqueInput
    update?: XOR<XOR<StoryUpdateToOneWithWhereWithoutSectionsInput, StoryUpdateWithoutSectionsInput>, StoryUncheckedUpdateWithoutSectionsInput>
  }

  export type ExerciseUpdateManyWithoutSectionNestedInput = {
    create?: XOR<ExerciseCreateWithoutSectionInput, ExerciseUncheckedCreateWithoutSectionInput> | ExerciseCreateWithoutSectionInput[] | ExerciseUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutSectionInput | ExerciseCreateOrConnectWithoutSectionInput[]
    upsert?: ExerciseUpsertWithWhereUniqueWithoutSectionInput | ExerciseUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: ExerciseCreateManySectionInputEnvelope
    set?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    disconnect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    delete?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    update?: ExerciseUpdateWithWhereUniqueWithoutSectionInput | ExerciseUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: ExerciseUpdateManyWithWhereWithoutSectionInput | ExerciseUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: ExerciseScalarWhereInput | ExerciseScalarWhereInput[]
  }

  export type ExerciseUncheckedUpdateManyWithoutSectionNestedInput = {
    create?: XOR<ExerciseCreateWithoutSectionInput, ExerciseUncheckedCreateWithoutSectionInput> | ExerciseCreateWithoutSectionInput[] | ExerciseUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutSectionInput | ExerciseCreateOrConnectWithoutSectionInput[]
    upsert?: ExerciseUpsertWithWhereUniqueWithoutSectionInput | ExerciseUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: ExerciseCreateManySectionInputEnvelope
    set?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    disconnect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    delete?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    update?: ExerciseUpdateWithWhereUniqueWithoutSectionInput | ExerciseUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: ExerciseUpdateManyWithWhereWithoutSectionInput | ExerciseUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: ExerciseScalarWhereInput | ExerciseScalarWhereInput[]
  }

  export type StorySectionCreateNestedOneWithoutExercisesInput = {
    create?: XOR<StorySectionCreateWithoutExercisesInput, StorySectionUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: StorySectionCreateOrConnectWithoutExercisesInput
    connect?: StorySectionWhereUniqueInput
  }

  export type ExerciseOptionCreateNestedManyWithoutExerciseInput = {
    create?: XOR<ExerciseOptionCreateWithoutExerciseInput, ExerciseOptionUncheckedCreateWithoutExerciseInput> | ExerciseOptionCreateWithoutExerciseInput[] | ExerciseOptionUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: ExerciseOptionCreateOrConnectWithoutExerciseInput | ExerciseOptionCreateOrConnectWithoutExerciseInput[]
    createMany?: ExerciseOptionCreateManyExerciseInputEnvelope
    connect?: ExerciseOptionWhereUniqueInput | ExerciseOptionWhereUniqueInput[]
  }

  export type ExerciseOptionUncheckedCreateNestedManyWithoutExerciseInput = {
    create?: XOR<ExerciseOptionCreateWithoutExerciseInput, ExerciseOptionUncheckedCreateWithoutExerciseInput> | ExerciseOptionCreateWithoutExerciseInput[] | ExerciseOptionUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: ExerciseOptionCreateOrConnectWithoutExerciseInput | ExerciseOptionCreateOrConnectWithoutExerciseInput[]
    createMany?: ExerciseOptionCreateManyExerciseInputEnvelope
    connect?: ExerciseOptionWhereUniqueInput | ExerciseOptionWhereUniqueInput[]
  }

  export type StorySectionUpdateOneRequiredWithoutExercisesNestedInput = {
    create?: XOR<StorySectionCreateWithoutExercisesInput, StorySectionUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: StorySectionCreateOrConnectWithoutExercisesInput
    upsert?: StorySectionUpsertWithoutExercisesInput
    connect?: StorySectionWhereUniqueInput
    update?: XOR<XOR<StorySectionUpdateToOneWithWhereWithoutExercisesInput, StorySectionUpdateWithoutExercisesInput>, StorySectionUncheckedUpdateWithoutExercisesInput>
  }

  export type ExerciseOptionUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<ExerciseOptionCreateWithoutExerciseInput, ExerciseOptionUncheckedCreateWithoutExerciseInput> | ExerciseOptionCreateWithoutExerciseInput[] | ExerciseOptionUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: ExerciseOptionCreateOrConnectWithoutExerciseInput | ExerciseOptionCreateOrConnectWithoutExerciseInput[]
    upsert?: ExerciseOptionUpsertWithWhereUniqueWithoutExerciseInput | ExerciseOptionUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: ExerciseOptionCreateManyExerciseInputEnvelope
    set?: ExerciseOptionWhereUniqueInput | ExerciseOptionWhereUniqueInput[]
    disconnect?: ExerciseOptionWhereUniqueInput | ExerciseOptionWhereUniqueInput[]
    delete?: ExerciseOptionWhereUniqueInput | ExerciseOptionWhereUniqueInput[]
    connect?: ExerciseOptionWhereUniqueInput | ExerciseOptionWhereUniqueInput[]
    update?: ExerciseOptionUpdateWithWhereUniqueWithoutExerciseInput | ExerciseOptionUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: ExerciseOptionUpdateManyWithWhereWithoutExerciseInput | ExerciseOptionUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: ExerciseOptionScalarWhereInput | ExerciseOptionScalarWhereInput[]
  }

  export type ExerciseOptionUncheckedUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<ExerciseOptionCreateWithoutExerciseInput, ExerciseOptionUncheckedCreateWithoutExerciseInput> | ExerciseOptionCreateWithoutExerciseInput[] | ExerciseOptionUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: ExerciseOptionCreateOrConnectWithoutExerciseInput | ExerciseOptionCreateOrConnectWithoutExerciseInput[]
    upsert?: ExerciseOptionUpsertWithWhereUniqueWithoutExerciseInput | ExerciseOptionUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: ExerciseOptionCreateManyExerciseInputEnvelope
    set?: ExerciseOptionWhereUniqueInput | ExerciseOptionWhereUniqueInput[]
    disconnect?: ExerciseOptionWhereUniqueInput | ExerciseOptionWhereUniqueInput[]
    delete?: ExerciseOptionWhereUniqueInput | ExerciseOptionWhereUniqueInput[]
    connect?: ExerciseOptionWhereUniqueInput | ExerciseOptionWhereUniqueInput[]
    update?: ExerciseOptionUpdateWithWhereUniqueWithoutExerciseInput | ExerciseOptionUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: ExerciseOptionUpdateManyWithWhereWithoutExerciseInput | ExerciseOptionUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: ExerciseOptionScalarWhereInput | ExerciseOptionScalarWhereInput[]
  }

  export type ExerciseCreateNestedOneWithoutOptionsInput = {
    create?: XOR<ExerciseCreateWithoutOptionsInput, ExerciseUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutOptionsInput
    connect?: ExerciseWhereUniqueInput
  }

  export type ExerciseUpdateOneRequiredWithoutOptionsNestedInput = {
    create?: XOR<ExerciseCreateWithoutOptionsInput, ExerciseUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutOptionsInput
    upsert?: ExerciseUpsertWithoutOptionsInput
    connect?: ExerciseWhereUniqueInput
    update?: XOR<XOR<ExerciseUpdateToOneWithWhereWithoutOptionsInput, ExerciseUpdateWithoutOptionsInput>, ExerciseUncheckedUpdateWithoutOptionsInput>
  }

  export type GrammarSectionCreateNestedManyWithoutGrammarInput = {
    create?: XOR<GrammarSectionCreateWithoutGrammarInput, GrammarSectionUncheckedCreateWithoutGrammarInput> | GrammarSectionCreateWithoutGrammarInput[] | GrammarSectionUncheckedCreateWithoutGrammarInput[]
    connectOrCreate?: GrammarSectionCreateOrConnectWithoutGrammarInput | GrammarSectionCreateOrConnectWithoutGrammarInput[]
    createMany?: GrammarSectionCreateManyGrammarInputEnvelope
    connect?: GrammarSectionWhereUniqueInput | GrammarSectionWhereUniqueInput[]
  }

  export type GrammarRuleCreateNestedManyWithoutGrammarInput = {
    create?: XOR<GrammarRuleCreateWithoutGrammarInput, GrammarRuleUncheckedCreateWithoutGrammarInput> | GrammarRuleCreateWithoutGrammarInput[] | GrammarRuleUncheckedCreateWithoutGrammarInput[]
    connectOrCreate?: GrammarRuleCreateOrConnectWithoutGrammarInput | GrammarRuleCreateOrConnectWithoutGrammarInput[]
    createMany?: GrammarRuleCreateManyGrammarInputEnvelope
    connect?: GrammarRuleWhereUniqueInput | GrammarRuleWhereUniqueInput[]
  }

  export type GrammarSectionUncheckedCreateNestedManyWithoutGrammarInput = {
    create?: XOR<GrammarSectionCreateWithoutGrammarInput, GrammarSectionUncheckedCreateWithoutGrammarInput> | GrammarSectionCreateWithoutGrammarInput[] | GrammarSectionUncheckedCreateWithoutGrammarInput[]
    connectOrCreate?: GrammarSectionCreateOrConnectWithoutGrammarInput | GrammarSectionCreateOrConnectWithoutGrammarInput[]
    createMany?: GrammarSectionCreateManyGrammarInputEnvelope
    connect?: GrammarSectionWhereUniqueInput | GrammarSectionWhereUniqueInput[]
  }

  export type GrammarRuleUncheckedCreateNestedManyWithoutGrammarInput = {
    create?: XOR<GrammarRuleCreateWithoutGrammarInput, GrammarRuleUncheckedCreateWithoutGrammarInput> | GrammarRuleCreateWithoutGrammarInput[] | GrammarRuleUncheckedCreateWithoutGrammarInput[]
    connectOrCreate?: GrammarRuleCreateOrConnectWithoutGrammarInput | GrammarRuleCreateOrConnectWithoutGrammarInput[]
    createMany?: GrammarRuleCreateManyGrammarInputEnvelope
    connect?: GrammarRuleWhereUniqueInput | GrammarRuleWhereUniqueInput[]
  }

  export type GrammarSectionUpdateManyWithoutGrammarNestedInput = {
    create?: XOR<GrammarSectionCreateWithoutGrammarInput, GrammarSectionUncheckedCreateWithoutGrammarInput> | GrammarSectionCreateWithoutGrammarInput[] | GrammarSectionUncheckedCreateWithoutGrammarInput[]
    connectOrCreate?: GrammarSectionCreateOrConnectWithoutGrammarInput | GrammarSectionCreateOrConnectWithoutGrammarInput[]
    upsert?: GrammarSectionUpsertWithWhereUniqueWithoutGrammarInput | GrammarSectionUpsertWithWhereUniqueWithoutGrammarInput[]
    createMany?: GrammarSectionCreateManyGrammarInputEnvelope
    set?: GrammarSectionWhereUniqueInput | GrammarSectionWhereUniqueInput[]
    disconnect?: GrammarSectionWhereUniqueInput | GrammarSectionWhereUniqueInput[]
    delete?: GrammarSectionWhereUniqueInput | GrammarSectionWhereUniqueInput[]
    connect?: GrammarSectionWhereUniqueInput | GrammarSectionWhereUniqueInput[]
    update?: GrammarSectionUpdateWithWhereUniqueWithoutGrammarInput | GrammarSectionUpdateWithWhereUniqueWithoutGrammarInput[]
    updateMany?: GrammarSectionUpdateManyWithWhereWithoutGrammarInput | GrammarSectionUpdateManyWithWhereWithoutGrammarInput[]
    deleteMany?: GrammarSectionScalarWhereInput | GrammarSectionScalarWhereInput[]
  }

  export type GrammarRuleUpdateManyWithoutGrammarNestedInput = {
    create?: XOR<GrammarRuleCreateWithoutGrammarInput, GrammarRuleUncheckedCreateWithoutGrammarInput> | GrammarRuleCreateWithoutGrammarInput[] | GrammarRuleUncheckedCreateWithoutGrammarInput[]
    connectOrCreate?: GrammarRuleCreateOrConnectWithoutGrammarInput | GrammarRuleCreateOrConnectWithoutGrammarInput[]
    upsert?: GrammarRuleUpsertWithWhereUniqueWithoutGrammarInput | GrammarRuleUpsertWithWhereUniqueWithoutGrammarInput[]
    createMany?: GrammarRuleCreateManyGrammarInputEnvelope
    set?: GrammarRuleWhereUniqueInput | GrammarRuleWhereUniqueInput[]
    disconnect?: GrammarRuleWhereUniqueInput | GrammarRuleWhereUniqueInput[]
    delete?: GrammarRuleWhereUniqueInput | GrammarRuleWhereUniqueInput[]
    connect?: GrammarRuleWhereUniqueInput | GrammarRuleWhereUniqueInput[]
    update?: GrammarRuleUpdateWithWhereUniqueWithoutGrammarInput | GrammarRuleUpdateWithWhereUniqueWithoutGrammarInput[]
    updateMany?: GrammarRuleUpdateManyWithWhereWithoutGrammarInput | GrammarRuleUpdateManyWithWhereWithoutGrammarInput[]
    deleteMany?: GrammarRuleScalarWhereInput | GrammarRuleScalarWhereInput[]
  }

  export type GrammarSectionUncheckedUpdateManyWithoutGrammarNestedInput = {
    create?: XOR<GrammarSectionCreateWithoutGrammarInput, GrammarSectionUncheckedCreateWithoutGrammarInput> | GrammarSectionCreateWithoutGrammarInput[] | GrammarSectionUncheckedCreateWithoutGrammarInput[]
    connectOrCreate?: GrammarSectionCreateOrConnectWithoutGrammarInput | GrammarSectionCreateOrConnectWithoutGrammarInput[]
    upsert?: GrammarSectionUpsertWithWhereUniqueWithoutGrammarInput | GrammarSectionUpsertWithWhereUniqueWithoutGrammarInput[]
    createMany?: GrammarSectionCreateManyGrammarInputEnvelope
    set?: GrammarSectionWhereUniqueInput | GrammarSectionWhereUniqueInput[]
    disconnect?: GrammarSectionWhereUniqueInput | GrammarSectionWhereUniqueInput[]
    delete?: GrammarSectionWhereUniqueInput | GrammarSectionWhereUniqueInput[]
    connect?: GrammarSectionWhereUniqueInput | GrammarSectionWhereUniqueInput[]
    update?: GrammarSectionUpdateWithWhereUniqueWithoutGrammarInput | GrammarSectionUpdateWithWhereUniqueWithoutGrammarInput[]
    updateMany?: GrammarSectionUpdateManyWithWhereWithoutGrammarInput | GrammarSectionUpdateManyWithWhereWithoutGrammarInput[]
    deleteMany?: GrammarSectionScalarWhereInput | GrammarSectionScalarWhereInput[]
  }

  export type GrammarRuleUncheckedUpdateManyWithoutGrammarNestedInput = {
    create?: XOR<GrammarRuleCreateWithoutGrammarInput, GrammarRuleUncheckedCreateWithoutGrammarInput> | GrammarRuleCreateWithoutGrammarInput[] | GrammarRuleUncheckedCreateWithoutGrammarInput[]
    connectOrCreate?: GrammarRuleCreateOrConnectWithoutGrammarInput | GrammarRuleCreateOrConnectWithoutGrammarInput[]
    upsert?: GrammarRuleUpsertWithWhereUniqueWithoutGrammarInput | GrammarRuleUpsertWithWhereUniqueWithoutGrammarInput[]
    createMany?: GrammarRuleCreateManyGrammarInputEnvelope
    set?: GrammarRuleWhereUniqueInput | GrammarRuleWhereUniqueInput[]
    disconnect?: GrammarRuleWhereUniqueInput | GrammarRuleWhereUniqueInput[]
    delete?: GrammarRuleWhereUniqueInput | GrammarRuleWhereUniqueInput[]
    connect?: GrammarRuleWhereUniqueInput | GrammarRuleWhereUniqueInput[]
    update?: GrammarRuleUpdateWithWhereUniqueWithoutGrammarInput | GrammarRuleUpdateWithWhereUniqueWithoutGrammarInput[]
    updateMany?: GrammarRuleUpdateManyWithWhereWithoutGrammarInput | GrammarRuleUpdateManyWithWhereWithoutGrammarInput[]
    deleteMany?: GrammarRuleScalarWhereInput | GrammarRuleScalarWhereInput[]
  }

  export type GrammarCreateNestedOneWithoutSectionsInput = {
    create?: XOR<GrammarCreateWithoutSectionsInput, GrammarUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: GrammarCreateOrConnectWithoutSectionsInput
    connect?: GrammarWhereUniqueInput
  }

  export type ExampleCreateNestedManyWithoutSectionInput = {
    create?: XOR<ExampleCreateWithoutSectionInput, ExampleUncheckedCreateWithoutSectionInput> | ExampleCreateWithoutSectionInput[] | ExampleUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: ExampleCreateOrConnectWithoutSectionInput | ExampleCreateOrConnectWithoutSectionInput[]
    createMany?: ExampleCreateManySectionInputEnvelope
    connect?: ExampleWhereUniqueInput | ExampleWhereUniqueInput[]
  }

  export type ExampleUncheckedCreateNestedManyWithoutSectionInput = {
    create?: XOR<ExampleCreateWithoutSectionInput, ExampleUncheckedCreateWithoutSectionInput> | ExampleCreateWithoutSectionInput[] | ExampleUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: ExampleCreateOrConnectWithoutSectionInput | ExampleCreateOrConnectWithoutSectionInput[]
    createMany?: ExampleCreateManySectionInputEnvelope
    connect?: ExampleWhereUniqueInput | ExampleWhereUniqueInput[]
  }

  export type GrammarUpdateOneRequiredWithoutSectionsNestedInput = {
    create?: XOR<GrammarCreateWithoutSectionsInput, GrammarUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: GrammarCreateOrConnectWithoutSectionsInput
    upsert?: GrammarUpsertWithoutSectionsInput
    connect?: GrammarWhereUniqueInput
    update?: XOR<XOR<GrammarUpdateToOneWithWhereWithoutSectionsInput, GrammarUpdateWithoutSectionsInput>, GrammarUncheckedUpdateWithoutSectionsInput>
  }

  export type ExampleUpdateManyWithoutSectionNestedInput = {
    create?: XOR<ExampleCreateWithoutSectionInput, ExampleUncheckedCreateWithoutSectionInput> | ExampleCreateWithoutSectionInput[] | ExampleUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: ExampleCreateOrConnectWithoutSectionInput | ExampleCreateOrConnectWithoutSectionInput[]
    upsert?: ExampleUpsertWithWhereUniqueWithoutSectionInput | ExampleUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: ExampleCreateManySectionInputEnvelope
    set?: ExampleWhereUniqueInput | ExampleWhereUniqueInput[]
    disconnect?: ExampleWhereUniqueInput | ExampleWhereUniqueInput[]
    delete?: ExampleWhereUniqueInput | ExampleWhereUniqueInput[]
    connect?: ExampleWhereUniqueInput | ExampleWhereUniqueInput[]
    update?: ExampleUpdateWithWhereUniqueWithoutSectionInput | ExampleUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: ExampleUpdateManyWithWhereWithoutSectionInput | ExampleUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: ExampleScalarWhereInput | ExampleScalarWhereInput[]
  }

  export type ExampleUncheckedUpdateManyWithoutSectionNestedInput = {
    create?: XOR<ExampleCreateWithoutSectionInput, ExampleUncheckedCreateWithoutSectionInput> | ExampleCreateWithoutSectionInput[] | ExampleUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: ExampleCreateOrConnectWithoutSectionInput | ExampleCreateOrConnectWithoutSectionInput[]
    upsert?: ExampleUpsertWithWhereUniqueWithoutSectionInput | ExampleUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: ExampleCreateManySectionInputEnvelope
    set?: ExampleWhereUniqueInput | ExampleWhereUniqueInput[]
    disconnect?: ExampleWhereUniqueInput | ExampleWhereUniqueInput[]
    delete?: ExampleWhereUniqueInput | ExampleWhereUniqueInput[]
    connect?: ExampleWhereUniqueInput | ExampleWhereUniqueInput[]
    update?: ExampleUpdateWithWhereUniqueWithoutSectionInput | ExampleUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: ExampleUpdateManyWithWhereWithoutSectionInput | ExampleUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: ExampleScalarWhereInput | ExampleScalarWhereInput[]
  }

  export type GrammarSectionCreateNestedOneWithoutExamplesInput = {
    create?: XOR<GrammarSectionCreateWithoutExamplesInput, GrammarSectionUncheckedCreateWithoutExamplesInput>
    connectOrCreate?: GrammarSectionCreateOrConnectWithoutExamplesInput
    connect?: GrammarSectionWhereUniqueInput
  }

  export type GrammarSectionUpdateOneRequiredWithoutExamplesNestedInput = {
    create?: XOR<GrammarSectionCreateWithoutExamplesInput, GrammarSectionUncheckedCreateWithoutExamplesInput>
    connectOrCreate?: GrammarSectionCreateOrConnectWithoutExamplesInput
    upsert?: GrammarSectionUpsertWithoutExamplesInput
    connect?: GrammarSectionWhereUniqueInput
    update?: XOR<XOR<GrammarSectionUpdateToOneWithWhereWithoutExamplesInput, GrammarSectionUpdateWithoutExamplesInput>, GrammarSectionUncheckedUpdateWithoutExamplesInput>
  }

  export type DailyUsageVocabCreateNestedManyWithoutDailyUsageInput = {
    create?: XOR<DailyUsageVocabCreateWithoutDailyUsageInput, DailyUsageVocabUncheckedCreateWithoutDailyUsageInput> | DailyUsageVocabCreateWithoutDailyUsageInput[] | DailyUsageVocabUncheckedCreateWithoutDailyUsageInput[]
    connectOrCreate?: DailyUsageVocabCreateOrConnectWithoutDailyUsageInput | DailyUsageVocabCreateOrConnectWithoutDailyUsageInput[]
    createMany?: DailyUsageVocabCreateManyDailyUsageInputEnvelope
    connect?: DailyUsageVocabWhereUniqueInput | DailyUsageVocabWhereUniqueInput[]
  }

  export type DailyUsageVocabUncheckedCreateNestedManyWithoutDailyUsageInput = {
    create?: XOR<DailyUsageVocabCreateWithoutDailyUsageInput, DailyUsageVocabUncheckedCreateWithoutDailyUsageInput> | DailyUsageVocabCreateWithoutDailyUsageInput[] | DailyUsageVocabUncheckedCreateWithoutDailyUsageInput[]
    connectOrCreate?: DailyUsageVocabCreateOrConnectWithoutDailyUsageInput | DailyUsageVocabCreateOrConnectWithoutDailyUsageInput[]
    createMany?: DailyUsageVocabCreateManyDailyUsageInputEnvelope
    connect?: DailyUsageVocabWhereUniqueInput | DailyUsageVocabWhereUniqueInput[]
  }

  export type DailyUsageVocabUpdateManyWithoutDailyUsageNestedInput = {
    create?: XOR<DailyUsageVocabCreateWithoutDailyUsageInput, DailyUsageVocabUncheckedCreateWithoutDailyUsageInput> | DailyUsageVocabCreateWithoutDailyUsageInput[] | DailyUsageVocabUncheckedCreateWithoutDailyUsageInput[]
    connectOrCreate?: DailyUsageVocabCreateOrConnectWithoutDailyUsageInput | DailyUsageVocabCreateOrConnectWithoutDailyUsageInput[]
    upsert?: DailyUsageVocabUpsertWithWhereUniqueWithoutDailyUsageInput | DailyUsageVocabUpsertWithWhereUniqueWithoutDailyUsageInput[]
    createMany?: DailyUsageVocabCreateManyDailyUsageInputEnvelope
    set?: DailyUsageVocabWhereUniqueInput | DailyUsageVocabWhereUniqueInput[]
    disconnect?: DailyUsageVocabWhereUniqueInput | DailyUsageVocabWhereUniqueInput[]
    delete?: DailyUsageVocabWhereUniqueInput | DailyUsageVocabWhereUniqueInput[]
    connect?: DailyUsageVocabWhereUniqueInput | DailyUsageVocabWhereUniqueInput[]
    update?: DailyUsageVocabUpdateWithWhereUniqueWithoutDailyUsageInput | DailyUsageVocabUpdateWithWhereUniqueWithoutDailyUsageInput[]
    updateMany?: DailyUsageVocabUpdateManyWithWhereWithoutDailyUsageInput | DailyUsageVocabUpdateManyWithWhereWithoutDailyUsageInput[]
    deleteMany?: DailyUsageVocabScalarWhereInput | DailyUsageVocabScalarWhereInput[]
  }

  export type DailyUsageVocabUncheckedUpdateManyWithoutDailyUsageNestedInput = {
    create?: XOR<DailyUsageVocabCreateWithoutDailyUsageInput, DailyUsageVocabUncheckedCreateWithoutDailyUsageInput> | DailyUsageVocabCreateWithoutDailyUsageInput[] | DailyUsageVocabUncheckedCreateWithoutDailyUsageInput[]
    connectOrCreate?: DailyUsageVocabCreateOrConnectWithoutDailyUsageInput | DailyUsageVocabCreateOrConnectWithoutDailyUsageInput[]
    upsert?: DailyUsageVocabUpsertWithWhereUniqueWithoutDailyUsageInput | DailyUsageVocabUpsertWithWhereUniqueWithoutDailyUsageInput[]
    createMany?: DailyUsageVocabCreateManyDailyUsageInputEnvelope
    set?: DailyUsageVocabWhereUniqueInput | DailyUsageVocabWhereUniqueInput[]
    disconnect?: DailyUsageVocabWhereUniqueInput | DailyUsageVocabWhereUniqueInput[]
    delete?: DailyUsageVocabWhereUniqueInput | DailyUsageVocabWhereUniqueInput[]
    connect?: DailyUsageVocabWhereUniqueInput | DailyUsageVocabWhereUniqueInput[]
    update?: DailyUsageVocabUpdateWithWhereUniqueWithoutDailyUsageInput | DailyUsageVocabUpdateWithWhereUniqueWithoutDailyUsageInput[]
    updateMany?: DailyUsageVocabUpdateManyWithWhereWithoutDailyUsageInput | DailyUsageVocabUpdateManyWithWhereWithoutDailyUsageInput[]
    deleteMany?: DailyUsageVocabScalarWhereInput | DailyUsageVocabScalarWhereInput[]
  }

  export type DailyUsageCreateNestedOneWithoutVocabsInput = {
    create?: XOR<DailyUsageCreateWithoutVocabsInput, DailyUsageUncheckedCreateWithoutVocabsInput>
    connectOrCreate?: DailyUsageCreateOrConnectWithoutVocabsInput
    connect?: DailyUsageWhereUniqueInput
  }

  export type DailyUsageUpdateOneRequiredWithoutVocabsNestedInput = {
    create?: XOR<DailyUsageCreateWithoutVocabsInput, DailyUsageUncheckedCreateWithoutVocabsInput>
    connectOrCreate?: DailyUsageCreateOrConnectWithoutVocabsInput
    upsert?: DailyUsageUpsertWithoutVocabsInput
    connect?: DailyUsageWhereUniqueInput
    update?: XOR<XOR<DailyUsageUpdateToOneWithWhereWithoutVocabsInput, DailyUsageUpdateWithoutVocabsInput>, DailyUsageUncheckedUpdateWithoutVocabsInput>
  }

  export type GrammarCreateNestedOneWithoutRulesInput = {
    create?: XOR<GrammarCreateWithoutRulesInput, GrammarUncheckedCreateWithoutRulesInput>
    connectOrCreate?: GrammarCreateOrConnectWithoutRulesInput
    connect?: GrammarWhereUniqueInput
  }

  export type GrammarUpdateOneRequiredWithoutRulesNestedInput = {
    create?: XOR<GrammarCreateWithoutRulesInput, GrammarUncheckedCreateWithoutRulesInput>
    connectOrCreate?: GrammarCreateOrConnectWithoutRulesInput
    upsert?: GrammarUpsertWithoutRulesInput
    connect?: GrammarWhereUniqueInput
    update?: XOR<XOR<GrammarUpdateToOneWithWhereWithoutRulesInput, GrammarUpdateWithoutRulesInput>, GrammarUncheckedUpdateWithoutRulesInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type StorySectionCreateWithoutStoryInput = {
    sectionKey?: string | null
    order?: number | null
    title?: string | null
    content?: string | null
    exercises?: ExerciseCreateNestedManyWithoutSectionInput
  }

  export type StorySectionUncheckedCreateWithoutStoryInput = {
    id?: number
    sectionKey?: string | null
    order?: number | null
    title?: string | null
    content?: string | null
    exercises?: ExerciseUncheckedCreateNestedManyWithoutSectionInput
  }

  export type StorySectionCreateOrConnectWithoutStoryInput = {
    where: StorySectionWhereUniqueInput
    create: XOR<StorySectionCreateWithoutStoryInput, StorySectionUncheckedCreateWithoutStoryInput>
  }

  export type StorySectionCreateManyStoryInputEnvelope = {
    data: StorySectionCreateManyStoryInput | StorySectionCreateManyStoryInput[]
    skipDuplicates?: boolean
  }

  export type StorySectionUpsertWithWhereUniqueWithoutStoryInput = {
    where: StorySectionWhereUniqueInput
    update: XOR<StorySectionUpdateWithoutStoryInput, StorySectionUncheckedUpdateWithoutStoryInput>
    create: XOR<StorySectionCreateWithoutStoryInput, StorySectionUncheckedCreateWithoutStoryInput>
  }

  export type StorySectionUpdateWithWhereUniqueWithoutStoryInput = {
    where: StorySectionWhereUniqueInput
    data: XOR<StorySectionUpdateWithoutStoryInput, StorySectionUncheckedUpdateWithoutStoryInput>
  }

  export type StorySectionUpdateManyWithWhereWithoutStoryInput = {
    where: StorySectionScalarWhereInput
    data: XOR<StorySectionUpdateManyMutationInput, StorySectionUncheckedUpdateManyWithoutStoryInput>
  }

  export type StorySectionScalarWhereInput = {
    AND?: StorySectionScalarWhereInput | StorySectionScalarWhereInput[]
    OR?: StorySectionScalarWhereInput[]
    NOT?: StorySectionScalarWhereInput | StorySectionScalarWhereInput[]
    id?: IntFilter<"StorySection"> | number
    storyId?: IntFilter<"StorySection"> | number
    sectionKey?: StringNullableFilter<"StorySection"> | string | null
    order?: IntNullableFilter<"StorySection"> | number | null
    title?: StringNullableFilter<"StorySection"> | string | null
    content?: StringNullableFilter<"StorySection"> | string | null
  }

  export type StoryCreateWithoutSectionsInput = {
    language?: string | null
    file?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type StoryUncheckedCreateWithoutSectionsInput = {
    id?: number
    language?: string | null
    file?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type StoryCreateOrConnectWithoutSectionsInput = {
    where: StoryWhereUniqueInput
    create: XOR<StoryCreateWithoutSectionsInput, StoryUncheckedCreateWithoutSectionsInput>
  }

  export type ExerciseCreateWithoutSectionInput = {
    exerciseIdx?: number | null
    question?: string | null
    answer?: string | null
    correctAnswer?: string | null
    options?: ExerciseOptionCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUncheckedCreateWithoutSectionInput = {
    id?: number
    exerciseIdx?: number | null
    question?: string | null
    answer?: string | null
    correctAnswer?: string | null
    options?: ExerciseOptionUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseCreateOrConnectWithoutSectionInput = {
    where: ExerciseWhereUniqueInput
    create: XOR<ExerciseCreateWithoutSectionInput, ExerciseUncheckedCreateWithoutSectionInput>
  }

  export type ExerciseCreateManySectionInputEnvelope = {
    data: ExerciseCreateManySectionInput | ExerciseCreateManySectionInput[]
    skipDuplicates?: boolean
  }

  export type StoryUpsertWithoutSectionsInput = {
    update: XOR<StoryUpdateWithoutSectionsInput, StoryUncheckedUpdateWithoutSectionsInput>
    create: XOR<StoryCreateWithoutSectionsInput, StoryUncheckedCreateWithoutSectionsInput>
    where?: StoryWhereInput
  }

  export type StoryUpdateToOneWithWhereWithoutSectionsInput = {
    where?: StoryWhereInput
    data: XOR<StoryUpdateWithoutSectionsInput, StoryUncheckedUpdateWithoutSectionsInput>
  }

  export type StoryUpdateWithoutSectionsInput = {
    language?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type StoryUncheckedUpdateWithoutSectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    language?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ExerciseUpsertWithWhereUniqueWithoutSectionInput = {
    where: ExerciseWhereUniqueInput
    update: XOR<ExerciseUpdateWithoutSectionInput, ExerciseUncheckedUpdateWithoutSectionInput>
    create: XOR<ExerciseCreateWithoutSectionInput, ExerciseUncheckedCreateWithoutSectionInput>
  }

  export type ExerciseUpdateWithWhereUniqueWithoutSectionInput = {
    where: ExerciseWhereUniqueInput
    data: XOR<ExerciseUpdateWithoutSectionInput, ExerciseUncheckedUpdateWithoutSectionInput>
  }

  export type ExerciseUpdateManyWithWhereWithoutSectionInput = {
    where: ExerciseScalarWhereInput
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyWithoutSectionInput>
  }

  export type ExerciseScalarWhereInput = {
    AND?: ExerciseScalarWhereInput | ExerciseScalarWhereInput[]
    OR?: ExerciseScalarWhereInput[]
    NOT?: ExerciseScalarWhereInput | ExerciseScalarWhereInput[]
    id?: IntFilter<"Exercise"> | number
    sectionId?: IntFilter<"Exercise"> | number
    exerciseIdx?: IntNullableFilter<"Exercise"> | number | null
    question?: StringNullableFilter<"Exercise"> | string | null
    answer?: StringNullableFilter<"Exercise"> | string | null
    correctAnswer?: StringNullableFilter<"Exercise"> | string | null
  }

  export type StorySectionCreateWithoutExercisesInput = {
    sectionKey?: string | null
    order?: number | null
    title?: string | null
    content?: string | null
    story: StoryCreateNestedOneWithoutSectionsInput
  }

  export type StorySectionUncheckedCreateWithoutExercisesInput = {
    id?: number
    storyId: number
    sectionKey?: string | null
    order?: number | null
    title?: string | null
    content?: string | null
  }

  export type StorySectionCreateOrConnectWithoutExercisesInput = {
    where: StorySectionWhereUniqueInput
    create: XOR<StorySectionCreateWithoutExercisesInput, StorySectionUncheckedCreateWithoutExercisesInput>
  }

  export type ExerciseOptionCreateWithoutExerciseInput = {
    idx?: number | null
    text?: string | null
  }

  export type ExerciseOptionUncheckedCreateWithoutExerciseInput = {
    id?: number
    idx?: number | null
    text?: string | null
  }

  export type ExerciseOptionCreateOrConnectWithoutExerciseInput = {
    where: ExerciseOptionWhereUniqueInput
    create: XOR<ExerciseOptionCreateWithoutExerciseInput, ExerciseOptionUncheckedCreateWithoutExerciseInput>
  }

  export type ExerciseOptionCreateManyExerciseInputEnvelope = {
    data: ExerciseOptionCreateManyExerciseInput | ExerciseOptionCreateManyExerciseInput[]
    skipDuplicates?: boolean
  }

  export type StorySectionUpsertWithoutExercisesInput = {
    update: XOR<StorySectionUpdateWithoutExercisesInput, StorySectionUncheckedUpdateWithoutExercisesInput>
    create: XOR<StorySectionCreateWithoutExercisesInput, StorySectionUncheckedCreateWithoutExercisesInput>
    where?: StorySectionWhereInput
  }

  export type StorySectionUpdateToOneWithWhereWithoutExercisesInput = {
    where?: StorySectionWhereInput
    data: XOR<StorySectionUpdateWithoutExercisesInput, StorySectionUncheckedUpdateWithoutExercisesInput>
  }

  export type StorySectionUpdateWithoutExercisesInput = {
    sectionKey?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    story?: StoryUpdateOneRequiredWithoutSectionsNestedInput
  }

  export type StorySectionUncheckedUpdateWithoutExercisesInput = {
    id?: IntFieldUpdateOperationsInput | number
    storyId?: IntFieldUpdateOperationsInput | number
    sectionKey?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExerciseOptionUpsertWithWhereUniqueWithoutExerciseInput = {
    where: ExerciseOptionWhereUniqueInput
    update: XOR<ExerciseOptionUpdateWithoutExerciseInput, ExerciseOptionUncheckedUpdateWithoutExerciseInput>
    create: XOR<ExerciseOptionCreateWithoutExerciseInput, ExerciseOptionUncheckedCreateWithoutExerciseInput>
  }

  export type ExerciseOptionUpdateWithWhereUniqueWithoutExerciseInput = {
    where: ExerciseOptionWhereUniqueInput
    data: XOR<ExerciseOptionUpdateWithoutExerciseInput, ExerciseOptionUncheckedUpdateWithoutExerciseInput>
  }

  export type ExerciseOptionUpdateManyWithWhereWithoutExerciseInput = {
    where: ExerciseOptionScalarWhereInput
    data: XOR<ExerciseOptionUpdateManyMutationInput, ExerciseOptionUncheckedUpdateManyWithoutExerciseInput>
  }

  export type ExerciseOptionScalarWhereInput = {
    AND?: ExerciseOptionScalarWhereInput | ExerciseOptionScalarWhereInput[]
    OR?: ExerciseOptionScalarWhereInput[]
    NOT?: ExerciseOptionScalarWhereInput | ExerciseOptionScalarWhereInput[]
    id?: IntFilter<"ExerciseOption"> | number
    exerciseId?: IntFilter<"ExerciseOption"> | number
    idx?: IntNullableFilter<"ExerciseOption"> | number | null
    text?: StringNullableFilter<"ExerciseOption"> | string | null
  }

  export type ExerciseCreateWithoutOptionsInput = {
    exerciseIdx?: number | null
    question?: string | null
    answer?: string | null
    correctAnswer?: string | null
    section: StorySectionCreateNestedOneWithoutExercisesInput
  }

  export type ExerciseUncheckedCreateWithoutOptionsInput = {
    id?: number
    sectionId: number
    exerciseIdx?: number | null
    question?: string | null
    answer?: string | null
    correctAnswer?: string | null
  }

  export type ExerciseCreateOrConnectWithoutOptionsInput = {
    where: ExerciseWhereUniqueInput
    create: XOR<ExerciseCreateWithoutOptionsInput, ExerciseUncheckedCreateWithoutOptionsInput>
  }

  export type ExerciseUpsertWithoutOptionsInput = {
    update: XOR<ExerciseUpdateWithoutOptionsInput, ExerciseUncheckedUpdateWithoutOptionsInput>
    create: XOR<ExerciseCreateWithoutOptionsInput, ExerciseUncheckedCreateWithoutOptionsInput>
    where?: ExerciseWhereInput
  }

  export type ExerciseUpdateToOneWithWhereWithoutOptionsInput = {
    where?: ExerciseWhereInput
    data: XOR<ExerciseUpdateWithoutOptionsInput, ExerciseUncheckedUpdateWithoutOptionsInput>
  }

  export type ExerciseUpdateWithoutOptionsInput = {
    exerciseIdx?: NullableIntFieldUpdateOperationsInput | number | null
    question?: NullableStringFieldUpdateOperationsInput | string | null
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    section?: StorySectionUpdateOneRequiredWithoutExercisesNestedInput
  }

  export type ExerciseUncheckedUpdateWithoutOptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    sectionId?: IntFieldUpdateOperationsInput | number
    exerciseIdx?: NullableIntFieldUpdateOperationsInput | number | null
    question?: NullableStringFieldUpdateOperationsInput | string | null
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswer?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GrammarSectionCreateWithoutGrammarInput = {
    sectionKey?: string | null
    order?: number | null
    title?: string | null
    description?: string | null
    examples?: ExampleCreateNestedManyWithoutSectionInput
  }

  export type GrammarSectionUncheckedCreateWithoutGrammarInput = {
    id?: number
    sectionKey?: string | null
    order?: number | null
    title?: string | null
    description?: string | null
    examples?: ExampleUncheckedCreateNestedManyWithoutSectionInput
  }

  export type GrammarSectionCreateOrConnectWithoutGrammarInput = {
    where: GrammarSectionWhereUniqueInput
    create: XOR<GrammarSectionCreateWithoutGrammarInput, GrammarSectionUncheckedCreateWithoutGrammarInput>
  }

  export type GrammarSectionCreateManyGrammarInputEnvelope = {
    data: GrammarSectionCreateManyGrammarInput | GrammarSectionCreateManyGrammarInput[]
    skipDuplicates?: boolean
  }

  export type GrammarRuleCreateWithoutGrammarInput = {
    ruleKey?: string | null
    description?: string | null
  }

  export type GrammarRuleUncheckedCreateWithoutGrammarInput = {
    id?: number
    ruleKey?: string | null
    description?: string | null
  }

  export type GrammarRuleCreateOrConnectWithoutGrammarInput = {
    where: GrammarRuleWhereUniqueInput
    create: XOR<GrammarRuleCreateWithoutGrammarInput, GrammarRuleUncheckedCreateWithoutGrammarInput>
  }

  export type GrammarRuleCreateManyGrammarInputEnvelope = {
    data: GrammarRuleCreateManyGrammarInput | GrammarRuleCreateManyGrammarInput[]
    skipDuplicates?: boolean
  }

  export type GrammarSectionUpsertWithWhereUniqueWithoutGrammarInput = {
    where: GrammarSectionWhereUniqueInput
    update: XOR<GrammarSectionUpdateWithoutGrammarInput, GrammarSectionUncheckedUpdateWithoutGrammarInput>
    create: XOR<GrammarSectionCreateWithoutGrammarInput, GrammarSectionUncheckedCreateWithoutGrammarInput>
  }

  export type GrammarSectionUpdateWithWhereUniqueWithoutGrammarInput = {
    where: GrammarSectionWhereUniqueInput
    data: XOR<GrammarSectionUpdateWithoutGrammarInput, GrammarSectionUncheckedUpdateWithoutGrammarInput>
  }

  export type GrammarSectionUpdateManyWithWhereWithoutGrammarInput = {
    where: GrammarSectionScalarWhereInput
    data: XOR<GrammarSectionUpdateManyMutationInput, GrammarSectionUncheckedUpdateManyWithoutGrammarInput>
  }

  export type GrammarSectionScalarWhereInput = {
    AND?: GrammarSectionScalarWhereInput | GrammarSectionScalarWhereInput[]
    OR?: GrammarSectionScalarWhereInput[]
    NOT?: GrammarSectionScalarWhereInput | GrammarSectionScalarWhereInput[]
    id?: IntFilter<"GrammarSection"> | number
    grammarId?: IntFilter<"GrammarSection"> | number
    sectionKey?: StringNullableFilter<"GrammarSection"> | string | null
    order?: IntNullableFilter<"GrammarSection"> | number | null
    title?: StringNullableFilter<"GrammarSection"> | string | null
    description?: StringNullableFilter<"GrammarSection"> | string | null
  }

  export type GrammarRuleUpsertWithWhereUniqueWithoutGrammarInput = {
    where: GrammarRuleWhereUniqueInput
    update: XOR<GrammarRuleUpdateWithoutGrammarInput, GrammarRuleUncheckedUpdateWithoutGrammarInput>
    create: XOR<GrammarRuleCreateWithoutGrammarInput, GrammarRuleUncheckedCreateWithoutGrammarInput>
  }

  export type GrammarRuleUpdateWithWhereUniqueWithoutGrammarInput = {
    where: GrammarRuleWhereUniqueInput
    data: XOR<GrammarRuleUpdateWithoutGrammarInput, GrammarRuleUncheckedUpdateWithoutGrammarInput>
  }

  export type GrammarRuleUpdateManyWithWhereWithoutGrammarInput = {
    where: GrammarRuleScalarWhereInput
    data: XOR<GrammarRuleUpdateManyMutationInput, GrammarRuleUncheckedUpdateManyWithoutGrammarInput>
  }

  export type GrammarRuleScalarWhereInput = {
    AND?: GrammarRuleScalarWhereInput | GrammarRuleScalarWhereInput[]
    OR?: GrammarRuleScalarWhereInput[]
    NOT?: GrammarRuleScalarWhereInput | GrammarRuleScalarWhereInput[]
    id?: IntFilter<"GrammarRule"> | number
    grammarId?: IntFilter<"GrammarRule"> | number
    ruleKey?: StringNullableFilter<"GrammarRule"> | string | null
    description?: StringNullableFilter<"GrammarRule"> | string | null
  }

  export type GrammarCreateWithoutSectionsInput = {
    language?: string | null
    file?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    rules?: GrammarRuleCreateNestedManyWithoutGrammarInput
  }

  export type GrammarUncheckedCreateWithoutSectionsInput = {
    id?: number
    language?: string | null
    file?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    rules?: GrammarRuleUncheckedCreateNestedManyWithoutGrammarInput
  }

  export type GrammarCreateOrConnectWithoutSectionsInput = {
    where: GrammarWhereUniqueInput
    create: XOR<GrammarCreateWithoutSectionsInput, GrammarUncheckedCreateWithoutSectionsInput>
  }

  export type ExampleCreateWithoutSectionInput = {
    rowIndex?: number | null
    german?: string | null
    english?: string | null
    myanmar?: string | null
    japanese?: string | null
    korean?: string | null
    thai?: string | null
    vietnamese?: string | null
  }

  export type ExampleUncheckedCreateWithoutSectionInput = {
    id?: number
    rowIndex?: number | null
    german?: string | null
    english?: string | null
    myanmar?: string | null
    japanese?: string | null
    korean?: string | null
    thai?: string | null
    vietnamese?: string | null
  }

  export type ExampleCreateOrConnectWithoutSectionInput = {
    where: ExampleWhereUniqueInput
    create: XOR<ExampleCreateWithoutSectionInput, ExampleUncheckedCreateWithoutSectionInput>
  }

  export type ExampleCreateManySectionInputEnvelope = {
    data: ExampleCreateManySectionInput | ExampleCreateManySectionInput[]
    skipDuplicates?: boolean
  }

  export type GrammarUpsertWithoutSectionsInput = {
    update: XOR<GrammarUpdateWithoutSectionsInput, GrammarUncheckedUpdateWithoutSectionsInput>
    create: XOR<GrammarCreateWithoutSectionsInput, GrammarUncheckedCreateWithoutSectionsInput>
    where?: GrammarWhereInput
  }

  export type GrammarUpdateToOneWithWhereWithoutSectionsInput = {
    where?: GrammarWhereInput
    data: XOR<GrammarUpdateWithoutSectionsInput, GrammarUncheckedUpdateWithoutSectionsInput>
  }

  export type GrammarUpdateWithoutSectionsInput = {
    language?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    rules?: GrammarRuleUpdateManyWithoutGrammarNestedInput
  }

  export type GrammarUncheckedUpdateWithoutSectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    language?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    rules?: GrammarRuleUncheckedUpdateManyWithoutGrammarNestedInput
  }

  export type ExampleUpsertWithWhereUniqueWithoutSectionInput = {
    where: ExampleWhereUniqueInput
    update: XOR<ExampleUpdateWithoutSectionInput, ExampleUncheckedUpdateWithoutSectionInput>
    create: XOR<ExampleCreateWithoutSectionInput, ExampleUncheckedCreateWithoutSectionInput>
  }

  export type ExampleUpdateWithWhereUniqueWithoutSectionInput = {
    where: ExampleWhereUniqueInput
    data: XOR<ExampleUpdateWithoutSectionInput, ExampleUncheckedUpdateWithoutSectionInput>
  }

  export type ExampleUpdateManyWithWhereWithoutSectionInput = {
    where: ExampleScalarWhereInput
    data: XOR<ExampleUpdateManyMutationInput, ExampleUncheckedUpdateManyWithoutSectionInput>
  }

  export type ExampleScalarWhereInput = {
    AND?: ExampleScalarWhereInput | ExampleScalarWhereInput[]
    OR?: ExampleScalarWhereInput[]
    NOT?: ExampleScalarWhereInput | ExampleScalarWhereInput[]
    id?: IntFilter<"Example"> | number
    sectionId?: IntFilter<"Example"> | number
    rowIndex?: IntNullableFilter<"Example"> | number | null
    german?: StringNullableFilter<"Example"> | string | null
    english?: StringNullableFilter<"Example"> | string | null
    myanmar?: StringNullableFilter<"Example"> | string | null
    japanese?: StringNullableFilter<"Example"> | string | null
    korean?: StringNullableFilter<"Example"> | string | null
    thai?: StringNullableFilter<"Example"> | string | null
    vietnamese?: StringNullableFilter<"Example"> | string | null
  }

  export type GrammarSectionCreateWithoutExamplesInput = {
    sectionKey?: string | null
    order?: number | null
    title?: string | null
    description?: string | null
    grammar: GrammarCreateNestedOneWithoutSectionsInput
  }

  export type GrammarSectionUncheckedCreateWithoutExamplesInput = {
    id?: number
    grammarId: number
    sectionKey?: string | null
    order?: number | null
    title?: string | null
    description?: string | null
  }

  export type GrammarSectionCreateOrConnectWithoutExamplesInput = {
    where: GrammarSectionWhereUniqueInput
    create: XOR<GrammarSectionCreateWithoutExamplesInput, GrammarSectionUncheckedCreateWithoutExamplesInput>
  }

  export type GrammarSectionUpsertWithoutExamplesInput = {
    update: XOR<GrammarSectionUpdateWithoutExamplesInput, GrammarSectionUncheckedUpdateWithoutExamplesInput>
    create: XOR<GrammarSectionCreateWithoutExamplesInput, GrammarSectionUncheckedCreateWithoutExamplesInput>
    where?: GrammarSectionWhereInput
  }

  export type GrammarSectionUpdateToOneWithWhereWithoutExamplesInput = {
    where?: GrammarSectionWhereInput
    data: XOR<GrammarSectionUpdateWithoutExamplesInput, GrammarSectionUncheckedUpdateWithoutExamplesInput>
  }

  export type GrammarSectionUpdateWithoutExamplesInput = {
    sectionKey?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    grammar?: GrammarUpdateOneRequiredWithoutSectionsNestedInput
  }

  export type GrammarSectionUncheckedUpdateWithoutExamplesInput = {
    id?: IntFieldUpdateOperationsInput | number
    grammarId?: IntFieldUpdateOperationsInput | number
    sectionKey?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DailyUsageVocabCreateWithoutDailyUsageInput = {
    german?: string | null
    english?: string | null
    myanmar?: string | null
    japanese?: string | null
    korean?: string | null
    thai?: string | null
    vietnamese?: string | null
  }

  export type DailyUsageVocabUncheckedCreateWithoutDailyUsageInput = {
    id?: number
    german?: string | null
    english?: string | null
    myanmar?: string | null
    japanese?: string | null
    korean?: string | null
    thai?: string | null
    vietnamese?: string | null
  }

  export type DailyUsageVocabCreateOrConnectWithoutDailyUsageInput = {
    where: DailyUsageVocabWhereUniqueInput
    create: XOR<DailyUsageVocabCreateWithoutDailyUsageInput, DailyUsageVocabUncheckedCreateWithoutDailyUsageInput>
  }

  export type DailyUsageVocabCreateManyDailyUsageInputEnvelope = {
    data: DailyUsageVocabCreateManyDailyUsageInput | DailyUsageVocabCreateManyDailyUsageInput[]
    skipDuplicates?: boolean
  }

  export type DailyUsageVocabUpsertWithWhereUniqueWithoutDailyUsageInput = {
    where: DailyUsageVocabWhereUniqueInput
    update: XOR<DailyUsageVocabUpdateWithoutDailyUsageInput, DailyUsageVocabUncheckedUpdateWithoutDailyUsageInput>
    create: XOR<DailyUsageVocabCreateWithoutDailyUsageInput, DailyUsageVocabUncheckedCreateWithoutDailyUsageInput>
  }

  export type DailyUsageVocabUpdateWithWhereUniqueWithoutDailyUsageInput = {
    where: DailyUsageVocabWhereUniqueInput
    data: XOR<DailyUsageVocabUpdateWithoutDailyUsageInput, DailyUsageVocabUncheckedUpdateWithoutDailyUsageInput>
  }

  export type DailyUsageVocabUpdateManyWithWhereWithoutDailyUsageInput = {
    where: DailyUsageVocabScalarWhereInput
    data: XOR<DailyUsageVocabUpdateManyMutationInput, DailyUsageVocabUncheckedUpdateManyWithoutDailyUsageInput>
  }

  export type DailyUsageVocabScalarWhereInput = {
    AND?: DailyUsageVocabScalarWhereInput | DailyUsageVocabScalarWhereInput[]
    OR?: DailyUsageVocabScalarWhereInput[]
    NOT?: DailyUsageVocabScalarWhereInput | DailyUsageVocabScalarWhereInput[]
    id?: IntFilter<"DailyUsageVocab"> | number
    dailyUsageId?: IntFilter<"DailyUsageVocab"> | number
    german?: StringNullableFilter<"DailyUsageVocab"> | string | null
    english?: StringNullableFilter<"DailyUsageVocab"> | string | null
    myanmar?: StringNullableFilter<"DailyUsageVocab"> | string | null
    japanese?: StringNullableFilter<"DailyUsageVocab"> | string | null
    korean?: StringNullableFilter<"DailyUsageVocab"> | string | null
    thai?: StringNullableFilter<"DailyUsageVocab"> | string | null
    vietnamese?: StringNullableFilter<"DailyUsageVocab"> | string | null
  }

  export type DailyUsageCreateWithoutVocabsInput = {
    file?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DailyUsageUncheckedCreateWithoutVocabsInput = {
    id?: number
    file?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DailyUsageCreateOrConnectWithoutVocabsInput = {
    where: DailyUsageWhereUniqueInput
    create: XOR<DailyUsageCreateWithoutVocabsInput, DailyUsageUncheckedCreateWithoutVocabsInput>
  }

  export type DailyUsageUpsertWithoutVocabsInput = {
    update: XOR<DailyUsageUpdateWithoutVocabsInput, DailyUsageUncheckedUpdateWithoutVocabsInput>
    create: XOR<DailyUsageCreateWithoutVocabsInput, DailyUsageUncheckedCreateWithoutVocabsInput>
    where?: DailyUsageWhereInput
  }

  export type DailyUsageUpdateToOneWithWhereWithoutVocabsInput = {
    where?: DailyUsageWhereInput
    data: XOR<DailyUsageUpdateWithoutVocabsInput, DailyUsageUncheckedUpdateWithoutVocabsInput>
  }

  export type DailyUsageUpdateWithoutVocabsInput = {
    file?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DailyUsageUncheckedUpdateWithoutVocabsInput = {
    id?: IntFieldUpdateOperationsInput | number
    file?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
  }

  export type GrammarCreateWithoutRulesInput = {
    language?: string | null
    file?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    sections?: GrammarSectionCreateNestedManyWithoutGrammarInput
  }

  export type GrammarUncheckedCreateWithoutRulesInput = {
    id?: number
    language?: string | null
    file?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    sections?: GrammarSectionUncheckedCreateNestedManyWithoutGrammarInput
  }

  export type GrammarCreateOrConnectWithoutRulesInput = {
    where: GrammarWhereUniqueInput
    create: XOR<GrammarCreateWithoutRulesInput, GrammarUncheckedCreateWithoutRulesInput>
  }

  export type GrammarUpsertWithoutRulesInput = {
    update: XOR<GrammarUpdateWithoutRulesInput, GrammarUncheckedUpdateWithoutRulesInput>
    create: XOR<GrammarCreateWithoutRulesInput, GrammarUncheckedCreateWithoutRulesInput>
    where?: GrammarWhereInput
  }

  export type GrammarUpdateToOneWithWhereWithoutRulesInput = {
    where?: GrammarWhereInput
    data: XOR<GrammarUpdateWithoutRulesInput, GrammarUncheckedUpdateWithoutRulesInput>
  }

  export type GrammarUpdateWithoutRulesInput = {
    language?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    sections?: GrammarSectionUpdateManyWithoutGrammarNestedInput
  }

  export type GrammarUncheckedUpdateWithoutRulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    language?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    sections?: GrammarSectionUncheckedUpdateManyWithoutGrammarNestedInput
  }

  export type StorySectionCreateManyStoryInput = {
    id?: number
    sectionKey?: string | null
    order?: number | null
    title?: string | null
    content?: string | null
  }

  export type StorySectionUpdateWithoutStoryInput = {
    sectionKey?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    exercises?: ExerciseUpdateManyWithoutSectionNestedInput
  }

  export type StorySectionUncheckedUpdateWithoutStoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    sectionKey?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    exercises?: ExerciseUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type StorySectionUncheckedUpdateManyWithoutStoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    sectionKey?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExerciseCreateManySectionInput = {
    id?: number
    exerciseIdx?: number | null
    question?: string | null
    answer?: string | null
    correctAnswer?: string | null
  }

  export type ExerciseUpdateWithoutSectionInput = {
    exerciseIdx?: NullableIntFieldUpdateOperationsInput | number | null
    question?: NullableStringFieldUpdateOperationsInput | string | null
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    options?: ExerciseOptionUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateWithoutSectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    exerciseIdx?: NullableIntFieldUpdateOperationsInput | number | null
    question?: NullableStringFieldUpdateOperationsInput | string | null
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    options?: ExerciseOptionUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateManyWithoutSectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    exerciseIdx?: NullableIntFieldUpdateOperationsInput | number | null
    question?: NullableStringFieldUpdateOperationsInput | string | null
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswer?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExerciseOptionCreateManyExerciseInput = {
    id?: number
    idx?: number | null
    text?: string | null
  }

  export type ExerciseOptionUpdateWithoutExerciseInput = {
    idx?: NullableIntFieldUpdateOperationsInput | number | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExerciseOptionUncheckedUpdateWithoutExerciseInput = {
    id?: IntFieldUpdateOperationsInput | number
    idx?: NullableIntFieldUpdateOperationsInput | number | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExerciseOptionUncheckedUpdateManyWithoutExerciseInput = {
    id?: IntFieldUpdateOperationsInput | number
    idx?: NullableIntFieldUpdateOperationsInput | number | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GrammarSectionCreateManyGrammarInput = {
    id?: number
    sectionKey?: string | null
    order?: number | null
    title?: string | null
    description?: string | null
  }

  export type GrammarRuleCreateManyGrammarInput = {
    id?: number
    ruleKey?: string | null
    description?: string | null
  }

  export type GrammarSectionUpdateWithoutGrammarInput = {
    sectionKey?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    examples?: ExampleUpdateManyWithoutSectionNestedInput
  }

  export type GrammarSectionUncheckedUpdateWithoutGrammarInput = {
    id?: IntFieldUpdateOperationsInput | number
    sectionKey?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    examples?: ExampleUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type GrammarSectionUncheckedUpdateManyWithoutGrammarInput = {
    id?: IntFieldUpdateOperationsInput | number
    sectionKey?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GrammarRuleUpdateWithoutGrammarInput = {
    ruleKey?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GrammarRuleUncheckedUpdateWithoutGrammarInput = {
    id?: IntFieldUpdateOperationsInput | number
    ruleKey?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GrammarRuleUncheckedUpdateManyWithoutGrammarInput = {
    id?: IntFieldUpdateOperationsInput | number
    ruleKey?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExampleCreateManySectionInput = {
    id?: number
    rowIndex?: number | null
    german?: string | null
    english?: string | null
    myanmar?: string | null
    japanese?: string | null
    korean?: string | null
    thai?: string | null
    vietnamese?: string | null
  }

  export type ExampleUpdateWithoutSectionInput = {
    rowIndex?: NullableIntFieldUpdateOperationsInput | number | null
    german?: NullableStringFieldUpdateOperationsInput | string | null
    english?: NullableStringFieldUpdateOperationsInput | string | null
    myanmar?: NullableStringFieldUpdateOperationsInput | string | null
    japanese?: NullableStringFieldUpdateOperationsInput | string | null
    korean?: NullableStringFieldUpdateOperationsInput | string | null
    thai?: NullableStringFieldUpdateOperationsInput | string | null
    vietnamese?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExampleUncheckedUpdateWithoutSectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    rowIndex?: NullableIntFieldUpdateOperationsInput | number | null
    german?: NullableStringFieldUpdateOperationsInput | string | null
    english?: NullableStringFieldUpdateOperationsInput | string | null
    myanmar?: NullableStringFieldUpdateOperationsInput | string | null
    japanese?: NullableStringFieldUpdateOperationsInput | string | null
    korean?: NullableStringFieldUpdateOperationsInput | string | null
    thai?: NullableStringFieldUpdateOperationsInput | string | null
    vietnamese?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExampleUncheckedUpdateManyWithoutSectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    rowIndex?: NullableIntFieldUpdateOperationsInput | number | null
    german?: NullableStringFieldUpdateOperationsInput | string | null
    english?: NullableStringFieldUpdateOperationsInput | string | null
    myanmar?: NullableStringFieldUpdateOperationsInput | string | null
    japanese?: NullableStringFieldUpdateOperationsInput | string | null
    korean?: NullableStringFieldUpdateOperationsInput | string | null
    thai?: NullableStringFieldUpdateOperationsInput | string | null
    vietnamese?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DailyUsageVocabCreateManyDailyUsageInput = {
    id?: number
    german?: string | null
    english?: string | null
    myanmar?: string | null
    japanese?: string | null
    korean?: string | null
    thai?: string | null
    vietnamese?: string | null
  }

  export type DailyUsageVocabUpdateWithoutDailyUsageInput = {
    german?: NullableStringFieldUpdateOperationsInput | string | null
    english?: NullableStringFieldUpdateOperationsInput | string | null
    myanmar?: NullableStringFieldUpdateOperationsInput | string | null
    japanese?: NullableStringFieldUpdateOperationsInput | string | null
    korean?: NullableStringFieldUpdateOperationsInput | string | null
    thai?: NullableStringFieldUpdateOperationsInput | string | null
    vietnamese?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DailyUsageVocabUncheckedUpdateWithoutDailyUsageInput = {
    id?: IntFieldUpdateOperationsInput | number
    german?: NullableStringFieldUpdateOperationsInput | string | null
    english?: NullableStringFieldUpdateOperationsInput | string | null
    myanmar?: NullableStringFieldUpdateOperationsInput | string | null
    japanese?: NullableStringFieldUpdateOperationsInput | string | null
    korean?: NullableStringFieldUpdateOperationsInput | string | null
    thai?: NullableStringFieldUpdateOperationsInput | string | null
    vietnamese?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DailyUsageVocabUncheckedUpdateManyWithoutDailyUsageInput = {
    id?: IntFieldUpdateOperationsInput | number
    german?: NullableStringFieldUpdateOperationsInput | string | null
    english?: NullableStringFieldUpdateOperationsInput | string | null
    myanmar?: NullableStringFieldUpdateOperationsInput | string | null
    japanese?: NullableStringFieldUpdateOperationsInput | string | null
    korean?: NullableStringFieldUpdateOperationsInput | string | null
    thai?: NullableStringFieldUpdateOperationsInput | string | null
    vietnamese?: NullableStringFieldUpdateOperationsInput | string | null
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