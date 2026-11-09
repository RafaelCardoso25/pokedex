import '../css/Header.css'

const TABS = [
  { id: 'pokedex', label: 'Pokédex' },
  { id: 'trainers', label: 'Treinadores' },
]

function Header({ view, onChangeView, theme, onToggleTheme }) {
  const isDark = theme === 'dark'

  return (
    <header className="header">
      <div className="header-brand">
        <span className="header-lights" aria-hidden="true">
          <span className="light light-big" />
          <span className="light light-red" />
          <span className="light light-yellow" />
          <span className="light light-green" />
        </span>
        <h1>Pokédex</h1>
      </div>

      <div className="header-actions">
        <nav className="header-nav">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`header-tab ${view === tab.id ? 'active' : ''}`}
              onClick={() => onChangeView(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label={isDark ? 'Ativar tema claro' : 'Ativar tema escuro'}
          title={isDark ? 'Tema claro' : 'Tema escuro'}
        >
          {isDark ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  )
}

export default Header
