import React from 'react';
import { Link } from 'react-router-dom';
import { ViewType } from '../../interfaces/customTypes';
import './Navbar.css';

interface Props {
  currentView: ViewType | null;
}

export default function Navbar({ currentView }: Props) {
  return (
    <nav aria-label="Main navigation" className="navbar">
      <h1 className="nav-title">
        <span>./</span>code<span>/</span>blog
      </h1>
      <ul className="nav-list">
        <li className="nav-list-item">
          <Link
            to="/all"
            className={`${currentView === 'All' ? 'active' : ''}`}
            aria-current={currentView === 'All' ? 'page' : undefined}>
            All Articles
          </Link>
        </li>
        <li className="nav-list-item">
          <Link
            to="/latest"
            className={`${currentView === 'Latest' ? 'active' : ''}`}
            aria-current={currentView === 'Latest' ? 'page' : undefined}>
            Latest Articles
          </Link>
        </li>
        <li className="nav-list-item">
          <Link
            to="/about"
            className={`${currentView === 'About' ? 'active' : ''}`}
            aria-current={currentView === 'About' ? 'page' : undefined}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
