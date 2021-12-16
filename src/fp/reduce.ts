import _, { isUndefined } from "lodash";
import { Person } from ".";

type Stat = {
  [country: string]: number;
};

/**
 * 国別の人数を取得する
 *
 * @param persons 人を表すオブジェクト
 * @returns 国別の人数オブジェクト
 */
export const getNumberOfPersonByCountry = (persons: Person[]): Stat =>
  _(persons).reduce((stat: Stat, person: Person) => {
    const country = person.address.country;
    stat[country] = isUndefined(stat[country]) ? 1 : stat[country] + 1;
    return stat;
  }, {});
