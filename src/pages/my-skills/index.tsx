import { graphql, PageProps } from 'gatsby';
import React, { useState } from 'react';
import { Col, ProgressBar, Row, Table } from 'react-bootstrap';
import { Layout } from '../../components/Layout';
import { SEO } from '../../components/SEO';

const MySkillsIndex: React.FC<PageProps<GatsbyTypes.MySkillsIndexQuery>> = ({
  data,
  location,
}) => {
  const siteTitle = data.site?.siteMetadata?.title || `Title`;

  const [skillList, setSkillList] = useState(skils);

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Skills" />
      <article>
        <h2>スキル/経験</h2>
        <section>
          <dl>
            <Row>
              {rataSamples.map((e, i) => (
                <Col md={6} xl={4}>
                  <dt>
                    <ProgressBar now={e.rate * 20} label={e.rate} />
                  </dt>
                  <dd>{e.description}</dd>
                </Col>
              ))}
            </Row>
          </dl>
        </section>
        <section>
          <div className="table-wrapper">
            <Table className="skill-table">
              <thead>
                <tr>
                  <th className="col-name">名前</th>
                  <th className="col-category">カテゴリ</th>
                  <th className="col-rate">習熟度</th>
                  <th className="col-remarks">備考</th>
                </tr>
              </thead>
              <tbody>
                {skillList.map((e, i) => (
                  <tr key={`lang-${i}`}>
                    <td className="col-name">{e.name}</td>
                    <td className="col-category">{e.category}</td>
                    <td className="col-rate">
                      <ProgressBar now={e.rate * 20} label={e.rate} />
                    </td>
                    <td className="col-remarks">{e.remarks}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>{' '}
        </section>
      </article>
    </Layout>
  );
};

export default MySkillsIndex;

export const pageQuery = graphql`
  query MySkillsIndex {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const skils: {
  name: string;
  rate: 0 | 1 | 2 | 3 | 4 | 5;
  category?:
    | '言語'
    | 'FW/ライブラリ'
    | 'ミドルウェア'
    | 'クラウド'
    | '仮想化基盤'
    | 'ネットワーク'
    | 'その他';
  remarks?: string;
}[] = [
  { name: 'TypeScript', rate: 4, category: '言語' },
  { name: 'JavaScript', rate: 4, category: '言語' },
  { name: 'Java', rate: 4, category: '言語' },
  { name: 'PHP', rate: 2, category: '言語' },
  { name: 'Python', rate: 2, category: '言語' },
  { name: 'Kotlin', rate: 1, category: '言語' },
  { name: 'Node.js', rate: 3, category: '言語' },
  { name: 'React', rate: 4, category: 'FW/ライブラリ' },
  { name: 'Express', rate: 3, category: 'FW/ライブラリ' },
  { name: 'Next.js', rate: 3, category: 'FW/ライブラリ' },
  { name: 'Gatsby', rate: 3, category: 'FW/ライブラリ' },
  { name: 'Vue.js', rate: 1, category: 'FW/ライブラリ' },
  { name: 'Struts', rate: 2, category: 'FW/ライブラリ' },
  { name: 'Servlet/JSP', rate: 2, category: 'FW/ライブラリ' },
  { name: 'Spring', rate: 2, category: 'FW/ライブラリ' },
  { name: 'Spring Boot', rate: 3, category: 'FW/ライブラリ' },
  { name: 'intra-mart Accel Platform', rate: 2, category: 'その他' },
  { name: 'Docker', rate: 4, category: 'ミドルウェア' },
  { name: 'Docker Compose', rate: 4, category: 'ミドルウェア' },
  {
    name: 'PostgreSQL',
    rate: 3,
    category: 'ミドルウェア',
    remarks: '大規模テーブルのクエリチューニング経験あり',
  },
  {
    name: 'MySQL',
    rate: 4,
    category: 'ミドルウェア',
    remarks: '5.1 -> 5.7のアップグレード実績あり',
  },
  { name: 'Apache', rate: 3, category: 'ミドルウェア' },
  { name: 'Tomcat', rate: 3, category: 'ミドルウェア' },
  {
    name: 'Nginx',
    rate: 4,
    category: 'ミドルウェア',
    remarks: 'SSL終端, LB, Webサーバー',
  },
  { name: 'AWS', rate: 3, category: 'クラウド', remarks: 'ALB, ECS, EC2' },
  {
    name: 'GCP',
    rate: 3,
    category: 'クラウド',
    remarks: 'App Engine, Compute Engine',
  },
  { name: 'Firebase', rate: 3, category: 'クラウド' },
  { name: 'Heroku', rate: 3, category: 'クラウド' },
  {
    name: 'YAMAHA RTX',
    rate: 3,
    category: 'ネットワーク',
    remarks: '拠点間VPN, VLAN, 複数セグメント',
  },
  { name: 'Windows Server', rate: 4, category: 'ミドルウェア' },
  { name: 'Ubuntu', rate: 4, category: 'ミドルウェア' },
  { name: 'CentOS', rate: 4, category: 'ミドルウェア' },
  { name: 'VMWare VSphere(ESXi)', rate: 3, category: '仮想化基盤' },
  {
    name: 'Citrix XenServer',
    rate: 1,
    category: '仮想化基盤',
    remarks: 'ライブマイグレーション',
  },
  {
    name: 'Jenkins',
    rate: 3,
    category: 'その他',
    remarks: '複雑な構成でなければCI/CD設定可',
  },
];

const rataSamples = [
  { rate: 5, description: '内部実装まで理解している' },
  {
    rate: 4,
    description: '非互換なアップデートの対応ができる(そこそこ理解している)',
  },
  { rate: 3, description: '環境構築ができる' },
  { rate: 2, description: '納品物に含めたことがある' },
  { rate: 1, description: 'チュートリアル終了程度' },
  { rate: 0, description: '経験無し' },
];
