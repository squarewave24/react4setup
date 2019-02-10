import React from "react";
export const Pet = props => {
  //   return React.createElement("div", {}, [
  //     React.createElement("h1", {}, props.name)
  //   ]);

  return (
    <div>
      <h3>{props.name}</h3>
      <h3>{props.animal}</h3>
      <h3>{props.breed}</h3>
    </div>
  );
};

export default Pet;
