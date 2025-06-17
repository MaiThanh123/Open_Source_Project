
import './HomePage.css';
import { Link } from 'react-router-dom';
import background from '../../assets/image/home/background.jpg';

export const Hero = () => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${background})` }}>
      <h2 className="hero__subHeading">UFC 316: Dvalishvili vs O'Malley 2</h2>
      <h1 className="hero__heading">MORE SUGA</h1>
      <span className="hero__subtext">
        Sean O'Malley Talks Saturday's Title Rematch In Newark
      </span>
      <div className="hero__group-btn">
        <button className="uppercase btn--primary">
          <Link to='https://welcome.ufcfightpass.com/region/row'><span>Watch now</span></Link>
        </button>
        <button className="uppercase btn--primary" >
          <Link to='https://blog.naver.com/ufckorea_official'><span>UFC Blog</span></Link>
        </button>
      </div>
    </div>
  );
};