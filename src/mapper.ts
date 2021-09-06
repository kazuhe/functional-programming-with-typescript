/**
 * 受け取った変換関数を適用して新しい配列に変換する
 * @param transform 変換関数
 * @returns 新しい配列に変換する関数
 */
export type Mapper = <T, U>(transform: (x: T) => U) => (array: T[]) => U[]

export const mapper: Mapper = (transform) => (array) => array.map(transform)
