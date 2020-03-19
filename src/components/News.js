import React, { Component } from "react";
import services from "../services";

class News extends Component {
  state = { news: [] };

  componentDidMount = () => {
    services.getHotNews().then(data => {
      this.setState({ news: data.data.articles });
    });
  };

  render() {
    const { news } = this.state;
    return (
      <section className="news container">
        {news.map(elem => (
          <div className="card">
            <img
              width="240"
              src={elem.urlToImage}
              className="card-img-top img"
              alt={elem.description}
            />
            <div className="card-body">
              <p className="card-title">{elem.title}</p>
              <a
                href={elem.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Details
              </a>
            </div>
          </div>
        ))}
      </section>
    );
  }
}

export default News;
