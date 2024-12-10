function Form({ children, onSubmit, onChange }) {
  return (
    <form
      onSubmit={onSubmit}
      onChange={onChange}
      className="relative w-full space-y-4"
    >
      {children}
    </form>
  )
}

export default Form
