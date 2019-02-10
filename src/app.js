import React from "react";
import { render } from "react-dom";
import { Pet } from "./Pet";

class App extends React.Component {
  handleTitleClick() {
    alert("title");
  }

  render() {
    // return React.createElement("div", {}, [
    //   React.createElement(
    //     "h1",
    //     { onClick: this.handleTitleClick },
    //     "Adopt Me!"
    //   ),
    //   React.createElement(Pet, {
    //     name: "Luna",
    //     animal: "dog",
    //     breed: "Havanese"
    //   }),
    //   React.createElement(Pet, {
    //     name: "Pundit",
    //     animal: "dog",
    //     breed: "Havanese"
    //   })
    // ]);

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
