import { personsToFullname } from "./map";

export type Person = {
  firstname: string;
  lastname: string;
  fullname: string;
  ssn: string;
  address: string;
  birthYear: number;
};

const createPerson = (
  firstname: string,
  lastname: string,
  ssn: string,
  address: string,
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

const p1 = createPerson("Haskel", "Curry", "111-11-1111", "US", 1900);
const p2 = createPerson("Barkley", "Rosser", "222-22-2222", "Gree", 1907);
const p3 = createPerson("John", "von Neumann", "333-33-3333", "Hungary", 1903);
const p4 = createPerson("Alonzo", "Church", "444-44-4444", "US", 1903);

export const persons = [p1, p2, p3, p4];

console.log(personsToFullname(persons));
