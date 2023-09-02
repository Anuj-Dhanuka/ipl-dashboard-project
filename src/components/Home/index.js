// Write your code here
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamCardList: [], isLoading: true}

  componentDidMount() {
    this.getTeamCardList()
  }

  getTeamCardList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const teamsData = data.teams
    const updatedData = teamsData.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({teamCardList: updatedData, isLoading: false})
  }

  render() {
    const {teamCardList, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div className="ipl-home-bg-container" data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="ipl-home-bg-container">
            <div className="ipl-main-logo-title-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="ipl-main-logo"
              />
              <h1 className="ipl-main-heading">IPL Dashboard</h1>
            </div>
            <ul className="ipl-home-ul-container">
              {teamCardList.map(eachItem => (
                <TeamCard key={eachItem.id} teamCardList={eachItem} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
