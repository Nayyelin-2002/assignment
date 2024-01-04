// import React, { useCallback, useState } from "react";
// import Addnote from "./components/Addnote";
// import Note from "./components/Note";
// import Navbar from "./components/Navbar";
// function App() {
//   const [notes, setNotes] = useState([]);
//   const getnote = async () => {
//     let response = await fetch(
//       "https://firenode-af7e7-default-rtdb.firebaseio.com/notes.json"
//     );
//     let notes = await response.json();
//     let modi = [];

//     for (let key in notes) {
//       modi.push(notes[key]);
//       setNotes(modi);
//     }
//   };
//   return (
//     <>
//       <Navbar getnote={getnote} />
//       <Addnote />
//       {notes.map((note, index) => {
//         return <Note key={index} note={note} />;
//       })}
//     </>
//   );
// }

// export default App;
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Note from "./components/Note";
import Addnote from "./components/Addnote";
function App() {
  const [notess, setNotess] = useState([]);

  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);

  let getnote = async () => {
    try {
      setLoading(true);
      let response = await fetch(
        "https://firenode-af7e7-default-rtdb.firebaseio.com/notes.json"
      );

      if (!response.ok) {
        throw new Error("Can't connect to firebase");
      }
      let data = await response.json();

      let modify = [];
      for (let key in data) {
        modify.push({
          id: key,
          note: data[key],
        });
      }
      setNotess(modify);
    } catch (er) {
      setError(er.message);
    }
    setLoading(false);
  };
  // getnote();
  return (
    <section>
      <Navbar getnote={getnote} totalnotes={notess.length} />

      {error && (
        <>
          <p className="load error">{error}</p>
        </>
      )}
      {loading && (
        <>
          <p className="load">Loading datas</p>
        </>
      )}
      {!loading && !error && (
        <>
          <Addnote getnote={getnote} />
          {notess.map((notes) => {
            return <Note notes={notes} getnote={getnote} />;
          })}
          {notess.length === 0 && (
            <>
              <h1>Add some notes</h1>
            </>
          )}
        </>
      )}
      {/* <Note /> */}
    </section>
  );
}

export default App;
