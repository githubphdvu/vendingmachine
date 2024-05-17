import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
function VendingMachine() {
    return (
        <div>
            <h1>Vending Machine component</h1>
            <li><Link to="/soda">Soda component</Link></li>
            <li><Link to="/chips">Chips component</Link></li>
        </div>
    )
}
function Soda() {
    return (
        <div>
        <h2>Soda</h2>
        <p>This is Soda component</p>
        <Link to="/">Back</Link>
        </div>
    )
}
function Chips() {
    return (
        <div>
            <h2>Chips</h2>
            <p>This is Chips component</p>
            <Link to="/">Back</Link>
        </div>
    )
}
export default function App21() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<VendingMachine />} />
                <Route path="/soda" element={<Soda />} />
                <Route path="/chips" element={<Chips />} />
            </Routes>
        </BrowserRouter>
    )
}

import React from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
function NavBar() {
  return (
    <nav>
      <ul>
        <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/soda" activeClassName="active">Soda</NavLink></li>
        <li><NavLink to="/chips" activeClassName="active">Chips</NavLink></li>
      </ul>
    </nav>
  );
}
function VendingMachine() {
  return (
    <div>
      <h1>Vending Machine component</h1>
      <NavBar />
      <li><Link to="/soda">Soda component</Link></li>
      <li><Link to="/chips">Chips component</Link></li>
    </div>
  );
}
function Soda() {
  return (
    <div>
      <h2>Soda</h2>
      <p>This is Soda component</p>
      <NavBar />
      <Link to="/">Back</Link>
    </div>
  );
}
function Chips() {
  return (
    <div>
      <h2>Chips</h2>
      <p>This is Chips component</p>
      <NavBar />
      <Link to="/">Back</Link>
    </div>
  );
}
export default function App21() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VendingMachine />} />
        <Route path="/soda" element={<Soda />} />
        <Route path="/chips" element={<Chips />} />
      </Routes>
    </BrowserRouter>
  );
}


import React from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/" className='.active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/soda"
            className='.active'>
            Soda
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/chips"
            className='.active'>
            Chips
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
function VendingMachine() {
  return (
    <div>
        <NavBar />
        <h1>Vending Machine component</h1>
        <ul>
            <li><Link to="/soda">Soda component</Link></li>
            <li><Link to="/chips">Chips component</Link></li>
        </ul>
        </div>
  );
}
function Soda() {
  return (
    <div>
    <NavBar />
        <h2>Soda</h2>
        <p>This is Soda component</p>
        <Link to="/">Back</Link>
    </div>
  );
}
function Chips() {
  return (
    <div>
    <NavBar />
        <h2>Chips</h2>
        <p>This is Chips component</p>
        <Link to="/">Back</Link>
    </div>
  );
}
export default function App21() {
  return (
    <BrowserRouter>
      <style>{`
        .navbar {
          background-color: #333;
          overflow: hidden;
        }
        
        .navbar ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
          display: flex;
        }
        
        .navbar li {
          flex: 1;
        }
        
        .navbar a {
          display: block;
          color: white;
          text-align: center;
          padding: 14px 16px;
          text-decoration: none;
        }
        
        .navbar a:hover {
          background-color: #ddd;
          color: black;
        }
        
        .active {
          font-weight: bold;
          color: yellow;
        }
      `}</style>
      <Routes>
        <Route path="/" element={<VendingMachine />} />
        <Route path="/soda" element={<Soda />} />
        <Route path="/chips" element={<Chips />} />
      </Routes>
    </BrowserRouter>
  );
}
