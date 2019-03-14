import React, { Component } from "react";

import Wrapper from "./components/Wrapper";
import FriendsCard from "./components/FriendsCard";
import friends from "./friends.json";
import Header from "./components/Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: friends,
      topScore: 0,
      currentScore: 0
    };
    this.checkIfClicked = this.checkIfClicked.bind(this);
  }

  checkIfClicked(id) {
    // create a copy of the cards and use a random method to sort the array
    let clickedFriends = this.state.friends.filter(
      friends => friends.id === id
    )[0];
    let friendsCopy = this.state.friends.slice().sort(function(a, b) {
      return 0.5 - Math.random();
    });
    // if a card has not been clicked, set its clicked state to true
    if (!clickedFriends.clicked) {
      clickedFriends.clicked = true;
      friendsCopy[
        friendsCopy.findIndex(friends => friends.id === id)
      ] = clickedFriends;

      // set the state and increment the counter
      this.setState({
        friends: friendsCopy,
        currentScore: this.state.currentScore + 1,
        topScore:
          this.state.currentScore + 1 > this.state.topScore
            ? this.state.currentScore + 1
            : this.state.topScore
      });
    }

    // if a card has been clicked already, then set its click to false and reset the game
    else {
      let resetFriendsCopy = friendsCopy.map(friends => {
        return {
          id: friends.id,
          image: friends.image,
          clicked: false
        };
      });
      this.setState({
        friends: resetFriendsCopy,
        currentScore: 0
      });
    }
  }

  // render the header, score, wrapper, and footer on the page using the current state values
  // render the header, score, wrapper, and footer on the page using the current state values
  render() {
    return (
      <div className="container">
        <Header
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
        />
        <Wrapper>
          {this.state.friends.map(friends => (
            <FriendsCard
              checkIfClicked={this.checkIfClicked}
              id={friends.id}
              image={friends.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
