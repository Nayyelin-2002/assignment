import React from "react";

function Navbar({ getnote, totalnotes }) {
  return (
    <section className="nav">
      <h1>Fire Node</h1>
      <button onClick={getnote}>Show notes</button>
      <p className="button">
        Total notes - <span>{totalnotes}</span>
      </p>
    </section>
  );
}

export default Navbar;
