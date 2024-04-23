import React, { useState } from "react"



export const MainForm = () => {

  const [title, setTitle] = useState('');

  function handleCreateDeck(e: React.FormEvent) {
    e.preventDefault();
    fetch("http://localhost:3000/decks", {
      method: "POST",
      body: JSON.stringify(
        { title }
      ),
      //Aca le tenemos que decir que tipo de informacion le estamos pasando
      headers: { "Content-Type": "application/json" }
    }).then(() => setTitle(""))
      .catch((err) => console.log(err))
  };


  return (
    <form onSubmit={handleCreateDeck}>
      <label htmlFor="deck-title"> Deck Title : </label>
      <input
        id="deck-title"
        type="text"
        value={title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setTitle(e.target.value)
        }}
      />
      <button> Create Deck </button>
      <hr />
      <h1>{title}</h1>
    </form>
  )
}
