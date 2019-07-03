import React from 'react';
import NewsItem from './NewsItem';

const NewsList = (props) => {
    if(props.newsStories == null || props.newsStories.length === 0){
        return <p>Loading...</p>
    }
    console.log(props);
    
    return(
        <ol>
            {props.newsStories.map((story, index) => {
                return(
                    <NewsItem
                        key={index}
                        title={story.title}
                        
                    />
                )
            })}
        </ol>
    )
}

export default NewsList;