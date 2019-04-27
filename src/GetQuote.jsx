import React, { Component } from "react";
import "./Quote.css";

export default class GetQuote extends Component {
   constructor() {
      super();
      this.state = {
         quote: "",
         author: ""
      };
   }
   change = () => {
      const colors = ["#ff9665", "#1a9f9b", "#b61381", "#64bbaa", "#3d484d", "#1acec5", "#74f016", "#a96363", "#ff9797", "#33f"];
      let random = Math.floor(Math.random() * colors.length);
      document.body.style.backgroundColor = colors[random];
   };
   componentDidMount() {
      fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
         .then(res => {
            return res.json();
         })

         .then(data => {
            let quote = data[0].quote;
            let auth = data[0].character;
            this.setState({
               quote: quote,
               author: auth
            });

            this.change();
         });
   }

   render() {
      return (
         <div id="quote-box" className="box">
            <p id="text">
               <i className="fas fa-quote-left" />
               {this.state.quote}
            </p>
            <h6 id="author">- {this.state.author}</h6>
            <div className="btn">
               <div id="new-quote" className="social">
                  <a id="tweet-quote" href="twitter.com/intent/tweet">
                     <i className="fab fa-twitter-square" />
                  </a>
                  <a href="#">
                     <i className="fab fa-tumblr-square" />
                  </a>
               </div>
               <button onClick={this.componentDidMount.bind(this)}>New One</button>
            </div>
         </div>
      );
   }
}
