/**
 * 引数より大きい表示可能な最小数を返す
 * @param x 計算対象
 * @returns 計算結果
 */
type Succ = (x: number) => number

export const succ: Succ = (x) => ++x
