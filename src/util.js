const assert = require('assert')

export const greatestIndex = (array) => array.length - 1

export const integerRing = (next, max, min = 0) => {
  assert(min < max, 'min must be less than max')

  // if next is less than minimum, wrap around to max
  return next < min ? max :
    // otherwise, if next is greater than max, wrap around to min
    next > max ? min :
    // otherwise, next is good, use that.
    next
}
