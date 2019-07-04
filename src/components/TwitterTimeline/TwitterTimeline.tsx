import * as React from 'react';
import ScriptTag from '../ScriptTag/ScriptTag';

class TwitterTimeline extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <a className="twitter-timeline" href="https://twitter.com/chanLettuce01?ref_src=twsrc%5Etfw">
          Tweets by chanLettuce01
        </a>
        <ScriptTag async src="https://platform.twitter.com/widgets.js" />
      </div>
    );
  }
}

export default TwitterTimeline;
