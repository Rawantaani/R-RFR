
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {
  const [adminActive, setadminActive] = useState(false)
  const user = JSON.parse(localStorage.getItem('user'))
  useEffect(() => { user ? setadminActive(true) : setadminActive(false) }, [])
  const navigate=useNavigate()
  const handleClick=()=>{
    localStorage.removeItem('user')
    setadminActive(false)
    // dispatch logout action
    navigate('/')
   window.location.reload();
  }
  return (


    <nav className="navbar navbar-expand-lg navbar-dark ">
      <div className="container">

        <Link className="nav-link" to="/">R&R Company</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
          {/* Search Form */}

          <form className="d-flex ms-auto " role="search">
            <input className="form-control me-1" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-light" type="submit">Search</button>
          </form>
          {!adminActive && (
            <ul className="navbar-nav ">
              <li className="nav-item active ">

                <Link className="nav-link" to="/login">Login</Link>
              </li>

            </ul>)}
            {adminActive && (
            <ul className="navbar-nav ">
              <li className="nav-item active ">
              <button className="btn btn-outline-light"  onClick={handleClick}>Log out</button>

              </li>

            </ul>)}
            
        </div>
      </div>
    </nav>


  )
}

export default Navbar