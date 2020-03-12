/**
 * Michal J Sekulski, 2020
 */

import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import ModalList from './ModalList';
import ModalPost from './ModalPost';

import '../resources/Styles.css';

const ModalBase = ({ usedArticles, articlesTitles }) => {


  /*    Render the modal with the option to rate the articles    */


  // creates a brief summary of the prevously read article
  const renderListArticles = () => {
    // for each read aticle(in order)
    return usedArticles.map((usedArticle, index) => {
      // send the required data to ModalList to render it
      return <ModalList usedArticle={usedArticle} title={articlesTitles[index]} index={index} key={index} />
    });
  };


  /************************************************************* */


  return (
    <Modal trigger={<Button className="ui huge primary right floated button">Rank</Button>} centered={false}>
      <Modal.Header>
        <div className="column">Rank the Articles</div>
      </Modal.Header>
      <Modal.Content>
        <div className="ui two column very relaxed grid">
          <div className="column" style={{ paddingRight: '2rem' }}>
            <div className="ui relaxed list">
              {renderListArticles()}
            </div>
          </div>
          <div className="column">
            <h3 className="cl">Please rank the articles to your preference. It is necessary to rate all of them.</h3>
            <div className="ui divider"></div>
            <div className="ui container">
              <ModalPost usedArticles={usedArticles} />
            </div>
          </div>
        </div>
      </Modal.Content>
    </Modal>
  );
};

export default ModalBase;