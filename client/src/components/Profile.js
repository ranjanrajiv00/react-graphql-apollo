import React from 'react';

export default function Profile() {
    return (
        <div className="panel panel-default">
            <div className="panel-body">
                <a href="#"><img className="img-responsive" alt="" src="http://placehold.it/800x500"></img></a>
                <div className="row">
                    <div className="col-xs-3">
                        <h5>
                            <small>TWEETS</small>
                            <p>10</p>
                        </h5>
                    </div>
                    <div className="col-xs-4">
                        <h5>
                            <small>FOLLOWING</small>
                            <p>20</p>
                        </h5>
                    </div>
                    <div className="col-xs-5">
                        <h5>
                            <small>FOLLOWERS</small>
                            <p>1,545</p>
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    );
}