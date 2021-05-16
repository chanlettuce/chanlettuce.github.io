import { Link } from 'gatsby';
import React, { FC } from 'react';
import { links } from '../../constants/links';

export const Navigation: FC = () => {
  return (
    <nav className="global-navigation">
      <ul>
        {links.map((e, i) => (
          <li key={`nav-link-${i}`}>
            <Link to={e.to}>{e.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
