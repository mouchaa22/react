import React, { Component } from "react";
class Compteur extends Component {
  constructor() {
    super();
    this.state = {
      compteur: 0
    };}
  incrementer = () => {
    this.setState({ compteur: this.state.compteur + 1 });
  };
  decrementer = () => {
    this.setState({ compteur: this.state.compteur - 1 });
  };
  reinitialiser = () => {
    this.setState({ compteur: 0 });
  };
  render() {
    return (
      <div className="compteur">
        <h1>Compteur : {this.state.compteur}</h1>
        <button onClick={this.incrementer}>Incrémenter</button>
        <button onClick={this.decrementer}>Décrémenter</button>
        <button onClick={this.reinitialiser}>Réinitialiser</button>
      </div>
    );}}
export default Compteur;

