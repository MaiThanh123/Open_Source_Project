import React, { useState } from 'react';
import jones from '../assets/image/fighter/jones.png';
import volka from '../assets/image/fighter/volka.png';
import arrowUp from '../assets/icon/arrowUp.png';
import arrowDown from '../assets/icon/arrowDown.png';
import './Ranking.css';

const fighterData = {
  Flyweight: {
    champion: {
      name: 'Alexandre Pantoja',
      record: '29-4-1',
      image: volka,
    },
    contenders: Array.from({ length: 10 }, (_, i) => ({
      name: `Flyweight Contender ${i + 1}`,
      record: `${22 - i}-${i}-0`,
    })),
  },
  Bantamweight: {
    champion: {
      name: 'Merab Dvalishvili',
      record: '29-4-1',
      image: volka,
    },
    contenders: Array.from({ length: 10 }, (_, i) => ({
      name: `Bantamweight Contender ${i + 1}`,
      record: `${22 - i}-${i}-0`,
    })),
  },
  Featherweight: {
    champion: {
      name: 'Alexander Volkanovski',
      record: '29-4-1',
      image: volka,
    },
    contenders: Array.from({ length: 10 }, (_, i) => ({
      name: `Featherweight Contender ${i + 1}`,
      record: `${22 - i}-${i}-0`,
    })),
  },
  Lightweight: {
    champion: {
      name: 'Islam Makhachev',
      record: '29-4-1',
      image: volka,
    },
    contenders: Array.from({ length: 10 }, (_, i) => ({
      name: `Lightweight Contender ${i + 1}`,
      record: `${22 - i}-${i}-0`,
    })),
  },
  Welterweight: {
    champion: {
      name: 'Jack Della Maddalena',
      record: '29-4-1',
      image: volka,
    },
    contenders: Array.from({ length: 10 }, (_, i) => ({
      name: `Welterweight Contender ${i + 1}`,
      record: `${22 - i}-${i}-0`,
    })),
  },
  Middleweight: {
    champion: {
      name: 'Dricus Du Plessis',
      record: '24-3-0',
      image: 'https://via.placeholder.com/50',
    },
    contenders: Array.from({ length: 10 }, (_, i) => ({
      name: `Middleweight Contender ${i + 1}`,
      record: `${21 - i}-${i}-0`,
    })),
  },
  Cruiser: {
    champion: {
      name: 'Magomed Ankalaev',
      record: '29-4-1',
      image: volka,
    },
    contenders: Array.from({ length: 10 }, (_, i) => ({
      name: `Cruiser Contender ${i + 1}`,
      record: `${22 - i}-${i}-0`,
    })),
  },
  Heavyweight: {
    champion: {
      name: 'Jon Jones',
      record: '27-1-0',
      image: jones,
    },
    contenders: Array.from({ length: 10 }, (_, i) => ({
      name: `Heavyweight Contender ${i + 1}`,
      record: `${20 - i}-${i}-0`,
    })),
  },
};

const allWeightClasses = [
  'Flyweight',
  'Bantamweight',
  'Featherweight',
  'Lightweight',
  'Welterweight',
  'Middleweight',
  'Cruiser',
  'Heavyweight',
];

const Rankings = () => {
  const [selectedClass, setSelectedClass] = useState('Heavyweight');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const data = fighterData[selectedClass];
  const champion = data?.champion;
  const contenders = data?.contenders || [];

  return (
    <div className="rankings-wrapper">
      <div className="ranking-header">{selectedClass} Division</div>

      {champion ? (
        <div className="champion-card hover-card">
          <div className="champion-avatar">C</div>
          <img className="champion-img" src={champion.image} alt={champion.name} />
          <div className="champion-info">
            <strong>{champion.name}</strong>
            <div className="record">Record: {champion.record}</div>
          </div>
        </div>
      ) : (
        <div className="no-data">Chưa có dữ liệu cho hạng cân này.</div>
      )}

      {contenders.length > 0 &&
        contenders.map((c, i) => (
          <div key={i} className="fighter-card hover-card">
            <div className="rank-circle">{i + 1}</div>
            <div>
              <strong>{c.name}</strong>
              <div className="record">Record: {c.record}</div>
            </div>
          </div>
        ))}

      <div className="weight-selector">
        <div className="selected-weight" onClick={() => setDropdownOpen(!dropdownOpen)}>
          {selectedClass}
          <img
            src={dropdownOpen ? arrowUp : arrowDown}
            alt="Toggle dropdown"
            className="arrow-icon"
          />
      </div>
        {dropdownOpen && (
          <div className="dropdown">
            {allWeightClasses.map((cls) => (
              <div
                key={cls}
                className="dropdown-item"
                onClick={() => {
                  setSelectedClass(cls);
                  setDropdownOpen(false);
                }}
              >
                {cls}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

<<<<<<< Updated upstream
export default Rankings;
=======
export default Rankings;
>>>>>>> Stashed changes
