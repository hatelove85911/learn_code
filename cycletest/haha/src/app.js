import {div, button, h2, ul, li} from '@cycle/dom'
import xs from 'xstream'
import isolate from '@cycle/isolate';

function intent(domSource) {
}
function model(action$) {
  return {
    games: xs.of([{
    name: 'haha'
  }, {
    name: 'hello'
  }, {
    name: 'abc'
  }])
  }
}

function view(state$) {

  const vdom$ = state$.games.map(games => ul('.list-group', games.map(g => li('.list-group-item', g.name))))

  return {
    DOM: vdom$
  }
}

export function App (sources) {
  const action$ = intent(sources.DOM)
  const state$ = model(action$)
  const view$ = view(state$)

  const sinks = {
    DOM: view(state$).DOM
  }

  return sinks
}
