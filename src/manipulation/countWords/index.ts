import { compose } from "ramda";

const explode = (v: string) => v.split(/\s+/);

const count = (arr: string[]) => arr.length;

export const countWords = compose(count, explode);
