
import React from 'react';
import './Toptier.css';
import ufc from '../assets/image/home/ufcHome.png';
import jones from '../assets/image/fighter/jones.png';

const Toptier = () => {
  return (
    <div className="toptier-container">
      {/* UFC Banner */}
      <div className="ufc-banner">
        <img src={ufc} alt="UFC Logo" />
      </div>

      {/* Fighter Section */}
      <div className="fighter-highlight">
        <div className="nickname">Alexander Volkanovski</div>
        <div className="fighter-img">
          <img src={jones} alt="volkanovski" />
        </div>
        <div className="fighter-info">
          <h1 className="fighter-name">Alexander Volkanovski</h1>
          <div className="fighter-title">Featherweight Champion</div>
        </div>
      </div>
      <div className="fighter-highlight">
        <div className="nickname">Islam Makhachev</div>
        <div className="fighter-img">
          <img src={jones} alt="makhachev" />
        </div>
        <div className="fighter-info">
          <h1 className="fighter-name">Islam Makhachev</h1>
          <div className="fighter-title">Lightweight Champion</div>
        </div>
      </div>
      <div className="fighter-highlight">
        <div className="nickname">Leon Edwards</div>
        <div className="fighter-img">
          <img src={jones} alt="edward" />
        </div>
        <div className="fighter-info">
          <h1 className="fighter-name">Leon Edwards</h1>
          <div className="fighter-title">Welterweight Champion</div>
        </div>
      </div>
      <div className="fighter-highlight">
        <div className="nickname">Alex Pereira</div>
        <div className="fighter-img">
          <img src={jones} alt="alex" />
        </div>
        <div className="fighter-info">
          <h1 className="fighter-name">Alex Pereira</h1>
          <div className="fighter-title">Light Heavyweight Champion</div>
        </div>
      </div>
      <div className="fighter-highlight">
        <div className="nickname">Jon Jones</div>
        <div className="fighter-img">
          <img src={jones} alt="jones" />
        </div>
        <div className="fighter-info">
          <h1 className="fighter-name">Jon Jones</h1>
          <div className="fighter-title">Heavyweight Champion</div>
        </div>
      </div>
    </div>
  );
}


export default Toptier