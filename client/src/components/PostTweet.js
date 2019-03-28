import React from 'react';

export default function PostTweet() {
    return (
        <div className="media">
            <a className="media-left" href="#">
                <img alt="" className="media-object img-rounded" src="http://placehold.it/35x35"></img>
            </a>
            <div className="media-body">
                <div className="form-group has-feedback">
                    <label className="control-label sr-only" htmlFor="inputSuccess5">Hidden label</label>
                    <input type="text" className="form-control" id="search2" aria-describedby="search" placeholder="What's happening?"></input>
                    <span className="glyphicon glyphicon-camera form-control-feedback" aria-hidden="true"></span>
                    <span id="search2" className="sr-only">(success)</span>
                </div>
            </div>
        </div>
    );
}



