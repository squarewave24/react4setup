import React from "react";
import { render } from "react-dom";
import pf from "petfinder-client";
import Pet from "./Pet";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: [],
      foo: "bar"
    };
  }

  componentDidMount() {
    petfinder.pet
      .find({ output: "full", location: "New York, NY" })
      .then(data => {
        let pets;
        if (data.petfinder.pets && data.petfinder.pets.pet) {
          if (Array.isArray(data.petfinder.pets.pet)) {
            pets = data.petfinder.pets.pet;
          } else pets = [data.petfinder.pets.pet];
        } else pets = [];

        this.setState({
          pets // same as pets: pets
        });
      });
  }
  render() {
    return (
      <div>
        <h1>ADopt me!</h1>

        <div>
          {this.state.pets.map(pet => {
            return (
              <Pet
                key={pet.id}
                animal={pet.animal}
                name={pet.name}
                breed={pet.breed}
              />
            );
          })}
        </div>

        {/* <pre>
          <code>{JSON.stringify(this.state, null, 4)}</code>
        </pre> */}

        {/* <Pet name="Luna" animal="dog" breed="Havaneese" />
        <Pet name="Pundit" animal="dog" breed="Puddle" />
        <Pet name="Cezar" animal="dog" breed="Cocker Spaniel" /> */}
      </div>
    );
  }
}

render(React.createElement(App), document.getElementById("root"));
