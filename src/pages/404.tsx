import React from 'react';
import { graphql } from 'gatsby';
import { PageProps } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const NotFoundPage: React.FC<PageProps<GatsbyTypes.Page404Query>> = ({
  data,
  location,
}) => {
  const siteTitle = data.site!.siteMetadata!.title!;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <article>
        <h2>404: Not Found</h2>
        <section>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </section>
      </article>
    </Layout>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query Page404 {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
