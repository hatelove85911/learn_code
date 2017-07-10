import {div} from '@cycle/dom'
import xs from 'xstream'

export function App (sources) {
  states$ = xs.of('Games', 'Players', 'Settings')
  states$.map( => )

  .map(x=> )

  const vtree$ = xs.of(
    div('My Awesome Cycle.js app')
  )
  const sinks = {
    DOM: vtree$
  }
  return sinks
}
