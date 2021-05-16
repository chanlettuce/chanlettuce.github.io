import { WindowLocation } from '@reach/router';
import React from 'react';
import { Container } from 'react-bootstrap';
import { Footer } from './organisms/Fotter';
import { Header } from './organisms/Header';
import { Navigation } from './organisms/Navigation';

export interface LayoutProps {
  title: string;
  location: WindowLocation<unknown>;
}

export const Layout: React.FC<LayoutProps> = ({
  location,
  title,
  children,
}) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <div className="frame" />
      <Header title={title} isRootPage={isRootPath} />
      <main>
        <Container>{children}</Container>
      </main>
      <Footer />
      <Navigation />
    </div>
  );
};

export default Layout;
