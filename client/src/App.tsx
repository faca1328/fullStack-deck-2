import { useEffect, useState } from "react"
import { MainForm } from "./components/MainForm"
import { MainDecks } from "./components/MainDecks";
import { DECKS } from "./types";


function App() {
  const [decks, setDecks] = useState<DECKS[]>([])

  useEffect(() => {

    async function fetchDecks(){

      await fetch("http://localhost:3000/decks")
        .then(response => response.json())
        .then(data => setDecks(data))
        .catch(err => console.log(err));        

    }

    fetchDecks();
  }, [decks])



  return (
    <>
      <MainDecks decks={decks} />
      <MainForm />
    </>
  )
}

export default App
