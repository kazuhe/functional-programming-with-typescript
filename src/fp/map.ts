// import _, { map, reverse } from "lodash";
import { map } from "lodash";
import { Person } from ".";

// console.log("normal ", persons);
// console.log("\nwrap ", _(persons));

export const personsToFullname = (persons: Person[]) =>
  map(persons, (x) => (x !== null && x !== undefined ? x.fullname : ""));

// _(persons)
//   .reverse()
//   .map((x) => (x !== null && x !== undefined ? x : ""));
