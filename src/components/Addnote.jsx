// import React, { useState } from "react";

// function Addnote() {
//   const [note, setNote] = useState("");

//   const addNote = async (e) => {
//     e.preventDefault();

//     try {
//       await fetch(
//         "https://firenode-af7e7-default-rtdb.firebaseio.com/notes.json",
//         {
//           method: "POST",
//           body: JSON.stringify(note),
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       setNote("");
//     } catch (err) {
//       console.error(err); // Log error details for debugging
//       alert("Something wrong"); // Alert user of the error
//     }
//   };

//   return (
//     <section>
//       <form action="" className="card" onSubmit={addNote}>
//         <input
//           type="text"
//           placeholder="add note here"
//           value={note}
//           onChange={(e) => setNote(e.target.value)}
//         />
//         <button className="sub">Add notes</button>
//       </form>
//     </section>
//   );
// }

// export default Addnote;
import React, { useState } from "react";

function Addnote({ getnote }) {
  const [note, setNote] = useState("");
  let [error, setError] = useState(false);

  let addNote = async (e) => {
    e.preventDefault();
    setError(false);
    if (note.trim().length === 0) {
      setError(true);
      alert("input something");
      return;
    }

    try {
      await fetch(
        "https://firenode-af7e7-default-rtdb.firebaseio.com/notes.json",
        {
          method: "POST",
          body: JSON.stringify(note),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setNote("");
      getnote();
      setError(false);
    } catch (e) {
      alert("Something wrong");
    }
  };
  // getnote();
  return (
    <section>
      <form action="" onSubmit={addNote} className="card">
        <input
          type="text"
          placeholder="add note here"
          value={note}
          onChange={(e) => {
            setNote(e.target.value);
          }}
        />
        {error && alert("input something")}
        <button> Add Notes </button>
      </form>
    </section>
  );
}

export default Addnote;
