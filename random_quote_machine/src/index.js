import React from 'react';
import ReactDOM from 'react-dom';

class QuoteBox extends React.Component {
    render() {
        return (
            <div id="quote-box">
                <p id="text">Enter the quote here</p>
                <h2 id="author">Author</h2>
                <button id="new-quote">New Quote</button>
                <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">Tweet Quote</a>
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <QuoteBox />
        )
    }
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);