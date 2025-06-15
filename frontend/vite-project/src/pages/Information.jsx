import React from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import './Information.css';
import volka from '../assets/image/fighter/volka.png';
import ruler from '../assets/icon/ruler.png'
import agee from '../assets/icon/agee.png'


const fighter = {
  name: 'Alexander Volkanovski',
  nickname: 'The Great',
  division: 'Featherweight Division',
  record: '25-3-0',
  isChampion: true,
  image: volka,
  height: "5'6\"",
  reach: "71.5\"",
  age: 35,
  stats: [
    { attribute: 'Striking', value: 92 },
    { attribute: 'Grappling', value: 78 },
    { attribute: 'Cardio', value: 85 },
    { attribute: 'Power', value: 86 },
    { attribute: 'Speed', value: 90 },
    { attribute: 'Defense', value: 83 },
  ],
  history: [
    {
      result: 'L',
      fighter: 'Alexander Volkanovski',
      opponent: 'Ilia Topuria',
      method: 'KO (Punch) - Round 2 • 3:32',
      event: 'UFC 298',
      date: 'Feb 17, 2024',
    },
    {
      result: 'L',
      fighter: 'Alexander Volkanovski',
      opponent: 'Islam Makhachev',
      method: 'Decision (Unanimous) - Round 5 • 5:00',
      event: 'UFC 294',
      date: 'Oct 21, 2023',
    },
    {
      result: 'W',
      fighter: 'Alexander Volkanovski',
      opponent: 'Yair Rodriguez',
      method: 'TKO (Punches) - Round 3 • 4:19',
      event: 'UFC 290',
      date: 'Jul 8, 2023',
    },
  ],
};
const Information = () => {
  const {
    name,
    nickname,
    division,
    record,
    isChampion,
    stats,
    image,
    height,
    reach,
    age,
    history,
  } = fighter;

  return (
    <div className="fighter-info-wrapper">
      {/* Fighter Overview */}
      <div className="fighter-top-section">
        <div className="fighter-image-card">
          <img src={image} alt={name} />
          <button className="compare-btn">👥 Compare Fighter</button>
        </div>

        <div className="fighter-main-info">
          <div className="nickname">"{nickname}"</div>
          <h1>{name}</h1>
          <div className="labels">
            <span className="division-label">{division}</span>
            {isChampion && <span className="champion-label">Champion</span>}
          </div>
          <div className="record">Record: <span>{record}</span></div>

          <div className="fighter-facts">
            <div className="fact-item">
                <img src={ruler} alt="height icon" className="fact-icon" />
                <div>
                    <strong>Height</strong><br />{height}
                </div>
            </div>
            <div className="fact-item">
                <img src={ruler} alt="reach icon" className="fact-icon" />
                <div>
                    <strong>Reach</strong><br />{reach}
                </div>
            </div>
            <div className="fact-item">
                <img src={agee} alt="age icon" className="fact-icon" />
                <div>
                    <strong>Age</strong><br />{age}
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fighter Statistics */}
      <div className="fighter-stats-section">
        <h2>Fighter Statistics</h2>
        <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={stats}>
          <PolarGrid />
          <PolarAngleAxis dataKey="attribute" />
          <PolarRadiusAxis angle={30} domain={[0, 100]} />
          <Radar name={name} dataKey="value" stroke="#f44336" fill="#f44336" fillOpacity={0.6} />
        </RadarChart>
        <p className="stat-note">Each attribute is rated on a scale of 0-100</p>
      </div>

      {/* Fight History */}
      <div className="fight-history-section">
        <h2>Fight History</h2>
        {history.map((fight, index) => (
          <div className="fight-card" key={index}>
            <div className={`result-circle ${fight.result === 'W' ? 'win' : 'loss'}`}>
              {fight.result}
            </div>
            <div className="fight-details">
              <strong>{fight.fighter}</strong>
              <div>VS</div>
              <strong>{fight.opponent}</strong>
              <div>{fight.method}</div>
              <div>{fight.event}</div>
            </div>
            <div className="fight-date">{fight.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Information