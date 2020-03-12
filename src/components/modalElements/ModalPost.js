/**
 * Michal J Sekulski, 2020
 */

import React from 'react';
import FormSelector from './FormSelector';
import postRanking from '../api/postRanking';

import '../resources/Styles.css';

class ModalPost extends React.Component {


  /*    Rank the articles and send the result to the db(ranking.json)    */

  // set the 'local' state
  constructor(props) {
    super(props);

    this.state = {
      ranking: { art1: '', art2: '', art3: '', art4: '', art5: '' },

      ratingOptions: [' 5⭐', ' 4⭐', ' 3⭐', ' 2⭐', ' 1⭐'],
      placeholder: 'Rate this article'
    }
  }


  // check if the input makes sense and is not lacking anything
  validateAndSubmit = (e) => {
    // destructurized state to avoid writing long lines of code
    const { art1, art2, art3, art4, art5 } = this.state.ranking;
    // check if all of the articles were ranked
    if ((art1 === '') || (art2 === '') || (art3 === '') || (art4 === '') || (art5 === '')) {
      // if not, inform the user
      alert("Please review your ratingns");
      // if everything is okay
    } else {
      //stay on page
      e.preventDefault();
      let rankedArticles = this.state.ranking;
      //send the ranking to the db(ranking.json)
      postRanking(rankedArticles);

      //reset the state if the person decides to send the ranking again
      this.setState({
        ranking: {
          art1: '',
          art2: '',
          art3: '',
          art4: '',
          art5: ''
        },
      });
      // inform the user about the successful POST request
      alert("Thank you for your input.");
    }
  }


  // autmatically update the state with new ratings
  handleChange = (ev) => {
    // get the article's name and rating 
    let articleName = ev.target.name;
    let articleRating = ev.target.value;
    // and update the state
    this.setState(prevState => {
      return {
        ranking: {
          ...prevState.ranking, [articleName]: articleRating
        }
      }
    });
  };


  /********************************************************************* */


  render() {
    return (
      <div className="ui one column grid">
        <div className="ui container">
          <form onSubmit={this.validateAndSubmit}>
            <div className="ui two column grid">
              <div className="row" style={{ marginTop: '1em' }}>
                <div className="column cl">
                  <FormSelector title='Rate Article 1' name='art1' options={this.state.ratingOptions} value={this.state.ranking.art1} placeholder={this.state.placeholder} handleChange={this.handleChange} />
                </div>
                <div className="column cl">
                  <FormSelector title='Rate Article 2' name='art2' options={this.state.ratingOptions} value={this.state.ranking.art2} placeholder={this.state.placeholder} handleChange={this.handleChange} />
                </div>
              </div>
              <div className="row">
                <div className="column cl">
                  <FormSelector title='Rate Article 3' name='art3' options={this.state.ratingOptions} value={this.state.ranking.art3} placeholder={this.state.placeholder} handleChange={this.handleChange} />
                </div>
                <div className="column cl">
                  <FormSelector title='Rate Article 4' name='art4' options={this.state.ratingOptions} value={this.state.ranking.art4} placeholder={this.state.placeholder} handleChange={this.handleChange} />
                </div>
              </div>
              <div className="row" style={{ marginBottom: '1em' }}>
                <div className="column cl">
                  <FormSelector title='Rate Article 5' name='art5' options={this.state.ratingOptions} value={this.state.ranking.art5} placeholder={this.state.placeholder} handleChange={this.handleChange} />
                </div>
                <div className="column cl">
                  <button className="positive ui large right labeled icon button" onClick={this.validateAndSubmit.bind(this)}><i className="save outline icon"></i>Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div >
      </div >
    );
  }
}

export default ModalPost;