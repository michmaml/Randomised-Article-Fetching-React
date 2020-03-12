/**
 * Michal J Sekulski, 2020
 */

import React from 'react';


// export the heading of the article

export const Heading = ({ component }) => {
  return (
    <React.Fragment>
      <h4 className="heading">{component.model.text}</h4>
    </React.Fragment>
  );
};


// export the images of the article

export const Image = ({ component }) => {
  return (
    <React.Fragment>
      <img className="ui bordered centered image" alt={component.model.altText} src={component.model.url} />
    </React.Fragment>
  );
};


// export the lists of the article <- all of the articles only contain unordered lists

export const List = ({ component }) => {

  const listItems = () => {
    return component.model.items.map((text, index) => {
      return (
        // For each existing element, display it
        <ListElement text={text} key={index} />
      );
    });
  }

  return (
    <React.Fragment>
      <ul className="unorderedList">
        {listItems()}
      </ul>
    </React.Fragment>
  );
};

// Unordered list element
const ListElement = ({ text }) => {
  return (
    <li>{text}</li>
  );
};


// export the paragraphs of the articles

export const Paragraph = ({ component }) => {
  return (
    <React.Fragment>
      <p className="paragraph">{component.model.text}</p>
    </React.Fragment>
  );
};