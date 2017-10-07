
import {test} from 'tape'
import linearStateMachine from './linear_fsm.js'

test('basic', t => {
  const states = ['1st', '2nd', '3rd']
  const fsm1 = linearStateMachine({
    states
  })

  t.equals(fsm1.current(), states[0])

  const fsm2 = fsm1.step()
  t.equals(fsm2.current(), states[1])

  const fsm3 = fsm2.step()
  t.equals(fsm3.current(), states[2])

  const fsm4 = fsm3.step()
  t.equals(fsm4.current(), states[0]) // <-- wrapped around

  t.end()
})

test('invalid config', t => {
  t.throws(() => linearStateMachine())
  t.throws(() => linearStateMachine([]))
  t.throws(() => linearStateMachine([1], -1))
  t.throws(() => linearStateMachine([1], 2))
  t.end()
})
