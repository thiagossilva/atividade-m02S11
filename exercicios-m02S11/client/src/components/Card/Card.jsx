import PropTypes from 'prop-types'
import { CardStyled } from './styles'

function Card({ children }) {
  return <CardStyled>{children}</CardStyled>
}

Card.propTypes = {
  children: PropTypes.node.isRequired
}

export default Card
