const assert = require('assert')

import {greatestIndex, integerRing} from './util.js'

export default function linearStateMachine (def, currentIndex = 0) {
  assert(def.states,
         'argument[0]{states} must be defined as an array of at least one element')
  assert(currentIndex >= 0, 'argument[1]currentIndex must be zero or greater')

  const maxIndex = greatestIndex(def.states)
  assert(currentIndex <= maxIndex,
         'argument[1]currentIndex must be less than the length of the array of defined states')

  const nextIndex = integerRing(currentIndex + 1, maxIndex)

  return {
    current: () => def.states[currentIndex],
    step: () => linearStateMachine(def, nextIndex)
  }
}
