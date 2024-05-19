// HebrewLink.js
import React from 'react';

class HebrewLink extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        window.location.href = this.props.loginPage;
    }

    render() {
        return (
            <div className="link-container">
                <a href="./pages/Login" className="link" onClick={this.handleClick}>{this.props.text}</a>
            </div>
        );
    }
}

export default HebrewLink;
