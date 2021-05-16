import { graphql, PageProps } from 'gatsby';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import { myHistory } from '../../constants/myHistory';

const HistoryIndex: React.FC<PageProps<GatsbyTypes.HistoryIndexQuery>> = ({
  data,
  location,
}) => {
  const siteTitle = data.site?.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="History" />
      <article>
        <h2 id="page-title">私の半生を遡りましょう</h2>
        {myHistory
          // .filter(e => e.business)
          .map((e, i) => (
            <Row as="section" className="history-section" key={`history-${i}`}>
              <Col lg={2}>
                <div className="history-date">{e.date}</div>
              </Col>
              <Col lg={10}>
                <h3 className="history-description">{e.description}</h3>
                <div className="history-content">{e.content}</div>
              </Col>
            </Row>
          ))}
      </article>
    </Layout>
  );
};

export default HistoryIndex;

export const pageQuery = graphql`
  query HistoryIndex {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
