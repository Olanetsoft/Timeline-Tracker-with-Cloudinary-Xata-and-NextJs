// Generated by Xata Codegen 0.21.0. Please do not edit.
import { buildClient } from "@xata.io/client";
/** @typedef { import('./types').SchemaTables } SchemaTables */
/** @type { SchemaTables } */
const tables = [
  {
    name: "users",
    columns: [
      { name: "firstName", type: "string" },
      { name: "lastName", type: "string" },
      { name: "password", type: "string" },
      { name: "email", type: "email", unique: true },
    ],
  },
  {
    name: "timelines",
    columns: [
      { name: "title", type: "string" },
      { name: "description", type: "string" },
      { name: "image_url", type: "string" },
      { name: "date", type: "datetime" },
      { name: "user_id", type: "link", link: { table: "users" } },
    ],
  },
];
/** @type { import('../../client/src').ClientConstructor<{}> } */
const DatabaseClient = buildClient();
const defaultOptions = {
  databaseURL:
    "https://Olubisi-Idris-Ayinde-s-workspace-rdqm16.us-east-1.xata.sh/db/timeline",
};
/** @typedef { import('./types').DatabaseSchema } DatabaseSchema */
/** @extends DatabaseClient<DatabaseSchema> */
export class XataClient extends DatabaseClient {
  constructor(options) {
    super({ ...defaultOptions, ...options }, tables);
  }
}
let instance = undefined;
/** @type { () => XataClient } */
export const getXataClient = () => {
  if (instance) return instance;
  instance = new XataClient();
  return instance;
};