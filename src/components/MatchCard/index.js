// Write your code here

import './index.css'

const MatchCard = props => {
  const {recentMatchesDetails} = props

  const {
    competingTeam,
    competingTeamLogo,
    result,
    matchStatus,
  } = recentMatchesDetails
  const matchCardWinOrLossStyle =
    matchStatus === 'Won' ? 'match-card-win' : 'match-card-loss'
  return (
    <li className="match-card-bg-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-card-opponent-image"
      />
      <div className="competing-team-title-container">
        <p className="match-card-title">{competingTeam}</p>
      </div>

      <p className="match-card-winner">{result}</p>
      <p className={matchCardWinOrLossStyle}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
