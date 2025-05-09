
/* !!! This is code generated by Prisma. Do not edit directly. !!!
/* eslint-disable */

Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.7.0
 * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
 */
Prisma.prismaVersion = {
  client: "6.7.0",
  engine: "3cff47a7f5d65c3ea74883f1d736e41d68ce91ed"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
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

exports.Prisma.SectionScalarFieldEnum = {
  id: 'id',
  code: 'code',
  name: 'name',
  description: 'description',
  skill: 'skill'
};

exports.Prisma.SystemScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  durability: 'durability',
  section_code: 'section_code'
};

exports.Prisma.InteractionScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  skill: 'skill',
  type: 'type',
  malfunction: 'malfunction',
  system_id: 'system_id'
};

exports.Prisma.EventTemplateScalarFieldEnum = {
  id: 'id',
  name: 'name',
  cause: 'cause'
};

exports.Prisma.MalfunctionScalarFieldEnum = {
  id: 'id',
  event_id: 'event_id',
  interaction_id: 'interaction_id',
  user_id: 'user_id',
  status: 'status',
  started_at: 'started_at',
  last_updated: 'last_updated',
  system_id: 'system_id'
};

exports.Prisma.EventScalarFieldEnum = {
  id: 'id',
  event_template_id: 'event_template_id',
  started_at: 'started_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Fraction = exports.$Enums.Fraction = {
  ALLIANCE: 'ALLIANCE',
  REBELS: 'REBELS',
  CULT: 'CULT'
};

exports.UserStatus = exports.$Enums.UserStatus = {
  ALIVE: 'ALIVE',
  GHOST: 'GHOST',
  INACTIVE: 'INACTIVE'
};

exports.SectionCode = exports.$Enums.SectionCode = {
  NAVIGATION: 'NAVIGATION',
  INGENEER: 'INGENEER',
  MILITARY: 'MILITARY',
  ARCHIVE: 'ARCHIVE',
  CULINAR: 'CULINAR'
};

exports.Skills = exports.$Enums.Skills = {
  NAVIGATION: 'NAVIGATION',
  MILITARY: 'MILITARY',
  ENGINEERING: 'ENGINEERING',
  BUREAUCRACY: 'BUREAUCRACY',
  SERVICE: 'SERVICE'
};

exports.InteractionType = exports.$Enums.InteractionType = {
  POSITIVE: 'POSITIVE',
  NEGATIVE: 'NEGATIVE',
  GHOST: 'GHOST',
  CULT: 'CULT',
  SUPPORT: 'SUPPORT'
};

exports.EventCause = exports.$Enums.EventCause = {
  SABOTAGE: 'SABOTAGE',
  ACCIDENT: 'ACCIDENT'
};

exports.MalfunctionStatus = exports.$Enums.MalfunctionStatus = {
  NOT_STARTED: 'NOT_STARTED',
  FINISHED: 'FINISHED',
  IN_PROGRESS: 'IN_PROGRESS'
};

exports.Prisma.ModelName = {
  User: 'User',
  Section: 'Section',
  System: 'System',
  Interaction: 'Interaction',
  EventTemplate: 'EventTemplate',
  Malfunction: 'Malfunction',
  Event: 'Event'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
