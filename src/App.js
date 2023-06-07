import React, { useState, useEffect } from 'react';
import FlashcardList from './components/FlashcardList';
import data from './data';
import { FiArrowUpCircle } from 'react-icons/fi'; // 추가

const App = () => {

  let [cards, setCards] = useState([]);
  let [loading, setLoading] = useState(true);
  let [imageLoadCount, setImageLoadCount] = useState(0);
  let totalImage = data.length; // 전체 이미지 수

  useEffect(() => {
    setCards(data);
  }, [])

  useEffect(() => {
    if (totalImage == imageLoadCount) {
      setLoading(false)
    }
  }, [imageLoadCount, totalImage])

  function handleImageLoad() {
    setImageLoadCount(prevCount => prevCount + 1);
  }

  function scrolltoTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div>
      {
        loading
          ? (<div className='loader'></div>)
          : (
            <>
              <h1>Animal Flashcards</h1>
              <FlashcardList cards={cards} />
              <button className="scroll-top-btn" onClick={scrolltoTop}>
                <FiArrowUpCircle size={30} />
              </button>
            </>
          )
      }
      {/* 모든 이미지 로드를 감지하여 imageLoadCount 상태를 업데이트 */}
      {data.map((card, index) => (
        <img
          key={index}
          src={card.image}
          alt='이미지'
          onLoad={handleImageLoad}
          style={{ display: 'none' }}
        />
      ))}
    </div>

  );
}

export default App;
