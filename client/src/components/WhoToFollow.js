import React from 'react';

export default function WhoToFollow() {
    const toFollow = [{
        name: 'User-1',
        avtar: 'http://placehold.it/32x32'
    },
    {
        name: 'User-2',
        avtar: 'http://placehold.it/32x32'
    }];

    return (
        <div className="panel panel-default panel-custom">
            <div className="panel-heading">
                <h3 className="panel-title">
                    Who to follow <small><a href="#">Refresh</a> ● <a href="#">View all</a></small>
                </h3>
            </div>
            <div className="panel-body">
                {toFollow.map(user => (
                    <div className="media">
                        <div className="media-left">
                            <img src={user.avtar} alt="" className="media-object img-rounded"></img>
                        </div>
                        <div className="media-body">
                            <h4 className="media-heading">{user.name}</h4>
                            <a href="#" className="btn btn-default btn-xs"> + <span className="glyphicon glyphicon-user"></span> Follow</a>
                        </div>
                    </div>
                ))}
            </div>
            <div className="panel-footer">
                <a href="www.google.it">
                    <span className="glyphicon glyphicon-user"></span>
                    Find people you know
					</a>
            </div>
        </div>
    );
}