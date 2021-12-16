import { personsToFullname, personsToFullnameReverse } from "./map";
import { getNumberOfPersonByCountry } from "./reduce";

/**
 * 住所を表すオブジェクト
 */
type Address = {
  country: string;
  state: string | null;
  city: string | null;
  zip: string | null;
  street: string | null;
};

/**
 * 人を表すオブジェクト
 */
export type Person = {
  firstname: string;
  lastname: string;
  fullname: string;
  ssn: string;
  address: Address;
  birthYear: number;
};

const createAddress = (
  country: string,
  state?: string,
  city?: string,
  zip?: string,
  street?: string
): Address => {
  return {
    country,
    state: state || null,
    city: city || null,
    zip: zip || null,
    street: street || null,
  };
};

const createPerson = (
  firstname: string,
  lastname: string,
  ssn: string,
  address: Address,
  birthYear: number
): Person => {
  const fullname = () => [firstname, lastname].join(" ");

  return {
    firstname,
    lastname,
    fullname: fullname(),
    ssn,
    address,
    birthYear,
  };
};

const p1 = createPerson(
  "Haskel",
  "Curry",
  "111-11-1111",
  createAddress("US"),
  1900
);
const p2 = createPerson(
  "Barkley",
  "Rosser",
  "222-22-2222",
  createAddress("Gree"),
  1907
);
const p3 = createPerson(
  "John",
  "von Neumann",
  "333-33-3333",
  createAddress("Hungary"),
  1903
);
const p4 = createPerson(
  "Alonzo",
  "Church",
  "444-44-4444",
  createAddress("US"),
  1903
);

export const persons = [p1, p2, p3, p4];

console.log(persons);

console.log("personsToFullname: ", personsToFullname(persons));
console.log("personsToFullnameReverse: ", personsToFullnameReverse(persons));

console.log(
  "getNumberOfPersonByCountry: ",
  getNumberOfPersonByCountry(persons)
); // -> { US: 2, Hungary: 1, Gree: 1 }
