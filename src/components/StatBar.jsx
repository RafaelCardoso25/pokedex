import { MAX_STAT } from '../utils/pokemon.js'
import '../css/StatBar.css'

function StatBar({ label, value, color }) {
  const percent = Math.min(100, (value / MAX_STAT) * 100)

  return (
    <div className="stat-bar">
      <span className="stat-bar-label">{label}</span>
      <span className="stat-bar-value">{value}</span>
      <div className="stat-bar-track">
        <div
          className="stat-bar-fill"
          style={{ width: `${percent}%`, backgroundColor: color }}
        />
      </div>
    </div>
  )
}

export default StatBar
