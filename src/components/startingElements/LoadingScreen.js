/**
 * Michal J Sekulski, 2020
 */

import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'


// created with a bit of help from the semantic-ui framework

const LoadingScreen = () => {
  return (
    <div>
      <Segment>
        <Dimmer active>
          <Loader size='huge'>Please wait...</Loader>
        </Dimmer>

        <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
      </Segment>
    </div>
  );
}

export default LoadingScreen;