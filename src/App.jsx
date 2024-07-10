// import { useState } from 'react'
import './App.css';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import { Glow, GlowCapture } from '@codaworks/react-glow';

function App() {
  return (
    <>
      <Header />
      <div className="top-part">
        <h1 title="Christopher Cornet">Christopher Cornet</h1>
        <h2>Front-End Developer</h2>
        <p>I love creating and bringing things I have in mind to life with code.</p>
        {/* 
          Drapeau de la langue actuelle du site (pouvoir la changer) +
          Afficher la langue en fonction du navigateur de l'utilisateur
        */}
      </div>
      {/* Partie Projets */}
      <main>
        <GlowCapture>
          <Glow color='hsl(39, 100%, 50%)'>
            <div className="projects">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </Glow>
        </GlowCapture>
        {/* Partie Skills */}
      </main>
      {/* Partie Contact */}
    </>
  )
}

export default App;