function Table({ children }) {
  return (
    <table className="w-full overflow-hidden border-2 border-separate border-gray-300 rounded-md">
      {children}
    </table>
  )
}

export default Table
