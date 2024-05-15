'use client';

import { useParallax } from "react-scroll-parallax";
import "./page.scss";

export default function Home() {
  
  const parallaxComet = useParallax({
    translateX: [0, '100%'],
    translateY: [0, '1000'],
  });

  const parallaxRocket = useParallax({
    translateX: [0, 50],
    translateY: [0, -500],
    rotate: [0, 60]
  });

  const parallaxStatistic = useParallax({
    translateY: [200, 0],
  });

  const parallaxList = useParallax({
    translateY: [300, 0],
  });

  const parallaxMoon = useParallax({
    rotate: [0, 90]
  });

  return (
    <main className='main'>
      <div className="parallax">
        <div className="parallax-image">
          <img src="/planet.png" alt="planet" />
        </div>
        <div className="parallax-content">
          <div className="comet" ref={parallaxComet.ref}>
            <img src="/comet.png" alt="comet"/>
          </div>
          <section className='section'>
            <div className="container first-screen">
              <div className="top-buttons">
                <span>Leaderboard</span>
                <button>Buy Spice AI</button>
              </div>
              <h1>
                A new economic primitive for funding  decentralized AI
              </h1>
              <p>
                We track, rank and pay for the best open source decentralized LLMs to compete against OpenAI
              </p>
              <button>Buy Spice AI</button>
              <div className="statistic-items" ref={parallaxStatistic.ref} >
                <div className="item">
                  <div className="value">
                    10,873
                  </div>
                  <span>
                    LLM models
                  </span>
                </div>
                <div className="item">
                  <div className="value">
                    $72,470,728
                  </div>
                  <span>
                    paid to data scientists
                  </span>
                </div>
                <div className="item">
                  <div className="value">
                    $72,470,728
                  </div>
                  <span>
                    paid to data scientists
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section className='section'>
            <div className="container">
              <h2>
                Crowdsourcing our collective intelligence to build the best AI
              </h2>
              <p>
                Open source AIs have been lagging in development behind OpenAI with billions of dollars.
                <br/>
                We run competitions between AI models to find and pay for the best AI model. 
                <br/>
                Users will be able to access the best AI models.
              </p>
              <button>Use the cutting edge AI</button>
            </div>
          </section>
          <section className='section'>
            <div className="container">
              <div className="rocket">
                <img src="/rocket.png" alt="pocket" className='rocket' ref={parallaxRocket.ref}/>
              </div>
              <h3>Projects integrated into the Arrakis AI Ecosystem</h3>
              <ul ref={parallaxList.ref}>
                <li><img src="/logo-1.png" alt="logo-1" /></li>
                <li><img src="/logo-2.png" alt="logo-2" /></li>
                <li><img src="/logo-3.png" alt="logo-3" /></li>
                <li><img src="/logo-4.png" alt="logo-4" /></li>
              </ul>
            </div>
          </section>
        </div>
      </div>
      <section className='section moon-section'>
        <div className="container">
          <div>
            <h3>Text here</h3>
            <p>
              Every month, we run a competition between all the AI models submitted on a leaderboard.
              The best model will be featured and will earn tokens.
            </p>
            <button>Read Whitepaper</button>
          </div>
          <div className='moon'>
            <img src="/moon.png" alt="moon" ref={parallaxMoon.ref}/>
          </div>
        </div>
      </section>
      <footer>
        <img src="/space.png" alt="space"/>
      </footer>
    </main>
  )
}