import assert from 'assert'
import {greatestIndex, integerRing} from './util.js'

/**
 @pure
 @recursive

 @desc the unidirectional ring FSM is handy when you have a finite state space
 and can only change in one direction. When the state gets to the end, it will
 wrap around to the start.

 I.e. schematically
 states : [a, b, c]
 ----------^->^->^|
           ^      v
           +------+
 */
export default function unidirectionalRingFSM (def, currentIndex = 0) {
  assert(def.states, `argument[0]{states}
must be defined as an array of at least one element`)
  assert(currentIndex >= 0, `argument[1]currentIndex
must be zero or greater`)

  const maxIndex = greatestIndex(def.states)
  assert(currentIndex <= maxIndex, `argument[1]currentIndex
must be less than the length of the array of defined states`)

  const nextIndex = integerRing(currentIndex + 1, maxIndex)

  return {
    current: () => def.states[currentIndex],
    step: () => unidirectionalRingFSM(def, nextIndex)
  }
}
