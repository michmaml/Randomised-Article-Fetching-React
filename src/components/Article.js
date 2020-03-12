/**
 * Michal J Sekulski, 2020
 */

import React from 'react';
import { Heading, Image, List, Paragraph } from './ArticleElements';
import ModalBase from './modalElements/ModalBase';

import './resources/Styles.css';

const Article = ({ article, usedArticles, articlesTitles }) => {


  /*    Display the article, with the elements it contains    */

  // if the article for some reason cannot be fetched
  if (!article) {
    return <div>Loading...It seems there might be a problem with this article.</div>
  }


  // When the last article is finally displayed, add an option to rank all of them

  const isLast = () => {
    // if all articles were displayed
    if (usedArticles.length >= 5) {
      return (
        // display a blue button, which will trigger an option to rate the articles
        <div className="button">
          <ModalBase usedArticles={usedArticles} articlesTitles={articlesTitles} />
        </div>
      );
    }
  };


  // recognise the elements of the aritcle and render them on the screen

  const remainingArticle = () => {
    // if the article is not empty
    if (!article.body) {
      return null
    }
    // this is quite self-explanatory
    return article.body.map((component, index) => {
      switch (component.type) {
        case "heading":
          return <Heading component={component} key={index} />
        case "image":
          return <Image component={component} key={index} />
        case "list":
          return <List component={component} key={index} />
        case "paragraph":
          return <Paragraph component={component} key={index} />
        default:
          return <div><b>This content cannot be displayed</b></div>
      }
    });
  };


  // inform the reader which article she/he/is is reading

  const getArticleElement = (article) => {
    // display the index of the actual article(from github)
    return article[article.length - 1];
  };


  /**********************************************************/


  return (
    <div className="column">
      <div className="ui two column grid">
        <div className="column"><h2 className="ui right floated">Article no. {getArticleElement(usedArticles)}</h2></div>
        <div className="column">{isLast()}</div>
      </div>
      <h3>Title: {getArticleElement(articlesTitles)}</h3>
      {remainingArticle()}
    </div>
  );
};

export default Article;    