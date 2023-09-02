// Write your code here
import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

class TeamCard extends Component {
  render() {
    const {teamCardList} = this.props
    const {id, name, teamImageUrl} = teamCardList
    return (
      <Link className="team-card-link-item" to={`/team-matches/${id}`}>
        <li className="team-card-bg-container">
          <img src={teamImageUrl} alt={name} className="team-card-image" />
          <p className="team-card-team-name">{name}</p>
        </li>
      </Link>
    )
  }
}

export default TeamCard
