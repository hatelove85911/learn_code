import {run} from '@cycle/run'
import {makeDOMDriver} from '@cycle/dom'
import {App} from './app'
import alertDriver from './alertDriver.js'

const main = App

const drivers = {
  DOM: makeDOMDriver('#app'),
  Alert: alertDriver
}

run(main, drivers)
