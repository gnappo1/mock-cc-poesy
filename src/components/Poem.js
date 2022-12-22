// import React from "react";

function Poem({id, title, content, author}) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>
        <strong>- By {author}</strong>
      </p>
      <button>Mark as read</button>
    </div>
  );
}

export default Poem;
