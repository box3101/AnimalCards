import React, { useEffect, useState } from "react";
import '../styles/Flashcard.css';

function Flashcard({ card, flipCardID, setFlipCardID }) {

  // 각 카드가 현재 뒤집혀 있는지 아닌지를 판단
  let isFlip = card.id === flipCardID;

  function handleCardClick() {
    if (!isFlip) setFlipCardID(card.id)
    else setFlipCardID(null);
  }

  return (
    <>
      <div className="flashcard-wrap">
        <div className={`flashcard ${isFlip ? 'flip' : null}`} onClick={() => { handleCardClick() }}>
          <div className="front">
            <img src={card.image} className='flashcard-img' />
          </div>
          <div className="back">
            {card.name}
          </div>
        </div>
      </div>
    </>
  )
}

export default Flashcard;