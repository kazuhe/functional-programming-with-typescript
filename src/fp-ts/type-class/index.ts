/**
 * 型クラス（type classes）とは、データ構造に対して共通の構造を定義すること
 * その共通部分を同じ存在だとみなすことでポリモーフィズムを実現する
 */

// 型クラス
type Semigroup<A> = {
  concat: (x: A, y: A) => A;
};

// 型クラスのインスタンス
const strSemi: Semigroup<string> = {
  concat: (x, y) => x + y,
};

console.log(strSemi.concat("a", "b")); // ab

// プリミティブではない型もOK
type Book = {
  name: string;
  page: number;
};

const bookSemi: Semigroup<Book> = {
  concat: (x, y) => ({
    name: x.name + "/" + y.name,
    page: x.page + y.page,
  }),
};

console.log(
  bookSemi.concat({ name: "foo", page: 100 }, { name: "bar", page: 200 })
); // { name: 'foo/bar', page: 300 }

/**
 * アドホック多相
 * 「パラメータ多相（ジェネリクス）」や「派生型」と並ぶ技法
 * アドホック多相とは、処理の対象の型によって処理を変えるような多相性のこと
 */

// string に変換する処理を持つことを保証する型クラス
type ToString<A> = {
  toString: (a: A) => string;
};

// 型クラスを用いて多相的に振る舞う関数
// とある型 A に対してインスタンス化された ToString を受け取る
const show =
  <A>(instance: ToString<A>) =>
  (a: A) =>
    console.log(instance.toString(a));

type Dog = {
  name: string;
};

type Person = {
  firstName: string;
  lastName: string;
};

// Dog に対してのインスタンス化
const dogToString: ToString<Dog> = {
  toString: (a) => a.name,
};

// Person に対してのインスタンス化
const personToString: ToString<Person> = {
  toString: (a) => a.firstName + " " + a.lastName,
};

show(dogToString)({ name: "pochi" }); // pochi
show(personToString)({ firstName: "taro", lastName: "yamada" }); // taro yamada

/**
 * パラメータ多相
 * 型クラスの補助があることでより表現力を増す
 */

const sum = (as: number[]) => as.reduce((a, b) => a + b, 0);

console.log(sum([1, 2, 3])); // 6

// sum 関数を一般化して Array<A> に対して add を定義しよとうとする
// const sumGeneric = <A>(as: A[]) => as.reduce((a, b) => a + b, ?);
// => 演算子 '+' を型 'A' および 'A' に適用することはできません。ts(2365)
// => Argument expression expected.
// => A型のa,bに対して+は定まっていない & 初期値が定められない

// ただジェネリクスを使用するだけではこの多相性は実現できない
// ここで活躍するのが型クラスであり、上の処理で足りない部分を補う型クラスMonoidを定義する
type Monoid<A> = {
  empty: A;
  concat: (a: A, b: A) => A;
};

// 型クラスのインスタンス
const numberMonoid: Monoid<number> = {
  empty: 0,
  concat: (a, b) => a + b,
};

// 型クラスのインスタンス
const dogMonoid: Monoid<Dog> = {
  empty: { name: "" },
  concat: (a, b) => ({
    name: a.name + "/" + b.name,
  }),
};

// そして Monoid を使用することによって定義できる generic な sum
const sumGeneric =
  <A>(mon: Monoid<A>) =>
  (as: A[]) =>
    as.reduce(mon.concat, mon.empty);

console.log(sumGeneric(numberMonoid)([1, 2, 3])); // 6
console.log(sumGeneric(dogMonoid)([{ name: "big" }, { name: "john" }])); // { name: '/big/john' }
