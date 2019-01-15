import React, { Component } from 'react';
import { MapSite } from 'components/map-site';
import { Provider } from 'mobx-react';
import { stores } from 'stores';

class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <MapSite />
      </Provider>
    );
  }
}

export default App;
