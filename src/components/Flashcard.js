import React, { useEffect, useState } from "react";
import '../styles/Flashcard.css';

function Flashcard({ card, flipCardID, setFlipCardID }) {

  // 각 카드가 현재 뒤집혀 있는지 아닌지를 판단
  let isFlip = card.id === flipCardID;
  let [audio, setAudio] = useState(null);

  function handleCardClick() {
    if (!isFlip) {
      setFlipCardID(card.id)

      // 동물 소리 재생
      let newAudio = new Audio(card.sound);
      newAudio.play();
      setAudio(newAudio);
    }
    else {
      setFlipCardID(null);

      // 재생중인 오디오가 있으면 멈춤
      if (audio) {
        audio.pause();
        setAudio(null);
      }
    }
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