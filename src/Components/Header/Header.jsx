import React from 'react'
import logo from "../../netflix-logo-drawing-png-19.png"
import { Link } from 'react-router-dom'
import {BsSearch} from "react-icons/bs"

const Header = () => {
  return (
    <nav className="header">
<img src={logo} alt="logo" />

<div>
    <Link to="/TVshows">TV Shows</Link>
    <Link to="/movies">Movies</Link>
    <Link to="/recent">Recently Added</Link>
    <Link to="/myList">My List</Link>
</div>

<BsSearch/>

    </nav>
  )
}

export default Header