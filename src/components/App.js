/**
 * Michal J Sekulski, 2020
 */

import React from 'react';
import Article from './Article';
import Header from './startingElements/Header';
import LoadingScreen from './startingElements/LoadingScreen';
import getArticles from './api/getArticles';

import './resources/Styles.css';

class App extends React.Component {
  // article itself | indexes of used art.| articles' titles | 
  state = { article: [], usedArticles: [], articlesTitles: [] };


  /*    Fetching and displaying the article    */


  //This block of code fetches the articles placed in the gihub repository 

  componentDidMount() {
    this.fetchArticle();
  }

  fetchArticle = async () => {
    // draw a random number between 1 and 5(inclusive)
    let currentArticle = Math.floor(Math.random() * 5) + 1;

    // if the number of displayed articles has not reached 5(base, first element + 4) 
    if (this.state.usedArticles.length <= 4) {
      // Check if the article is unique and if it is not
      if (this.state.usedArticles.includes(currentArticle)) {
        //try again by drawing another number
        this.fetchArticle();

        // but if it did
      } else {
        // fetch an article with that number
        const res = await getArticles.get(`/article-${currentArticle}.json`);

        // and set its elements to the state
        this.setState({
          article: res.data,
          usedArticles: [...this.state.usedArticles, currentArticle],
          articlesTitles: [...this.state.articlesTitles, res.data.title]
        });
      }
    }
  }


  // Display the article

  renderArticle = () => {
    // destructurized state to avoid writing long lines of code
    const { article, usedArticles, articlesTitles, loading } = this.state;

    // check if the articles were fetched. If they were,
    if (!loading && !((article.length === 0) || (usedArticles.length === 0) || (articlesTitles === []))) {
      // display an article
      return <Article article={this.state.article} usedArticles={this.state.usedArticles} articlesTitles={this.state.articlesTitles} />
    } else {
      // otherwise keep displaying the loading screen
      return <LoadingScreen text='Fetching artices...' />
    }

  };


  // Display every next article

  getNextArticle = (ev) => {
    // if there are already 5 articles(4 + deafult)
    if (this.state.usedArticles.length === 4) {
      // disable the option of fetching new articles
      document.getElementById(ev.target.id).className = 'ui disabled huge right floated right labeled icon button';
    }
    // otherwise try fetching more
    this.fetchArticle();
  };


  /*********************************************/


  render() {
    return (
      <div className="ui container">
        <Header />
        <div className="ui container">
          <div className="ui grid">
            <div className="column"><button className="ui huge right floated right labeled icon button" id="next" onClick={this.getNextArticle}><i className="right arrow icon"></i>Next news</button></div>
          </div>
          <div className="ui raised segment" style={{ marginBottom: '2em' }}>
            {this.renderArticle()}
          </div>
        </div>
      </div>
    );
  };
}


export default App;