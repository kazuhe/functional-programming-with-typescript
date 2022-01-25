import { succ } from "./succ";
import { mapper } from "./mapper";
import { normalize } from "./manipulation/normalize";
import { trim } from "./manipulation/trim";

/**
 * 関数を組み合わせて奇数の値を持った配列から偶数の値を持つ配列に変換する
 */
const toEven = mapper(succ);
const oddArray = [1, 3, 5];
console.log(toEven(oddArray));

// 基本的な逐次パイプライン
console.log(normalize(trim("777-7777-7777 ")));

/**
 * ramda サンプル
 */
import { prop, assoc, lens, view, set, lensPath, lensProp } from "ramda";

type User = {
  name: string;
  email: string;
  age: number;
  foo?: string;
  address: {
    zipcode: string;
  };
};

const user: User = {
  name: "Bret",
  email: "bred@april.biz",
  age: 22,
  address: {
    zipcode: "92998-3874",
  },
};
Object.freeze(user);

// プロパティにアクセス
console.log("prop:", prop("name", user)); // => prop: Bret

// プロパティを変更する（副作用なしで新しいオブジェクトを返す）
const foo = assoc<number, User, string>("age", 23, user);
console.log("foo:", foo, "\nuser:", user);
// =>
// foo: {
//   name: 'Bret',
//   email: 'bred@april.biz',
//   age: 23,
//   address: { zipcode: '92998-3874' }
// }
// user: {
//   name: 'Bret',
//   email: 'bred@april.biz',
//   age: 22,
//   address: { zipcode: '92998-3874' }
// }

// lens => getter や setter を関数型プログラミング的に抽象化したもの
const ageLens = lens(prop<string>("age"), assoc<string>("age"));
const ageLens2 = lensProp<User>("age"); // 上のシンタックスシュガー的なやつ
console.log("view:", view(ageLens, user)); // => view: 22
console.log("view:", view(ageLens2, user)); // => view: 22
console.log("set:", set(ageLens, 28, user));
// =>
// set: {
//   name: 'Bret',
//   email: 'bred@april.biz',
//   age: 28,
//   address: { zipcode: '92998-3874' }
// }

// ネストしたプロパティに直接アクセス
const zipcodeLens = lensPath(["address", "zipcode"]);
console.log("view:", view(zipcodeLens, user)); // => view: 92998-3874
