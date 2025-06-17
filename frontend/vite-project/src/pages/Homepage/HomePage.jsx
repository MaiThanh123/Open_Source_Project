import React, { useState } from 'react';
import fightNight from '../../assets/icon/fight-night.png';
import fight1future from '../../assets/image/home/future/fight1.png';
import fight1past from '../../assets/image/home/past/fight1.png';
import fight2future from '../../assets/image/home/future/fight2.png';
import fight2past from '../../assets/image/home/past/fight2.png';
import fight3future from '../../assets/image/home/future/fight3.png';
import fight3past from '../../assets/image/home/past/fight3.png';
import fight4future from '../../assets/image/home/future/fight4.png';
import fight4past from '../../assets/image/home/past/fight4.png';
import fight5future from '../../assets/image/home/future/fight5.png';
import fight5past from '../../assets/image/home/past/fight5.png';
import { Hero } from './Hero';
import { Link } from 'react-router-dom';
import './HomePage.css';

const upcomingEvents = [
  {
    fighters: [fight1future],
    title: 'HILL VS ROUNTREE JR.',
    date: '22.06.25 / 04:00 GMT+9 / Main Card',
    location: 'Baku Crystal Hall\nBaku, Azerbaijan',
    buttons: ['HOW TO WATCH', 'TICKET'],
  },
  {
    fighters: [fight2future],
    title: 'TOPURIA VS OLIVEIRA',
    date: '29.06.25 / 11:00 GMT+9 / Main Card',
    location: 'T-Mobile Arena\nLas Vegas, NV, USA',
    buttons: ['HOW TO WATCH', 'TICKET'],
  },
  {
    fighters: [fight3future],
    title: 'LEWIS VS TEIXEIRA',
    date: '13.07.25 / 11:00 GMT+9 / Main Card',
    location: 'Bridgestone Arena\nNashville, TN United States',
    buttons: ['HOW TO WATCH', 'TICKET'],
  },
  {
    fighters: [fight4future],
    title: 'HOLLOWAY VS POIRIER',
    date: '20.07.25 / 11:00 GMT+9 / Main Card',
    location: 'Smoothie King Center\nNew Orleans, LA United States',
    buttons: ['HOW TO WATCH', 'TICKET'],
  },
  {
    fighters: [fight5future],
    title: 'WHITTAKER VS DE RIDDER',
    date: '27.07.25 / 04:00 GMT+9 / Main Card',
    location: 'Etihad Arena\nAbu Dhabi United Arab Emirates',
    buttons: ['HOW TO WATCH', 'TICKET'],
  }
];

const pastEvents = [
  {
    fighters: [fight1past],
    title: 'USMAN VS BUCKLEY',
    date: '15.06.25 / 11:00 GMT+9 / Main Card',
    location: 'State Farm Arena\nAtlanta, GA, United States',
    buttons: ['TO SUMMARIZE', 'WATCH PLAYBACK'],
  },
  {
    fighters: [fight2past],
    title: 'FIGHTER X VS FIGHTER Y',
    date: '10.06.25 / 07:00 GMT+9 / Main Card',
    location: 'O2 Arena\nLondon, UK',
    buttons: ['TO SUMMARIZE', 'WATCH PLAYBACK'],
  },
  {
    fighters: [fight3past],
    title: 'GAMROT VS KLEIN',
    date: '01.06.25 / 10:00 GMT+9 / Main Card',
    location: 'UFC APEX\nLas Vegas, NV United States',
    buttons: ['TO SUMMARIZE', 'WATCH PLAYBACK'],
  },
  {
    fighters: [fight4past],
    title: 'BURNS VS MORALES',
    date: '18.05.25 / 08:00 GMT+9 / Main Card',
    location: 'UFC APEX\nLas Vegas, NV United States',
    buttons: ['TO SUMMARIZE', 'WATCH PLAYBACK'],
  },
  {
    fighters: [fight5past],
    title: 'MUHAMMAD VS DELLA MADDALENA',
    date: '11.05.25 / 11:00 GMT+9 / Main Card',
    location: 'Bell Centre\nMontréal QC Canada',
    buttons: ['TO SUMMARIZE', 'WATCH PLAYBACK'],
  }
];

const HomePage = () => {
  const [view, setView] = useState('upcoming');
  return (
    <div>
      <Hero />
      <div className="homepage">
        <div className="tab-selector">
            <button
                className={view === 'upcoming' ? 'active' : ''}
                onClick={() => setView('upcoming')}
            >
            UPCOMING
            </button>
            <button
                className={view === 'past' ? 'active' : ''}
                onClick={() => setView('past')}
            >
            PAST
            </button>
        </div>

      {(view === 'upcoming' ? upcomingEvents : pastEvents).map((event, index) => (
        <div className="event-card" key={index}>
          <img src={fightNight} alt="UFC Fight Night" className="ufc-logo" />
        <div className="fighters">
          <img src={event.fighters[0]} alt="Fighter 1" />
        </div>
        <div className="fight-info">
          <h2>{event.title}</h2>
          <p><strong>{event.date}</strong></p>
          <p>{event.location}</p>
        </div>
        <div className="buttons">
          {event.buttons.map((btn, i) => (
            <Link to="/watching" key={i} style={{ textDecoration: 'none' }}>
              <button>{btn}</button>
            </Link>
      ))}
      </div>
  </div>
))}
      </div>
    </div>
  );
}

export default HomePage