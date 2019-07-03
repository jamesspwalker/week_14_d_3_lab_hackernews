import React, { Component } from 'react';
import NewsList from '../Components/NewsList';

class NewsContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newsStories: []
        }
    }

    componentDidMount() {
        fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
          .then(res => res.json())
          .then((data) => {
            const newData = data.slice(0, 20);
            const promises = newData.map((id) => {
              return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
                .then(res => res.json());
            });
    
            Promise.all(promises)
              .then((results) => {
                this.setState({ newsStories: results });
              });
          });
    }



    render() {
        return (
            <NewsList newsStories={this.state.newsStories}></NewsList>
        )
    }


}

export default NewsContainer