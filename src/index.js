import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

function Tweet() {
    return (
        <div className="tweet">
            <Avatar />
            <div className="content">
                <Author /><Time />
                <Message />
                <div className="buttons">
                    <Reply />
                    <Retweet />
                    <Like />
                    <MoreOptions />
                </div>
            </div>  
        </div>
    );
}

function Avatar() {
    return (
        <img 
        src="https://www.gravatar.com/avatar/42135a315f75a04c2468fc518e3424d3"
        className="avatar"
        alt="avatar" />
    );
}

function Message() {
    return (
        <div className="message">
            A static tweet made with React! WooHoo!
        </div>
    );
}

function Author() {
    return (
        <span className="author">
            <span className="name">Patrick Nepp</span>
            <span className="handle">@PatrickNepp</span>
        </span>
    )
}

const Time = () => (
    <span className="time">3h ago</span>
);

const Reply = () => (
    <i className="fa fa-reply reply-button"/>
);

const Retweet = () => (
    <i className="fa fa-retweet retweet-button"/>
);

const Like = () => (
    <i className="fa fa-heart like-button"/>
);

const MoreOptions = () => (
    <i className="fa fa-ellipsis-h more-options-button"/>
);

ReactDOM.render(
    <Tweet />,
    document.querySelector('#root')
);

