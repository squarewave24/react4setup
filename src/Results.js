import React from "react";
import pf from "petfinder-client";
import Pet from "./Pet";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class Results extends React.Component {
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
        // console.log("pets data ", data);
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
      <div className="search">
        {this.state.pets.map(pet => {
          return (
            <Pet
              key={pet.id}
              animal={pet.animal}
              name={pet.name}
              breed={pet.breed}
              media={pet.media}
              location={`${pet.contact.city}, ${pet.contact.state}`}
              id={pet.id}
            />
          );
        })}
      </div>
    );
  }
}

export default Results;
