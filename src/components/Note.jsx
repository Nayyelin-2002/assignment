import React from "react";
import Deleteicon from "../svgs/Deleteicon";

function Note({ notes, getnote }) {
  // const [note, id] = notes;
  const deletenote = async () => {
    try {
      let response = await fetch(
        `https://firenode-af7e7-default-rtdb.firebaseio.com/notes/${notes.id}.json`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Something wrong to delete this");
      }
      getnote();
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <div className="card card-ctr">
      <h1 className="data">+{notes.note}</h1>
      <div onClick={deletenote}>
        <Deleteicon />
      </div>
    </div>
  );
}

export default Note;
