import React, { Component } from "react";
import FriendCard from "./components/DinoCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Dino from "./Dino.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    Dino
  };

  removeDino = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const Dino = this.state.Dino.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ Dino });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {this.state.Dino.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
