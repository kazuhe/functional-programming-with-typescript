import { succ } from './succ'
import { mapper } from './mapper'

/**
 * 関数を組み合わせて奇数の値を持った配列から偶数の値を持つ配列に変換する
 */
const toEven = mapper(succ)
const oddArray = [1, 3, 5]
console.log(toEven(oddArray))
