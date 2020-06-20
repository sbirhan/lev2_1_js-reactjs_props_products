import React from 'react';
import './SongItem.css';

const SongItem = props => {
    return (
        <div className = "container">
            <img src={`https://source.unsplash.com/random/300x200?${props.image}`}/>
            <h1 className="title">{props.title}</h1>
            <p className = "description">{props.description}</p>
            <p className="follower">{props.follower}</p>
        </div>
    )
};

export default SongItem;