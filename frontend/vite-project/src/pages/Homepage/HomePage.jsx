

import fightNight from '../../assets/icon/fight-night.png';
import ufc316 from '../../assets/icon/ufc-316.svg';
import background from '../../assets/image/home/background.jpg';
import { Hero } from './Hero';
import './HomePage.css';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <div className="banner">
        <div className="banner__heading">
          <h3 className="banner__pretitle">Just happened</h3>
          <h1 className="banner__title">
            Gamrot Vs <br /> Klein
          </h1>
        </div>
        <div className="banner__event">
          <img
            className="banner__fighter"
            src="https://ufc.com/images/styles/events_lastnext_athlete/s3/2025-05/BLANCHFIELD_ERIN_L_05-31.png?itok=3u1NPBCT"
          />
          <img className="banner__features" src={fightNight} />
          <img
            className="banner__fighter"
            src="https://ufc.com/images/styles/events_lastnext_athlete/s3/2025-05/BARBER_MAYCEE_R_05-31.png?itok=6LWZinvA"
          />
        </div>
        <div className="banner__separator" />
        <div className="banner__event">
          <img
            className="banner__fighter"
            src="https://ufc.com/images/styles/events_lastnext_athlete/s3/2025-01/7/DVALISHVILI_MERAB_L_BELT_01-18.png?itok=KcjsvZgk"
          />
          <img className="banner__features" src={ufc316} />
          <img
            className="banner__fighter"
            src="https://ufc.com/images/styles/events_lastnext_athlete/s3/2025-01/5/OMALLEY_SEAN_R_08-19.png?itok=s2dVR_0R"
          />
        </div>
        <div className="banner__heading">
          <h3 className="banner__pretitle">Up Next</h3>
          <h1 className="banner__title">
            Dvalishvili VS
            <br /> O'Malley 2
          </h1>
        </div>
      </div>

      <section className="features">
        <div className="features__card features__card--col">
          <div className="features__media" />
          <div className="features__group">
            <div className="features__category">Countdown</div>
            <div className="features__title">
              UFC 316 Countdown | Merab Dvalishvili
            </div>
          </div>
        </div>

        <div className="features__card features__card--row">
          <div className="features__media" />
          <div className="features__group">
            <div className="features__category">Embedded</div>
            <div className="features__title">UFC 316 Embedded | Episode 1</div>
          </div>
        </div>

        <div className="features__card features__card--full">
          <div className="features__media" />
          <div className="features__group">
            <div className="features__category">ESPN MMA</div>
            <div className="features__title">
              Merab Dvalishvili Sit Down Interview
            </div>
          </div>
        </div>

        <div className="features__card features__card--row">
          <div className="features__media" />
          <div className="features__group">
            <div className="features__category">Countdown</div>
            <div className="features__title">
              UFC 316 Countdown | Merab Dvalishvili
            </div>
          </div>
        </div>
      </section>
      <div
        className="hero hero--small"
        style={{ backgroundImage: `url(${background})` }}
      >
        <h2 className="hero__subHeading">UFC 316: Dvalishvili vs O'Malley 2</h2>
        <h1 className="hero__heading">TWO TITLE FIGHTS ONE STACKED CARD</h1>
        <span className="hero__subtext">COMING TO NEWARK JUNE 7</span>
        <div className="hero__group-btn">
          <button className="uppercase btn--primary">
            <span>ORDER UFC 316</span>
          </button>
          <button className="uppercase btn--primary">
            <span>GET TICKETS</span>
          </button>
        </div>
      </div>
      <section className="features">
        <div className="features__card features__card--row">
          <div className="features__media" />
          <div className="features__group">
            <div className="features__category">ESPN MMA</div>
            <div className="features__title">
              Kayla Harrison Sits Down with Megan Olivi | UFC 316
            </div>
          </div>
        </div>

        <div className="features__card features__card--col">
          <div className="features__media" />
          <div className="features__group">
            <div className="features__category">ESPN MMA</div>
            <div className="features__title">
              Julianna Peña Sit-Down Interview | UFC 316
            </div>
          </div>
        </div>

        <div className="features__card features__card--col">
          <div className="features__media" />
          <div className="features__group">
            <div className="features__category">Free Fight</div>
            <div className="features__title">
              Full Fight | Sean O'Malley vs Aljamain
            </div>
          </div>
        </div>

        <div className="features__card features__card--col">
          <div className="features__media" />
          <div className="features__group">
            <div className="features__category">Free Fight</div>
            <div className="features__title">
              Full Fight | Kayla Harrison vs Holly Holm
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage
