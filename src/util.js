import assert from 'assert'

export const or = (a, b) => a || b
export const and = (a, b) => a && b
export const any = (xs, reducer) => xs.reduce(reducer || or, false)
export const all = (xs, reducer) => xs.reduce(reducer || and, true)

export const isNothing = (a) => a === null || a === void 0

export const isNumber = (a) => {
  if (isNothing(a)) {
    return false
  }

  if (a.constructor === Number) {
    return true
  }

  // not a number, if any of the checks are true
  const nan = any([
    a.constructor === Array,
    a.constructor === Date
  ])

  if (nan) {
    return false
  }

  return !isNaN(Number(a))
}

/**
 @pure

 @throws AssertionError

 @desc Uses the array(-like object)'s length property to discern the greatest
 index of that array. This is implemented for readability purposes, i.e.
 const max = greatestIndex(a) // reads better than
 const max = a.length - 1
 */
export const greatestIndex = (arraylike) => {
  assert(arraylike, 'argument[0]arraylike may not be nothing')
  assert(!isNothing(arraylike.length), 'argument[0]arraylike must have a length property')
  assert(isNumber(arraylike.length), 'argument[0]arraylike.length must be an number')

  return arraylike.length - 1
}

/**
 @pure

 @throws AssertionError

 @desc the integer ring is a function that computes the next integer
 given a minimum and a maximum value. If the "next" value is out of
 bounds, it will wrap around to the "other" side.
 I.e. given the following bounds:
 min = 1
 max = 2

 next would be:
 0 -> 2
 1 -> 1
 2 -> 2
 3 -> 0
 */
export const integerRing = (next, max, min = 0) => {
  assert(min < max, 'min must be less than max')

  // if next is less than minimum, wrap around to max
  return next < min ? max
    // otherwise, if next is greater than max, wrap around to min
    : next > max ? min
    // otherwise, next is good, use that.
    : next
}
