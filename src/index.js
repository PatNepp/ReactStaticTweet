import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import moment from 'moment';
import PropTypes from 'prop-types'

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

Tweet.propTypes = {
    tweet: PropTypes.shape({
        message: PropTypes.string,
        gravatar: PropTypes.string,
        author: PropTypes.shape({
            handle: PropTypes.string,
            name: PropTypes.string
        }),
        likes: PropTypes.number,
        retweet: PropTypes.number,
        timestamp: PropTypes.string
    })
}

const testTweet = {
    message: "Something about cats and hiking. Hooray for React! :)",
    gravatar: "42135a315f75a04c2468fc518e3424d3",
    author: {
        handle: "PatrickNepp",
        name: "Patrick Nepp"
    },
    likes: 2,
    retweet: 18,
    timestamp: "2021-01-06 19:56:30"
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

Avatar.propTypes = {
    hash: PropTypes.string
}

function Message({ text }) {
    return (
        <div className="message">
            {text}
        </div>
    );
}

Message.propTypes = {
    text: PropTypes.string
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

Author.propTypes = {
    author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        handle: PropTypes.string.isRequired
    }).isRequired
};

const Time = ({ time }) => {
    const timeString = moment(time).fromNow();
    return (
        <span className="time">
            {timeString}
        </span>
    )  
};

Time.propTypes = {
    time: PropTypes.string
}

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

Retweet.propTypes = {
    count: PropTypes.number
}

const Like = ({ count }) => (
    <span className="like-button">
        <i className="fa fa-heart"/>
        {count > 0 &&
            <span className="like-count">
                {count}
            </span>}
    </span> 
);

Like.propTypes = {
    count: PropTypes.number
}

const MoreOptions = () => (
    <i className="fa fa-ellipsis-h more-options-button"/>
);

ReactDOM.render(
    <Tweet tweet={testTweet}/>,
    document.querySelector('#root')
);

