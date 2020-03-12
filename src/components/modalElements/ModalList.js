/**
 * Michal J Sekulski, 2020
 */

import React from 'react';

const ModalList = ({ usedArticle, title, index }) => {

  // This switch case is responsible for adding the indexes to the list
  const manageIndexes = (index) => {
    switch ((index % 10) + 1) {
      case 1:
        return 'First';
      case 2:
        return 'Second';
      case 3:
        return 'Third';
      default:
        return ('' + (index + 1) + 'th');
    }
  };

  // Example output:
  // 2nd displayed article, was article no. 5
  // Its title: Lorem ipsum... 

  return (
    <div className="item">
      <div className="header">{manageIndexes(index)} displayed article, was article no. <b>{usedArticle}</b></div>
      <div className="description"> Its title: {title}</div>
    </div>
  );
};

export default ModalList;