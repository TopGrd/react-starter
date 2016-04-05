import React from 'react';
//line: 26 踩到坑.
//In vanilla javascript you would probably have onclick="somefunctionname". But not in JSX, yo need to pass a //function as stated in the error.

export default class LikeButton extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            liked: false
        }
    }

    handleClick() {
        console.log('hehe');
        this.setState({
            liked: !this.state.liked
        })
    }

    render() {
        var text = this.state.liked ? 'liked' : 'have\'t liked';

        return (
            <div className="buttonBox">
                <button onClick={this.handleClick.bind(this)}>
                    {this.props.title}
                </button>
                <p>
                    Your {text} this. Click to toggle.
                </p>
            </div>
        )
    }
}
