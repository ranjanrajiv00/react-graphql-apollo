import React from 'react';
import Moment from 'react-moment';

export default function TweetMessage(
    {
        tweet: { id,
            time,
            tweetContent,
            likes,
            retweets,
            replies,
            user
        }
    }) {
    return (
        <div className="media">
            <a className="media-left" href="#">
                <img alt="" className="media-object img-rounded" src={user.avatar}></img>
            </a>
            <div className="media-body">
                <h4 className="media-heading">{user.name}</h4> 
                <p><small>@ <Moment format="YYYY-MM-DD HH:mm">{time}</Moment></small></p>
                <p>{tweetContent}</p>
                <ul className="nav nav-pills nav-pills-custom">
                    <li><a href="#"><span className="glyphicon glyphicon-share-alt"></span> {replies}</a></li>
                    <li><a href="#"><span className="glyphicon glyphicon-retweet"></span> {retweets}</a></li>
                    <li><a href="#"><span className="glyphicon glyphicon-star"></span> {likes}</a></li>
                    <li><a href="#"><span className="glyphicon glyphicon-option-horizontal"></span></a></li>
                </ul>
            </div>
        </div>
    );
}