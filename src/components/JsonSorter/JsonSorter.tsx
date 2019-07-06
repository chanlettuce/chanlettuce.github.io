import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Textarea from '../Textarea/Textarea';
import { ObjectSortUtil } from '../../modules/ObjectSortUtil';
import '../../css/jsonsorter.css';

interface State {
  errorMessage: String;
  isError: boolean;
}

export default class JsonSorter extends React.Component<RouteComponentProps<{}>, State> {
  public state: State = { errorMessage: '', isError: false };

  private inputText = React.createRef<Textarea>();
  private outputText = React.createRef<Textarea>();

  public execute() {
    try {
      if (!this.inputText.current) return;
      const beforeObj = JSON.parse(this.inputText.current.getValue());
      const afterObj = ObjectSortUtil.objectSort(beforeObj);
      if (!this.outputText.current) return;
      this.outputText.current.setValue(JSON.stringify(afterObj, null, 2));
      this.setState({ isError: false });
    } catch (e) {
      console.error(e);
      this.setState({ errorMessage: e.message, isError: true });
    }
  }
  componentDidMount() {
    document.title = 'JSON Sorter';
    window.gtagPageview(this.props.location.pathname);
  }

  render() {
    return (
      <Container>
        <p>JSONファイルの中身を名前順にソートしてくれます</p>
        <Row>
          <Col sm={12} id="error-message" className={`${this.state.isError && 'iserror'}`}>
            {this.state.errorMessage}
          </Col>
        </Row>
        <Row>
          <Col sm={5} className="child-width-max">
            <span>input</span>
            <Textarea ref={this.inputText} />
          </Col>
          <Col sm={2} className="button-area">
            <Button className="positive" onClick={this.execute}>
              Sort!!
            </Button>
          </Col>
          <Col sm={5} className="child-width-max">
            <span>output</span>
            <Textarea ref={this.outputText} />
          </Col>
        </Row>
      </Container>
    );
  }
}
