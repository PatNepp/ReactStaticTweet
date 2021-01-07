import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import moment from 'moment';

function Tweet({ tweet }) {
    return (
        <div className="tweet">
            <Avatar hash={tweet.gravatar}/>
            <div className="content">
                <Author author={tweet.author} /><Time time={tweet.timestamp} />
                <Message text={tweet.message} />
                <div className="buttons">
                    <Reply />
                    <Retweet count={tweet.retweet}/>
                    <Like count={tweet.likes} />
                    <MoreOptions />
                </div>
            </div>  
        </div>
    );
}

const testTweet = {
    message: "Something about cats.",
    gravatar: "42135a315f75a04c2468fc518e3424d3",
    author: {
        handle: "catperson",
        name: "IAMA Cat Person"
    },
    likes: 2,
    retweet: 18,
    timestamp: "2016-07-30 21:24:37"
}

function Avatar({ hash }) {
    const url = `https://www.gravatar.com/avatar/${hash}`
    return (
        <img 
        src={url}
        className="avatar"
        alt="avatar" />
    );
}

function Message({ text }) {
    return (
        <div className="message">
            {text}
        </div>
    );
}

function Author({ author }) {
    const { name, handle } = author;
    return (
        <span className="author">
            <span className="name">{name}</span>
            <span className="handle">@{handle}</span>
        </span>
    )
}

const Time = ({ time }) => {
    const timeString = moment(time).fromNow();
    return (
        <span className="time">
            {timeString}
        </span>
    )  
};

const Reply = () => (
    <i className="fa fa-reply reply-button"/>
);

function getRetweetCount(count) {
    if(count > 0) {
        return (
            <span className="retweet-count">
                {count}
            </span>
        )
    } else {
        return null;
    }
}

const Retweet = ({ count }) => (
    <span className="retweet-button">
        <i className="fa fa-retweet"/>
        {getRetweetCount(count)}
    </span>
);

const Like = ({ count }) => (
    <span className="like-button">
        <i className="fa fa-heart"/>
        {count > 0 &&
            <span className="like-count">
                {count}
            </span>}
    </span> 
);

const MoreOptions = () => (
    <i className="fa fa-ellipsis-h more-options-button"/>
);

ReactDOM.render(
    <Tweet tweet={testTweet}/>,
    document.querySelector('#root')
);

