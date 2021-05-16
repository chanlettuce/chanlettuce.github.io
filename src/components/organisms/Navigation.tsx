import { Link } from "gatsby";
import React, { FC } from "react";

export const Navigation: FC = () => {
  return (
    <nav className="global-navigation">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/works">Works</Link>
        </li>
        <li>
          <Link to="/tech-fields">Tech Fields</Link>
        </li>
        <li>
          <Link to="/qa">Q&amp;A</Link>
        </li>
      </ul>
    </nav>
  );
};