import {h} from '@cycle/dom'
import xs from 'xstream'

export function App (sources) {

  const click$ = sources.DOM.select('.getRandom').events('click');
  const getRandomUser$ = click$.map(() => {
    const randomNum = Math.round(Math.random() * 9) + 1;
    return {
            url: 'https://jsonplaceholder.typicode.com/users/' + String(randomNum),
            category: 'users',
            method: 'GET'
    };
  })


  const users$ = sources.HTTP.select('users')
                  .flatten()
                  .map(res => res.body)
                  .startWith(null);

  const vdom$ = users$.map(user =>
    h('div.users', [
      h('button.getRandom', 'Get random user'),
      user === null ? null : h('div.user-details', [
        h('h1.user-name', user.name),
        h('h4.user-email', user.email),
        h('a.user-website', {href: user.website}, user.website)
      ])
    ])
  );

  const driverSinks = {
    // DOM: sources.DOM.select('input').events('change')
    //   .map(ev => ev.target.checked).startWith(false)
    //   .map(toggle => h('div', [h('input', {attrs: {type: 'checkbox'}}),
    //                           'Toggle Me',
    //                            h('p', toggle ? "On" : "Off")])
    //   ),
    DOM: vdom$,
    HTTP: getRandomUser$
  }

  return driverSinks;
}
