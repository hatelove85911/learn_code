export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('todoState')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (e) {
    /* handle error */
    return undefined
  }
}


export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('todoState', serializedState)
  } catch (e) {
    /* ignore error */
  }
}
