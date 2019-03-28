import React from 'react';

export default function Trends() {
    const trends = ['micro-frontends', 'react', 'graph-ql'];

    return (
        <div className="panel panel-default panel-custom">
            <div className="panel-heading">
                <h3 className="panel-title">
                    Trends <small><a href="#">ciao</a></small>
                </h3>
            </div>

            <div className="panel-body">
                <ul className="list-unstyled">
                    {trends.map(trend => (
                        <li><a href="#">#{trend}</a></li>
                    ))}
                </ul>
            </div>
        </div>
    );
}