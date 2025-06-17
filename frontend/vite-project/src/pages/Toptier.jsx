import React, { useEffect, useState } from "react";
import "./Toptier.css";
import ufc from "../assets/image/home/ufcHome.png";

const Toptier = () => {
  const [fighters, setFighters] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRankings = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://127.0.0.1:3001/api/fighters`);
        const data = await response.json();

        if (data.length) {
          setFighters(data.slice(0, 8));
        }
      } catch (error) {
        console.error("Error fetching rankings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRankings();
  }, []);

  return (
    <div className="toptier-container snap-y snap-mandatory overflow-y-scroll h-screen scroll-smooth no-scrollbar">
      <div className="ufc-banner snap-center h-full flex items-center">
        <img className="h-40" src={ufc} alt="UFC Logo" />
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        fighters.map((fighter, index) => (
          <div
            className="fighter-highlight snap-center h-screen flex flex-col items-center justify-center"
            key={index}
          >
            <div className="fighter-img">
              <img src={fighter.image_url} alt={fighter.name} />
            </div>
            <div className="fighter-info">
              <h1 className="fighter-name">{fighter.name}</h1>
              <div className="fighter-title">
                {fighter.title || fighter.weight_class}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Toptier;
