import React, {Component} from 'react';

class NewsItem extends Component {
    render(){
        return(
            <li>
                <h3>
                    <a href = {this.props.url}>{this.props.title}</a>
                </h3>
                <p>
                    score: {this.props.score}
                </p>
            </li>
        )
    }
}

export default NewsItem