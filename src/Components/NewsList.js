import React, { Fragment } from 'react';
import NewsItem from './NewsItem';

const NewsList = (props) => {
    if (props.newsStories == null || props.newsStories.length === 0) {
        return <p>Loading...</p>
    }
    console.log(props);

    return (
        <Fragment>
            <h1><u>BREAKING NEWS</u></h1>
            <ol>
                {props.newsStories.map((story, index) => {
                    return (
                        <NewsItem
                            key={index}
                            title={story.title}
                            url={story.url}
                            score={story.score}
                        />
                    )
                })}
            </ol>
        </Fragment>
    )
}

export default NewsList;