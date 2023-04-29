import PropTypes from 'prop-types';
import './GlobalStyle.scss'

const GlobalStyle = ({ children }) => {
    return children
}

GlobalStyle.propTypes = {
    children: PropTypes.node.isRequired,
}

export default GlobalStyle