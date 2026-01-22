
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
 * Model funcionario
 * 
 */
export type funcionario = $Result.DefaultSelection<Prisma.$funcionarioPayload>
/**
 * Model revisao
 * 
 */
export type revisao = $Result.DefaultSelection<Prisma.$revisaoPayload>
/**
 * Model veiculo
 * 
 */
export type veiculo = $Result.DefaultSelection<Prisma.$veiculoPayload>
/**
 * Model cliente
 * 
 */
export type cliente = $Result.DefaultSelection<Prisma.$clientePayload>
/**
 * Model usuario
 * 
 */
export type usuario = $Result.DefaultSelection<Prisma.$usuarioPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const tipo_veiculo: {
  CARRO: 'CARRO',
  MOTO: 'MOTO'
};

export type tipo_veiculo = (typeof tipo_veiculo)[keyof typeof tipo_veiculo]


export const tipo_usuario: {
  CLIENTE: 'CLIENTE',
  FUNCIONARIO: 'FUNCIONARIO',
  ADMIN: 'ADMIN'
};

export type tipo_usuario = (typeof tipo_usuario)[keyof typeof tipo_usuario]

}

export type tipo_veiculo = $Enums.tipo_veiculo

export const tipo_veiculo: typeof $Enums.tipo_veiculo

export type tipo_usuario = $Enums.tipo_usuario

export const tipo_usuario: typeof $Enums.tipo_usuario

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Funcionarios
 * const funcionarios = await prisma.funcionario.findMany()
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Funcionarios
   * const funcionarios = await prisma.funcionario.findMany()
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.funcionario`: Exposes CRUD operations for the **funcionario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Funcionarios
    * const funcionarios = await prisma.funcionario.findMany()
    * ```
    */
  get funcionario(): Prisma.funcionarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.revisao`: Exposes CRUD operations for the **revisao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Revisaos
    * const revisaos = await prisma.revisao.findMany()
    * ```
    */
  get revisao(): Prisma.revisaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.veiculo`: Exposes CRUD operations for the **veiculo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Veiculos
    * const veiculos = await prisma.veiculo.findMany()
    * ```
    */
  get veiculo(): Prisma.veiculoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cliente`: Exposes CRUD operations for the **cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.clienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.usuarioDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.1.0
   * Query Engine version: ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba
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
    funcionario: 'funcionario',
    revisao: 'revisao',
    veiculo: 'veiculo',
    cliente: 'cliente',
    usuario: 'usuario'
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
      modelProps: "funcionario" | "revisao" | "veiculo" | "cliente" | "usuario"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      funcionario: {
        payload: Prisma.$funcionarioPayload<ExtArgs>
        fields: Prisma.funcionarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.funcionarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.funcionarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionarioPayload>
          }
          findFirst: {
            args: Prisma.funcionarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.funcionarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionarioPayload>
          }
          findMany: {
            args: Prisma.funcionarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionarioPayload>[]
          }
          create: {
            args: Prisma.funcionarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionarioPayload>
          }
          createMany: {
            args: Prisma.funcionarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.funcionarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionarioPayload>[]
          }
          delete: {
            args: Prisma.funcionarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionarioPayload>
          }
          update: {
            args: Prisma.funcionarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionarioPayload>
          }
          deleteMany: {
            args: Prisma.funcionarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.funcionarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.funcionarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionarioPayload>[]
          }
          upsert: {
            args: Prisma.funcionarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionarioPayload>
          }
          aggregate: {
            args: Prisma.FuncionarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFuncionario>
          }
          groupBy: {
            args: Prisma.funcionarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<FuncionarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.funcionarioCountArgs<ExtArgs>
            result: $Utils.Optional<FuncionarioCountAggregateOutputType> | number
          }
        }
      }
      revisao: {
        payload: Prisma.$revisaoPayload<ExtArgs>
        fields: Prisma.revisaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.revisaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$revisaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.revisaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$revisaoPayload>
          }
          findFirst: {
            args: Prisma.revisaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$revisaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.revisaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$revisaoPayload>
          }
          findMany: {
            args: Prisma.revisaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$revisaoPayload>[]
          }
          create: {
            args: Prisma.revisaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$revisaoPayload>
          }
          createMany: {
            args: Prisma.revisaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.revisaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$revisaoPayload>[]
          }
          delete: {
            args: Prisma.revisaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$revisaoPayload>
          }
          update: {
            args: Prisma.revisaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$revisaoPayload>
          }
          deleteMany: {
            args: Prisma.revisaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.revisaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.revisaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$revisaoPayload>[]
          }
          upsert: {
            args: Prisma.revisaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$revisaoPayload>
          }
          aggregate: {
            args: Prisma.RevisaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRevisao>
          }
          groupBy: {
            args: Prisma.revisaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<RevisaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.revisaoCountArgs<ExtArgs>
            result: $Utils.Optional<RevisaoCountAggregateOutputType> | number
          }
        }
      }
      veiculo: {
        payload: Prisma.$veiculoPayload<ExtArgs>
        fields: Prisma.veiculoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.veiculoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$veiculoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.veiculoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$veiculoPayload>
          }
          findFirst: {
            args: Prisma.veiculoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$veiculoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.veiculoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$veiculoPayload>
          }
          findMany: {
            args: Prisma.veiculoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$veiculoPayload>[]
          }
          create: {
            args: Prisma.veiculoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$veiculoPayload>
          }
          createMany: {
            args: Prisma.veiculoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.veiculoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$veiculoPayload>[]
          }
          delete: {
            args: Prisma.veiculoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$veiculoPayload>
          }
          update: {
            args: Prisma.veiculoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$veiculoPayload>
          }
          deleteMany: {
            args: Prisma.veiculoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.veiculoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.veiculoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$veiculoPayload>[]
          }
          upsert: {
            args: Prisma.veiculoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$veiculoPayload>
          }
          aggregate: {
            args: Prisma.VeiculoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVeiculo>
          }
          groupBy: {
            args: Prisma.veiculoGroupByArgs<ExtArgs>
            result: $Utils.Optional<VeiculoGroupByOutputType>[]
          }
          count: {
            args: Prisma.veiculoCountArgs<ExtArgs>
            result: $Utils.Optional<VeiculoCountAggregateOutputType> | number
          }
        }
      }
      cliente: {
        payload: Prisma.$clientePayload<ExtArgs>
        fields: Prisma.clienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.clienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.clienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          findFirst: {
            args: Prisma.clienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.clienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          findMany: {
            args: Prisma.clienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>[]
          }
          create: {
            args: Prisma.clienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          createMany: {
            args: Prisma.clienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.clienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>[]
          }
          delete: {
            args: Prisma.clienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          update: {
            args: Prisma.clienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          deleteMany: {
            args: Prisma.clienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.clienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.clienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>[]
          }
          upsert: {
            args: Prisma.clienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.clienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.clienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      usuario: {
        payload: Prisma.$usuarioPayload<ExtArgs>
        fields: Prisma.usuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          findFirst: {
            args: Prisma.usuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          findMany: {
            args: Prisma.usuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>[]
          }
          create: {
            args: Prisma.usuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          createMany: {
            args: Prisma.usuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>[]
          }
          delete: {
            args: Prisma.usuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          update: {
            args: Prisma.usuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          deleteMany: {
            args: Prisma.usuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>[]
          }
          upsert: {
            args: Prisma.usuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.usuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
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
    funcionario?: funcionarioOmit
    revisao?: revisaoOmit
    veiculo?: veiculoOmit
    cliente?: clienteOmit
    usuario?: usuarioOmit
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
   * Count Type FuncionarioCountOutputType
   */

  export type FuncionarioCountOutputType = {
    revisao: number
  }

  export type FuncionarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    revisao?: boolean | FuncionarioCountOutputTypeCountRevisaoArgs
  }

  // Custom InputTypes
  /**
   * FuncionarioCountOutputType without action
   */
  export type FuncionarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuncionarioCountOutputType
     */
    select?: FuncionarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FuncionarioCountOutputType without action
   */
  export type FuncionarioCountOutputTypeCountRevisaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: revisaoWhereInput
  }


  /**
   * Count Type VeiculoCountOutputType
   */

  export type VeiculoCountOutputType = {
    revisao: number
  }

  export type VeiculoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    revisao?: boolean | VeiculoCountOutputTypeCountRevisaoArgs
  }

  // Custom InputTypes
  /**
   * VeiculoCountOutputType without action
   */
  export type VeiculoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoCountOutputType
     */
    select?: VeiculoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VeiculoCountOutputType without action
   */
  export type VeiculoCountOutputTypeCountRevisaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: revisaoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model funcionario
   */

  export type AggregateFuncionario = {
    _count: FuncionarioCountAggregateOutputType | null
    _avg: FuncionarioAvgAggregateOutputType | null
    _sum: FuncionarioSumAggregateOutputType | null
    _min: FuncionarioMinAggregateOutputType | null
    _max: FuncionarioMaxAggregateOutputType | null
  }

  export type FuncionarioAvgAggregateOutputType = {
    cpf: number | null
  }

  export type FuncionarioSumAggregateOutputType = {
    cpf: bigint | null
  }

  export type FuncionarioMinAggregateOutputType = {
    cpf: bigint | null
    nome: string | null
    telefone: string | null
  }

  export type FuncionarioMaxAggregateOutputType = {
    cpf: bigint | null
    nome: string | null
    telefone: string | null
  }

  export type FuncionarioCountAggregateOutputType = {
    cpf: number
    nome: number
    telefone: number
    _all: number
  }


  export type FuncionarioAvgAggregateInputType = {
    cpf?: true
  }

  export type FuncionarioSumAggregateInputType = {
    cpf?: true
  }

  export type FuncionarioMinAggregateInputType = {
    cpf?: true
    nome?: true
    telefone?: true
  }

  export type FuncionarioMaxAggregateInputType = {
    cpf?: true
    nome?: true
    telefone?: true
  }

  export type FuncionarioCountAggregateInputType = {
    cpf?: true
    nome?: true
    telefone?: true
    _all?: true
  }

  export type FuncionarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which funcionario to aggregate.
     */
    where?: funcionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of funcionarios to fetch.
     */
    orderBy?: funcionarioOrderByWithRelationInput | funcionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: funcionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned funcionarios
    **/
    _count?: true | FuncionarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FuncionarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FuncionarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FuncionarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FuncionarioMaxAggregateInputType
  }

  export type GetFuncionarioAggregateType<T extends FuncionarioAggregateArgs> = {
        [P in keyof T & keyof AggregateFuncionario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFuncionario[P]>
      : GetScalarType<T[P], AggregateFuncionario[P]>
  }




  export type funcionarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: funcionarioWhereInput
    orderBy?: funcionarioOrderByWithAggregationInput | funcionarioOrderByWithAggregationInput[]
    by: FuncionarioScalarFieldEnum[] | FuncionarioScalarFieldEnum
    having?: funcionarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FuncionarioCountAggregateInputType | true
    _avg?: FuncionarioAvgAggregateInputType
    _sum?: FuncionarioSumAggregateInputType
    _min?: FuncionarioMinAggregateInputType
    _max?: FuncionarioMaxAggregateInputType
  }

  export type FuncionarioGroupByOutputType = {
    cpf: bigint
    nome: string
    telefone: string | null
    _count: FuncionarioCountAggregateOutputType | null
    _avg: FuncionarioAvgAggregateOutputType | null
    _sum: FuncionarioSumAggregateOutputType | null
    _min: FuncionarioMinAggregateOutputType | null
    _max: FuncionarioMaxAggregateOutputType | null
  }

  type GetFuncionarioGroupByPayload<T extends funcionarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FuncionarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FuncionarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FuncionarioGroupByOutputType[P]>
            : GetScalarType<T[P], FuncionarioGroupByOutputType[P]>
        }
      >
    >


  export type funcionarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cpf?: boolean
    nome?: boolean
    telefone?: boolean
    revisao?: boolean | funcionario$revisaoArgs<ExtArgs>
    _count?: boolean | FuncionarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["funcionario"]>

  export type funcionarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cpf?: boolean
    nome?: boolean
    telefone?: boolean
  }, ExtArgs["result"]["funcionario"]>

  export type funcionarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cpf?: boolean
    nome?: boolean
    telefone?: boolean
  }, ExtArgs["result"]["funcionario"]>

  export type funcionarioSelectScalar = {
    cpf?: boolean
    nome?: boolean
    telefone?: boolean
  }

  export type funcionarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cpf" | "nome" | "telefone", ExtArgs["result"]["funcionario"]>
  export type funcionarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    revisao?: boolean | funcionario$revisaoArgs<ExtArgs>
    _count?: boolean | FuncionarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type funcionarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type funcionarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $funcionarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "funcionario"
    objects: {
      revisao: Prisma.$revisaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      cpf: bigint
      nome: string
      telefone: string | null
    }, ExtArgs["result"]["funcionario"]>
    composites: {}
  }

  type funcionarioGetPayload<S extends boolean | null | undefined | funcionarioDefaultArgs> = $Result.GetResult<Prisma.$funcionarioPayload, S>

  type funcionarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<funcionarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FuncionarioCountAggregateInputType | true
    }

  export interface funcionarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['funcionario'], meta: { name: 'funcionario' } }
    /**
     * Find zero or one Funcionario that matches the filter.
     * @param {funcionarioFindUniqueArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends funcionarioFindUniqueArgs>(args: SelectSubset<T, funcionarioFindUniqueArgs<ExtArgs>>): Prisma__funcionarioClient<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Funcionario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {funcionarioFindUniqueOrThrowArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends funcionarioFindUniqueOrThrowArgs>(args: SelectSubset<T, funcionarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__funcionarioClient<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Funcionario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {funcionarioFindFirstArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends funcionarioFindFirstArgs>(args?: SelectSubset<T, funcionarioFindFirstArgs<ExtArgs>>): Prisma__funcionarioClient<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Funcionario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {funcionarioFindFirstOrThrowArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends funcionarioFindFirstOrThrowArgs>(args?: SelectSubset<T, funcionarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__funcionarioClient<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Funcionarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {funcionarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Funcionarios
     * const funcionarios = await prisma.funcionario.findMany()
     * 
     * // Get first 10 Funcionarios
     * const funcionarios = await prisma.funcionario.findMany({ take: 10 })
     * 
     * // Only select the `cpf`
     * const funcionarioWithCpfOnly = await prisma.funcionario.findMany({ select: { cpf: true } })
     * 
     */
    findMany<T extends funcionarioFindManyArgs>(args?: SelectSubset<T, funcionarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Funcionario.
     * @param {funcionarioCreateArgs} args - Arguments to create a Funcionario.
     * @example
     * // Create one Funcionario
     * const Funcionario = await prisma.funcionario.create({
     *   data: {
     *     // ... data to create a Funcionario
     *   }
     * })
     * 
     */
    create<T extends funcionarioCreateArgs>(args: SelectSubset<T, funcionarioCreateArgs<ExtArgs>>): Prisma__funcionarioClient<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Funcionarios.
     * @param {funcionarioCreateManyArgs} args - Arguments to create many Funcionarios.
     * @example
     * // Create many Funcionarios
     * const funcionario = await prisma.funcionario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends funcionarioCreateManyArgs>(args?: SelectSubset<T, funcionarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Funcionarios and returns the data saved in the database.
     * @param {funcionarioCreateManyAndReturnArgs} args - Arguments to create many Funcionarios.
     * @example
     * // Create many Funcionarios
     * const funcionario = await prisma.funcionario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Funcionarios and only return the `cpf`
     * const funcionarioWithCpfOnly = await prisma.funcionario.createManyAndReturn({
     *   select: { cpf: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends funcionarioCreateManyAndReturnArgs>(args?: SelectSubset<T, funcionarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Funcionario.
     * @param {funcionarioDeleteArgs} args - Arguments to delete one Funcionario.
     * @example
     * // Delete one Funcionario
     * const Funcionario = await prisma.funcionario.delete({
     *   where: {
     *     // ... filter to delete one Funcionario
     *   }
     * })
     * 
     */
    delete<T extends funcionarioDeleteArgs>(args: SelectSubset<T, funcionarioDeleteArgs<ExtArgs>>): Prisma__funcionarioClient<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Funcionario.
     * @param {funcionarioUpdateArgs} args - Arguments to update one Funcionario.
     * @example
     * // Update one Funcionario
     * const funcionario = await prisma.funcionario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends funcionarioUpdateArgs>(args: SelectSubset<T, funcionarioUpdateArgs<ExtArgs>>): Prisma__funcionarioClient<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Funcionarios.
     * @param {funcionarioDeleteManyArgs} args - Arguments to filter Funcionarios to delete.
     * @example
     * // Delete a few Funcionarios
     * const { count } = await prisma.funcionario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends funcionarioDeleteManyArgs>(args?: SelectSubset<T, funcionarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {funcionarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Funcionarios
     * const funcionario = await prisma.funcionario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends funcionarioUpdateManyArgs>(args: SelectSubset<T, funcionarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Funcionarios and returns the data updated in the database.
     * @param {funcionarioUpdateManyAndReturnArgs} args - Arguments to update many Funcionarios.
     * @example
     * // Update many Funcionarios
     * const funcionario = await prisma.funcionario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Funcionarios and only return the `cpf`
     * const funcionarioWithCpfOnly = await prisma.funcionario.updateManyAndReturn({
     *   select: { cpf: true },
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
    updateManyAndReturn<T extends funcionarioUpdateManyAndReturnArgs>(args: SelectSubset<T, funcionarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Funcionario.
     * @param {funcionarioUpsertArgs} args - Arguments to update or create a Funcionario.
     * @example
     * // Update or create a Funcionario
     * const funcionario = await prisma.funcionario.upsert({
     *   create: {
     *     // ... data to create a Funcionario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Funcionario we want to update
     *   }
     * })
     */
    upsert<T extends funcionarioUpsertArgs>(args: SelectSubset<T, funcionarioUpsertArgs<ExtArgs>>): Prisma__funcionarioClient<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {funcionarioCountArgs} args - Arguments to filter Funcionarios to count.
     * @example
     * // Count the number of Funcionarios
     * const count = await prisma.funcionario.count({
     *   where: {
     *     // ... the filter for the Funcionarios we want to count
     *   }
     * })
    **/
    count<T extends funcionarioCountArgs>(
      args?: Subset<T, funcionarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FuncionarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Funcionario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FuncionarioAggregateArgs>(args: Subset<T, FuncionarioAggregateArgs>): Prisma.PrismaPromise<GetFuncionarioAggregateType<T>>

    /**
     * Group by Funcionario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {funcionarioGroupByArgs} args - Group by arguments.
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
      T extends funcionarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: funcionarioGroupByArgs['orderBy'] }
        : { orderBy?: funcionarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, funcionarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFuncionarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the funcionario model
   */
  readonly fields: funcionarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for funcionario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__funcionarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    revisao<T extends funcionario$revisaoArgs<ExtArgs> = {}>(args?: Subset<T, funcionario$revisaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$revisaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the funcionario model
   */
  interface funcionarioFieldRefs {
    readonly cpf: FieldRef<"funcionario", 'BigInt'>
    readonly nome: FieldRef<"funcionario", 'String'>
    readonly telefone: FieldRef<"funcionario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * funcionario findUnique
   */
  export type funcionarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionario
     */
    omit?: funcionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionarioInclude<ExtArgs> | null
    /**
     * Filter, which funcionario to fetch.
     */
    where: funcionarioWhereUniqueInput
  }

  /**
   * funcionario findUniqueOrThrow
   */
  export type funcionarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionario
     */
    omit?: funcionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionarioInclude<ExtArgs> | null
    /**
     * Filter, which funcionario to fetch.
     */
    where: funcionarioWhereUniqueInput
  }

  /**
   * funcionario findFirst
   */
  export type funcionarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionario
     */
    omit?: funcionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionarioInclude<ExtArgs> | null
    /**
     * Filter, which funcionario to fetch.
     */
    where?: funcionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of funcionarios to fetch.
     */
    orderBy?: funcionarioOrderByWithRelationInput | funcionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for funcionarios.
     */
    cursor?: funcionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of funcionarios.
     */
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * funcionario findFirstOrThrow
   */
  export type funcionarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionario
     */
    omit?: funcionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionarioInclude<ExtArgs> | null
    /**
     * Filter, which funcionario to fetch.
     */
    where?: funcionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of funcionarios to fetch.
     */
    orderBy?: funcionarioOrderByWithRelationInput | funcionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for funcionarios.
     */
    cursor?: funcionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of funcionarios.
     */
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * funcionario findMany
   */
  export type funcionarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionario
     */
    omit?: funcionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionarioInclude<ExtArgs> | null
    /**
     * Filter, which funcionarios to fetch.
     */
    where?: funcionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of funcionarios to fetch.
     */
    orderBy?: funcionarioOrderByWithRelationInput | funcionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing funcionarios.
     */
    cursor?: funcionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` funcionarios.
     */
    skip?: number
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * funcionario create
   */
  export type funcionarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionario
     */
    omit?: funcionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionarioInclude<ExtArgs> | null
    /**
     * The data needed to create a funcionario.
     */
    data: XOR<funcionarioCreateInput, funcionarioUncheckedCreateInput>
  }

  /**
   * funcionario createMany
   */
  export type funcionarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many funcionarios.
     */
    data: funcionarioCreateManyInput | funcionarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * funcionario createManyAndReturn
   */
  export type funcionarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the funcionario
     */
    omit?: funcionarioOmit<ExtArgs> | null
    /**
     * The data used to create many funcionarios.
     */
    data: funcionarioCreateManyInput | funcionarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * funcionario update
   */
  export type funcionarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionario
     */
    omit?: funcionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionarioInclude<ExtArgs> | null
    /**
     * The data needed to update a funcionario.
     */
    data: XOR<funcionarioUpdateInput, funcionarioUncheckedUpdateInput>
    /**
     * Choose, which funcionario to update.
     */
    where: funcionarioWhereUniqueInput
  }

  /**
   * funcionario updateMany
   */
  export type funcionarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update funcionarios.
     */
    data: XOR<funcionarioUpdateManyMutationInput, funcionarioUncheckedUpdateManyInput>
    /**
     * Filter which funcionarios to update
     */
    where?: funcionarioWhereInput
    /**
     * Limit how many funcionarios to update.
     */
    limit?: number
  }

  /**
   * funcionario updateManyAndReturn
   */
  export type funcionarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the funcionario
     */
    omit?: funcionarioOmit<ExtArgs> | null
    /**
     * The data used to update funcionarios.
     */
    data: XOR<funcionarioUpdateManyMutationInput, funcionarioUncheckedUpdateManyInput>
    /**
     * Filter which funcionarios to update
     */
    where?: funcionarioWhereInput
    /**
     * Limit how many funcionarios to update.
     */
    limit?: number
  }

  /**
   * funcionario upsert
   */
  export type funcionarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionario
     */
    omit?: funcionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionarioInclude<ExtArgs> | null
    /**
     * The filter to search for the funcionario to update in case it exists.
     */
    where: funcionarioWhereUniqueInput
    /**
     * In case the funcionario found by the `where` argument doesn't exist, create a new funcionario with this data.
     */
    create: XOR<funcionarioCreateInput, funcionarioUncheckedCreateInput>
    /**
     * In case the funcionario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<funcionarioUpdateInput, funcionarioUncheckedUpdateInput>
  }

  /**
   * funcionario delete
   */
  export type funcionarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionario
     */
    omit?: funcionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionarioInclude<ExtArgs> | null
    /**
     * Filter which funcionario to delete.
     */
    where: funcionarioWhereUniqueInput
  }

  /**
   * funcionario deleteMany
   */
  export type funcionarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which funcionarios to delete
     */
    where?: funcionarioWhereInput
    /**
     * Limit how many funcionarios to delete.
     */
    limit?: number
  }

  /**
   * funcionario.revisao
   */
  export type funcionario$revisaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the revisao
     */
    select?: revisaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the revisao
     */
    omit?: revisaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: revisaoInclude<ExtArgs> | null
    where?: revisaoWhereInput
    orderBy?: revisaoOrderByWithRelationInput | revisaoOrderByWithRelationInput[]
    cursor?: revisaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RevisaoScalarFieldEnum | RevisaoScalarFieldEnum[]
  }

  /**
   * funcionario without action
   */
  export type funcionarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionario
     */
    omit?: funcionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionarioInclude<ExtArgs> | null
  }


  /**
   * Model revisao
   */

  export type AggregateRevisao = {
    _count: RevisaoCountAggregateOutputType | null
    _avg: RevisaoAvgAggregateOutputType | null
    _sum: RevisaoSumAggregateOutputType | null
    _min: RevisaoMinAggregateOutputType | null
    _max: RevisaoMaxAggregateOutputType | null
  }

  export type RevisaoAvgAggregateOutputType = {
    id_revisao: number | null
    cpf_funcionario: number | null
  }

  export type RevisaoSumAggregateOutputType = {
    id_revisao: number | null
    cpf_funcionario: bigint | null
  }

  export type RevisaoMinAggregateOutputType = {
    id_revisao: number | null
    cpf_funcionario: bigint | null
    placa_veiculo: string | null
    data_revisao: Date | null
    data_prox_revisao: Date | null
  }

  export type RevisaoMaxAggregateOutputType = {
    id_revisao: number | null
    cpf_funcionario: bigint | null
    placa_veiculo: string | null
    data_revisao: Date | null
    data_prox_revisao: Date | null
  }

  export type RevisaoCountAggregateOutputType = {
    id_revisao: number
    cpf_funcionario: number
    placa_veiculo: number
    data_revisao: number
    data_prox_revisao: number
    _all: number
  }


  export type RevisaoAvgAggregateInputType = {
    id_revisao?: true
    cpf_funcionario?: true
  }

  export type RevisaoSumAggregateInputType = {
    id_revisao?: true
    cpf_funcionario?: true
  }

  export type RevisaoMinAggregateInputType = {
    id_revisao?: true
    cpf_funcionario?: true
    placa_veiculo?: true
    data_revisao?: true
    data_prox_revisao?: true
  }

  export type RevisaoMaxAggregateInputType = {
    id_revisao?: true
    cpf_funcionario?: true
    placa_veiculo?: true
    data_revisao?: true
    data_prox_revisao?: true
  }

  export type RevisaoCountAggregateInputType = {
    id_revisao?: true
    cpf_funcionario?: true
    placa_veiculo?: true
    data_revisao?: true
    data_prox_revisao?: true
    _all?: true
  }

  export type RevisaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which revisao to aggregate.
     */
    where?: revisaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of revisaos to fetch.
     */
    orderBy?: revisaoOrderByWithRelationInput | revisaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: revisaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` revisaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` revisaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned revisaos
    **/
    _count?: true | RevisaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RevisaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RevisaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RevisaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RevisaoMaxAggregateInputType
  }

  export type GetRevisaoAggregateType<T extends RevisaoAggregateArgs> = {
        [P in keyof T & keyof AggregateRevisao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRevisao[P]>
      : GetScalarType<T[P], AggregateRevisao[P]>
  }




  export type revisaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: revisaoWhereInput
    orderBy?: revisaoOrderByWithAggregationInput | revisaoOrderByWithAggregationInput[]
    by: RevisaoScalarFieldEnum[] | RevisaoScalarFieldEnum
    having?: revisaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RevisaoCountAggregateInputType | true
    _avg?: RevisaoAvgAggregateInputType
    _sum?: RevisaoSumAggregateInputType
    _min?: RevisaoMinAggregateInputType
    _max?: RevisaoMaxAggregateInputType
  }

  export type RevisaoGroupByOutputType = {
    id_revisao: number
    cpf_funcionario: bigint
    placa_veiculo: string
    data_revisao: Date
    data_prox_revisao: Date
    _count: RevisaoCountAggregateOutputType | null
    _avg: RevisaoAvgAggregateOutputType | null
    _sum: RevisaoSumAggregateOutputType | null
    _min: RevisaoMinAggregateOutputType | null
    _max: RevisaoMaxAggregateOutputType | null
  }

  type GetRevisaoGroupByPayload<T extends revisaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RevisaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RevisaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RevisaoGroupByOutputType[P]>
            : GetScalarType<T[P], RevisaoGroupByOutputType[P]>
        }
      >
    >


  export type revisaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_revisao?: boolean
    cpf_funcionario?: boolean
    placa_veiculo?: boolean
    data_revisao?: boolean
    data_prox_revisao?: boolean
    funcionario?: boolean | funcionarioDefaultArgs<ExtArgs>
    veiculo?: boolean | veiculoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["revisao"]>

  export type revisaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_revisao?: boolean
    cpf_funcionario?: boolean
    placa_veiculo?: boolean
    data_revisao?: boolean
    data_prox_revisao?: boolean
    funcionario?: boolean | funcionarioDefaultArgs<ExtArgs>
    veiculo?: boolean | veiculoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["revisao"]>

  export type revisaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_revisao?: boolean
    cpf_funcionario?: boolean
    placa_veiculo?: boolean
    data_revisao?: boolean
    data_prox_revisao?: boolean
    funcionario?: boolean | funcionarioDefaultArgs<ExtArgs>
    veiculo?: boolean | veiculoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["revisao"]>

  export type revisaoSelectScalar = {
    id_revisao?: boolean
    cpf_funcionario?: boolean
    placa_veiculo?: boolean
    data_revisao?: boolean
    data_prox_revisao?: boolean
  }

  export type revisaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_revisao" | "cpf_funcionario" | "placa_veiculo" | "data_revisao" | "data_prox_revisao", ExtArgs["result"]["revisao"]>
  export type revisaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    funcionario?: boolean | funcionarioDefaultArgs<ExtArgs>
    veiculo?: boolean | veiculoDefaultArgs<ExtArgs>
  }
  export type revisaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    funcionario?: boolean | funcionarioDefaultArgs<ExtArgs>
    veiculo?: boolean | veiculoDefaultArgs<ExtArgs>
  }
  export type revisaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    funcionario?: boolean | funcionarioDefaultArgs<ExtArgs>
    veiculo?: boolean | veiculoDefaultArgs<ExtArgs>
  }

  export type $revisaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "revisao"
    objects: {
      funcionario: Prisma.$funcionarioPayload<ExtArgs>
      veiculo: Prisma.$veiculoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_revisao: number
      cpf_funcionario: bigint
      placa_veiculo: string
      data_revisao: Date
      data_prox_revisao: Date
    }, ExtArgs["result"]["revisao"]>
    composites: {}
  }

  type revisaoGetPayload<S extends boolean | null | undefined | revisaoDefaultArgs> = $Result.GetResult<Prisma.$revisaoPayload, S>

  type revisaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<revisaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RevisaoCountAggregateInputType | true
    }

  export interface revisaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['revisao'], meta: { name: 'revisao' } }
    /**
     * Find zero or one Revisao that matches the filter.
     * @param {revisaoFindUniqueArgs} args - Arguments to find a Revisao
     * @example
     * // Get one Revisao
     * const revisao = await prisma.revisao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends revisaoFindUniqueArgs>(args: SelectSubset<T, revisaoFindUniqueArgs<ExtArgs>>): Prisma__revisaoClient<$Result.GetResult<Prisma.$revisaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Revisao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {revisaoFindUniqueOrThrowArgs} args - Arguments to find a Revisao
     * @example
     * // Get one Revisao
     * const revisao = await prisma.revisao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends revisaoFindUniqueOrThrowArgs>(args: SelectSubset<T, revisaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__revisaoClient<$Result.GetResult<Prisma.$revisaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Revisao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {revisaoFindFirstArgs} args - Arguments to find a Revisao
     * @example
     * // Get one Revisao
     * const revisao = await prisma.revisao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends revisaoFindFirstArgs>(args?: SelectSubset<T, revisaoFindFirstArgs<ExtArgs>>): Prisma__revisaoClient<$Result.GetResult<Prisma.$revisaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Revisao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {revisaoFindFirstOrThrowArgs} args - Arguments to find a Revisao
     * @example
     * // Get one Revisao
     * const revisao = await prisma.revisao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends revisaoFindFirstOrThrowArgs>(args?: SelectSubset<T, revisaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__revisaoClient<$Result.GetResult<Prisma.$revisaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Revisaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {revisaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Revisaos
     * const revisaos = await prisma.revisao.findMany()
     * 
     * // Get first 10 Revisaos
     * const revisaos = await prisma.revisao.findMany({ take: 10 })
     * 
     * // Only select the `id_revisao`
     * const revisaoWithId_revisaoOnly = await prisma.revisao.findMany({ select: { id_revisao: true } })
     * 
     */
    findMany<T extends revisaoFindManyArgs>(args?: SelectSubset<T, revisaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$revisaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Revisao.
     * @param {revisaoCreateArgs} args - Arguments to create a Revisao.
     * @example
     * // Create one Revisao
     * const Revisao = await prisma.revisao.create({
     *   data: {
     *     // ... data to create a Revisao
     *   }
     * })
     * 
     */
    create<T extends revisaoCreateArgs>(args: SelectSubset<T, revisaoCreateArgs<ExtArgs>>): Prisma__revisaoClient<$Result.GetResult<Prisma.$revisaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Revisaos.
     * @param {revisaoCreateManyArgs} args - Arguments to create many Revisaos.
     * @example
     * // Create many Revisaos
     * const revisao = await prisma.revisao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends revisaoCreateManyArgs>(args?: SelectSubset<T, revisaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Revisaos and returns the data saved in the database.
     * @param {revisaoCreateManyAndReturnArgs} args - Arguments to create many Revisaos.
     * @example
     * // Create many Revisaos
     * const revisao = await prisma.revisao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Revisaos and only return the `id_revisao`
     * const revisaoWithId_revisaoOnly = await prisma.revisao.createManyAndReturn({
     *   select: { id_revisao: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends revisaoCreateManyAndReturnArgs>(args?: SelectSubset<T, revisaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$revisaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Revisao.
     * @param {revisaoDeleteArgs} args - Arguments to delete one Revisao.
     * @example
     * // Delete one Revisao
     * const Revisao = await prisma.revisao.delete({
     *   where: {
     *     // ... filter to delete one Revisao
     *   }
     * })
     * 
     */
    delete<T extends revisaoDeleteArgs>(args: SelectSubset<T, revisaoDeleteArgs<ExtArgs>>): Prisma__revisaoClient<$Result.GetResult<Prisma.$revisaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Revisao.
     * @param {revisaoUpdateArgs} args - Arguments to update one Revisao.
     * @example
     * // Update one Revisao
     * const revisao = await prisma.revisao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends revisaoUpdateArgs>(args: SelectSubset<T, revisaoUpdateArgs<ExtArgs>>): Prisma__revisaoClient<$Result.GetResult<Prisma.$revisaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Revisaos.
     * @param {revisaoDeleteManyArgs} args - Arguments to filter Revisaos to delete.
     * @example
     * // Delete a few Revisaos
     * const { count } = await prisma.revisao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends revisaoDeleteManyArgs>(args?: SelectSubset<T, revisaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Revisaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {revisaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Revisaos
     * const revisao = await prisma.revisao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends revisaoUpdateManyArgs>(args: SelectSubset<T, revisaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Revisaos and returns the data updated in the database.
     * @param {revisaoUpdateManyAndReturnArgs} args - Arguments to update many Revisaos.
     * @example
     * // Update many Revisaos
     * const revisao = await prisma.revisao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Revisaos and only return the `id_revisao`
     * const revisaoWithId_revisaoOnly = await prisma.revisao.updateManyAndReturn({
     *   select: { id_revisao: true },
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
    updateManyAndReturn<T extends revisaoUpdateManyAndReturnArgs>(args: SelectSubset<T, revisaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$revisaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Revisao.
     * @param {revisaoUpsertArgs} args - Arguments to update or create a Revisao.
     * @example
     * // Update or create a Revisao
     * const revisao = await prisma.revisao.upsert({
     *   create: {
     *     // ... data to create a Revisao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Revisao we want to update
     *   }
     * })
     */
    upsert<T extends revisaoUpsertArgs>(args: SelectSubset<T, revisaoUpsertArgs<ExtArgs>>): Prisma__revisaoClient<$Result.GetResult<Prisma.$revisaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Revisaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {revisaoCountArgs} args - Arguments to filter Revisaos to count.
     * @example
     * // Count the number of Revisaos
     * const count = await prisma.revisao.count({
     *   where: {
     *     // ... the filter for the Revisaos we want to count
     *   }
     * })
    **/
    count<T extends revisaoCountArgs>(
      args?: Subset<T, revisaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RevisaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Revisao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevisaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RevisaoAggregateArgs>(args: Subset<T, RevisaoAggregateArgs>): Prisma.PrismaPromise<GetRevisaoAggregateType<T>>

    /**
     * Group by Revisao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {revisaoGroupByArgs} args - Group by arguments.
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
      T extends revisaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: revisaoGroupByArgs['orderBy'] }
        : { orderBy?: revisaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, revisaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRevisaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the revisao model
   */
  readonly fields: revisaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for revisao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__revisaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    funcionario<T extends funcionarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, funcionarioDefaultArgs<ExtArgs>>): Prisma__funcionarioClient<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    veiculo<T extends veiculoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, veiculoDefaultArgs<ExtArgs>>): Prisma__veiculoClient<$Result.GetResult<Prisma.$veiculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the revisao model
   */
  interface revisaoFieldRefs {
    readonly id_revisao: FieldRef<"revisao", 'Int'>
    readonly cpf_funcionario: FieldRef<"revisao", 'BigInt'>
    readonly placa_veiculo: FieldRef<"revisao", 'String'>
    readonly data_revisao: FieldRef<"revisao", 'DateTime'>
    readonly data_prox_revisao: FieldRef<"revisao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * revisao findUnique
   */
  export type revisaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the revisao
     */
    select?: revisaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the revisao
     */
    omit?: revisaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: revisaoInclude<ExtArgs> | null
    /**
     * Filter, which revisao to fetch.
     */
    where: revisaoWhereUniqueInput
  }

  /**
   * revisao findUniqueOrThrow
   */
  export type revisaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the revisao
     */
    select?: revisaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the revisao
     */
    omit?: revisaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: revisaoInclude<ExtArgs> | null
    /**
     * Filter, which revisao to fetch.
     */
    where: revisaoWhereUniqueInput
  }

  /**
   * revisao findFirst
   */
  export type revisaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the revisao
     */
    select?: revisaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the revisao
     */
    omit?: revisaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: revisaoInclude<ExtArgs> | null
    /**
     * Filter, which revisao to fetch.
     */
    where?: revisaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of revisaos to fetch.
     */
    orderBy?: revisaoOrderByWithRelationInput | revisaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for revisaos.
     */
    cursor?: revisaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` revisaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` revisaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of revisaos.
     */
    distinct?: RevisaoScalarFieldEnum | RevisaoScalarFieldEnum[]
  }

  /**
   * revisao findFirstOrThrow
   */
  export type revisaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the revisao
     */
    select?: revisaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the revisao
     */
    omit?: revisaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: revisaoInclude<ExtArgs> | null
    /**
     * Filter, which revisao to fetch.
     */
    where?: revisaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of revisaos to fetch.
     */
    orderBy?: revisaoOrderByWithRelationInput | revisaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for revisaos.
     */
    cursor?: revisaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` revisaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` revisaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of revisaos.
     */
    distinct?: RevisaoScalarFieldEnum | RevisaoScalarFieldEnum[]
  }

  /**
   * revisao findMany
   */
  export type revisaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the revisao
     */
    select?: revisaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the revisao
     */
    omit?: revisaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: revisaoInclude<ExtArgs> | null
    /**
     * Filter, which revisaos to fetch.
     */
    where?: revisaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of revisaos to fetch.
     */
    orderBy?: revisaoOrderByWithRelationInput | revisaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing revisaos.
     */
    cursor?: revisaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` revisaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` revisaos.
     */
    skip?: number
    distinct?: RevisaoScalarFieldEnum | RevisaoScalarFieldEnum[]
  }

  /**
   * revisao create
   */
  export type revisaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the revisao
     */
    select?: revisaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the revisao
     */
    omit?: revisaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: revisaoInclude<ExtArgs> | null
    /**
     * The data needed to create a revisao.
     */
    data: XOR<revisaoCreateInput, revisaoUncheckedCreateInput>
  }

  /**
   * revisao createMany
   */
  export type revisaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many revisaos.
     */
    data: revisaoCreateManyInput | revisaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * revisao createManyAndReturn
   */
  export type revisaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the revisao
     */
    select?: revisaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the revisao
     */
    omit?: revisaoOmit<ExtArgs> | null
    /**
     * The data used to create many revisaos.
     */
    data: revisaoCreateManyInput | revisaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: revisaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * revisao update
   */
  export type revisaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the revisao
     */
    select?: revisaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the revisao
     */
    omit?: revisaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: revisaoInclude<ExtArgs> | null
    /**
     * The data needed to update a revisao.
     */
    data: XOR<revisaoUpdateInput, revisaoUncheckedUpdateInput>
    /**
     * Choose, which revisao to update.
     */
    where: revisaoWhereUniqueInput
  }

  /**
   * revisao updateMany
   */
  export type revisaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update revisaos.
     */
    data: XOR<revisaoUpdateManyMutationInput, revisaoUncheckedUpdateManyInput>
    /**
     * Filter which revisaos to update
     */
    where?: revisaoWhereInput
    /**
     * Limit how many revisaos to update.
     */
    limit?: number
  }

  /**
   * revisao updateManyAndReturn
   */
  export type revisaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the revisao
     */
    select?: revisaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the revisao
     */
    omit?: revisaoOmit<ExtArgs> | null
    /**
     * The data used to update revisaos.
     */
    data: XOR<revisaoUpdateManyMutationInput, revisaoUncheckedUpdateManyInput>
    /**
     * Filter which revisaos to update
     */
    where?: revisaoWhereInput
    /**
     * Limit how many revisaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: revisaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * revisao upsert
   */
  export type revisaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the revisao
     */
    select?: revisaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the revisao
     */
    omit?: revisaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: revisaoInclude<ExtArgs> | null
    /**
     * The filter to search for the revisao to update in case it exists.
     */
    where: revisaoWhereUniqueInput
    /**
     * In case the revisao found by the `where` argument doesn't exist, create a new revisao with this data.
     */
    create: XOR<revisaoCreateInput, revisaoUncheckedCreateInput>
    /**
     * In case the revisao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<revisaoUpdateInput, revisaoUncheckedUpdateInput>
  }

  /**
   * revisao delete
   */
  export type revisaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the revisao
     */
    select?: revisaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the revisao
     */
    omit?: revisaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: revisaoInclude<ExtArgs> | null
    /**
     * Filter which revisao to delete.
     */
    where: revisaoWhereUniqueInput
  }

  /**
   * revisao deleteMany
   */
  export type revisaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which revisaos to delete
     */
    where?: revisaoWhereInput
    /**
     * Limit how many revisaos to delete.
     */
    limit?: number
  }

  /**
   * revisao without action
   */
  export type revisaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the revisao
     */
    select?: revisaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the revisao
     */
    omit?: revisaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: revisaoInclude<ExtArgs> | null
  }


  /**
   * Model veiculo
   */

  export type AggregateVeiculo = {
    _count: VeiculoCountAggregateOutputType | null
    _avg: VeiculoAvgAggregateOutputType | null
    _sum: VeiculoSumAggregateOutputType | null
    _min: VeiculoMinAggregateOutputType | null
    _max: VeiculoMaxAggregateOutputType | null
  }

  export type VeiculoAvgAggregateOutputType = {
    quilometragem: number | null
  }

  export type VeiculoSumAggregateOutputType = {
    quilometragem: bigint | null
  }

  export type VeiculoMinAggregateOutputType = {
    placa: string | null
    quilometragem: bigint | null
    cor: string | null
    modelo: string | null
    marca: string | null
    tipo: $Enums.tipo_veiculo | null
  }

  export type VeiculoMaxAggregateOutputType = {
    placa: string | null
    quilometragem: bigint | null
    cor: string | null
    modelo: string | null
    marca: string | null
    tipo: $Enums.tipo_veiculo | null
  }

  export type VeiculoCountAggregateOutputType = {
    placa: number
    quilometragem: number
    cor: number
    modelo: number
    marca: number
    tipo: number
    _all: number
  }


  export type VeiculoAvgAggregateInputType = {
    quilometragem?: true
  }

  export type VeiculoSumAggregateInputType = {
    quilometragem?: true
  }

  export type VeiculoMinAggregateInputType = {
    placa?: true
    quilometragem?: true
    cor?: true
    modelo?: true
    marca?: true
    tipo?: true
  }

  export type VeiculoMaxAggregateInputType = {
    placa?: true
    quilometragem?: true
    cor?: true
    modelo?: true
    marca?: true
    tipo?: true
  }

  export type VeiculoCountAggregateInputType = {
    placa?: true
    quilometragem?: true
    cor?: true
    modelo?: true
    marca?: true
    tipo?: true
    _all?: true
  }

  export type VeiculoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which veiculo to aggregate.
     */
    where?: veiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of veiculos to fetch.
     */
    orderBy?: veiculoOrderByWithRelationInput | veiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: veiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` veiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` veiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned veiculos
    **/
    _count?: true | VeiculoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VeiculoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VeiculoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VeiculoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VeiculoMaxAggregateInputType
  }

  export type GetVeiculoAggregateType<T extends VeiculoAggregateArgs> = {
        [P in keyof T & keyof AggregateVeiculo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVeiculo[P]>
      : GetScalarType<T[P], AggregateVeiculo[P]>
  }




  export type veiculoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: veiculoWhereInput
    orderBy?: veiculoOrderByWithAggregationInput | veiculoOrderByWithAggregationInput[]
    by: VeiculoScalarFieldEnum[] | VeiculoScalarFieldEnum
    having?: veiculoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VeiculoCountAggregateInputType | true
    _avg?: VeiculoAvgAggregateInputType
    _sum?: VeiculoSumAggregateInputType
    _min?: VeiculoMinAggregateInputType
    _max?: VeiculoMaxAggregateInputType
  }

  export type VeiculoGroupByOutputType = {
    placa: string
    quilometragem: bigint
    cor: string
    modelo: string
    marca: string
    tipo: $Enums.tipo_veiculo
    _count: VeiculoCountAggregateOutputType | null
    _avg: VeiculoAvgAggregateOutputType | null
    _sum: VeiculoSumAggregateOutputType | null
    _min: VeiculoMinAggregateOutputType | null
    _max: VeiculoMaxAggregateOutputType | null
  }

  type GetVeiculoGroupByPayload<T extends veiculoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VeiculoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VeiculoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VeiculoGroupByOutputType[P]>
            : GetScalarType<T[P], VeiculoGroupByOutputType[P]>
        }
      >
    >


  export type veiculoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    placa?: boolean
    quilometragem?: boolean
    cor?: boolean
    modelo?: boolean
    marca?: boolean
    tipo?: boolean
    revisao?: boolean | veiculo$revisaoArgs<ExtArgs>
    _count?: boolean | VeiculoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["veiculo"]>

  export type veiculoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    placa?: boolean
    quilometragem?: boolean
    cor?: boolean
    modelo?: boolean
    marca?: boolean
    tipo?: boolean
  }, ExtArgs["result"]["veiculo"]>

  export type veiculoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    placa?: boolean
    quilometragem?: boolean
    cor?: boolean
    modelo?: boolean
    marca?: boolean
    tipo?: boolean
  }, ExtArgs["result"]["veiculo"]>

  export type veiculoSelectScalar = {
    placa?: boolean
    quilometragem?: boolean
    cor?: boolean
    modelo?: boolean
    marca?: boolean
    tipo?: boolean
  }

  export type veiculoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"placa" | "quilometragem" | "cor" | "modelo" | "marca" | "tipo", ExtArgs["result"]["veiculo"]>
  export type veiculoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    revisao?: boolean | veiculo$revisaoArgs<ExtArgs>
    _count?: boolean | VeiculoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type veiculoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type veiculoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $veiculoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "veiculo"
    objects: {
      revisao: Prisma.$revisaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      placa: string
      quilometragem: bigint
      cor: string
      modelo: string
      marca: string
      tipo: $Enums.tipo_veiculo
    }, ExtArgs["result"]["veiculo"]>
    composites: {}
  }

  type veiculoGetPayload<S extends boolean | null | undefined | veiculoDefaultArgs> = $Result.GetResult<Prisma.$veiculoPayload, S>

  type veiculoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<veiculoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VeiculoCountAggregateInputType | true
    }

  export interface veiculoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['veiculo'], meta: { name: 'veiculo' } }
    /**
     * Find zero or one Veiculo that matches the filter.
     * @param {veiculoFindUniqueArgs} args - Arguments to find a Veiculo
     * @example
     * // Get one Veiculo
     * const veiculo = await prisma.veiculo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends veiculoFindUniqueArgs>(args: SelectSubset<T, veiculoFindUniqueArgs<ExtArgs>>): Prisma__veiculoClient<$Result.GetResult<Prisma.$veiculoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Veiculo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {veiculoFindUniqueOrThrowArgs} args - Arguments to find a Veiculo
     * @example
     * // Get one Veiculo
     * const veiculo = await prisma.veiculo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends veiculoFindUniqueOrThrowArgs>(args: SelectSubset<T, veiculoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__veiculoClient<$Result.GetResult<Prisma.$veiculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Veiculo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {veiculoFindFirstArgs} args - Arguments to find a Veiculo
     * @example
     * // Get one Veiculo
     * const veiculo = await prisma.veiculo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends veiculoFindFirstArgs>(args?: SelectSubset<T, veiculoFindFirstArgs<ExtArgs>>): Prisma__veiculoClient<$Result.GetResult<Prisma.$veiculoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Veiculo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {veiculoFindFirstOrThrowArgs} args - Arguments to find a Veiculo
     * @example
     * // Get one Veiculo
     * const veiculo = await prisma.veiculo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends veiculoFindFirstOrThrowArgs>(args?: SelectSubset<T, veiculoFindFirstOrThrowArgs<ExtArgs>>): Prisma__veiculoClient<$Result.GetResult<Prisma.$veiculoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Veiculos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {veiculoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Veiculos
     * const veiculos = await prisma.veiculo.findMany()
     * 
     * // Get first 10 Veiculos
     * const veiculos = await prisma.veiculo.findMany({ take: 10 })
     * 
     * // Only select the `placa`
     * const veiculoWithPlacaOnly = await prisma.veiculo.findMany({ select: { placa: true } })
     * 
     */
    findMany<T extends veiculoFindManyArgs>(args?: SelectSubset<T, veiculoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$veiculoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Veiculo.
     * @param {veiculoCreateArgs} args - Arguments to create a Veiculo.
     * @example
     * // Create one Veiculo
     * const Veiculo = await prisma.veiculo.create({
     *   data: {
     *     // ... data to create a Veiculo
     *   }
     * })
     * 
     */
    create<T extends veiculoCreateArgs>(args: SelectSubset<T, veiculoCreateArgs<ExtArgs>>): Prisma__veiculoClient<$Result.GetResult<Prisma.$veiculoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Veiculos.
     * @param {veiculoCreateManyArgs} args - Arguments to create many Veiculos.
     * @example
     * // Create many Veiculos
     * const veiculo = await prisma.veiculo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends veiculoCreateManyArgs>(args?: SelectSubset<T, veiculoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Veiculos and returns the data saved in the database.
     * @param {veiculoCreateManyAndReturnArgs} args - Arguments to create many Veiculos.
     * @example
     * // Create many Veiculos
     * const veiculo = await prisma.veiculo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Veiculos and only return the `placa`
     * const veiculoWithPlacaOnly = await prisma.veiculo.createManyAndReturn({
     *   select: { placa: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends veiculoCreateManyAndReturnArgs>(args?: SelectSubset<T, veiculoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$veiculoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Veiculo.
     * @param {veiculoDeleteArgs} args - Arguments to delete one Veiculo.
     * @example
     * // Delete one Veiculo
     * const Veiculo = await prisma.veiculo.delete({
     *   where: {
     *     // ... filter to delete one Veiculo
     *   }
     * })
     * 
     */
    delete<T extends veiculoDeleteArgs>(args: SelectSubset<T, veiculoDeleteArgs<ExtArgs>>): Prisma__veiculoClient<$Result.GetResult<Prisma.$veiculoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Veiculo.
     * @param {veiculoUpdateArgs} args - Arguments to update one Veiculo.
     * @example
     * // Update one Veiculo
     * const veiculo = await prisma.veiculo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends veiculoUpdateArgs>(args: SelectSubset<T, veiculoUpdateArgs<ExtArgs>>): Prisma__veiculoClient<$Result.GetResult<Prisma.$veiculoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Veiculos.
     * @param {veiculoDeleteManyArgs} args - Arguments to filter Veiculos to delete.
     * @example
     * // Delete a few Veiculos
     * const { count } = await prisma.veiculo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends veiculoDeleteManyArgs>(args?: SelectSubset<T, veiculoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Veiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {veiculoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Veiculos
     * const veiculo = await prisma.veiculo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends veiculoUpdateManyArgs>(args: SelectSubset<T, veiculoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Veiculos and returns the data updated in the database.
     * @param {veiculoUpdateManyAndReturnArgs} args - Arguments to update many Veiculos.
     * @example
     * // Update many Veiculos
     * const veiculo = await prisma.veiculo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Veiculos and only return the `placa`
     * const veiculoWithPlacaOnly = await prisma.veiculo.updateManyAndReturn({
     *   select: { placa: true },
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
    updateManyAndReturn<T extends veiculoUpdateManyAndReturnArgs>(args: SelectSubset<T, veiculoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$veiculoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Veiculo.
     * @param {veiculoUpsertArgs} args - Arguments to update or create a Veiculo.
     * @example
     * // Update or create a Veiculo
     * const veiculo = await prisma.veiculo.upsert({
     *   create: {
     *     // ... data to create a Veiculo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Veiculo we want to update
     *   }
     * })
     */
    upsert<T extends veiculoUpsertArgs>(args: SelectSubset<T, veiculoUpsertArgs<ExtArgs>>): Prisma__veiculoClient<$Result.GetResult<Prisma.$veiculoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Veiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {veiculoCountArgs} args - Arguments to filter Veiculos to count.
     * @example
     * // Count the number of Veiculos
     * const count = await prisma.veiculo.count({
     *   where: {
     *     // ... the filter for the Veiculos we want to count
     *   }
     * })
    **/
    count<T extends veiculoCountArgs>(
      args?: Subset<T, veiculoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VeiculoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Veiculo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VeiculoAggregateArgs>(args: Subset<T, VeiculoAggregateArgs>): Prisma.PrismaPromise<GetVeiculoAggregateType<T>>

    /**
     * Group by Veiculo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {veiculoGroupByArgs} args - Group by arguments.
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
      T extends veiculoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: veiculoGroupByArgs['orderBy'] }
        : { orderBy?: veiculoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, veiculoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVeiculoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the veiculo model
   */
  readonly fields: veiculoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for veiculo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__veiculoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    revisao<T extends veiculo$revisaoArgs<ExtArgs> = {}>(args?: Subset<T, veiculo$revisaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$revisaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the veiculo model
   */
  interface veiculoFieldRefs {
    readonly placa: FieldRef<"veiculo", 'String'>
    readonly quilometragem: FieldRef<"veiculo", 'BigInt'>
    readonly cor: FieldRef<"veiculo", 'String'>
    readonly modelo: FieldRef<"veiculo", 'String'>
    readonly marca: FieldRef<"veiculo", 'String'>
    readonly tipo: FieldRef<"veiculo", 'tipo_veiculo'>
  }
    

  // Custom InputTypes
  /**
   * veiculo findUnique
   */
  export type veiculoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veiculo
     */
    select?: veiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the veiculo
     */
    omit?: veiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: veiculoInclude<ExtArgs> | null
    /**
     * Filter, which veiculo to fetch.
     */
    where: veiculoWhereUniqueInput
  }

  /**
   * veiculo findUniqueOrThrow
   */
  export type veiculoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veiculo
     */
    select?: veiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the veiculo
     */
    omit?: veiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: veiculoInclude<ExtArgs> | null
    /**
     * Filter, which veiculo to fetch.
     */
    where: veiculoWhereUniqueInput
  }

  /**
   * veiculo findFirst
   */
  export type veiculoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veiculo
     */
    select?: veiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the veiculo
     */
    omit?: veiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: veiculoInclude<ExtArgs> | null
    /**
     * Filter, which veiculo to fetch.
     */
    where?: veiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of veiculos to fetch.
     */
    orderBy?: veiculoOrderByWithRelationInput | veiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for veiculos.
     */
    cursor?: veiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` veiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` veiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of veiculos.
     */
    distinct?: VeiculoScalarFieldEnum | VeiculoScalarFieldEnum[]
  }

  /**
   * veiculo findFirstOrThrow
   */
  export type veiculoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veiculo
     */
    select?: veiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the veiculo
     */
    omit?: veiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: veiculoInclude<ExtArgs> | null
    /**
     * Filter, which veiculo to fetch.
     */
    where?: veiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of veiculos to fetch.
     */
    orderBy?: veiculoOrderByWithRelationInput | veiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for veiculos.
     */
    cursor?: veiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` veiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` veiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of veiculos.
     */
    distinct?: VeiculoScalarFieldEnum | VeiculoScalarFieldEnum[]
  }

  /**
   * veiculo findMany
   */
  export type veiculoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veiculo
     */
    select?: veiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the veiculo
     */
    omit?: veiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: veiculoInclude<ExtArgs> | null
    /**
     * Filter, which veiculos to fetch.
     */
    where?: veiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of veiculos to fetch.
     */
    orderBy?: veiculoOrderByWithRelationInput | veiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing veiculos.
     */
    cursor?: veiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` veiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` veiculos.
     */
    skip?: number
    distinct?: VeiculoScalarFieldEnum | VeiculoScalarFieldEnum[]
  }

  /**
   * veiculo create
   */
  export type veiculoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veiculo
     */
    select?: veiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the veiculo
     */
    omit?: veiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: veiculoInclude<ExtArgs> | null
    /**
     * The data needed to create a veiculo.
     */
    data: XOR<veiculoCreateInput, veiculoUncheckedCreateInput>
  }

  /**
   * veiculo createMany
   */
  export type veiculoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many veiculos.
     */
    data: veiculoCreateManyInput | veiculoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * veiculo createManyAndReturn
   */
  export type veiculoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veiculo
     */
    select?: veiculoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the veiculo
     */
    omit?: veiculoOmit<ExtArgs> | null
    /**
     * The data used to create many veiculos.
     */
    data: veiculoCreateManyInput | veiculoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * veiculo update
   */
  export type veiculoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veiculo
     */
    select?: veiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the veiculo
     */
    omit?: veiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: veiculoInclude<ExtArgs> | null
    /**
     * The data needed to update a veiculo.
     */
    data: XOR<veiculoUpdateInput, veiculoUncheckedUpdateInput>
    /**
     * Choose, which veiculo to update.
     */
    where: veiculoWhereUniqueInput
  }

  /**
   * veiculo updateMany
   */
  export type veiculoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update veiculos.
     */
    data: XOR<veiculoUpdateManyMutationInput, veiculoUncheckedUpdateManyInput>
    /**
     * Filter which veiculos to update
     */
    where?: veiculoWhereInput
    /**
     * Limit how many veiculos to update.
     */
    limit?: number
  }

  /**
   * veiculo updateManyAndReturn
   */
  export type veiculoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veiculo
     */
    select?: veiculoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the veiculo
     */
    omit?: veiculoOmit<ExtArgs> | null
    /**
     * The data used to update veiculos.
     */
    data: XOR<veiculoUpdateManyMutationInput, veiculoUncheckedUpdateManyInput>
    /**
     * Filter which veiculos to update
     */
    where?: veiculoWhereInput
    /**
     * Limit how many veiculos to update.
     */
    limit?: number
  }

  /**
   * veiculo upsert
   */
  export type veiculoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veiculo
     */
    select?: veiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the veiculo
     */
    omit?: veiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: veiculoInclude<ExtArgs> | null
    /**
     * The filter to search for the veiculo to update in case it exists.
     */
    where: veiculoWhereUniqueInput
    /**
     * In case the veiculo found by the `where` argument doesn't exist, create a new veiculo with this data.
     */
    create: XOR<veiculoCreateInput, veiculoUncheckedCreateInput>
    /**
     * In case the veiculo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<veiculoUpdateInput, veiculoUncheckedUpdateInput>
  }

  /**
   * veiculo delete
   */
  export type veiculoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veiculo
     */
    select?: veiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the veiculo
     */
    omit?: veiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: veiculoInclude<ExtArgs> | null
    /**
     * Filter which veiculo to delete.
     */
    where: veiculoWhereUniqueInput
  }

  /**
   * veiculo deleteMany
   */
  export type veiculoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which veiculos to delete
     */
    where?: veiculoWhereInput
    /**
     * Limit how many veiculos to delete.
     */
    limit?: number
  }

  /**
   * veiculo.revisao
   */
  export type veiculo$revisaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the revisao
     */
    select?: revisaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the revisao
     */
    omit?: revisaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: revisaoInclude<ExtArgs> | null
    where?: revisaoWhereInput
    orderBy?: revisaoOrderByWithRelationInput | revisaoOrderByWithRelationInput[]
    cursor?: revisaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RevisaoScalarFieldEnum | RevisaoScalarFieldEnum[]
  }

  /**
   * veiculo without action
   */
  export type veiculoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veiculo
     */
    select?: veiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the veiculo
     */
    omit?: veiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: veiculoInclude<ExtArgs> | null
  }


  /**
   * Model cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteAvgAggregateOutputType = {
    cpf: number | null
  }

  export type ClienteSumAggregateOutputType = {
    cpf: bigint | null
  }

  export type ClienteMinAggregateOutputType = {
    cpf: bigint | null
    nome: string | null
    telefone: string | null
  }

  export type ClienteMaxAggregateOutputType = {
    cpf: bigint | null
    nome: string | null
    telefone: string | null
  }

  export type ClienteCountAggregateOutputType = {
    cpf: number
    nome: number
    telefone: number
    _all: number
  }


  export type ClienteAvgAggregateInputType = {
    cpf?: true
  }

  export type ClienteSumAggregateInputType = {
    cpf?: true
  }

  export type ClienteMinAggregateInputType = {
    cpf?: true
    nome?: true
    telefone?: true
  }

  export type ClienteMaxAggregateInputType = {
    cpf?: true
    nome?: true
    telefone?: true
  }

  export type ClienteCountAggregateInputType = {
    cpf?: true
    nome?: true
    telefone?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cliente to aggregate.
     */
    where?: clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clienteOrderByWithRelationInput | clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type clienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clienteWhereInput
    orderBy?: clienteOrderByWithAggregationInput | clienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: clienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _avg?: ClienteAvgAggregateInputType
    _sum?: ClienteSumAggregateInputType
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    cpf: bigint
    nome: string
    telefone: string | null
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends clienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type clienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cpf?: boolean
    nome?: boolean
    telefone?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type clienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cpf?: boolean
    nome?: boolean
    telefone?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type clienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cpf?: boolean
    nome?: boolean
    telefone?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type clienteSelectScalar = {
    cpf?: boolean
    nome?: boolean
    telefone?: boolean
  }

  export type clienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cpf" | "nome" | "telefone", ExtArgs["result"]["cliente"]>

  export type $clientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cliente"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      cpf: bigint
      nome: string
      telefone: string | null
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type clienteGetPayload<S extends boolean | null | undefined | clienteDefaultArgs> = $Result.GetResult<Prisma.$clientePayload, S>

  type clienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<clienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface clienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cliente'], meta: { name: 'cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {clienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends clienteFindUniqueArgs>(args: SelectSubset<T, clienteFindUniqueArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {clienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends clienteFindUniqueOrThrowArgs>(args: SelectSubset<T, clienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends clienteFindFirstArgs>(args?: SelectSubset<T, clienteFindFirstArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends clienteFindFirstOrThrowArgs>(args?: SelectSubset<T, clienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `cpf`
     * const clienteWithCpfOnly = await prisma.cliente.findMany({ select: { cpf: true } })
     * 
     */
    findMany<T extends clienteFindManyArgs>(args?: SelectSubset<T, clienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {clienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends clienteCreateArgs>(args: SelectSubset<T, clienteCreateArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {clienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends clienteCreateManyArgs>(args?: SelectSubset<T, clienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {clienteCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `cpf`
     * const clienteWithCpfOnly = await prisma.cliente.createManyAndReturn({
     *   select: { cpf: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends clienteCreateManyAndReturnArgs>(args?: SelectSubset<T, clienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cliente.
     * @param {clienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends clienteDeleteArgs>(args: SelectSubset<T, clienteDeleteArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {clienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends clienteUpdateArgs>(args: SelectSubset<T, clienteUpdateArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {clienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends clienteDeleteManyArgs>(args?: SelectSubset<T, clienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends clienteUpdateManyArgs>(args: SelectSubset<T, clienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes and returns the data updated in the database.
     * @param {clienteUpdateManyAndReturnArgs} args - Arguments to update many Clientes.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clientes and only return the `cpf`
     * const clienteWithCpfOnly = await prisma.cliente.updateManyAndReturn({
     *   select: { cpf: true },
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
    updateManyAndReturn<T extends clienteUpdateManyAndReturnArgs>(args: SelectSubset<T, clienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cliente.
     * @param {clienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends clienteUpsertArgs>(args: SelectSubset<T, clienteUpsertArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends clienteCountArgs>(
      args?: Subset<T, clienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteGroupByArgs} args - Group by arguments.
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
      T extends clienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clienteGroupByArgs['orderBy'] }
        : { orderBy?: clienteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, clienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cliente model
   */
  readonly fields: clienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the cliente model
   */
  interface clienteFieldRefs {
    readonly cpf: FieldRef<"cliente", 'BigInt'>
    readonly nome: FieldRef<"cliente", 'String'>
    readonly telefone: FieldRef<"cliente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * cliente findUnique
   */
  export type clienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Filter, which cliente to fetch.
     */
    where: clienteWhereUniqueInput
  }

  /**
   * cliente findUniqueOrThrow
   */
  export type clienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Filter, which cliente to fetch.
     */
    where: clienteWhereUniqueInput
  }

  /**
   * cliente findFirst
   */
  export type clienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Filter, which cliente to fetch.
     */
    where?: clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clienteOrderByWithRelationInput | clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clientes.
     */
    cursor?: clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * cliente findFirstOrThrow
   */
  export type clienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Filter, which cliente to fetch.
     */
    where?: clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clienteOrderByWithRelationInput | clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clientes.
     */
    cursor?: clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * cliente findMany
   */
  export type clienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where?: clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clienteOrderByWithRelationInput | clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing clientes.
     */
    cursor?: clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * cliente create
   */
  export type clienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * The data needed to create a cliente.
     */
    data: XOR<clienteCreateInput, clienteUncheckedCreateInput>
  }

  /**
   * cliente createMany
   */
  export type clienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clientes.
     */
    data: clienteCreateManyInput | clienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cliente createManyAndReturn
   */
  export type clienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * The data used to create many clientes.
     */
    data: clienteCreateManyInput | clienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cliente update
   */
  export type clienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * The data needed to update a cliente.
     */
    data: XOR<clienteUpdateInput, clienteUncheckedUpdateInput>
    /**
     * Choose, which cliente to update.
     */
    where: clienteWhereUniqueInput
  }

  /**
   * cliente updateMany
   */
  export type clienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clientes.
     */
    data: XOR<clienteUpdateManyMutationInput, clienteUncheckedUpdateManyInput>
    /**
     * Filter which clientes to update
     */
    where?: clienteWhereInput
    /**
     * Limit how many clientes to update.
     */
    limit?: number
  }

  /**
   * cliente updateManyAndReturn
   */
  export type clienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * The data used to update clientes.
     */
    data: XOR<clienteUpdateManyMutationInput, clienteUncheckedUpdateManyInput>
    /**
     * Filter which clientes to update
     */
    where?: clienteWhereInput
    /**
     * Limit how many clientes to update.
     */
    limit?: number
  }

  /**
   * cliente upsert
   */
  export type clienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * The filter to search for the cliente to update in case it exists.
     */
    where: clienteWhereUniqueInput
    /**
     * In case the cliente found by the `where` argument doesn't exist, create a new cliente with this data.
     */
    create: XOR<clienteCreateInput, clienteUncheckedCreateInput>
    /**
     * In case the cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clienteUpdateInput, clienteUncheckedUpdateInput>
  }

  /**
   * cliente delete
   */
  export type clienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Filter which cliente to delete.
     */
    where: clienteWhereUniqueInput
  }

  /**
   * cliente deleteMany
   */
  export type clienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clientes to delete
     */
    where?: clienteWhereInput
    /**
     * Limit how many clientes to delete.
     */
    limit?: number
  }

  /**
   * cliente without action
   */
  export type clienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
  }


  /**
   * Model usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id_usuario: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id_usuario: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id_usuario: number | null
    email: string | null
    senha: string | null
    tipo: $Enums.tipo_usuario | null
    ativo: boolean | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id_usuario: number | null
    email: string | null
    senha: string | null
    tipo: $Enums.tipo_usuario | null
    ativo: boolean | null
  }

  export type UsuarioCountAggregateOutputType = {
    id_usuario: number
    email: number
    senha: number
    tipo: number
    ativo: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id_usuario?: true
  }

  export type UsuarioSumAggregateInputType = {
    id_usuario?: true
  }

  export type UsuarioMinAggregateInputType = {
    id_usuario?: true
    email?: true
    senha?: true
    tipo?: true
    ativo?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id_usuario?: true
    email?: true
    senha?: true
    tipo?: true
    ativo?: true
  }

  export type UsuarioCountAggregateInputType = {
    id_usuario?: true
    email?: true
    senha?: true
    tipo?: true
    ativo?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuario to aggregate.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type usuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuarioWhereInput
    orderBy?: usuarioOrderByWithAggregationInput | usuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: usuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id_usuario: number
    email: string
    senha: string
    tipo: $Enums.tipo_usuario
    ativo: boolean
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends usuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type usuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    email?: boolean
    senha?: boolean
    tipo?: boolean
    ativo?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type usuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    email?: boolean
    senha?: boolean
    tipo?: boolean
    ativo?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type usuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    email?: boolean
    senha?: boolean
    tipo?: boolean
    ativo?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type usuarioSelectScalar = {
    id_usuario?: boolean
    email?: boolean
    senha?: boolean
    tipo?: boolean
    ativo?: boolean
  }

  export type usuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_usuario" | "email" | "senha" | "tipo" | "ativo", ExtArgs["result"]["usuario"]>

  export type $usuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuario"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: number
      email: string
      senha: string
      tipo: $Enums.tipo_usuario
      ativo: boolean
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type usuarioGetPayload<S extends boolean | null | undefined | usuarioDefaultArgs> = $Result.GetResult<Prisma.$usuarioPayload, S>

  type usuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface usuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuario'], meta: { name: 'usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {usuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuarioFindUniqueArgs>(args: SelectSubset<T, usuarioFindUniqueArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, usuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuarioFindFirstArgs>(args?: SelectSubset<T, usuarioFindFirstArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, usuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends usuarioFindManyArgs>(args?: SelectSubset<T, usuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {usuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends usuarioCreateArgs>(args: SelectSubset<T, usuarioCreateArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuarioCreateManyArgs>(args?: SelectSubset<T, usuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {usuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id_usuario: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, usuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {usuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends usuarioDeleteArgs>(args: SelectSubset<T, usuarioDeleteArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {usuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuarioUpdateArgs>(args: SelectSubset<T, usuarioUpdateArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuarioDeleteManyArgs>(args?: SelectSubset<T, usuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuarioUpdateManyArgs>(args: SelectSubset<T, usuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {usuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id_usuario: true },
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
    updateManyAndReturn<T extends usuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, usuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {usuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends usuarioUpsertArgs>(args: SelectSubset<T, usuarioUpsertArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuarioCountArgs>(
      args?: Subset<T, usuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioGroupByArgs} args - Group by arguments.
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
      T extends usuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuarioGroupByArgs['orderBy'] }
        : { orderBy?: usuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuario model
   */
  readonly fields: usuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the usuario model
   */
  interface usuarioFieldRefs {
    readonly id_usuario: FieldRef<"usuario", 'Int'>
    readonly email: FieldRef<"usuario", 'String'>
    readonly senha: FieldRef<"usuario", 'String'>
    readonly tipo: FieldRef<"usuario", 'tipo_usuario'>
    readonly ativo: FieldRef<"usuario", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * usuario findUnique
   */
  export type usuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario findUniqueOrThrow
   */
  export type usuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario findFirst
   */
  export type usuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario findFirstOrThrow
   */
  export type usuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario findMany
   */
  export type usuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario create
   */
  export type usuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * The data needed to create a usuario.
     */
    data: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
  }

  /**
   * usuario createMany
   */
  export type usuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuarioCreateManyInput | usuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuario createManyAndReturn
   */
  export type usuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * The data used to create many usuarios.
     */
    data: usuarioCreateManyInput | usuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuario update
   */
  export type usuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * The data needed to update a usuario.
     */
    data: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
    /**
     * Choose, which usuario to update.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario updateMany
   */
  export type usuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuarioUpdateManyMutationInput, usuarioUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuarioWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuario updateManyAndReturn
   */
  export type usuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuarioUpdateManyMutationInput, usuarioUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuarioWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuario upsert
   */
  export type usuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * The filter to search for the usuario to update in case it exists.
     */
    where: usuarioWhereUniqueInput
    /**
     * In case the usuario found by the `where` argument doesn't exist, create a new usuario with this data.
     */
    create: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
    /**
     * In case the usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
  }

  /**
   * usuario delete
   */
  export type usuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Filter which usuario to delete.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario deleteMany
   */
  export type usuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuarioWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuario without action
   */
  export type usuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
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


  export const FuncionarioScalarFieldEnum: {
    cpf: 'cpf',
    nome: 'nome',
    telefone: 'telefone'
  };

  export type FuncionarioScalarFieldEnum = (typeof FuncionarioScalarFieldEnum)[keyof typeof FuncionarioScalarFieldEnum]


  export const RevisaoScalarFieldEnum: {
    id_revisao: 'id_revisao',
    cpf_funcionario: 'cpf_funcionario',
    placa_veiculo: 'placa_veiculo',
    data_revisao: 'data_revisao',
    data_prox_revisao: 'data_prox_revisao'
  };

  export type RevisaoScalarFieldEnum = (typeof RevisaoScalarFieldEnum)[keyof typeof RevisaoScalarFieldEnum]


  export const VeiculoScalarFieldEnum: {
    placa: 'placa',
    quilometragem: 'quilometragem',
    cor: 'cor',
    modelo: 'modelo',
    marca: 'marca',
    tipo: 'tipo'
  };

  export type VeiculoScalarFieldEnum = (typeof VeiculoScalarFieldEnum)[keyof typeof VeiculoScalarFieldEnum]


  export const ClienteScalarFieldEnum: {
    cpf: 'cpf',
    nome: 'nome',
    telefone: 'telefone'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id_usuario: 'id_usuario',
    email: 'email',
    senha: 'senha',
    tipo: 'tipo',
    ativo: 'ativo'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


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
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'tipo_veiculo'
   */
  export type Enumtipo_veiculoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'tipo_veiculo'>
    


  /**
   * Reference to a field of type 'tipo_veiculo[]'
   */
  export type ListEnumtipo_veiculoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'tipo_veiculo[]'>
    


  /**
   * Reference to a field of type 'tipo_usuario'
   */
  export type Enumtipo_usuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'tipo_usuario'>
    


  /**
   * Reference to a field of type 'tipo_usuario[]'
   */
  export type ListEnumtipo_usuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'tipo_usuario[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type funcionarioWhereInput = {
    AND?: funcionarioWhereInput | funcionarioWhereInput[]
    OR?: funcionarioWhereInput[]
    NOT?: funcionarioWhereInput | funcionarioWhereInput[]
    cpf?: BigIntFilter<"funcionario"> | bigint | number
    nome?: StringFilter<"funcionario"> | string
    telefone?: StringNullableFilter<"funcionario"> | string | null
    revisao?: RevisaoListRelationFilter
  }

  export type funcionarioOrderByWithRelationInput = {
    cpf?: SortOrder
    nome?: SortOrder
    telefone?: SortOrderInput | SortOrder
    revisao?: revisaoOrderByRelationAggregateInput
  }

  export type funcionarioWhereUniqueInput = Prisma.AtLeast<{
    cpf?: bigint | number
    AND?: funcionarioWhereInput | funcionarioWhereInput[]
    OR?: funcionarioWhereInput[]
    NOT?: funcionarioWhereInput | funcionarioWhereInput[]
    nome?: StringFilter<"funcionario"> | string
    telefone?: StringNullableFilter<"funcionario"> | string | null
    revisao?: RevisaoListRelationFilter
  }, "cpf">

  export type funcionarioOrderByWithAggregationInput = {
    cpf?: SortOrder
    nome?: SortOrder
    telefone?: SortOrderInput | SortOrder
    _count?: funcionarioCountOrderByAggregateInput
    _avg?: funcionarioAvgOrderByAggregateInput
    _max?: funcionarioMaxOrderByAggregateInput
    _min?: funcionarioMinOrderByAggregateInput
    _sum?: funcionarioSumOrderByAggregateInput
  }

  export type funcionarioScalarWhereWithAggregatesInput = {
    AND?: funcionarioScalarWhereWithAggregatesInput | funcionarioScalarWhereWithAggregatesInput[]
    OR?: funcionarioScalarWhereWithAggregatesInput[]
    NOT?: funcionarioScalarWhereWithAggregatesInput | funcionarioScalarWhereWithAggregatesInput[]
    cpf?: BigIntWithAggregatesFilter<"funcionario"> | bigint | number
    nome?: StringWithAggregatesFilter<"funcionario"> | string
    telefone?: StringNullableWithAggregatesFilter<"funcionario"> | string | null
  }

  export type revisaoWhereInput = {
    AND?: revisaoWhereInput | revisaoWhereInput[]
    OR?: revisaoWhereInput[]
    NOT?: revisaoWhereInput | revisaoWhereInput[]
    id_revisao?: IntFilter<"revisao"> | number
    cpf_funcionario?: BigIntFilter<"revisao"> | bigint | number
    placa_veiculo?: StringFilter<"revisao"> | string
    data_revisao?: DateTimeFilter<"revisao"> | Date | string
    data_prox_revisao?: DateTimeFilter<"revisao"> | Date | string
    funcionario?: XOR<FuncionarioScalarRelationFilter, funcionarioWhereInput>
    veiculo?: XOR<VeiculoScalarRelationFilter, veiculoWhereInput>
  }

  export type revisaoOrderByWithRelationInput = {
    id_revisao?: SortOrder
    cpf_funcionario?: SortOrder
    placa_veiculo?: SortOrder
    data_revisao?: SortOrder
    data_prox_revisao?: SortOrder
    funcionario?: funcionarioOrderByWithRelationInput
    veiculo?: veiculoOrderByWithRelationInput
  }

  export type revisaoWhereUniqueInput = Prisma.AtLeast<{
    id_revisao?: number
    AND?: revisaoWhereInput | revisaoWhereInput[]
    OR?: revisaoWhereInput[]
    NOT?: revisaoWhereInput | revisaoWhereInput[]
    cpf_funcionario?: BigIntFilter<"revisao"> | bigint | number
    placa_veiculo?: StringFilter<"revisao"> | string
    data_revisao?: DateTimeFilter<"revisao"> | Date | string
    data_prox_revisao?: DateTimeFilter<"revisao"> | Date | string
    funcionario?: XOR<FuncionarioScalarRelationFilter, funcionarioWhereInput>
    veiculo?: XOR<VeiculoScalarRelationFilter, veiculoWhereInput>
  }, "id_revisao">

  export type revisaoOrderByWithAggregationInput = {
    id_revisao?: SortOrder
    cpf_funcionario?: SortOrder
    placa_veiculo?: SortOrder
    data_revisao?: SortOrder
    data_prox_revisao?: SortOrder
    _count?: revisaoCountOrderByAggregateInput
    _avg?: revisaoAvgOrderByAggregateInput
    _max?: revisaoMaxOrderByAggregateInput
    _min?: revisaoMinOrderByAggregateInput
    _sum?: revisaoSumOrderByAggregateInput
  }

  export type revisaoScalarWhereWithAggregatesInput = {
    AND?: revisaoScalarWhereWithAggregatesInput | revisaoScalarWhereWithAggregatesInput[]
    OR?: revisaoScalarWhereWithAggregatesInput[]
    NOT?: revisaoScalarWhereWithAggregatesInput | revisaoScalarWhereWithAggregatesInput[]
    id_revisao?: IntWithAggregatesFilter<"revisao"> | number
    cpf_funcionario?: BigIntWithAggregatesFilter<"revisao"> | bigint | number
    placa_veiculo?: StringWithAggregatesFilter<"revisao"> | string
    data_revisao?: DateTimeWithAggregatesFilter<"revisao"> | Date | string
    data_prox_revisao?: DateTimeWithAggregatesFilter<"revisao"> | Date | string
  }

  export type veiculoWhereInput = {
    AND?: veiculoWhereInput | veiculoWhereInput[]
    OR?: veiculoWhereInput[]
    NOT?: veiculoWhereInput | veiculoWhereInput[]
    placa?: StringFilter<"veiculo"> | string
    quilometragem?: BigIntFilter<"veiculo"> | bigint | number
    cor?: StringFilter<"veiculo"> | string
    modelo?: StringFilter<"veiculo"> | string
    marca?: StringFilter<"veiculo"> | string
    tipo?: Enumtipo_veiculoFilter<"veiculo"> | $Enums.tipo_veiculo
    revisao?: RevisaoListRelationFilter
  }

  export type veiculoOrderByWithRelationInput = {
    placa?: SortOrder
    quilometragem?: SortOrder
    cor?: SortOrder
    modelo?: SortOrder
    marca?: SortOrder
    tipo?: SortOrder
    revisao?: revisaoOrderByRelationAggregateInput
  }

  export type veiculoWhereUniqueInput = Prisma.AtLeast<{
    placa?: string
    AND?: veiculoWhereInput | veiculoWhereInput[]
    OR?: veiculoWhereInput[]
    NOT?: veiculoWhereInput | veiculoWhereInput[]
    quilometragem?: BigIntFilter<"veiculo"> | bigint | number
    cor?: StringFilter<"veiculo"> | string
    modelo?: StringFilter<"veiculo"> | string
    marca?: StringFilter<"veiculo"> | string
    tipo?: Enumtipo_veiculoFilter<"veiculo"> | $Enums.tipo_veiculo
    revisao?: RevisaoListRelationFilter
  }, "placa">

  export type veiculoOrderByWithAggregationInput = {
    placa?: SortOrder
    quilometragem?: SortOrder
    cor?: SortOrder
    modelo?: SortOrder
    marca?: SortOrder
    tipo?: SortOrder
    _count?: veiculoCountOrderByAggregateInput
    _avg?: veiculoAvgOrderByAggregateInput
    _max?: veiculoMaxOrderByAggregateInput
    _min?: veiculoMinOrderByAggregateInput
    _sum?: veiculoSumOrderByAggregateInput
  }

  export type veiculoScalarWhereWithAggregatesInput = {
    AND?: veiculoScalarWhereWithAggregatesInput | veiculoScalarWhereWithAggregatesInput[]
    OR?: veiculoScalarWhereWithAggregatesInput[]
    NOT?: veiculoScalarWhereWithAggregatesInput | veiculoScalarWhereWithAggregatesInput[]
    placa?: StringWithAggregatesFilter<"veiculo"> | string
    quilometragem?: BigIntWithAggregatesFilter<"veiculo"> | bigint | number
    cor?: StringWithAggregatesFilter<"veiculo"> | string
    modelo?: StringWithAggregatesFilter<"veiculo"> | string
    marca?: StringWithAggregatesFilter<"veiculo"> | string
    tipo?: Enumtipo_veiculoWithAggregatesFilter<"veiculo"> | $Enums.tipo_veiculo
  }

  export type clienteWhereInput = {
    AND?: clienteWhereInput | clienteWhereInput[]
    OR?: clienteWhereInput[]
    NOT?: clienteWhereInput | clienteWhereInput[]
    cpf?: BigIntFilter<"cliente"> | bigint | number
    nome?: StringFilter<"cliente"> | string
    telefone?: StringNullableFilter<"cliente"> | string | null
  }

  export type clienteOrderByWithRelationInput = {
    cpf?: SortOrder
    nome?: SortOrder
    telefone?: SortOrderInput | SortOrder
  }

  export type clienteWhereUniqueInput = Prisma.AtLeast<{
    cpf?: bigint | number
    AND?: clienteWhereInput | clienteWhereInput[]
    OR?: clienteWhereInput[]
    NOT?: clienteWhereInput | clienteWhereInput[]
    nome?: StringFilter<"cliente"> | string
    telefone?: StringNullableFilter<"cliente"> | string | null
  }, "cpf">

  export type clienteOrderByWithAggregationInput = {
    cpf?: SortOrder
    nome?: SortOrder
    telefone?: SortOrderInput | SortOrder
    _count?: clienteCountOrderByAggregateInput
    _avg?: clienteAvgOrderByAggregateInput
    _max?: clienteMaxOrderByAggregateInput
    _min?: clienteMinOrderByAggregateInput
    _sum?: clienteSumOrderByAggregateInput
  }

  export type clienteScalarWhereWithAggregatesInput = {
    AND?: clienteScalarWhereWithAggregatesInput | clienteScalarWhereWithAggregatesInput[]
    OR?: clienteScalarWhereWithAggregatesInput[]
    NOT?: clienteScalarWhereWithAggregatesInput | clienteScalarWhereWithAggregatesInput[]
    cpf?: BigIntWithAggregatesFilter<"cliente"> | bigint | number
    nome?: StringWithAggregatesFilter<"cliente"> | string
    telefone?: StringNullableWithAggregatesFilter<"cliente"> | string | null
  }

  export type usuarioWhereInput = {
    AND?: usuarioWhereInput | usuarioWhereInput[]
    OR?: usuarioWhereInput[]
    NOT?: usuarioWhereInput | usuarioWhereInput[]
    id_usuario?: IntFilter<"usuario"> | number
    email?: StringFilter<"usuario"> | string
    senha?: StringFilter<"usuario"> | string
    tipo?: Enumtipo_usuarioFilter<"usuario"> | $Enums.tipo_usuario
    ativo?: BoolFilter<"usuario"> | boolean
  }

  export type usuarioOrderByWithRelationInput = {
    id_usuario?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
    ativo?: SortOrder
  }

  export type usuarioWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: number
    email?: string
    senha?: string
    AND?: usuarioWhereInput | usuarioWhereInput[]
    OR?: usuarioWhereInput[]
    NOT?: usuarioWhereInput | usuarioWhereInput[]
    tipo?: Enumtipo_usuarioFilter<"usuario"> | $Enums.tipo_usuario
    ativo?: BoolFilter<"usuario"> | boolean
  }, "id_usuario" | "email" | "senha">

  export type usuarioOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
    ativo?: SortOrder
    _count?: usuarioCountOrderByAggregateInput
    _avg?: usuarioAvgOrderByAggregateInput
    _max?: usuarioMaxOrderByAggregateInput
    _min?: usuarioMinOrderByAggregateInput
    _sum?: usuarioSumOrderByAggregateInput
  }

  export type usuarioScalarWhereWithAggregatesInput = {
    AND?: usuarioScalarWhereWithAggregatesInput | usuarioScalarWhereWithAggregatesInput[]
    OR?: usuarioScalarWhereWithAggregatesInput[]
    NOT?: usuarioScalarWhereWithAggregatesInput | usuarioScalarWhereWithAggregatesInput[]
    id_usuario?: IntWithAggregatesFilter<"usuario"> | number
    email?: StringWithAggregatesFilter<"usuario"> | string
    senha?: StringWithAggregatesFilter<"usuario"> | string
    tipo?: Enumtipo_usuarioWithAggregatesFilter<"usuario"> | $Enums.tipo_usuario
    ativo?: BoolWithAggregatesFilter<"usuario"> | boolean
  }

  export type funcionarioCreateInput = {
    cpf: bigint | number
    nome: string
    telefone?: string | null
    revisao?: revisaoCreateNestedManyWithoutFuncionarioInput
  }

  export type funcionarioUncheckedCreateInput = {
    cpf: bigint | number
    nome: string
    telefone?: string | null
    revisao?: revisaoUncheckedCreateNestedManyWithoutFuncionarioInput
  }

  export type funcionarioUpdateInput = {
    cpf?: BigIntFieldUpdateOperationsInput | bigint | number
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    revisao?: revisaoUpdateManyWithoutFuncionarioNestedInput
  }

  export type funcionarioUncheckedUpdateInput = {
    cpf?: BigIntFieldUpdateOperationsInput | bigint | number
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    revisao?: revisaoUncheckedUpdateManyWithoutFuncionarioNestedInput
  }

  export type funcionarioCreateManyInput = {
    cpf: bigint | number
    nome: string
    telefone?: string | null
  }

  export type funcionarioUpdateManyMutationInput = {
    cpf?: BigIntFieldUpdateOperationsInput | bigint | number
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type funcionarioUncheckedUpdateManyInput = {
    cpf?: BigIntFieldUpdateOperationsInput | bigint | number
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type revisaoCreateInput = {
    data_revisao: Date | string
    data_prox_revisao: Date | string
    funcionario: funcionarioCreateNestedOneWithoutRevisaoInput
    veiculo: veiculoCreateNestedOneWithoutRevisaoInput
  }

  export type revisaoUncheckedCreateInput = {
    id_revisao?: number
    cpf_funcionario: bigint | number
    placa_veiculo: string
    data_revisao: Date | string
    data_prox_revisao: Date | string
  }

  export type revisaoUpdateInput = {
    data_revisao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_prox_revisao?: DateTimeFieldUpdateOperationsInput | Date | string
    funcionario?: funcionarioUpdateOneRequiredWithoutRevisaoNestedInput
    veiculo?: veiculoUpdateOneRequiredWithoutRevisaoNestedInput
  }

  export type revisaoUncheckedUpdateInput = {
    id_revisao?: IntFieldUpdateOperationsInput | number
    cpf_funcionario?: BigIntFieldUpdateOperationsInput | bigint | number
    placa_veiculo?: StringFieldUpdateOperationsInput | string
    data_revisao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_prox_revisao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type revisaoCreateManyInput = {
    id_revisao?: number
    cpf_funcionario: bigint | number
    placa_veiculo: string
    data_revisao: Date | string
    data_prox_revisao: Date | string
  }

  export type revisaoUpdateManyMutationInput = {
    data_revisao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_prox_revisao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type revisaoUncheckedUpdateManyInput = {
    id_revisao?: IntFieldUpdateOperationsInput | number
    cpf_funcionario?: BigIntFieldUpdateOperationsInput | bigint | number
    placa_veiculo?: StringFieldUpdateOperationsInput | string
    data_revisao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_prox_revisao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type veiculoCreateInput = {
    placa: string
    quilometragem: bigint | number
    cor: string
    modelo: string
    marca: string
    tipo: $Enums.tipo_veiculo
    revisao?: revisaoCreateNestedManyWithoutVeiculoInput
  }

  export type veiculoUncheckedCreateInput = {
    placa: string
    quilometragem: bigint | number
    cor: string
    modelo: string
    marca: string
    tipo: $Enums.tipo_veiculo
    revisao?: revisaoUncheckedCreateNestedManyWithoutVeiculoInput
  }

  export type veiculoUpdateInput = {
    placa?: StringFieldUpdateOperationsInput | string
    quilometragem?: BigIntFieldUpdateOperationsInput | bigint | number
    cor?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    tipo?: Enumtipo_veiculoFieldUpdateOperationsInput | $Enums.tipo_veiculo
    revisao?: revisaoUpdateManyWithoutVeiculoNestedInput
  }

  export type veiculoUncheckedUpdateInput = {
    placa?: StringFieldUpdateOperationsInput | string
    quilometragem?: BigIntFieldUpdateOperationsInput | bigint | number
    cor?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    tipo?: Enumtipo_veiculoFieldUpdateOperationsInput | $Enums.tipo_veiculo
    revisao?: revisaoUncheckedUpdateManyWithoutVeiculoNestedInput
  }

  export type veiculoCreateManyInput = {
    placa: string
    quilometragem: bigint | number
    cor: string
    modelo: string
    marca: string
    tipo: $Enums.tipo_veiculo
  }

  export type veiculoUpdateManyMutationInput = {
    placa?: StringFieldUpdateOperationsInput | string
    quilometragem?: BigIntFieldUpdateOperationsInput | bigint | number
    cor?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    tipo?: Enumtipo_veiculoFieldUpdateOperationsInput | $Enums.tipo_veiculo
  }

  export type veiculoUncheckedUpdateManyInput = {
    placa?: StringFieldUpdateOperationsInput | string
    quilometragem?: BigIntFieldUpdateOperationsInput | bigint | number
    cor?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    tipo?: Enumtipo_veiculoFieldUpdateOperationsInput | $Enums.tipo_veiculo
  }

  export type clienteCreateInput = {
    cpf: bigint | number
    nome: string
    telefone?: string | null
  }

  export type clienteUncheckedCreateInput = {
    cpf: bigint | number
    nome: string
    telefone?: string | null
  }

  export type clienteUpdateInput = {
    cpf?: BigIntFieldUpdateOperationsInput | bigint | number
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type clienteUncheckedUpdateInput = {
    cpf?: BigIntFieldUpdateOperationsInput | bigint | number
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type clienteCreateManyInput = {
    cpf: bigint | number
    nome: string
    telefone?: string | null
  }

  export type clienteUpdateManyMutationInput = {
    cpf?: BigIntFieldUpdateOperationsInput | bigint | number
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type clienteUncheckedUpdateManyInput = {
    cpf?: BigIntFieldUpdateOperationsInput | bigint | number
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usuarioCreateInput = {
    email: string
    senha: string
    tipo: $Enums.tipo_usuario
    ativo: boolean
  }

  export type usuarioUncheckedCreateInput = {
    id_usuario?: number
    email: string
    senha: string
    tipo: $Enums.tipo_usuario
    ativo: boolean
  }

  export type usuarioUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: Enumtipo_usuarioFieldUpdateOperationsInput | $Enums.tipo_usuario
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type usuarioUncheckedUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: Enumtipo_usuarioFieldUpdateOperationsInput | $Enums.tipo_usuario
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type usuarioCreateManyInput = {
    id_usuario?: number
    email: string
    senha: string
    tipo: $Enums.tipo_usuario
    ativo: boolean
  }

  export type usuarioUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: Enumtipo_usuarioFieldUpdateOperationsInput | $Enums.tipo_usuario
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type usuarioUncheckedUpdateManyInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: Enumtipo_usuarioFieldUpdateOperationsInput | $Enums.tipo_usuario
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type RevisaoListRelationFilter = {
    every?: revisaoWhereInput
    some?: revisaoWhereInput
    none?: revisaoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type revisaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type funcionarioCountOrderByAggregateInput = {
    cpf?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
  }

  export type funcionarioAvgOrderByAggregateInput = {
    cpf?: SortOrder
  }

  export type funcionarioMaxOrderByAggregateInput = {
    cpf?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
  }

  export type funcionarioMinOrderByAggregateInput = {
    cpf?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
  }

  export type funcionarioSumOrderByAggregateInput = {
    cpf?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type FuncionarioScalarRelationFilter = {
    is?: funcionarioWhereInput
    isNot?: funcionarioWhereInput
  }

  export type VeiculoScalarRelationFilter = {
    is?: veiculoWhereInput
    isNot?: veiculoWhereInput
  }

  export type revisaoCountOrderByAggregateInput = {
    id_revisao?: SortOrder
    cpf_funcionario?: SortOrder
    placa_veiculo?: SortOrder
    data_revisao?: SortOrder
    data_prox_revisao?: SortOrder
  }

  export type revisaoAvgOrderByAggregateInput = {
    id_revisao?: SortOrder
    cpf_funcionario?: SortOrder
  }

  export type revisaoMaxOrderByAggregateInput = {
    id_revisao?: SortOrder
    cpf_funcionario?: SortOrder
    placa_veiculo?: SortOrder
    data_revisao?: SortOrder
    data_prox_revisao?: SortOrder
  }

  export type revisaoMinOrderByAggregateInput = {
    id_revisao?: SortOrder
    cpf_funcionario?: SortOrder
    placa_veiculo?: SortOrder
    data_revisao?: SortOrder
    data_prox_revisao?: SortOrder
  }

  export type revisaoSumOrderByAggregateInput = {
    id_revisao?: SortOrder
    cpf_funcionario?: SortOrder
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

  export type Enumtipo_veiculoFilter<$PrismaModel = never> = {
    equals?: $Enums.tipo_veiculo | Enumtipo_veiculoFieldRefInput<$PrismaModel>
    in?: $Enums.tipo_veiculo[] | ListEnumtipo_veiculoFieldRefInput<$PrismaModel>
    notIn?: $Enums.tipo_veiculo[] | ListEnumtipo_veiculoFieldRefInput<$PrismaModel>
    not?: NestedEnumtipo_veiculoFilter<$PrismaModel> | $Enums.tipo_veiculo
  }

  export type veiculoCountOrderByAggregateInput = {
    placa?: SortOrder
    quilometragem?: SortOrder
    cor?: SortOrder
    modelo?: SortOrder
    marca?: SortOrder
    tipo?: SortOrder
  }

  export type veiculoAvgOrderByAggregateInput = {
    quilometragem?: SortOrder
  }

  export type veiculoMaxOrderByAggregateInput = {
    placa?: SortOrder
    quilometragem?: SortOrder
    cor?: SortOrder
    modelo?: SortOrder
    marca?: SortOrder
    tipo?: SortOrder
  }

  export type veiculoMinOrderByAggregateInput = {
    placa?: SortOrder
    quilometragem?: SortOrder
    cor?: SortOrder
    modelo?: SortOrder
    marca?: SortOrder
    tipo?: SortOrder
  }

  export type veiculoSumOrderByAggregateInput = {
    quilometragem?: SortOrder
  }

  export type Enumtipo_veiculoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.tipo_veiculo | Enumtipo_veiculoFieldRefInput<$PrismaModel>
    in?: $Enums.tipo_veiculo[] | ListEnumtipo_veiculoFieldRefInput<$PrismaModel>
    notIn?: $Enums.tipo_veiculo[] | ListEnumtipo_veiculoFieldRefInput<$PrismaModel>
    not?: NestedEnumtipo_veiculoWithAggregatesFilter<$PrismaModel> | $Enums.tipo_veiculo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtipo_veiculoFilter<$PrismaModel>
    _max?: NestedEnumtipo_veiculoFilter<$PrismaModel>
  }

  export type clienteCountOrderByAggregateInput = {
    cpf?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
  }

  export type clienteAvgOrderByAggregateInput = {
    cpf?: SortOrder
  }

  export type clienteMaxOrderByAggregateInput = {
    cpf?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
  }

  export type clienteMinOrderByAggregateInput = {
    cpf?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
  }

  export type clienteSumOrderByAggregateInput = {
    cpf?: SortOrder
  }

  export type Enumtipo_usuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.tipo_usuario | Enumtipo_usuarioFieldRefInput<$PrismaModel>
    in?: $Enums.tipo_usuario[] | ListEnumtipo_usuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.tipo_usuario[] | ListEnumtipo_usuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumtipo_usuarioFilter<$PrismaModel> | $Enums.tipo_usuario
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type usuarioCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
    ativo?: SortOrder
  }

  export type usuarioAvgOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type usuarioMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
    ativo?: SortOrder
  }

  export type usuarioMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
    ativo?: SortOrder
  }

  export type usuarioSumOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type Enumtipo_usuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.tipo_usuario | Enumtipo_usuarioFieldRefInput<$PrismaModel>
    in?: $Enums.tipo_usuario[] | ListEnumtipo_usuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.tipo_usuario[] | ListEnumtipo_usuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumtipo_usuarioWithAggregatesFilter<$PrismaModel> | $Enums.tipo_usuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtipo_usuarioFilter<$PrismaModel>
    _max?: NestedEnumtipo_usuarioFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type revisaoCreateNestedManyWithoutFuncionarioInput = {
    create?: XOR<revisaoCreateWithoutFuncionarioInput, revisaoUncheckedCreateWithoutFuncionarioInput> | revisaoCreateWithoutFuncionarioInput[] | revisaoUncheckedCreateWithoutFuncionarioInput[]
    connectOrCreate?: revisaoCreateOrConnectWithoutFuncionarioInput | revisaoCreateOrConnectWithoutFuncionarioInput[]
    createMany?: revisaoCreateManyFuncionarioInputEnvelope
    connect?: revisaoWhereUniqueInput | revisaoWhereUniqueInput[]
  }

  export type revisaoUncheckedCreateNestedManyWithoutFuncionarioInput = {
    create?: XOR<revisaoCreateWithoutFuncionarioInput, revisaoUncheckedCreateWithoutFuncionarioInput> | revisaoCreateWithoutFuncionarioInput[] | revisaoUncheckedCreateWithoutFuncionarioInput[]
    connectOrCreate?: revisaoCreateOrConnectWithoutFuncionarioInput | revisaoCreateOrConnectWithoutFuncionarioInput[]
    createMany?: revisaoCreateManyFuncionarioInputEnvelope
    connect?: revisaoWhereUniqueInput | revisaoWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type revisaoUpdateManyWithoutFuncionarioNestedInput = {
    create?: XOR<revisaoCreateWithoutFuncionarioInput, revisaoUncheckedCreateWithoutFuncionarioInput> | revisaoCreateWithoutFuncionarioInput[] | revisaoUncheckedCreateWithoutFuncionarioInput[]
    connectOrCreate?: revisaoCreateOrConnectWithoutFuncionarioInput | revisaoCreateOrConnectWithoutFuncionarioInput[]
    upsert?: revisaoUpsertWithWhereUniqueWithoutFuncionarioInput | revisaoUpsertWithWhereUniqueWithoutFuncionarioInput[]
    createMany?: revisaoCreateManyFuncionarioInputEnvelope
    set?: revisaoWhereUniqueInput | revisaoWhereUniqueInput[]
    disconnect?: revisaoWhereUniqueInput | revisaoWhereUniqueInput[]
    delete?: revisaoWhereUniqueInput | revisaoWhereUniqueInput[]
    connect?: revisaoWhereUniqueInput | revisaoWhereUniqueInput[]
    update?: revisaoUpdateWithWhereUniqueWithoutFuncionarioInput | revisaoUpdateWithWhereUniqueWithoutFuncionarioInput[]
    updateMany?: revisaoUpdateManyWithWhereWithoutFuncionarioInput | revisaoUpdateManyWithWhereWithoutFuncionarioInput[]
    deleteMany?: revisaoScalarWhereInput | revisaoScalarWhereInput[]
  }

  export type revisaoUncheckedUpdateManyWithoutFuncionarioNestedInput = {
    create?: XOR<revisaoCreateWithoutFuncionarioInput, revisaoUncheckedCreateWithoutFuncionarioInput> | revisaoCreateWithoutFuncionarioInput[] | revisaoUncheckedCreateWithoutFuncionarioInput[]
    connectOrCreate?: revisaoCreateOrConnectWithoutFuncionarioInput | revisaoCreateOrConnectWithoutFuncionarioInput[]
    upsert?: revisaoUpsertWithWhereUniqueWithoutFuncionarioInput | revisaoUpsertWithWhereUniqueWithoutFuncionarioInput[]
    createMany?: revisaoCreateManyFuncionarioInputEnvelope
    set?: revisaoWhereUniqueInput | revisaoWhereUniqueInput[]
    disconnect?: revisaoWhereUniqueInput | revisaoWhereUniqueInput[]
    delete?: revisaoWhereUniqueInput | revisaoWhereUniqueInput[]
    connect?: revisaoWhereUniqueInput | revisaoWhereUniqueInput[]
    update?: revisaoUpdateWithWhereUniqueWithoutFuncionarioInput | revisaoUpdateWithWhereUniqueWithoutFuncionarioInput[]
    updateMany?: revisaoUpdateManyWithWhereWithoutFuncionarioInput | revisaoUpdateManyWithWhereWithoutFuncionarioInput[]
    deleteMany?: revisaoScalarWhereInput | revisaoScalarWhereInput[]
  }

  export type funcionarioCreateNestedOneWithoutRevisaoInput = {
    create?: XOR<funcionarioCreateWithoutRevisaoInput, funcionarioUncheckedCreateWithoutRevisaoInput>
    connectOrCreate?: funcionarioCreateOrConnectWithoutRevisaoInput
    connect?: funcionarioWhereUniqueInput
  }

  export type veiculoCreateNestedOneWithoutRevisaoInput = {
    create?: XOR<veiculoCreateWithoutRevisaoInput, veiculoUncheckedCreateWithoutRevisaoInput>
    connectOrCreate?: veiculoCreateOrConnectWithoutRevisaoInput
    connect?: veiculoWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type funcionarioUpdateOneRequiredWithoutRevisaoNestedInput = {
    create?: XOR<funcionarioCreateWithoutRevisaoInput, funcionarioUncheckedCreateWithoutRevisaoInput>
    connectOrCreate?: funcionarioCreateOrConnectWithoutRevisaoInput
    upsert?: funcionarioUpsertWithoutRevisaoInput
    connect?: funcionarioWhereUniqueInput
    update?: XOR<XOR<funcionarioUpdateToOneWithWhereWithoutRevisaoInput, funcionarioUpdateWithoutRevisaoInput>, funcionarioUncheckedUpdateWithoutRevisaoInput>
  }

  export type veiculoUpdateOneRequiredWithoutRevisaoNestedInput = {
    create?: XOR<veiculoCreateWithoutRevisaoInput, veiculoUncheckedCreateWithoutRevisaoInput>
    connectOrCreate?: veiculoCreateOrConnectWithoutRevisaoInput
    upsert?: veiculoUpsertWithoutRevisaoInput
    connect?: veiculoWhereUniqueInput
    update?: XOR<XOR<veiculoUpdateToOneWithWhereWithoutRevisaoInput, veiculoUpdateWithoutRevisaoInput>, veiculoUncheckedUpdateWithoutRevisaoInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type revisaoCreateNestedManyWithoutVeiculoInput = {
    create?: XOR<revisaoCreateWithoutVeiculoInput, revisaoUncheckedCreateWithoutVeiculoInput> | revisaoCreateWithoutVeiculoInput[] | revisaoUncheckedCreateWithoutVeiculoInput[]
    connectOrCreate?: revisaoCreateOrConnectWithoutVeiculoInput | revisaoCreateOrConnectWithoutVeiculoInput[]
    createMany?: revisaoCreateManyVeiculoInputEnvelope
    connect?: revisaoWhereUniqueInput | revisaoWhereUniqueInput[]
  }

  export type revisaoUncheckedCreateNestedManyWithoutVeiculoInput = {
    create?: XOR<revisaoCreateWithoutVeiculoInput, revisaoUncheckedCreateWithoutVeiculoInput> | revisaoCreateWithoutVeiculoInput[] | revisaoUncheckedCreateWithoutVeiculoInput[]
    connectOrCreate?: revisaoCreateOrConnectWithoutVeiculoInput | revisaoCreateOrConnectWithoutVeiculoInput[]
    createMany?: revisaoCreateManyVeiculoInputEnvelope
    connect?: revisaoWhereUniqueInput | revisaoWhereUniqueInput[]
  }

  export type Enumtipo_veiculoFieldUpdateOperationsInput = {
    set?: $Enums.tipo_veiculo
  }

  export type revisaoUpdateManyWithoutVeiculoNestedInput = {
    create?: XOR<revisaoCreateWithoutVeiculoInput, revisaoUncheckedCreateWithoutVeiculoInput> | revisaoCreateWithoutVeiculoInput[] | revisaoUncheckedCreateWithoutVeiculoInput[]
    connectOrCreate?: revisaoCreateOrConnectWithoutVeiculoInput | revisaoCreateOrConnectWithoutVeiculoInput[]
    upsert?: revisaoUpsertWithWhereUniqueWithoutVeiculoInput | revisaoUpsertWithWhereUniqueWithoutVeiculoInput[]
    createMany?: revisaoCreateManyVeiculoInputEnvelope
    set?: revisaoWhereUniqueInput | revisaoWhereUniqueInput[]
    disconnect?: revisaoWhereUniqueInput | revisaoWhereUniqueInput[]
    delete?: revisaoWhereUniqueInput | revisaoWhereUniqueInput[]
    connect?: revisaoWhereUniqueInput | revisaoWhereUniqueInput[]
    update?: revisaoUpdateWithWhereUniqueWithoutVeiculoInput | revisaoUpdateWithWhereUniqueWithoutVeiculoInput[]
    updateMany?: revisaoUpdateManyWithWhereWithoutVeiculoInput | revisaoUpdateManyWithWhereWithoutVeiculoInput[]
    deleteMany?: revisaoScalarWhereInput | revisaoScalarWhereInput[]
  }

  export type revisaoUncheckedUpdateManyWithoutVeiculoNestedInput = {
    create?: XOR<revisaoCreateWithoutVeiculoInput, revisaoUncheckedCreateWithoutVeiculoInput> | revisaoCreateWithoutVeiculoInput[] | revisaoUncheckedCreateWithoutVeiculoInput[]
    connectOrCreate?: revisaoCreateOrConnectWithoutVeiculoInput | revisaoCreateOrConnectWithoutVeiculoInput[]
    upsert?: revisaoUpsertWithWhereUniqueWithoutVeiculoInput | revisaoUpsertWithWhereUniqueWithoutVeiculoInput[]
    createMany?: revisaoCreateManyVeiculoInputEnvelope
    set?: revisaoWhereUniqueInput | revisaoWhereUniqueInput[]
    disconnect?: revisaoWhereUniqueInput | revisaoWhereUniqueInput[]
    delete?: revisaoWhereUniqueInput | revisaoWhereUniqueInput[]
    connect?: revisaoWhereUniqueInput | revisaoWhereUniqueInput[]
    update?: revisaoUpdateWithWhereUniqueWithoutVeiculoInput | revisaoUpdateWithWhereUniqueWithoutVeiculoInput[]
    updateMany?: revisaoUpdateManyWithWhereWithoutVeiculoInput | revisaoUpdateManyWithWhereWithoutVeiculoInput[]
    deleteMany?: revisaoScalarWhereInput | revisaoScalarWhereInput[]
  }

  export type Enumtipo_usuarioFieldUpdateOperationsInput = {
    set?: $Enums.tipo_usuario
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type NestedEnumtipo_veiculoFilter<$PrismaModel = never> = {
    equals?: $Enums.tipo_veiculo | Enumtipo_veiculoFieldRefInput<$PrismaModel>
    in?: $Enums.tipo_veiculo[] | ListEnumtipo_veiculoFieldRefInput<$PrismaModel>
    notIn?: $Enums.tipo_veiculo[] | ListEnumtipo_veiculoFieldRefInput<$PrismaModel>
    not?: NestedEnumtipo_veiculoFilter<$PrismaModel> | $Enums.tipo_veiculo
  }

  export type NestedEnumtipo_veiculoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.tipo_veiculo | Enumtipo_veiculoFieldRefInput<$PrismaModel>
    in?: $Enums.tipo_veiculo[] | ListEnumtipo_veiculoFieldRefInput<$PrismaModel>
    notIn?: $Enums.tipo_veiculo[] | ListEnumtipo_veiculoFieldRefInput<$PrismaModel>
    not?: NestedEnumtipo_veiculoWithAggregatesFilter<$PrismaModel> | $Enums.tipo_veiculo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtipo_veiculoFilter<$PrismaModel>
    _max?: NestedEnumtipo_veiculoFilter<$PrismaModel>
  }

  export type NestedEnumtipo_usuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.tipo_usuario | Enumtipo_usuarioFieldRefInput<$PrismaModel>
    in?: $Enums.tipo_usuario[] | ListEnumtipo_usuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.tipo_usuario[] | ListEnumtipo_usuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumtipo_usuarioFilter<$PrismaModel> | $Enums.tipo_usuario
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumtipo_usuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.tipo_usuario | Enumtipo_usuarioFieldRefInput<$PrismaModel>
    in?: $Enums.tipo_usuario[] | ListEnumtipo_usuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.tipo_usuario[] | ListEnumtipo_usuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumtipo_usuarioWithAggregatesFilter<$PrismaModel> | $Enums.tipo_usuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtipo_usuarioFilter<$PrismaModel>
    _max?: NestedEnumtipo_usuarioFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type revisaoCreateWithoutFuncionarioInput = {
    data_revisao: Date | string
    data_prox_revisao: Date | string
    veiculo: veiculoCreateNestedOneWithoutRevisaoInput
  }

  export type revisaoUncheckedCreateWithoutFuncionarioInput = {
    id_revisao?: number
    placa_veiculo: string
    data_revisao: Date | string
    data_prox_revisao: Date | string
  }

  export type revisaoCreateOrConnectWithoutFuncionarioInput = {
    where: revisaoWhereUniqueInput
    create: XOR<revisaoCreateWithoutFuncionarioInput, revisaoUncheckedCreateWithoutFuncionarioInput>
  }

  export type revisaoCreateManyFuncionarioInputEnvelope = {
    data: revisaoCreateManyFuncionarioInput | revisaoCreateManyFuncionarioInput[]
    skipDuplicates?: boolean
  }

  export type revisaoUpsertWithWhereUniqueWithoutFuncionarioInput = {
    where: revisaoWhereUniqueInput
    update: XOR<revisaoUpdateWithoutFuncionarioInput, revisaoUncheckedUpdateWithoutFuncionarioInput>
    create: XOR<revisaoCreateWithoutFuncionarioInput, revisaoUncheckedCreateWithoutFuncionarioInput>
  }

  export type revisaoUpdateWithWhereUniqueWithoutFuncionarioInput = {
    where: revisaoWhereUniqueInput
    data: XOR<revisaoUpdateWithoutFuncionarioInput, revisaoUncheckedUpdateWithoutFuncionarioInput>
  }

  export type revisaoUpdateManyWithWhereWithoutFuncionarioInput = {
    where: revisaoScalarWhereInput
    data: XOR<revisaoUpdateManyMutationInput, revisaoUncheckedUpdateManyWithoutFuncionarioInput>
  }

  export type revisaoScalarWhereInput = {
    AND?: revisaoScalarWhereInput | revisaoScalarWhereInput[]
    OR?: revisaoScalarWhereInput[]
    NOT?: revisaoScalarWhereInput | revisaoScalarWhereInput[]
    id_revisao?: IntFilter<"revisao"> | number
    cpf_funcionario?: BigIntFilter<"revisao"> | bigint | number
    placa_veiculo?: StringFilter<"revisao"> | string
    data_revisao?: DateTimeFilter<"revisao"> | Date | string
    data_prox_revisao?: DateTimeFilter<"revisao"> | Date | string
  }

  export type funcionarioCreateWithoutRevisaoInput = {
    cpf: bigint | number
    nome: string
    telefone?: string | null
  }

  export type funcionarioUncheckedCreateWithoutRevisaoInput = {
    cpf: bigint | number
    nome: string
    telefone?: string | null
  }

  export type funcionarioCreateOrConnectWithoutRevisaoInput = {
    where: funcionarioWhereUniqueInput
    create: XOR<funcionarioCreateWithoutRevisaoInput, funcionarioUncheckedCreateWithoutRevisaoInput>
  }

  export type veiculoCreateWithoutRevisaoInput = {
    placa: string
    quilometragem: bigint | number
    cor: string
    modelo: string
    marca: string
    tipo: $Enums.tipo_veiculo
  }

  export type veiculoUncheckedCreateWithoutRevisaoInput = {
    placa: string
    quilometragem: bigint | number
    cor: string
    modelo: string
    marca: string
    tipo: $Enums.tipo_veiculo
  }

  export type veiculoCreateOrConnectWithoutRevisaoInput = {
    where: veiculoWhereUniqueInput
    create: XOR<veiculoCreateWithoutRevisaoInput, veiculoUncheckedCreateWithoutRevisaoInput>
  }

  export type funcionarioUpsertWithoutRevisaoInput = {
    update: XOR<funcionarioUpdateWithoutRevisaoInput, funcionarioUncheckedUpdateWithoutRevisaoInput>
    create: XOR<funcionarioCreateWithoutRevisaoInput, funcionarioUncheckedCreateWithoutRevisaoInput>
    where?: funcionarioWhereInput
  }

  export type funcionarioUpdateToOneWithWhereWithoutRevisaoInput = {
    where?: funcionarioWhereInput
    data: XOR<funcionarioUpdateWithoutRevisaoInput, funcionarioUncheckedUpdateWithoutRevisaoInput>
  }

  export type funcionarioUpdateWithoutRevisaoInput = {
    cpf?: BigIntFieldUpdateOperationsInput | bigint | number
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type funcionarioUncheckedUpdateWithoutRevisaoInput = {
    cpf?: BigIntFieldUpdateOperationsInput | bigint | number
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type veiculoUpsertWithoutRevisaoInput = {
    update: XOR<veiculoUpdateWithoutRevisaoInput, veiculoUncheckedUpdateWithoutRevisaoInput>
    create: XOR<veiculoCreateWithoutRevisaoInput, veiculoUncheckedCreateWithoutRevisaoInput>
    where?: veiculoWhereInput
  }

  export type veiculoUpdateToOneWithWhereWithoutRevisaoInput = {
    where?: veiculoWhereInput
    data: XOR<veiculoUpdateWithoutRevisaoInput, veiculoUncheckedUpdateWithoutRevisaoInput>
  }

  export type veiculoUpdateWithoutRevisaoInput = {
    placa?: StringFieldUpdateOperationsInput | string
    quilometragem?: BigIntFieldUpdateOperationsInput | bigint | number
    cor?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    tipo?: Enumtipo_veiculoFieldUpdateOperationsInput | $Enums.tipo_veiculo
  }

  export type veiculoUncheckedUpdateWithoutRevisaoInput = {
    placa?: StringFieldUpdateOperationsInput | string
    quilometragem?: BigIntFieldUpdateOperationsInput | bigint | number
    cor?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    tipo?: Enumtipo_veiculoFieldUpdateOperationsInput | $Enums.tipo_veiculo
  }

  export type revisaoCreateWithoutVeiculoInput = {
    data_revisao: Date | string
    data_prox_revisao: Date | string
    funcionario: funcionarioCreateNestedOneWithoutRevisaoInput
  }

  export type revisaoUncheckedCreateWithoutVeiculoInput = {
    id_revisao?: number
    cpf_funcionario: bigint | number
    data_revisao: Date | string
    data_prox_revisao: Date | string
  }

  export type revisaoCreateOrConnectWithoutVeiculoInput = {
    where: revisaoWhereUniqueInput
    create: XOR<revisaoCreateWithoutVeiculoInput, revisaoUncheckedCreateWithoutVeiculoInput>
  }

  export type revisaoCreateManyVeiculoInputEnvelope = {
    data: revisaoCreateManyVeiculoInput | revisaoCreateManyVeiculoInput[]
    skipDuplicates?: boolean
  }

  export type revisaoUpsertWithWhereUniqueWithoutVeiculoInput = {
    where: revisaoWhereUniqueInput
    update: XOR<revisaoUpdateWithoutVeiculoInput, revisaoUncheckedUpdateWithoutVeiculoInput>
    create: XOR<revisaoCreateWithoutVeiculoInput, revisaoUncheckedCreateWithoutVeiculoInput>
  }

  export type revisaoUpdateWithWhereUniqueWithoutVeiculoInput = {
    where: revisaoWhereUniqueInput
    data: XOR<revisaoUpdateWithoutVeiculoInput, revisaoUncheckedUpdateWithoutVeiculoInput>
  }

  export type revisaoUpdateManyWithWhereWithoutVeiculoInput = {
    where: revisaoScalarWhereInput
    data: XOR<revisaoUpdateManyMutationInput, revisaoUncheckedUpdateManyWithoutVeiculoInput>
  }

  export type revisaoCreateManyFuncionarioInput = {
    id_revisao?: number
    placa_veiculo: string
    data_revisao: Date | string
    data_prox_revisao: Date | string
  }

  export type revisaoUpdateWithoutFuncionarioInput = {
    data_revisao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_prox_revisao?: DateTimeFieldUpdateOperationsInput | Date | string
    veiculo?: veiculoUpdateOneRequiredWithoutRevisaoNestedInput
  }

  export type revisaoUncheckedUpdateWithoutFuncionarioInput = {
    id_revisao?: IntFieldUpdateOperationsInput | number
    placa_veiculo?: StringFieldUpdateOperationsInput | string
    data_revisao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_prox_revisao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type revisaoUncheckedUpdateManyWithoutFuncionarioInput = {
    id_revisao?: IntFieldUpdateOperationsInput | number
    placa_veiculo?: StringFieldUpdateOperationsInput | string
    data_revisao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_prox_revisao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type revisaoCreateManyVeiculoInput = {
    id_revisao?: number
    cpf_funcionario: bigint | number
    data_revisao: Date | string
    data_prox_revisao: Date | string
  }

  export type revisaoUpdateWithoutVeiculoInput = {
    data_revisao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_prox_revisao?: DateTimeFieldUpdateOperationsInput | Date | string
    funcionario?: funcionarioUpdateOneRequiredWithoutRevisaoNestedInput
  }

  export type revisaoUncheckedUpdateWithoutVeiculoInput = {
    id_revisao?: IntFieldUpdateOperationsInput | number
    cpf_funcionario?: BigIntFieldUpdateOperationsInput | bigint | number
    data_revisao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_prox_revisao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type revisaoUncheckedUpdateManyWithoutVeiculoInput = {
    id_revisao?: IntFieldUpdateOperationsInput | number
    cpf_funcionario?: BigIntFieldUpdateOperationsInput | bigint | number
    data_revisao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_prox_revisao?: DateTimeFieldUpdateOperationsInput | Date | string
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