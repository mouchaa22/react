import React, { Component } from "react";
class Phrase extends Component {
  constructor() {
    super();
    this.state = {
      citation: "Le courage n'est pas l'absence de peur, mais la capacité de vaincre ce qui fait peur",
      citationInitiale: "Le courage n'est pas l'absence de peur, mais la capacité de vaincre ce qui fait peur",
    };}
  transformerEnMajuscule = () => {
    this.setState({ citation: this.state.citation.toUpperCase() });
  };
  reinitialiserCitation = () => {
    this.setState({ citation: this.state.citationInitiale });
  };
  render() {
    return (
      <div className="phrase-container">
        <p>{this.state.citation}</p>
        <button onClick={this.transformerEnMajuscule}>Transformer</button>
        <button onClick={this.reinitialiserCitation}>Réinitialiser</button>
      </div>
    );}}
export default Phrase;
