import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import TweetMessage from './TweetMessage';

const TWEETS_QUERY = gql`
  query TweetsQuery {
    tweets {
      id
      time
      tweetContent
      likes
      retweets
      replies
      user {
        name
        username
        avatar
        cover
        bio
        location
        following
        followers
      }
    }
  }
`;

class Tweets extends Component {
    render() {
        return (
            <Query query={TWEETS_QUERY}>
                {({ loading, error, data }) => {
                    if (loading) return <h4>Loading...</h4>;
                    return (
                        <Fragment>
                            {data.tweets.map(tweet => (
                                <TweetMessage key={tweet.id} tweet={tweet} />
                            ))}
                        </Fragment>
                    );
                }}
            </Query>
        );
    }
}

export default Tweets;