
import {test} from 'tape'

import {
  isNothing,
  isNumber,
  greatestIndex,
  integerRing
} from './util.js'

test('isNothing', t => {
  t.ok(isNothing())
  t.ok(isNothing(null))
  t.ok(isNothing(void 0))
  t.ok(!isNothing(0))
  t.ok(!isNothing([]))
  t.ok(!isNothing(''))
  t.ok(!isNothing(false))
  t.end()
})

test('isNumber', t => {
  t.ok(isNumber(0))
  t.ok(isNumber('0'))
  t.ok(!isNumber('a'))
  t.ok(!isNumber([]))
  t.ok(!isNumber({}))
  t.ok(!isNumber(/a/))
  t.ok(!isNumber(isNumber))
  t.ok(!isNumber(new Date()))
  t.end()
})

test('greatestIndex', t => {
  t.throws(() => greatestIndex())
  t.throws(() => greatestIndex(0))
  t.throws(() => greatestIndex({}))

  t.equals(greatestIndex([]), -1)
  t.equals(greatestIndex([1]), 0)
  t.equals(greatestIndex([1, 2]), 1)

  t.end()
})

test('integerRing', t => {
  t.throws(() => integerRing(0, 0))
  t.throws(() => integerRing(0, 0, 0))

  t.equals(integerRing(0, 1, 0), 0)
  t.equals(integerRing(1, 1, 0), 1)
  t.equals(integerRing(2, 1, 0), 0)
  t.equals(integerRing(-1, 1, 0), 1)
  t.equals(integerRing(-1, 1, -1), -1)
  t.equals(integerRing(-2, 1, -1), 1)
  t.end()
})
