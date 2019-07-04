import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import '../../css/profile.css';

const Profile = (props: RouteComponentProps) => {
  document.title = 'Profile';
  window.gtagPageview(props.location.pathname);

  return (
    <div>
      <Container>
        <Row className="row-eq-height">
          <Col lg={6}>
            <Card>
              <Card.Header as="h5">人物</Card.Header>
              <Card.Body>
                <Card.Text as="div">
                  <Table borderless>
                    <tbody>
                      <tr>
                        <th>名前</th>
                        <td>ちゃんレタス</td>
                      </tr>
                      <tr>
                        <th>誕生年</th>
                        <td>1994年</td>
                      </tr>
                      <tr>
                        <th>おしごと</th>
                        <td>WEBアプリケーションをつくるひと</td>
                      </tr>
                      <tr>
                        <th>出身</th>
                        <td>東京都足立区</td>
                      </tr>
                      <tr>
                        <th>在住</th>
                        <td>東京都千代田区</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6}>
            <Card>
              <Card.Header as="h5">アカウント</Card.Header>
              <Card.Body>
                <Card.Text as="div">
                  <Table borderless>
                    <tbody>
                      <tr>
                        <th>Twitter</th>
                        <td>
                          <a href="https://twitter.com/chanLettuce01">@chanLettuce01</a>
                        </td>
                      </tr>
                      <tr>
                        <th>GitHub</th>
                        <td>
                          <a href="https://github.com/chanlettuce">chanlettuce</a>
                        </td>
                      </tr>
                      <tr>
                        <th>はてなブログ</th>
                        <td>
                          <a href="https://chan-lettuce.hatenablog.com/">レタスは味噌汁に入れてもうまい</a>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Card>
              <Card.Header as="h5">スキル</Card.Header>
              <Card.Body>
                <Card.Text as="div">
                  <Row>
                    <Col xl={9}>
                      <h5>プログラミング言語</h5>
                      <ul className="flex-list">
                        <li>
                          JavaScript / TypeScript
                          <ul>
                            <li>Backbone.js</li>
                            <li>React</li>
                            <li>jQuery</li>
                          </ul>
                        </li>
                        <li>
                          Java
                          <ul>
                            <li>Spring Boot</li>
                            <li>Selenium</li>
                          </ul>
                        </li>
                        <li>
                          Kotlin
                          <ul>
                            <li>Spring Boot</li>
                          </ul>
                        </li>
                        <li>
                          Python
                          <ul>
                            <li>ほんの少しだけ</li>
                          </ul>
                        </li>
                      </ul>
                    </Col>
                    <Col xl={3}>
                      <h5>その他技術</h5>
                      <ul>
                        <li>Git</li>
                        <li>Markdown</li>
                        <li>YAMAHAのネットワーク機器</li>
                        <li>vSphere</li>
                      </ul>
                    </Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Card>
              <Card.Header as="h5">好き嫌い</Card.Header>
              <Card.Body>
                <Card.Text as="div">
                  <Row>
                    <Col xl={9}>
                      <h5>好き</h5>
                      <ul className="flex-list-double">
                        <li>
                          ひと
                          <ul>
                            <li>降幡愛さん / 黒澤ルビィちゃん</li>
                            <li>春瀬なつみさん / 龍崎薫ちゃん</li>
                          </ul>
                        </li>
                        <li>
                          もの
                          <ul>
                            <li>7列キーボードのThinkPad</li>
                            <li>LANケーブルがたくさん繋がっているネットワーク機器</li>
                            <li>AOSPの端末</li>
                            <li>オレンジジュース</li>
                          </ul>
                        </li>
                        <li>
                          こと
                          <ul>
                            <li>散歩</li>
                            <li>人とお酒を飲むこと</li>
                            <li>登山(最近は行けてない)</li>
                          </ul>
                        </li>
                      </ul>
                    </Col>
                    <Col xl={3}>
                      <h5>嫌い</h5>
                      <ul>
                        <li>トマト</li>
                        <li>早起き</li>
                        <li>部屋の掃除</li>
                        <li>長過ぎるソースコード</li>
                      </ul>
                    </Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
