import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Deck } from './components/Deck.tsx';
import './index.css'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/deck/:deckId' element={<Deck />}/>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
