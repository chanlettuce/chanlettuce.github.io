import { graphql, Link, PageProps } from 'gatsby';
import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Layout from '../../components/Layout';
import { myHistory } from '../../constants/myHistory';

const AboutIndex: React.FC<PageProps<GatsbyTypes.AboutIndexQuery>> = ({
  data,
  location,
}) => {
  const siteTitle = data.site?.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <Row>
        <Col as="article" lg={6}>
          <h2>基本情報</h2>
          <section>
            <dl>
              <div>
                <dt>屋号</dt>
                <dd>LettuceWork</dd>
              </div>
              <div>
                <dt>名前</dt>
                <dd>内田 翔 (うちだ しょう)</dd>
              </div>
              <div>
                <dt>生年月日</dt>
                <dd>1994年2月8日</dd>
              </div>
              <div>
                <dt>住所</dt>
                <dd>東京都 千代田区</dd>
              </div>
              <div>
                <dt>対応可能業務</dt>
                <dd>
                  <ul>
                    <li>
                      Webアプリケーション開発(クラウド, オンプレどちらでも可能)
                    </li>
                    <li>
                      小規模なオフィスインフラの構築(ネットワーク,
                      ファイルサーバー等)
                    </li>
                    <li>その他コンピューター関連の問題解決</li>
                  </ul>
                </dd>
                <Button variant="outline-dark" as={Link} to="/my-skills">
                  詳細はこちら
                </Button>
              </div>
            </dl>
          </section>
        </Col>
        <Col as="article" lg={6}>
          <h2>略歴</h2>
          <section>
            <dl>
              {myHistory
                .filter(e => e.business)
                .map((e, i) => (
                  <div key={`history-${i}`}>
                    <dt>{e.date}</dt>
                    <dd>{e.description}</dd>
                  </div>
                ))}
            </dl>
            <Button variant="outline-dark" as={Link} to="/about/history">
              詳細はこちら
            </Button>
          </section>
        </Col>
      </Row>
    </Layout>
  );
};

export default AboutIndex;

export const pageQuery = graphql`
  query AboutIndex {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
