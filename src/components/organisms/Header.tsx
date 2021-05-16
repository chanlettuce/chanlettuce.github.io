import React, { FC } from "react";

export interface HeaderProps {
  title: string;
  isRootPage?: boolean;
}

export const Header: FC<HeaderProps> = ({ title, isRootPage }) => {
  const headerTagClassPrefix = isRootPage ? "root" : "branch";
  return (
    <header className={`global-header ${headerTagClassPrefix}-page-header`}>
      <div className="header-logo">L(・W・)</div>
      <div className="header-title">
        <h1>{title}</h1>
        <div>Web Application Developer / Business partner</div>
      </div>
    </header>
  );
};
