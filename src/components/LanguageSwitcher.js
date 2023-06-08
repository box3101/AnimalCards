import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = ({ changeLanguage }) => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage); // i18n 객체의 changeLanguage 함수를 호출하여 언어 변경
    changeLanguage(selectedLanguage); // 상위 컴포넌트의 언어 변경 함수 호출
  };

  return (
    <div className="language-switcher">
      <label htmlFor="language-select">Language:</label>
      <select id="language-select" onChange={handleLanguageChange}>
        <option value="ko">한국어</option>
        <option value="en">English</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
