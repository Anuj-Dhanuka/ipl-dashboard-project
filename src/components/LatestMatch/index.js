// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchDetails
  return (
    <div className="latest-match-bg-container">
      <div className="latest-match-opponent-container">
        <p className="latest-match-opponent">{competingTeam}</p>
        <p className="latest-match-date">{date}</p>
        <p className="latest-match-venue">{venue}</p>
        <p className="latest-match-winner">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="latest-team-opponent-image"
      />
      <div className="latest-match-opponent-container">
        <p className="latest-match-innings-text">First Innings</p>
        <p className="latest-match-innings-text">{firstInnings}</p>
        <p className="latest-match-innings-text">Second Innings</p>
        <p className="latest-match-innings-text">{secondInnings}</p>
        <p className="latest-match-man-of-the-match">Man Of The Match</p>
        <p className="latest-match-innings-text">{manOfTheMatch}</p>
        <p className="latest-match-innings-text">Umpire</p>
        <p className="latest-match-innings-text">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
