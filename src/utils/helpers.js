export function formatDate(timestamp) {
  const date = new Date(timestamp)
  const formattedDate = date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return formattedDate
}
