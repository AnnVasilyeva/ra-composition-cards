import './App.css';
import React from 'react';
import {nanoid} from 'nanoid';
import CardsList from "./components/CardsList";
import Card from "./components/Card";


function App() {
  const cards = [
    {
      title: 'Card title',
      text: 'Some quick example text to build on the card title and make up the bulk of the ' + 'card\'s content.'
    },
    {
      title: 'Special title treatment',
      text: 'With supporting text below as a natural lead-in to additional content.'
    }
  ]
  return (
    <div className="App">
      <CardsList key={nanoid()}>
        <Card id={nanoid()} image={'http://placehold.it/318x180/'} item={cards[0]}/>
        <Card id={nanoid()} item={cards[1]}/>
      </CardsList>
    </div>
  );
}

export default App;
