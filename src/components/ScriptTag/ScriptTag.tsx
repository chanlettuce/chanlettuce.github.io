import * as React from 'react';

interface Props {
  src: string;
  async?: boolean;
}

const id = Math.random().toString();

class ScriptTag extends React.Component<Props, {}> {
  componentDidMount() {
    const script = document.createElement('script');

    script.src = this.props.src;
    script.async = this.props.async || false;

    const element = document.getElementById(id);
    if (element) element.replaceWith(script);
  }

  render() {
    return <div id={id} />;
  }
}

export default ScriptTag;
