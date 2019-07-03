import React, {Component} from 'react';

class NewsItem extends Component {
    render(){
        return(
            <li>
                <p>{this.props.title}</p>
            </li>
        )
    }
}

export default NewsItem