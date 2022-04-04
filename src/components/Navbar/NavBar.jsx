import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from "./NavBar.module.css"

const NavBar = () => {
  return (
    <div className={styles.navbar} >
<Link  to='/'>The<span className={styles.cocktail}>Cocktail</span>DB</Link>
<div className={styles.navbarRight}>
  <NavLink className={({ isActive }) => (isActive ? styles.isActive:undefined)} to="/">Home</NavLink>
  <NavLink className={({ isActive }) => (isActive ? styles.isActive:undefined)} to='/about'>About</NavLink>
</div>

    </div>
  )
}

export default NavBar