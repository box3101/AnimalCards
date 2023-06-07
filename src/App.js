import React, { useState, useEffect } from 'react';
import FlashcardList from './components/FlashcardList';
import data from './data';
import { FiArrowUpCircle } from 'react-icons/fi'; // 추가

const App = () => {

  let [cards, setCards] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setCards(data);
    setLoading(false);
  }, [])

  function scrolltoTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    loading ? <div className='loader'></div> :
      <div>
        <h1>Animal Flashcards</h1>
        <FlashcardList cards={cards} />
        <button className="scroll-top-btn" onClick={scrolltoTop}>
          <FiArrowUpCircle size={30} />
        </button>
      </div>
  );
}

export default App;
