const axios = require('axios');

const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLSchema
} = require('graphql');

// Tweets
const TweetType = new GraphQLObjectType({
    name: 'Tweets',
    fields: () => ({
        id: { type: GraphQLInt },
        time: { type: GraphQLString },
        tweetContent: { type: GraphQLString },
        likes: { type: GraphQLInt },
        retweets: { type: GraphQLInt },
        replies: { type: GraphQLInt },
        user: { type: UserType }
    })
});

// User
const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        avatar: { type: GraphQLString },
        cover: { type: GraphQLString },
        bio: { type: GraphQLString },
        location: { type: GraphQLString },
        following: { type: GraphQLInt },
        followers: { type: GraphQLInt }
    })
});

// Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        tweets: {
            type: new GraphQLList(TweetType),
            resolve(parent, args) {
                return axios
                    .get('http://localhost:5001/tweets')
                    .then(res => res.data);
            }
        },
        tweet: {
            type: TweetType,
            args: {
                id: { type: GraphQLInt }
            },
            resolve(parent, args) {
                return axios
                    .get(`http://localhost:5001/tweets/${args.id}`)
                    .then(res => res.data);
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});