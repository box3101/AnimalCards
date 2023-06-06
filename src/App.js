import React, { useState, useEffect } from 'react';
import FlashcardList from './components/FlashcardList';
import data from './data';

const App = () => {

  let [cards, setCards] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setCards(data);
    setLoading(false);
  }, [])


  return (
    loading ? <div className='loader'></div> :
      <div>
        <h1>Animal Flashcards</h1>
        <FlashcardList cards={cards} />
      </div>
  );
}

export default App;
