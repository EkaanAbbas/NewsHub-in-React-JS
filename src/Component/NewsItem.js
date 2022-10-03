import React, { Component } from 'react';

export default class NewsItem extends Component {
    render() {

        let { title, description, imageUrl, url, author, date, source } = this.props;
        return (
            <div>
                <div className="card" style={{ width: "18rem" }}>

                    <img src={imageUrl} className="card-img-top" alt="..." />

                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: "90%", zIndex: "1" }}>
                            {source}
                        </span>
                        <p className="card-text">
                            {description}...
                        </p>
                        <p className="card-text"><small className="text-muted">By {author} on {date}</small></p>
                        <a href={url} className="btn btn-sm btn-success">
                            Read More
                        </a>
                    </div>
                </div>

            </div>

        )
    }
}
