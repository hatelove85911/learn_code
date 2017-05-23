import React from 'react'

const ErrorMessage = ({errorMessage, onRetry}) => {
  return (
    <div>
      <p>error: {errorMessage}</p>
      <button onClick={onRetry}>Retry</button>
    </div>
  )
}

export default ErrorMessage
