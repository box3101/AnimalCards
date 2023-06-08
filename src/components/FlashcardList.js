import React, { useEffect, useState } from "react";
import Flashcard from "./Flashcard";
import '../styles/FlashcardList.css';

function FlashcardList({ cards, audio, setAudio }) {

  // button 활성화
  let [isActive,setIsActive] = useState("");

  // 선택된 카테고리 상태 저장
  let [selectedCategory, setSelectedCategory] = useState("전체");

  // // 카테 고리별로 동물 필터링
  let filterCards = selectedCategory == "전체" 
  ? cards
  : cards.filter(card => card.category == selectedCategory)
  

  // // 카테고리 선택 핸들러
  function handleCategorySelect(category) {
    setSelectedCategory(category);
  }

  let [flipCardID, setFlipCardID] = useState(null);
  let [showCount, setShowCount] = useState(15);

  function handleShowMore(e) {
    setShowCount(showCount + 5);
  }

  return (
    <>
      {/* 카테고리 선택 영역 */}
      <div className="category-selector">
        <button className={selectedCategory == "전체" ? "on" : ""} onClick={() => { handleCategorySelect("전체") }}>전체</button>
        <button className={selectedCategory == "애완,가축" ? "on" : ""} onClick={() => { handleCategorySelect("애완,가축") }}>애완,가축</button>
        <button className={selectedCategory == "야생동물" ? "on" : ""} onClick={() => { handleCategorySelect("야생동물") }}>야생동물</button>
        <button className={selectedCategory == "새" ? "on" : ""} onClick={() => { handleCategorySelect("새") }}>새</button>
        <button className={selectedCategory == "곤충" ? "on" : ""} onClick={() => { handleCategorySelect("곤충") }}>곤충</button>
      </div>

      <div className="flashcard-list">
        {
          filterCards.slice(0, showCount).map((card) => <Flashcard key={card.id} card={card} flipCardID={flipCardID} setFlipCardID={setFlipCardID} audio={audio} setAudio={setAudio} />)
        }
      </div>

      {
        showCount >= filterCards.length
          ? null
          : <div className="btn-wrap">
            <button onClick={handleShowMore}>+ 더보기</button>
          </div>
      }
    </>
  )
}

export default FlashcardList; 