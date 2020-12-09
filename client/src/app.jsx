import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SimilarHomesSlider from './components/similarHomesSlider.jsx'
import NewListingsNearSlider from './components/newListingsNearSlider.jsx'

import style from './styles/app.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      similarHomes: [],
      newListings: []
    }
  }

  componentDidMount() {
    axios.get('/api/similar-homes/5')
    .then(data => {
      console.log('data from component', data);
      return data.data
    })
    .then(data => {
      this.setState({similarHomes: data});
    })
    axios.get('/api/new-listings/7')
    .then(data => data.data)
    .then(data => {
      this.setState({newListings: data});
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className={style.mainContainer}>
        <h3 className={style.titles}>Similar Homes You May Like</h3>
        <SimilarHomesSlider similarHomes={this.state.similarHomes}/>

        <h3 className={style.titles}>New Listings Near Address</h3>
        <NewListingsNearSlider newListings={this.state.newListings}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('similarHomes'));


