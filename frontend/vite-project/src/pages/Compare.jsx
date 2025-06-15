import React, { useState } from 'react';
import './Compare.css';
import searchIcon from '../assets/icon/search.png';
import fighterData from './fighterData';

const getAllFighters = () => {
  const fighters = [];
  Object.values(fighterData).forEach(({ champion, contenders }) => {
    if (champion) fighters.push(champion);
    if (contenders) fighters.push(...contenders);
  });
  return fighters;
};

const Compare = () => {
  const [fighter1, setFighter1] = useState('');
  const [fighter2, setFighter2] = useState('');
  const [suggestions1, setSuggestions1] = useState([]);
  const [suggestions2, setSuggestions2] = useState([]);

  const allFighters = getAllFighters();

  const handleInputChange = (text, setText, setSuggestions) => {
    setText(text);
    if (text.length === 0) {
      setSuggestions([]);
    } else {
      const filtered = allFighters.filter(f =>
        f.name.toLowerCase().includes(text.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5)); // Limit to 5 suggestions
    }
  };

  const selectSuggestion = (name, setText, setSuggestions) => {
    setText(name);
    setSuggestions([]);
  };

  return (
    <div className="compare-container">
      <h2 className="compare-title">Fighter Comparison</h2>
      <div className="compare-inputs">
        <div className="search-box">
          <img src={searchIcon} alt="search" className="search-icon" />
          <input
            type="text"
            value={fighter1}
            onChange={(e) =>
              handleInputChange(e.target.value, setFighter1, setSuggestions1)
            }
            placeholder="Search Fighter 1"
          />
          {suggestions1.length > 0 && (
            <ul className="suggestions">
              {suggestions1.map((f, idx) => (
                <li key={idx} onClick={() => selectSuggestion(f.name, setFighter1, setSuggestions1)}>
                  {f.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        <button className="compare-button">Start Comparison</button>

        <div className="search-box">
          <img src={searchIcon} alt="search" className="search-icon" />
          <input
            type="text"
            value={fighter2}
            onChange={(e) =>
              handleInputChange(e.target.value, setFighter2, setSuggestions2)
            }
            placeholder="Search Fighter 2"
          />
          {suggestions2.length > 0 && (
            <ul className="suggestions">
              {suggestions2.map((f, idx) => (
                <li key={idx} onClick={() => selectSuggestion(f.name, setFighter2, setSuggestions2)}>
                  {f.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

<<<<<<< Updated upstream
export default Compare;
=======
export default Compare;
>>>>>>> Stashed changes
