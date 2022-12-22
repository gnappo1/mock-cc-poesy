// import React from "react";
import Poem from "./Poem";

function PoemsContainer({poems}) {
  const mappedPoems = poems.map(poem => <Poem {...poem} key={poem.id} />)
  return (
    <div className="poems-container">
      {mappedPoems}
    </div>
  );
}

export default PoemsContainer;
