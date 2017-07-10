import xs from 'xstream'
import {div, ul, li, button} from '@cycle/dom'

function intent(domSource) {
  return {
    createNewGame$: domSource.select('.fs-btn-newgame').events('click'),
    requests: xs.of({
      url: 'https://api.github.com/users',
      category: 'games'
    })
  }
}
function model(actions, HTTP) {
  const games$ = HTTP.select('games').flatten().map(resp=>resp.body);

  return {
    showNewgame$: actions.createNewGame$.mapTo(true).startWith(false),
    games$
  }
}

function view({games$, showNewgame$}) {
  return xs.combine(games$, showNewgame$).map(combined => {
    var games = combined[0];
    var showNewgame = combined[1];
    
    return div([
      ul('.list-group', games.map(g => (
        li('.list-group-item', g.login)
      ))),
      button('.btn .btn-success .btn-block .fs-btn-newgame', 'New Game'),
      showNewgame ? button('.btn .btn-default', 'show new game') : ''
    ])
  })
}
export function App(sources) {
  const {DOM, HTTP} = sources;

  const actions = intent(DOM);
  const state$ = model(actions, HTTP);
  const vdom$ = view(state$);

  const sinks = {
    DOM: vdom$,
    HTTP: actions.requests
  }

  return sinks
}
