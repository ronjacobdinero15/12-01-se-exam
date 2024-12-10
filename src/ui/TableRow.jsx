function TableRow({ children, style = 'body' }) {
  const base = ''

  const styles = {
    header:
      base +
      ' [&_th]:px-4 [&_th]:py-2 [&_th]:border [&_th]:border-gray-300 text-left bg-gray-200',
    body:
      base + ' [&_td]:px-4 [&_td]:py-2 [&_td]:border [&_td]:border-gray-300',
  }

  return <tr className={styles[style]}>{children}</tr>
}

export default TableRow
