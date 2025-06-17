import React from 'react'
import './Watching.css'

const Watching = () => {
  return (
    <div className="watch-container">
      {/* Main Card Section */}
      <div className="watch-section">
        <h3 className="section-title">Main Card</h3>
        <p className="time-text">Undercard<br />01:00 GMT+9</p>
        <a href="https://welcome.ufcfightpass.com/region/row" className="btn-outline">WATCH ON UFC FIGHT PASS</a>

        <hr className="divider" />

        <p className="time-text">Main Card<br />04:00 GMT+9</p>
        <a href="https://www.tving.com/onboarding" className="btn-filled">WATCH ON TVING, TVN SPORTS</a>
      </div>

      {/* Ticket Section */}
      <div className="watch-section">
        <h3 className="section-title">Ticket</h3>
        <p className="time-text">23.06.25 / 15:00 GMT+9<br />Pre-Sale - UFC Fight Club</p>
        <hr className="divider" />
        <p className="time-text">24.06.25 / 15:00 GMT+9<br />Pre-Order - UFC Newsletter</p>
        <hr className="divider" />
        <p className="time-text">25.06.25 / 15:00 GMT+9<br />For Sale - Public</p>

        <a href="https://iticket.az/en/events/sport/ufc-fight-night-baku/152366" className="btn-filled">VALID</a>
      </div>
    </div>

  )
}

export default Watching