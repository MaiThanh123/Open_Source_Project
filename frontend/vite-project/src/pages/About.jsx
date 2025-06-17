import React from 'react'
import ufc from '../assets/image/home/ufc_about.png'
import './About.css'

const About = () => {
  return (
    <div className="about-us">
      <div
        className="about-banner"
        style={{ backgroundImage: `url(${ufc})` }}
      >
      </div>

      <div className="about-content">
        <section>
          <h2>What is UFC?</h2>
          <p>
            The Ultimate Fighting Championship (UFC) is the world's premier mixed martial arts organization. Founded in 1993, UFC showcases elite fighters competing in disciplines such as boxing, Brazilian jiu-jitsu, wrestling, Muay Thai, and more. With millions of fans across the globe, UFC has become synonymous with excellence in combat sports.
          </p>
        </section>

        <section>
          <h2>Our Mission</h2>
          <p>
            UFC's mission is to deliver the most exciting and competitive combat sports entertainment in the world, inspire the next generation of fighters, and build a global community united by passion and respect for martial arts.
          </p>
        </section>

        <section>
          <h2>UFC Timeline</h2>
          <ul>
            <li><strong>1993:</strong> UFC 1 held in Denver, Colorado – the birth of MMA competition.</li>
            <li><strong>2001:</strong> Zuffa LLC purchases UFC and begins its modern transformation.</li>
            <li><strong>2016:</strong> UFC sold to Endeavor (formerly WME-IMG) for $4 billion.</li>
            <li><strong>2023:</strong> UFC and WWE form TKO Group Holdings under Endeavor.</li>
          </ul>
        </section>

        <section>
          <h2>Legendary Fighters</h2>
          <p>
            UFC has produced some of the most iconic fighters in combat sports history, including:
          </p>
          <ul>
            <li><strong>Anderson Silva</strong> – The Spider with a record-breaking middleweight reign.</li>
            <li><strong>Georges St-Pierre</strong> – A Canadian legend with elite grappling and discipline.</li>
            <li><strong>Jon Jones</strong> – Known for his unorthodox style and dominance in light heavyweight.</li>
            <li><strong>Ronda Rousey</strong> – A trailblazer for women in MMA.</li>
            <li><strong>Conor McGregor</strong> – The Notorious showman and double champion.</li>
          </ul>
        </section>

        <section>
          <h2>Global Fanbase</h2>
          <p>
            With events broadcast to over 900 million households across 170+ countries, UFC connects fans from all walks of life. Whether you're in New York, Rio de Janeiro, Abu Dhabi, or Seoul, the Octagon unites cultures with passion, power, and discipline.
          </p>
        </section>

        <section>
          <h2>Beyond the Octagon</h2>
          <p>
            UFC is more than just fights. It's a lifestyle. From embedded fight week series, reality shows like <em>The Ultimate Fighter</em>, UFC merchandise, gyms, and a mobile app – fans can live the UFC experience 24/7.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About