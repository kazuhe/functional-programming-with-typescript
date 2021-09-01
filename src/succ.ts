/**
 * 引数より大きい表示可能な最小数を返す
 * @param x
 */
type Succ = (x: number) => number

export const succ: Succ = (x) => x++
