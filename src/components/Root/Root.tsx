import * as React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Button } from 'react-bootstrap';
import '../../css/root.css';

const Root = (props: RouteComponentProps) => {
  React.useEffect(() => {
    document.title = 'ちゃんレタス';
  }, [props.location.pathname]);

  return (
    <Jumbotron>
      <Container>
        <Row>
          <Col md={2} />
          <Col md={8}>
            <h1>Reactでいろいろしてみるページ</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi incidunt hic quis nemo error illum dignissimos quam esse delectus, vitae, nam adipisci cumque numquam
              officiis perspiciatis magni sed modi atque.
            </p>
            <p>
              <Link to="/profile">
                <Button variant="dark">Profile</Button>
              </Link>
            </p>
          </Col>
          <Col md={2} />
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Root;
