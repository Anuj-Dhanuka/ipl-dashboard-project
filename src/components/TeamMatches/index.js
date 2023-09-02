// Write your code here
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import './index.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    teamBannerUrl: '',
    latestMatchDetails: {},
    recentMatchesDetails: [],
    teamId: '',
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatchesList()
  }

  getTeamMatchesList = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      initialTeamBannerUrl: data.team_banner_url,
      initialLatestMatchDetails: data.latest_match_details,
      initialRecentMatches: data.recent_matches,
    }
    const {
      initialTeamBannerUrl,
      initialLatestMatchDetails,
      initialRecentMatches,
    } = updatedData

    const updatedLatestMatchDetails = {
      competingTeam: initialLatestMatchDetails.competing_team,
      competingTeamLogo: initialLatestMatchDetails.competing_team_logo,
      date: initialLatestMatchDetails.date,
      firstInnings: initialLatestMatchDetails.first_innings,
      id: initialLatestMatchDetails.id,
      manOfTheMatch: initialLatestMatchDetails.man_of_the_match,
      matchStatus: initialLatestMatchDetails.match_status,
      result: initialLatestMatchDetails.result,
      secondInnings: initialLatestMatchDetails.second_innings,
      umpires: initialLatestMatchDetails.umpires,
      venue: initialLatestMatchDetails.venue,
    }

    const updatedRecentMatches = initialRecentMatches.map(eachItem => ({
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      date: eachItem.date,
      firstInnings: eachItem.first_innings,
      id: eachItem.id,
      manOfTheMatch: eachItem.man_of_the_match,
      matchStatus: eachItem.match_status,
      result: eachItem.result,
      secondInnings: eachItem.second_innings,
      umpires: eachItem.umpires,
      venue: eachItem.venue,
    }))

    this.setState({
      teamBannerUrl: initialTeamBannerUrl,
      latestMatchDetails: updatedLatestMatchDetails,
      recentMatchesDetails: updatedRecentMatches,
      teamId: id,
      isLoading: false,
    })
  }

  render() {
    const {
      teamBannerUrl,
      latestMatchDetails,
      recentMatchesDetails,
      teamId,
      isLoading,
    } = this.state
    console.log(teamId)
    return (
      <div>
        {isLoading ? (
          <div className="ipl-home-bg-container" data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className={`team-matches-bg-container ${teamId}`}>
            <div className="team-matches-inner-container">
              <img
                src={teamBannerUrl}
                alt="team banner"
                className="team-matches-banner-image"
              />
              <p className="latest-match-main-title">Latest Match</p>
              <LatestMatch
                latestMatchDetails={latestMatchDetails}
                key={latestMatchDetails.id}
              />
              <div className="team-match-ul-outside-container">
                <ul className="team-matches-match-card-ul-container">
                  {recentMatchesDetails.map(eachItem => (
                    <MatchCard
                      key={eachItem.id}
                      recentMatchesDetails={eachItem}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
