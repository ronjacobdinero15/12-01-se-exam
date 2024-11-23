function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <main>
      <p>Something went wrong</p>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>Try again</button>
    </main>
  )
}

export default ErrorFallback
