import React, { Component } from 'react';
import Finder from './components/finder'
import CityList from './components/cityList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-finder">
          <Finder />
        </div>
        <CityList />
      </div>
    );
  }
}

export default App;
