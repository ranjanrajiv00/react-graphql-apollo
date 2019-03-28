import React, { Component, Fragment } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Header from './components/Header';
import PostTweet from './components/PostTweet';
import Profile from './components/Profile';
import Trends from './components/Trends';
import Tweets from './components/Tweets';
import WhoToFollow from './components/WhoToFollow';

import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Fragment>
          <Header></Header>

          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <Profile></Profile>
                <Trends></Trends>
              </div>

              <div className="col-sm-6">
                <div className="panel panel-info">
                  <div className="panel-heading">
                    <PostTweet></PostTweet>
                  </div>
                  <div className="panel-body">
                    <Tweets></Tweets>
                  </div>
                </div>
              </div>

              <div className="col-sm-3">
                <WhoToFollow></WhoToFollow>
              </div>
            </div>
          </div>
        </Fragment>
      </ApolloProvider>
    );
  }
}

export default App;