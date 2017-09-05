import React, { PropTypes } from 'react'
import { Link, IndexLink } from 'react-router'
import logo from './logo.svg'
import puff from './puff.svg'

const Header = ({loading}) => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <IndexLink to="/" className="navbar-brand">
        <img src={loading ? puff : logo} width="30" height="30" alt={loading ? 'App logo' : 'Loading...'} />
      </IndexLink>
      <div className="collapse navbar-collapse">
        <div className="navbar-nav">
          <IndexLink to="/" className="nav-item nav-link" activeClassName="active">Home</IndexLink>
          <Link to="/courses" className="nav-item nav-link" activeClassName="active">Courses</Link>
          <Link to="/about" className="nav-item nav-link" activeClassName="active">About</Link>
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  loading: PropTypes.bool.isRequired
}

export default Header
