import * as React from "react";

interface Props {
  className: string;
  cols: number;
  rows: number;
  value: string;
  onChange: (e: string) => string;
}

interface State {
  value: string;
}

export default class Textarea extends React.Component<Props, State> {
  public static defaultProps: Props = {
    className: "",
    cols: 30,
    rows: 10,
    value: "",
    onChange: e => e
  };

  public state: State = { value: this.props.value };

  public getValue = () => this.state.value;
  public setValue = (val: string): void => this.setState({ value: val });

  private changeText = (e: any): void => {
    const callbackResult = this.props.onChange(e.target.value);
    this.setState({ value: callbackResult });
  };

  render() {
    return (
      <textarea
        className={this.props.className}
        cols={this.props.cols}
        rows={this.props.rows}
        value={this.state.value}
        onChange={this.changeText}
      />
    );
  }
}
