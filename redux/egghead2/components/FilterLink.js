import {connect} from 'react-redux'
import Link from './Link'
import React from 'react'
import {setVisibility} from '../actions'

const mapStateToPropsFilterLink = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}
const mapDispatchToPropsFilterLink = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibility(ownProps.filter))
    }
  }
}
const FilterLink = connect(mapStateToPropsFilterLink, mapDispatchToPropsFilterLink)(Link)

export default FilterLink
