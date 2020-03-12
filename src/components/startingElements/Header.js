/**
 * Michal J Sekulski, 2020
 */

import React from 'react';

const Header = () => {
  return (
    <div className="ui segment top">
      <h1 className="ui huge center aligned header">Latest News!
          <div className="ui stackable two column grid">
          <div className="column sub header">Read all 4 stories and then rank them in order of preference</div>
          <div className="column sub header">Michal J Sekulski, 2020</div>
        </div>
      </h1>
    </div>
  );
};

export default Header;