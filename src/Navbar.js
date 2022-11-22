import React from 'react';


export default function Navbar() {
  return (
    <nav className="n">
      <a href="/" className="title">
      </a>
      <ul>
        <li>
          <a href="/Home">Home</a>
        </li>
        <li>
          <a href="/About">About</a>
        </li>
        <li>
          <a href="/Contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
