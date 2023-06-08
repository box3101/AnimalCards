import React, { useEffect, useState } from "react";
import '../styles/Flashcard.css';
import { useDispatch } from "react-redux";
import { playAudio, stopAudio } from "../store/audioSlice";

function Flashcard({ card, flipCardID, setFlipCardID, audio ,setAudio  }) {

  // 각 카드가 현재 뒤집혀 있는지 아닌지를 판단
  let isFlip = card.id === flipCardID;

  function handleCardClick() {

    if(audio){
      audio.pause();
    }

    // 카드가 현재 뒤집혀 있지 않을때
    if (!isFlip) {
      setFlipCardID(card.id);
      const newAudio = new Audio(card.sound);
      newAudio.play();
      setAudio(newAudio);
    }
    // 뒤집혀 있을때
    else {
      setFlipCardID(null);
      setAudio(null);
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