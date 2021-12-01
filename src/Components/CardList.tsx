import * as React from 'react'
import { IRobot } from '../Containers/App/App'
import Card from './Card'

interface ICardListStateless {
  robots: Array<IRobot>
}

const CardList: React.FunctionComponent<ICardListStateless> = ({
  robots
}) => {
  return (
    <div>
      {robots.map(robot => {
        return <Card key={robot.id} {...robot} />
      })}
    </div>
  )
}

export default CardList
