import React, { useState } from "react";
import Flashcard from "./Flashcard";
import '../styles/FlashcardList.css';

function FlashcardList({ cards }) {

  let [flipCardID, setFlipCardID] = useState(null);
  let [showCount, setShowCount] = useState(15);

  function handleShowMore(e) {
    e.preventDefault();
    setShowCount(showCount + 5);
  }

  return (
    <>
      <div className="flashcard-list">
        {
          cards.slice(0, showCount).map((card) => <Flashcard card={card} flipCardID={flipCardID} setFlipCardID={setFlipCardID} />)
        }
      </div>

      {
        showCount >= cards.length
          ? null
          : <div className="btn-wrap">
            <button onClick={handleShowMore}>+ 더보기</button>
          </div>
      }
    </>
  )
} 
 
export default FlashcardList; 