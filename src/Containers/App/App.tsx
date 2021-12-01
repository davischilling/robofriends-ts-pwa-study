import React from 'react'
import CardList from '../../Components/CardList'
import ErrorBoundry from '../../Components/ErrorBoundry'
import Scroll from '../../Components/Scroll'
import SearchBox from '../../Components/SearchBox'
import './App.css'

export interface IRobot {
  name: string
  id: number
  email: string
}

interface IAppProps {}

interface IAppState {
  robots: Array<IRobot>
  searchField: string
}

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props)
    this.state = {
      robots: [],
      searchField: ''
    }
  }

  componentDidMount(): void {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        this.setState({ robots: users })
      })
  }

  onSearchChange = (
    event: React.SyntheticEvent<HTMLInputElement>
  ): void => {
    this.setState({ searchField: event.currentTarget.value })
  }

  render(): JSX.Element {
    const { robots, searchField } = this.state
    const filteredRobots = robots.filter(robot => {
      return robot.name
        .toLocaleLowerCase()
        .includes(searchField.toLocaleLowerCase())
    })
    return !robots.length ? (
      <h1 className="tc f1">Loading...</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    )
  }
}

export default App
