
import {test} from 'tape'
import cyclingFSM from './cycling_fsm.js'

test('cyclingFSM::basic', t => {
  const states = ['1st', '2nd', '3rd']
  const fsm1 = cyclingFSM({
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

test('cyclingFSM::invalid config', t => {
  t.throws(() => cyclingFSM())
  t.throws(() => cyclingFSM([]))
  t.throws(() => cyclingFSM([1], -1))
  t.throws(() => cyclingFSM([1], 2))
  t.end()
})
