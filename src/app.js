const Pet = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name)
  ]);
};

class App extends React.Component {
  handleTitleClick() {
    alert("title");
  }

  render() {
    return React.createElement("div", {}, [
      React.createElement(
        "h1",
        { onClick: this.handleTitleClick },
        "Adopt Me!"
      ),
      React.createElement(Pet, {
        name: "Luna",
        animal: "dog",
        breed: "Havanese"
      }),
      React.createElement(Pet, {
        name: "Pundit",
        animal: "dog",
        breed: "Havanese"
      })
    ]);
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
