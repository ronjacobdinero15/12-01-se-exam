function Header({ as, children }) {
  const base = 'pb-5'

  const styles = {
    h1: base + ' text-5xl',
    h2: base + ' text-3xl',
    h3: base + ' text-2xl',
  }

  return <div className={styles[as]}>{children}</div>
}

export default Header
