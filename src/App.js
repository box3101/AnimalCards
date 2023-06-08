import React, { useState, useEffect } from 'react';
import FlashcardList from './components/FlashcardList';
import data from './data';
import { FiArrowUpCircle } from 'react-icons/fi'; // 추가
import LanguageSwitcher from './components/LanguageSwitcher';
import { changeLanguage } from './i18n/i18nextConfig';

const App = () => {

  // 언어 변경
  let [language, setLanguage] = useState('ko'); // 기본 언어를 한국어로 설정

  // 언어 변경함수
  function changeLanguage(lang){
    setLanguage(lang);
  }

  // 데이터 저장
  let [cards, setCards] = useState([]);
  // 로딩바
  let [loading, setLoading] = useState(true);
  // 이미지로드카운터 imageLoadCount
  let [imageLoadCount, setImageLoadCount] = useState(0);
  // 전체 이미지 수
  let totalImage = data.length;
  // 오디오 정지,시작
  let [audio, setAudio] = useState(null);

  useEffect(() => {
    setCards(data);
  }, [])

  // 전체이미지 = 로드된카운트가 일치시 로딩바 없앰
  useEffect(() => {
    if (totalImage === imageLoadCount) {
      setLoading(false)
    }
  }, [imageLoadCount, totalImage])

  // 이미지가 로딩되었을때 실행되는 함수 handleImageLoad
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
              <LanguageSwitcher changeLanguage={changeLanguage} />
              <h1>Animal flashcards</h1>
              <FlashcardList cards={cards} audio={audio} setAudio={setAudio} />
              <button className="scroll-top-btn" onClick={scrolltoTop}>
                <FiArrowUpCircle size={30} />
              </button>
            </>
          )
      }
      {/* 모든 이미지 로드를 감지하여 imageLoadCount 상태를 업데이트 map으로 돌려 onLoad만 보이게 */}
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
