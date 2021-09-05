/**
 * 受け取った変換関数を適用して新しい配列に変換する
 * @param transform 変換関数
 * @returns 新しい配列に変換する関数
 */
export type Mapper = (transform: any) => (array: number[]) => never[]

export const mapper: Mapper = (transform) => (array) =>
  array.reduce((accumulator, item) => {
    return accumulator.concat(transform(item))
  }, [])
