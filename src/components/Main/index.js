import React from "react";
import styles from "./main.module.css";

class Main extends React.Component {
  state = {
    smiles: [
      { id: 1, smile: "😤", vote_count: 0 },
      { id: 2, smile: "😭", vote_count: 0 },
      { id: 3, smile: "😍", vote_count: 0 },
      { id: 4, smile: "😴", vote_count: 0 }
    ]
  };

  increaseSmilesCount = id => {
    const updatedSmiles = this.state.smiles.map(smile =>
      smile.id === id ? { ...smile, vote_count: smile.vote_count + 1 } : smile
    );

    this.setState({
      smiles: updatedSmiles
    });
  };

  findWinner = () => {
    const smiles= this.state.smiles;
    const sortedSmiles = [...smiles];
    sortedSmiles.sort((a, b) => b.vote_count - a.vote_count);
    return sortedSmiles[0];
  };

  showResults = () => {
    const winner = this.findWinner();
    alert(`The winner is ${winner.smile}`);
  };

  render() {
    return (
      <div className={styles.main_wrapper}>
        {this.state.smiles.map(smile => (
          <div
            key={smile.id}
            onClick={() => this.increaseSmilesCount(smile.id)}
          >
            {smile.smile} - {smile.vote_count}
          </div>
        ))}

        <div
          className={styles.results_btn}
          onClick={this.showResults}
        >
          Show Results
        </div>
      </div>
    );
  }
}

export default Main;
