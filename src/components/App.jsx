import React, { Component } from 'react';
import getData from './../api';

class App extends Component {
  state = {
    photos: [],
    isLoading: false,
    error: null,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });

    try {
      const photos = getData.fetchImagesWithQuery('cat', 1);
      console.log(photos);
      this.setState({ photos });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        React homework template
      </div>
    );
  }
}

export default App;
