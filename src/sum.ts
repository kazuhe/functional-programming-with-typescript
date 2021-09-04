/**
 * 引数で受け取った配列の全ての値を加算する
 * @param array 配列
 * @returns 実行関数
 */
type Sum = (array: number[]) => number

export const sum: Sum = (array) => {
  return array.reduce((accumulator, item) => accumulator + item, 0)
}
