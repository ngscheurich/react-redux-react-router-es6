import React from 'react'
import { Link, IndexLink } from 'react-router'
import logo from './logo.svg'

const Header = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <IndexLink to="/" className="navbar-brand">
        <img src={logo} width="30" height="30" alt="Pluralsight Administration logo" />
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

export default Header
