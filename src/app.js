import React from "react";
import { render } from "react-dom";
import pf from "petfinder-client";
import Pet from "./Pet";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class App extends React.Component {
  componentDidMount() {
    const promise = petfinder.breed.list({ animal: "dog" });

    promise.then(console.log, console.error);
  }
  render() {
    return (
      <div>
        <h1>ADopt me!</h1>
        <Pet name="Luna" animal="dog" breed="Havaneese" />
        <Pet name="Pundit" animal="dog" breed="Puddle" />
        <Pet name="Cezar" animal="dog" breed="Cocker Spaniel" />
      </div>
    );
  }
}

render(React.createElement(App), document.getElementById("root"));
