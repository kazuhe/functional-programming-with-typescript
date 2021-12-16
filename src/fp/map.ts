import _, { map } from "lodash";
import { Person } from ".";

const iterator = (x: Person) =>
  x !== null && x !== undefined ? x.fullname : "";

export const personsToFullname = (persons: Person[]): string[] =>
  map(persons, iterator);

// `_()` で値をラップすることでメソッドチェーンシーケンスを有効にするlodashオブジェクトが作成される
// 単一の値を取得するメソッド、またはプリミティブ値を返す可能性のあるメソッドは
// チェーンシーケンスを自動的に終了しラップされていない値を返す
// それ以外の場合は `value()` でラップを解除する必要がある
// また、遅延実行されており、`value()` が暗黙的または明示的に呼び出されるまで延期される
export const personsToFullnameReverse = (persons: Person[]): string[] =>
  _(persons).reverse().map(iterator).value();
