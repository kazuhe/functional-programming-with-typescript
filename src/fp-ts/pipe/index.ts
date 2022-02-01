import { pipe } from "fp-ts/function";

const add5 = (x: number) => x + 5;
const multiply2 = (x: number) => x * 2;

const one = multiply2(add5(3)); // OK
/**
 * 左から右へと実行結果を渡していくパイプライン関数
 */
const two = pipe(3, add5, multiply2); // Better

console.log(one, two); // 16, 16
