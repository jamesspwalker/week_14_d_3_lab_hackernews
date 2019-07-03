import React, {Component} from 'react';

class NewsItem extends Component {
    render(){
        return(
            <li>
                <p>
                    <a href = {this.props.url}>{this.props.title}</a>
                </p>
            </li>
        )
    }
}

export default NewsItem